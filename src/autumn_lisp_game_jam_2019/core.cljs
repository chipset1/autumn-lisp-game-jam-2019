(ns autumn-lisp-game-jam-2019.core
  (:require [autumn-lisp-game-jam-2019.vector :as v]))

(enable-console-print!)

(def player-speed 5)

(defonce app-state (atom {:player {:pos [0 0]
                                   :vel [0 0]}}))

(defn player-vel [vel-direction]
  (swap! app-state
         update-in
         [:player :pos]
         v/add
         (v/mult player-speed vel-direction)))

(defn player-movement []
  (when (or (js/keyIsDown 87)
            (js/keyIsDown js/UP_ARROW))
    (player-vel [0 -1]))
  (when (or (js/keyIsDown 83)
            (js/keyIsDown js/DOWN_ARROW))
    (player-vel [0 1]))
  (when (or (js/keyIsDown 65)
            (js/keyIsDown js/LEFT_ARROW))
    (player-vel [-1 0]))
  (when (or (js/keyIsDown 68)
            (js/keyIsDown js/RIGHT_ARROW))
    (player-vel [1 0])))

(defn setup []
  (js/createCanvas 512 512))

(defn draw []
  (js/background 50)
  (js/fill 0)
  (js/rect (/ js/width 2) (/ js/height 2) 10 10)
  (player-movement)
  (js/rect (-> @app-state
               :player
               :pos
               v/x)
           (-> @app-state
               :player
               :pos
               v/y)
           64
           64))

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
