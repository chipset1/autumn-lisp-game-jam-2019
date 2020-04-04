(ns autumn-lisp-game-jam-2019.enemy
  (:require [autumn-lisp-game-jam-2019.vector :as v]
            [autumn-lisp-game-jam-2019.util :as u]))

(def enemy-directions [[0 1]
                       [0 -1]
                       [1 0]
                       [-1 0]])

(def enemy-diagonal-directions [[1 1]
                                [1 -1]
                                [-1 1]
                                [-1 -1]])

(defn random-direction []
  (first (shuffle enemy-directions)))

(defn random-diagonal-direction []
  (first (shuffle enemy-diagonal-directions)))

(defn create-enemy [pos type]
  (cond (= :diagonal-move type)
        {:pos pos
         :health 3
         :image-type :spider
         :diagonal-move {:interval 500
                         :speed 4
                         :current-direction (random-diagonal-direction)
                         :move-time (js/millis)}}
        (= :rotate-and-shoot type)
        {:pos pos
         :health 20
         :image-type :eye-monster
         :on-player-hit :do-not-die
         :rotate {:radius 4
                  :theta 0
                  :theta-vel 0.03}
         :shoot-player {:shoot-time (js/millis)
                        :speed 3
                        :interval 500}}
        (= :sit-and-shoot type)
        {:pos pos
         :health 10
         :image-type :sorcerer
         :on-player-hit :do-not-die
         :shoot-player {:shoot-time (js/millis)
                        :speed 20
                        :interval 1000}}
        (= :rotate-seek type)
        {:pos pos
         :health 3
         :image-type :ghoul
         :seek {:speed 1}
         :rotate {:radius 4
                  :theta (js/random js/TWO_PI)
                  :theta-vel 0.03}}
        (= :udlr-shoot type)
        {:pos pos
         :health 3
         :image-type :archer
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
         :image-type :skeleton
         :udlr {:move-time (js/millis)
                :speed 4.5
                :move-interval 400
                :current-direction (random-direction)}}
        (= :seek type)
        {:pos pos
         :health 3
         :image-type :hedge-hog
         :seek {:speed 2}}))

(defn udlr-update-move-time [enemy]
  (if (> (- (js/millis)
            (:move-time (:udlr enemy)))
         (:move-interval (:udlr enemy)))
    (-> enemy
        (assoc-in [:udlr :move-time] (js/millis))
        (assoc-in [:udlr :current-direction] (random-direction)))
    enemy))

(defn random-shoot-update [app-state enemy]
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
                                                     :speed (:speed (:shoot-player enemy))
                                                     :direction (-> (v/add (:pos (:player @app-state))
                                                                            [32 32])
                                                                    (v/sub (:pos enemy))
                                                                    (v/normalize))})
        (assoc-in enemy [:shoot-player :shoot-time] (js/millis)))
    enemy)
  )

(defn diagonal-move-update [enemy]
  (if (> (- (js/millis)
            (:move-time (:diagonal-move enemy)))
         (:interval (:diagonal-move enemy)))
    (-> enemy
        (assoc-in [:diagonal-move :move-time] (js/millis))
        (assoc-in [:diagonal-move :current-direction] (random-diagonal-direction)))
    enemy))

(defn update-enemy [app-state enemy]
  ;; (update enemy :pos #(->> (v/sub (:pos (:player @app-state)) %)
  ;;                          (v/normalize)
  ;;                          (v/mult-vec [4 0])
  ;;                          (v/add %)))
  (-> enemy
      (u/if-update :diagonal-move (fn [e]
                                    (diagonal-move-update (update enemy :pos #(->> (v/mult (:speed (:diagonal-move e))
                                                                                    (:current-direction (:diagonal-move e)))
                                                                            (v/add %))))))
      (u/if-update :shoot-player (fn [e]
                                 (shoot-player app-state e)))
      (u/if-update :rotate (fn [e]
                           (let [{:keys [radius
                                         theta
                                         theta-vel]} (:rotate e)]
                             (-> e
                                 (assoc :pos (vector (+ (v/x (:pos e))
                                                        (* radius (js/cos theta)))
                                                     (+ (v/y (:pos e))
                                                        (* radius (js/sin theta)))))
                                 (update-in [:rotate :theta] #(+ % theta-vel))))))
      (u/if-update :random-shoot (fn [e]
                                   (random-shoot-update app-state e)))
      (u/if-update :udlr (fn [e]
                         (udlr-update-move-time (update e :pos #(->> (v/mult (:speed (:udlr e))
                                                                            (:current-direction (:udlr e)))
                                                                     (v/add %))))))
      (u/if-update :seek (fn [e]
                         (update e :pos #(->> (v/sub (:pos (:player @app-state)) %)
                                                 (v/normalize)
                                                 (v/mult (:speed (:seek enemy)))
                                                 (v/add %)))))))
