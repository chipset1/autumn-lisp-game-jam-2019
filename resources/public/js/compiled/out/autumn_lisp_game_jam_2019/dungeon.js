// Compiled by ClojureScript 1.10.520 {}
goog.provide('autumn_lisp_game_jam_2019.dungeon');
goog.require('cljs.core');
autumn_lisp_game_jam_2019.dungeon.unique = (function autumn_lisp_game_jam_2019$dungeon$unique(data){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.set.call(null,data));
});
autumn_lisp_game_jam_2019.dungeon.room_has_one_door_QMARK_ = (function autumn_lisp_game_jam_2019$dungeon$room_has_one_door_QMARK_(tile_map){
var top = autumn_lisp_game_jam_2019.dungeon.unique.call(null,cljs.core.first.call(null,tile_map));
var bottom = autumn_lisp_game_jam_2019.dungeon.unique.call(null,cljs.core.last.call(null,tile_map));
var left = autumn_lisp_game_jam_2019.dungeon.unique.call(null,cljs.core.map.call(null,cljs.core.first,tile_map));
var right = autumn_lisp_game_jam_2019.dungeon.unique.call(null,cljs.core.map.call(null,cljs.core.last,tile_map));
return cljs.core._EQ_.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [top,bottom,left,right], null)));
});

//# sourceMappingURL=dungeon.js.map?rel=1578700376838
