(ns autumn-lisp-game-jam-2019.core
  (:require [autumn-lisp-game-jam-2019.vector :as v]))

(enable-console-print!)

(def player-speed 5)
(def player-size 64)
(def tile-size 64)

(def tile-map [[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 1]
               [1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               ])

(defonce app-state (atom {:player {:pos [256 256]}}))

(defn draw-tile-map []
  (doall (map-indexed (fn [i row]
                        (doall (map-indexed (fn [j tile]
                                              (when (= tile 1)
                                                (js/rect (* j tile-size)
                                                         (* i tile-size)
                                                         tile-size
                                                         tile-size)))
                                            row)))
                      tile-map)))

(defn solid-tile? [x y]
  (let [col (js/floor (/ x tile-size))
        row (js/floor (/ y tile-size))]
    (= 1 (get-in tile-map [row col]))))

(defn tile-map-collision? [player-pos]
  (let [left (v/x player-pos)
        right (+ (v/x player-pos) player-size)
        top (v/y player-pos)
        bottom (+ (v/y player-pos) player-size)]
    (or (solid-tile? left top)
        (solid-tile? left bottom)
        (solid-tile? right top)
        (solid-tile? right bottom))))

(defn new-player-position [player-pos vel]
  (let [new-pos (v/add player-pos vel)]
    (if (tile-map-collision? new-pos)
      player-pos
      new-pos)))

(defn move-player [vel-direction]
  (swap! app-state
         update-in
         [:player :pos]
         new-player-position
         (v/mult player-speed vel-direction)))

(defn player-movement []
  (when (or (js/keyIsDown 87)
            (js/keyIsDown js/UP_ARROW))
    (move-player [0 -1]))
  (when (or (js/keyIsDown 83)
            (js/keyIsDown js/DOWN_ARROW))
    (move-player [0 1]))
  (when (or (js/keyIsDown 65)
            (js/keyIsDown js/LEFT_ARROW))
    (move-player [-1 0]))
  (when (or (js/keyIsDown 68)
            (js/keyIsDown js/RIGHT_ARROW))
    (move-player [1 0])))


(defn setup []
  (js/createCanvas 512 512))

(defn draw []
  (js/background 50)
  (js/fill 0)
  (player-movement)
  (js/translate (* -1 js/width (js/floor (/ (-> @app-state
                                                :player
                                                :pos
                                                v/x)
                                            js/width)))
                (* -1 js/height (js/floor (/ (-> @app-state
                                                :player
                                                :pos
                                                v/y)
                                            js/height))))
  (js/rect (-> @app-state
               :player
               :pos
               v/x)
           (-> @app-state
               :player
               :pos
               v/y)
           player-size
           player-size)
  (draw-tile-map)
  )

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
