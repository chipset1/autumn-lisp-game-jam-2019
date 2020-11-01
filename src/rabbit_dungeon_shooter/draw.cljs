(ns rabbit-dungeon-shooter.draw
  (:require [rabbit-dungeon-shooter.assets :as assets]))

(defn- wall-tile [app-state x y]
  (js/image (assets/image app-state :fantasy-tileset)
            x
            y
            (:tile-size @app-state)
            (:tile-size @app-state)
            64
            64
            32
            32))

(defn player [app-state]
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

(defn enemy [app-state e]
  ;; (js/text (str "health " (:health e)) (v/x (:pos e)) (v/y (:pos e)))
  (let [[x y] (:pos e)
        size (:size e)
        sprite-col (:col (:sprite-sheet e))
        sprite-row (:row (:sprite-sheet e))
        sprite-size 32]
    (js/image (assets/image app-state :fantasy-tileset)
             x
             y
             size
             size
             (* sprite-col sprite-size)
             (* sprite-row sprite-size)
             sprite-size
             sprite-size)))

(defn tile-map [app-state tile-map-key offset-x offset-y]
  (doall (map-indexed (fn [i row]
                        (doall (map-indexed (fn [j tile]
                                              (when (= tile 1)
                                                (wall-tile app-state
                                                           (+ offset-x (* j (:tile-size @app-state)))
                                                           (+ offset-y (* i (:tile-size @app-state))))))
                                            row)))
                      (tile-map-key @app-state))))