// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29775){if((e29775 instanceof Error)){
var e = e29775;
return "Error: Unable to stringify";
} else {
throw e29775;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29778 = arguments.length;
switch (G__29778) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29776_SHARP_){
if(typeof p1__29776_SHARP_ === 'string'){
return p1__29776_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29776_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29781 = arguments.length;
var i__4731__auto___29782 = (0);
while(true){
if((i__4731__auto___29782 < len__4730__auto___29781)){
args__4736__auto__.push((arguments[i__4731__auto___29782]));

var G__29783 = (i__4731__auto___29782 + (1));
i__4731__auto___29782 = G__29783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29780){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29780));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29785 = arguments.length;
var i__4731__auto___29786 = (0);
while(true){
if((i__4731__auto___29786 < len__4730__auto___29785)){
args__4736__auto__.push((arguments[i__4731__auto___29786]));

var G__29787 = (i__4731__auto___29786 + (1));
i__4731__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29784));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29788){
var map__29789 = p__29788;
var map__29789__$1 = (((((!((map__29789 == null))))?(((((map__29789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29789):map__29789);
var message = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25784__auto___29868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___29868,ch){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___29868,ch){
return (function (state_29840){
var state_val_29841 = (state_29840[(1)]);
if((state_val_29841 === (7))){
var inst_29836 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29842_29869 = state_29840__$1;
(statearr_29842_29869[(2)] = inst_29836);

(statearr_29842_29869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (1))){
var state_29840__$1 = state_29840;
var statearr_29843_29870 = state_29840__$1;
(statearr_29843_29870[(2)] = null);

(statearr_29843_29870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (4))){
var inst_29793 = (state_29840[(7)]);
var inst_29793__$1 = (state_29840[(2)]);
var state_29840__$1 = (function (){var statearr_29844 = state_29840;
(statearr_29844[(7)] = inst_29793__$1);

return statearr_29844;
})();
if(cljs.core.truth_(inst_29793__$1)){
var statearr_29845_29871 = state_29840__$1;
(statearr_29845_29871[(1)] = (5));

} else {
var statearr_29846_29872 = state_29840__$1;
(statearr_29846_29872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (15))){
var inst_29800 = (state_29840[(8)]);
var inst_29815 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29800);
var inst_29816 = cljs.core.first.call(null,inst_29815);
var inst_29817 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29816);
var inst_29818 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29817)].join('');
var inst_29819 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29818);
var state_29840__$1 = state_29840;
var statearr_29847_29873 = state_29840__$1;
(statearr_29847_29873[(2)] = inst_29819);

(statearr_29847_29873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (13))){
var inst_29824 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29848_29874 = state_29840__$1;
(statearr_29848_29874[(2)] = inst_29824);

(statearr_29848_29874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (6))){
var state_29840__$1 = state_29840;
var statearr_29849_29875 = state_29840__$1;
(statearr_29849_29875[(2)] = null);

(statearr_29849_29875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (17))){
var inst_29822 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29850_29876 = state_29840__$1;
(statearr_29850_29876[(2)] = inst_29822);

(statearr_29850_29876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (3))){
var inst_29838 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29840__$1,inst_29838);
} else {
if((state_val_29841 === (12))){
var inst_29799 = (state_29840[(9)]);
var inst_29813 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29799,opts);
var state_29840__$1 = state_29840;
if(inst_29813){
var statearr_29851_29877 = state_29840__$1;
(statearr_29851_29877[(1)] = (15));

} else {
var statearr_29852_29878 = state_29840__$1;
(statearr_29852_29878[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (2))){
var state_29840__$1 = state_29840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29840__$1,(4),ch);
} else {
if((state_val_29841 === (11))){
var inst_29800 = (state_29840[(8)]);
var inst_29805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29806 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29800);
var inst_29807 = cljs.core.async.timeout.call(null,(1000));
var inst_29808 = [inst_29806,inst_29807];
var inst_29809 = (new cljs.core.PersistentVector(null,2,(5),inst_29805,inst_29808,null));
var state_29840__$1 = state_29840;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29840__$1,(14),inst_29809);
} else {
if((state_val_29841 === (9))){
var inst_29800 = (state_29840[(8)]);
var inst_29826 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29827 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29800);
var inst_29828 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29827);
var inst_29829 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29828)].join('');
var inst_29830 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29829);
var state_29840__$1 = (function (){var statearr_29853 = state_29840;
(statearr_29853[(10)] = inst_29826);

return statearr_29853;
})();
var statearr_29854_29879 = state_29840__$1;
(statearr_29854_29879[(2)] = inst_29830);

(statearr_29854_29879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (5))){
var inst_29793 = (state_29840[(7)]);
var inst_29795 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29796 = (new cljs.core.PersistentArrayMap(null,2,inst_29795,null));
var inst_29797 = (new cljs.core.PersistentHashSet(null,inst_29796,null));
var inst_29798 = figwheel.client.focus_msgs.call(null,inst_29797,inst_29793);
var inst_29799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29798);
var inst_29800 = cljs.core.first.call(null,inst_29798);
var inst_29801 = figwheel.client.autoload_QMARK_.call(null);
var state_29840__$1 = (function (){var statearr_29855 = state_29840;
(statearr_29855[(9)] = inst_29799);

(statearr_29855[(8)] = inst_29800);

return statearr_29855;
})();
if(cljs.core.truth_(inst_29801)){
var statearr_29856_29880 = state_29840__$1;
(statearr_29856_29880[(1)] = (8));

} else {
var statearr_29857_29881 = state_29840__$1;
(statearr_29857_29881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (14))){
var inst_29811 = (state_29840[(2)]);
var state_29840__$1 = state_29840;
var statearr_29858_29882 = state_29840__$1;
(statearr_29858_29882[(2)] = inst_29811);

(statearr_29858_29882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (16))){
var state_29840__$1 = state_29840;
var statearr_29859_29883 = state_29840__$1;
(statearr_29859_29883[(2)] = null);

(statearr_29859_29883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (10))){
var inst_29832 = (state_29840[(2)]);
var state_29840__$1 = (function (){var statearr_29860 = state_29840;
(statearr_29860[(11)] = inst_29832);

return statearr_29860;
})();
var statearr_29861_29884 = state_29840__$1;
(statearr_29861_29884[(2)] = null);

(statearr_29861_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29841 === (8))){
var inst_29799 = (state_29840[(9)]);
var inst_29803 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29799,opts);
var state_29840__$1 = state_29840;
if(cljs.core.truth_(inst_29803)){
var statearr_29862_29885 = state_29840__$1;
(statearr_29862_29885[(1)] = (11));

} else {
var statearr_29863_29886 = state_29840__$1;
(statearr_29863_29886[(1)] = (12));

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
});})(c__25784__auto___29868,ch))
;
return ((function (switch__25689__auto__,c__25784__auto___29868,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____0 = (function (){
var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29864[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__);

(statearr_29864[(1)] = (1));

return statearr_29864;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____1 = (function (state_29840){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_29840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e29865){if((e29865 instanceof Object)){
var ex__25693__auto__ = e29865;
var statearr_29866_29887 = state_29840;
(statearr_29866_29887[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29888 = state_29840;
state_29840 = G__29888;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__ = function(state_29840){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____1.call(this,state_29840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25690__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___29868,ch))
})();
var state__25786__auto__ = (function (){var statearr_29867 = f__25785__auto__.call(null);
(statearr_29867[(6)] = c__25784__auto___29868);

return statearr_29867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___29868,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29889_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29889_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29895 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29895){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29893 = true;
var _STAR_print_fn_STAR__temp_val__29894 = ((function (_STAR_print_newline_STAR__orig_val__29891,_STAR_print_fn_STAR__orig_val__29892,_STAR_print_newline_STAR__temp_val__29893,sb,base_path_29895){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29891,_STAR_print_fn_STAR__orig_val__29892,_STAR_print_newline_STAR__temp_val__29893,sb,base_path_29895))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29893;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29894;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29892;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29891;
}}catch (e29890){if((e29890 instanceof Error)){
var e = e29890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29895], null));
} else {
var e = e29890;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29895))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29896){
var map__29897 = p__29896;
var map__29897__$1 = (((((!((map__29897 == null))))?(((((map__29897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);
var opts = map__29897__$1;
var build_id = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29897,map__29897__$1,opts,build_id){
return (function (p__29899){
var vec__29900 = p__29899;
var seq__29901 = cljs.core.seq.call(null,vec__29900);
var first__29902 = cljs.core.first.call(null,seq__29901);
var seq__29901__$1 = cljs.core.next.call(null,seq__29901);
var map__29903 = first__29902;
var map__29903__$1 = (((((!((map__29903 == null))))?(((((map__29903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29903):map__29903);
var msg = map__29903__$1;
var msg_name = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29901__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29900,seq__29901,first__29902,seq__29901__$1,map__29903,map__29903__$1,msg,msg_name,_,map__29897,map__29897__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29900,seq__29901,first__29902,seq__29901__$1,map__29903,map__29903__$1,msg,msg_name,_,map__29897,map__29897__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29897,map__29897__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29905){
var vec__29906 = p__29905;
var seq__29907 = cljs.core.seq.call(null,vec__29906);
var first__29908 = cljs.core.first.call(null,seq__29907);
var seq__29907__$1 = cljs.core.next.call(null,seq__29907);
var map__29909 = first__29908;
var map__29909__$1 = (((((!((map__29909 == null))))?(((((map__29909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29909):map__29909);
var msg = map__29909__$1;
var msg_name = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29907__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29911){
var map__29912 = p__29911;
var map__29912__$1 = (((((!((map__29912 == null))))?(((((map__29912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29912):map__29912);
var on_compile_warning = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29912__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29912,map__29912__$1,on_compile_warning,on_compile_fail){
return (function (p__29914){
var vec__29915 = p__29914;
var seq__29916 = cljs.core.seq.call(null,vec__29915);
var first__29917 = cljs.core.first.call(null,seq__29916);
var seq__29916__$1 = cljs.core.next.call(null,seq__29916);
var map__29918 = first__29917;
var map__29918__$1 = (((((!((map__29918 == null))))?(((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var msg = map__29918__$1;
var msg_name = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29916__$1;
var pred__29920 = cljs.core._EQ_;
var expr__29921 = msg_name;
if(cljs.core.truth_(pred__29920.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29921))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29920.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29921))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29912,map__29912__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__,msg_hist,msg_names,msg){
return (function (state_30010){
var state_val_30011 = (state_30010[(1)]);
if((state_val_30011 === (7))){
var inst_29930 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
if(cljs.core.truth_(inst_29930)){
var statearr_30012_30059 = state_30010__$1;
(statearr_30012_30059[(1)] = (8));

} else {
var statearr_30013_30060 = state_30010__$1;
(statearr_30013_30060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (20))){
var inst_30004 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30014_30061 = state_30010__$1;
(statearr_30014_30061[(2)] = inst_30004);

(statearr_30014_30061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (27))){
var inst_30000 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30015_30062 = state_30010__$1;
(statearr_30015_30062[(2)] = inst_30000);

(statearr_30015_30062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (1))){
var inst_29923 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30010__$1 = state_30010;
if(cljs.core.truth_(inst_29923)){
var statearr_30016_30063 = state_30010__$1;
(statearr_30016_30063[(1)] = (2));

} else {
var statearr_30017_30064 = state_30010__$1;
(statearr_30017_30064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (24))){
var inst_30002 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30018_30065 = state_30010__$1;
(statearr_30018_30065[(2)] = inst_30002);

(statearr_30018_30065[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (4))){
var inst_30008 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30010__$1,inst_30008);
} else {
if((state_val_30011 === (15))){
var inst_30006 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30019_30066 = state_30010__$1;
(statearr_30019_30066[(2)] = inst_30006);

(statearr_30019_30066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (21))){
var inst_29959 = (state_30010[(2)]);
var inst_29960 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29961 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29960);
var state_30010__$1 = (function (){var statearr_30020 = state_30010;
(statearr_30020[(7)] = inst_29959);

return statearr_30020;
})();
var statearr_30021_30067 = state_30010__$1;
(statearr_30021_30067[(2)] = inst_29961);

(statearr_30021_30067[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (31))){
var inst_29989 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29989){
var statearr_30022_30068 = state_30010__$1;
(statearr_30022_30068[(1)] = (34));

} else {
var statearr_30023_30069 = state_30010__$1;
(statearr_30023_30069[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (32))){
var inst_29998 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30024_30070 = state_30010__$1;
(statearr_30024_30070[(2)] = inst_29998);

(statearr_30024_30070[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (33))){
var inst_29985 = (state_30010[(2)]);
var inst_29986 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29987 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29986);
var state_30010__$1 = (function (){var statearr_30025 = state_30010;
(statearr_30025[(8)] = inst_29985);

return statearr_30025;
})();
var statearr_30026_30071 = state_30010__$1;
(statearr_30026_30071[(2)] = inst_29987);

(statearr_30026_30071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (13))){
var inst_29944 = figwheel.client.heads_up.clear.call(null);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(16),inst_29944);
} else {
if((state_val_30011 === (22))){
var inst_29965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29966 = figwheel.client.heads_up.append_warning_message.call(null,inst_29965);
var state_30010__$1 = state_30010;
var statearr_30027_30072 = state_30010__$1;
(statearr_30027_30072[(2)] = inst_29966);

(statearr_30027_30072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (36))){
var inst_29996 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30028_30073 = state_30010__$1;
(statearr_30028_30073[(2)] = inst_29996);

(statearr_30028_30073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (29))){
var inst_29976 = (state_30010[(2)]);
var inst_29977 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29978 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29977);
var state_30010__$1 = (function (){var statearr_30029 = state_30010;
(statearr_30029[(9)] = inst_29976);

return statearr_30029;
})();
var statearr_30030_30074 = state_30010__$1;
(statearr_30030_30074[(2)] = inst_29978);

(statearr_30030_30074[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (6))){
var inst_29925 = (state_30010[(10)]);
var state_30010__$1 = state_30010;
var statearr_30031_30075 = state_30010__$1;
(statearr_30031_30075[(2)] = inst_29925);

(statearr_30031_30075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (28))){
var inst_29972 = (state_30010[(2)]);
var inst_29973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29974 = figwheel.client.heads_up.display_warning.call(null,inst_29973);
var state_30010__$1 = (function (){var statearr_30032 = state_30010;
(statearr_30032[(11)] = inst_29972);

return statearr_30032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(29),inst_29974);
} else {
if((state_val_30011 === (25))){
var inst_29970 = figwheel.client.heads_up.clear.call(null);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(28),inst_29970);
} else {
if((state_val_30011 === (34))){
var inst_29991 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(37),inst_29991);
} else {
if((state_val_30011 === (17))){
var inst_29950 = (state_30010[(2)]);
var inst_29951 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29952 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29951);
var state_30010__$1 = (function (){var statearr_30033 = state_30010;
(statearr_30033[(12)] = inst_29950);

return statearr_30033;
})();
var statearr_30034_30076 = state_30010__$1;
(statearr_30034_30076[(2)] = inst_29952);

(statearr_30034_30076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (3))){
var inst_29942 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29942){
var statearr_30035_30077 = state_30010__$1;
(statearr_30035_30077[(1)] = (13));

} else {
var statearr_30036_30078 = state_30010__$1;
(statearr_30036_30078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (12))){
var inst_29938 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30037_30079 = state_30010__$1;
(statearr_30037_30079[(2)] = inst_29938);

(statearr_30037_30079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (2))){
var inst_29925 = (state_30010[(10)]);
var inst_29925__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30010__$1 = (function (){var statearr_30038 = state_30010;
(statearr_30038[(10)] = inst_29925__$1);

return statearr_30038;
})();
if(cljs.core.truth_(inst_29925__$1)){
var statearr_30039_30080 = state_30010__$1;
(statearr_30039_30080[(1)] = (5));

} else {
var statearr_30040_30081 = state_30010__$1;
(statearr_30040_30081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (23))){
var inst_29968 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29968){
var statearr_30041_30082 = state_30010__$1;
(statearr_30041_30082[(1)] = (25));

} else {
var statearr_30042_30083 = state_30010__$1;
(statearr_30042_30083[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (35))){
var state_30010__$1 = state_30010;
var statearr_30043_30084 = state_30010__$1;
(statearr_30043_30084[(2)] = null);

(statearr_30043_30084[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (19))){
var inst_29963 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29963){
var statearr_30044_30085 = state_30010__$1;
(statearr_30044_30085[(1)] = (22));

} else {
var statearr_30045_30086 = state_30010__$1;
(statearr_30045_30086[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (11))){
var inst_29934 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30046_30087 = state_30010__$1;
(statearr_30046_30087[(2)] = inst_29934);

(statearr_30046_30087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (9))){
var inst_29936 = figwheel.client.heads_up.clear.call(null);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(12),inst_29936);
} else {
if((state_val_30011 === (5))){
var inst_29927 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30010__$1 = state_30010;
var statearr_30047_30088 = state_30010__$1;
(statearr_30047_30088[(2)] = inst_29927);

(statearr_30047_30088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (14))){
var inst_29954 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29954){
var statearr_30048_30089 = state_30010__$1;
(statearr_30048_30089[(1)] = (18));

} else {
var statearr_30049_30090 = state_30010__$1;
(statearr_30049_30090[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (26))){
var inst_29980 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30010__$1 = state_30010;
if(inst_29980){
var statearr_30050_30091 = state_30010__$1;
(statearr_30050_30091[(1)] = (30));

} else {
var statearr_30051_30092 = state_30010__$1;
(statearr_30051_30092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (16))){
var inst_29946 = (state_30010[(2)]);
var inst_29947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29948 = figwheel.client.heads_up.display_exception.call(null,inst_29947);
var state_30010__$1 = (function (){var statearr_30052 = state_30010;
(statearr_30052[(13)] = inst_29946);

return statearr_30052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(17),inst_29948);
} else {
if((state_val_30011 === (30))){
var inst_29982 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29983 = figwheel.client.heads_up.display_warning.call(null,inst_29982);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(33),inst_29983);
} else {
if((state_val_30011 === (10))){
var inst_29940 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30053_30093 = state_30010__$1;
(statearr_30053_30093[(2)] = inst_29940);

(statearr_30053_30093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (18))){
var inst_29956 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29957 = figwheel.client.heads_up.display_exception.call(null,inst_29956);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(21),inst_29957);
} else {
if((state_val_30011 === (37))){
var inst_29993 = (state_30010[(2)]);
var state_30010__$1 = state_30010;
var statearr_30054_30094 = state_30010__$1;
(statearr_30054_30094[(2)] = inst_29993);

(statearr_30054_30094[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30011 === (8))){
var inst_29932 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30010__$1,(11),inst_29932);
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
});})(c__25784__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25689__auto__,c__25784__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____0 = (function (){
var statearr_30055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30055[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__);

(statearr_30055[(1)] = (1));

return statearr_30055;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____1 = (function (state_30010){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_30010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object)){
var ex__25693__auto__ = e30056;
var statearr_30057_30095 = state_30010;
(statearr_30057_30095[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30096 = state_30010;
state_30010 = G__30096;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__ = function(state_30010){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____1.call(this,state_30010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__,msg_hist,msg_names,msg))
})();
var state__25786__auto__ = (function (){var statearr_30058 = f__25785__auto__.call(null);
(statearr_30058[(6)] = c__25784__auto__);

return statearr_30058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__,msg_hist,msg_names,msg))
);

return c__25784__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25784__auto___30125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___30125,ch){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___30125,ch){
return (function (state_30111){
var state_val_30112 = (state_30111[(1)]);
if((state_val_30112 === (1))){
var state_30111__$1 = state_30111;
var statearr_30113_30126 = state_30111__$1;
(statearr_30113_30126[(2)] = null);

(statearr_30113_30126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30112 === (2))){
var state_30111__$1 = state_30111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30111__$1,(4),ch);
} else {
if((state_val_30112 === (3))){
var inst_30109 = (state_30111[(2)]);
var state_30111__$1 = state_30111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30111__$1,inst_30109);
} else {
if((state_val_30112 === (4))){
var inst_30099 = (state_30111[(7)]);
var inst_30099__$1 = (state_30111[(2)]);
var state_30111__$1 = (function (){var statearr_30114 = state_30111;
(statearr_30114[(7)] = inst_30099__$1);

return statearr_30114;
})();
if(cljs.core.truth_(inst_30099__$1)){
var statearr_30115_30127 = state_30111__$1;
(statearr_30115_30127[(1)] = (5));

} else {
var statearr_30116_30128 = state_30111__$1;
(statearr_30116_30128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30112 === (5))){
var inst_30099 = (state_30111[(7)]);
var inst_30101 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30099);
var state_30111__$1 = state_30111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30111__$1,(8),inst_30101);
} else {
if((state_val_30112 === (6))){
var state_30111__$1 = state_30111;
var statearr_30117_30129 = state_30111__$1;
(statearr_30117_30129[(2)] = null);

(statearr_30117_30129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30112 === (7))){
var inst_30107 = (state_30111[(2)]);
var state_30111__$1 = state_30111;
var statearr_30118_30130 = state_30111__$1;
(statearr_30118_30130[(2)] = inst_30107);

(statearr_30118_30130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30112 === (8))){
var inst_30103 = (state_30111[(2)]);
var state_30111__$1 = (function (){var statearr_30119 = state_30111;
(statearr_30119[(8)] = inst_30103);

return statearr_30119;
})();
var statearr_30120_30131 = state_30111__$1;
(statearr_30120_30131[(2)] = null);

(statearr_30120_30131[(1)] = (2));


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
});})(c__25784__auto___30125,ch))
;
return ((function (switch__25689__auto__,c__25784__auto___30125,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25690__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25690__auto____0 = (function (){
var statearr_30121 = [null,null,null,null,null,null,null,null,null];
(statearr_30121[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25690__auto__);

(statearr_30121[(1)] = (1));

return statearr_30121;
});
var figwheel$client$heads_up_plugin_$_state_machine__25690__auto____1 = (function (state_30111){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_30111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e30122){if((e30122 instanceof Object)){
var ex__25693__auto__ = e30122;
var statearr_30123_30132 = state_30111;
(statearr_30123_30132[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30133 = state_30111;
state_30111 = G__30133;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25690__auto__ = function(state_30111){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25690__auto____1.call(this,state_30111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25690__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25690__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___30125,ch))
})();
var state__25786__auto__ = (function (){var statearr_30124 = f__25785__auto__.call(null);
(statearr_30124[(6)] = c__25784__auto___30125);

return statearr_30124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___30125,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__){
return (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (1))){
var inst_30134 = cljs.core.async.timeout.call(null,(3000));
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30139__$1,(2),inst_30134);
} else {
if((state_val_30140 === (2))){
var inst_30136 = (state_30139[(2)]);
var inst_30137 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30139__$1 = (function (){var statearr_30141 = state_30139;
(statearr_30141[(7)] = inst_30136);

return statearr_30141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30139__$1,inst_30137);
} else {
return null;
}
}
});})(c__25784__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____0 = (function (){
var statearr_30142 = [null,null,null,null,null,null,null,null];
(statearr_30142[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__);

(statearr_30142[(1)] = (1));

return statearr_30142;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____1 = (function (state_30139){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_30139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e30143){if((e30143 instanceof Object)){
var ex__25693__auto__ = e30143;
var statearr_30144_30146 = state_30139;
(statearr_30144_30146[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30147 = state_30139;
state_30139 = G__30147;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25690__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__))
})();
var state__25786__auto__ = (function (){var statearr_30145 = f__25785__auto__.call(null);
(statearr_30145[(6)] = c__25784__auto__);

return statearr_30145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__))
);

return c__25784__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30154){
var state_val_30155 = (state_30154[(1)]);
if((state_val_30155 === (1))){
var inst_30148 = cljs.core.async.timeout.call(null,(2000));
var state_30154__$1 = state_30154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30154__$1,(2),inst_30148);
} else {
if((state_val_30155 === (2))){
var inst_30150 = (state_30154[(2)]);
var inst_30151 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30152 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30151);
var state_30154__$1 = (function (){var statearr_30156 = state_30154;
(statearr_30156[(7)] = inst_30150);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30154__$1,inst_30152);
} else {
return null;
}
}
});})(c__25784__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____0 = (function (){
var statearr_30157 = [null,null,null,null,null,null,null,null];
(statearr_30157[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__);

(statearr_30157[(1)] = (1));

return statearr_30157;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____1 = (function (state_30154){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_30154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e30158){if((e30158 instanceof Object)){
var ex__25693__auto__ = e30158;
var statearr_30159_30161 = state_30154;
(statearr_30159_30161[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30162 = state_30154;
state_30154 = G__30162;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__ = function(state_30154){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____1.call(this,state_30154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25786__auto__ = (function (){var statearr_30160 = f__25785__auto__.call(null);
(statearr_30160[(6)] = c__25784__auto__);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__,figwheel_version,temp__5720__auto__))
);

return c__25784__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30163){
var map__30164 = p__30163;
var map__30164__$1 = (((((!((map__30164 == null))))?(((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);
var file = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30166 = "";
var G__30166__$1 = (cljs.core.truth_(file)?[G__30166,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30166);
var G__30166__$2 = (cljs.core.truth_(line)?[G__30166__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30166__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30166__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30166__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30167){
var map__30168 = p__30167;
var map__30168__$1 = (((((!((map__30168 == null))))?(((((map__30168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30168):map__30168);
var ed = map__30168__$1;
var exception_data = cljs.core.get.call(null,map__30168__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30168__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30171 = (function (){var G__30170 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30170)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30170;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30171);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30172){
var map__30173 = p__30172;
var map__30173__$1 = (((((!((map__30173 == null))))?(((((map__30173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30173):map__30173);
var w = map__30173__$1;
var message = cljs.core.get.call(null,map__30173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30175 = cljs.core.seq.call(null,plugins);
var chunk__30176 = null;
var count__30177 = (0);
var i__30178 = (0);
while(true){
if((i__30178 < count__30177)){
var vec__30185 = cljs.core._nth.call(null,chunk__30176,i__30178);
var k = cljs.core.nth.call(null,vec__30185,(0),null);
var plugin = cljs.core.nth.call(null,vec__30185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30191 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30175,chunk__30176,count__30177,i__30178,pl_30191,vec__30185,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30191.call(null,msg_hist);
});})(seq__30175,chunk__30176,count__30177,i__30178,pl_30191,vec__30185,k,plugin))
);
} else {
}


var G__30192 = seq__30175;
var G__30193 = chunk__30176;
var G__30194 = count__30177;
var G__30195 = (i__30178 + (1));
seq__30175 = G__30192;
chunk__30176 = G__30193;
count__30177 = G__30194;
i__30178 = G__30195;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30175);
if(temp__5720__auto__){
var seq__30175__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30175__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30175__$1);
var G__30196 = cljs.core.chunk_rest.call(null,seq__30175__$1);
var G__30197 = c__4550__auto__;
var G__30198 = cljs.core.count.call(null,c__4550__auto__);
var G__30199 = (0);
seq__30175 = G__30196;
chunk__30176 = G__30197;
count__30177 = G__30198;
i__30178 = G__30199;
continue;
} else {
var vec__30188 = cljs.core.first.call(null,seq__30175__$1);
var k = cljs.core.nth.call(null,vec__30188,(0),null);
var plugin = cljs.core.nth.call(null,vec__30188,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30200 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30175,chunk__30176,count__30177,i__30178,pl_30200,vec__30188,k,plugin,seq__30175__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30200.call(null,msg_hist);
});})(seq__30175,chunk__30176,count__30177,i__30178,pl_30200,vec__30188,k,plugin,seq__30175__$1,temp__5720__auto__))
);
} else {
}


var G__30201 = cljs.core.next.call(null,seq__30175__$1);
var G__30202 = null;
var G__30203 = (0);
var G__30204 = (0);
seq__30175 = G__30201;
chunk__30176 = G__30202;
count__30177 = G__30203;
i__30178 = G__30204;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30206 = arguments.length;
switch (G__30206) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30207_30212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30208_30213 = null;
var count__30209_30214 = (0);
var i__30210_30215 = (0);
while(true){
if((i__30210_30215 < count__30209_30214)){
var msg_30216 = cljs.core._nth.call(null,chunk__30208_30213,i__30210_30215);
figwheel.client.socket.handle_incoming_message.call(null,msg_30216);


var G__30217 = seq__30207_30212;
var G__30218 = chunk__30208_30213;
var G__30219 = count__30209_30214;
var G__30220 = (i__30210_30215 + (1));
seq__30207_30212 = G__30217;
chunk__30208_30213 = G__30218;
count__30209_30214 = G__30219;
i__30210_30215 = G__30220;
continue;
} else {
var temp__5720__auto___30221 = cljs.core.seq.call(null,seq__30207_30212);
if(temp__5720__auto___30221){
var seq__30207_30222__$1 = temp__5720__auto___30221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30207_30222__$1)){
var c__4550__auto___30223 = cljs.core.chunk_first.call(null,seq__30207_30222__$1);
var G__30224 = cljs.core.chunk_rest.call(null,seq__30207_30222__$1);
var G__30225 = c__4550__auto___30223;
var G__30226 = cljs.core.count.call(null,c__4550__auto___30223);
var G__30227 = (0);
seq__30207_30212 = G__30224;
chunk__30208_30213 = G__30225;
count__30209_30214 = G__30226;
i__30210_30215 = G__30227;
continue;
} else {
var msg_30228 = cljs.core.first.call(null,seq__30207_30222__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30228);


var G__30229 = cljs.core.next.call(null,seq__30207_30222__$1);
var G__30230 = null;
var G__30231 = (0);
var G__30232 = (0);
seq__30207_30212 = G__30229;
chunk__30208_30213 = G__30230;
count__30209_30214 = G__30231;
i__30210_30215 = G__30232;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30237 = arguments.length;
var i__4731__auto___30238 = (0);
while(true){
if((i__4731__auto___30238 < len__4730__auto___30237)){
args__4736__auto__.push((arguments[i__4731__auto___30238]));

var G__30239 = (i__4731__auto___30238 + (1));
i__4731__auto___30238 = G__30239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30234){
var map__30235 = p__30234;
var map__30235__$1 = (((((!((map__30235 == null))))?(((((map__30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);
var opts = map__30235__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30233){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30233));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30240){if((e30240 instanceof Error)){
var e = e30240;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30240;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30241){
var map__30242 = p__30241;
var map__30242__$1 = (((((!((map__30242 == null))))?(((((map__30242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);
var msg_name = cljs.core.get.call(null,map__30242__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1570822066645
