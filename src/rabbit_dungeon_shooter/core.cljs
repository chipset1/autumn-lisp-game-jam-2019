(ns rabbit-dungeon-shooter.core
  (:require [rabbit-dungeon-shooter.vector :as v]
            [rabbit-dungeon-shooter.enemy :as enemy]
            [rabbit-dungeon-shooter.player :as player]
            [rabbit-dungeon-shooter.dungeon :as dungeon]
            [rabbit-dungeon-shooter.particle :as particle]
            [rabbit-dungeon-shooter.assets :as assets]))

(enable-console-print!)

(def debug false)
(def tile-size 64)
(def width (* 14 tile-size))
(def height (* 9 tile-size))
(def player-bullet-speed 15)
(def bullet-size 10)
(def hud-text-pos [100 100])
(def corner-positions [[tile-size tile-size]
                       [(- width (* tile-size 2)) tile-size]
                       [tile-size (- height (* tile-size 2))]
                       [(- width (* tile-size 2)) (- height (* tile-size 2))]])
(def center-corner-positions [[(* tile-size 2) (* tile-size 2)]
                              [(- width (* tile-size 3)) (* tile-size 2)]
                              [(* tile-size 2) (- height (* tile-size 3))]
                              [(- width (* tile-size 3)) (- height (* tile-size 3))]])

(def default-room [[1 1 1 1 1 1 1 1 1 1 1 1 1 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 0 0 1]
                   [1 1 1 1 1 1 1 1 1 1 1 1 1 1]
                   ])

(defonce app-state (atom {:particles []
                          :enemies []
                          :enemy-bullets []
                          :assets {:images {}
                                   :audio {}}
                          :width width
                          :height height
                          :tile-map default-room
                          :tile-map-previous default-room
                          :default-room default-room
                          :door-spawn-chance 0.5
                          :scroll-start-time 0
                          :scroll-interval 350
                          :scroll-target-min-x 0
                          :scroll-target-min-y 0
                          :scroll-x 0
                          :scroll-y 0
                          :bounds-x width ;boundary x when to change to new room
                          :bounds-y height
                          :bullets []
                          :bullet-last-time 0
                          :bullet-interval 200
                          :player {:pos [(- (/ width 2) (/ tile-size 2))
                                         (- (/ height 2) (/ tile-size 2))]
                                   :health 6
                                   :speed 5
                                   :max-health 6}
                          :game-over? false
                          :canvas-scale 1.0
                          :health-dec-interval 1000
                          :invulnerable-flash-interval 125
                          :enemy-index -1
                          :enemy-size tile-size
                          :player-size tile-size
                          :tile-size tile-size
                          :game-state nil
                          :game-started? false
                          :game-completed? false}))


(defn tile-map-collision? [pos size]
  (let [left (v/x pos)
        right (+ (v/x pos) size)
        top (v/y pos)
        bottom (+ (v/y pos) size)]
    (or (dungeon/solid-tile? app-state left top)
        (dungeon/solid-tile? app-state left bottom)
        (dungeon/solid-tile? app-state right top)
        (dungeon/solid-tile? app-state right bottom))))

(defn aabb?
  ([pos1 size1 pos2 size2] (aabb? pos1 size1 size1 pos2 size2 size2))
  ([[x1 y1] width1 height1 [x2 y2] width2 height2]
   (and (< x1 (+ x2 width2))
        (> (+ x1 width1) x2)
        (< y1 (+ y2 height2))
        (> (+ y1 height1) y2))))


(defn bullet-hit-enemy? [b]
  (some (fn [e]
          (aabb? (:pos b)
                 bullet-size
                 (:pos e)
                 (:size e)))
        (:enemies @app-state)))

(defn out-of-room? [pos]
  (or (> (v/x pos)
         (:bounds-x @app-state))
      (< (v/x pos)
         (- (:bounds-x @app-state) width))
      (> (v/y pos)
         (:bounds-y @app-state))
      (< (v/y pos)
         (- (:bounds-y @app-state) height))))

(defn dec-player-health []
  (when (> (- (js/millis)
              (:health-dec-time @app-state))
           (:health-dec-interval @app-state))
    (swap! app-state assoc :health-dec-time (js/millis))
    (swap! app-state update-in [:player :health] #(js/max (dec %) 0)))
  (when (<= (:health (:player @app-state)) 0)
    (assets/play-sound app-state :explosion)
    (particle/enemy-dead app-state (:pos (:player @app-state)))))

(defn bullet-particles []
  (doall (map (fn [b]
                (when (or (tile-map-collision? (:pos b) bullet-size)
                          (bullet-hit-enemy? b))
                  (particle/bullet-explode app-state (:pos b))))
              (:bullets @app-state))))

(defn update-enemy-bullets []
  ;; (bullet-particles :enemy-bullets)
  (doall (map (fn [b]
                (when (aabb? (:pos b)
                             bullet-size
                             bullet-size
                             (:pos (player/hit-box app-state))
                             (:width (player/hit-box app-state))
                             (:height (player/hit-box app-state)))
                  (particle/bullet-explode app-state (:pos b))
                  (dec-player-health)))
              (:enemy-bullets @app-state)))
  (swap! app-state
         update
         :enemy-bullets
         (partial remove (fn [b]
                           (or (out-of-room? (:pos b))
                               (aabb? (:pos b)
                                      bullet-size
                                      bullet-size
                                      (:pos (player/hit-box app-state))
                                      (:width (player/hit-box app-state))
                                      (:height (player/hit-box app-state)))
                               (tile-map-collision? (:pos b) bullet-size)))))
  (swap! app-state
         update
         :enemy-bullets
         (fn [bullets]
           (map (fn [b]
                  (assoc b
                         :pos
                         (v/add (:pos b) (v/mult (:speed b) (:direction b)))))
                bullets))))

(defn update-bullets []
  (bullet-particles)
  (swap! app-state
         update
         :bullets
         (partial remove (fn [b]
                           (or (out-of-room? (:pos b))
                               (bullet-hit-enemy? b)
                               (tile-map-collision? (:pos b) bullet-size)))))
  (swap! app-state
         update
         :bullets
         (fn [bullets]
           (map (fn [b]
                  (assoc b
                         :pos
                         (v/add (:pos b) (v/mult player-bullet-speed (:direction b)))))
                bullets))))

(defn display-bullets [bullet-key]
  (doall (map (fn [bullet]
                (js/fill 255)
                (js/stroke 0)
                (js/rect (v/x (:pos bullet))
                         (v/y (:pos bullet))
                         bullet-size
                         bullet-size))
              (bullet-key @app-state))))

(defn add-enemy!
  "adds enemy at screen coordinates"
  [screen-x screen-y type]
  (swap! app-state
         update
         :enemies
         conj
         (->> (enemy/create-enemy app-state
                                  [(+ (- (:bounds-x @app-state) width)
                                      screen-x)
                                   (+ (- (:bounds-y @app-state) height)
                                      screen-y)]
                                  type)
              (enemy/defaults app-state))))

(defn spawn-enemies []
  (let [enemy-type (get [:seek
                         :udlr
                         :diagonal-move
                         :rotate-seek
                         :udlr-shoot
                         :sit-and-shoot
                         :rotate-and-shoot]
                        (:enemy-index @app-state))]
    (cond  (= :rotate-and-shoot enemy-type)
           (add-enemy! (- (/ width 2) 64)
                       (- (/ height 2)
                          180
                          (/ (:enemy-size @app-state) 4))
                       enemy-type)
           (= :sit-and-shoot enemy-type)
           (add-enemy! (- (/ width 2)
                          (/ (:enemy-size app-state) 2))
                       (- (/ height 2)
                          (/ (:enemy-size app-state) 2))
                       enemy-type)
           (= :seek enemy-type)
           (doseq [[x y] corner-positions]
             (add-enemy! x y enemy-type))
           :else
           (doseq [[x y] center-corner-positions]
             (add-enemy! x y enemy-type)))))

(defn check-enemy-tile-collision [new-enemy old-pos]
  (update new-enemy :pos (fn [new-pos]
                           (if (tile-map-collision? new-pos (:size new-enemy))
                             old-pos
                             new-pos))))

(defn enemy-out-of-room? [enemy]
  (let [x (v/x (:pos enemy))
        y (v/y (:pos enemy))
        size (:size enemy)]
    (or (> x (:bounds-x @app-state))
        (< x (- (:bounds-x @app-state) width size))
        (> y (:bounds-y @app-state))
        (< y (- (:bounds-y @app-state) height size)))))

(defn after-room-spawn
  "function passed into 'spawn-room' to be called after room is spawned"
  []
  (when (<= (count (:enemies @app-state)) 0)
    (swap! app-state update :enemy-index inc))
  (swap! app-state assoc :enemies [])
  (spawn-enemies))

(defn update-enemies []
  (when (and (not= :scrolling-x
                   (:game-state @app-state))
             (not= :scrolling-y
                   (:game-state @app-state)))
      (swap! app-state
          update
          :enemies
          (partial map (fn [enemy]
                         (check-enemy-tile-collision (enemy/update-enemy app-state enemy)
                                                     (:pos enemy))))))
  (swap! app-state
         update
         :enemies
         (partial map (fn [e]
                        (cond (aabb? (:pos e)
                                     (:size e)
                                     (:size e)
                                     (:pos (player/hit-box app-state))
                                     (:width (player/hit-box app-state))
                                     (:height (player/hit-box app-state)))
                              (do (dec-player-health)
                                  (if (= :do-not-die (:on-player-hit e))
                                    e
                                    (assoc e :health 0)))
                              (some (fn [b] (aabb? (:pos b) bullet-size (:pos e) (:size e)))
                                    (:bullets @app-state))
                              (update e :health dec)
                              :else e))))
  (doall (map (fn [e]
                (when (<= (:health e) 0)
                  (particle/enemy-dead app-state (:pos e))
                  (assets/play-sound app-state :explosion)
                  ))
              (:enemies @app-state)))
  (when (and (<= (:health (first (:enemies @app-state)))
                 0)
             (= :final-boss (:type (first (:enemies @app-state)))))
    (swap! app-state assoc :game-completed? true))
  (swap! app-state
         update
         :enemies
         (partial remove (fn [e]
                           (or (enemy-out-of-room? e)
                               (<= (:health e) 0))))))

(defn reset-level []
  (dungeon/init-starting-room app-state)
  (swap! app-state
         assoc
         :tile-map-previous (:tile-map @app-state)
         :enemies []
         :enemy-index -1)
  (swap! app-state assoc-in [:player :health] (:max-health (:player @app-state)))
  (swap! app-state
         assoc-in
         [:player :pos]
         [(- (:bounds-x @app-state) (/ width 2) (/ tile-size 2))
          (- (:bounds-y @app-state) (/ height 2) (/ tile-size 2))])
  (particle/player-respawn app-state (v/add [(/ tile-size 2) (/ tile-size 2)]
                                            (:pos (:player @app-state)))))

(defn update-particles []
  (swap! app-state update :particles #(->> %
                                           (map particle/update-particle)
                                           (remove particle/is-dead))))

(defn draw-particles []
  (doall (map particle/draw-particle (:particles @app-state))))

(defn draw-health-bar [x y]
  (let [bar-max-width 200]
    (js/noFill)
    (js/stroke 255)
    (js/rect x y bar-max-width 5)
    (js/fill 255)
    (js/rect x
             y
             (js/map (:health (:player @app-state))
                     0
                     (:max-health (:player @app-state))
                     0
                     bar-max-width)
             5)))

(defn draw-boss-health-bar []
  (let [enemy (first (:enemies @app-state))
        health (or (:health enemy) 0)
        bar-max-width 300]
    (when (= :final-boss (:type enemy))
      (js/text (str "boss health: " health " / 100" ) 300 (- height 138))
      (js/noFill)
      (js/rect 300
               (- height 128)
               300
               20)
      (js/fill 255)
      (js/rect 300
               (- height 128)
               (js/map health 0 100 0 bar-max-width)
               20))))

(defn draw-hud-text [string y]
  (js/textSize 16)
  (js/text string
           (v/x hud-text-pos)
           (+ (v/y hud-text-pos) y)))

(defn draw-debug-text [values]
  (js/stroke 0 255 0)
  (js/fill 0 255 0)
  (doall (map-indexed (fn [index value]
                        (draw-hud-text value (* index 10)))
                      values)))

(defn draw-start-screen []
  (js/fill 255)
  (js/textSize 60)
  (js/text "Rabbit Dungeon Shooter" (- (/ width 2) 300) (/ height 2))
  (js/textSize 40)
  (js/text "press 'r' to start the game" (- (/ width 2) 200) (+ 40 (/ height 2))))

(defn setup []
  (js/createCanvas (* width (:canvas-scale @app-state)) (* height (:canvas-scale @app-state)))
  (js/noSmooth)
  (assets/add-image app-state :fantasy-tileset (js/loadImage "assets/fantasy-tileset-grey-scale.png"))
  (assets/add-sound app-state :tone-shots (doall (map (fn [i]
                                       (js/loadSound (str "assets/audio/toneShots/" i ".wav")))
                                     (range 0 7))))
  (assets/add-sound app-state :explosion (js/loadSound "assets/audio/explosion.wav"))
  (dungeon/init-starting-room app-state)
  (swap! app-state assoc :tile-map-previous (:tile-map @app-state)))

(defn draw []
  (js/background 50)
  (js/scale (:canvas-scale @app-state))
  (if debug
    (draw-debug-text [(int (js/frameRate))
                      (:bounds-x @app-state)
                      (:bounds-y @app-state)
                      (str "pos: " (:pos (:player @app-state)))
                      (:scroll-target-min-x @app-state)
                      (str "enemy 0: " (:enemies @app-state))
                      (str "player money: " (:money (:player @app-state)))
                      (str "player health: " (:health (:player @app-state)) " / 6")
                      (str "enemy bullets: "(:enemy-bullets @app-state))
                      (str "game-over?: " (:game-over? @app-state))
                      (str "enemy-index: " (:enemy-index @app-state))])
    (do (js/fill 255)
        (js/stroke 255)
        (draw-hud-text (str "health: " (:health (:player @app-state)) " / 6") 0)
        (draw-health-bar 200 92)))
  (draw-boss-health-bar)
  (when (not (:game-started? @app-state))
    (draw-start-screen))
  (when (:game-completed? @app-state)
    (js/textSize 40)
    (js/text "You completed the game.\n           THE END" (- (/ width 2) 200) (- (/ height 2) 50)))
  (when (<= (:health (:player @app-state))
            0)
    (swap! app-state
           assoc
           :enemies []
           :enemy-bullets []
           :game-over? true))
  (when (:game-over? @app-state)
    (js/push)
    (js/textSize 32)
    (js/text "  GAME OVER\npress 'r' to restart"
             (- (/ width 2) 100)
             (- (/ height 2) 20))
    (js/pop))
  (js/translate (+ (:scroll-x @app-state)
                   (- (- (:bounds-x @app-state) width)))
                (+ (:scroll-y @app-state)
                   (- (- (:bounds-y @app-state) height))))

  (player/draw-and-update app-state)
  (dungeon/spawn-room app-state after-room-spawn)
  (dungeon/scroll-to-next-room app-state)
  (update-particles)
  (draw-particles)
  (update-bullets)
  (update-enemy-bullets)
  (display-bullets :bullets)
  (display-bullets :enemy-bullets)
  (update-enemies)
  (doall (map #(enemy/draw-enemy app-state %)
              (:enemies @app-state)))
  (dungeon/draw-tile-map app-state
                         :tile-map
                         (- (:bounds-x @app-state) width)
                         (- (:bounds-y @app-state) height))
  (dungeon/draw-tile-map app-state
                         :tile-map-previous
                         (- (:bounds-x @app-state)
                            width
                            (:scroll-target-min-x @app-state))
                         (- (:bounds-y @app-state)
                            height
                            (:scroll-target-min-y @app-state))))

(defn key-pressed []
  ; control = 17 [ (left square bracket) = 219
  ; ] (right square bracket) = 221
  (when (and (js/keyIsDown 17) (js/keyIsDown 219))
    (swap! app-state update :canvas-scale #(js/max (- % 0.1) 0.5))
    (js/resizeCanvas (* width (:canvas-scale @app-state))
                     (* height (:canvas-scale @app-state))))
  (when (and (js/keyIsDown 17) (js/keyIsDown 221))
    (swap! app-state update :canvas-scale #(js/min (+ % 0.1) 1.0))
    (js/resizeCanvas (* width (:canvas-scale @app-state))
                     (* height (:canvas-scale @app-state))))
  (when (and (= js/key "r") (not (:game-started? @app-state)))
    (assets/play-sound app-state :explosion)
    (particle/player-respawn app-state (v/add [(/ tile-size 2) (/ tile-size 2)]
                                              (:pos (:player @app-state))))
    (swap! app-state assoc :game-started? true))
  (when (and (:game-over? @app-state) (= js/key "r"))
    (assets/play-sound app-state :explosion)
    (swap! app-state assoc :game-over? false)
    (reset-level)))

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw)
  (aset "keyPressed" key-pressed))
