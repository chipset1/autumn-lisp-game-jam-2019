(ns autumn-lisp-game-jam-2019.core
  (:require [autumn-lisp-game-jam-2019.vector :as v]
            [autumn-lisp-game-jam-2019.enemy :as enemy]
            [autumn-lisp-game-jam-2019.dungeon :as dungeon]))

(enable-console-print!)

(def width (* 1.5 512))
(def height (* 1.5 384))
(def player-speed 5)
(def player-size 64)
(def bullet-size 10)
(def tile-size 64)
(def door-spawn-chance 0.5)
(def enemy-spawn-chance 0.9)
(def default-key-pos [(- (+ 256 512 512) 32)
                      (- (+ 256 512) 32)])
(def default-exit-pos [(- (+ 256 512 512) 32) (- 256 32)])

(def corner-positions [[64 64]
                             [(- width 128) 64]
                             [64 (- height 128)]
                             [(- width 128) (- height 128)]])
(def center-corner-positions [[(* tile-size 2) (* tile-size 2)]
                                    [(- width (* tile-size 3)) (* tile-size 2)]
                                    [(* tile-size 2) (- height (* tile-size 3))]
                                    [(- width (* tile-size 3)) (- height (* tile-size 3))]])

(def tile-map [[1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1]
               [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1]
               ])

(def default-room [[1 1 1 1 1 1 1 1 1 1 1 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 0 0 0 0 0 0 0 0 0 0 1]
                   [1 1 1 1 1 1 1 1 1 1 1 1]
                   ])

(defonce app-state (atom {:characters [{:pos [(- 256 32) (- 256 32)]
                                        :dialog ["hey this is a game"
                                                 "go and find the key and exit"
                                                 "more text 1"
                                                 "more text 2"
                                                 "more text 3"
                                                 "more text 4"]
                                        :type :character}
                                       ]
                          :enemies []
                          :enemy-bullets []
                          :assets {:images {:fantasy-tileset-image nil}}
                          :shop-keeper {:pos [0 0]
                                        :items [{:heal 1
                                                 :sold? false
                                                 :cost 10
                                                 :type :heart}]}
                          :tile-map default-room
                          :tile-map-previous default-room
                          :scroll-start-time 0
                          :scroll-interval 250
                          :scroll-target-min-x 0
                          :scroll-target-min-y 0
                          :scroll-x 0
                          :scroll-y 0
                          :bounds-x width ;boundary x when to change to new room
                          :bounds-y height
                          :bullets []
                          :bullet-last-time 0
                          :bullet-interval 200
                          :player {:pos [256 256]
                                   :health 6
                                   :max-health 6
                                   :money 0 ; increase once enemy is killed
                                   :direction [0 0]
                                   :sword {:angle 0
                                           :swing-time 100
                                           :swing-start 0}
                                   :state nil}
                          :key {:pos default-key-pos}
                          :exit {:pos default-exit-pos}
                          :level {:door-locked? true
                                  :exit-transition 0}
                          :dialog-index 0}))

(defn add-image [key image]
  (swap! app-state assoc-in [:assets :images key] image))

(defn image [key]
  (get-in @app-state [:assets :images key]))

(defn draw-wall-tile [x y]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            64
            64
            32
            32))

(defn draw-key [[x y]]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            128
            128
            32
            32))

(defn draw-door [[x y]]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            128
            32
            32
            32))

(defn draw-stairs [[x y]]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            160
            32
            32
            32))

(defn draw-player [[x y]]
  #_(js/image (:player-image @app-state)
            x
            y
            player-size
            player-size)
  (js/image (image :fantasy-tileset-image)
            x
            y
            player-size
            player-size
            32
            (* 20 32)
            32
            32))

(defn draw-character [[x y]]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            32
            (* 18 32)
            32
            32))

(defn draw-sword [[x y] angle]
  (js/push)
  (js/translate (+ x 32) (+ y 32))
  (js/rotate angle)
  (js/ellipse 0 0 tile-size tile-size)
  (js/translate (- tile-size) (- tile-size))
  (js/image (image :fantasy-tileset-image)
            0
            0
            tile-size
            tile-size
            64
            (* 7 32)
            32
            32)
  (js/pop))

(defn draw-shop-keeper [[x y]]
  (js/image (image :fantasy-tileset-image)
            x
            y
            tile-size
            tile-size
            (* 7 32)
            (* 18 32)
            32
            32))

(defn draw-heart-item [x y]
  (js/image (image :heart-image)
            x
            y
            tile-size
            tile-size))

(defn player-hit-box
  ([]
   (player-hit-box (:pos (:player @app-state))))
  ([[x y]]
   ;; (js/push)
   ;; (js/fill 255 0 255 10)
   ;; (js/rect (+ (v/x (:pos (:player @app-state))) 16)
   ;;          (+ (v/y (:pos (:player @app-state))) 12)
   ;;          (- player-size 32)
   ;;          (- player-size 24))
   ;; (js/pop)
   (let [offset-x 16
         offset-y 12]
     {:pos [(+ x offset-x)
           (+ y offset-y)]
     :width (- player-size (* offset-x 2))
     :height (- player-size (* offset-y 2))})))

(defn draw-tile-map [tile-map-key offset-x offset-y]
  (doall (map-indexed (fn [i row]
                        (doall (map-indexed (fn [j tile]
                                              (when (= tile 1)
                                                (draw-wall-tile (+ offset-x (* j tile-size)) (+ offset-y (* i tile-size)))))
                                            row)))
                      (tile-map-key @app-state))))

(defn player-room-min
  "min room bounds that player is in.
  eg: in the starting room this is 0,0.
      one over to the right its width, 0"
  []
  [(* width
      (js/floor (/ (-> @app-state
                       :player
                       :pos
                       v/x)
                   js/width)))
   (* height
      (js/floor (/ (-> @app-state
                       :player
                       :pos
                       v/y)
                   js/height)))])

(defn solid-tile? [x y]
  (let [col (js/floor (/ (- x (- (:bounds-x @app-state) width))
                         tile-size))
        row (js/floor (/ (- y (- (:bounds-y @app-state) height))
                         tile-size))]
    (= 1 (get-in (:tile-map @app-state) [row col]))))

(defn player-tile-map-collision?
  [pos]
  (let [left (v/x (:pos (player-hit-box pos)))
        right (+ (v/x (:pos (player-hit-box pos)))
                 (:width (player-hit-box pos)))
        top (v/y (:pos (player-hit-box pos)))
        bottom (+ (v/y (:pos (player-hit-box pos)))
                  (:height (player-hit-box pos)))]
    (or (solid-tile? left top)
        (solid-tile? left bottom)
        (solid-tile? right top)
        (solid-tile? right bottom))))

(defn tile-map-collision? [pos size]
  (let [left (v/x pos)
        right (+ (v/x pos) size)
        top (v/y pos)
        bottom (+ (v/y pos) size)]
    (or (solid-tile? left top)
        (solid-tile? left bottom)
        (solid-tile? right top)
        (solid-tile? right bottom))))

(defn new-player-position [player-pos vel]
  (let [new-pos (v/add player-pos vel)]
    (if (player-tile-map-collision? new-pos)
      player-pos
      new-pos)))

(defn move-player [vel-direction]
  (swap! app-state
         assoc-in
         [:player :direction]
         vel-direction)
  (swap! app-state
         update-in
         [:player :pos]
         new-player-position
         (v/mult player-speed vel-direction)))

(defn player-movement []
  (when (js/keyIsDown 87)
    (move-player [0 -1]))
  (when (js/keyIsDown 83)
    (move-player [0 1]))
  (when (js/keyIsDown 65)
    (move-player [-1 0]))
  (when (js/keyIsDown 68)
    (move-player [1 0])))

(defn aabb?
  ([pos1 size1 pos2 size2] (aabb? pos1 size1 size1 pos2 size2 size2))
  ([[x1 y1] width1 height1 [x2 y2] width2 height2]
   (and (< x1 (+ x2 width2))
        (> (+ x1 width1) x2)
        (< y1 (+ y2 height2))
        (> (+ y1 height1) y2))))

(defn player-key-collision? []
  (aabb? (-> @app-state
             :player
             :pos)
         player-size
         (-> @app-state
             :key
             :pos)
         tile-size))

(defn key-door-collision? []
  (aabb? (-> @app-state
             :key
             :pos)
         tile-size
         (-> @app-state
             :exit
             :pos)
         tile-size))

(defn attach-key-to-player []
  (swap! app-state
         assoc-in
         [:key :pos]
         (-> @app-state
             :player
             :pos)))

(defn start-sword-swing []
  (swap! app-state
         assoc-in
         [:player :state]
         :attacking)
  (swap! app-state
         assoc-in
         [:player :sword :swing-start]
         (js/millis)))

(defn sword-angle [[x-dir y-dir]]
  (let [base-angle (+ (+ (/ js/PI 4) (/ js/PI 2))
                      (-> @app-state
                          :player
                          :sword
                          :angle))]
    (cond (= y-dir 1) base-angle
          (= y-dir -1) (+ js/PI base-angle)
          (= x-dir 1) (+ js/PI (/ js/PI 2) base-angle)
          (= x-dir -1) (+ (/ js/PI 2) base-angle)
          :default base-angle)))

(defn sword-enemy-collision []
  (doall (map (fn [enemy]
                #_(js/ellipse (+ 32
                               (v/x (-> @app-state
                                        :player
                                        :pos)))
                            (+ 32
                               (v/y (-> @app-state
                                        :player
                                        :pos)))
                            (+ 78 tile-size)
                            (+ 78 tile-size))
                (when (aabb? (-> @app-state
                                 :player
                                 :pos)
                             tile-size
                             (:pos enemy)
                             tile-size)
                  ))
              (:enemies @app-state))))

(defn swing-sword []
  (when (= :attacking
           (-> @app-state
               :player
               :state))
    (sword-enemy-collision)
    (draw-sword (-> @app-state
                    :player
                    :pos)
                (sword-angle (-> @app-state
                                 :player
                                 :direction)))
    (swap! app-state
           assoc-in
           [:player :sword :angle]
           (js/map (js/millis)
                   (-> @app-state
                       :player
                       :sword
                       :swing-start)
                   (+ (-> @app-state
                          :player
                          :sword
                          :swing-time)
                      (-> @app-state
                          :player
                          :sword
                          :swing-start))
                   0
                   js/PI)))
  (when (> (js/millis)
           (+ (-> @app-state
                  :player
                  :sword
                  :swing-time)
              (-> @app-state
                  :player
                  :sword
                  :swing-start)))
    (swap! app-state
           assoc-in
           [:player :sword :angle]
           0)
    (swap! app-state
           assoc-in
           [:player :state]
           :not-attacking)))

(defn shoot-direction [dir]
  (swap! app-state
         update
         :bullets
         conj
         {:pos (v/add (-> @app-state
                          :player
                          :pos)
                      [32 32])
          :direction dir}))

(defn shoot []
  (when (> (- (js/millis)
              (:bullet-last-time @app-state))
           (:bullet-interval @app-state))
    (swap! app-state assoc :bullet-last-time (js/millis))
    (cond (and (js/keyIsDown js/UP_ARROW) (js/keyIsDown js/LEFT_ARROW)) (shoot-direction [-1 -1])
          (and (js/keyIsDown js/UP_ARROW) (js/keyIsDown js/RIGHT_ARROW)) (shoot-direction [1 -1])
          (and (js/keyIsDown js/DOWN_ARROW) (js/keyIsDown js/LEFT_ARROW)) (shoot-direction [-1 1])
          (and (js/keyIsDown js/DOWN_ARROW) (js/keyIsDown js/RIGHT_ARROW)) (shoot-direction [1 1])
          (js/keyIsDown js/UP_ARROW) (shoot-direction [0 -1])
          (js/keyIsDown js/DOWN_ARROW) (shoot-direction [0 1])
          (js/keyIsDown js/LEFT_ARROW) (shoot-direction [-1 0])
          (js/keyIsDown js/RIGHT_ARROW) (shoot-direction [1 0]))))

(defn bullet-hit-enemy? [b]
  (some (fn [e]
          (aabb? (:pos b)
                 bullet-size
                 (:pos e)
                 tile-size))
        (:enemies @app-state)))

(defn out-of-room? [pos]
  (or (> (v/x pos)
         (:bounds-x @app-state))
      (< (v/x pos)
         (- (:bounds-x @app-state) width))
      (> (v/y pos)
         (:bounds-y @app-state))
      (< (v/y pos)
         (- (:bounds-y @app-state) height))))

(defn update-enemy-bullets []
  (doall (map (fn [b]
                (when (aabb? (:pos b)
                             bullet-size
                             bullet-size
                             (:pos (player-hit-box))
                             (:width (player-hit-box))
                             (:height (player-hit-box)))
                  (swap! app-state update-in [:player :health] dec)))
              (:enemy-bullets @app-state)))
  (swap! app-state
         update
         :enemy-bullets
         (partial remove (fn [b]
                           (or (out-of-room? (:pos b))
                               (aabb? (:pos b)
                                      bullet-size
                                      bullet-size
                                      (:pos (player-hit-box))
                                      (:width (player-hit-box))
                                      (:height (player-hit-box)))
                               (tile-map-collision? (:pos b) 10)))))
  (swap! app-state
         update
         :enemy-bullets
         (fn [bullets]
           (map (fn [b]
                  (assoc b
                         :pos
                         (v/add (:pos b) (v/mult (:speed b) (:direction b)))))
                bullets))))

(defn update-bullets []
  (swap! app-state
         update
         :bullets
         (partial remove (fn [b]
                           (or (out-of-room? (:pos b))
                               (bullet-hit-enemy? b)
                               (tile-map-collision? (:pos b) 10)))))
  (swap! app-state
         update
         :bullets
         (fn [bullets]
           (map (fn [b]
                  (assoc b
                         :pos
                         (v/add (:pos b) (v/mult 15 (:direction b)))))
                bullets))))

(defn display-bullets [bullet-key]
  (doall (map (fn [bullet]
                (js/fill 255)
                (js/stroke 0)
                (js/rect (v/x (:pos bullet))
                         (v/y (:pos bullet))
                         bullet-size
                         bullet-size))
              (bullet-key @app-state))))

(defn add-door-right []
  (swap! app-state
         assoc-in
         [:tile-map 3 11]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 4 11]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 5 11]
         0)
  )

(defn add-door-left []
  (swap! app-state
         assoc-in
         [:tile-map 3 0]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 4 0]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 5 0]
         0)
  )

(defn add-door-top []
  (swap! app-state
         assoc-in
         [:tile-map 0 5]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 0 6]
         0)
  )

(defn add-door-bottom []
  (swap! app-state
         assoc-in
         [:tile-map 8 5]
         0)
  (swap! app-state
         assoc-in
         [:tile-map 8 6]
         0)
  )

(defn shift-left []
  (swap! app-state
         assoc-in
         [:player :state]
         :scrolling-x)
  (swap! app-state assoc :scroll-target-min-y 0)
  (swap! app-state assoc :scroll-target-min-x width)
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-right []
  (swap! app-state
         assoc-in
         [:player :state]
         :scrolling-x)
  (swap! app-state assoc :scroll-target-min-y 0)
  (swap! app-state assoc :scroll-target-min-x (- width))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-up []
  (swap! app-state
         assoc-in
         [:player :state]
         :scrolling-y)
  (swap! app-state assoc :scroll-target-min-x 0)
  (swap! app-state assoc :scroll-target-min-y height)
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn shift-down []
  (swap! app-state
         assoc-in
         [:player :state]
         :scrolling-y)
  (swap! app-state assoc :scroll-target-min-x 0)
  (swap! app-state assoc :scroll-target-min-y (- height))
  (swap! app-state assoc :scroll-start-time (js/millis))
  )

(defn scroll-to-next-room []
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
  (when (and (not= :not-scrolling
                   (-> @app-state
                       :player
                       :state))
             (> (js/millis)
                (+ (:scroll-start-time @app-state)
                   (:scroll-interval @app-state))))
    (swap! app-state assoc :scroll-x 0)
    (swap! app-state assoc :scroll-y 0)
    (swap! app-state
           assoc-in
           [:player :state]
           :not-scrolling)))

(defn add-enemy!
  "adds enemy at screen coordinates"
  [screen-x screen-y type]
  (swap! app-state
         update
         :enemies
         conj
         (enemy/create-enemy [(+ (- (:bounds-x @app-state) width)
                                 screen-x)
                              (+ (- (:bounds-y @app-state) height)
                                 screen-y)]
                             type)))

(defn spawn-enemies []
  (when (and (not (dungeon/room-has-one-door? (:tile-map @app-state)))
             (< (js/random) enemy-spawn-chance))
    (let [enemy-type (first (shuffle [:seek :udlr :udlr-shoot]))]
      (doseq [[x y] center-corner-positions]
        (add-enemy! x y enemy-type)))))

(defn check-enemy-tile-collision [new-enemy old-pos]
  (update new-enemy :pos (fn [new-pos]
                           (if (tile-map-collision? new-pos tile-size)
                             old-pos
                             new-pos))))

(defn update-enemies []
  (when (and (not= :scrolling-x
               (-> @app-state
                   :player
                   :state))
             (not= :scrolling-y
                   (-> @app-state
                       :player
                       :state)))
      (swap! app-state
          update
          :enemies
          (partial map (fn [enemy]
                         (check-enemy-tile-collision (enemy/update-enemy app-state enemy)
                                                     (:pos enemy))))))
  (swap! app-state
         update
         :enemies
         (partial map (fn [e]
                        (cond (aabb? (:pos e)
                                     tile-size
                                     tile-size
                                     (:pos (player-hit-box))
                                     (:width (player-hit-box))
                                     (:height (player-hit-box)))
                              (do (swap! app-state update-in [:player :health] dec)
                                  (assoc e :health 0))
                              (some (fn [b] (aabb? (:pos b) bullet-size (:pos e) tile-size))
                                    (:bullets @app-state))
                              (update e :health dec)
                              :else e))))
  (doall (map (fn [e]
                (when (<= (:health e) 0)
                  (swap! app-state update-in [:player :money] inc)))
              (:enemies @app-state)))
  (swap! app-state
         update
         :enemies
         (partial remove (fn [e]
                           (<= (:health e) 0))))
  )

(defn draw-enemy [e]
  (js/text (str "health " (:health e)) (v/x (:pos e)) (v/y (:pos e)))
  (draw-character (:pos e)))

(defn spawn-shop-keeper-items []
  (doall (map-indexed (fn [index item]
                        (swap! app-state
                               assoc-in
                               [:shop-keeper :items index :sold?]
                               false))
                      (-> @app-state
                          :shop-keeper
                          :items))))

(defn spawn-shop-keeper []
  (if (dungeon/room-has-one-door? (:tile-map @app-state))
    (do (spawn-shop-keeper-items)
        (swap! app-state
               assoc-in
               [:shop-keeper :pos]
               [(- (:bounds-x @app-state)
                   (/ width 2)
                   32)
                (- (:bounds-y @app-state)
                   (/ height 2)
                   32)]))
    (swap! app-state
           assoc-in
           [:shop-keeper :pos]
           [0 0])
    ))

(defn on-room-spawn []
  (swap! app-state assoc :tile-map-previous (:tile-map @app-state))
  (swap! app-state assoc :tile-map default-room))

(defn after-room-spawn []
  (swap! app-state assoc :enemies [])
  (spawn-enemies)
  (spawn-shop-keeper))

(defn spawn-room
  "update bounds, reset tile-map to default room, create door where entered, randomly create other doors"
  []
  (when (> (-> @app-state
               :player
               :pos
               v/x)
           (:bounds-x @app-state))
    (swap! app-state assoc :bounds-x (+ width (:bounds-x @app-state)))
    (on-room-spawn)
    (add-door-left)
    (shift-left)
    (when (< door-spawn-chance (js/random)) (add-door-right))
    (when (< door-spawn-chance (js/random)) (add-door-top))
    (when (< door-spawn-chance (js/random)) (add-door-bottom))
    (after-room-spawn))
  (when (< (+ (-> @app-state
                  :player
                  :pos
                  v/x)
              64)
           (- (:bounds-x @app-state) width))
    (swap! app-state assoc :bounds-x (- (:bounds-x @app-state) width))
    (on-room-spawn)
    (add-door-right)
    (shift-right)
    (when (< door-spawn-chance (js/random)) (add-door-left))
    (when (< door-spawn-chance (js/random)) (add-door-top))
    (when (< door-spawn-chance (js/random)) (add-door-bottom))
    (after-room-spawn))
  (when (> (-> @app-state
               :player
               :pos
               v/y)
           (:bounds-y @app-state))
    (swap! app-state assoc :bounds-y (+ height (:bounds-y @app-state)))
    (on-room-spawn)
    (add-door-top)
    (shift-up)
    (when (< door-spawn-chance (js/random)) (add-door-left))
    (when (< door-spawn-chance (js/random)) (add-door-right))
    (when (< door-spawn-chance (js/random)) (add-door-bottom))
    (after-room-spawn))
  (when (< (+ (-> @app-state
                  :player
                  :pos
                  v/y)
              64)
           (- (:bounds-y @app-state) height))
    (swap! app-state assoc :bounds-y (- (:bounds-y @app-state) height))
    (on-room-spawn)
    (add-door-bottom)
    (shift-down)
    (when (< door-spawn-chance (js/random)) (add-door-left))
    (when (< door-spawn-chance (js/random)) (add-door-right))
    (when (< door-spawn-chance (js/random)) (add-door-top))
    (after-room-spawn)))

(defn init-starting-room []
  (add-door-right)
  (add-door-left)
  (add-door-top)
  (add-door-bottom))

(defn reset-level []
  (init-starting-room)
  (swap! app-state assoc :tile-map-previous (:tile-map @app-state))
  (swap! app-state assoc-in [:player :health] (:max-health (:player @app-state)))
  (swap! app-state assoc-in [:player :money] 0)
  (swap! app-state assoc :enemies [])
  (swap! app-state
         assoc-in
         [:key :pos]
         default-key-pos)
  #_(swap! app-state
         assoc-in
         [:player :pos]
         [(- (/ width 2) 32) (- (/ height 2) 32)])
  (swap! app-state
         assoc-in
         [:level :door-locked?]
         true))

(defn item-player-collision? [item-x item-y]
  (aabb? [item-x item-y]
         tile-size
         tile-size
         (:pos (player-hit-box))
         (:width (player-hit-box))
         (:height (player-hit-box))))

(defn update-shop-keeper-items []
  (doall (map-indexed (fn [index item]
                        (when (and (= :heart (:type item))
                                   (not (:sold? item))
                                   (>= (:money (:player @app-state))
                                       (:cost item))
                                   (< (:health (:player @app-state))
                                      (:max-health (:player @app-state)))
                                   (item-player-collision? (v/x (-> @app-state
                                                                    :shop-keeper
                                                                    :pos))
                                                           (+ 64
                                                              (v/y (-> @app-state
                                                                       :shop-keeper
                                                                       :pos)))))
                          (swap! app-state assoc-in [:shop-keeper :items index :sold?] true)
                          (swap! app-state update-in [:player :health] + (:heal item))
                          (swap! app-state update-in [:player :money] - (:cost item))))
                      (-> @app-state
                          :shop-keeper
                          :items))))

(defn draw-shop-keeper-items []
  (doall (map (fn [item]
                (when (= :heart (:type item))
                  (let [x (v/x (-> @app-state
                                   :shop-keeper
                                   :pos))
                        y (+ 64
                             (v/y (-> @app-state
                                      :shop-keeper
                                      :pos)))]
                    (when (not (:sold? item))
                      (js/text "     $10\n+1 health" x (+ 64 y))
                      (draw-heart-item x y)))))
              (-> @app-state
                  :shop-keeper
                  :items))))


(defn setup []
   ;256 	× 	192
  (js/createCanvas width height)
  (js/noSmooth)
  (add-image :fantasy-tileset-image (js/loadImage "/assets/fantasy-tileset.png"))
  (add-image :player-image (js/loadImage "/assets/test-sprite.png"))
  (add-image :heart-image (js/loadImage "/assets/heart.png"))
  (init-starting-room)
  (swap! app-state assoc :tile-map-previous (:tile-map @app-state)))

(defn draw []
  (js/background 50)
  (js/fill 0)
  (when (and (not= :talking
                   (-> @app-state
                       :player
                       :state))
             (-> @app-state
                 :level
                 :door-locked?))
    (player-movement))

  (let [start-x 100
        start-y 100
        dtext (fn [string y]
                (js/text string start-x (+ start-y y)))]
    (js/stroke 0 255 0)
    (js/fill 0 255 0)
    (dtext (int (js/frameRate)) 0)
    (dtext (:bounds-x @app-state) 10)
    (dtext (:bounds-y @app-state) 20)
    (dtext (str "pos: " (:pos (:player @app-state))) 30)
    (dtext (:direction (:player @app-state)) 40)
    (dtext (str "enemies count: " (count (:enemies @app-state))) 50)
    (dtext (str "player money: " (:money (:player @app-state))) 60)
    (dtext (str "player health: " (:health (:player @app-state))) 70)
    (dtext (str "player state: " (-> @app-state :player :state)) 80))
  ;; (js/text (str "scroll-x " (:scroll-x @app-state)) 150 200)
  ;; (js/text (str "scroll-y " (:scroll-y @app-state)) 150 210)

  #_(js/translate (- (+ 32
                      (- (-> @app-state
                           :player
                           :pos
                           v/x)
                       256)))
                (- (+ 32
                      (- (-> @app-state
                           :player
                           :pos
                           v/y)
                       256))))
  #_(js/translate (- (v/x (player-room-min)))
                (- (v/y (player-room-min))))
  (spawn-room)
  (scroll-to-next-room)
  (when (<= (:health (:player @app-state))
           0)
    (reset-level))
  (js/translate (+ (:scroll-x @app-state)
                   (- (- (:bounds-x @app-state) width)))
                (+ (:scroll-y @app-state)
                   (- (- (:bounds-y @app-state) height))))
  #_(js/translate (- (- (:bounds-x @app-state) width))
                (- (- (:bounds-y @app-state) height)))
  (shoot)
  (draw-shop-keeper (:pos (:shop-keeper @app-state)))
  (draw-shop-keeper-items)
  (update-shop-keeper-items)
  (draw-stairs (-> @app-state
                   :exit
                   :pos))
  (when (and (key-door-collision?)
             (-> @app-state
                 :level
                 :door-locked?))
    (swap! app-state
           assoc-in
           [:level :door-locked?]
           false)
    (swap! app-state
           assoc-in
           [:level :exit-transition]
           (js/millis)))
  (when (-> @app-state
            :level
            :door-locked?)
    (draw-key (-> @app-state
                  :key
                  :pos))
    (draw-door (-> @app-state
                   :exit
                   :pos)))

  (draw-player (-> @app-state
                   :player
                   :pos))

  (update-bullets)
  (update-enemy-bullets)
  (display-bullets :bullets)
  (display-bullets :enemy-bullets)
  ;; (swing-sword)

  (doall (map (fn [character]
                (js/stroke 0 255 0)
                (js/fill 0 255 0)
                (when (and (not= :talking
                                 (-> @app-state
                                     :player
                                     :state))
                           (aabb? (-> @app-state
                                      :player
                                      :pos)
                                  tile-size
                                  (:pos character)
                                  tile-size))
                  (js/text "press j to talk..."
                           (v/x (:pos character))
                           (+ (v/y (:pos character))
                              74)))
                (when (= :talking
                         (-> @app-state
                             :player
                             :state))
                  (if (>= (:dialog-index @app-state)
                          (count (:dialog character)))
                    (do (swap! app-state
                               assoc-in
                               [:player :state]
                               :not-talking)
                        (swap! app-state
                               assoc
                               :dialog-index
                               0))
                    (js/text (nth (:dialog character)
                                  (:dialog-index @app-state))
                             (v/x (:pos character))
                             (+ (v/y (:pos character))
                                74)))))
              (:characters @app-state)))
  (update-enemies)
  (doall (map #(draw-enemy %)
              (:enemies @app-state)))
  (doall (map #(draw-character (:pos %))
              (:characters @app-state)))

  (draw-tile-map :tile-map
                 (- (:bounds-x @app-state) width)
                 (- (:bounds-y @app-state) height))

  (draw-tile-map :tile-map-previous
                 (- (- (:bounds-x @app-state) width)
                    (:scroll-target-min-x @app-state))
                 (- (- (:bounds-y @app-state) height)
                    (:scroll-target-min-y @app-state)))
  (when (player-key-collision?)
    (attach-key-to-player))
  (when (not (-> @app-state
                 :level
                 :door-locked?))
    (when (> (js/millis)
             (+ 1000
                (-> @app-state
                    :level
                    :exit-transition)))
      (reset-level))
    (js/fill 50 (js/map (js/millis)
                       (-> @app-state
                           :level
                           :exit-transition)
                       (+ 1000
                          (-> @app-state
                              :level
                              :exit-transition))
                       0
                       255))
    (js/rect (* 512 2) 0 js/width js/height))
  )

(defn key-pressed []
  (when (= js/key "j")
    (when (= :talking
             (-> @app-state
                 :player
                 :state))
      (swap! app-state
             update
             :dialog-index
             inc))
    (doall (map (fn [character]
                  (when (aabb? (-> @app-state
                                   :player
                                   :pos)
                               tile-size
                               (:pos character)
                               tile-size)
                    (swap! app-state
                           assoc-in
                           [:player :state]
                           :talking)))
                (:characters @app-state)))))

(defn mouse-pressed []
  (swap! app-state update :enemies conj (enemy/create-enemy [(- width 128) (- height 128)] :udlr)))

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw)
  (aset "keyPressed" key-pressed)
  (aset "mousePressed" mouse-pressed)
  )

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
