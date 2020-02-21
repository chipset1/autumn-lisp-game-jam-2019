(ns autumn-lisp-game-jam-2019.map)

(defn unique [data]
  (into [] (set data)))

(defn room-has-one-door? [tile-map]
  (let [top (unique (first tile-map))
        bottom (unique (last tile-map))
        left (unique (map first tile-map))
        right (unique (map last tile-map))]
    (= '([1] [1] [1] [1 0])
       (sort [top bottom left right]))))