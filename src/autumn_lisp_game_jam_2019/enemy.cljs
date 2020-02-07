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

(defn random-direction []
  (first (shuffle enemy-directions)))

(defn create-enemy [pos type]
  (cond (= :sit-and-shoot type)
        {:pos pos
         :health 10
         :shoot-player {:shoot-time (js/millis)
                        :interval 1000}}
        (= :rotate-seek type)
        {:pos pos
         :health 3
         :seek {:speed 1}
         :rotate {:radius 4
                  :theta (js/random js/TWO_PI)
                  :theta-vel 0.03}}
        (= :udlr-shoot type)
        {:pos pos
         :health 3
         :udlr {:move-time (js/millis)
                :speed 3
                :move-interval 1500
                :current-direction (random-direction)}
         :random-shoot {:direction (random-direction)
                        :shoot-time (js/millis)
                        :interval 1000}}
        (= :udlr type)
        {:pos pos
         :health 3
         :udlr {:move-time (js/millis)
                :speed 3
                :move-interval 500
                :current-direction (random-direction)}}
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
        (assoc-in [:udlr :current-direction] (random-direction)))
    enemy))

(defn shoot-update [app-state enemy]
  (if (> (- (js/millis)
              (:shoot-time (:random-shoot enemy)))
           (:interval (:random-shoot enemy)))
    (do (swap! app-state update :enemy-bullets conj {:pos (:pos enemy)
                                                     :speed 10
                                                     :direction (random-direction)})
        (assoc-in enemy [:random-shoot :shoot-time] (js/millis)))
    enemy))

(defn shoot-player [app-state enemy]
  (if (> (- (js/millis)
            (:shoot-time (:shoot-player enemy)))
         (:interval (:shoot-player enemy)))
    (do (swap! app-state update :enemy-bullets conj {:pos (:pos enemy)
                                                     :speed 5
                                                     :direction (-> (v/add (:pos (:player @app-state))
                                                                            [32 32])
                                                                    (v/sub (:pos enemy))
                                                                    (v/normalize))})
        (assoc-in enemy [:shoot-player :shoot-time] (js/millis)))
    enemy)
  )

(defn update-enemy [app-state enemy]
  ;; (update enemy :pos #(->> (v/sub (:pos (:player @app-state)) %)
  ;;                          (v/normalize)
  ;;                          (v/mult-vec [4 0])
  ;;                          (v/add %)))
  (-> enemy
      (if-update :shoot-player (fn [e]
                                 (shoot-player app-state e)))
      (if-update :rotate (fn [e]
                           (let [{:keys [radius
                                         theta
                                         theta-vel]} (:rotate e)]
                             (-> e
                                 (assoc :pos (vector (+ (v/x (:pos e))
                                                        (* radius (js/cos theta)))
                                                     (+ (v/y (:pos e))
                                                        (* radius (js/sin theta)))))
                                 (update-in [:rotate :theta] #(+ % theta-vel))))))
      (if-update :random-shoot (fn [e]
                                 (shoot-update app-state e)))
      (if-update :udlr (fn [e]
                         (udlr-update-move-time (update e :pos #(->> (v/mult (:speed (:udlr enemy))
                                                                            (:current-direction (:udlr enemy)))
                                                                     (v/add %))))))
      (if-update :seek (fn [e]
                         (update e :pos #(->> (v/sub (:pos (:player @app-state)) %)
                                                 (v/normalize)
                                                 (v/mult (:speed (:seek enemy)))
                                                 (v/add %)))))))
