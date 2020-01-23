(ns autumn-lisp-game-jam-2019.enemy
  (:require [autumn-lisp-game-jam-2019.vector :as v]))

(def enemy-directions [[0 1]
                       [0 -1]
                       [1 0]
                       [-1 0]])

(defn if-update
   [x pred f]
  (if (pred x)
    (f x)
    x))

(defn create-enemy [pos type]
  (cond (= :udlr type)
        {:pos pos
         :health 3
         :udlr {:move-time (js/millis)
                :speed 3
                :move-interval 500
                :current-direction (first (shuffle enemy-directions))
                :directions enemy-directions}}
        (= :seek type)
        {:pos pos
         :health 3
         :seek {:speed 2}}))

(defn udlr-update-move-time [enemy]
  (if (> (- (js/millis)
            (:move-time (:udlr enemy)))
         (:move-interval (:udlr enemy)))
    (-> enemy
        (assoc-in [:udlr :move-time] (js/millis))
        (assoc-in [:udlr :current-direction] (first (shuffle (:directions (:udlr enemy))))))
    enemy))

(defn update-enemy [app-state enemy]
  ;; (update enemy :pos #(->> (v/sub (:pos (:player @app-state)) %)
  ;;                          (v/normalize)
  ;;                          (v/mult-vec [4 0])
  ;;                          (v/add %)))
  (-> enemy
      (if-update :udlr (fn [e]
                         (udlr-update-move-time (update e :pos #(->> (v/mult (:speed (:udlr enemy))
                                                                            (:current-direction (:udlr enemy)))
                                                                     (v/add %))))))
      (if-update :seek (fn [e]
                         (update e :pos #(->> (v/sub (:pos (:player @app-state)) %)
                                                 (v/normalize)
                                                 (v/mult (:speed (:seek enemy)))
                                                 (v/add %)))))))
