(ns autumn-lisp-game-jam-2019.core
    (:require ))

(enable-console-print!)


(defonce app-state (atom {:text "Hello world!"}))

(defn setup []
  (js/createCanvas 720 400))

(defn draw []
  (js/background 50)
  (js/fill 0)
  (js/rect 360 200 10 10))

(doto js/window
  (aset "setup" setup)
  (aset "draw" draw))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
