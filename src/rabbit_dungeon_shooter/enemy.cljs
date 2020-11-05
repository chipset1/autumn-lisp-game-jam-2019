(ns rabbit-dungeon-shooter.enemy
  (:require [rabbit-dungeon-shooter.vector :as v]
            [rabbit-dungeon-shooter.assets :as assets]
            [rabbit-dungeon-shooter.util :as u]))

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

(defn defaults [app-state enemy]
  (-> enemy
      (u/if-not-update :health #(assoc % :health 3))
      (u/if-not-update :size #(assoc % :size (:enemy-size @app-state)))))

(defn create-enemy [app-state pos type]
  (cond (= :diagonal-move type)
        {:pos pos
         :sprite-sheet {:col 3
                        :row 19}
         :diagonal-move {:interval 500
                         :speed 4
                         :current-direction (random-diagonal-direction)
                         :move-time (js/millis)}}
        (= :rotate-and-shoot type)
        {:pos pos
         :health 100
         :sprite-sheet {:col 7
                        :row 21}
         :on-player-hit :do-not-die
         :type :final-boss
         :size (* (:enemy-size @app-state) 2)
         :rotate {:radius 4
                  :theta 0
                  :theta-vel 0.03}
         :shoot-player [{:shoot-time (js/millis)
                         :offset [0 0]
                         :speed 2
                         :interval 1000}
                        {:shoot-time (js/millis)
                         :offset [128 128]
                         :speed 2
                         :interval 800}]}
        (= :sit-and-shoot type)
        {:pos pos
         :health 10
         :sprite-sheet {:col 6
                        :row 18}
         :on-player-hit :do-not-die
         :shoot-player {:shoot-time (js/millis)
                        :offset [0 0]
                        :speed 20
                        :interval 1000}}
        (= :rotate-seek type)
        {:pos pos
         :sprite-sheet {:col 6
                        :row 21}
         :seek {:speed 1}
         :rotate {:radius 4
                  :theta (js/random js/TWO_PI)
                  :theta-vel 0.03}}
        (= :udlr-shoot type)
        {:pos pos
         :sprite-sheet {:col 4
                        :row 18}
         :udlr {:move-time (js/millis)
                :speed 3
                :move-interval 1500
                :current-direction (random-direction)}
         :random-shoot {:direction (random-direction)
                        :shoot-time (js/millis)
                        :interval 1000}}
        (= :udlr type)
        {:pos pos
         :sprite-sheet {:col 2
                        :row 22}
         :udlr {:move-time (js/millis)
                :speed 4.5
                :move-interval 400
                :current-direction (random-direction)}}
        (= :seek type)
        {:pos pos
         :sprite-sheet {:col 6
                        :row 20}
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

(defn diagonal-move-update [enemy]
  (if (> (- (js/millis)
            (:move-time (:diagonal-move enemy)))
         (:interval (:diagonal-move enemy)))
    (-> enemy
        (assoc-in [:diagonal-move :move-time] (js/millis))
        (assoc-in [:diagonal-move :current-direction] (random-diagonal-direction)))
    enemy))

(defn shoot-player [app-state comp-data enemy]
  (if (> (- (js/millis)
            (:shoot-time comp-data))
         (:interval comp-data))
    (do (swap! app-state
               update
               :enemy-bullets
               conj
               {:pos (v/add (:pos enemy)
                            (:offset comp-data))
                :speed (:speed comp-data)
                :direction (-> (v/add (:pos (:player @app-state))
                                      [32 32])
                               (v/sub (:pos enemy))
                               (v/normalize))})
        (assoc comp-data :shoot-time (js/millis)))
    comp-data))

(defn draw-enemy [app-state e]
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
                                   (if (sequential? (:shoot-player e))
                                     (update e :shoot-player #(doall (map (fn [comp-data]
                                                                            (shoot-player app-state comp-data e))
                                                                          %)))
                                     (update e :shoot-player #(shoot-player app-state % e)))))
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
