(ns rabbit-dungeon-shooter.assets)

(defn add-image [app-state key image]
  (swap! app-state assoc-in [:assets :images key] image))

(defn image [app-state key]
  (get-in @app-state [:assets :images key]))

(defn add-sound [app-state key sound]
  (swap! app-state assoc-in [:assets :audio key] sound))

(defn- sound [app-state key]
  (get-in @app-state [:assets :audio key]))

(defn play-sound [app-state key]
  (. (sound app-state key) play))

(defn play-tone-shot-sound [app-state]
  (let [tone-shot (nth (sound app-state :tone-shots)
                       (int (js/random 7)))]
    (. tone-shot play)))