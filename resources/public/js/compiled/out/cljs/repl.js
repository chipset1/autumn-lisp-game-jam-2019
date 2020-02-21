// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29428){
var map__29429 = p__29428;
var map__29429__$1 = (((((!((map__29429 == null))))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29429):map__29429);
var m = map__29429__$1;
var n = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29431_29463 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29432_29464 = null;
var count__29433_29465 = (0);
var i__29434_29466 = (0);
while(true){
if((i__29434_29466 < count__29433_29465)){
var f_29467 = cljs.core._nth.call(null,chunk__29432_29464,i__29434_29466);
cljs.core.println.call(null,"  ",f_29467);


var G__29468 = seq__29431_29463;
var G__29469 = chunk__29432_29464;
var G__29470 = count__29433_29465;
var G__29471 = (i__29434_29466 + (1));
seq__29431_29463 = G__29468;
chunk__29432_29464 = G__29469;
count__29433_29465 = G__29470;
i__29434_29466 = G__29471;
continue;
} else {
var temp__5720__auto___29472 = cljs.core.seq.call(null,seq__29431_29463);
if(temp__5720__auto___29472){
var seq__29431_29473__$1 = temp__5720__auto___29472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29431_29473__$1)){
var c__4550__auto___29474 = cljs.core.chunk_first.call(null,seq__29431_29473__$1);
var G__29475 = cljs.core.chunk_rest.call(null,seq__29431_29473__$1);
var G__29476 = c__4550__auto___29474;
var G__29477 = cljs.core.count.call(null,c__4550__auto___29474);
var G__29478 = (0);
seq__29431_29463 = G__29475;
chunk__29432_29464 = G__29476;
count__29433_29465 = G__29477;
i__29434_29466 = G__29478;
continue;
} else {
var f_29479 = cljs.core.first.call(null,seq__29431_29473__$1);
cljs.core.println.call(null,"  ",f_29479);


var G__29480 = cljs.core.next.call(null,seq__29431_29473__$1);
var G__29481 = null;
var G__29482 = (0);
var G__29483 = (0);
seq__29431_29463 = G__29480;
chunk__29432_29464 = G__29481;
count__29433_29465 = G__29482;
i__29434_29466 = G__29483;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29484 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29484);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29484)))?cljs.core.second.call(null,arglists_29484):arglists_29484));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29435_29485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29436_29486 = null;
var count__29437_29487 = (0);
var i__29438_29488 = (0);
while(true){
if((i__29438_29488 < count__29437_29487)){
var vec__29449_29489 = cljs.core._nth.call(null,chunk__29436_29486,i__29438_29488);
var name_29490 = cljs.core.nth.call(null,vec__29449_29489,(0),null);
var map__29452_29491 = cljs.core.nth.call(null,vec__29449_29489,(1),null);
var map__29452_29492__$1 = (((((!((map__29452_29491 == null))))?(((((map__29452_29491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29452_29491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29452_29491):map__29452_29491);
var doc_29493 = cljs.core.get.call(null,map__29452_29492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29494 = cljs.core.get.call(null,map__29452_29492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29490);

cljs.core.println.call(null," ",arglists_29494);

if(cljs.core.truth_(doc_29493)){
cljs.core.println.call(null," ",doc_29493);
} else {
}


var G__29495 = seq__29435_29485;
var G__29496 = chunk__29436_29486;
var G__29497 = count__29437_29487;
var G__29498 = (i__29438_29488 + (1));
seq__29435_29485 = G__29495;
chunk__29436_29486 = G__29496;
count__29437_29487 = G__29497;
i__29438_29488 = G__29498;
continue;
} else {
var temp__5720__auto___29499 = cljs.core.seq.call(null,seq__29435_29485);
if(temp__5720__auto___29499){
var seq__29435_29500__$1 = temp__5720__auto___29499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29435_29500__$1)){
var c__4550__auto___29501 = cljs.core.chunk_first.call(null,seq__29435_29500__$1);
var G__29502 = cljs.core.chunk_rest.call(null,seq__29435_29500__$1);
var G__29503 = c__4550__auto___29501;
var G__29504 = cljs.core.count.call(null,c__4550__auto___29501);
var G__29505 = (0);
seq__29435_29485 = G__29502;
chunk__29436_29486 = G__29503;
count__29437_29487 = G__29504;
i__29438_29488 = G__29505;
continue;
} else {
var vec__29454_29506 = cljs.core.first.call(null,seq__29435_29500__$1);
var name_29507 = cljs.core.nth.call(null,vec__29454_29506,(0),null);
var map__29457_29508 = cljs.core.nth.call(null,vec__29454_29506,(1),null);
var map__29457_29509__$1 = (((((!((map__29457_29508 == null))))?(((((map__29457_29508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457_29508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457_29508):map__29457_29508);
var doc_29510 = cljs.core.get.call(null,map__29457_29509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29511 = cljs.core.get.call(null,map__29457_29509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29507);

cljs.core.println.call(null," ",arglists_29511);

if(cljs.core.truth_(doc_29510)){
cljs.core.println.call(null," ",doc_29510);
} else {
}


var G__29512 = cljs.core.next.call(null,seq__29435_29500__$1);
var G__29513 = null;
var G__29514 = (0);
var G__29515 = (0);
seq__29435_29485 = G__29512;
chunk__29436_29486 = G__29513;
count__29437_29487 = G__29514;
i__29438_29488 = G__29515;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29459 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29460 = null;
var count__29461 = (0);
var i__29462 = (0);
while(true){
if((i__29462 < count__29461)){
var role = cljs.core._nth.call(null,chunk__29460,i__29462);
var temp__5720__auto___29516__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29516__$1)){
var spec_29517 = temp__5720__auto___29516__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29517));
} else {
}


var G__29518 = seq__29459;
var G__29519 = chunk__29460;
var G__29520 = count__29461;
var G__29521 = (i__29462 + (1));
seq__29459 = G__29518;
chunk__29460 = G__29519;
count__29461 = G__29520;
i__29462 = G__29521;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29459);
if(temp__5720__auto____$1){
var seq__29459__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29459__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29459__$1);
var G__29522 = cljs.core.chunk_rest.call(null,seq__29459__$1);
var G__29523 = c__4550__auto__;
var G__29524 = cljs.core.count.call(null,c__4550__auto__);
var G__29525 = (0);
seq__29459 = G__29522;
chunk__29460 = G__29523;
count__29461 = G__29524;
i__29462 = G__29525;
continue;
} else {
var role = cljs.core.first.call(null,seq__29459__$1);
var temp__5720__auto___29526__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29526__$2)){
var spec_29527 = temp__5720__auto___29526__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29527));
} else {
}


var G__29528 = cljs.core.next.call(null,seq__29459__$1);
var G__29529 = null;
var G__29530 = (0);
var G__29531 = (0);
seq__29459 = G__29528;
chunk__29460 = G__29529;
count__29461 = G__29530;
i__29462 = G__29531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29532 = cljs.core.conj.call(null,via,t);
var G__29533 = cljs.core.ex_cause.call(null,t);
via = G__29532;
t = G__29533;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29536 = datafied_throwable;
var map__29536__$1 = (((((!((map__29536 == null))))?(((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29536):map__29536);
var via = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29537 = cljs.core.last.call(null,via);
var map__29537__$1 = (((((!((map__29537 == null))))?(((((map__29537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);
var type = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29538 = data;
var map__29538__$1 = (((((!((map__29538 == null))))?(((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29538):map__29538);
var problems = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29538__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29539 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29539__$1 = (((((!((map__29539 == null))))?(((((map__29539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var top_data = map__29539__$1;
var source = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29544 = phase;
var G__29544__$1 = (((G__29544 instanceof cljs.core.Keyword))?G__29544.fqn:null);
switch (G__29544__$1) {
case "read-source":
var map__29545 = data;
var map__29545__$1 = (((((!((map__29545 == null))))?(((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29545):map__29545);
var line = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29547 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29547__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29547,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29547);
var G__29547__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29547__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29547__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29547__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29548 = top_data;
var G__29548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29548);
var G__29548__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29548__$1);
var G__29548__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29548__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29548__$2);
var G__29548__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29548__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29548__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29548__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29548__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29549 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29549,(0),null);
var method = cljs.core.nth.call(null,vec__29549,(1),null);
var file = cljs.core.nth.call(null,vec__29549,(2),null);
var line = cljs.core.nth.call(null,vec__29549,(3),null);
var G__29552 = top_data;
var G__29552__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29552,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29552);
var G__29552__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29552__$1);
var G__29552__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29552__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29552__$2);
var G__29552__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29552__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29552__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29552__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29552__$4;
}

break;
case "execution":
var vec__29553 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29553,(0),null);
var method = cljs.core.nth.call(null,vec__29553,(1),null);
var file = cljs.core.nth.call(null,vec__29553,(2),null);
var line = cljs.core.nth.call(null,vec__29553,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29553,source__$1,method,file,line,G__29544,G__29544__$1,map__29536,map__29536__$1,via,trace,phase,map__29537,map__29537__$1,type,message,data,map__29538,map__29538__$1,problems,fn,caller,map__29539,map__29539__$1,top_data,source){
return (function (p1__29535_SHARP_){
var or__4131__auto__ = (p1__29535_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29535_SHARP_);
}
});})(vec__29553,source__$1,method,file,line,G__29544,G__29544__$1,map__29536,map__29536__$1,via,trace,phase,map__29537,map__29537__$1,type,message,data,map__29538,map__29538__$1,problems,fn,caller,map__29539,map__29539__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29556 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29556__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29556,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29556);
var G__29556__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29556__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29556__$1);
var G__29556__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29556__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29556__$2);
var G__29556__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29556__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29556__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29556__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29556__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29544__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29560){
var map__29561 = p__29560;
var map__29561__$1 = (((((!((map__29561 == null))))?(((((map__29561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);
var triage_data = map__29561__$1;
var phase = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29563 = phase;
var G__29563__$1 = (((G__29563 instanceof cljs.core.Keyword))?G__29563.fqn:null);
switch (G__29563__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29564_29573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29565_29574 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29566_29575 = true;
var _STAR_print_fn_STAR__temp_val__29567_29576 = ((function (_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29566_29575;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29567_29576;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,_STAR_print_fn_STAR__temp_val__29567_29576,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,_STAR_print_fn_STAR__temp_val__29567_29576,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29558_SHARP_){
return cljs.core.dissoc.call(null,p1__29558_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,_STAR_print_fn_STAR__temp_val__29567_29576,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29564_29573,_STAR_print_fn_STAR__orig_val__29565_29574,_STAR_print_newline_STAR__temp_val__29566_29575,_STAR_print_fn_STAR__temp_val__29567_29576,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29565_29574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29564_29573;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29568_29577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29569_29578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29570_29579 = true;
var _STAR_print_fn_STAR__temp_val__29571_29580 = ((function (_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29570_29579;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29571_29580;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,_STAR_print_fn_STAR__temp_val__29571_29580,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,_STAR_print_fn_STAR__temp_val__29571_29580,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29559_SHARP_){
return cljs.core.dissoc.call(null,p1__29559_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,_STAR_print_fn_STAR__temp_val__29571_29580,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29568_29577,_STAR_print_fn_STAR__orig_val__29569_29578,_STAR_print_newline_STAR__temp_val__29570_29579,_STAR_print_fn_STAR__temp_val__29571_29580,sb__4661__auto__,G__29563,G__29563__$1,loc,class_name,simple_class,cause_type,format,map__29561,map__29561__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29569_29578;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29568_29577;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29563__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1570822066175
