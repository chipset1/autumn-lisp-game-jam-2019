(ns rabbit-dungeon-shooter.dungeon
  (:require [rabbit-dungeon-shooter.vector :as v]))

(defn shift-left [app-state]
  (swap! app-state assoc-in [:player :state] :scrolling-x)
  (swap! app-state assoc :scroll-target-min-y 0)
  (swap! app-state assoc :scroll-target-min-x (:width app-state))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-right [app-state]
  (swap! app-state assoc-in [:player :state] :scrolling-x)
  (swap! app-state assoc :scroll-target-min-y 0)
  (swap! app-state assoc :scroll-target-min-x (- (:width app-state)))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-up [app-state]
  (swap! app-state assoc-in [:player :state] :scrolling-y)
  (swap! app-state assoc :scroll-target-min-x 0)
  (swap! app-state assoc :scroll-target-min-y (:height app-state))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-down [app-state]
  (swap! app-state assoc-in [:player :state] :scrolling-y)
  (swap! app-state assoc :scroll-target-min-x 0)
  (swap! app-state assoc :scroll-target-min-y (- (:height app-state)))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn add-door-right [app-state]
  (swap! app-state assoc-in [:tile-map 3 13] 0)
  (swap! app-state assoc-in [:tile-map 4 13] 0)
  (swap! app-state assoc-in [:tile-map 5 13] 0))

(defn add-door-left [app-state]
  (swap! app-state assoc-in [:tile-map 3 0] 0)
  (swap! app-state assoc-in [:tile-map 4 0] 0)
  (swap! app-state assoc-in [:tile-map 5 0] 0))

(defn add-door-top [app-state]
  (swap! app-state assoc-in [:tile-map 0 6] 0)
  (swap! app-state assoc-in [:tile-map 0 7] 0))

(defn add-door-bottom [app-state]
  (swap! app-state assoc-in [:tile-map 8 6] 0)
  (swap! app-state assoc-in [:tile-map 8 7] 0))

(defn init-starting-room [app-state]
  (add-door-right app-state)
  (add-door-left app-state)
  (add-door-top app-state)
  (add-door-bottom app-state))

(defn on-room-spawn [app-state]
  (swap! app-state assoc :tile-map-previous (:tile-map @app-state))
  (swap! app-state assoc :tile-map (:default-room @app-state)))

(defn scroll-to-next-room [app-state]
  (when (= :scrolling-y
           (-> @app-state
               :player
               :state))
    (swap! app-state
           assoc
           :scroll-y
           (js/map (js/millis)
                   (:scroll-start-time @app-state)
                   (+ (:scroll-start-time @app-state)
                      (:scroll-interval @app-state))
                   (:scroll-target-min-y @app-state)
                   0)))
  (when (= :scrolling-x
           (-> @app-state
               :player
               :state))
    (swap! app-state
           assoc
           :scroll-x
           (js/map (js/millis)
                   (:scroll-start-time @app-state)
                   (+ (:scroll-start-time @app-state)
                      (:scroll-interval @app-state))
                   (:scroll-target-min-x @app-state)
                   0)))
  (when (> (js/millis)
           (+ (:scroll-start-time @app-state)
              (:scroll-interval @app-state)))
    (swap! app-state assoc :scroll-x 0)
    (swap! app-state assoc :scroll-y 0)
    (swap! app-state
           assoc-in
           [:player :state]
           :not-scrolling)))

(defn spawn-room
  "update bounds, reset tile-map to default room, create door where entered, randomly create other doors"
  [app-state after-room-spawn]
  (let [width (:width @app-state)
        height (:height @app-state)
        door-spawn-chance (:door-spawn-chance @app-state)
        player-pos-x (-> @app-state
                         :player
                         :pos
                         v/x)
        player-pos-y (-> @app-state
                         :player
                         :pos
                         v/y)]
    (when (> player-pos-x (:bounds-x @app-state))
      (swap! app-state assoc :bounds-x (+ width (:bounds-x @app-state)))
      (on-room-spawn app-state)
      (add-door-left app-state)
      (shift-left app-state)
      (when (< (js/random) door-spawn-chance) (add-door-right app-state))
      (when (< (js/random) door-spawn-chance) (add-door-top app-state))
      (when (< (js/random) door-spawn-chance) (add-door-bottom app-state))
      (after-room-spawn))
    (when (< (+ player-pos-x (:player-size @app-state))
             (- (:bounds-x @app-state) width))
      (swap! app-state assoc :bounds-x (- (:bounds-x @app-state) width))
      (on-room-spawn app-state)
      (add-door-right app-state)
      (shift-right app-state)
      (when (< (js/random) door-spawn-chance) (add-door-left app-state))
      (when (< (js/random) door-spawn-chance) (add-door-top app-state))
      (when (< (js/random) door-spawn-chance) (add-door-bottom app-state))
      (after-room-spawn))
    (when (> player-pos-y (:bounds-y @app-state))
      (swap! app-state assoc :bounds-y (+ height (:bounds-y @app-state)))
      (on-room-spawn app-state)
      (add-door-top app-state)
      (shift-up app-state)
      (when (< (js/random) door-spawn-chance) (add-door-left app-state))
      (when (< (js/random) door-spawn-chance) (add-door-right app-state))
      (when (< (js/random) door-spawn-chance) (add-door-bottom app-state))
      (after-room-spawn))
    (when (< (+ player-pos-y (:player-size @app-state))
             (- (:bounds-y @app-state) height))
      (swap! app-state assoc :bounds-y (- (:bounds-y @app-state) height))
      (on-room-spawn app-state)
      (add-door-bottom app-state)
      (shift-down app-state)
      (when (< (js/random) door-spawn-chance) (add-door-left app-state))
      (when (< (js/random) door-spawn-chance) (add-door-right app-state))
      (when (< (js/random) door-spawn-chance) (add-door-top app-state))
      (after-room-spawn))))