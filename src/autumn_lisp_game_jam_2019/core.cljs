(ns autumn-lisp-game-jam-2019.core
  (:require [autumn-lisp-game-jam-2019.vector :as v]))

(enable-console-print!)

(def player-speed 5)
(def player-size 64)
(def bullet-size 10)
(def tile-size 64)
(def default-key-pos [(- (+ 256 512 512) 32)
                      (- (+ 256 512) 32)])
(def default-exit-pos [(- (+ 256 512 512) 32) (- 256 32)])

(def tile-map [[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               ])

(defonce app-state (atom {:characters [{:pos [(- 256 32) (- 256 32)]
                                        :dialog ["hey this is a game"
                                                 "go and find the key and exit"
                                                 "more text 1"
                                                 "more text 2"
                                                 "more text 3"
                                                 "more text 4"]
                                        :type :character}
                                       ]
                          :enemies [{:pos [(+ 256 512) (+ 256 512)]
                                     :type :enemy}
                                    {:pos [(+ 256 64 512) (+ 256 512)]
                                     :type :enemy}]
                          :bullets []
                          :bullet-last-time 0
                          :bullet-period 200
                          :player {:pos [256 256]
                                   :direction [0 0]
                                   :sword {:angle 0
                                           :swing-time 100
                                           :swing-start 0}
                                   :state nil}
                          :key {:pos default-key-pos}
                          :exit {:pos default-exit-pos}
                          :level {:door-locked? true
                                  :exit-transition 0}
                          :fantasy-tileset-image nil
                          :dialog-index 0}))

(defn draw-wall-tile [x y]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            tile-size
            tile-size
            64
            64
            32
            32))

(defn draw-key [[x y]]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            tile-size
            tile-size
            128
            128
            32
            32))

(defn draw-door [[x y]]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            tile-size
            tile-size
            128
            32
            32
            32))

(defn draw-stairs [[x y]]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            tile-size
            tile-size
            160
            32
            32
            32))

(defn draw-player [[x y]]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            player-size
            player-size
            32
            (* 20 32)
            32
            32))

(defn draw-character [[x y]]
  (js/image (:fantasy-tileset-image @app-state)
            x
            y
            tile-size
            tile-size
            32
            (* 18 32)
            32
            32))

(defn draw-sword [[x y] angle]
  (js/push)
  (js/translate (+ x 32) (+ y 32))
  (js/rotate angle)
  (js/ellipse 0 0 tile-size tile-size)
  (js/translate (- tile-size) (- tile-size))
  (js/image (:fantasy-tileset-image @app-state)
            0
            0
            tile-size
            tile-size
            64
            (* 7 32)
            32
            32)
  (js/pop))



(defn draw-tile-map []
  (doall (map-indexed (fn [i row]
                        (doall (map-indexed (fn [j tile]
                                              (when (= tile 1)
                                                (draw-wall-tile (* j tile-size) (* i tile-size))))
                                            row)))
                      tile-map)))

(defn solid-tile? [x y]
  (let [col (js/floor (/ x tile-size))
        row (js/floor (/ y tile-size))]
    (= 1 (get-in tile-map [row col]))))

(defn tile-map-collision? [pos size]
  (let [left (v/x pos)
        right (+ (v/x pos) size)
        top (v/y pos)
        bottom (+ (v/y pos) size)]
    (or (solid-tile? left top)
        (solid-tile? left bottom)
        (solid-tile? right top)
        (solid-tile? right bottom))))

(defn new-player-position [player-pos vel]
  (let [new-pos (v/add player-pos vel)]
    (if (tile-map-collision? new-pos player-size)
      player-pos
      new-pos)))

(defn move-player [vel-direction]
  (swap! app-state
         assoc-in
         [:player :direction]
         vel-direction)
  (swap! app-state
         update-in
         [:player :pos]
         new-player-position
         (v/mult player-speed vel-direction)))

(defn player-movement []
  (when (js/keyIsDown 87)
    (move-player [0 -1]))
  (when (js/keyIsDown 83)
    (move-player [0 1]))
  (when (js/keyIsDown 65)
    (move-player [-1 0]))
  (when (js/keyIsDown 68)
    (move-player [1 0])))

(defn aabb? [[x1 y1] size1 [x2 y2] size2]
  (and (< x1 (+ x2 size2))
       (> (+ x1 size1) x2)
       (< y1 (+ y2 size2))
       (> (+ y1 size1) y2)))

(defn player-key-collision? []
  (aabb? (-> @app-state
             :player
             :pos)
         player-size
         (-> @app-state
             :key
             :pos)
         tile-size))

(defn key-door-collision? []
  (aabb? (-> @app-state
             :key
             :pos)
         tile-size
         (-> @app-state
             :exit
             :pos)
         tile-size))

(defn attach-key-to-player []
  (swap! app-state
         assoc-in
         [:key :pos]
         (-> @app-state
             :player
             :pos)))

(defn reset-level []
  (swap! app-state
         assoc-in
         [:key :pos]
         default-key-pos)
  (swap! app-state
         assoc-in
         [:player :pos]
         [(- 256 32) (- 256 32)])
  (swap! app-state
         assoc-in
         [:level :door-locked?]
         true))

(defn start-sword-swing []
  (swap! app-state
         assoc-in
         [:player :state]
         :attacking)
  (swap! app-state
         assoc-in
         [:player :sword :swing-start]
         (js/millis)))

(defn sword-angle [[x-dir y-dir]]
  (let [base-angle (+ (+ (/ js/PI 4) (/ js/PI 2))
                      (-> @app-state
                          :player
                          :sword
                          :angle))]
    (cond (= y-dir 1) base-angle
          (= y-dir -1) (+ js/PI base-angle)
          (= x-dir 1) (+ js/PI (/ js/PI 2) base-angle)
          (= x-dir -1) (+ (/ js/PI 2) base-angle)
          :default base-angle)))

(defn sword-enemy-collision []
  (doall (map (fn [enemy]
                #_(js/ellipse (+ 32
                               (v/x (-> @app-state
                                        :player
                                        :pos)))
                            (+ 32
                               (v/y (-> @app-state
                                        :player
                                        :pos)))
                            (+ 78 tile-size)
                            (+ 78 tile-size))
                (when (aabb? (-> @app-state
                                 :player
                                 :pos)
                             tile-size
                             (:pos enemy)
                             tile-size)
                  ))
              (:enemies @app-state))))

(defn swing-sword []
  (when (= :attacking
           (-> @app-state
               :player
               :state))
    (sword-enemy-collision)
    (draw-sword (-> @app-state
                    :player
                    :pos)
                (sword-angle (-> @app-state
                                 :player
                                 :direction)))
    (swap! app-state
           assoc-in
           [:player :sword :angle]
           (js/map (js/millis)
                   (-> @app-state
                       :player
                       :sword
                       :swing-start)
                   (+ (-> @app-state
                          :player
                          :sword
                          :swing-time)
                      (-> @app-state
                          :player
                          :sword
                          :swing-start))
                   0
                   js/PI)))
  (when (> (js/millis)
           (+ (-> @app-state
                  :player
                  :sword
                  :swing-time)
              (-> @app-state
                  :player
                  :sword
                  :swing-start)))
    (swap! app-state
           assoc-in
           [:player :sword :angle]
           0)
    (swap! app-state
           assoc-in
           [:player :state]
           :not-attacking)))

(defn shoot-direction [dir]
  (swap! app-state
         update
         :bullets
         conj
         {:pos (-> @app-state
                   :player
                   :pos)
          :direction dir}))

(defn shoot []
  (when (> (- (js/millis)
              (:bullet-last-time @app-state))
           (:bullet-period @app-state))
    (swap! app-state assoc :bullet-last-time (js/millis))
    (cond (js/keyIsDown js/UP_ARROW) (shoot-direction [0 -1])
          (js/keyIsDown js/DOWN_ARROW) (shoot-direction [0 1])
          (js/keyIsDown js/LEFT_ARROW) (shoot-direction [-1 0])
          (js/keyIsDown js/RIGHT_ARROW) (shoot-direction [1 0]))))

(defn bullet-hit-enemy? [b]
  (some (fn [e]
          (aabb? (:pos b)
                 bullet-size
                 (:pos e)
                 tile-size))
        (:enemies @app-state)))

(defn update-bullets []
  (swap! app-state
         update
         :bullets
         (partial remove (fn [b]
                           (or (bullet-hit-enemy? b)
                               (tile-map-collision? (:pos b) 10)))))
  (swap! app-state
         update
         :bullets
         (fn [bullets]
           (map (fn [b]
                  (assoc b
                         :pos
                         (v/add (:pos b) (v/mult 15 (:direction b)))))
                bullets))))

(defn display-bullets []
  (doall (map (fn [bullet]
                (js/fill 255)
                (js/stroke 0)
                (js/rect (v/x (:pos bullet))
                         (v/y (:pos bullet))
                         bullet-size
                         bullet-size))
              (:bullets @app-state))))

(defn setup []
   ;256 	× 	192
  (js/createCanvas (* 1.5 512) (* 1.5 384))
  (js/noSmooth)
  (swap! app-state
         assoc
         :fantasy-tileset-image
         (js/loadImage "/assets/fantasy-tileset.png")))

(defn draw []
  (js/background 50)
  (js/fill 0)
  (when (and (not= :talking
                   (-> @app-state
                       :player
                       :state))
             (-> @app-state
                 :level
                 :door-locked?))
    (player-movement))
  (js/stroke 0 255 0)
  (js/fill 0 255 0)
  (js/text (int (js/frameRate)) 150 150)
  (js/text (:direction (:player @app-state)) 150 160)
  (js/text (:bullets @app-state) 150 170)
  #_(js/translate (- (+ 32
                      (- (-> @app-state
                           :player
                           :pos
                           v/x)
                       256)))
                (- (+ 32
                      (- (-> @app-state
                           :player
                           :pos
                           v/y)
                       256))))
  (js/translate (* -1
                   js/width
                   (js/floor (/ (-> @app-state
                                    :player
                                    :pos
                                    v/x)
                                js/width)))
                (* -1
                   js/height
                   (js/floor (/ (-> @app-state
                                    :player
                                    :pos
                                    v/y)
                                js/height))))

  (shoot)
  (draw-stairs (-> @app-state
                   :exit
                   :pos))
  (when (and (key-door-collision?)
             (-> @app-state
                 :level
                 :door-locked?))
    (swap! app-state
           assoc-in
           [:level :door-locked?]
           false)
    (swap! app-state
           assoc-in
           [:level :exit-transition]
           (js/millis)))
  (when (-> @app-state
            :level
            :door-locked?)
    (draw-key (-> @app-state
                  :key
                  :pos))
    (draw-door (-> @app-state
                   :exit
                   :pos)))

  (draw-player (-> @app-state
                   :player
                   :pos))

  (update-bullets)
  (display-bullets)
  ;; (swing-sword)

  (doall (map (fn [character]
                (js/stroke 0 255 0)
                (js/fill 0 255 0)
                (when (and (not= :talking
                                 (-> @app-state
                                     :player
                                     :state))
                           (aabb? (-> @app-state
                                      :player
                                      :pos)
                                  tile-size
                                  (:pos character)
                                  tile-size))
                  (js/text "press j to talk..."
                           (v/x (:pos character))
                           (+ (v/y (:pos character))
                              74)))
                (when (= :talking
                         (-> @app-state
                             :player
                             :state))
                  (if (>= (:dialog-index @app-state)
                          (count (:dialog character)))
                    (do (swap! app-state
                               assoc-in
                               [:player :state]
                               :not-talking)
                        (swap! app-state
                               assoc
                               :dialog-index
                               0))
                    (js/text (nth (:dialog character)
                                  (:dialog-index @app-state))
                             (v/x (:pos character))
                             (+ (v/y (:pos character))
                                74)))))
              (:characters @app-state)))
  (swap! app-state
         update
         :enemies
         (partial remove (fn [e]
                           (some (fn [b]
                                   (aabb? (:pos b)
                                          bullet-size
                                          (:pos e)
                                          tile-size))
                                 (:bullets @app-state)))))

  (doall (map #(draw-character (:pos %))
              (:enemies @app-state)))
  (doall (map #(draw-character (:pos %))
              (:characters @app-state)))
  (draw-tile-map)
  (when (player-key-collision?)
    (attach-key-to-player))
  (when (not (-> @app-state
                 :level
                 :door-locked?))
    (when (> (js/millis)
             (+ 1000
                (-> @app-state
                    :level
                    :exit-transition)))
      (reset-level))
    (js/fill 50 (js/map (js/millis)
                       (-> @app-state
                           :level
                           :exit-transition)
                       (+ 1000
                          (-> @app-state
                              :level
                              :exit-transition))
                       0
                       255))
    (js/rect (* 512 2) 0 js/width js/height))
  )

(defn key-pressed []

  (when (= js/key "j")
    (when (= :talking
             (-> @app-state
                 :player
                 :state))
      (swap! app-state
             update
             :dialog-index
             inc))
    (doall (map (fn [character]
                  (when (aabb? (-> @app-state
                                   :player
                                   :pos)
                               tile-size
                               (:pos character)
                               tile-size)
                    (swap! app-state
                           assoc-in
                           [:player :state]
                           :talking)))
                (:characters @app-state)))))

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw)
  (aset "keyPressed" key-pressed))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
