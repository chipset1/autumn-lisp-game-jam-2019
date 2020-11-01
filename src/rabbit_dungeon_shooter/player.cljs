(ns rabbit-dungeon-shooter.player
  (:require [rabbit-dungeon-shooter.vector :as v]
            [rabbit-dungeon-shooter.dungeon :as dungeon]))

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

(defn draw-and-update [app-state shoot draw-player]
  (when (and (:game-started? @app-state)
             (not (:game-over? @app-state)))
    (when (not (or (= :scrolling-x (:state (:player @app-state)))
                   (= :scrolling-y (:state (:player @app-state)))))
      (player-movement app-state))
    (shoot)
    (draw-player (-> @app-state
                     :player
                     :pos))))