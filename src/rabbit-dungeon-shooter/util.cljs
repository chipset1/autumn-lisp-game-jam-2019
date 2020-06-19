(ns rabbit-dungeon-shooter.util)

(defn if-update
  [x pred f]
  (if (pred x)
    (f x)
    x))

(defn if-not-update
  [x pred f]
  (if (not (pred x))
    (f x)
    x))
