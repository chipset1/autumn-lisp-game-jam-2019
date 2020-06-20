// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29553){
var map__29554 = p__29553;
var map__29554__$1 = (((((!((map__29554 == null))))?(((((map__29554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29554):map__29554);
var m = map__29554__$1;
var n = cljs.core.get.call(null,map__29554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29556_29588 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29557_29589 = null;
var count__29558_29590 = (0);
var i__29559_29591 = (0);
while(true){
if((i__29559_29591 < count__29558_29590)){
var f_29592 = cljs.core._nth.call(null,chunk__29557_29589,i__29559_29591);
cljs.core.println.call(null,"  ",f_29592);


var G__29593 = seq__29556_29588;
var G__29594 = chunk__29557_29589;
var G__29595 = count__29558_29590;
var G__29596 = (i__29559_29591 + (1));
seq__29556_29588 = G__29593;
chunk__29557_29589 = G__29594;
count__29558_29590 = G__29595;
i__29559_29591 = G__29596;
continue;
} else {
var temp__5720__auto___29597 = cljs.core.seq.call(null,seq__29556_29588);
if(temp__5720__auto___29597){
var seq__29556_29598__$1 = temp__5720__auto___29597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29556_29598__$1)){
var c__4550__auto___29599 = cljs.core.chunk_first.call(null,seq__29556_29598__$1);
var G__29600 = cljs.core.chunk_rest.call(null,seq__29556_29598__$1);
var G__29601 = c__4550__auto___29599;
var G__29602 = cljs.core.count.call(null,c__4550__auto___29599);
var G__29603 = (0);
seq__29556_29588 = G__29600;
chunk__29557_29589 = G__29601;
count__29558_29590 = G__29602;
i__29559_29591 = G__29603;
continue;
} else {
var f_29604 = cljs.core.first.call(null,seq__29556_29598__$1);
cljs.core.println.call(null,"  ",f_29604);


var G__29605 = cljs.core.next.call(null,seq__29556_29598__$1);
var G__29606 = null;
var G__29607 = (0);
var G__29608 = (0);
seq__29556_29588 = G__29605;
chunk__29557_29589 = G__29606;
count__29558_29590 = G__29607;
i__29559_29591 = G__29608;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29609 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29609);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29609)))?cljs.core.second.call(null,arglists_29609):arglists_29609));
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
var seq__29560_29610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29561_29611 = null;
var count__29562_29612 = (0);
var i__29563_29613 = (0);
while(true){
if((i__29563_29613 < count__29562_29612)){
var vec__29574_29614 = cljs.core._nth.call(null,chunk__29561_29611,i__29563_29613);
var name_29615 = cljs.core.nth.call(null,vec__29574_29614,(0),null);
var map__29577_29616 = cljs.core.nth.call(null,vec__29574_29614,(1),null);
var map__29577_29617__$1 = (((((!((map__29577_29616 == null))))?(((((map__29577_29616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29577_29616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577_29616):map__29577_29616);
var doc_29618 = cljs.core.get.call(null,map__29577_29617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29619 = cljs.core.get.call(null,map__29577_29617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29615);

cljs.core.println.call(null," ",arglists_29619);

if(cljs.core.truth_(doc_29618)){
cljs.core.println.call(null," ",doc_29618);
} else {
}


var G__29620 = seq__29560_29610;
var G__29621 = chunk__29561_29611;
var G__29622 = count__29562_29612;
var G__29623 = (i__29563_29613 + (1));
seq__29560_29610 = G__29620;
chunk__29561_29611 = G__29621;
count__29562_29612 = G__29622;
i__29563_29613 = G__29623;
continue;
} else {
var temp__5720__auto___29624 = cljs.core.seq.call(null,seq__29560_29610);
if(temp__5720__auto___29624){
var seq__29560_29625__$1 = temp__5720__auto___29624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29560_29625__$1)){
var c__4550__auto___29626 = cljs.core.chunk_first.call(null,seq__29560_29625__$1);
var G__29627 = cljs.core.chunk_rest.call(null,seq__29560_29625__$1);
var G__29628 = c__4550__auto___29626;
var G__29629 = cljs.core.count.call(null,c__4550__auto___29626);
var G__29630 = (0);
seq__29560_29610 = G__29627;
chunk__29561_29611 = G__29628;
count__29562_29612 = G__29629;
i__29563_29613 = G__29630;
continue;
} else {
var vec__29579_29631 = cljs.core.first.call(null,seq__29560_29625__$1);
var name_29632 = cljs.core.nth.call(null,vec__29579_29631,(0),null);
var map__29582_29633 = cljs.core.nth.call(null,vec__29579_29631,(1),null);
var map__29582_29634__$1 = (((((!((map__29582_29633 == null))))?(((((map__29582_29633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29582_29633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582_29633):map__29582_29633);
var doc_29635 = cljs.core.get.call(null,map__29582_29634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29636 = cljs.core.get.call(null,map__29582_29634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29632);

cljs.core.println.call(null," ",arglists_29636);

if(cljs.core.truth_(doc_29635)){
cljs.core.println.call(null," ",doc_29635);
} else {
}


var G__29637 = cljs.core.next.call(null,seq__29560_29625__$1);
var G__29638 = null;
var G__29639 = (0);
var G__29640 = (0);
seq__29560_29610 = G__29637;
chunk__29561_29611 = G__29638;
count__29562_29612 = G__29639;
i__29563_29613 = G__29640;
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

var seq__29584 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29585 = null;
var count__29586 = (0);
var i__29587 = (0);
while(true){
if((i__29587 < count__29586)){
var role = cljs.core._nth.call(null,chunk__29585,i__29587);
var temp__5720__auto___29641__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29641__$1)){
var spec_29642 = temp__5720__auto___29641__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29642));
} else {
}


var G__29643 = seq__29584;
var G__29644 = chunk__29585;
var G__29645 = count__29586;
var G__29646 = (i__29587 + (1));
seq__29584 = G__29643;
chunk__29585 = G__29644;
count__29586 = G__29645;
i__29587 = G__29646;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29584);
if(temp__5720__auto____$1){
var seq__29584__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29584__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29584__$1);
var G__29647 = cljs.core.chunk_rest.call(null,seq__29584__$1);
var G__29648 = c__4550__auto__;
var G__29649 = cljs.core.count.call(null,c__4550__auto__);
var G__29650 = (0);
seq__29584 = G__29647;
chunk__29585 = G__29648;
count__29586 = G__29649;
i__29587 = G__29650;
continue;
} else {
var role = cljs.core.first.call(null,seq__29584__$1);
var temp__5720__auto___29651__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29651__$2)){
var spec_29652 = temp__5720__auto___29651__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29652));
} else {
}


var G__29653 = cljs.core.next.call(null,seq__29584__$1);
var G__29654 = null;
var G__29655 = (0);
var G__29656 = (0);
seq__29584 = G__29653;
chunk__29585 = G__29654;
count__29586 = G__29655;
i__29587 = G__29656;
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
var G__29657 = cljs.core.conj.call(null,via,t);
var G__29658 = cljs.core.ex_cause.call(null,t);
via = G__29657;
t = G__29658;
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
var map__29661 = datafied_throwable;
var map__29661__$1 = (((((!((map__29661 == null))))?(((((map__29661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29661):map__29661);
var via = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29661__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29662 = cljs.core.last.call(null,via);
var map__29662__$1 = (((((!((map__29662 == null))))?(((((map__29662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29662):map__29662);
var type = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29662__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29663 = data;
var map__29663__$1 = (((((!((map__29663 == null))))?(((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var problems = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29664 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29664__$1 = (((((!((map__29664 == null))))?(((((map__29664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);
var top_data = map__29664__$1;
var source = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29669 = phase;
var G__29669__$1 = (((G__29669 instanceof cljs.core.Keyword))?G__29669.fqn:null);
switch (G__29669__$1) {
case "read-source":
var map__29670 = data;
var map__29670__$1 = (((((!((map__29670 == null))))?(((((map__29670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var line = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29672 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29672__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29672,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29672);
var G__29672__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29672__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29672__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29672__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29672__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29673 = top_data;
var G__29673__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29673,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29673);
var G__29673__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29673__$1);
var G__29673__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29673__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29673__$2);
var G__29673__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29673__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29673__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29673__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29673__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29674 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29674,(0),null);
var method = cljs.core.nth.call(null,vec__29674,(1),null);
var file = cljs.core.nth.call(null,vec__29674,(2),null);
var line = cljs.core.nth.call(null,vec__29674,(3),null);
var G__29677 = top_data;
var G__29677__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29677,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29677);
var G__29677__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29677__$1);
var G__29677__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29677__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29677__$2);
var G__29677__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29677__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29677__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29677__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29677__$4;
}

break;
case "execution":
var vec__29678 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29678,(0),null);
var method = cljs.core.nth.call(null,vec__29678,(1),null);
var file = cljs.core.nth.call(null,vec__29678,(2),null);
var line = cljs.core.nth.call(null,vec__29678,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29678,source__$1,method,file,line,G__29669,G__29669__$1,map__29661,map__29661__$1,via,trace,phase,map__29662,map__29662__$1,type,message,data,map__29663,map__29663__$1,problems,fn,caller,map__29664,map__29664__$1,top_data,source){
return (function (p1__29660_SHARP_){
var or__4131__auto__ = (p1__29660_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29660_SHARP_);
}
});})(vec__29678,source__$1,method,file,line,G__29669,G__29669__$1,map__29661,map__29661__$1,via,trace,phase,map__29662,map__29662__$1,type,message,data,map__29663,map__29663__$1,problems,fn,caller,map__29664,map__29664__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29681 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29681__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29681,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29681);
var G__29681__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29681__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29681__$1);
var G__29681__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29681__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29681__$2);
var G__29681__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29681__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29681__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29681__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29681__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29669__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29685){
var map__29686 = p__29685;
var map__29686__$1 = (((((!((map__29686 == null))))?(((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var triage_data = map__29686__$1;
var phase = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29688 = phase;
var G__29688__$1 = (((G__29688 instanceof cljs.core.Keyword))?G__29688.fqn:null);
switch (G__29688__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29689_29698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29690_29699 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29691_29700 = true;
var _STAR_print_fn_STAR__temp_val__29692_29701 = ((function (_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29691_29700;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29692_29701;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,_STAR_print_fn_STAR__temp_val__29692_29701,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,_STAR_print_fn_STAR__temp_val__29692_29701,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29683_SHARP_){
return cljs.core.dissoc.call(null,p1__29683_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,_STAR_print_fn_STAR__temp_val__29692_29701,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29689_29698,_STAR_print_fn_STAR__orig_val__29690_29699,_STAR_print_newline_STAR__temp_val__29691_29700,_STAR_print_fn_STAR__temp_val__29692_29701,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29690_29699;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29689_29698;
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
var _STAR_print_newline_STAR__orig_val__29693_29702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29694_29703 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29695_29704 = true;
var _STAR_print_fn_STAR__temp_val__29696_29705 = ((function (_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29695_29704;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29696_29705;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,_STAR_print_fn_STAR__temp_val__29696_29705,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,_STAR_print_fn_STAR__temp_val__29696_29705,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29684_SHARP_){
return cljs.core.dissoc.call(null,p1__29684_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,_STAR_print_fn_STAR__temp_val__29696_29705,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29693_29702,_STAR_print_fn_STAR__orig_val__29694_29703,_STAR_print_newline_STAR__temp_val__29695_29704,_STAR_print_fn_STAR__temp_val__29696_29705,sb__4661__auto__,G__29688,G__29688__$1,loc,class_name,simple_class,cause_type,format,map__29686,map__29686__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29694_29703;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29693_29702;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29688__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1592614562654
