// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27898_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27898_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27899 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27900 = null;
var count__27901 = (0);
var i__27902 = (0);
while(true){
if((i__27902 < count__27901)){
var n = cljs.core._nth.call(null,chunk__27900,i__27902);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27903 = seq__27899;
var G__27904 = chunk__27900;
var G__27905 = count__27901;
var G__27906 = (i__27902 + (1));
seq__27899 = G__27903;
chunk__27900 = G__27904;
count__27901 = G__27905;
i__27902 = G__27906;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27899);
if(temp__5720__auto__){
var seq__27899__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27899__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27899__$1);
var G__27907 = cljs.core.chunk_rest.call(null,seq__27899__$1);
var G__27908 = c__4550__auto__;
var G__27909 = cljs.core.count.call(null,c__4550__auto__);
var G__27910 = (0);
seq__27899 = G__27907;
chunk__27900 = G__27908;
count__27901 = G__27909;
i__27902 = G__27910;
continue;
} else {
var n = cljs.core.first.call(null,seq__27899__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27911 = cljs.core.next.call(null,seq__27899__$1);
var G__27912 = null;
var G__27913 = (0);
var G__27914 = (0);
seq__27899 = G__27911;
chunk__27900 = G__27912;
count__27901 = G__27913;
i__27902 = G__27914;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27915){
var vec__27916 = p__27915;
var _ = cljs.core.nth.call(null,vec__27916,(0),null);
var v = cljs.core.nth.call(null,vec__27916,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27919){
var vec__27920 = p__27919;
var k = cljs.core.nth.call(null,vec__27920,(0),null);
var v = cljs.core.nth.call(null,vec__27920,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27932_27940 = cljs.core.seq.call(null,deps);
var chunk__27933_27941 = null;
var count__27934_27942 = (0);
var i__27935_27943 = (0);
while(true){
if((i__27935_27943 < count__27934_27942)){
var dep_27944 = cljs.core._nth.call(null,chunk__27933_27941,i__27935_27943);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27944;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27944));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27944,(depth + (1)),state);
} else {
}


var G__27945 = seq__27932_27940;
var G__27946 = chunk__27933_27941;
var G__27947 = count__27934_27942;
var G__27948 = (i__27935_27943 + (1));
seq__27932_27940 = G__27945;
chunk__27933_27941 = G__27946;
count__27934_27942 = G__27947;
i__27935_27943 = G__27948;
continue;
} else {
var temp__5720__auto___27949 = cljs.core.seq.call(null,seq__27932_27940);
if(temp__5720__auto___27949){
var seq__27932_27950__$1 = temp__5720__auto___27949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27932_27950__$1)){
var c__4550__auto___27951 = cljs.core.chunk_first.call(null,seq__27932_27950__$1);
var G__27952 = cljs.core.chunk_rest.call(null,seq__27932_27950__$1);
var G__27953 = c__4550__auto___27951;
var G__27954 = cljs.core.count.call(null,c__4550__auto___27951);
var G__27955 = (0);
seq__27932_27940 = G__27952;
chunk__27933_27941 = G__27953;
count__27934_27942 = G__27954;
i__27935_27943 = G__27955;
continue;
} else {
var dep_27956 = cljs.core.first.call(null,seq__27932_27950__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27956;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27956));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27956,(depth + (1)),state);
} else {
}


var G__27957 = cljs.core.next.call(null,seq__27932_27950__$1);
var G__27958 = null;
var G__27959 = (0);
var G__27960 = (0);
seq__27932_27940 = G__27957;
chunk__27933_27941 = G__27958;
count__27934_27942 = G__27959;
i__27935_27943 = G__27960;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27936){
var vec__27937 = p__27936;
var seq__27938 = cljs.core.seq.call(null,vec__27937);
var first__27939 = cljs.core.first.call(null,seq__27938);
var seq__27938__$1 = cljs.core.next.call(null,seq__27938);
var x = first__27939;
var xs = seq__27938__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27937,seq__27938,first__27939,seq__27938__$1,x,xs,get_deps__$1){
return (function (p1__27923_SHARP_){
return clojure.set.difference.call(null,p1__27923_SHARP_,x);
});})(vec__27937,seq__27938,first__27939,seq__27938__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27961 = cljs.core.seq.call(null,provides);
var chunk__27962 = null;
var count__27963 = (0);
var i__27964 = (0);
while(true){
if((i__27964 < count__27963)){
var prov = cljs.core._nth.call(null,chunk__27962,i__27964);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27973_27981 = cljs.core.seq.call(null,requires);
var chunk__27974_27982 = null;
var count__27975_27983 = (0);
var i__27976_27984 = (0);
while(true){
if((i__27976_27984 < count__27975_27983)){
var req_27985 = cljs.core._nth.call(null,chunk__27974_27982,i__27976_27984);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27985,prov);


var G__27986 = seq__27973_27981;
var G__27987 = chunk__27974_27982;
var G__27988 = count__27975_27983;
var G__27989 = (i__27976_27984 + (1));
seq__27973_27981 = G__27986;
chunk__27974_27982 = G__27987;
count__27975_27983 = G__27988;
i__27976_27984 = G__27989;
continue;
} else {
var temp__5720__auto___27990 = cljs.core.seq.call(null,seq__27973_27981);
if(temp__5720__auto___27990){
var seq__27973_27991__$1 = temp__5720__auto___27990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27973_27991__$1)){
var c__4550__auto___27992 = cljs.core.chunk_first.call(null,seq__27973_27991__$1);
var G__27993 = cljs.core.chunk_rest.call(null,seq__27973_27991__$1);
var G__27994 = c__4550__auto___27992;
var G__27995 = cljs.core.count.call(null,c__4550__auto___27992);
var G__27996 = (0);
seq__27973_27981 = G__27993;
chunk__27974_27982 = G__27994;
count__27975_27983 = G__27995;
i__27976_27984 = G__27996;
continue;
} else {
var req_27997 = cljs.core.first.call(null,seq__27973_27991__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27997,prov);


var G__27998 = cljs.core.next.call(null,seq__27973_27991__$1);
var G__27999 = null;
var G__28000 = (0);
var G__28001 = (0);
seq__27973_27981 = G__27998;
chunk__27974_27982 = G__27999;
count__27975_27983 = G__28000;
i__27976_27984 = G__28001;
continue;
}
} else {
}
}
break;
}


var G__28002 = seq__27961;
var G__28003 = chunk__27962;
var G__28004 = count__27963;
var G__28005 = (i__27964 + (1));
seq__27961 = G__28002;
chunk__27962 = G__28003;
count__27963 = G__28004;
i__27964 = G__28005;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27961);
if(temp__5720__auto__){
var seq__27961__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27961__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27961__$1);
var G__28006 = cljs.core.chunk_rest.call(null,seq__27961__$1);
var G__28007 = c__4550__auto__;
var G__28008 = cljs.core.count.call(null,c__4550__auto__);
var G__28009 = (0);
seq__27961 = G__28006;
chunk__27962 = G__28007;
count__27963 = G__28008;
i__27964 = G__28009;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27961__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27977_28010 = cljs.core.seq.call(null,requires);
var chunk__27978_28011 = null;
var count__27979_28012 = (0);
var i__27980_28013 = (0);
while(true){
if((i__27980_28013 < count__27979_28012)){
var req_28014 = cljs.core._nth.call(null,chunk__27978_28011,i__27980_28013);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28014,prov);


var G__28015 = seq__27977_28010;
var G__28016 = chunk__27978_28011;
var G__28017 = count__27979_28012;
var G__28018 = (i__27980_28013 + (1));
seq__27977_28010 = G__28015;
chunk__27978_28011 = G__28016;
count__27979_28012 = G__28017;
i__27980_28013 = G__28018;
continue;
} else {
var temp__5720__auto___28019__$1 = cljs.core.seq.call(null,seq__27977_28010);
if(temp__5720__auto___28019__$1){
var seq__27977_28020__$1 = temp__5720__auto___28019__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27977_28020__$1)){
var c__4550__auto___28021 = cljs.core.chunk_first.call(null,seq__27977_28020__$1);
var G__28022 = cljs.core.chunk_rest.call(null,seq__27977_28020__$1);
var G__28023 = c__4550__auto___28021;
var G__28024 = cljs.core.count.call(null,c__4550__auto___28021);
var G__28025 = (0);
seq__27977_28010 = G__28022;
chunk__27978_28011 = G__28023;
count__27979_28012 = G__28024;
i__27980_28013 = G__28025;
continue;
} else {
var req_28026 = cljs.core.first.call(null,seq__27977_28020__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28026,prov);


var G__28027 = cljs.core.next.call(null,seq__27977_28020__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__27977_28010 = G__28027;
chunk__27978_28011 = G__28028;
count__27979_28012 = G__28029;
i__27980_28013 = G__28030;
continue;
}
} else {
}
}
break;
}


var G__28031 = cljs.core.next.call(null,seq__27961__$1);
var G__28032 = null;
var G__28033 = (0);
var G__28034 = (0);
seq__27961 = G__28031;
chunk__27962 = G__28032;
count__27963 = G__28033;
i__27964 = G__28034;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28035_28039 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28036_28040 = null;
var count__28037_28041 = (0);
var i__28038_28042 = (0);
while(true){
if((i__28038_28042 < count__28037_28041)){
var ns_28043 = cljs.core._nth.call(null,chunk__28036_28040,i__28038_28042);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28043);


var G__28044 = seq__28035_28039;
var G__28045 = chunk__28036_28040;
var G__28046 = count__28037_28041;
var G__28047 = (i__28038_28042 + (1));
seq__28035_28039 = G__28044;
chunk__28036_28040 = G__28045;
count__28037_28041 = G__28046;
i__28038_28042 = G__28047;
continue;
} else {
var temp__5720__auto___28048 = cljs.core.seq.call(null,seq__28035_28039);
if(temp__5720__auto___28048){
var seq__28035_28049__$1 = temp__5720__auto___28048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28035_28049__$1)){
var c__4550__auto___28050 = cljs.core.chunk_first.call(null,seq__28035_28049__$1);
var G__28051 = cljs.core.chunk_rest.call(null,seq__28035_28049__$1);
var G__28052 = c__4550__auto___28050;
var G__28053 = cljs.core.count.call(null,c__4550__auto___28050);
var G__28054 = (0);
seq__28035_28039 = G__28051;
chunk__28036_28040 = G__28052;
count__28037_28041 = G__28053;
i__28038_28042 = G__28054;
continue;
} else {
var ns_28055 = cljs.core.first.call(null,seq__28035_28049__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28055);


var G__28056 = cljs.core.next.call(null,seq__28035_28049__$1);
var G__28057 = null;
var G__28058 = (0);
var G__28059 = (0);
seq__28035_28039 = G__28056;
chunk__28036_28040 = G__28057;
count__28037_28041 = G__28058;
i__28038_28042 = G__28059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28060__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28061__i = 0, G__28061__a = new Array(arguments.length -  0);
while (G__28061__i < G__28061__a.length) {G__28061__a[G__28061__i] = arguments[G__28061__i + 0]; ++G__28061__i;}
  args = new cljs.core.IndexedSeq(G__28061__a,0,null);
} 
return G__28060__delegate.call(this,args);};
G__28060.cljs$lang$maxFixedArity = 0;
G__28060.cljs$lang$applyTo = (function (arglist__28062){
var args = cljs.core.seq(arglist__28062);
return G__28060__delegate(args);
});
G__28060.cljs$core$IFn$_invoke$arity$variadic = G__28060__delegate;
return G__28060;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28063_SHARP_,p2__28064_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28063_SHARP_)),p2__28064_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28065_SHARP_,p2__28066_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28065_SHARP_),p2__28066_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28067 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28067.addCallback(((function (G__28067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28067))
);

G__28067.addErrback(((function (G__28067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28067))
);

return G__28067;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28068){if((e28068 instanceof Error)){
var e = e28068;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28068;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28069){if((e28069 instanceof Error)){
var e = e28069;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28069;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28070 = cljs.core._EQ_;
var expr__28071 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28070.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28071))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28070.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28071))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28070.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28071))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28070,expr__28071){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28070,expr__28071))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28073,callback){
var map__28074 = p__28073;
var map__28074__$1 = (((((!((map__28074 == null))))?(((((map__28074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28074):map__28074);
var file_msg = map__28074__$1;
var request_url = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28074,map__28074__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28074,map__28074__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__){
return (function (state_28112){
var state_val_28113 = (state_28112[(1)]);
if((state_val_28113 === (7))){
var inst_28108 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28114_28140 = state_28112__$1;
(statearr_28114_28140[(2)] = inst_28108);

(statearr_28114_28140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (1))){
var state_28112__$1 = state_28112;
var statearr_28115_28141 = state_28112__$1;
(statearr_28115_28141[(2)] = null);

(statearr_28115_28141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (4))){
var inst_28078 = (state_28112[(7)]);
var inst_28078__$1 = (state_28112[(2)]);
var state_28112__$1 = (function (){var statearr_28116 = state_28112;
(statearr_28116[(7)] = inst_28078__$1);

return statearr_28116;
})();
if(cljs.core.truth_(inst_28078__$1)){
var statearr_28117_28142 = state_28112__$1;
(statearr_28117_28142[(1)] = (5));

} else {
var statearr_28118_28143 = state_28112__$1;
(statearr_28118_28143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (15))){
var inst_28093 = (state_28112[(8)]);
var inst_28091 = (state_28112[(9)]);
var inst_28095 = inst_28093.call(null,inst_28091);
var state_28112__$1 = state_28112;
var statearr_28119_28144 = state_28112__$1;
(statearr_28119_28144[(2)] = inst_28095);

(statearr_28119_28144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (13))){
var inst_28102 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28120_28145 = state_28112__$1;
(statearr_28120_28145[(2)] = inst_28102);

(statearr_28120_28145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (6))){
var state_28112__$1 = state_28112;
var statearr_28121_28146 = state_28112__$1;
(statearr_28121_28146[(2)] = null);

(statearr_28121_28146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (17))){
var inst_28099 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28122_28147 = state_28112__$1;
(statearr_28122_28147[(2)] = inst_28099);

(statearr_28122_28147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (3))){
var inst_28110 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28112__$1,inst_28110);
} else {
if((state_val_28113 === (12))){
var state_28112__$1 = state_28112;
var statearr_28123_28148 = state_28112__$1;
(statearr_28123_28148[(2)] = null);

(statearr_28123_28148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (2))){
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28112__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28113 === (11))){
var inst_28083 = (state_28112[(10)]);
var inst_28089 = figwheel.client.file_reloading.blocking_load.call(null,inst_28083);
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28112__$1,(14),inst_28089);
} else {
if((state_val_28113 === (9))){
var inst_28083 = (state_28112[(10)]);
var state_28112__$1 = state_28112;
if(cljs.core.truth_(inst_28083)){
var statearr_28124_28149 = state_28112__$1;
(statearr_28124_28149[(1)] = (11));

} else {
var statearr_28125_28150 = state_28112__$1;
(statearr_28125_28150[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (5))){
var inst_28084 = (state_28112[(11)]);
var inst_28078 = (state_28112[(7)]);
var inst_28083 = cljs.core.nth.call(null,inst_28078,(0),null);
var inst_28084__$1 = cljs.core.nth.call(null,inst_28078,(1),null);
var state_28112__$1 = (function (){var statearr_28126 = state_28112;
(statearr_28126[(11)] = inst_28084__$1);

(statearr_28126[(10)] = inst_28083);

return statearr_28126;
})();
if(cljs.core.truth_(inst_28084__$1)){
var statearr_28127_28151 = state_28112__$1;
(statearr_28127_28151[(1)] = (8));

} else {
var statearr_28128_28152 = state_28112__$1;
(statearr_28128_28152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (14))){
var inst_28093 = (state_28112[(8)]);
var inst_28083 = (state_28112[(10)]);
var inst_28091 = (state_28112[(2)]);
var inst_28092 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28093__$1 = cljs.core.get.call(null,inst_28092,inst_28083);
var state_28112__$1 = (function (){var statearr_28129 = state_28112;
(statearr_28129[(8)] = inst_28093__$1);

(statearr_28129[(9)] = inst_28091);

return statearr_28129;
})();
if(cljs.core.truth_(inst_28093__$1)){
var statearr_28130_28153 = state_28112__$1;
(statearr_28130_28153[(1)] = (15));

} else {
var statearr_28131_28154 = state_28112__$1;
(statearr_28131_28154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (16))){
var inst_28091 = (state_28112[(9)]);
var inst_28097 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28091);
var state_28112__$1 = state_28112;
var statearr_28132_28155 = state_28112__$1;
(statearr_28132_28155[(2)] = inst_28097);

(statearr_28132_28155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (10))){
var inst_28104 = (state_28112[(2)]);
var state_28112__$1 = (function (){var statearr_28133 = state_28112;
(statearr_28133[(12)] = inst_28104);

return statearr_28133;
})();
var statearr_28134_28156 = state_28112__$1;
(statearr_28134_28156[(2)] = null);

(statearr_28134_28156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (8))){
var inst_28084 = (state_28112[(11)]);
var inst_28086 = eval(inst_28084);
var state_28112__$1 = state_28112;
var statearr_28135_28157 = state_28112__$1;
(statearr_28135_28157[(2)] = inst_28086);

(statearr_28135_28157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__25784__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25690__auto__ = null;
var figwheel$client$file_reloading$state_machine__25690__auto____0 = (function (){
var statearr_28136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28136[(0)] = figwheel$client$file_reloading$state_machine__25690__auto__);

(statearr_28136[(1)] = (1));

return statearr_28136;
});
var figwheel$client$file_reloading$state_machine__25690__auto____1 = (function (state_28112){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_28112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e28137){if((e28137 instanceof Object)){
var ex__25693__auto__ = e28137;
var statearr_28138_28158 = state_28112;
(statearr_28138_28158[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28159 = state_28112;
state_28112 = G__28159;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25690__auto__ = function(state_28112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25690__auto____1.call(this,state_28112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25690__auto____0;
figwheel$client$file_reloading$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25690__auto____1;
return figwheel$client$file_reloading$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__))
})();
var state__25786__auto__ = (function (){var statearr_28139 = f__25785__auto__.call(null);
(statearr_28139[(6)] = c__25784__auto__);

return statearr_28139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__))
);

return c__25784__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28161 = arguments.length;
switch (G__28161) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28163,callback){
var map__28164 = p__28163;
var map__28164__$1 = (((((!((map__28164 == null))))?(((((map__28164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28164):map__28164);
var file_msg = map__28164__$1;
var namespace = cljs.core.get.call(null,map__28164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28164,map__28164__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28164,map__28164__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28166){
var map__28167 = p__28166;
var map__28167__$1 = (((((!((map__28167 == null))))?(((((map__28167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28167):map__28167);
var file_msg = map__28167__$1;
var namespace = cljs.core.get.call(null,map__28167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28169){
var map__28170 = p__28169;
var map__28170__$1 = (((((!((map__28170 == null))))?(((((map__28170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);
var file_msg = map__28170__$1;
var namespace = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28172,callback){
var map__28173 = p__28172;
var map__28173__$1 = (((((!((map__28173 == null))))?(((((map__28173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28173):map__28173);
var file_msg = map__28173__$1;
var request_url = cljs.core.get.call(null,map__28173__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28173__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25784__auto___28223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___28223,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___28223,out){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (1))){
var inst_28182 = cljs.core.seq.call(null,files);
var inst_28183 = cljs.core.first.call(null,inst_28182);
var inst_28184 = cljs.core.next.call(null,inst_28182);
var inst_28185 = files;
var state_28208__$1 = (function (){var statearr_28210 = state_28208;
(statearr_28210[(7)] = inst_28185);

(statearr_28210[(8)] = inst_28183);

(statearr_28210[(9)] = inst_28184);

return statearr_28210;
})();
var statearr_28211_28224 = state_28208__$1;
(statearr_28211_28224[(2)] = null);

(statearr_28211_28224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (2))){
var inst_28185 = (state_28208[(7)]);
var inst_28191 = (state_28208[(10)]);
var inst_28190 = cljs.core.seq.call(null,inst_28185);
var inst_28191__$1 = cljs.core.first.call(null,inst_28190);
var inst_28192 = cljs.core.next.call(null,inst_28190);
var inst_28193 = (inst_28191__$1 == null);
var inst_28194 = cljs.core.not.call(null,inst_28193);
var state_28208__$1 = (function (){var statearr_28212 = state_28208;
(statearr_28212[(10)] = inst_28191__$1);

(statearr_28212[(11)] = inst_28192);

return statearr_28212;
})();
if(inst_28194){
var statearr_28213_28225 = state_28208__$1;
(statearr_28213_28225[(1)] = (4));

} else {
var statearr_28214_28226 = state_28208__$1;
(statearr_28214_28226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (4))){
var inst_28191 = (state_28208[(10)]);
var inst_28196 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28191);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(7),inst_28196);
} else {
if((state_val_28209 === (5))){
var inst_28202 = cljs.core.async.close_BANG_.call(null,out);
var state_28208__$1 = state_28208;
var statearr_28215_28227 = state_28208__$1;
(statearr_28215_28227[(2)] = inst_28202);

(statearr_28215_28227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (6))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28216_28228 = state_28208__$1;
(statearr_28216_28228[(2)] = inst_28204);

(statearr_28216_28228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28209 === (7))){
var inst_28192 = (state_28208[(11)]);
var inst_28198 = (state_28208[(2)]);
var inst_28199 = cljs.core.async.put_BANG_.call(null,out,inst_28198);
var inst_28185 = inst_28192;
var state_28208__$1 = (function (){var statearr_28217 = state_28208;
(statearr_28217[(7)] = inst_28185);

(statearr_28217[(12)] = inst_28199);

return statearr_28217;
})();
var statearr_28218_28229 = state_28208__$1;
(statearr_28218_28229[(2)] = null);

(statearr_28218_28229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25784__auto___28223,out))
;
return ((function (switch__25689__auto__,c__25784__auto___28223,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____0 = (function (){
var statearr_28219 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28219[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__);

(statearr_28219[(1)] = (1));

return statearr_28219;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____1 = (function (state_28208){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e28220){if((e28220 instanceof Object)){
var ex__25693__auto__ = e28220;
var statearr_28221_28230 = state_28208;
(statearr_28221_28230[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28231 = state_28208;
state_28208 = G__28231;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___28223,out))
})();
var state__25786__auto__ = (function (){var statearr_28222 = f__25785__auto__.call(null);
(statearr_28222[(6)] = c__25784__auto___28223);

return statearr_28222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___28223,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28232,opts){
var map__28233 = p__28232;
var map__28233__$1 = (((((!((map__28233 == null))))?(((((map__28233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28233):map__28233);
var eval_body = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28235){var e = e28235;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28236_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28236_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28237){
var vec__28238 = p__28237;
var k = cljs.core.nth.call(null,vec__28238,(0),null);
var v = cljs.core.nth.call(null,vec__28238,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28241){
var vec__28242 = p__28241;
var k = cljs.core.nth.call(null,vec__28242,(0),null);
var v = cljs.core.nth.call(null,vec__28242,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28248,p__28249){
var map__28250 = p__28248;
var map__28250__$1 = (((((!((map__28250 == null))))?(((((map__28250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28250):map__28250);
var opts = map__28250__$1;
var before_jsload = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28251 = p__28249;
var map__28251__$1 = (((((!((map__28251 == null))))?(((((map__28251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);
var msg = map__28251__$1;
var files = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (7))){
var inst_28268 = (state_28405[(7)]);
var inst_28267 = (state_28405[(8)]);
var inst_28265 = (state_28405[(9)]);
var inst_28266 = (state_28405[(10)]);
var inst_28273 = cljs.core._nth.call(null,inst_28266,inst_28268);
var inst_28274 = figwheel.client.file_reloading.eval_body.call(null,inst_28273,opts);
var inst_28275 = (inst_28268 + (1));
var tmp28407 = inst_28267;
var tmp28408 = inst_28265;
var tmp28409 = inst_28266;
var inst_28265__$1 = tmp28408;
var inst_28266__$1 = tmp28409;
var inst_28267__$1 = tmp28407;
var inst_28268__$1 = inst_28275;
var state_28405__$1 = (function (){var statearr_28410 = state_28405;
(statearr_28410[(7)] = inst_28268__$1);

(statearr_28410[(8)] = inst_28267__$1);

(statearr_28410[(9)] = inst_28265__$1);

(statearr_28410[(10)] = inst_28266__$1);

(statearr_28410[(11)] = inst_28274);

return statearr_28410;
})();
var statearr_28411_28494 = state_28405__$1;
(statearr_28411_28494[(2)] = null);

(statearr_28411_28494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (20))){
var inst_28308 = (state_28405[(12)]);
var inst_28316 = figwheel.client.file_reloading.sort_files.call(null,inst_28308);
var state_28405__$1 = state_28405;
var statearr_28412_28495 = state_28405__$1;
(statearr_28412_28495[(2)] = inst_28316);

(statearr_28412_28495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (27))){
var state_28405__$1 = state_28405;
var statearr_28413_28496 = state_28405__$1;
(statearr_28413_28496[(2)] = null);

(statearr_28413_28496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (1))){
var inst_28257 = (state_28405[(13)]);
var inst_28254 = before_jsload.call(null,files);
var inst_28255 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28256 = (function (){return ((function (inst_28257,inst_28254,inst_28255,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28245_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28245_SHARP_);
});
;})(inst_28257,inst_28254,inst_28255,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28257__$1 = cljs.core.filter.call(null,inst_28256,files);
var inst_28258 = cljs.core.not_empty.call(null,inst_28257__$1);
var state_28405__$1 = (function (){var statearr_28414 = state_28405;
(statearr_28414[(13)] = inst_28257__$1);

(statearr_28414[(14)] = inst_28254);

(statearr_28414[(15)] = inst_28255);

return statearr_28414;
})();
if(cljs.core.truth_(inst_28258)){
var statearr_28415_28497 = state_28405__$1;
(statearr_28415_28497[(1)] = (2));

} else {
var statearr_28416_28498 = state_28405__$1;
(statearr_28416_28498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (24))){
var state_28405__$1 = state_28405;
var statearr_28417_28499 = state_28405__$1;
(statearr_28417_28499[(2)] = null);

(statearr_28417_28499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (39))){
var inst_28358 = (state_28405[(16)]);
var state_28405__$1 = state_28405;
var statearr_28418_28500 = state_28405__$1;
(statearr_28418_28500[(2)] = inst_28358);

(statearr_28418_28500[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (46))){
var inst_28400 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28419_28501 = state_28405__$1;
(statearr_28419_28501[(2)] = inst_28400);

(statearr_28419_28501[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (4))){
var inst_28302 = (state_28405[(2)]);
var inst_28303 = cljs.core.List.EMPTY;
var inst_28304 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28303);
var inst_28305 = (function (){return ((function (inst_28302,inst_28303,inst_28304,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28246_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28246_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28246_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28246_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28302,inst_28303,inst_28304,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28306 = cljs.core.filter.call(null,inst_28305,files);
var inst_28307 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28308 = cljs.core.concat.call(null,inst_28306,inst_28307);
var state_28405__$1 = (function (){var statearr_28420 = state_28405;
(statearr_28420[(17)] = inst_28304);

(statearr_28420[(18)] = inst_28302);

(statearr_28420[(12)] = inst_28308);

return statearr_28420;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28421_28502 = state_28405__$1;
(statearr_28421_28502[(1)] = (16));

} else {
var statearr_28422_28503 = state_28405__$1;
(statearr_28422_28503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (15))){
var inst_28292 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28423_28504 = state_28405__$1;
(statearr_28423_28504[(2)] = inst_28292);

(statearr_28423_28504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (21))){
var inst_28318 = (state_28405[(19)]);
var inst_28318__$1 = (state_28405[(2)]);
var inst_28319 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28318__$1);
var state_28405__$1 = (function (){var statearr_28424 = state_28405;
(statearr_28424[(19)] = inst_28318__$1);

return statearr_28424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(22),inst_28319);
} else {
if((state_val_28406 === (31))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (32))){
var inst_28358 = (state_28405[(16)]);
var inst_28363 = inst_28358.cljs$lang$protocol_mask$partition0$;
var inst_28364 = (inst_28363 & (64));
var inst_28365 = inst_28358.cljs$core$ISeq$;
var inst_28366 = (cljs.core.PROTOCOL_SENTINEL === inst_28365);
var inst_28367 = ((inst_28364) || (inst_28366));
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28367)){
var statearr_28425_28505 = state_28405__$1;
(statearr_28425_28505[(1)] = (35));

} else {
var statearr_28426_28506 = state_28405__$1;
(statearr_28426_28506[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (40))){
var inst_28380 = (state_28405[(20)]);
var inst_28379 = (state_28405[(2)]);
var inst_28380__$1 = cljs.core.get.call(null,inst_28379,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28381 = cljs.core.get.call(null,inst_28379,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28382 = cljs.core.not_empty.call(null,inst_28380__$1);
var state_28405__$1 = (function (){var statearr_28427 = state_28405;
(statearr_28427[(20)] = inst_28380__$1);

(statearr_28427[(21)] = inst_28381);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28382)){
var statearr_28428_28507 = state_28405__$1;
(statearr_28428_28507[(1)] = (41));

} else {
var statearr_28429_28508 = state_28405__$1;
(statearr_28429_28508[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (33))){
var state_28405__$1 = state_28405;
var statearr_28430_28509 = state_28405__$1;
(statearr_28430_28509[(2)] = false);

(statearr_28430_28509[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (13))){
var inst_28278 = (state_28405[(22)]);
var inst_28282 = cljs.core.chunk_first.call(null,inst_28278);
var inst_28283 = cljs.core.chunk_rest.call(null,inst_28278);
var inst_28284 = cljs.core.count.call(null,inst_28282);
var inst_28265 = inst_28283;
var inst_28266 = inst_28282;
var inst_28267 = inst_28284;
var inst_28268 = (0);
var state_28405__$1 = (function (){var statearr_28431 = state_28405;
(statearr_28431[(7)] = inst_28268);

(statearr_28431[(8)] = inst_28267);

(statearr_28431[(9)] = inst_28265);

(statearr_28431[(10)] = inst_28266);

return statearr_28431;
})();
var statearr_28432_28510 = state_28405__$1;
(statearr_28432_28510[(2)] = null);

(statearr_28432_28510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (22))){
var inst_28318 = (state_28405[(19)]);
var inst_28321 = (state_28405[(23)]);
var inst_28326 = (state_28405[(24)]);
var inst_28322 = (state_28405[(25)]);
var inst_28321__$1 = (state_28405[(2)]);
var inst_28322__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28321__$1);
var inst_28323 = (function (){var all_files = inst_28318;
var res_SINGLEQUOTE_ = inst_28321__$1;
var res = inst_28322__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28318,inst_28321,inst_28326,inst_28322,inst_28321__$1,inst_28322__$1,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28247_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28247_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28318,inst_28321,inst_28326,inst_28322,inst_28321__$1,inst_28322__$1,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28324 = cljs.core.filter.call(null,inst_28323,inst_28321__$1);
var inst_28325 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28326__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28325);
var inst_28327 = cljs.core.not_empty.call(null,inst_28326__$1);
var state_28405__$1 = (function (){var statearr_28433 = state_28405;
(statearr_28433[(23)] = inst_28321__$1);

(statearr_28433[(24)] = inst_28326__$1);

(statearr_28433[(25)] = inst_28322__$1);

(statearr_28433[(26)] = inst_28324);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28327)){
var statearr_28434_28511 = state_28405__$1;
(statearr_28434_28511[(1)] = (23));

} else {
var statearr_28435_28512 = state_28405__$1;
(statearr_28435_28512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (36))){
var state_28405__$1 = state_28405;
var statearr_28436_28513 = state_28405__$1;
(statearr_28436_28513[(2)] = false);

(statearr_28436_28513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (41))){
var inst_28380 = (state_28405[(20)]);
var inst_28384 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28385 = cljs.core.map.call(null,inst_28384,inst_28380);
var inst_28386 = cljs.core.pr_str.call(null,inst_28385);
var inst_28387 = ["figwheel-no-load meta-data: ",inst_28386].join('');
var inst_28388 = figwheel.client.utils.log.call(null,inst_28387);
var state_28405__$1 = state_28405;
var statearr_28437_28514 = state_28405__$1;
(statearr_28437_28514[(2)] = inst_28388);

(statearr_28437_28514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (43))){
var inst_28381 = (state_28405[(21)]);
var inst_28391 = (state_28405[(2)]);
var inst_28392 = cljs.core.not_empty.call(null,inst_28381);
var state_28405__$1 = (function (){var statearr_28438 = state_28405;
(statearr_28438[(27)] = inst_28391);

return statearr_28438;
})();
if(cljs.core.truth_(inst_28392)){
var statearr_28439_28515 = state_28405__$1;
(statearr_28439_28515[(1)] = (44));

} else {
var statearr_28440_28516 = state_28405__$1;
(statearr_28440_28516[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (29))){
var inst_28318 = (state_28405[(19)]);
var inst_28321 = (state_28405[(23)]);
var inst_28326 = (state_28405[(24)]);
var inst_28322 = (state_28405[(25)]);
var inst_28324 = (state_28405[(26)]);
var inst_28358 = (state_28405[(16)]);
var inst_28354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28357 = (function (){var all_files = inst_28318;
var res_SINGLEQUOTE_ = inst_28321;
var res = inst_28322;
var files_not_loaded = inst_28324;
var dependencies_that_loaded = inst_28326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28358,inst_28354,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28356){
var map__28441 = p__28356;
var map__28441__$1 = (((((!((map__28441 == null))))?(((((map__28441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28441):map__28441);
var namespace = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28358,inst_28354,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28358__$1 = cljs.core.group_by.call(null,inst_28357,inst_28324);
var inst_28360 = (inst_28358__$1 == null);
var inst_28361 = cljs.core.not.call(null,inst_28360);
var state_28405__$1 = (function (){var statearr_28443 = state_28405;
(statearr_28443[(28)] = inst_28354);

(statearr_28443[(16)] = inst_28358__$1);

return statearr_28443;
})();
if(inst_28361){
var statearr_28444_28517 = state_28405__$1;
(statearr_28444_28517[(1)] = (32));

} else {
var statearr_28445_28518 = state_28405__$1;
(statearr_28445_28518[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (44))){
var inst_28381 = (state_28405[(21)]);
var inst_28394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28381);
var inst_28395 = cljs.core.pr_str.call(null,inst_28394);
var inst_28396 = ["not required: ",inst_28395].join('');
var inst_28397 = figwheel.client.utils.log.call(null,inst_28396);
var state_28405__$1 = state_28405;
var statearr_28446_28519 = state_28405__$1;
(statearr_28446_28519[(2)] = inst_28397);

(statearr_28446_28519[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (6))){
var inst_28299 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28447_28520 = state_28405__$1;
(statearr_28447_28520[(2)] = inst_28299);

(statearr_28447_28520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (28))){
var inst_28324 = (state_28405[(26)]);
var inst_28351 = (state_28405[(2)]);
var inst_28352 = cljs.core.not_empty.call(null,inst_28324);
var state_28405__$1 = (function (){var statearr_28448 = state_28405;
(statearr_28448[(29)] = inst_28351);

return statearr_28448;
})();
if(cljs.core.truth_(inst_28352)){
var statearr_28449_28521 = state_28405__$1;
(statearr_28449_28521[(1)] = (29));

} else {
var statearr_28450_28522 = state_28405__$1;
(statearr_28450_28522[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (25))){
var inst_28322 = (state_28405[(25)]);
var inst_28338 = (state_28405[(2)]);
var inst_28339 = cljs.core.not_empty.call(null,inst_28322);
var state_28405__$1 = (function (){var statearr_28451 = state_28405;
(statearr_28451[(30)] = inst_28338);

return statearr_28451;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28452_28523 = state_28405__$1;
(statearr_28452_28523[(1)] = (26));

} else {
var statearr_28453_28524 = state_28405__$1;
(statearr_28453_28524[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (34))){
var inst_28374 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28374)){
var statearr_28454_28525 = state_28405__$1;
(statearr_28454_28525[(1)] = (38));

} else {
var statearr_28455_28526 = state_28405__$1;
(statearr_28455_28526[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (17))){
var state_28405__$1 = state_28405;
var statearr_28456_28527 = state_28405__$1;
(statearr_28456_28527[(2)] = recompile_dependents);

(statearr_28456_28527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (3))){
var state_28405__$1 = state_28405;
var statearr_28457_28528 = state_28405__$1;
(statearr_28457_28528[(2)] = null);

(statearr_28457_28528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (12))){
var inst_28295 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28458_28529 = state_28405__$1;
(statearr_28458_28529[(2)] = inst_28295);

(statearr_28458_28529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (2))){
var inst_28257 = (state_28405[(13)]);
var inst_28264 = cljs.core.seq.call(null,inst_28257);
var inst_28265 = inst_28264;
var inst_28266 = null;
var inst_28267 = (0);
var inst_28268 = (0);
var state_28405__$1 = (function (){var statearr_28459 = state_28405;
(statearr_28459[(7)] = inst_28268);

(statearr_28459[(8)] = inst_28267);

(statearr_28459[(9)] = inst_28265);

(statearr_28459[(10)] = inst_28266);

return statearr_28459;
})();
var statearr_28460_28530 = state_28405__$1;
(statearr_28460_28530[(2)] = null);

(statearr_28460_28530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (23))){
var inst_28318 = (state_28405[(19)]);
var inst_28321 = (state_28405[(23)]);
var inst_28326 = (state_28405[(24)]);
var inst_28322 = (state_28405[(25)]);
var inst_28324 = (state_28405[(26)]);
var inst_28329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28331 = (function (){var all_files = inst_28318;
var res_SINGLEQUOTE_ = inst_28321;
var res = inst_28322;
var files_not_loaded = inst_28324;
var dependencies_that_loaded = inst_28326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28329,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28330){
var map__28461 = p__28330;
var map__28461__$1 = (((((!((map__28461 == null))))?(((((map__28461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28461):map__28461);
var request_url = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28329,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28332 = cljs.core.reverse.call(null,inst_28326);
var inst_28333 = cljs.core.map.call(null,inst_28331,inst_28332);
var inst_28334 = cljs.core.pr_str.call(null,inst_28333);
var inst_28335 = figwheel.client.utils.log.call(null,inst_28334);
var state_28405__$1 = (function (){var statearr_28463 = state_28405;
(statearr_28463[(31)] = inst_28329);

return statearr_28463;
})();
var statearr_28464_28531 = state_28405__$1;
(statearr_28464_28531[(2)] = inst_28335);

(statearr_28464_28531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (35))){
var state_28405__$1 = state_28405;
var statearr_28465_28532 = state_28405__$1;
(statearr_28465_28532[(2)] = true);

(statearr_28465_28532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (19))){
var inst_28308 = (state_28405[(12)]);
var inst_28314 = figwheel.client.file_reloading.expand_files.call(null,inst_28308);
var state_28405__$1 = state_28405;
var statearr_28466_28533 = state_28405__$1;
(statearr_28466_28533[(2)] = inst_28314);

(statearr_28466_28533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (11))){
var state_28405__$1 = state_28405;
var statearr_28467_28534 = state_28405__$1;
(statearr_28467_28534[(2)] = null);

(statearr_28467_28534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (9))){
var inst_28297 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28468_28535 = state_28405__$1;
(statearr_28468_28535[(2)] = inst_28297);

(statearr_28468_28535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (5))){
var inst_28268 = (state_28405[(7)]);
var inst_28267 = (state_28405[(8)]);
var inst_28270 = (inst_28268 < inst_28267);
var inst_28271 = inst_28270;
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28271)){
var statearr_28469_28536 = state_28405__$1;
(statearr_28469_28536[(1)] = (7));

} else {
var statearr_28470_28537 = state_28405__$1;
(statearr_28470_28537[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (14))){
var inst_28278 = (state_28405[(22)]);
var inst_28287 = cljs.core.first.call(null,inst_28278);
var inst_28288 = figwheel.client.file_reloading.eval_body.call(null,inst_28287,opts);
var inst_28289 = cljs.core.next.call(null,inst_28278);
var inst_28265 = inst_28289;
var inst_28266 = null;
var inst_28267 = (0);
var inst_28268 = (0);
var state_28405__$1 = (function (){var statearr_28471 = state_28405;
(statearr_28471[(7)] = inst_28268);

(statearr_28471[(8)] = inst_28267);

(statearr_28471[(9)] = inst_28265);

(statearr_28471[(32)] = inst_28288);

(statearr_28471[(10)] = inst_28266);

return statearr_28471;
})();
var statearr_28472_28538 = state_28405__$1;
(statearr_28472_28538[(2)] = null);

(statearr_28472_28538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (45))){
var state_28405__$1 = state_28405;
var statearr_28473_28539 = state_28405__$1;
(statearr_28473_28539[(2)] = null);

(statearr_28473_28539[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (26))){
var inst_28318 = (state_28405[(19)]);
var inst_28321 = (state_28405[(23)]);
var inst_28326 = (state_28405[(24)]);
var inst_28322 = (state_28405[(25)]);
var inst_28324 = (state_28405[(26)]);
var inst_28341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28343 = (function (){var all_files = inst_28318;
var res_SINGLEQUOTE_ = inst_28321;
var res = inst_28322;
var files_not_loaded = inst_28324;
var dependencies_that_loaded = inst_28326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28341,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28342){
var map__28474 = p__28342;
var map__28474__$1 = (((((!((map__28474 == null))))?(((((map__28474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);
var namespace = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28341,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28344 = cljs.core.map.call(null,inst_28343,inst_28322);
var inst_28345 = cljs.core.pr_str.call(null,inst_28344);
var inst_28346 = figwheel.client.utils.log.call(null,inst_28345);
var inst_28347 = (function (){var all_files = inst_28318;
var res_SINGLEQUOTE_ = inst_28321;
var res = inst_28322;
var files_not_loaded = inst_28324;
var dependencies_that_loaded = inst_28326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28341,inst_28343,inst_28344,inst_28345,inst_28346,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28318,inst_28321,inst_28326,inst_28322,inst_28324,inst_28341,inst_28343,inst_28344,inst_28345,inst_28346,state_val_28406,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28348 = setTimeout(inst_28347,(10));
var state_28405__$1 = (function (){var statearr_28476 = state_28405;
(statearr_28476[(33)] = inst_28341);

(statearr_28476[(34)] = inst_28346);

return statearr_28476;
})();
var statearr_28477_28540 = state_28405__$1;
(statearr_28477_28540[(2)] = inst_28348);

(statearr_28477_28540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (16))){
var state_28405__$1 = state_28405;
var statearr_28478_28541 = state_28405__$1;
(statearr_28478_28541[(2)] = reload_dependents);

(statearr_28478_28541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (38))){
var inst_28358 = (state_28405[(16)]);
var inst_28376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28358);
var state_28405__$1 = state_28405;
var statearr_28479_28542 = state_28405__$1;
(statearr_28479_28542[(2)] = inst_28376);

(statearr_28479_28542[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (30))){
var state_28405__$1 = state_28405;
var statearr_28480_28543 = state_28405__$1;
(statearr_28480_28543[(2)] = null);

(statearr_28480_28543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (10))){
var inst_28278 = (state_28405[(22)]);
var inst_28280 = cljs.core.chunked_seq_QMARK_.call(null,inst_28278);
var state_28405__$1 = state_28405;
if(inst_28280){
var statearr_28481_28544 = state_28405__$1;
(statearr_28481_28544[(1)] = (13));

} else {
var statearr_28482_28545 = state_28405__$1;
(statearr_28482_28545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (18))){
var inst_28312 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
if(cljs.core.truth_(inst_28312)){
var statearr_28483_28546 = state_28405__$1;
(statearr_28483_28546[(1)] = (19));

} else {
var statearr_28484_28547 = state_28405__$1;
(statearr_28484_28547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (42))){
var state_28405__$1 = state_28405;
var statearr_28485_28548 = state_28405__$1;
(statearr_28485_28548[(2)] = null);

(statearr_28485_28548[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (37))){
var inst_28371 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
var statearr_28486_28549 = state_28405__$1;
(statearr_28486_28549[(2)] = inst_28371);

(statearr_28486_28549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (8))){
var inst_28265 = (state_28405[(9)]);
var inst_28278 = (state_28405[(22)]);
var inst_28278__$1 = cljs.core.seq.call(null,inst_28265);
var state_28405__$1 = (function (){var statearr_28487 = state_28405;
(statearr_28487[(22)] = inst_28278__$1);

return statearr_28487;
})();
if(inst_28278__$1){
var statearr_28488_28550 = state_28405__$1;
(statearr_28488_28550[(1)] = (10));

} else {
var statearr_28489_28551 = state_28405__$1;
(statearr_28489_28551[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25689__auto__,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____0 = (function (){
var statearr_28490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28490[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__);

(statearr_28490[(1)] = (1));

return statearr_28490;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____1 = (function (state_28405){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e28491){if((e28491 instanceof Object)){
var ex__25693__auto__ = e28491;
var statearr_28492_28552 = state_28405;
(statearr_28492_28552[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28553 = state_28405;
state_28405 = G__28553;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25786__auto__ = (function (){var statearr_28493 = f__25785__auto__.call(null);
(statearr_28493[(6)] = c__25784__auto__);

return statearr_28493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__,map__28250,map__28250__$1,opts,before_jsload,on_jsload,reload_dependents,map__28251,map__28251__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25784__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28556,link){
var map__28557 = p__28556;
var map__28557__$1 = (((((!((map__28557 == null))))?(((((map__28557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28557):map__28557);
var file = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28557,map__28557__$1,file){
return (function (p1__28554_SHARP_,p2__28555_SHARP_){
if(cljs.core._EQ_.call(null,p1__28554_SHARP_,p2__28555_SHARP_)){
return p1__28554_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28557,map__28557__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28560){
var map__28561 = p__28560;
var map__28561__$1 = (((((!((map__28561 == null))))?(((((map__28561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);
var match_length = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28559_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28559_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28563_SHARP_,p2__28564_SHARP_){
return cljs.core.assoc.call(null,p1__28563_SHARP_,cljs.core.get.call(null,p2__28564_SHARP_,key),p2__28564_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28565 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28565);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28565);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28566,p__28567){
var map__28568 = p__28566;
var map__28568__$1 = (((((!((map__28568 == null))))?(((((map__28568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28568):map__28568);
var on_cssload = cljs.core.get.call(null,map__28568__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28569 = p__28567;
var map__28569__$1 = (((((!((map__28569 == null))))?(((((map__28569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var files_msg = map__28569__$1;
var files = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1570822064846
