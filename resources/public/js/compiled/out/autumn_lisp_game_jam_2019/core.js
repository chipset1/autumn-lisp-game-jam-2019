// Compiled by ClojureScript 1.10.520 {}
goog.provide('autumn_lisp_game_jam_2019.core');
goog.require('cljs.core');
goog.require('autumn_lisp_game_jam_2019.vector');
goog.require('autumn_lisp_game_jam_2019.enemy');
goog.require('autumn_lisp_game_jam_2019.dungeon');
cljs.core.enable_console_print_BANG_.call(null);
autumn_lisp_game_jam_2019.core.debug = false;
autumn_lisp_game_jam_2019.core.width = (1.5 * (512));
autumn_lisp_game_jam_2019.core.height = (1.5 * (384));
autumn_lisp_game_jam_2019.core.player_speed = (5);
autumn_lisp_game_jam_2019.core.player_size = (64);
autumn_lisp_game_jam_2019.core.bullet_size = (10);
autumn_lisp_game_jam_2019.core.tile_size = (64);
autumn_lisp_game_jam_2019.core.door_spawn_chance = 0.5;
autumn_lisp_game_jam_2019.core.enemy_spawn_chance = 0.9;
autumn_lisp_game_jam_2019.core.corner_positions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.width - (128)),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(autumn_lisp_game_jam_2019.core.height - (128))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.width - (128)),(autumn_lisp_game_jam_2019.core.height - (128))], null)], null);
autumn_lisp_game_jam_2019.core.center_corner_positions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.tile_size * (2)),(autumn_lisp_game_jam_2019.core.tile_size * (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.width - (autumn_lisp_game_jam_2019.core.tile_size * (3))),(autumn_lisp_game_jam_2019.core.tile_size * (2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.tile_size * (2)),(autumn_lisp_game_jam_2019.core.height - (autumn_lisp_game_jam_2019.core.tile_size * (3)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(autumn_lisp_game_jam_2019.core.width - (autumn_lisp_game_jam_2019.core.tile_size * (3))),(autumn_lisp_game_jam_2019.core.height - (autumn_lisp_game_jam_2019.core.tile_size * (3)))], null)], null);
autumn_lisp_game_jam_2019.core.default_room = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1),(1)], null)], null);
if((typeof autumn_lisp_game_jam_2019 !== 'undefined') && (typeof autumn_lisp_game_jam_2019.core !== 'undefined') && (typeof autumn_lisp_game_jam_2019.core.app_state !== 'undefined')){
} else {
autumn_lisp_game_jam_2019.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049),new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786),new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445),new cljs.core.Keyword(null,"characters","characters",-163867197),new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203),new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491),new cljs.core.Keyword(null,"scroll-interval","scroll-interval",-264035258),new cljs.core.Keyword(null,"bullet-interval","bullet-interval",-1646985050),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567),new cljs.core.Keyword(null,"bullet-last-time","bullet-last-time",56205803),new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"dialog-index","dialog-index",876749595),new cljs.core.Keyword(null,"tile-map-previous","tile-map-previous",-1654441860),new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153)],[cljs.core.PersistentVector.EMPTY,(0),autumn_lisp_game_jam_2019.core.default_room,autumn_lisp_game_jam_2019.core.height,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((256) - (32)),((256) - (32))], null),new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hey this is a game","go find a way out of the dungeon"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"character","character",380652989)], null)], null),cljs.core.PersistentVector.EMPTY,autumn_lisp_game_jam_2019.core.width,(0),(250),(200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348),null], null)], null),(0),(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heal","heal",-1734703848),(1),new cljs.core.Keyword(null,"sold?","sold?",774198719),false,new cljs.core.Keyword(null,"cost","cost",-1094861735),(10),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"heart","heart",1848849955)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((autumn_lisp_game_jam_2019.core.width / (2)) - (32)),((autumn_lisp_game_jam_2019.core.height / (2)) - (32))], null),new cljs.core.Keyword(null,"health","health",-295520649),(6),new cljs.core.Keyword(null,"max-health","max-health",-220583603),(6),new cljs.core.Keyword(null,"money","money",250333921),(0),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"sword","sword",-1447473555),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"swing-time","swing-time",-1232293768),(100),new cljs.core.Keyword(null,"swing-start","swing-start",1924644196),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),null], null),cljs.core.PersistentVector.EMPTY,(0),autumn_lisp_game_jam_2019.core.default_room,(0)]));
}
autumn_lisp_game_jam_2019.core.add_image = (function autumn_lisp_game_jam_2019$core$add_image(key,image){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"images","images",1757475080),key], null),image);
});
autumn_lisp_game_jam_2019.core.image = (function autumn_lisp_game_jam_2019$core$image(key){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"images","images",1757475080),key], null));
});
autumn_lisp_game_jam_2019.core.draw_wall_tile = (function autumn_lisp_game_jam_2019$core$draw_wall_tile(x,y){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,(64),(64),(32),(32));
});
autumn_lisp_game_jam_2019.core.draw_player = (function autumn_lisp_game_jam_2019$core$draw_player(p__24748){
var vec__24749 = p__24748;
var x = cljs.core.nth.call(null,vec__24749,(0),null);
var y = cljs.core.nth.call(null,vec__24749,(1),null);
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.player_size,autumn_lisp_game_jam_2019.core.player_size,(32),((20) * (32)),(32),(32));
});
autumn_lisp_game_jam_2019.core.draw_character = (function autumn_lisp_game_jam_2019$core$draw_character(p__24752){
var vec__24753 = p__24752;
var x = cljs.core.nth.call(null,vec__24753,(0),null);
var y = cljs.core.nth.call(null,vec__24753,(1),null);
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,(32),((18) * (32)),(32),(32));
});
autumn_lisp_game_jam_2019.core.draw_enemy_image = (function autumn_lisp_game_jam_2019$core$draw_enemy_image(p__24756,type){
var vec__24757 = p__24756;
var x = cljs.core.nth.call(null,vec__24757,(0),null);
var y = cljs.core.nth.call(null,vec__24757,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"archer","archer",863460629),type)){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((4) * (32)),((18) * (32)),(32),(32));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ghoul","ghoul",1993963194),type)){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((6) * (32)),((21) * (32)),(32),(32));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sorcerer","sorcerer",817319056),type)){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((6) * (32)),((18) * (32)),(32),(32));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hedge-hog","hedge-hog",2089397602),type)){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((6) * (32)),((20) * (32)),(32),(32));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skeleton","skeleton",-1767035953),type)){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((2) * (32)),((22) * (32)),(32),(32));
} else {
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((2) * (32)),((22) * (32)),(32),(32));

}
}
}
}
}
});
autumn_lisp_game_jam_2019.core.draw_enemy = (function autumn_lisp_game_jam_2019$core$draw_enemy(e){
text(["health ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(e))].join(''),autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e)),autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e)));

return autumn_lisp_game_jam_2019.core.draw_enemy_image.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"image-type","image-type",1321483619).cljs$core$IFn$_invoke$arity$1(e));
});
autumn_lisp_game_jam_2019.core.draw_sword = (function autumn_lisp_game_jam_2019$core$draw_sword(p__24760,angle){
var vec__24761 = p__24760;
var x = cljs.core.nth.call(null,vec__24761,(0),null);
var y = cljs.core.nth.call(null,vec__24761,(1),null);
push();

translate((x + (32)),(y + (32)));

rotate(angle);

ellipse((0),(0),autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size);

translate((- autumn_lisp_game_jam_2019.core.tile_size),(- autumn_lisp_game_jam_2019.core.tile_size));

image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),(0),(0),autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,(64),((7) * (32)),(32),(32));

return pop();
});
autumn_lisp_game_jam_2019.core.draw_shop_keeper = (function autumn_lisp_game_jam_2019$core$draw_shop_keeper(p__24764){
var vec__24765 = p__24764;
var x = cljs.core.nth.call(null,vec__24765,(0),null);
var y = cljs.core.nth.call(null,vec__24765,(1),null);
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,((7) * (32)),((18) * (32)),(32),(32));
});
autumn_lisp_game_jam_2019.core.draw_heart_item = (function autumn_lisp_game_jam_2019$core$draw_heart_item(x,y){
return image(autumn_lisp_game_jam_2019.core.image.call(null,new cljs.core.Keyword(null,"heart-image","heart-image",-185299427)),x,y,autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size);
});
autumn_lisp_game_jam_2019.core.player_hit_box = (function autumn_lisp_game_jam_2019$core$player_hit_box(var_args){
var G__24769 = arguments.length;
switch (G__24769) {
case 0:
return autumn_lisp_game_jam_2019.core.player_hit_box.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return autumn_lisp_game_jam_2019.core.player_hit_box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

autumn_lisp_game_jam_2019.core.player_hit_box.cljs$core$IFn$_invoke$arity$0 = (function (){
return autumn_lisp_game_jam_2019.core.player_hit_box.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
});

autumn_lisp_game_jam_2019.core.player_hit_box.cljs$core$IFn$_invoke$arity$1 = (function (p__24770){
var vec__24771 = p__24770;
var x = cljs.core.nth.call(null,vec__24771,(0),null);
var y = cljs.core.nth.call(null,vec__24771,(1),null);
var offset_x = (16);
var offset_y = (12);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + offset_x),(y + offset_y)], null),new cljs.core.Keyword(null,"width","width",-384071477),(autumn_lisp_game_jam_2019.core.player_size - (offset_x * (2))),new cljs.core.Keyword(null,"height","height",1025178622),(autumn_lisp_game_jam_2019.core.player_size - (offset_y * (2)))], null);
});

autumn_lisp_game_jam_2019.core.player_hit_box.cljs$lang$maxFixedArity = 1;

autumn_lisp_game_jam_2019.core.draw_tile_map = (function autumn_lisp_game_jam_2019$core$draw_tile_map(tile_map_key,offset_x,offset_y){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (j,tile){
if(cljs.core._EQ_.call(null,tile,(1))){
return autumn_lisp_game_jam_2019.core.draw_wall_tile.call(null,(offset_x + (j * autumn_lisp_game_jam_2019.core.tile_size)),(offset_y + (i * autumn_lisp_game_jam_2019.core.tile_size)));
} else {
return null;
}
}),row));
}),tile_map_key.call(null,cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
});
autumn_lisp_game_jam_2019.core.solid_tile_QMARK_ = (function autumn_lisp_game_jam_2019$core$solid_tile_QMARK_(x,y){
var col = floor(((x - (new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width)) / autumn_lisp_game_jam_2019.core.tile_size));
var row = floor(((y - (new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height)) / autumn_lisp_game_jam_2019.core.tile_size));
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
autumn_lisp_game_jam_2019.core.player_tile_map_collision_QMARK_ = (function autumn_lisp_game_jam_2019$core$player_tile_map_collision_QMARK_(pos){
var left = autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos)));
var right = (autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos))) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos)));
var top = autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos)));
var bottom = (autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos))) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null,pos)));
return ((autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,left,top)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,left,bottom)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,right,top)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,right,bottom)));
});
autumn_lisp_game_jam_2019.core.tile_map_collision_QMARK_ = (function autumn_lisp_game_jam_2019$core$tile_map_collision_QMARK_(pos,size){
var left = autumn_lisp_game_jam_2019.vector.x.call(null,pos);
var right = (autumn_lisp_game_jam_2019.vector.x.call(null,pos) + size);
var top = autumn_lisp_game_jam_2019.vector.y.call(null,pos);
var bottom = (autumn_lisp_game_jam_2019.vector.y.call(null,pos) + size);
return ((autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,left,top)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,left,bottom)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,right,top)) || (autumn_lisp_game_jam_2019.core.solid_tile_QMARK_.call(null,right,bottom)));
});
autumn_lisp_game_jam_2019.core.new_player_position = (function autumn_lisp_game_jam_2019$core$new_player_position(player_pos,vel){
var new_pos = autumn_lisp_game_jam_2019.vector.add.call(null,player_pos,vel);
if(autumn_lisp_game_jam_2019.core.player_tile_map_collision_QMARK_.call(null,new_pos)){
return player_pos;
} else {
return new_pos;
}
});
autumn_lisp_game_jam_2019.core.move_player = (function autumn_lisp_game_jam_2019$core$move_player(vel_direction){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),vel_direction);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),autumn_lisp_game_jam_2019.core.new_player_position,autumn_lisp_game_jam_2019.vector.mult.call(null,autumn_lisp_game_jam_2019.core.player_speed,vel_direction));
});
autumn_lisp_game_jam_2019.core.player_movement = (function autumn_lisp_game_jam_2019$core$player_movement(){
if(cljs.core.truth_(keyIsDown((87)))){
autumn_lisp_game_jam_2019.core.move_player.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
} else {
}

if(cljs.core.truth_(keyIsDown((83)))){
autumn_lisp_game_jam_2019.core.move_player.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
} else {
}

if(cljs.core.truth_(keyIsDown((65)))){
autumn_lisp_game_jam_2019.core.move_player.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
} else {
}

if(cljs.core.truth_(keyIsDown((68)))){
return autumn_lisp_game_jam_2019.core.move_player.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.aabb_QMARK_ = (function autumn_lisp_game_jam_2019$core$aabb_QMARK_(var_args){
var G__24776 = arguments.length;
switch (G__24776) {
case 4:
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

autumn_lisp_game_jam_2019.core.aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pos1,size1,pos2,size2){
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,pos1,size1,size1,pos2,size2,size2);
});

autumn_lisp_game_jam_2019.core.aabb_QMARK_.cljs$core$IFn$_invoke$arity$6 = (function (p__24777,width1,height1,p__24778,width2,height2){
var vec__24779 = p__24777;
var x1 = cljs.core.nth.call(null,vec__24779,(0),null);
var y1 = cljs.core.nth.call(null,vec__24779,(1),null);
var vec__24782 = p__24778;
var x2 = cljs.core.nth.call(null,vec__24782,(0),null);
var y2 = cljs.core.nth.call(null,vec__24782,(1),null);
return (((x1 < (x2 + width2))) && (((x1 + width1) > x2)) && ((y1 < (y2 + height2))) && (((y1 + height1) > y2)));
});

autumn_lisp_game_jam_2019.core.aabb_QMARK_.cljs$lang$maxFixedArity = 6;

autumn_lisp_game_jam_2019.core.start_sword_swing = (function autumn_lisp_game_jam_2019$core$start_sword_swing(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"attacking","attacking",492336639));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"sword","sword",-1447473555),new cljs.core.Keyword(null,"swing-start","swing-start",1924644196)], null),millis());
});
autumn_lisp_game_jam_2019.core.sword_angle = (function autumn_lisp_game_jam_2019$core$sword_angle(p__24786){
var vec__24787 = p__24786;
var x_dir = cljs.core.nth.call(null,vec__24787,(0),null);
var y_dir = cljs.core.nth.call(null,vec__24787,(1),null);
var base_angle = (((PI / (4)) + (PI / (2))) + new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));
if(cljs.core._EQ_.call(null,y_dir,(1))){
return base_angle;
} else {
if(cljs.core._EQ_.call(null,y_dir,(-1))){
return (PI + base_angle);
} else {
if(cljs.core._EQ_.call(null,x_dir,(1))){
return ((PI + (PI / (2))) + base_angle);
} else {
if(cljs.core._EQ_.call(null,x_dir,(-1))){
return ((PI / (2)) + base_angle);
} else {
return base_angle;

}
}
}
}
});
autumn_lisp_game_jam_2019.core.sword_enemy_collision = (function autumn_lisp_game_jam_2019$core$sword_enemy_collision(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (enemy){
if(cljs.core.truth_(autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),autumn_lisp_game_jam_2019.core.tile_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy),autumn_lisp_game_jam_2019.core.tile_size))){
return null;
} else {
return null;
}
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
});
autumn_lisp_game_jam_2019.core.swing_sword = (function autumn_lisp_game_jam_2019$core$swing_sword(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attacking","attacking",492336639),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
autumn_lisp_game_jam_2019.core.sword_enemy_collision.call(null);

autumn_lisp_game_jam_2019.core.draw_sword.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),autumn_lisp_game_jam_2019.core.sword_angle.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"sword","sword",-1447473555),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),map(millis(),new cljs.core.Keyword(null,"swing-start","swing-start",1924644196).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))),(new cljs.core.Keyword(null,"swing-time","swing-time",-1232293768).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) + new cljs.core.Keyword(null,"swing-start","swing-start",1924644196).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))),(0),PI));
} else {
}

if((millis() > (new cljs.core.Keyword(null,"swing-time","swing-time",-1232293768).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) + new cljs.core.Keyword(null,"swing-start","swing-start",1924644196).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sword","sword",-1447473555).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"sword","sword",-1447473555),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"not-attacking","not-attacking",-144155080));
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.shoot_direction = (function autumn_lisp_game_jam_2019$core$shoot_direction(dir){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),autumn_lisp_game_jam_2019.vector.add.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null)),new cljs.core.Keyword(null,"direction","direction",-633359395),dir], null));
});
autumn_lisp_game_jam_2019.core.shoot = (function autumn_lisp_game_jam_2019$core$shoot(){
if(((millis() - new cljs.core.Keyword(null,"bullet-last-time","bullet-last-time",56205803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))) > new cljs.core.Keyword(null,"bullet-interval","bullet-interval",-1646985050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bullet-last-time","bullet-last-time",56205803),millis());

if(cljs.core.truth_((function (){var and__4120__auto__ = keyIsDown(UP_ARROW);
if(cljs.core.truth_(and__4120__auto__)){
return keyIsDown(LEFT_ARROW);
} else {
return and__4120__auto__;
}
})())){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = keyIsDown(UP_ARROW);
if(cljs.core.truth_(and__4120__auto__)){
return keyIsDown(RIGHT_ARROW);
} else {
return and__4120__auto__;
}
})())){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = keyIsDown(DOWN_ARROW);
if(cljs.core.truth_(and__4120__auto__)){
return keyIsDown(LEFT_ARROW);
} else {
return and__4120__auto__;
}
})())){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = keyIsDown(DOWN_ARROW);
if(cljs.core.truth_(and__4120__auto__)){
return keyIsDown(RIGHT_ARROW);
} else {
return and__4120__auto__;
}
})())){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
} else {
if(cljs.core.truth_(keyIsDown(UP_ARROW))){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
} else {
if(cljs.core.truth_(keyIsDown(DOWN_ARROW))){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
} else {
if(cljs.core.truth_(keyIsDown(LEFT_ARROW))){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
} else {
if(cljs.core.truth_(keyIsDown(RIGHT_ARROW))){
return autumn_lisp_game_jam_2019.core.shoot_direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
} else {
return null;
}
}
}
}
}
}
}
}
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.bullet_hit_enemy_QMARK_ = (function autumn_lisp_game_jam_2019$core$bullet_hit_enemy_QMARK_(b){
return cljs.core.some.call(null,(function (e){
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.core.bullet_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),autumn_lisp_game_jam_2019.core.tile_size);
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)));
});
autumn_lisp_game_jam_2019.core.out_of_room_QMARK_ = (function autumn_lisp_game_jam_2019$core$out_of_room_QMARK_(pos){
return (((autumn_lisp_game_jam_2019.vector.x.call(null,pos) > new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) || ((autumn_lisp_game_jam_2019.vector.x.call(null,pos) < (new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width))) || ((autumn_lisp_game_jam_2019.vector.y.call(null,pos) > new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) || ((autumn_lisp_game_jam_2019.vector.y.call(null,pos) < (new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height))));
});
autumn_lisp_game_jam_2019.core.update_enemy_bullets = (function autumn_lisp_game_jam_2019$core$update_enemy_bullets(){
cljs.core.doall.call(null,cljs.core.map.call(null,(function (b){
if(autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.core.bullet_size,autumn_lisp_game_jam_2019.core.bullet_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)))){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"health","health",-295520649)], null),cljs.core.dec);
} else {
return null;
}
}),new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),cljs.core.partial.call(null,cljs.core.remove,(function (b){
return ((autumn_lisp_game_jam_2019.core.out_of_room_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b))) || (autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.core.bullet_size,autumn_lisp_game_jam_2019.core.bullet_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)))) || (autumn_lisp_game_jam_2019.core.tile_map_collision_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),(10))));
})));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),(function (bullets){
return cljs.core.map.call(null,(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pos","pos",-864607220),autumn_lisp_game_jam_2019.vector.add.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.vector.mult.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(b))));
}),bullets);
}));
});
autumn_lisp_game_jam_2019.core.update_bullets = (function autumn_lisp_game_jam_2019$core$update_bullets(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.partial.call(null,cljs.core.remove,(function (b){
var or__4131__auto__ = autumn_lisp_game_jam_2019.core.out_of_room_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = autumn_lisp_game_jam_2019.core.bullet_hit_enemy_QMARK_.call(null,b);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return autumn_lisp_game_jam_2019.core.tile_map_collision_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),(10));
}
}
})));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"bullets","bullets",1734809024),(function (bullets){
return cljs.core.map.call(null,(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pos","pos",-864607220),autumn_lisp_game_jam_2019.vector.add.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.vector.mult.call(null,(15),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(b))));
}),bullets);
}));
});
autumn_lisp_game_jam_2019.core.display_bullets = (function autumn_lisp_game_jam_2019$core$display_bullets(bullet_key){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (bullet){
fill((255));

stroke((0));

return rect(autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(bullet)),autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(bullet)),autumn_lisp_game_jam_2019.core.bullet_size,autumn_lisp_game_jam_2019.core.bullet_size);
}),bullet_key.call(null,cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
});
autumn_lisp_game_jam_2019.core.add_door_right = (function autumn_lisp_game_jam_2019$core$add_door_right(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(3),(11)], null),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(4),(11)], null),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(5),(11)], null),(0));
});
autumn_lisp_game_jam_2019.core.add_door_left = (function autumn_lisp_game_jam_2019$core$add_door_left(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(3),(0)], null),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(4),(0)], null),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(5),(0)], null),(0));
});
autumn_lisp_game_jam_2019.core.add_door_top = (function autumn_lisp_game_jam_2019$core$add_door_top(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(0),(5)], null),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(0),(6)], null),(0));
});
autumn_lisp_game_jam_2019.core.add_door_bottom = (function autumn_lisp_game_jam_2019$core$add_door_bottom(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(8),(5)], null),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(8),(6)], null),(0));
});
autumn_lisp_game_jam_2019.core.shift_left = (function autumn_lisp_game_jam_2019$core$shift_left(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"scrolling-x","scrolling-x",1083000101));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153),autumn_lisp_game_jam_2019.core.width);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491),millis());
});
autumn_lisp_game_jam_2019.core.shift_right = (function autumn_lisp_game_jam_2019$core$shift_right(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"scrolling-x","scrolling-x",1083000101));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153),(- autumn_lisp_game_jam_2019.core.width));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491),millis());
});
autumn_lisp_game_jam_2019.core.shift_up = (function autumn_lisp_game_jam_2019$core$shift_up(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"scrolling-y","scrolling-y",-1492846199));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049),autumn_lisp_game_jam_2019.core.height);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491),millis());
});
autumn_lisp_game_jam_2019.core.shift_down = (function autumn_lisp_game_jam_2019$core$shift_down(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"scrolling-y","scrolling-y",-1492846199));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049),(- autumn_lisp_game_jam_2019.core.height));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491),millis());
});
autumn_lisp_game_jam_2019.core.scroll_to_next_room = (function autumn_lisp_game_jam_2019$core$scroll_to_next_room(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scrolling-y","scrolling-y",-1492846199),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567),map(millis(),new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) + new cljs.core.Keyword(null,"scroll-interval","scroll-interval",-264035258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(0)));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scrolling-x","scrolling-x",1083000101),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445),map(millis(),new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) + new cljs.core.Keyword(null,"scroll-interval","scroll-interval",-264035258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(0)));
} else {
}

if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"talking","talking",549208074),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))) && ((millis() > (new cljs.core.Keyword(null,"scroll-start-time","scroll-start-time",-1328510491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) + new cljs.core.Keyword(null,"scroll-interval","scroll-interval",-264035258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567),(0));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"not-scrolling","not-scrolling",872569410));
} else {
return null;
}
});
/**
 * adds enemy at screen coordinates
 */
autumn_lisp_game_jam_2019.core.add_enemy_BANG_ = (function autumn_lisp_game_jam_2019$core$add_enemy_BANG_(screen_x,screen_y,type){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.conj,autumn_lisp_game_jam_2019.enemy.create_enemy.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width) + screen_x),((new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height) + screen_y)], null),type));
});
autumn_lisp_game_jam_2019.core.spawn_enemies = (function autumn_lisp_game_jam_2019$core$spawn_enemies(){
if((((!(autumn_lisp_game_jam_2019.dungeon.room_has_one_door_QMARK_.call(null,new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))))) && ((random() < autumn_lisp_game_jam_2019.core.enemy_spawn_chance)))){
var enemy_type = cljs.core.first.call(null,cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seek","seek",758996602),new cljs.core.Keyword(null,"udlr","udlr",-1881543408),new cljs.core.Keyword(null,"udlr-shoot","udlr-shoot",1983704132),new cljs.core.Keyword(null,"rotate-seek","rotate-seek",-1749517793),new cljs.core.Keyword(null,"sit-and-shoot","sit-and-shoot",782727178)], null)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sit-and-shoot","sit-and-shoot",782727178),enemy_type)){
return autumn_lisp_game_jam_2019.core.add_enemy_BANG_.call(null,((autumn_lisp_game_jam_2019.core.width / (2)) - (autumn_lisp_game_jam_2019.core.tile_size / (2))),((autumn_lisp_game_jam_2019.core.height / (2)) - (autumn_lisp_game_jam_2019.core.tile_size / (2))),enemy_type);
} else {
var seq__24790 = cljs.core.seq.call(null,autumn_lisp_game_jam_2019.core.center_corner_positions);
var chunk__24791 = null;
var count__24792 = (0);
var i__24793 = (0);
while(true){
if((i__24793 < count__24792)){
var vec__24800 = cljs.core._nth.call(null,chunk__24791,i__24793);
var x = cljs.core.nth.call(null,vec__24800,(0),null);
var y = cljs.core.nth.call(null,vec__24800,(1),null);
autumn_lisp_game_jam_2019.core.add_enemy_BANG_.call(null,x,y,enemy_type);


var G__24806 = seq__24790;
var G__24807 = chunk__24791;
var G__24808 = count__24792;
var G__24809 = (i__24793 + (1));
seq__24790 = G__24806;
chunk__24791 = G__24807;
count__24792 = G__24808;
i__24793 = G__24809;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24790);
if(temp__5720__auto__){
var seq__24790__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24790__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24790__$1);
var G__24810 = cljs.core.chunk_rest.call(null,seq__24790__$1);
var G__24811 = c__4550__auto__;
var G__24812 = cljs.core.count.call(null,c__4550__auto__);
var G__24813 = (0);
seq__24790 = G__24810;
chunk__24791 = G__24811;
count__24792 = G__24812;
i__24793 = G__24813;
continue;
} else {
var vec__24803 = cljs.core.first.call(null,seq__24790__$1);
var x = cljs.core.nth.call(null,vec__24803,(0),null);
var y = cljs.core.nth.call(null,vec__24803,(1),null);
autumn_lisp_game_jam_2019.core.add_enemy_BANG_.call(null,x,y,enemy_type);


var G__24814 = cljs.core.next.call(null,seq__24790__$1);
var G__24815 = null;
var G__24816 = (0);
var G__24817 = (0);
seq__24790 = G__24814;
chunk__24791 = G__24815;
count__24792 = G__24816;
i__24793 = G__24817;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.check_enemy_tile_collision = (function autumn_lisp_game_jam_2019$core$check_enemy_tile_collision(new_enemy,old_pos){
return cljs.core.update.call(null,new_enemy,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (new_pos){
if(autumn_lisp_game_jam_2019.core.tile_map_collision_QMARK_.call(null,new_pos,autumn_lisp_game_jam_2019.core.tile_size)){
return old_pos;
} else {
return new_pos;
}
}));
});
autumn_lisp_game_jam_2019.core.update_enemies = (function autumn_lisp_game_jam_2019$core$update_enemies(){
if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"scrolling-x","scrolling-x",1083000101),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"scrolling-y","scrolling-y",-1492846199),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.partial.call(null,cljs.core.map,(function (enemy){
return autumn_lisp_game_jam_2019.core.check_enemy_tile_collision.call(null,autumn_lisp_game_jam_2019.enemy.update_enemy.call(null,autumn_lisp_game_jam_2019.core.app_state,enemy),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy));
})));
} else {
}

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.partial.call(null,cljs.core.map,(function (e){
if(autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"health","health",-295520649)], null),cljs.core.dec);

return cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"health","health",-295520649),(0));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (b){
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b),autumn_lisp_game_jam_2019.core.bullet_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e),autumn_lisp_game_jam_2019.core.tile_size);
}),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
return cljs.core.update.call(null,e,new cljs.core.Keyword(null,"health","health",-295520649),cljs.core.dec);
} else {
return e;

}
}
})));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (e){
if((new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(e) <= (0))){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"money","money",250333921)], null),cljs.core.inc);
} else {
return null;
}
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.partial.call(null,cljs.core.remove,(function (e){
return (new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(e) <= (0));
})));
});
autumn_lisp_game_jam_2019.core.spawn_shop_keeper_items = (function autumn_lisp_game_jam_2019$core$spawn_shop_keeper_items(){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,item){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861),new cljs.core.Keyword(null,"items","items",1031954938),index,new cljs.core.Keyword(null,"sold?","sold?",774198719)], null),false);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));
});
autumn_lisp_game_jam_2019.core.spawn_shop_keeper = (function autumn_lisp_game_jam_2019$core$spawn_shop_keeper(){
if(autumn_lisp_game_jam_2019.dungeon.room_has_one_door_QMARK_.call(null,new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))){
autumn_lisp_game_jam_2019.core.spawn_shop_keeper_items.call(null);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - (autumn_lisp_game_jam_2019.core.width / (2))) - (32)),((new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - (autumn_lisp_game_jam_2019.core.height / (2))) - (32))], null));
} else {
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
});
autumn_lisp_game_jam_2019.core.on_room_spawn = (function autumn_lisp_game_jam_2019$core$on_room_spawn(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tile-map-previous","tile-map-previous",-1654441860),new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),autumn_lisp_game_jam_2019.core.default_room);
});
autumn_lisp_game_jam_2019.core.after_room_spawn = (function autumn_lisp_game_jam_2019$core$after_room_spawn(){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY);

autumn_lisp_game_jam_2019.core.spawn_enemies.call(null);

return autumn_lisp_game_jam_2019.core.spawn_shop_keeper.call(null);
});
/**
 * update bounds, reset tile-map to default room, create door where entered, randomly create other doors
 */
autumn_lisp_game_jam_2019.core.spawn_room = (function autumn_lisp_game_jam_2019$core$spawn_room(){
if((autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) > new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203),(autumn_lisp_game_jam_2019.core.width + new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.on_room_spawn.call(null);

autumn_lisp_game_jam_2019.core.add_door_left.call(null);

autumn_lisp_game_jam_2019.core.shift_left.call(null);

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_right.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_top.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_bottom.call(null);
} else {
}

autumn_lisp_game_jam_2019.core.after_room_spawn.call(null);
} else {
}

if(((autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) + (64)) < (new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203),(new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width));

autumn_lisp_game_jam_2019.core.on_room_spawn.call(null);

autumn_lisp_game_jam_2019.core.add_door_right.call(null);

autumn_lisp_game_jam_2019.core.shift_right.call(null);

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_left.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_top.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_bottom.call(null);
} else {
}

autumn_lisp_game_jam_2019.core.after_room_spawn.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) > new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786),(autumn_lisp_game_jam_2019.core.height + new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.on_room_spawn.call(null);

autumn_lisp_game_jam_2019.core.add_door_top.call(null);

autumn_lisp_game_jam_2019.core.shift_up.call(null);

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_left.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_right.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_bottom.call(null);
} else {
}

autumn_lisp_game_jam_2019.core.after_room_spawn.call(null);
} else {
}

if(((autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))) + (64)) < (new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786),(new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height));

autumn_lisp_game_jam_2019.core.on_room_spawn.call(null);

autumn_lisp_game_jam_2019.core.add_door_bottom.call(null);

autumn_lisp_game_jam_2019.core.shift_down.call(null);

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_left.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_right.call(null);
} else {
}

if((autumn_lisp_game_jam_2019.core.door_spawn_chance < random())){
autumn_lisp_game_jam_2019.core.add_door_top.call(null);
} else {
}

return autumn_lisp_game_jam_2019.core.after_room_spawn.call(null);
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.init_starting_room = (function autumn_lisp_game_jam_2019$core$init_starting_room(){
autumn_lisp_game_jam_2019.core.add_door_right.call(null);

autumn_lisp_game_jam_2019.core.add_door_left.call(null);

autumn_lisp_game_jam_2019.core.add_door_top.call(null);

return autumn_lisp_game_jam_2019.core.add_door_bottom.call(null);
});
autumn_lisp_game_jam_2019.core.reset_level = (function autumn_lisp_game_jam_2019$core$reset_level(){
autumn_lisp_game_jam_2019.core.init_starting_room.call(null);

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tile-map-previous","tile-map-previous",-1654441860),new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"health","health",-295520649)], null),new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"money","money",250333921)], null),(0));

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - (autumn_lisp_game_jam_2019.core.width / (2))) - (32)),((new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - (autumn_lisp_game_jam_2019.core.height / (2))) - (32))], null));
});
autumn_lisp_game_jam_2019.core.item_player_collision_QMARK_ = (function autumn_lisp_game_jam_2019$core$item_player_collision_QMARK_(item_x,item_y){
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_x,item_y], null),autumn_lisp_game_jam_2019.core.tile_size,autumn_lisp_game_jam_2019.core.tile_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(autumn_lisp_game_jam_2019.core.player_hit_box.call(null)));
});
autumn_lisp_game_jam_2019.core.update_shop_keeper_items = (function autumn_lisp_game_jam_2019$core$update_shop_keeper_items(){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,item){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"heart","heart",1848849955),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"sold?","sold?",774198719).cljs$core$IFn$_invoke$arity$1(item))) && ((new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))) >= new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item))) && ((new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))) < new cljs.core.Keyword(null,"max-health","max-health",-220583603).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))) && (autumn_lisp_game_jam_2019.core.item_player_collision_QMARK_.call(null,autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))),((64) + autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861),new cljs.core.Keyword(null,"items","items",1031954938),index,new cljs.core.Keyword(null,"sold?","sold?",774198719)], null),true);

cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"health","health",-295520649)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"heal","heal",-1734703848).cljs$core$IFn$_invoke$arity$1(item));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"money","money",250333921)], null),cljs.core._,new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(item));
} else {
return null;
}
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));
});
autumn_lisp_game_jam_2019.core.draw_shop_keeper_items = (function autumn_lisp_game_jam_2019$core$draw_shop_keeper_items(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"heart","heart",1848849955),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))){
var x = autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
var y = ((64) + autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sold?","sold?",774198719).cljs$core$IFn$_invoke$arity$1(item))){
text("     $10\n+1 health",x,((64) + y));

return autumn_lisp_game_jam_2019.core.draw_heart_item.call(null,x,y);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))));
});
autumn_lisp_game_jam_2019.core.setup = (function autumn_lisp_game_jam_2019$core$setup(){
createCanvas(autumn_lisp_game_jam_2019.core.width,autumn_lisp_game_jam_2019.core.height);

noSmooth();

autumn_lisp_game_jam_2019.core.add_image.call(null,new cljs.core.Keyword(null,"fantasy-tileset-image","fantasy-tileset-image",1423097348),loadImage("/assets/fantasy-tileset.png"));

autumn_lisp_game_jam_2019.core.add_image.call(null,new cljs.core.Keyword(null,"player-image","player-image",1429099092),loadImage("/assets/test-sprite.png"));

autumn_lisp_game_jam_2019.core.add_image.call(null,new cljs.core.Keyword(null,"heart-image","heart-image",-185299427),loadImage("/assets/heart.png"));

autumn_lisp_game_jam_2019.core.init_starting_room.call(null);

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tile-map-previous","tile-map-previous",-1654441860),new cljs.core.Keyword(null,"tile-map","tile-map",-750269950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)));
});
autumn_lisp_game_jam_2019.core.draw = (function autumn_lisp_game_jam_2019$core$draw(){
background((50));

stroke((0),(255),(0));

fill((0),(255),(0));

if(autumn_lisp_game_jam_2019.core.debug){
var start_x_24820 = (100);
var start_y_24821 = (100);
var dtext_24822 = ((function (start_x_24820,start_y_24821){
return (function (string,y){
return text(string,start_x_24820,(start_y_24821 + y));
});})(start_x_24820,start_y_24821))
;
dtext_24822.call(null,(frameRate() | (0)),(0));

dtext_24822.call(null,new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(10));

dtext_24822.call(null,new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)),(20));

dtext_24822.call(null,["pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))].join(''),(30));

dtext_24822.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),(40));

dtext_24822.call(null,["enemy 0: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))].join(''),(50));

dtext_24822.call(null,["player money: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))].join(''),(60));

dtext_24822.call(null,["player health: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))," / 6"].join(''),(70));

dtext_24822.call(null,["enemy bullets: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))].join(''),(80));

dtext_24822.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)))),(90));
} else {
var start_x_24823 = (100);
var start_y_24824 = (100);
var dtext_24825 = ((function (start_x_24823,start_y_24824){
return (function (string,y){
textSize((16));

return text(string,start_x_24823,(start_y_24824 + y));
});})(start_x_24823,start_y_24824))
;
dtext_24825.call(null,["player health: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))," / 6"].join(''),(0));

dtext_24825.call(null,["player money: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))].join(''),(16));
}

autumn_lisp_game_jam_2019.core.spawn_room.call(null);

autumn_lisp_game_jam_2019.core.scroll_to_next_room.call(null);

if((new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))) <= (0))){
autumn_lisp_game_jam_2019.core.reset_level.call(null);
} else {
}

translate((new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) + (- (new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width))),(new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) + (- (new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height))));

autumn_lisp_game_jam_2019.core.draw_shop_keeper.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-keeper","shop-keeper",-902234861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.draw_shop_keeper_items.call(null);

autumn_lisp_game_jam_2019.core.update_shop_keeper_items.call(null);

if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"talking","talking",549208074),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
autumn_lisp_game_jam_2019.core.player_movement.call(null);
} else {
}

autumn_lisp_game_jam_2019.core.shoot.call(null);

autumn_lisp_game_jam_2019.core.draw_player.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.update_bullets.call(null);

autumn_lisp_game_jam_2019.core.update_enemy_bullets.call(null);

autumn_lisp_game_jam_2019.core.display_bullets.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024));

autumn_lisp_game_jam_2019.core.display_bullets.call(null,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (character){
stroke((0),(255),(0));

fill((0),(255),(0));

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"talking","talking",549208074),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
if(and__4120__auto__){
return autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),autumn_lisp_game_jam_2019.core.tile_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character),autumn_lisp_game_jam_2019.core.tile_size);
} else {
return and__4120__auto__;
}
})())){
text("press j to talk...",autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character)),(autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character)) + (74)));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"talking","talking",549208074),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
if((new cljs.core.Keyword(null,"dialog-index","dialog-index",876749595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) >= cljs.core.count.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(character)))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"not-talking","not-talking",132821256));

return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dialog-index","dialog-index",876749595),(0));
} else {
return text(cljs.core.nth.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(character),new cljs.core.Keyword(null,"dialog-index","dialog-index",876749595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),autumn_lisp_game_jam_2019.vector.x.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character)),(autumn_lisp_game_jam_2019.vector.y.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character)) + (74)));
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.update_enemies.call(null);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__24818_SHARP_){
return autumn_lisp_game_jam_2019.core.draw_enemy.call(null,p1__24818_SHARP_);
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__24819_SHARP_){
return autumn_lisp_game_jam_2019.core.draw_character.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__24819_SHARP_));
}),new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));

autumn_lisp_game_jam_2019.core.draw_tile_map.call(null,new cljs.core.Keyword(null,"tile-map","tile-map",-750269950),(new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width),(new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height));

return autumn_lisp_game_jam_2019.core.draw_tile_map.call(null,new cljs.core.Keyword(null,"tile-map-previous","tile-map-previous",-1654441860),((new cljs.core.Keyword(null,"bounds-x","bounds-x",948031203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.width) - new cljs.core.Keyword(null,"scroll-target-min-x","scroll-target-min-x",-2038081153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),((new cljs.core.Keyword(null,"bounds-y","bounds-y",1808930786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state)) - autumn_lisp_game_jam_2019.core.height) - new cljs.core.Keyword(null,"scroll-target-min-y","scroll-target-min-y",186790049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
});
autumn_lisp_game_jam_2019.core.key_pressed = (function autumn_lisp_game_jam_2019$core$key_pressed(){
if(cljs.core._EQ_.call(null,key,"j")){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"talking","talking",549208074),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))))){
cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"dialog-index","dialog-index",876749595),cljs.core.inc);
} else {
}

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (character){
if(cljs.core.truth_(autumn_lisp_game_jam_2019.core.aabb_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),autumn_lisp_game_jam_2019.core.tile_size,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(character),autumn_lisp_game_jam_2019.core.tile_size))){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"talking","talking",549208074));
} else {
return null;
}
}),new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))));
} else {
return null;
}
});
autumn_lisp_game_jam_2019.core.mouse_pressed = (function autumn_lisp_game_jam_2019$core$mouse_pressed(){
return cljs.core.swap_BANG_.call(null,autumn_lisp_game_jam_2019.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"enemy-bullets","enemy-bullets",349362883),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,autumn_lisp_game_jam_2019.core.app_state))),new cljs.core.Keyword(null,"speed","speed",1257663751),(10),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null));
});
var G__24826_24827 = window;
(G__24826_24827["setup"] = autumn_lisp_game_jam_2019.core.setup);

(G__24826_24827["draw"] = autumn_lisp_game_jam_2019.core.draw);

(G__24826_24827["keyPressed"] = autumn_lisp_game_jam_2019.core.key_pressed);

(G__24826_24827["mousePressed"] = autumn_lisp_game_jam_2019.core.mouse_pressed);

autumn_lisp_game_jam_2019.core.on_js_reload = (function autumn_lisp_game_jam_2019$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1582248342407
