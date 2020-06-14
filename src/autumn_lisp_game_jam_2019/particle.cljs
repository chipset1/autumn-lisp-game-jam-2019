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

(defn enemy-dead [app-state pos]
  (dotimes [i 15]
    (swap! app-state
           update
           :particles
           conj
           (create {:pos pos
                    :vel (random-vec -10 10)
                    :type :square
                    :size (js/random 5 20)
                    :alpha {:start 200 :end 0}
                    :life (js/random 50)})
           (create {:pos pos
                    :vel (random-vec -10 10)
                    :type :circle
                    :size (js/random 10 30)
                    :alpha {:start 200 :end 0}
                    :life (js/random 50)})
           (create {:pos pos
                    :vel (random-vec -10 10)
                    :type :star
                    :radius1 10
                    :radius2 5
                    :npoints 5
                    :alpha {:start 200 :end 0}
                    :life (js/random 50)}))
    ))

(defn player-respawn [app-state pos]
  (dotimes [i 50]
    (swap! app-state
           update
           :particles
           conj
           (create {:pos pos
                    :vel (random-vec -10 10)
                    :type :star
                    :radius1 10
                    :radius2 5
                    :npoints 5
                    :alpha {:start 200 :end 0}
                    :life (js/random 50 150)}))))

(defn map-life [p start end]
  (js/map (:life p) (:max-life p) 0 start end))

(defn update-particle [p]
  (let [pos (:pos p)]
    (-> p
       (update :life dec)
       (update :vel #(v/mult 1.025 %))
       (update :pos #(v/add (:vel p)  %)))))

(defn is-dead [p]
  (<= (:life p) 0))

(defn star
  [x y radius1 radius2 npoints]
  ;;https://www.openprocessing.org/sketch/820759
  (let [angle (/ js/TWO_PI npoints)
        half-angle (/ angle 2)]
    (js/beginShape)
    (doall (map (fn [a]
                  (js/vertex (+ x (* (js/cos a) radius2))
                             (+ y (* (js/sin a) radius2)))
                  (js/vertex (+ x (* (js/cos (+ a half-angle)) radius1))
                             (+ y (* (js/sin (+ a half-angle)) radius1))))
                (range 0 js/TWO_PI angle)))
    (js/endShape js/CLOSE)))

(defn draw-particle [p]
  (js/push)
  (js/noStroke)
  (js/fill 255 (map-life p (:start (:alpha p)) (:end (:alpha p))))
  (when (= :square (:type p))
    (js/rect (v/x (:pos p))
             (v/y (:pos p))
             (:size p)
             (:size p)))
  (when (= :star (:type p))
    (star (v/x (:pos p))
          (v/y (:pos p))
          (:radius1 p)
          (:radius2 p)
          (:npoints p)))
  (when (= :circle (:type p))
    (js/circle (v/x (:pos p))
               (v/y (:pos p))
               (:size p)))
  (js/pop))

(defn cool-star
  ([x y radius1 radius2 npoints]
   (cool-star x y radius1 radius2 0 npoints))
  ([x y radius1 radius2 angle-offset npoints]
   ;;https://www.openprocessing.org/sketch/820759
   (let [angle (/ js/TWO_PI npoints)
         half-angle (/ angle 2)]
     (js/beginShape)
     (doall (map (fn [a]
                   (let [a (+ a (/ js/PI 4))]
                     (js/vertex (+ x (* (js/cos a) radius2))
                                (+ y (* (js/sin a) radius2))))
                   (js/vertex (+ x (* (js/cos (+ a half-angle)) radius1))
                              (+ y (* (js/sin (+ a half-angle)) radius1))))
                 (range 0 js/TWO_PI angle)))
     (js/endShape js/CLOSE))))