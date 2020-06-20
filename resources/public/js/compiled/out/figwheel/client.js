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
}catch (e29900){if((e29900 instanceof Error)){
var e = e29900;
return "Error: Unable to stringify";
} else {
throw e29900;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29903 = arguments.length;
switch (G__29903) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29901_SHARP_){
if(typeof p1__29901_SHARP_ === 'string'){
return p1__29901_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29901_SHARP_);
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
var len__4730__auto___29906 = arguments.length;
var i__4731__auto___29907 = (0);
while(true){
if((i__4731__auto___29907 < len__4730__auto___29906)){
args__4736__auto__.push((arguments[i__4731__auto___29907]));

var G__29908 = (i__4731__auto___29907 + (1));
i__4731__auto___29907 = G__29908;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29905){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29905));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29910 = arguments.length;
var i__4731__auto___29911 = (0);
while(true){
if((i__4731__auto___29911 < len__4730__auto___29910)){
args__4736__auto__.push((arguments[i__4731__auto___29911]));

var G__29912 = (i__4731__auto___29911 + (1));
i__4731__auto___29911 = G__29912;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29909){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29909));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29913){
var map__29914 = p__29913;
var map__29914__$1 = (((((!((map__29914 == null))))?(((((map__29914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29914):map__29914);
var message = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__25909__auto___29993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___29993,ch){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___29993,ch){
return (function (state_29965){
var state_val_29966 = (state_29965[(1)]);
if((state_val_29966 === (7))){
var inst_29961 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29967_29994 = state_29965__$1;
(statearr_29967_29994[(2)] = inst_29961);

(statearr_29967_29994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (1))){
var state_29965__$1 = state_29965;
var statearr_29968_29995 = state_29965__$1;
(statearr_29968_29995[(2)] = null);

(statearr_29968_29995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (4))){
var inst_29918 = (state_29965[(7)]);
var inst_29918__$1 = (state_29965[(2)]);
var state_29965__$1 = (function (){var statearr_29969 = state_29965;
(statearr_29969[(7)] = inst_29918__$1);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29918__$1)){
var statearr_29970_29996 = state_29965__$1;
(statearr_29970_29996[(1)] = (5));

} else {
var statearr_29971_29997 = state_29965__$1;
(statearr_29971_29997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (15))){
var inst_29925 = (state_29965[(8)]);
var inst_29940 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29925);
var inst_29941 = cljs.core.first.call(null,inst_29940);
var inst_29942 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29941);
var inst_29943 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29942)].join('');
var inst_29944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29943);
var state_29965__$1 = state_29965;
var statearr_29972_29998 = state_29965__$1;
(statearr_29972_29998[(2)] = inst_29944);

(statearr_29972_29998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (13))){
var inst_29949 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29973_29999 = state_29965__$1;
(statearr_29973_29999[(2)] = inst_29949);

(statearr_29973_29999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (6))){
var state_29965__$1 = state_29965;
var statearr_29974_30000 = state_29965__$1;
(statearr_29974_30000[(2)] = null);

(statearr_29974_30000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (17))){
var inst_29947 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29975_30001 = state_29965__$1;
(statearr_29975_30001[(2)] = inst_29947);

(statearr_29975_30001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (3))){
var inst_29963 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29965__$1,inst_29963);
} else {
if((state_val_29966 === (12))){
var inst_29924 = (state_29965[(9)]);
var inst_29938 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29924,opts);
var state_29965__$1 = state_29965;
if(inst_29938){
var statearr_29976_30002 = state_29965__$1;
(statearr_29976_30002[(1)] = (15));

} else {
var statearr_29977_30003 = state_29965__$1;
(statearr_29977_30003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (2))){
var state_29965__$1 = state_29965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29965__$1,(4),ch);
} else {
if((state_val_29966 === (11))){
var inst_29925 = (state_29965[(8)]);
var inst_29930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29931 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29925);
var inst_29932 = cljs.core.async.timeout.call(null,(1000));
var inst_29933 = [inst_29931,inst_29932];
var inst_29934 = (new cljs.core.PersistentVector(null,2,(5),inst_29930,inst_29933,null));
var state_29965__$1 = state_29965;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29965__$1,(14),inst_29934);
} else {
if((state_val_29966 === (9))){
var inst_29925 = (state_29965[(8)]);
var inst_29951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29952 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29925);
var inst_29953 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29952);
var inst_29954 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29953)].join('');
var inst_29955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29954);
var state_29965__$1 = (function (){var statearr_29978 = state_29965;
(statearr_29978[(10)] = inst_29951);

return statearr_29978;
})();
var statearr_29979_30004 = state_29965__$1;
(statearr_29979_30004[(2)] = inst_29955);

(statearr_29979_30004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (5))){
var inst_29918 = (state_29965[(7)]);
var inst_29920 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29921 = (new cljs.core.PersistentArrayMap(null,2,inst_29920,null));
var inst_29922 = (new cljs.core.PersistentHashSet(null,inst_29921,null));
var inst_29923 = figwheel.client.focus_msgs.call(null,inst_29922,inst_29918);
var inst_29924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29923);
var inst_29925 = cljs.core.first.call(null,inst_29923);
var inst_29926 = figwheel.client.autoload_QMARK_.call(null);
var state_29965__$1 = (function (){var statearr_29980 = state_29965;
(statearr_29980[(9)] = inst_29924);

(statearr_29980[(8)] = inst_29925);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29926)){
var statearr_29981_30005 = state_29965__$1;
(statearr_29981_30005[(1)] = (8));

} else {
var statearr_29982_30006 = state_29965__$1;
(statearr_29982_30006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (14))){
var inst_29936 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29983_30007 = state_29965__$1;
(statearr_29983_30007[(2)] = inst_29936);

(statearr_29983_30007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (16))){
var state_29965__$1 = state_29965;
var statearr_29984_30008 = state_29965__$1;
(statearr_29984_30008[(2)] = null);

(statearr_29984_30008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (10))){
var inst_29957 = (state_29965[(2)]);
var state_29965__$1 = (function (){var statearr_29985 = state_29965;
(statearr_29985[(11)] = inst_29957);

return statearr_29985;
})();
var statearr_29986_30009 = state_29965__$1;
(statearr_29986_30009[(2)] = null);

(statearr_29986_30009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (8))){
var inst_29924 = (state_29965[(9)]);
var inst_29928 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29924,opts);
var state_29965__$1 = state_29965;
if(cljs.core.truth_(inst_29928)){
var statearr_29987_30010 = state_29965__$1;
(statearr_29987_30010[(1)] = (11));

} else {
var statearr_29988_30011 = state_29965__$1;
(statearr_29988_30011[(1)] = (12));

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
});})(c__25909__auto___29993,ch))
;
return ((function (switch__25814__auto__,c__25909__auto___29993,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____0 = (function (){
var statearr_29989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29989[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__);

(statearr_29989[(1)] = (1));

return statearr_29989;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____1 = (function (state_29965){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_29965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e29990){if((e29990 instanceof Object)){
var ex__25818__auto__ = e29990;
var statearr_29991_30012 = state_29965;
(statearr_29991_30012[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30013 = state_29965;
state_29965 = G__30013;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__ = function(state_29965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____1.call(this,state_29965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25815__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___29993,ch))
})();
var state__25911__auto__ = (function (){var statearr_29992 = f__25910__auto__.call(null);
(statearr_29992[(6)] = c__25909__auto___29993);

return statearr_29992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___29993,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30014_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30014_SHARP_));
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
var base_path_30020 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30020){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30016 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30017 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30018 = true;
var _STAR_print_fn_STAR__temp_val__30019 = ((function (_STAR_print_newline_STAR__orig_val__30016,_STAR_print_fn_STAR__orig_val__30017,_STAR_print_newline_STAR__temp_val__30018,sb,base_path_30020){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30016,_STAR_print_fn_STAR__orig_val__30017,_STAR_print_newline_STAR__temp_val__30018,sb,base_path_30020))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30018;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30019;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30017;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30016;
}}catch (e30015){if((e30015 instanceof Error)){
var e = e30015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30020], null));
} else {
var e = e30015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30020))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30021){
var map__30022 = p__30021;
var map__30022__$1 = (((((!((map__30022 == null))))?(((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var opts = map__30022__$1;
var build_id = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30022,map__30022__$1,opts,build_id){
return (function (p__30024){
var vec__30025 = p__30024;
var seq__30026 = cljs.core.seq.call(null,vec__30025);
var first__30027 = cljs.core.first.call(null,seq__30026);
var seq__30026__$1 = cljs.core.next.call(null,seq__30026);
var map__30028 = first__30027;
var map__30028__$1 = (((((!((map__30028 == null))))?(((((map__30028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30028):map__30028);
var msg = map__30028__$1;
var msg_name = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30026__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30025,seq__30026,first__30027,seq__30026__$1,map__30028,map__30028__$1,msg,msg_name,_,map__30022,map__30022__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30025,seq__30026,first__30027,seq__30026__$1,map__30028,map__30028__$1,msg,msg_name,_,map__30022,map__30022__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30022,map__30022__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30030){
var vec__30031 = p__30030;
var seq__30032 = cljs.core.seq.call(null,vec__30031);
var first__30033 = cljs.core.first.call(null,seq__30032);
var seq__30032__$1 = cljs.core.next.call(null,seq__30032);
var map__30034 = first__30033;
var map__30034__$1 = (((((!((map__30034 == null))))?(((((map__30034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var msg = map__30034__$1;
var msg_name = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30032__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30036){
var map__30037 = p__30036;
var map__30037__$1 = (((((!((map__30037 == null))))?(((((map__30037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30037):map__30037);
var on_compile_warning = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30037,map__30037__$1,on_compile_warning,on_compile_fail){
return (function (p__30039){
var vec__30040 = p__30039;
var seq__30041 = cljs.core.seq.call(null,vec__30040);
var first__30042 = cljs.core.first.call(null,seq__30041);
var seq__30041__$1 = cljs.core.next.call(null,seq__30041);
var map__30043 = first__30042;
var map__30043__$1 = (((((!((map__30043 == null))))?(((((map__30043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);
var msg = map__30043__$1;
var msg_name = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30041__$1;
var pred__30045 = cljs.core._EQ_;
var expr__30046 = msg_name;
if(cljs.core.truth_(pred__30045.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30046))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30045.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30046))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30037,map__30037__$1,on_compile_warning,on_compile_fail))
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
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__,msg_hist,msg_names,msg){
return (function (state_30135){
var state_val_30136 = (state_30135[(1)]);
if((state_val_30136 === (7))){
var inst_30055 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
if(cljs.core.truth_(inst_30055)){
var statearr_30137_30184 = state_30135__$1;
(statearr_30137_30184[(1)] = (8));

} else {
var statearr_30138_30185 = state_30135__$1;
(statearr_30138_30185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (20))){
var inst_30129 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30139_30186 = state_30135__$1;
(statearr_30139_30186[(2)] = inst_30129);

(statearr_30139_30186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (27))){
var inst_30125 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30140_30187 = state_30135__$1;
(statearr_30140_30187[(2)] = inst_30125);

(statearr_30140_30187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (1))){
var inst_30048 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30135__$1 = state_30135;
if(cljs.core.truth_(inst_30048)){
var statearr_30141_30188 = state_30135__$1;
(statearr_30141_30188[(1)] = (2));

} else {
var statearr_30142_30189 = state_30135__$1;
(statearr_30142_30189[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (24))){
var inst_30127 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30143_30190 = state_30135__$1;
(statearr_30143_30190[(2)] = inst_30127);

(statearr_30143_30190[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (4))){
var inst_30133 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30135__$1,inst_30133);
} else {
if((state_val_30136 === (15))){
var inst_30131 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30144_30191 = state_30135__$1;
(statearr_30144_30191[(2)] = inst_30131);

(statearr_30144_30191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (21))){
var inst_30084 = (state_30135[(2)]);
var inst_30085 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30086 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30085);
var state_30135__$1 = (function (){var statearr_30145 = state_30135;
(statearr_30145[(7)] = inst_30084);

return statearr_30145;
})();
var statearr_30146_30192 = state_30135__$1;
(statearr_30146_30192[(2)] = inst_30086);

(statearr_30146_30192[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (31))){
var inst_30114 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30114){
var statearr_30147_30193 = state_30135__$1;
(statearr_30147_30193[(1)] = (34));

} else {
var statearr_30148_30194 = state_30135__$1;
(statearr_30148_30194[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (32))){
var inst_30123 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30149_30195 = state_30135__$1;
(statearr_30149_30195[(2)] = inst_30123);

(statearr_30149_30195[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (33))){
var inst_30110 = (state_30135[(2)]);
var inst_30111 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30112 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30111);
var state_30135__$1 = (function (){var statearr_30150 = state_30135;
(statearr_30150[(8)] = inst_30110);

return statearr_30150;
})();
var statearr_30151_30196 = state_30135__$1;
(statearr_30151_30196[(2)] = inst_30112);

(statearr_30151_30196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (13))){
var inst_30069 = figwheel.client.heads_up.clear.call(null);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(16),inst_30069);
} else {
if((state_val_30136 === (22))){
var inst_30090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30091 = figwheel.client.heads_up.append_warning_message.call(null,inst_30090);
var state_30135__$1 = state_30135;
var statearr_30152_30197 = state_30135__$1;
(statearr_30152_30197[(2)] = inst_30091);

(statearr_30152_30197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (36))){
var inst_30121 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30153_30198 = state_30135__$1;
(statearr_30153_30198[(2)] = inst_30121);

(statearr_30153_30198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (29))){
var inst_30101 = (state_30135[(2)]);
var inst_30102 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30103 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30102);
var state_30135__$1 = (function (){var statearr_30154 = state_30135;
(statearr_30154[(9)] = inst_30101);

return statearr_30154;
})();
var statearr_30155_30199 = state_30135__$1;
(statearr_30155_30199[(2)] = inst_30103);

(statearr_30155_30199[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (6))){
var inst_30050 = (state_30135[(10)]);
var state_30135__$1 = state_30135;
var statearr_30156_30200 = state_30135__$1;
(statearr_30156_30200[(2)] = inst_30050);

(statearr_30156_30200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (28))){
var inst_30097 = (state_30135[(2)]);
var inst_30098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30099 = figwheel.client.heads_up.display_warning.call(null,inst_30098);
var state_30135__$1 = (function (){var statearr_30157 = state_30135;
(statearr_30157[(11)] = inst_30097);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(29),inst_30099);
} else {
if((state_val_30136 === (25))){
var inst_30095 = figwheel.client.heads_up.clear.call(null);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(28),inst_30095);
} else {
if((state_val_30136 === (34))){
var inst_30116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(37),inst_30116);
} else {
if((state_val_30136 === (17))){
var inst_30075 = (state_30135[(2)]);
var inst_30076 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30077 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30076);
var state_30135__$1 = (function (){var statearr_30158 = state_30135;
(statearr_30158[(12)] = inst_30075);

return statearr_30158;
})();
var statearr_30159_30201 = state_30135__$1;
(statearr_30159_30201[(2)] = inst_30077);

(statearr_30159_30201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (3))){
var inst_30067 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30067){
var statearr_30160_30202 = state_30135__$1;
(statearr_30160_30202[(1)] = (13));

} else {
var statearr_30161_30203 = state_30135__$1;
(statearr_30161_30203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (12))){
var inst_30063 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30162_30204 = state_30135__$1;
(statearr_30162_30204[(2)] = inst_30063);

(statearr_30162_30204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (2))){
var inst_30050 = (state_30135[(10)]);
var inst_30050__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30135__$1 = (function (){var statearr_30163 = state_30135;
(statearr_30163[(10)] = inst_30050__$1);

return statearr_30163;
})();
if(cljs.core.truth_(inst_30050__$1)){
var statearr_30164_30205 = state_30135__$1;
(statearr_30164_30205[(1)] = (5));

} else {
var statearr_30165_30206 = state_30135__$1;
(statearr_30165_30206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (23))){
var inst_30093 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30093){
var statearr_30166_30207 = state_30135__$1;
(statearr_30166_30207[(1)] = (25));

} else {
var statearr_30167_30208 = state_30135__$1;
(statearr_30167_30208[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (35))){
var state_30135__$1 = state_30135;
var statearr_30168_30209 = state_30135__$1;
(statearr_30168_30209[(2)] = null);

(statearr_30168_30209[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (19))){
var inst_30088 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30088){
var statearr_30169_30210 = state_30135__$1;
(statearr_30169_30210[(1)] = (22));

} else {
var statearr_30170_30211 = state_30135__$1;
(statearr_30170_30211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (11))){
var inst_30059 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30171_30212 = state_30135__$1;
(statearr_30171_30212[(2)] = inst_30059);

(statearr_30171_30212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (9))){
var inst_30061 = figwheel.client.heads_up.clear.call(null);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(12),inst_30061);
} else {
if((state_val_30136 === (5))){
var inst_30052 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30135__$1 = state_30135;
var statearr_30172_30213 = state_30135__$1;
(statearr_30172_30213[(2)] = inst_30052);

(statearr_30172_30213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (14))){
var inst_30079 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30079){
var statearr_30173_30214 = state_30135__$1;
(statearr_30173_30214[(1)] = (18));

} else {
var statearr_30174_30215 = state_30135__$1;
(statearr_30174_30215[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (26))){
var inst_30105 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30135__$1 = state_30135;
if(inst_30105){
var statearr_30175_30216 = state_30135__$1;
(statearr_30175_30216[(1)] = (30));

} else {
var statearr_30176_30217 = state_30135__$1;
(statearr_30176_30217[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (16))){
var inst_30071 = (state_30135[(2)]);
var inst_30072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30073 = figwheel.client.heads_up.display_exception.call(null,inst_30072);
var state_30135__$1 = (function (){var statearr_30177 = state_30135;
(statearr_30177[(13)] = inst_30071);

return statearr_30177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(17),inst_30073);
} else {
if((state_val_30136 === (30))){
var inst_30107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30108 = figwheel.client.heads_up.display_warning.call(null,inst_30107);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(33),inst_30108);
} else {
if((state_val_30136 === (10))){
var inst_30065 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30178_30218 = state_30135__$1;
(statearr_30178_30218[(2)] = inst_30065);

(statearr_30178_30218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (18))){
var inst_30081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30082 = figwheel.client.heads_up.display_exception.call(null,inst_30081);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(21),inst_30082);
} else {
if((state_val_30136 === (37))){
var inst_30118 = (state_30135[(2)]);
var state_30135__$1 = state_30135;
var statearr_30179_30219 = state_30135__$1;
(statearr_30179_30219[(2)] = inst_30118);

(statearr_30179_30219[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30136 === (8))){
var inst_30057 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30135__$1 = state_30135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30135__$1,(11),inst_30057);
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
});})(c__25909__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25814__auto__,c__25909__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____0 = (function (){
var statearr_30180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30180[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__);

(statearr_30180[(1)] = (1));

return statearr_30180;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____1 = (function (state_30135){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_30135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e30181){if((e30181 instanceof Object)){
var ex__25818__auto__ = e30181;
var statearr_30182_30220 = state_30135;
(statearr_30182_30220[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30221 = state_30135;
state_30135 = G__30221;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__ = function(state_30135){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____1.call(this,state_30135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__,msg_hist,msg_names,msg))
})();
var state__25911__auto__ = (function (){var statearr_30183 = f__25910__auto__.call(null);
(statearr_30183[(6)] = c__25909__auto__);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__,msg_hist,msg_names,msg))
);

return c__25909__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25909__auto___30250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___30250,ch){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___30250,ch){
return (function (state_30236){
var state_val_30237 = (state_30236[(1)]);
if((state_val_30237 === (1))){
var state_30236__$1 = state_30236;
var statearr_30238_30251 = state_30236__$1;
(statearr_30238_30251[(2)] = null);

(statearr_30238_30251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (2))){
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30236__$1,(4),ch);
} else {
if((state_val_30237 === (3))){
var inst_30234 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30236__$1,inst_30234);
} else {
if((state_val_30237 === (4))){
var inst_30224 = (state_30236[(7)]);
var inst_30224__$1 = (state_30236[(2)]);
var state_30236__$1 = (function (){var statearr_30239 = state_30236;
(statearr_30239[(7)] = inst_30224__$1);

return statearr_30239;
})();
if(cljs.core.truth_(inst_30224__$1)){
var statearr_30240_30252 = state_30236__$1;
(statearr_30240_30252[(1)] = (5));

} else {
var statearr_30241_30253 = state_30236__$1;
(statearr_30241_30253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (5))){
var inst_30224 = (state_30236[(7)]);
var inst_30226 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30224);
var state_30236__$1 = state_30236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30236__$1,(8),inst_30226);
} else {
if((state_val_30237 === (6))){
var state_30236__$1 = state_30236;
var statearr_30242_30254 = state_30236__$1;
(statearr_30242_30254[(2)] = null);

(statearr_30242_30254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (7))){
var inst_30232 = (state_30236[(2)]);
var state_30236__$1 = state_30236;
var statearr_30243_30255 = state_30236__$1;
(statearr_30243_30255[(2)] = inst_30232);

(statearr_30243_30255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30237 === (8))){
var inst_30228 = (state_30236[(2)]);
var state_30236__$1 = (function (){var statearr_30244 = state_30236;
(statearr_30244[(8)] = inst_30228);

return statearr_30244;
})();
var statearr_30245_30256 = state_30236__$1;
(statearr_30245_30256[(2)] = null);

(statearr_30245_30256[(1)] = (2));


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
});})(c__25909__auto___30250,ch))
;
return ((function (switch__25814__auto__,c__25909__auto___30250,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25815__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25815__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25815__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var figwheel$client$heads_up_plugin_$_state_machine__25815__auto____1 = (function (state_30236){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_30236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e30247){if((e30247 instanceof Object)){
var ex__25818__auto__ = e30247;
var statearr_30248_30257 = state_30236;
(statearr_30248_30257[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30258 = state_30236;
state_30236 = G__30258;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25815__auto__ = function(state_30236){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25815__auto____1.call(this,state_30236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25815__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25815__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___30250,ch))
})();
var state__25911__auto__ = (function (){var statearr_30249 = f__25910__auto__.call(null);
(statearr_30249[(6)] = c__25909__auto___30250);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___30250,ch))
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
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__){
return (function (state_30264){
var state_val_30265 = (state_30264[(1)]);
if((state_val_30265 === (1))){
var inst_30259 = cljs.core.async.timeout.call(null,(3000));
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30264__$1,(2),inst_30259);
} else {
if((state_val_30265 === (2))){
var inst_30261 = (state_30264[(2)]);
var inst_30262 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30264__$1 = (function (){var statearr_30266 = state_30264;
(statearr_30266[(7)] = inst_30261);

return statearr_30266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30264__$1,inst_30262);
} else {
return null;
}
}
});})(c__25909__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____0 = (function (){
var statearr_30267 = [null,null,null,null,null,null,null,null];
(statearr_30267[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__);

(statearr_30267[(1)] = (1));

return statearr_30267;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____1 = (function (state_30264){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_30264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e30268){if((e30268 instanceof Object)){
var ex__25818__auto__ = e30268;
var statearr_30269_30271 = state_30264;
(statearr_30269_30271[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30272 = state_30264;
state_30264 = G__30272;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__ = function(state_30264){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____1.call(this,state_30264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25815__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__))
})();
var state__25911__auto__ = (function (){var statearr_30270 = f__25910__auto__.call(null);
(statearr_30270[(6)] = c__25909__auto__);

return statearr_30270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__))
);

return c__25909__auto__;
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
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30279){
var state_val_30280 = (state_30279[(1)]);
if((state_val_30280 === (1))){
var inst_30273 = cljs.core.async.timeout.call(null,(2000));
var state_30279__$1 = state_30279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30279__$1,(2),inst_30273);
} else {
if((state_val_30280 === (2))){
var inst_30275 = (state_30279[(2)]);
var inst_30276 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30277 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30276);
var state_30279__$1 = (function (){var statearr_30281 = state_30279;
(statearr_30281[(7)] = inst_30275);

return statearr_30281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30279__$1,inst_30277);
} else {
return null;
}
}
});})(c__25909__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____0 = (function (){
var statearr_30282 = [null,null,null,null,null,null,null,null];
(statearr_30282[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__);

(statearr_30282[(1)] = (1));

return statearr_30282;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____1 = (function (state_30279){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_30279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e30283){if((e30283 instanceof Object)){
var ex__25818__auto__ = e30283;
var statearr_30284_30286 = state_30279;
(statearr_30284_30286[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30287 = state_30279;
state_30279 = G__30287;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__ = function(state_30279){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____1.call(this,state_30279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25911__auto__ = (function (){var statearr_30285 = f__25910__auto__.call(null);
(statearr_30285[(6)] = c__25909__auto__);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__,figwheel_version,temp__5720__auto__))
);

return c__25909__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30288){
var map__30289 = p__30288;
var map__30289__$1 = (((((!((map__30289 == null))))?(((((map__30289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);
var file = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30291 = "";
var G__30291__$1 = (cljs.core.truth_(file)?[G__30291,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30291);
var G__30291__$2 = (cljs.core.truth_(line)?[G__30291__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30291__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30291__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30291__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30292){
var map__30293 = p__30292;
var map__30293__$1 = (((((!((map__30293 == null))))?(((((map__30293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);
var ed = map__30293__$1;
var exception_data = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30296 = (function (){var G__30295 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30295)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30295;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30296);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30297){
var map__30298 = p__30297;
var map__30298__$1 = (((((!((map__30298 == null))))?(((((map__30298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30298):map__30298);
var w = map__30298__$1;
var message = cljs.core.get.call(null,map__30298__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30300 = cljs.core.seq.call(null,plugins);
var chunk__30301 = null;
var count__30302 = (0);
var i__30303 = (0);
while(true){
if((i__30303 < count__30302)){
var vec__30310 = cljs.core._nth.call(null,chunk__30301,i__30303);
var k = cljs.core.nth.call(null,vec__30310,(0),null);
var plugin = cljs.core.nth.call(null,vec__30310,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30316 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30300,chunk__30301,count__30302,i__30303,pl_30316,vec__30310,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30316.call(null,msg_hist);
});})(seq__30300,chunk__30301,count__30302,i__30303,pl_30316,vec__30310,k,plugin))
);
} else {
}


var G__30317 = seq__30300;
var G__30318 = chunk__30301;
var G__30319 = count__30302;
var G__30320 = (i__30303 + (1));
seq__30300 = G__30317;
chunk__30301 = G__30318;
count__30302 = G__30319;
i__30303 = G__30320;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30300);
if(temp__5720__auto__){
var seq__30300__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30300__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30300__$1);
var G__30321 = cljs.core.chunk_rest.call(null,seq__30300__$1);
var G__30322 = c__4550__auto__;
var G__30323 = cljs.core.count.call(null,c__4550__auto__);
var G__30324 = (0);
seq__30300 = G__30321;
chunk__30301 = G__30322;
count__30302 = G__30323;
i__30303 = G__30324;
continue;
} else {
var vec__30313 = cljs.core.first.call(null,seq__30300__$1);
var k = cljs.core.nth.call(null,vec__30313,(0),null);
var plugin = cljs.core.nth.call(null,vec__30313,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30325 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30300,chunk__30301,count__30302,i__30303,pl_30325,vec__30313,k,plugin,seq__30300__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30325.call(null,msg_hist);
});})(seq__30300,chunk__30301,count__30302,i__30303,pl_30325,vec__30313,k,plugin,seq__30300__$1,temp__5720__auto__))
);
} else {
}


var G__30326 = cljs.core.next.call(null,seq__30300__$1);
var G__30327 = null;
var G__30328 = (0);
var G__30329 = (0);
seq__30300 = G__30326;
chunk__30301 = G__30327;
count__30302 = G__30328;
i__30303 = G__30329;
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
var G__30331 = arguments.length;
switch (G__30331) {
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

var seq__30332_30337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30333_30338 = null;
var count__30334_30339 = (0);
var i__30335_30340 = (0);
while(true){
if((i__30335_30340 < count__30334_30339)){
var msg_30341 = cljs.core._nth.call(null,chunk__30333_30338,i__30335_30340);
figwheel.client.socket.handle_incoming_message.call(null,msg_30341);


var G__30342 = seq__30332_30337;
var G__30343 = chunk__30333_30338;
var G__30344 = count__30334_30339;
var G__30345 = (i__30335_30340 + (1));
seq__30332_30337 = G__30342;
chunk__30333_30338 = G__30343;
count__30334_30339 = G__30344;
i__30335_30340 = G__30345;
continue;
} else {
var temp__5720__auto___30346 = cljs.core.seq.call(null,seq__30332_30337);
if(temp__5720__auto___30346){
var seq__30332_30347__$1 = temp__5720__auto___30346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30332_30347__$1)){
var c__4550__auto___30348 = cljs.core.chunk_first.call(null,seq__30332_30347__$1);
var G__30349 = cljs.core.chunk_rest.call(null,seq__30332_30347__$1);
var G__30350 = c__4550__auto___30348;
var G__30351 = cljs.core.count.call(null,c__4550__auto___30348);
var G__30352 = (0);
seq__30332_30337 = G__30349;
chunk__30333_30338 = G__30350;
count__30334_30339 = G__30351;
i__30335_30340 = G__30352;
continue;
} else {
var msg_30353 = cljs.core.first.call(null,seq__30332_30347__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30353);


var G__30354 = cljs.core.next.call(null,seq__30332_30347__$1);
var G__30355 = null;
var G__30356 = (0);
var G__30357 = (0);
seq__30332_30337 = G__30354;
chunk__30333_30338 = G__30355;
count__30334_30339 = G__30356;
i__30335_30340 = G__30357;
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
var len__4730__auto___30362 = arguments.length;
var i__4731__auto___30363 = (0);
while(true){
if((i__4731__auto___30363 < len__4730__auto___30362)){
args__4736__auto__.push((arguments[i__4731__auto___30363]));

var G__30364 = (i__4731__auto___30363 + (1));
i__4731__auto___30363 = G__30364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30359){
var map__30360 = p__30359;
var map__30360__$1 = (((((!((map__30360 == null))))?(((((map__30360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30360):map__30360);
var opts = map__30360__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30358));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30365){if((e30365 instanceof Error)){
var e = e30365;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30365;

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
return (function (p__30366){
var map__30367 = p__30366;
var map__30367__$1 = (((((!((map__30367 == null))))?(((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30367):map__30367);
var msg_name = cljs.core.get.call(null,map__30367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1592614563264
