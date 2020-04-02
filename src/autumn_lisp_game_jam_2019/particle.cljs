(ns autumn-lisp-game-jam-2019.particle
  (:require [autumn-lisp-game-jam-2019.vector :as v]
            [autumn-lisp-game-jam-2019.util :as u]))

(defn create [particle]
  (-> particle
      (assoc :max-life (:life particle))))

(defn random-vec
  ([max] (random-vec 0 max))
  ([min max]
   [(js/random min max) (js/random min max)]))

(defn bullet-explode [app-state pos]
  (dotimes [i 10]
    (swap! app-state update :particles conj (create {:pos pos
                                                     :vel (random-vec -2 2)
                                                     :type :square
                                                     :size 5
                                                     :alpha {:start 200 :end 0}
                                                     :life 50}))))

(defn map-life [p start end]
  (js/map (:life p) (:max-life p) 0 start end))

(defn update-particle [p]
  (-> p
      (update :life dec)
      (update :pos #(v/add (:vel p)  %))))

(defn is-dead [p]
  (<= (:life p) 0))

(defn draw-particle [p]
  (js/push)
  (js/noStroke)
  (js/fill 255 (map-life p (:start (:alpha p)) (:end (:alpha p))))
  (when (= :square (:type p))
    (js/rect (v/x (:pos p))
             (v/y (:pos p))
             (:size p)
             (:size p)))
  (js/pop))