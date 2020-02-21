// Compiled by ClojureScript 1.10.520 {}
goog.provide('autumn_lisp_game_jam_2019.vector');
goog.require('cljs.core');
autumn_lisp_game_jam_2019.vector.x = (function autumn_lisp_game_jam_2019$vector$x(v){
return cljs.core.first.call(null,v);
});
autumn_lisp_game_jam_2019.vector.y = (function autumn_lisp_game_jam_2019$vector$y(v){
return cljs.core.second.call(null,v);
});
autumn_lisp_game_jam_2019.vector.mag = (function autumn_lisp_game_jam_2019$vector$mag(v){
return Math.sqrt(((autumn_lisp_game_jam_2019.vector.x.call(null,v) * autumn_lisp_game_jam_2019.vector.x.call(null,v)) + (autumn_lisp_game_jam_2019.vector.y.call(null,v) * autumn_lisp_game_jam_2019.vector.y.call(null,v))));
});
autumn_lisp_game_jam_2019.vector.add = (function autumn_lisp_game_jam_2019$vector$add(v1,v2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.vector.x.call(null,v1) + autumn_lisp_game_jam_2019.vector.x.call(null,v2)),(autumn_lisp_game_jam_2019.vector.y.call(null,v1) + autumn_lisp_game_jam_2019.vector.y.call(null,v2))], null);
});
autumn_lisp_game_jam_2019.vector.sub = (function autumn_lisp_game_jam_2019$vector$sub(v1,v2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.vector.x.call(null,v1) - autumn_lisp_game_jam_2019.vector.x.call(null,v2)),(autumn_lisp_game_jam_2019.vector.y.call(null,v1) - autumn_lisp_game_jam_2019.vector.y.call(null,v2))], null);
});
autumn_lisp_game_jam_2019.vector.mult_vec = (function autumn_lisp_game_jam_2019$vector$mult_vec(v1,v2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.vector.x.call(null,v1) * autumn_lisp_game_jam_2019.vector.x.call(null,v2)),(autumn_lisp_game_jam_2019.vector.y.call(null,v1) * autumn_lisp_game_jam_2019.vector.y.call(null,v2))], null);
});
autumn_lisp_game_jam_2019.vector.mult = (function autumn_lisp_game_jam_2019$vector$mult(s,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * autumn_lisp_game_jam_2019.vector.x.call(null,v1)),(s * autumn_lisp_game_jam_2019.vector.y.call(null,v1))], null);
});
autumn_lisp_game_jam_2019.vector.div = (function autumn_lisp_game_jam_2019$vector$div(v1,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s / autumn_lisp_game_jam_2019.vector.x.call(null,v1)),(s / autumn_lisp_game_jam_2019.vector.y.call(null,v1))], null);
});
autumn_lisp_game_jam_2019.vector.normalize = (function autumn_lisp_game_jam_2019$vector$normalize(v){
var m = autumn_lisp_game_jam_2019.vector.mag.call(null,v);
if(cljs.core.not_EQ_.call(null,m,(0))){
return autumn_lisp_game_jam_2019.vector.mult.call(null,((1) / m),v);
} else {
return v;
}
});
autumn_lisp_game_jam_2019.vector.mag_sq = (function autumn_lisp_game_jam_2019$vector$mag_sq(v){
return ((autumn_lisp_game_jam_2019.vector.x.call(null,v) * autumn_lisp_game_jam_2019.vector.x.call(null,v)) + (autumn_lisp_game_jam_2019.vector.y.call(null,v) * autumn_lisp_game_jam_2019.vector.y.call(null,v)));
});
autumn_lisp_game_jam_2019.vector.limit = (function autumn_lisp_game_jam_2019$vector$limit(max,v){
if((autumn_lisp_game_jam_2019.vector.mag_sq.call(null,v) > (max * max))){
return autumn_lisp_game_jam_2019.vector.mult.call(null,max,autumn_lisp_game_jam_2019.vector.normalize.call(null,v));
} else {
return v;
}
});

//# sourceMappingURL=vector.js.map?rel=1579566034301
