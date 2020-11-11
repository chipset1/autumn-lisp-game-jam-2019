(ns rabbit-dungeon-shooter.player
  (:require [rabbit-dungeon-shooter.vector :as v]
            [rabbit-dungeon-shooter.dungeon :as dungeon]
            [rabbit-dungeon-shooter.assets :as assets]))

(defn hit-box
  ([app-state]
   (hit-box app-state (:pos (:player @app-state))))
  ([app-state [x y]]
   ;; (js/push)
   ;; (js/fill 255 0 255 10)
   ;; (js/rect (+ (v/x (:pos (:player @app-state))) 16)
   ;;          (+ (v/y (:pos (:player @app-state))) 12)
   ;;          (- player-size 32)
   ;;          (- player-size 24))
   ;; (js/pop)
   (let [offset-x 16
         offset-y 12]
     {:pos [(+ x offset-x)
            (+ y offset-y)]
      :width (- (:player-size @app-state) (* offset-x 2))
      :height (- (:player-size @app-state) (* offset-y 2))})))

(defn- player-tile-map-collision?
  [app-state pos]
  (let [left (v/x (:pos (hit-box app-state pos)))
        right (+ (v/x (:pos (hit-box app-state pos)))
                 (:width (hit-box app-state pos)))
        top (v/y (:pos (hit-box app-state pos)))
        bottom (+ (v/y (:pos (hit-box app-state pos)))
                  (:height (hit-box app-state pos)))]
    (or (dungeon/solid-tile? app-state left top)
        (dungeon/solid-tile? app-state left bottom)
        (dungeon/solid-tile? app-state right top)
        (dungeon/solid-tile? app-state right bottom))))

(defn- new-player-position [app-state player-pos vel-direction]
  (let [new-pos (v/add player-pos
                       (v/mult (:speed (:player @app-state)) vel-direction))]
    (if (player-tile-map-collision? app-state new-pos)
      player-pos
      new-pos)))

(defn- move-player [app-state vel-direction]
  (swap! app-state
         update-in
         [:player :pos]
         (partial new-player-position app-state)
         vel-direction))


(defn- player-movement [app-state]
  (when (js/keyIsDown 87)
    (move-player app-state [0 -1]))
  (when (js/keyIsDown 83)
    (move-player app-state [0 1]))
  (when (js/keyIsDown 65)
    (move-player app-state [-1 0]))
  (when (js/keyIsDown 68)
    (move-player app-state [1 0])))

(defn shoot-direction [app-state dir]
  (assets/play-tone-shot-sound app-state)
  (swap! app-state
         update
         :bullets
         conj
         {:pos (v/add (-> @app-state
                          :player
                          :pos)
                      [(/ (:player-size @app-state) 2) (/ (:player-size @app-state) 2)])
          :direction dir}))

(defn shoot [app-state]
  (when (> (- (js/millis)
              (:bullet-last-time @app-state))
           (:bullet-interval @app-state))
    (swap! app-state assoc :bullet-last-time (js/millis))
    (let [kd js/keyIsDown
          shoot-dir (partial shoot-direction app-state)]
      (cond (and (kd js/UP_ARROW) (kd js/LEFT_ARROW)) (shoot-dir [-1 -1])
           (and (kd js/UP_ARROW) (kd js/RIGHT_ARROW)) (shoot-dir [1 -1])
           (and (kd js/DOWN_ARROW) (kd js/LEFT_ARROW)) (shoot-dir [-1 1])
           (and (kd js/DOWN_ARROW) (kd js/RIGHT_ARROW)) (shoot-dir [1 1])
           (kd js/UP_ARROW) (shoot-dir [0 -1])
           (kd js/DOWN_ARROW) (shoot-dir [0 1])
           (kd js/LEFT_ARROW) (shoot-dir [-1 0])
           (kd js/RIGHT_ARROW) (shoot-dir [1 0])))))

(defn draw-player [app-state]
  (let [[x y] (-> @app-state
                  :player
                  :pos)
        player-image #(js/image (assets/image app-state :fantasy-tileset)
                                x
                                y
                                (:player-size @app-state)
                                (:player-size @app-state)
                                32
                                (* 20 32)
                                32
                                32)]
    (if (< (- (js/millis)
              (:health-dec-time @app-state))
           (:health-dec-interval @app-state))
      (when (> (- (js/millis)
                  (:invulnerable-flash-time @app-state))
               (:invulnerable-flash-interval @app-state))
        (swap! app-state assoc :invulnerable-flash-time (js/millis))
        (player-image))
      (player-image))))

(defn draw-and-update [app-state]
  (when (and (:game-started? @app-state)
             (not (:game-over? @app-state)))
    (when (not (or (= :scrolling-x (:game-state @app-state))
                   (= :scrolling-y (:game-state @app-state))))
      (player-movement app-state))
    (shoot app-state)
    (draw-player app-state)))