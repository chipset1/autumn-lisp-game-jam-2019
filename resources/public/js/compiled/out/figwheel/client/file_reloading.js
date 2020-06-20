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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28023_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28023_SHARP_));
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
var seq__28024 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28025 = null;
var count__28026 = (0);
var i__28027 = (0);
while(true){
if((i__28027 < count__28026)){
var n = cljs.core._nth.call(null,chunk__28025,i__28027);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28028 = seq__28024;
var G__28029 = chunk__28025;
var G__28030 = count__28026;
var G__28031 = (i__28027 + (1));
seq__28024 = G__28028;
chunk__28025 = G__28029;
count__28026 = G__28030;
i__28027 = G__28031;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28024);
if(temp__5720__auto__){
var seq__28024__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28024__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28024__$1);
var G__28032 = cljs.core.chunk_rest.call(null,seq__28024__$1);
var G__28033 = c__4550__auto__;
var G__28034 = cljs.core.count.call(null,c__4550__auto__);
var G__28035 = (0);
seq__28024 = G__28032;
chunk__28025 = G__28033;
count__28026 = G__28034;
i__28027 = G__28035;
continue;
} else {
var n = cljs.core.first.call(null,seq__28024__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28036 = cljs.core.next.call(null,seq__28024__$1);
var G__28037 = null;
var G__28038 = (0);
var G__28039 = (0);
seq__28024 = G__28036;
chunk__28025 = G__28037;
count__28026 = G__28038;
i__28027 = G__28039;
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
return cljs.core.some.call(null,(function (p__28040){
var vec__28041 = p__28040;
var _ = cljs.core.nth.call(null,vec__28041,(0),null);
var v = cljs.core.nth.call(null,vec__28041,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28044){
var vec__28045 = p__28044;
var k = cljs.core.nth.call(null,vec__28045,(0),null);
var v = cljs.core.nth.call(null,vec__28045,(1),null);
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

var seq__28057_28065 = cljs.core.seq.call(null,deps);
var chunk__28058_28066 = null;
var count__28059_28067 = (0);
var i__28060_28068 = (0);
while(true){
if((i__28060_28068 < count__28059_28067)){
var dep_28069 = cljs.core._nth.call(null,chunk__28058_28066,i__28060_28068);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28069;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28069));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28069,(depth + (1)),state);
} else {
}


var G__28070 = seq__28057_28065;
var G__28071 = chunk__28058_28066;
var G__28072 = count__28059_28067;
var G__28073 = (i__28060_28068 + (1));
seq__28057_28065 = G__28070;
chunk__28058_28066 = G__28071;
count__28059_28067 = G__28072;
i__28060_28068 = G__28073;
continue;
} else {
var temp__5720__auto___28074 = cljs.core.seq.call(null,seq__28057_28065);
if(temp__5720__auto___28074){
var seq__28057_28075__$1 = temp__5720__auto___28074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28057_28075__$1)){
var c__4550__auto___28076 = cljs.core.chunk_first.call(null,seq__28057_28075__$1);
var G__28077 = cljs.core.chunk_rest.call(null,seq__28057_28075__$1);
var G__28078 = c__4550__auto___28076;
var G__28079 = cljs.core.count.call(null,c__4550__auto___28076);
var G__28080 = (0);
seq__28057_28065 = G__28077;
chunk__28058_28066 = G__28078;
count__28059_28067 = G__28079;
i__28060_28068 = G__28080;
continue;
} else {
var dep_28081 = cljs.core.first.call(null,seq__28057_28075__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28081;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28081));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28081,(depth + (1)),state);
} else {
}


var G__28082 = cljs.core.next.call(null,seq__28057_28075__$1);
var G__28083 = null;
var G__28084 = (0);
var G__28085 = (0);
seq__28057_28065 = G__28082;
chunk__28058_28066 = G__28083;
count__28059_28067 = G__28084;
i__28060_28068 = G__28085;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28061){
var vec__28062 = p__28061;
var seq__28063 = cljs.core.seq.call(null,vec__28062);
var first__28064 = cljs.core.first.call(null,seq__28063);
var seq__28063__$1 = cljs.core.next.call(null,seq__28063);
var x = first__28064;
var xs = seq__28063__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28062,seq__28063,first__28064,seq__28063__$1,x,xs,get_deps__$1){
return (function (p1__28048_SHARP_){
return clojure.set.difference.call(null,p1__28048_SHARP_,x);
});})(vec__28062,seq__28063,first__28064,seq__28063__$1,x,xs,get_deps__$1))
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
var seq__28086 = cljs.core.seq.call(null,provides);
var chunk__28087 = null;
var count__28088 = (0);
var i__28089 = (0);
while(true){
if((i__28089 < count__28088)){
var prov = cljs.core._nth.call(null,chunk__28087,i__28089);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28098_28106 = cljs.core.seq.call(null,requires);
var chunk__28099_28107 = null;
var count__28100_28108 = (0);
var i__28101_28109 = (0);
while(true){
if((i__28101_28109 < count__28100_28108)){
var req_28110 = cljs.core._nth.call(null,chunk__28099_28107,i__28101_28109);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28110,prov);


var G__28111 = seq__28098_28106;
var G__28112 = chunk__28099_28107;
var G__28113 = count__28100_28108;
var G__28114 = (i__28101_28109 + (1));
seq__28098_28106 = G__28111;
chunk__28099_28107 = G__28112;
count__28100_28108 = G__28113;
i__28101_28109 = G__28114;
continue;
} else {
var temp__5720__auto___28115 = cljs.core.seq.call(null,seq__28098_28106);
if(temp__5720__auto___28115){
var seq__28098_28116__$1 = temp__5720__auto___28115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28098_28116__$1)){
var c__4550__auto___28117 = cljs.core.chunk_first.call(null,seq__28098_28116__$1);
var G__28118 = cljs.core.chunk_rest.call(null,seq__28098_28116__$1);
var G__28119 = c__4550__auto___28117;
var G__28120 = cljs.core.count.call(null,c__4550__auto___28117);
var G__28121 = (0);
seq__28098_28106 = G__28118;
chunk__28099_28107 = G__28119;
count__28100_28108 = G__28120;
i__28101_28109 = G__28121;
continue;
} else {
var req_28122 = cljs.core.first.call(null,seq__28098_28116__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28122,prov);


var G__28123 = cljs.core.next.call(null,seq__28098_28116__$1);
var G__28124 = null;
var G__28125 = (0);
var G__28126 = (0);
seq__28098_28106 = G__28123;
chunk__28099_28107 = G__28124;
count__28100_28108 = G__28125;
i__28101_28109 = G__28126;
continue;
}
} else {
}
}
break;
}


var G__28127 = seq__28086;
var G__28128 = chunk__28087;
var G__28129 = count__28088;
var G__28130 = (i__28089 + (1));
seq__28086 = G__28127;
chunk__28087 = G__28128;
count__28088 = G__28129;
i__28089 = G__28130;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28086);
if(temp__5720__auto__){
var seq__28086__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28086__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28086__$1);
var G__28131 = cljs.core.chunk_rest.call(null,seq__28086__$1);
var G__28132 = c__4550__auto__;
var G__28133 = cljs.core.count.call(null,c__4550__auto__);
var G__28134 = (0);
seq__28086 = G__28131;
chunk__28087 = G__28132;
count__28088 = G__28133;
i__28089 = G__28134;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28086__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28102_28135 = cljs.core.seq.call(null,requires);
var chunk__28103_28136 = null;
var count__28104_28137 = (0);
var i__28105_28138 = (0);
while(true){
if((i__28105_28138 < count__28104_28137)){
var req_28139 = cljs.core._nth.call(null,chunk__28103_28136,i__28105_28138);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28139,prov);


var G__28140 = seq__28102_28135;
var G__28141 = chunk__28103_28136;
var G__28142 = count__28104_28137;
var G__28143 = (i__28105_28138 + (1));
seq__28102_28135 = G__28140;
chunk__28103_28136 = G__28141;
count__28104_28137 = G__28142;
i__28105_28138 = G__28143;
continue;
} else {
var temp__5720__auto___28144__$1 = cljs.core.seq.call(null,seq__28102_28135);
if(temp__5720__auto___28144__$1){
var seq__28102_28145__$1 = temp__5720__auto___28144__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28102_28145__$1)){
var c__4550__auto___28146 = cljs.core.chunk_first.call(null,seq__28102_28145__$1);
var G__28147 = cljs.core.chunk_rest.call(null,seq__28102_28145__$1);
var G__28148 = c__4550__auto___28146;
var G__28149 = cljs.core.count.call(null,c__4550__auto___28146);
var G__28150 = (0);
seq__28102_28135 = G__28147;
chunk__28103_28136 = G__28148;
count__28104_28137 = G__28149;
i__28105_28138 = G__28150;
continue;
} else {
var req_28151 = cljs.core.first.call(null,seq__28102_28145__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28151,prov);


var G__28152 = cljs.core.next.call(null,seq__28102_28145__$1);
var G__28153 = null;
var G__28154 = (0);
var G__28155 = (0);
seq__28102_28135 = G__28152;
chunk__28103_28136 = G__28153;
count__28104_28137 = G__28154;
i__28105_28138 = G__28155;
continue;
}
} else {
}
}
break;
}


var G__28156 = cljs.core.next.call(null,seq__28086__$1);
var G__28157 = null;
var G__28158 = (0);
var G__28159 = (0);
seq__28086 = G__28156;
chunk__28087 = G__28157;
count__28088 = G__28158;
i__28089 = G__28159;
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
var seq__28160_28164 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28161_28165 = null;
var count__28162_28166 = (0);
var i__28163_28167 = (0);
while(true){
if((i__28163_28167 < count__28162_28166)){
var ns_28168 = cljs.core._nth.call(null,chunk__28161_28165,i__28163_28167);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28168);


var G__28169 = seq__28160_28164;
var G__28170 = chunk__28161_28165;
var G__28171 = count__28162_28166;
var G__28172 = (i__28163_28167 + (1));
seq__28160_28164 = G__28169;
chunk__28161_28165 = G__28170;
count__28162_28166 = G__28171;
i__28163_28167 = G__28172;
continue;
} else {
var temp__5720__auto___28173 = cljs.core.seq.call(null,seq__28160_28164);
if(temp__5720__auto___28173){
var seq__28160_28174__$1 = temp__5720__auto___28173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28160_28174__$1)){
var c__4550__auto___28175 = cljs.core.chunk_first.call(null,seq__28160_28174__$1);
var G__28176 = cljs.core.chunk_rest.call(null,seq__28160_28174__$1);
var G__28177 = c__4550__auto___28175;
var G__28178 = cljs.core.count.call(null,c__4550__auto___28175);
var G__28179 = (0);
seq__28160_28164 = G__28176;
chunk__28161_28165 = G__28177;
count__28162_28166 = G__28178;
i__28163_28167 = G__28179;
continue;
} else {
var ns_28180 = cljs.core.first.call(null,seq__28160_28174__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28180);


var G__28181 = cljs.core.next.call(null,seq__28160_28174__$1);
var G__28182 = null;
var G__28183 = (0);
var G__28184 = (0);
seq__28160_28164 = G__28181;
chunk__28161_28165 = G__28182;
count__28162_28166 = G__28183;
i__28163_28167 = G__28184;
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
var G__28185__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28186__i = 0, G__28186__a = new Array(arguments.length -  0);
while (G__28186__i < G__28186__a.length) {G__28186__a[G__28186__i] = arguments[G__28186__i + 0]; ++G__28186__i;}
  args = new cljs.core.IndexedSeq(G__28186__a,0,null);
} 
return G__28185__delegate.call(this,args);};
G__28185.cljs$lang$maxFixedArity = 0;
G__28185.cljs$lang$applyTo = (function (arglist__28187){
var args = cljs.core.seq(arglist__28187);
return G__28185__delegate(args);
});
G__28185.cljs$core$IFn$_invoke$arity$variadic = G__28185__delegate;
return G__28185;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28188_SHARP_,p2__28189_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28188_SHARP_)),p2__28189_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28190_SHARP_,p2__28191_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28190_SHARP_),p2__28191_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28192 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28192.addCallback(((function (G__28192){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28192))
);

G__28192.addErrback(((function (G__28192){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28192))
);

return G__28192;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28193){if((e28193 instanceof Error)){
var e = e28193;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28193;

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
}catch (e28194){if((e28194 instanceof Error)){
var e = e28194;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28194;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28195 = cljs.core._EQ_;
var expr__28196 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28196))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28196))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28195.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28196))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28195,expr__28196){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28195,expr__28196))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28198,callback){
var map__28199 = p__28198;
var map__28199__$1 = (((((!((map__28199 == null))))?(((((map__28199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28199):map__28199);
var file_msg = map__28199__$1;
var request_url = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28199,map__28199__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28199,map__28199__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__){
return (function (state_28237){
var state_val_28238 = (state_28237[(1)]);
if((state_val_28238 === (7))){
var inst_28233 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28239_28265 = state_28237__$1;
(statearr_28239_28265[(2)] = inst_28233);

(statearr_28239_28265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (1))){
var state_28237__$1 = state_28237;
var statearr_28240_28266 = state_28237__$1;
(statearr_28240_28266[(2)] = null);

(statearr_28240_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (4))){
var inst_28203 = (state_28237[(7)]);
var inst_28203__$1 = (state_28237[(2)]);
var state_28237__$1 = (function (){var statearr_28241 = state_28237;
(statearr_28241[(7)] = inst_28203__$1);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28203__$1)){
var statearr_28242_28267 = state_28237__$1;
(statearr_28242_28267[(1)] = (5));

} else {
var statearr_28243_28268 = state_28237__$1;
(statearr_28243_28268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (15))){
var inst_28218 = (state_28237[(8)]);
var inst_28216 = (state_28237[(9)]);
var inst_28220 = inst_28218.call(null,inst_28216);
var state_28237__$1 = state_28237;
var statearr_28244_28269 = state_28237__$1;
(statearr_28244_28269[(2)] = inst_28220);

(statearr_28244_28269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (13))){
var inst_28227 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28245_28270 = state_28237__$1;
(statearr_28245_28270[(2)] = inst_28227);

(statearr_28245_28270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (6))){
var state_28237__$1 = state_28237;
var statearr_28246_28271 = state_28237__$1;
(statearr_28246_28271[(2)] = null);

(statearr_28246_28271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (17))){
var inst_28224 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
var statearr_28247_28272 = state_28237__$1;
(statearr_28247_28272[(2)] = inst_28224);

(statearr_28247_28272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (3))){
var inst_28235 = (state_28237[(2)]);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28237__$1,inst_28235);
} else {
if((state_val_28238 === (12))){
var state_28237__$1 = state_28237;
var statearr_28248_28273 = state_28237__$1;
(statearr_28248_28273[(2)] = null);

(statearr_28248_28273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (2))){
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28238 === (11))){
var inst_28208 = (state_28237[(10)]);
var inst_28214 = figwheel.client.file_reloading.blocking_load.call(null,inst_28208);
var state_28237__$1 = state_28237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28237__$1,(14),inst_28214);
} else {
if((state_val_28238 === (9))){
var inst_28208 = (state_28237[(10)]);
var state_28237__$1 = state_28237;
if(cljs.core.truth_(inst_28208)){
var statearr_28249_28274 = state_28237__$1;
(statearr_28249_28274[(1)] = (11));

} else {
var statearr_28250_28275 = state_28237__$1;
(statearr_28250_28275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (5))){
var inst_28209 = (state_28237[(11)]);
var inst_28203 = (state_28237[(7)]);
var inst_28208 = cljs.core.nth.call(null,inst_28203,(0),null);
var inst_28209__$1 = cljs.core.nth.call(null,inst_28203,(1),null);
var state_28237__$1 = (function (){var statearr_28251 = state_28237;
(statearr_28251[(11)] = inst_28209__$1);

(statearr_28251[(10)] = inst_28208);

return statearr_28251;
})();
if(cljs.core.truth_(inst_28209__$1)){
var statearr_28252_28276 = state_28237__$1;
(statearr_28252_28276[(1)] = (8));

} else {
var statearr_28253_28277 = state_28237__$1;
(statearr_28253_28277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (14))){
var inst_28218 = (state_28237[(8)]);
var inst_28208 = (state_28237[(10)]);
var inst_28216 = (state_28237[(2)]);
var inst_28217 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28218__$1 = cljs.core.get.call(null,inst_28217,inst_28208);
var state_28237__$1 = (function (){var statearr_28254 = state_28237;
(statearr_28254[(8)] = inst_28218__$1);

(statearr_28254[(9)] = inst_28216);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28218__$1)){
var statearr_28255_28278 = state_28237__$1;
(statearr_28255_28278[(1)] = (15));

} else {
var statearr_28256_28279 = state_28237__$1;
(statearr_28256_28279[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (16))){
var inst_28216 = (state_28237[(9)]);
var inst_28222 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28216);
var state_28237__$1 = state_28237;
var statearr_28257_28280 = state_28237__$1;
(statearr_28257_28280[(2)] = inst_28222);

(statearr_28257_28280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (10))){
var inst_28229 = (state_28237[(2)]);
var state_28237__$1 = (function (){var statearr_28258 = state_28237;
(statearr_28258[(12)] = inst_28229);

return statearr_28258;
})();
var statearr_28259_28281 = state_28237__$1;
(statearr_28259_28281[(2)] = null);

(statearr_28259_28281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28238 === (8))){
var inst_28209 = (state_28237[(11)]);
var inst_28211 = eval(inst_28209);
var state_28237__$1 = state_28237;
var statearr_28260_28282 = state_28237__$1;
(statearr_28260_28282[(2)] = inst_28211);

(statearr_28260_28282[(1)] = (10));


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
});})(c__25909__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25815__auto__ = null;
var figwheel$client$file_reloading$state_machine__25815__auto____0 = (function (){
var statearr_28261 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28261[(0)] = figwheel$client$file_reloading$state_machine__25815__auto__);

(statearr_28261[(1)] = (1));

return statearr_28261;
});
var figwheel$client$file_reloading$state_machine__25815__auto____1 = (function (state_28237){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_28237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e28262){if((e28262 instanceof Object)){
var ex__25818__auto__ = e28262;
var statearr_28263_28283 = state_28237;
(statearr_28263_28283[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28284 = state_28237;
state_28237 = G__28284;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25815__auto__ = function(state_28237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25815__auto____1.call(this,state_28237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25815__auto____0;
figwheel$client$file_reloading$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25815__auto____1;
return figwheel$client$file_reloading$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__))
})();
var state__25911__auto__ = (function (){var statearr_28264 = f__25910__auto__.call(null);
(statearr_28264[(6)] = c__25909__auto__);

return statearr_28264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__))
);

return c__25909__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28286 = arguments.length;
switch (G__28286) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28288,callback){
var map__28289 = p__28288;
var map__28289__$1 = (((((!((map__28289 == null))))?(((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var file_msg = map__28289__$1;
var namespace = cljs.core.get.call(null,map__28289__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28289,map__28289__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28289,map__28289__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28291){
var map__28292 = p__28291;
var map__28292__$1 = (((((!((map__28292 == null))))?(((((map__28292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28292):map__28292);
var file_msg = map__28292__$1;
var namespace = cljs.core.get.call(null,map__28292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28294){
var map__28295 = p__28294;
var map__28295__$1 = (((((!((map__28295 == null))))?(((((map__28295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28295):map__28295);
var file_msg = map__28295__$1;
var namespace = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28297,callback){
var map__28298 = p__28297;
var map__28298__$1 = (((((!((map__28298 == null))))?(((((map__28298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);
var file_msg = map__28298__$1;
var request_url = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25909__auto___28348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___28348,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___28348,out){
return (function (state_28333){
var state_val_28334 = (state_28333[(1)]);
if((state_val_28334 === (1))){
var inst_28307 = cljs.core.seq.call(null,files);
var inst_28308 = cljs.core.first.call(null,inst_28307);
var inst_28309 = cljs.core.next.call(null,inst_28307);
var inst_28310 = files;
var state_28333__$1 = (function (){var statearr_28335 = state_28333;
(statearr_28335[(7)] = inst_28310);

(statearr_28335[(8)] = inst_28309);

(statearr_28335[(9)] = inst_28308);

return statearr_28335;
})();
var statearr_28336_28349 = state_28333__$1;
(statearr_28336_28349[(2)] = null);

(statearr_28336_28349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (2))){
var inst_28316 = (state_28333[(10)]);
var inst_28310 = (state_28333[(7)]);
var inst_28315 = cljs.core.seq.call(null,inst_28310);
var inst_28316__$1 = cljs.core.first.call(null,inst_28315);
var inst_28317 = cljs.core.next.call(null,inst_28315);
var inst_28318 = (inst_28316__$1 == null);
var inst_28319 = cljs.core.not.call(null,inst_28318);
var state_28333__$1 = (function (){var statearr_28337 = state_28333;
(statearr_28337[(11)] = inst_28317);

(statearr_28337[(10)] = inst_28316__$1);

return statearr_28337;
})();
if(inst_28319){
var statearr_28338_28350 = state_28333__$1;
(statearr_28338_28350[(1)] = (4));

} else {
var statearr_28339_28351 = state_28333__$1;
(statearr_28339_28351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (3))){
var inst_28331 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28333__$1,inst_28331);
} else {
if((state_val_28334 === (4))){
var inst_28316 = (state_28333[(10)]);
var inst_28321 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28316);
var state_28333__$1 = state_28333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28333__$1,(7),inst_28321);
} else {
if((state_val_28334 === (5))){
var inst_28327 = cljs.core.async.close_BANG_.call(null,out);
var state_28333__$1 = state_28333;
var statearr_28340_28352 = state_28333__$1;
(statearr_28340_28352[(2)] = inst_28327);

(statearr_28340_28352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (6))){
var inst_28329 = (state_28333[(2)]);
var state_28333__$1 = state_28333;
var statearr_28341_28353 = state_28333__$1;
(statearr_28341_28353[(2)] = inst_28329);

(statearr_28341_28353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28334 === (7))){
var inst_28317 = (state_28333[(11)]);
var inst_28323 = (state_28333[(2)]);
var inst_28324 = cljs.core.async.put_BANG_.call(null,out,inst_28323);
var inst_28310 = inst_28317;
var state_28333__$1 = (function (){var statearr_28342 = state_28333;
(statearr_28342[(12)] = inst_28324);

(statearr_28342[(7)] = inst_28310);

return statearr_28342;
})();
var statearr_28343_28354 = state_28333__$1;
(statearr_28343_28354[(2)] = null);

(statearr_28343_28354[(1)] = (2));


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
});})(c__25909__auto___28348,out))
;
return ((function (switch__25814__auto__,c__25909__auto___28348,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____0 = (function (){
var statearr_28344 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28344[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__);

(statearr_28344[(1)] = (1));

return statearr_28344;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____1 = (function (state_28333){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_28333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e28345){if((e28345 instanceof Object)){
var ex__25818__auto__ = e28345;
var statearr_28346_28355 = state_28333;
(statearr_28346_28355[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28356 = state_28333;
state_28333 = G__28356;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__ = function(state_28333){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____1.call(this,state_28333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___28348,out))
})();
var state__25911__auto__ = (function (){var statearr_28347 = f__25910__auto__.call(null);
(statearr_28347[(6)] = c__25909__auto___28348);

return statearr_28347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___28348,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28357,opts){
var map__28358 = p__28357;
var map__28358__$1 = (((((!((map__28358 == null))))?(((((map__28358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28358):map__28358);
var eval_body = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28360){var e = e28360;
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
return (function (p1__28361_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28361_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28362){
var vec__28363 = p__28362;
var k = cljs.core.nth.call(null,vec__28363,(0),null);
var v = cljs.core.nth.call(null,vec__28363,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28366){
var vec__28367 = p__28366;
var k = cljs.core.nth.call(null,vec__28367,(0),null);
var v = cljs.core.nth.call(null,vec__28367,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28373,p__28374){
var map__28375 = p__28373;
var map__28375__$1 = (((((!((map__28375 == null))))?(((((map__28375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28375):map__28375);
var opts = map__28375__$1;
var before_jsload = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28376 = p__28374;
var map__28376__$1 = (((((!((map__28376 == null))))?(((((map__28376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var msg = map__28376__$1;
var files = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28530){
var state_val_28531 = (state_28530[(1)]);
if((state_val_28531 === (7))){
var inst_28391 = (state_28530[(7)]);
var inst_28390 = (state_28530[(8)]);
var inst_28392 = (state_28530[(9)]);
var inst_28393 = (state_28530[(10)]);
var inst_28398 = cljs.core._nth.call(null,inst_28391,inst_28393);
var inst_28399 = figwheel.client.file_reloading.eval_body.call(null,inst_28398,opts);
var inst_28400 = (inst_28393 + (1));
var tmp28532 = inst_28391;
var tmp28533 = inst_28390;
var tmp28534 = inst_28392;
var inst_28390__$1 = tmp28533;
var inst_28391__$1 = tmp28532;
var inst_28392__$1 = tmp28534;
var inst_28393__$1 = inst_28400;
var state_28530__$1 = (function (){var statearr_28535 = state_28530;
(statearr_28535[(11)] = inst_28399);

(statearr_28535[(7)] = inst_28391__$1);

(statearr_28535[(8)] = inst_28390__$1);

(statearr_28535[(9)] = inst_28392__$1);

(statearr_28535[(10)] = inst_28393__$1);

return statearr_28535;
})();
var statearr_28536_28619 = state_28530__$1;
(statearr_28536_28619[(2)] = null);

(statearr_28536_28619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (20))){
var inst_28433 = (state_28530[(12)]);
var inst_28441 = figwheel.client.file_reloading.sort_files.call(null,inst_28433);
var state_28530__$1 = state_28530;
var statearr_28537_28620 = state_28530__$1;
(statearr_28537_28620[(2)] = inst_28441);

(statearr_28537_28620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (27))){
var state_28530__$1 = state_28530;
var statearr_28538_28621 = state_28530__$1;
(statearr_28538_28621[(2)] = null);

(statearr_28538_28621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (1))){
var inst_28382 = (state_28530[(13)]);
var inst_28379 = before_jsload.call(null,files);
var inst_28380 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28381 = (function (){return ((function (inst_28382,inst_28379,inst_28380,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28370_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28370_SHARP_);
});
;})(inst_28382,inst_28379,inst_28380,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28382__$1 = cljs.core.filter.call(null,inst_28381,files);
var inst_28383 = cljs.core.not_empty.call(null,inst_28382__$1);
var state_28530__$1 = (function (){var statearr_28539 = state_28530;
(statearr_28539[(14)] = inst_28380);

(statearr_28539[(13)] = inst_28382__$1);

(statearr_28539[(15)] = inst_28379);

return statearr_28539;
})();
if(cljs.core.truth_(inst_28383)){
var statearr_28540_28622 = state_28530__$1;
(statearr_28540_28622[(1)] = (2));

} else {
var statearr_28541_28623 = state_28530__$1;
(statearr_28541_28623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (24))){
var state_28530__$1 = state_28530;
var statearr_28542_28624 = state_28530__$1;
(statearr_28542_28624[(2)] = null);

(statearr_28542_28624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (39))){
var inst_28483 = (state_28530[(16)]);
var state_28530__$1 = state_28530;
var statearr_28543_28625 = state_28530__$1;
(statearr_28543_28625[(2)] = inst_28483);

(statearr_28543_28625[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (46))){
var inst_28525 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28544_28626 = state_28530__$1;
(statearr_28544_28626[(2)] = inst_28525);

(statearr_28544_28626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (4))){
var inst_28427 = (state_28530[(2)]);
var inst_28428 = cljs.core.List.EMPTY;
var inst_28429 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28428);
var inst_28430 = (function (){return ((function (inst_28427,inst_28428,inst_28429,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28371_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28371_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28371_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28371_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28427,inst_28428,inst_28429,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28431 = cljs.core.filter.call(null,inst_28430,files);
var inst_28432 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28433 = cljs.core.concat.call(null,inst_28431,inst_28432);
var state_28530__$1 = (function (){var statearr_28545 = state_28530;
(statearr_28545[(12)] = inst_28433);

(statearr_28545[(17)] = inst_28429);

(statearr_28545[(18)] = inst_28427);

return statearr_28545;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28546_28627 = state_28530__$1;
(statearr_28546_28627[(1)] = (16));

} else {
var statearr_28547_28628 = state_28530__$1;
(statearr_28547_28628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (15))){
var inst_28417 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28548_28629 = state_28530__$1;
(statearr_28548_28629[(2)] = inst_28417);

(statearr_28548_28629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (21))){
var inst_28443 = (state_28530[(19)]);
var inst_28443__$1 = (state_28530[(2)]);
var inst_28444 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28443__$1);
var state_28530__$1 = (function (){var statearr_28549 = state_28530;
(statearr_28549[(19)] = inst_28443__$1);

return statearr_28549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28530__$1,(22),inst_28444);
} else {
if((state_val_28531 === (31))){
var inst_28528 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28530__$1,inst_28528);
} else {
if((state_val_28531 === (32))){
var inst_28483 = (state_28530[(16)]);
var inst_28488 = inst_28483.cljs$lang$protocol_mask$partition0$;
var inst_28489 = (inst_28488 & (64));
var inst_28490 = inst_28483.cljs$core$ISeq$;
var inst_28491 = (cljs.core.PROTOCOL_SENTINEL === inst_28490);
var inst_28492 = ((inst_28489) || (inst_28491));
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28492)){
var statearr_28550_28630 = state_28530__$1;
(statearr_28550_28630[(1)] = (35));

} else {
var statearr_28551_28631 = state_28530__$1;
(statearr_28551_28631[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (40))){
var inst_28505 = (state_28530[(20)]);
var inst_28504 = (state_28530[(2)]);
var inst_28505__$1 = cljs.core.get.call(null,inst_28504,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28506 = cljs.core.get.call(null,inst_28504,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28507 = cljs.core.not_empty.call(null,inst_28505__$1);
var state_28530__$1 = (function (){var statearr_28552 = state_28530;
(statearr_28552[(20)] = inst_28505__$1);

(statearr_28552[(21)] = inst_28506);

return statearr_28552;
})();
if(cljs.core.truth_(inst_28507)){
var statearr_28553_28632 = state_28530__$1;
(statearr_28553_28632[(1)] = (41));

} else {
var statearr_28554_28633 = state_28530__$1;
(statearr_28554_28633[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (33))){
var state_28530__$1 = state_28530;
var statearr_28555_28634 = state_28530__$1;
(statearr_28555_28634[(2)] = false);

(statearr_28555_28634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (13))){
var inst_28403 = (state_28530[(22)]);
var inst_28407 = cljs.core.chunk_first.call(null,inst_28403);
var inst_28408 = cljs.core.chunk_rest.call(null,inst_28403);
var inst_28409 = cljs.core.count.call(null,inst_28407);
var inst_28390 = inst_28408;
var inst_28391 = inst_28407;
var inst_28392 = inst_28409;
var inst_28393 = (0);
var state_28530__$1 = (function (){var statearr_28556 = state_28530;
(statearr_28556[(7)] = inst_28391);

(statearr_28556[(8)] = inst_28390);

(statearr_28556[(9)] = inst_28392);

(statearr_28556[(10)] = inst_28393);

return statearr_28556;
})();
var statearr_28557_28635 = state_28530__$1;
(statearr_28557_28635[(2)] = null);

(statearr_28557_28635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (22))){
var inst_28451 = (state_28530[(23)]);
var inst_28446 = (state_28530[(24)]);
var inst_28443 = (state_28530[(19)]);
var inst_28447 = (state_28530[(25)]);
var inst_28446__$1 = (state_28530[(2)]);
var inst_28447__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28446__$1);
var inst_28448 = (function (){var all_files = inst_28443;
var res_SINGLEQUOTE_ = inst_28446__$1;
var res = inst_28447__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28451,inst_28446,inst_28443,inst_28447,inst_28446__$1,inst_28447__$1,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28372_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28372_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28451,inst_28446,inst_28443,inst_28447,inst_28446__$1,inst_28447__$1,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28449 = cljs.core.filter.call(null,inst_28448,inst_28446__$1);
var inst_28450 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28451__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28450);
var inst_28452 = cljs.core.not_empty.call(null,inst_28451__$1);
var state_28530__$1 = (function (){var statearr_28558 = state_28530;
(statearr_28558[(23)] = inst_28451__$1);

(statearr_28558[(24)] = inst_28446__$1);

(statearr_28558[(25)] = inst_28447__$1);

(statearr_28558[(26)] = inst_28449);

return statearr_28558;
})();
if(cljs.core.truth_(inst_28452)){
var statearr_28559_28636 = state_28530__$1;
(statearr_28559_28636[(1)] = (23));

} else {
var statearr_28560_28637 = state_28530__$1;
(statearr_28560_28637[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (36))){
var state_28530__$1 = state_28530;
var statearr_28561_28638 = state_28530__$1;
(statearr_28561_28638[(2)] = false);

(statearr_28561_28638[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (41))){
var inst_28505 = (state_28530[(20)]);
var inst_28509 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28510 = cljs.core.map.call(null,inst_28509,inst_28505);
var inst_28511 = cljs.core.pr_str.call(null,inst_28510);
var inst_28512 = ["figwheel-no-load meta-data: ",inst_28511].join('');
var inst_28513 = figwheel.client.utils.log.call(null,inst_28512);
var state_28530__$1 = state_28530;
var statearr_28562_28639 = state_28530__$1;
(statearr_28562_28639[(2)] = inst_28513);

(statearr_28562_28639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (43))){
var inst_28506 = (state_28530[(21)]);
var inst_28516 = (state_28530[(2)]);
var inst_28517 = cljs.core.not_empty.call(null,inst_28506);
var state_28530__$1 = (function (){var statearr_28563 = state_28530;
(statearr_28563[(27)] = inst_28516);

return statearr_28563;
})();
if(cljs.core.truth_(inst_28517)){
var statearr_28564_28640 = state_28530__$1;
(statearr_28564_28640[(1)] = (44));

} else {
var statearr_28565_28641 = state_28530__$1;
(statearr_28565_28641[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (29))){
var inst_28483 = (state_28530[(16)]);
var inst_28451 = (state_28530[(23)]);
var inst_28446 = (state_28530[(24)]);
var inst_28443 = (state_28530[(19)]);
var inst_28447 = (state_28530[(25)]);
var inst_28449 = (state_28530[(26)]);
var inst_28479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28482 = (function (){var all_files = inst_28443;
var res_SINGLEQUOTE_ = inst_28446;
var res = inst_28447;
var files_not_loaded = inst_28449;
var dependencies_that_loaded = inst_28451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28483,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28479,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28481){
var map__28566 = p__28481;
var map__28566__$1 = (((((!((map__28566 == null))))?(((((map__28566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28566):map__28566);
var namespace = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28483,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28479,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28483__$1 = cljs.core.group_by.call(null,inst_28482,inst_28449);
var inst_28485 = (inst_28483__$1 == null);
var inst_28486 = cljs.core.not.call(null,inst_28485);
var state_28530__$1 = (function (){var statearr_28568 = state_28530;
(statearr_28568[(16)] = inst_28483__$1);

(statearr_28568[(28)] = inst_28479);

return statearr_28568;
})();
if(inst_28486){
var statearr_28569_28642 = state_28530__$1;
(statearr_28569_28642[(1)] = (32));

} else {
var statearr_28570_28643 = state_28530__$1;
(statearr_28570_28643[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (44))){
var inst_28506 = (state_28530[(21)]);
var inst_28519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28506);
var inst_28520 = cljs.core.pr_str.call(null,inst_28519);
var inst_28521 = ["not required: ",inst_28520].join('');
var inst_28522 = figwheel.client.utils.log.call(null,inst_28521);
var state_28530__$1 = state_28530;
var statearr_28571_28644 = state_28530__$1;
(statearr_28571_28644[(2)] = inst_28522);

(statearr_28571_28644[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (6))){
var inst_28424 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28572_28645 = state_28530__$1;
(statearr_28572_28645[(2)] = inst_28424);

(statearr_28572_28645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (28))){
var inst_28449 = (state_28530[(26)]);
var inst_28476 = (state_28530[(2)]);
var inst_28477 = cljs.core.not_empty.call(null,inst_28449);
var state_28530__$1 = (function (){var statearr_28573 = state_28530;
(statearr_28573[(29)] = inst_28476);

return statearr_28573;
})();
if(cljs.core.truth_(inst_28477)){
var statearr_28574_28646 = state_28530__$1;
(statearr_28574_28646[(1)] = (29));

} else {
var statearr_28575_28647 = state_28530__$1;
(statearr_28575_28647[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (25))){
var inst_28447 = (state_28530[(25)]);
var inst_28463 = (state_28530[(2)]);
var inst_28464 = cljs.core.not_empty.call(null,inst_28447);
var state_28530__$1 = (function (){var statearr_28576 = state_28530;
(statearr_28576[(30)] = inst_28463);

return statearr_28576;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28577_28648 = state_28530__$1;
(statearr_28577_28648[(1)] = (26));

} else {
var statearr_28578_28649 = state_28530__$1;
(statearr_28578_28649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (34))){
var inst_28499 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28499)){
var statearr_28579_28650 = state_28530__$1;
(statearr_28579_28650[(1)] = (38));

} else {
var statearr_28580_28651 = state_28530__$1;
(statearr_28580_28651[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (17))){
var state_28530__$1 = state_28530;
var statearr_28581_28652 = state_28530__$1;
(statearr_28581_28652[(2)] = recompile_dependents);

(statearr_28581_28652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (3))){
var state_28530__$1 = state_28530;
var statearr_28582_28653 = state_28530__$1;
(statearr_28582_28653[(2)] = null);

(statearr_28582_28653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (12))){
var inst_28420 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28583_28654 = state_28530__$1;
(statearr_28583_28654[(2)] = inst_28420);

(statearr_28583_28654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (2))){
var inst_28382 = (state_28530[(13)]);
var inst_28389 = cljs.core.seq.call(null,inst_28382);
var inst_28390 = inst_28389;
var inst_28391 = null;
var inst_28392 = (0);
var inst_28393 = (0);
var state_28530__$1 = (function (){var statearr_28584 = state_28530;
(statearr_28584[(7)] = inst_28391);

(statearr_28584[(8)] = inst_28390);

(statearr_28584[(9)] = inst_28392);

(statearr_28584[(10)] = inst_28393);

return statearr_28584;
})();
var statearr_28585_28655 = state_28530__$1;
(statearr_28585_28655[(2)] = null);

(statearr_28585_28655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (23))){
var inst_28451 = (state_28530[(23)]);
var inst_28446 = (state_28530[(24)]);
var inst_28443 = (state_28530[(19)]);
var inst_28447 = (state_28530[(25)]);
var inst_28449 = (state_28530[(26)]);
var inst_28454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28456 = (function (){var all_files = inst_28443;
var res_SINGLEQUOTE_ = inst_28446;
var res = inst_28447;
var files_not_loaded = inst_28449;
var dependencies_that_loaded = inst_28451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28454,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28455){
var map__28586 = p__28455;
var map__28586__$1 = (((((!((map__28586 == null))))?(((((map__28586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);
var request_url = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28454,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28457 = cljs.core.reverse.call(null,inst_28451);
var inst_28458 = cljs.core.map.call(null,inst_28456,inst_28457);
var inst_28459 = cljs.core.pr_str.call(null,inst_28458);
var inst_28460 = figwheel.client.utils.log.call(null,inst_28459);
var state_28530__$1 = (function (){var statearr_28588 = state_28530;
(statearr_28588[(31)] = inst_28454);

return statearr_28588;
})();
var statearr_28589_28656 = state_28530__$1;
(statearr_28589_28656[(2)] = inst_28460);

(statearr_28589_28656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (35))){
var state_28530__$1 = state_28530;
var statearr_28590_28657 = state_28530__$1;
(statearr_28590_28657[(2)] = true);

(statearr_28590_28657[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (19))){
var inst_28433 = (state_28530[(12)]);
var inst_28439 = figwheel.client.file_reloading.expand_files.call(null,inst_28433);
var state_28530__$1 = state_28530;
var statearr_28591_28658 = state_28530__$1;
(statearr_28591_28658[(2)] = inst_28439);

(statearr_28591_28658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (11))){
var state_28530__$1 = state_28530;
var statearr_28592_28659 = state_28530__$1;
(statearr_28592_28659[(2)] = null);

(statearr_28592_28659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (9))){
var inst_28422 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28593_28660 = state_28530__$1;
(statearr_28593_28660[(2)] = inst_28422);

(statearr_28593_28660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (5))){
var inst_28392 = (state_28530[(9)]);
var inst_28393 = (state_28530[(10)]);
var inst_28395 = (inst_28393 < inst_28392);
var inst_28396 = inst_28395;
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28396)){
var statearr_28594_28661 = state_28530__$1;
(statearr_28594_28661[(1)] = (7));

} else {
var statearr_28595_28662 = state_28530__$1;
(statearr_28595_28662[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (14))){
var inst_28403 = (state_28530[(22)]);
var inst_28412 = cljs.core.first.call(null,inst_28403);
var inst_28413 = figwheel.client.file_reloading.eval_body.call(null,inst_28412,opts);
var inst_28414 = cljs.core.next.call(null,inst_28403);
var inst_28390 = inst_28414;
var inst_28391 = null;
var inst_28392 = (0);
var inst_28393 = (0);
var state_28530__$1 = (function (){var statearr_28596 = state_28530;
(statearr_28596[(7)] = inst_28391);

(statearr_28596[(8)] = inst_28390);

(statearr_28596[(9)] = inst_28392);

(statearr_28596[(32)] = inst_28413);

(statearr_28596[(10)] = inst_28393);

return statearr_28596;
})();
var statearr_28597_28663 = state_28530__$1;
(statearr_28597_28663[(2)] = null);

(statearr_28597_28663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (45))){
var state_28530__$1 = state_28530;
var statearr_28598_28664 = state_28530__$1;
(statearr_28598_28664[(2)] = null);

(statearr_28598_28664[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (26))){
var inst_28451 = (state_28530[(23)]);
var inst_28446 = (state_28530[(24)]);
var inst_28443 = (state_28530[(19)]);
var inst_28447 = (state_28530[(25)]);
var inst_28449 = (state_28530[(26)]);
var inst_28466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28468 = (function (){var all_files = inst_28443;
var res_SINGLEQUOTE_ = inst_28446;
var res = inst_28447;
var files_not_loaded = inst_28449;
var dependencies_that_loaded = inst_28451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28466,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28467){
var map__28599 = p__28467;
var map__28599__$1 = (((((!((map__28599 == null))))?(((((map__28599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599):map__28599);
var namespace = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28466,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28469 = cljs.core.map.call(null,inst_28468,inst_28447);
var inst_28470 = cljs.core.pr_str.call(null,inst_28469);
var inst_28471 = figwheel.client.utils.log.call(null,inst_28470);
var inst_28472 = (function (){var all_files = inst_28443;
var res_SINGLEQUOTE_ = inst_28446;
var res = inst_28447;
var files_not_loaded = inst_28449;
var dependencies_that_loaded = inst_28451;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28466,inst_28468,inst_28469,inst_28470,inst_28471,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28451,inst_28446,inst_28443,inst_28447,inst_28449,inst_28466,inst_28468,inst_28469,inst_28470,inst_28471,state_val_28531,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28473 = setTimeout(inst_28472,(10));
var state_28530__$1 = (function (){var statearr_28601 = state_28530;
(statearr_28601[(33)] = inst_28471);

(statearr_28601[(34)] = inst_28466);

return statearr_28601;
})();
var statearr_28602_28665 = state_28530__$1;
(statearr_28602_28665[(2)] = inst_28473);

(statearr_28602_28665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (16))){
var state_28530__$1 = state_28530;
var statearr_28603_28666 = state_28530__$1;
(statearr_28603_28666[(2)] = reload_dependents);

(statearr_28603_28666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (38))){
var inst_28483 = (state_28530[(16)]);
var inst_28501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28483);
var state_28530__$1 = state_28530;
var statearr_28604_28667 = state_28530__$1;
(statearr_28604_28667[(2)] = inst_28501);

(statearr_28604_28667[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (30))){
var state_28530__$1 = state_28530;
var statearr_28605_28668 = state_28530__$1;
(statearr_28605_28668[(2)] = null);

(statearr_28605_28668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (10))){
var inst_28403 = (state_28530[(22)]);
var inst_28405 = cljs.core.chunked_seq_QMARK_.call(null,inst_28403);
var state_28530__$1 = state_28530;
if(inst_28405){
var statearr_28606_28669 = state_28530__$1;
(statearr_28606_28669[(1)] = (13));

} else {
var statearr_28607_28670 = state_28530__$1;
(statearr_28607_28670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (18))){
var inst_28437 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
if(cljs.core.truth_(inst_28437)){
var statearr_28608_28671 = state_28530__$1;
(statearr_28608_28671[(1)] = (19));

} else {
var statearr_28609_28672 = state_28530__$1;
(statearr_28609_28672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (42))){
var state_28530__$1 = state_28530;
var statearr_28610_28673 = state_28530__$1;
(statearr_28610_28673[(2)] = null);

(statearr_28610_28673[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (37))){
var inst_28496 = (state_28530[(2)]);
var state_28530__$1 = state_28530;
var statearr_28611_28674 = state_28530__$1;
(statearr_28611_28674[(2)] = inst_28496);

(statearr_28611_28674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28531 === (8))){
var inst_28403 = (state_28530[(22)]);
var inst_28390 = (state_28530[(8)]);
var inst_28403__$1 = cljs.core.seq.call(null,inst_28390);
var state_28530__$1 = (function (){var statearr_28612 = state_28530;
(statearr_28612[(22)] = inst_28403__$1);

return statearr_28612;
})();
if(inst_28403__$1){
var statearr_28613_28675 = state_28530__$1;
(statearr_28613_28675[(1)] = (10));

} else {
var statearr_28614_28676 = state_28530__$1;
(statearr_28614_28676[(1)] = (11));

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
});})(c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25814__auto__,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____0 = (function (){
var statearr_28615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28615[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__);

(statearr_28615[(1)] = (1));

return statearr_28615;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____1 = (function (state_28530){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_28530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e28616){if((e28616 instanceof Object)){
var ex__25818__auto__ = e28616;
var statearr_28617_28677 = state_28530;
(statearr_28617_28677[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28678 = state_28530;
state_28530 = G__28678;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__ = function(state_28530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____1.call(this,state_28530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25911__auto__ = (function (){var statearr_28618 = f__25910__auto__.call(null);
(statearr_28618[(6)] = c__25909__auto__);

return statearr_28618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__,map__28375,map__28375__$1,opts,before_jsload,on_jsload,reload_dependents,map__28376,map__28376__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25909__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28681,link){
var map__28682 = p__28681;
var map__28682__$1 = (((((!((map__28682 == null))))?(((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);
var file = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28682,map__28682__$1,file){
return (function (p1__28679_SHARP_,p2__28680_SHARP_){
if(cljs.core._EQ_.call(null,p1__28679_SHARP_,p2__28680_SHARP_)){
return p1__28679_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28682,map__28682__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28685){
var map__28686 = p__28685;
var map__28686__$1 = (((((!((map__28686 == null))))?(((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);
var match_length = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28684_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28684_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28688_SHARP_,p2__28689_SHARP_){
return cljs.core.assoc.call(null,p1__28688_SHARP_,cljs.core.get.call(null,p2__28689_SHARP_,key),p2__28689_SHARP_);
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
var loaded_f_datas_28690 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28690);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28690);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28691,p__28692){
var map__28693 = p__28691;
var map__28693__$1 = (((((!((map__28693 == null))))?(((((map__28693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28693):map__28693);
var on_cssload = cljs.core.get.call(null,map__28693__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28694 = p__28692;
var map__28694__$1 = (((((!((map__28694 == null))))?(((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28694):map__28694);
var files_msg = map__28694__$1;
var files = cljs.core.get.call(null,map__28694__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1592614561016
