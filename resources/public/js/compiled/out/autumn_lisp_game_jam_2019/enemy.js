// Compiled by ClojureScript 1.10.520 {}
goog.provide('autumn_lisp_game_jam_2019.enemy');
goog.require('cljs.core');
goog.require('autumn_lisp_game_jam_2019.vector');
autumn_lisp_game_jam_2019.enemy.enemy_directions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
autumn_lisp_game_jam_2019.enemy.if_update = (function autumn_lisp_game_jam_2019$enemy$if_update(x,pred,f){
if(cljs.core.truth_(pred.call(null,x))){
return f.call(null,x);
} else {
return x;
}
});
autumn_lisp_game_jam_2019.enemy.random_direction = (function autumn_lisp_game_jam_2019$enemy$random_direction(){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,autumn_lisp_game_jam_2019.enemy.enemy_directions));
});
autumn_lisp_game_jam_2019.enemy.create_enemy = (function autumn_lisp_game_jam_2019$enemy$create_enemy(pos,type){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sit-and-shoot","sit-and-shoot",782727178),type)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"health","health",-295520649),(10),new cljs.core.Keyword(null,"image-type","image-type",1321483619),new cljs.core.Keyword(null,"sorcerer","sorcerer",817319056),new cljs.core.Keyword(null,"shoot-player","shoot-player",-1897270358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613),millis(),new cljs.core.Keyword(null,"interval","interval",1708495417),(1000)], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rotate-seek","rotate-seek",-1749517793),type)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"health","health",-295520649),(3),new cljs.core.Keyword(null,"image-type","image-type",1321483619),new cljs.core.Keyword(null,"ghoul","ghoul",1993963194),new cljs.core.Keyword(null,"seek","seek",758996602),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(1)], null),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(4),new cljs.core.Keyword(null,"theta","theta",-427510258),random(TWO_PI),new cljs.core.Keyword(null,"theta-vel","theta-vel",-1371410722),0.03], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"udlr-shoot","udlr-shoot",1983704132),type)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"health","health",-295520649),(3),new cljs.core.Keyword(null,"image-type","image-type",1321483619),new cljs.core.Keyword(null,"archer","archer",863460629),new cljs.core.Keyword(null,"udlr","udlr",-1881543408),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"move-time","move-time",-846945775),millis(),new cljs.core.Keyword(null,"speed","speed",1257663751),(3),new cljs.core.Keyword(null,"move-interval","move-interval",-1929861731),(1500),new cljs.core.Keyword(null,"current-direction","current-direction",1924066876),autumn_lisp_game_jam_2019.enemy.random_direction.call(null)], null),new cljs.core.Keyword(null,"random-shoot","random-shoot",170073121),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),autumn_lisp_game_jam_2019.enemy.random_direction.call(null),new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613),millis(),new cljs.core.Keyword(null,"interval","interval",1708495417),(1000)], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"udlr","udlr",-1881543408),type)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"health","health",-295520649),(3),new cljs.core.Keyword(null,"image-type","image-type",1321483619),new cljs.core.Keyword(null,"skeleton","skeleton",-1767035953),new cljs.core.Keyword(null,"udlr","udlr",-1881543408),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"move-time","move-time",-846945775),millis(),new cljs.core.Keyword(null,"speed","speed",1257663751),(3),new cljs.core.Keyword(null,"move-interval","move-interval",-1929861731),(400),new cljs.core.Keyword(null,"current-direction","current-direction",1924066876),autumn_lisp_game_jam_2019.enemy.random_direction.call(null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"seek","seek",758996602),type)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"health","health",-295520649),(3),new cljs.core.Keyword(null,"image-type","image-type",1321483619),new cljs.core.Keyword(null,"hedge-hog","hedge-hog",2089397602),new cljs.core.Keyword(null,"seek","seek",758996602),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"speed","speed",1257663751),(2)], null)], null);
} else {
return null;
}
}
}
}
}
});
autumn_lisp_game_jam_2019.enemy.udlr_update_move_time = (function autumn_lisp_game_jam_2019$enemy$udlr_update_move_time(enemy){
if(((millis() - new cljs.core.Keyword(null,"move-time","move-time",-846945775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"udlr","udlr",-1881543408).cljs$core$IFn$_invoke$arity$1(enemy))) > new cljs.core.Keyword(null,"move-interval","move-interval",-1929861731).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"udlr","udlr",-1881543408).cljs$core$IFn$_invoke$arity$1(enemy)))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"udlr","udlr",-1881543408),new cljs.core.Keyword(null,"move-time","move-time",-846945775)], null),millis()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"udlr","udlr",-1881543408),new cljs.core.Keyword(null,"current-direction","current-direction",1924066876)], null),autumn_lisp_game_jam_2019.enemy.random_direction.call(null));
} else {
return enemy;
}
});
autumn_lisp_game_jam_2019.enemy.shoot_update = (function autumn_lisp_game_jam_2019$enemy$shoot_update(app_state,enemy){
if(((millis() - new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"random-shoot","random-shoot",170073121).cljs$core$IFn$_invoke$arity$1(enemy))) > new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"random-shoot","random-shoot",170073121).cljs$core$IFn$_invoke$arity$1(enemy)))){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"speed","speed",1257663751),(10),new cljs.core.Keyword(null,"direction","direction",-633359395),autumn_lisp_game_jam_2019.enemy.random_direction.call(null)], null));

return cljs.core.assoc_in.call(null,enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-shoot","random-shoot",170073121),new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613)], null),millis());
} else {
return enemy;
}
});
autumn_lisp_game_jam_2019.enemy.shoot_player = (function autumn_lisp_game_jam_2019$enemy$shoot_player(app_state,enemy){
if(((millis() - new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shoot-player","shoot-player",-1897270358).cljs$core$IFn$_invoke$arity$1(enemy))) > new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shoot-player","shoot-player",-1897270358).cljs$core$IFn$_invoke$arity$1(enemy)))){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.update,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"speed","speed",1257663751),(10),new cljs.core.Keyword(null,"direction","direction",-633359395),autumn_lisp_game_jam_2019.vector.normalize.call(null,autumn_lisp_game_jam_2019.vector.sub.call(null,autumn_lisp_game_jam_2019.vector.add.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy)))], null));

return cljs.core.assoc_in.call(null,enemy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shoot-player","shoot-player",-1897270358),new cljs.core.Keyword(null,"shoot-time","shoot-time",132337613)], null),millis());
} else {
return enemy;
}
});
autumn_lisp_game_jam_2019.enemy.update_enemy = (function autumn_lisp_game_jam_2019$enemy$update_enemy(app_state,enemy){
return autumn_lisp_game_jam_2019.enemy.if_update.call(null,autumn_lisp_game_jam_2019.enemy.if_update.call(null,autumn_lisp_game_jam_2019.enemy.if_update.call(null,autumn_lisp_game_jam_2019.enemy.if_update.call(null,autumn_lisp_game_jam_2019.enemy.if_update.call(null,enemy,new cljs.core.Keyword(null,"shoot-player","shoot-player",-1897270358),(function (e){
return autumn_lisp_game_jam_2019.enemy.shoot_player.call(null,app_state,e);
})),new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (e){
var map__24334 = new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(e);
var map__24334__$1 = (((((!((map__24334 == null))))?(((((map__24334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24334):map__24334);
var radius = cljs.core.get.call(null,map__24334__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var theta = cljs.core.get.call(null,map__24334__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var theta_vel = cljs.core.get.call(null,map__24334__$1,new cljs.core.Keyword(null,"theta-vel","theta-vel",-1371410722));
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"pos","pos",-864607220),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e)) + (radius * cos(theta))),(autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e)) + (radius * sin(theta)))],null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"theta","theta",-427510258)], null),((function (map__24334,map__24334__$1,radius,theta,theta_vel){
return (function (p1__24331_SHARP_){
return (p1__24331_SHARP_ + theta_vel);
});})(map__24334,map__24334__$1,radius,theta,theta_vel))
);
})),new cljs.core.Keyword(null,"random-shoot","random-shoot",170073121),(function (e){
return autumn_lisp_game_jam_2019.enemy.shoot_update.call(null,app_state,e);
})),new cljs.core.Keyword(null,"udlr","udlr",-1881543408),(function (e){
return autumn_lisp_game_jam_2019.enemy.udlr_update_move_time.call(null,cljs.core.update.call(null,e,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (p1__24332_SHARP_){
return autumn_lisp_game_jam_2019.vector.add.call(null,p1__24332_SHARP_,autumn_lisp_game_jam_2019.vector.mult.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"udlr","udlr",-1881543408).cljs$core$IFn$_invoke$arity$1(enemy)),new cljs.core.Keyword(null,"current-direction","current-direction",1924066876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"udlr","udlr",-1881543408).cljs$core$IFn$_invoke$arity$1(enemy))));
})));
})),new cljs.core.Keyword(null,"seek","seek",758996602),(function (e){
return cljs.core.update.call(null,e,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (p1__24333_SHARP_){
return autumn_lisp_game_jam_2019.vector.add.call(null,p1__24333_SHARP_,autumn_lisp_game_jam_2019.vector.mult.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seek","seek",758996602).cljs$core$IFn$_invoke$arity$1(enemy)),autumn_lisp_game_jam_2019.vector.normalize.call(null,autumn_lisp_game_jam_2019.vector.sub.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))),p1__24333_SHARP_))));
}));
}));
});

//# sourceMappingURL=enemy.js.map?rel=1582247835863
