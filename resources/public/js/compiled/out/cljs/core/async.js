// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25969 = arguments.length;
switch (G__25969) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25970 = (function (f,blockable,meta25971){
this.f = f;
this.blockable = blockable;
this.meta25971 = meta25971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25972,meta25971__$1){
var self__ = this;
var _25972__$1 = this;
return (new cljs.core.async.t_cljs$core$async25970(self__.f,self__.blockable,meta25971__$1));
});

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25972){
var self__ = this;
var _25972__$1 = this;
return self__.meta25971;
});

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25971","meta25971",-1841489365,null)], null);
});

cljs.core.async.t_cljs$core$async25970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25970";

cljs.core.async.t_cljs$core$async25970.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25970");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25970.
 */
cljs.core.async.__GT_t_cljs$core$async25970 = (function cljs$core$async$__GT_t_cljs$core$async25970(f__$1,blockable__$1,meta25971){
return (new cljs.core.async.t_cljs$core$async25970(f__$1,blockable__$1,meta25971));
});

}

return (new cljs.core.async.t_cljs$core$async25970(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25976 = arguments.length;
switch (G__25976) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25979 = arguments.length;
switch (G__25979) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25982 = arguments.length;
switch (G__25982) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25984 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25984);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25984,ret){
return (function (){
return fn1.call(null,val_25984);
});})(val_25984,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25986 = arguments.length;
switch (G__25986) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___25988 = n;
var x_25989 = (0);
while(true){
if((x_25989 < n__4607__auto___25988)){
(a[x_25989] = x_25989);

var G__25990 = (x_25989 + (1));
x_25989 = G__25990;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25991 = (function (flag,meta25992){
this.flag = flag;
this.meta25992 = meta25992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25993,meta25992__$1){
var self__ = this;
var _25993__$1 = this;
return (new cljs.core.async.t_cljs$core$async25991(self__.flag,meta25992__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25993){
var self__ = this;
var _25993__$1 = this;
return self__.meta25992;
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25992","meta25992",1524374905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25991";

cljs.core.async.t_cljs$core$async25991.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25991");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25991.
 */
cljs.core.async.__GT_t_cljs$core$async25991 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25991(flag__$1,meta25992){
return (new cljs.core.async.t_cljs$core$async25991(flag__$1,meta25992));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25991(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25994 = (function (flag,cb,meta25995){
this.flag = flag;
this.cb = cb;
this.meta25995 = meta25995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25996,meta25995__$1){
var self__ = this;
var _25996__$1 = this;
return (new cljs.core.async.t_cljs$core$async25994(self__.flag,self__.cb,meta25995__$1));
});

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25996){
var self__ = this;
var _25996__$1 = this;
return self__.meta25995;
});

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25995","meta25995",535631574,null)], null);
});

cljs.core.async.t_cljs$core$async25994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25994";

cljs.core.async.t_cljs$core$async25994.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25994");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25994.
 */
cljs.core.async.__GT_t_cljs$core$async25994 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25994(flag__$1,cb__$1,meta25995){
return (new cljs.core.async.t_cljs$core$async25994(flag__$1,cb__$1,meta25995));
});

}

return (new cljs.core.async.t_cljs$core$async25994(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25997_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25997_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25998_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25998_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25999 = (i + (1));
i = G__25999;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26005 = arguments.length;
var i__4731__auto___26006 = (0);
while(true){
if((i__4731__auto___26006 < len__4730__auto___26005)){
args__4736__auto__.push((arguments[i__4731__auto___26006]));

var G__26007 = (i__4731__auto___26006 + (1));
i__4731__auto___26006 = G__26007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26002){
var map__26003 = p__26002;
var map__26003__$1 = (((((!((map__26003 == null))))?(((((map__26003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26003):map__26003);
var opts = map__26003__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26000){
var G__26001 = cljs.core.first.call(null,seq26000);
var seq26000__$1 = cljs.core.next.call(null,seq26000);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26001,seq26000__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26009 = arguments.length;
switch (G__26009) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25909__auto___26055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26055){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26055){
return (function (state_26033){
var state_val_26034 = (state_26033[(1)]);
if((state_val_26034 === (7))){
var inst_26029 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26035_26056 = state_26033__$1;
(statearr_26035_26056[(2)] = inst_26029);

(statearr_26035_26056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (1))){
var state_26033__$1 = state_26033;
var statearr_26036_26057 = state_26033__$1;
(statearr_26036_26057[(2)] = null);

(statearr_26036_26057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (4))){
var inst_26012 = (state_26033[(7)]);
var inst_26012__$1 = (state_26033[(2)]);
var inst_26013 = (inst_26012__$1 == null);
var state_26033__$1 = (function (){var statearr_26037 = state_26033;
(statearr_26037[(7)] = inst_26012__$1);

return statearr_26037;
})();
if(cljs.core.truth_(inst_26013)){
var statearr_26038_26058 = state_26033__$1;
(statearr_26038_26058[(1)] = (5));

} else {
var statearr_26039_26059 = state_26033__$1;
(statearr_26039_26059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (13))){
var state_26033__$1 = state_26033;
var statearr_26040_26060 = state_26033__$1;
(statearr_26040_26060[(2)] = null);

(statearr_26040_26060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (6))){
var inst_26012 = (state_26033[(7)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(11),to,inst_26012);
} else {
if((state_val_26034 === (3))){
var inst_26031 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26033__$1,inst_26031);
} else {
if((state_val_26034 === (12))){
var state_26033__$1 = state_26033;
var statearr_26041_26061 = state_26033__$1;
(statearr_26041_26061[(2)] = null);

(statearr_26041_26061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (2))){
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26033__$1,(4),from);
} else {
if((state_val_26034 === (11))){
var inst_26022 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
if(cljs.core.truth_(inst_26022)){
var statearr_26042_26062 = state_26033__$1;
(statearr_26042_26062[(1)] = (12));

} else {
var statearr_26043_26063 = state_26033__$1;
(statearr_26043_26063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (9))){
var state_26033__$1 = state_26033;
var statearr_26044_26064 = state_26033__$1;
(statearr_26044_26064[(2)] = null);

(statearr_26044_26064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (5))){
var state_26033__$1 = state_26033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26045_26065 = state_26033__$1;
(statearr_26045_26065[(1)] = (8));

} else {
var statearr_26046_26066 = state_26033__$1;
(statearr_26046_26066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (14))){
var inst_26027 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26047_26067 = state_26033__$1;
(statearr_26047_26067[(2)] = inst_26027);

(statearr_26047_26067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (10))){
var inst_26019 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26048_26068 = state_26033__$1;
(statearr_26048_26068[(2)] = inst_26019);

(statearr_26048_26068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (8))){
var inst_26016 = cljs.core.async.close_BANG_.call(null,to);
var state_26033__$1 = state_26033;
var statearr_26049_26069 = state_26033__$1;
(statearr_26049_26069[(2)] = inst_26016);

(statearr_26049_26069[(1)] = (10));


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
});})(c__25909__auto___26055))
;
return ((function (switch__25814__auto__,c__25909__auto___26055){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_26050 = [null,null,null,null,null,null,null,null];
(statearr_26050[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_26050[(1)] = (1));

return statearr_26050;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_26033){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26051){if((e26051 instanceof Object)){
var ex__25818__auto__ = e26051;
var statearr_26052_26070 = state_26033;
(statearr_26052_26070[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26071 = state_26033;
state_26033 = G__26071;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26055))
})();
var state__25911__auto__ = (function (){var statearr_26053 = f__25910__auto__.call(null);
(statearr_26053[(6)] = c__25909__auto___26055);

return statearr_26053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26055))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26072){
var vec__26073 = p__26072;
var v = cljs.core.nth.call(null,vec__26073,(0),null);
var p = cljs.core.nth.call(null,vec__26073,(1),null);
var job = vec__26073;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25909__auto___26244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results){
return (function (state_26080){
var state_val_26081 = (state_26080[(1)]);
if((state_val_26081 === (1))){
var state_26080__$1 = state_26080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26080__$1,(2),res,v);
} else {
if((state_val_26081 === (2))){
var inst_26077 = (state_26080[(2)]);
var inst_26078 = cljs.core.async.close_BANG_.call(null,res);
var state_26080__$1 = (function (){var statearr_26082 = state_26080;
(statearr_26082[(7)] = inst_26077);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26080__$1,inst_26078);
} else {
return null;
}
}
});})(c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results))
;
return ((function (switch__25814__auto__,c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_26083 = [null,null,null,null,null,null,null,null];
(statearr_26083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__);

(statearr_26083[(1)] = (1));

return statearr_26083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1 = (function (state_26080){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26084){if((e26084 instanceof Object)){
var ex__25818__auto__ = e26084;
var statearr_26085_26245 = state_26080;
(statearr_26085_26245[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26246 = state_26080;
state_26080 = G__26246;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = function(state_26080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1.call(this,state_26080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results))
})();
var state__25911__auto__ = (function (){var statearr_26086 = f__25910__auto__.call(null);
(statearr_26086[(6)] = c__25909__auto___26244);

return statearr_26086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26244,res,vec__26073,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26087){
var vec__26088 = p__26087;
var v = cljs.core.nth.call(null,vec__26088,(0),null);
var p = cljs.core.nth.call(null,vec__26088,(1),null);
var job = vec__26088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___26247 = n;
var __26248 = (0);
while(true){
if((__26248 < n__4607__auto___26247)){
var G__26091_26249 = type;
var G__26091_26250__$1 = (((G__26091_26249 instanceof cljs.core.Keyword))?G__26091_26249.fqn:null);
switch (G__26091_26250__$1) {
case "compute":
var c__25909__auto___26252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26248,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (__26248,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (1))){
var state_26104__$1 = state_26104;
var statearr_26106_26253 = state_26104__$1;
(statearr_26106_26253[(2)] = null);

(statearr_26106_26253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (2))){
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26104__$1,(4),jobs);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else {
if((state_val_26105 === (4))){
var inst_26094 = (state_26104[(2)]);
var inst_26095 = process.call(null,inst_26094);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26095)){
var statearr_26107_26254 = state_26104__$1;
(statearr_26107_26254[(1)] = (5));

} else {
var statearr_26108_26255 = state_26104__$1;
(statearr_26108_26255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (5))){
var state_26104__$1 = state_26104;
var statearr_26109_26256 = state_26104__$1;
(statearr_26109_26256[(2)] = null);

(statearr_26109_26256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (6))){
var state_26104__$1 = state_26104;
var statearr_26110_26257 = state_26104__$1;
(statearr_26110_26257[(2)] = null);

(statearr_26110_26257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (7))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26111_26258 = state_26104__$1;
(statearr_26111_26258[(2)] = inst_26100);

(statearr_26111_26258[(1)] = (3));


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
});})(__26248,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
;
return ((function (__26248,switch__25814__auto__,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_26112 = [null,null,null,null,null,null,null];
(statearr_26112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__);

(statearr_26112[(1)] = (1));

return statearr_26112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1 = (function (state_26104){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26113){if((e26113 instanceof Object)){
var ex__25818__auto__ = e26113;
var statearr_26114_26259 = state_26104;
(statearr_26114_26259[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26260 = state_26104;
state_26104 = G__26260;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__;
})()
;})(__26248,switch__25814__auto__,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
})();
var state__25911__auto__ = (function (){var statearr_26115 = f__25910__auto__.call(null);
(statearr_26115[(6)] = c__25909__auto___26252);

return statearr_26115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(__26248,c__25909__auto___26252,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
);


break;
case "async":
var c__25909__auto___26261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26248,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (__26248,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (1))){
var state_26128__$1 = state_26128;
var statearr_26130_26262 = state_26128__$1;
(statearr_26130_26262[(2)] = null);

(statearr_26130_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (2))){
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),jobs);
} else {
if((state_val_26129 === (3))){
var inst_26126 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (4))){
var inst_26118 = (state_26128[(2)]);
var inst_26119 = async.call(null,inst_26118);
var state_26128__$1 = state_26128;
if(cljs.core.truth_(inst_26119)){
var statearr_26131_26263 = state_26128__$1;
(statearr_26131_26263[(1)] = (5));

} else {
var statearr_26132_26264 = state_26128__$1;
(statearr_26132_26264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (5))){
var state_26128__$1 = state_26128;
var statearr_26133_26265 = state_26128__$1;
(statearr_26133_26265[(2)] = null);

(statearr_26133_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (6))){
var state_26128__$1 = state_26128;
var statearr_26134_26266 = state_26128__$1;
(statearr_26134_26266[(2)] = null);

(statearr_26134_26266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (7))){
var inst_26124 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26135_26267 = state_26128__$1;
(statearr_26135_26267[(2)] = inst_26124);

(statearr_26135_26267[(1)] = (3));


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
});})(__26248,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
;
return ((function (__26248,switch__25814__auto__,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_26136 = [null,null,null,null,null,null,null];
(statearr_26136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__);

(statearr_26136[(1)] = (1));

return statearr_26136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1 = (function (state_26128){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26137){if((e26137 instanceof Object)){
var ex__25818__auto__ = e26137;
var statearr_26138_26268 = state_26128;
(statearr_26138_26268[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26269 = state_26128;
state_26128 = G__26269;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__;
})()
;})(__26248,switch__25814__auto__,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
})();
var state__25911__auto__ = (function (){var statearr_26139 = f__25910__auto__.call(null);
(statearr_26139[(6)] = c__25909__auto___26261);

return statearr_26139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(__26248,c__25909__auto___26261,G__26091_26249,G__26091_26250__$1,n__4607__auto___26247,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26091_26250__$1)].join('')));

}

var G__26270 = (__26248 + (1));
__26248 = G__26270;
continue;
} else {
}
break;
}

var c__25909__auto___26271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26271,jobs,results,process,async){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26271,jobs,results,process,async){
return (function (state_26161){
var state_val_26162 = (state_26161[(1)]);
if((state_val_26162 === (7))){
var inst_26157 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26163_26272 = state_26161__$1;
(statearr_26163_26272[(2)] = inst_26157);

(statearr_26163_26272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (1))){
var state_26161__$1 = state_26161;
var statearr_26164_26273 = state_26161__$1;
(statearr_26164_26273[(2)] = null);

(statearr_26164_26273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (4))){
var inst_26142 = (state_26161[(7)]);
var inst_26142__$1 = (state_26161[(2)]);
var inst_26143 = (inst_26142__$1 == null);
var state_26161__$1 = (function (){var statearr_26165 = state_26161;
(statearr_26165[(7)] = inst_26142__$1);

return statearr_26165;
})();
if(cljs.core.truth_(inst_26143)){
var statearr_26166_26274 = state_26161__$1;
(statearr_26166_26274[(1)] = (5));

} else {
var statearr_26167_26275 = state_26161__$1;
(statearr_26167_26275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (6))){
var inst_26147 = (state_26161[(8)]);
var inst_26142 = (state_26161[(7)]);
var inst_26147__$1 = cljs.core.async.chan.call(null,(1));
var inst_26148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26149 = [inst_26142,inst_26147__$1];
var inst_26150 = (new cljs.core.PersistentVector(null,2,(5),inst_26148,inst_26149,null));
var state_26161__$1 = (function (){var statearr_26168 = state_26161;
(statearr_26168[(8)] = inst_26147__$1);

return statearr_26168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26161__$1,(8),jobs,inst_26150);
} else {
if((state_val_26162 === (3))){
var inst_26159 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26161__$1,inst_26159);
} else {
if((state_val_26162 === (2))){
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26161__$1,(4),from);
} else {
if((state_val_26162 === (9))){
var inst_26154 = (state_26161[(2)]);
var state_26161__$1 = (function (){var statearr_26169 = state_26161;
(statearr_26169[(9)] = inst_26154);

return statearr_26169;
})();
var statearr_26170_26276 = state_26161__$1;
(statearr_26170_26276[(2)] = null);

(statearr_26170_26276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (5))){
var inst_26145 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26161__$1 = state_26161;
var statearr_26171_26277 = state_26161__$1;
(statearr_26171_26277[(2)] = inst_26145);

(statearr_26171_26277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (8))){
var inst_26147 = (state_26161[(8)]);
var inst_26152 = (state_26161[(2)]);
var state_26161__$1 = (function (){var statearr_26172 = state_26161;
(statearr_26172[(10)] = inst_26152);

return statearr_26172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26161__$1,(9),results,inst_26147);
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
});})(c__25909__auto___26271,jobs,results,process,async))
;
return ((function (switch__25814__auto__,c__25909__auto___26271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_26173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__);

(statearr_26173[(1)] = (1));

return statearr_26173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1 = (function (state_26161){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26174){if((e26174 instanceof Object)){
var ex__25818__auto__ = e26174;
var statearr_26175_26278 = state_26161;
(statearr_26175_26278[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26279 = state_26161;
state_26161 = G__26279;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = function(state_26161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1.call(this,state_26161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26271,jobs,results,process,async))
})();
var state__25911__auto__ = (function (){var statearr_26176 = f__25910__auto__.call(null);
(statearr_26176[(6)] = c__25909__auto___26271);

return statearr_26176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26271,jobs,results,process,async))
);


var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__,jobs,results,process,async){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__,jobs,results,process,async){
return (function (state_26214){
var state_val_26215 = (state_26214[(1)]);
if((state_val_26215 === (7))){
var inst_26210 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26216_26280 = state_26214__$1;
(statearr_26216_26280[(2)] = inst_26210);

(statearr_26216_26280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (20))){
var state_26214__$1 = state_26214;
var statearr_26217_26281 = state_26214__$1;
(statearr_26217_26281[(2)] = null);

(statearr_26217_26281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (1))){
var state_26214__$1 = state_26214;
var statearr_26218_26282 = state_26214__$1;
(statearr_26218_26282[(2)] = null);

(statearr_26218_26282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (4))){
var inst_26179 = (state_26214[(7)]);
var inst_26179__$1 = (state_26214[(2)]);
var inst_26180 = (inst_26179__$1 == null);
var state_26214__$1 = (function (){var statearr_26219 = state_26214;
(statearr_26219[(7)] = inst_26179__$1);

return statearr_26219;
})();
if(cljs.core.truth_(inst_26180)){
var statearr_26220_26283 = state_26214__$1;
(statearr_26220_26283[(1)] = (5));

} else {
var statearr_26221_26284 = state_26214__$1;
(statearr_26221_26284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (15))){
var inst_26192 = (state_26214[(8)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26214__$1,(18),to,inst_26192);
} else {
if((state_val_26215 === (21))){
var inst_26205 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26222_26285 = state_26214__$1;
(statearr_26222_26285[(2)] = inst_26205);

(statearr_26222_26285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (13))){
var inst_26207 = (state_26214[(2)]);
var state_26214__$1 = (function (){var statearr_26223 = state_26214;
(statearr_26223[(9)] = inst_26207);

return statearr_26223;
})();
var statearr_26224_26286 = state_26214__$1;
(statearr_26224_26286[(2)] = null);

(statearr_26224_26286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (6))){
var inst_26179 = (state_26214[(7)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(11),inst_26179);
} else {
if((state_val_26215 === (17))){
var inst_26200 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
if(cljs.core.truth_(inst_26200)){
var statearr_26225_26287 = state_26214__$1;
(statearr_26225_26287[(1)] = (19));

} else {
var statearr_26226_26288 = state_26214__$1;
(statearr_26226_26288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (3))){
var inst_26212 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26214__$1,inst_26212);
} else {
if((state_val_26215 === (12))){
var inst_26189 = (state_26214[(10)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(14),inst_26189);
} else {
if((state_val_26215 === (2))){
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(4),results);
} else {
if((state_val_26215 === (19))){
var state_26214__$1 = state_26214;
var statearr_26227_26289 = state_26214__$1;
(statearr_26227_26289[(2)] = null);

(statearr_26227_26289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (11))){
var inst_26189 = (state_26214[(2)]);
var state_26214__$1 = (function (){var statearr_26228 = state_26214;
(statearr_26228[(10)] = inst_26189);

return statearr_26228;
})();
var statearr_26229_26290 = state_26214__$1;
(statearr_26229_26290[(2)] = null);

(statearr_26229_26290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (9))){
var state_26214__$1 = state_26214;
var statearr_26230_26291 = state_26214__$1;
(statearr_26230_26291[(2)] = null);

(statearr_26230_26291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (5))){
var state_26214__$1 = state_26214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26231_26292 = state_26214__$1;
(statearr_26231_26292[(1)] = (8));

} else {
var statearr_26232_26293 = state_26214__$1;
(statearr_26232_26293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (14))){
var inst_26194 = (state_26214[(11)]);
var inst_26192 = (state_26214[(8)]);
var inst_26192__$1 = (state_26214[(2)]);
var inst_26193 = (inst_26192__$1 == null);
var inst_26194__$1 = cljs.core.not.call(null,inst_26193);
var state_26214__$1 = (function (){var statearr_26233 = state_26214;
(statearr_26233[(11)] = inst_26194__$1);

(statearr_26233[(8)] = inst_26192__$1);

return statearr_26233;
})();
if(inst_26194__$1){
var statearr_26234_26294 = state_26214__$1;
(statearr_26234_26294[(1)] = (15));

} else {
var statearr_26235_26295 = state_26214__$1;
(statearr_26235_26295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (16))){
var inst_26194 = (state_26214[(11)]);
var state_26214__$1 = state_26214;
var statearr_26236_26296 = state_26214__$1;
(statearr_26236_26296[(2)] = inst_26194);

(statearr_26236_26296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (10))){
var inst_26186 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26237_26297 = state_26214__$1;
(statearr_26237_26297[(2)] = inst_26186);

(statearr_26237_26297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (18))){
var inst_26197 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26238_26298 = state_26214__$1;
(statearr_26238_26298[(2)] = inst_26197);

(statearr_26238_26298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (8))){
var inst_26183 = cljs.core.async.close_BANG_.call(null,to);
var state_26214__$1 = state_26214;
var statearr_26239_26299 = state_26214__$1;
(statearr_26239_26299[(2)] = inst_26183);

(statearr_26239_26299[(1)] = (10));


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
});})(c__25909__auto__,jobs,results,process,async))
;
return ((function (switch__25814__auto__,c__25909__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_26240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__);

(statearr_26240[(1)] = (1));

return statearr_26240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1 = (function (state_26214){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26241){if((e26241 instanceof Object)){
var ex__25818__auto__ = e26241;
var statearr_26242_26300 = state_26214;
(statearr_26242_26300[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26301 = state_26214;
state_26214 = G__26301;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__ = function(state_26214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1.call(this,state_26214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__,jobs,results,process,async))
})();
var state__25911__auto__ = (function (){var statearr_26243 = f__25910__auto__.call(null);
(statearr_26243[(6)] = c__25909__auto__);

return statearr_26243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__,jobs,results,process,async))
);

return c__25909__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26303 = arguments.length;
switch (G__26303) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26306 = arguments.length;
switch (G__26306) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26309 = arguments.length;
switch (G__26309) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25909__auto___26358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26358,tc,fc){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26358,tc,fc){
return (function (state_26335){
var state_val_26336 = (state_26335[(1)]);
if((state_val_26336 === (7))){
var inst_26331 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26337_26359 = state_26335__$1;
(statearr_26337_26359[(2)] = inst_26331);

(statearr_26337_26359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (1))){
var state_26335__$1 = state_26335;
var statearr_26338_26360 = state_26335__$1;
(statearr_26338_26360[(2)] = null);

(statearr_26338_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (4))){
var inst_26312 = (state_26335[(7)]);
var inst_26312__$1 = (state_26335[(2)]);
var inst_26313 = (inst_26312__$1 == null);
var state_26335__$1 = (function (){var statearr_26339 = state_26335;
(statearr_26339[(7)] = inst_26312__$1);

return statearr_26339;
})();
if(cljs.core.truth_(inst_26313)){
var statearr_26340_26361 = state_26335__$1;
(statearr_26340_26361[(1)] = (5));

} else {
var statearr_26341_26362 = state_26335__$1;
(statearr_26341_26362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (13))){
var state_26335__$1 = state_26335;
var statearr_26342_26363 = state_26335__$1;
(statearr_26342_26363[(2)] = null);

(statearr_26342_26363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (6))){
var inst_26312 = (state_26335[(7)]);
var inst_26318 = p.call(null,inst_26312);
var state_26335__$1 = state_26335;
if(cljs.core.truth_(inst_26318)){
var statearr_26343_26364 = state_26335__$1;
(statearr_26343_26364[(1)] = (9));

} else {
var statearr_26344_26365 = state_26335__$1;
(statearr_26344_26365[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (3))){
var inst_26333 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26335__$1,inst_26333);
} else {
if((state_val_26336 === (12))){
var state_26335__$1 = state_26335;
var statearr_26345_26366 = state_26335__$1;
(statearr_26345_26366[(2)] = null);

(statearr_26345_26366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (2))){
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26335__$1,(4),ch);
} else {
if((state_val_26336 === (11))){
var inst_26312 = (state_26335[(7)]);
var inst_26322 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26335__$1,(8),inst_26322,inst_26312);
} else {
if((state_val_26336 === (9))){
var state_26335__$1 = state_26335;
var statearr_26346_26367 = state_26335__$1;
(statearr_26346_26367[(2)] = tc);

(statearr_26346_26367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (5))){
var inst_26315 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26316 = cljs.core.async.close_BANG_.call(null,fc);
var state_26335__$1 = (function (){var statearr_26347 = state_26335;
(statearr_26347[(8)] = inst_26315);

return statearr_26347;
})();
var statearr_26348_26368 = state_26335__$1;
(statearr_26348_26368[(2)] = inst_26316);

(statearr_26348_26368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (14))){
var inst_26329 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26349_26369 = state_26335__$1;
(statearr_26349_26369[(2)] = inst_26329);

(statearr_26349_26369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (10))){
var state_26335__$1 = state_26335;
var statearr_26350_26370 = state_26335__$1;
(statearr_26350_26370[(2)] = fc);

(statearr_26350_26370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (8))){
var inst_26324 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
if(cljs.core.truth_(inst_26324)){
var statearr_26351_26371 = state_26335__$1;
(statearr_26351_26371[(1)] = (12));

} else {
var statearr_26352_26372 = state_26335__$1;
(statearr_26352_26372[(1)] = (13));

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
});})(c__25909__auto___26358,tc,fc))
;
return ((function (switch__25814__auto__,c__25909__auto___26358,tc,fc){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_26353 = [null,null,null,null,null,null,null,null,null];
(statearr_26353[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_26353[(1)] = (1));

return statearr_26353;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_26335){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26354){if((e26354 instanceof Object)){
var ex__25818__auto__ = e26354;
var statearr_26355_26373 = state_26335;
(statearr_26355_26373[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26374 = state_26335;
state_26335 = G__26374;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_26335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_26335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26358,tc,fc))
})();
var state__25911__auto__ = (function (){var statearr_26356 = f__25910__auto__.call(null);
(statearr_26356[(6)] = c__25909__auto___26358);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26358,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var inst_26391 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26397_26415 = state_26395__$1;
(statearr_26397_26415[(2)] = inst_26391);

(statearr_26397_26415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var inst_26375 = init;
var state_26395__$1 = (function (){var statearr_26398 = state_26395;
(statearr_26398[(7)] = inst_26375);

return statearr_26398;
})();
var statearr_26399_26416 = state_26395__$1;
(statearr_26399_26416[(2)] = null);

(statearr_26399_26416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26378 = (state_26395[(8)]);
var inst_26378__$1 = (state_26395[(2)]);
var inst_26379 = (inst_26378__$1 == null);
var state_26395__$1 = (function (){var statearr_26400 = state_26395;
(statearr_26400[(8)] = inst_26378__$1);

return statearr_26400;
})();
if(cljs.core.truth_(inst_26379)){
var statearr_26401_26417 = state_26395__$1;
(statearr_26401_26417[(1)] = (5));

} else {
var statearr_26402_26418 = state_26395__$1;
(statearr_26402_26418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var inst_26378 = (state_26395[(8)]);
var inst_26382 = (state_26395[(9)]);
var inst_26375 = (state_26395[(7)]);
var inst_26382__$1 = f.call(null,inst_26375,inst_26378);
var inst_26383 = cljs.core.reduced_QMARK_.call(null,inst_26382__$1);
var state_26395__$1 = (function (){var statearr_26403 = state_26395;
(statearr_26403[(9)] = inst_26382__$1);

return statearr_26403;
})();
if(inst_26383){
var statearr_26404_26419 = state_26395__$1;
(statearr_26404_26419[(1)] = (8));

} else {
var statearr_26405_26420 = state_26395__$1;
(statearr_26405_26420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (3))){
var inst_26393 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (2))){
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(4),ch);
} else {
if((state_val_26396 === (9))){
var inst_26382 = (state_26395[(9)]);
var inst_26375 = inst_26382;
var state_26395__$1 = (function (){var statearr_26406 = state_26395;
(statearr_26406[(7)] = inst_26375);

return statearr_26406;
})();
var statearr_26407_26421 = state_26395__$1;
(statearr_26407_26421[(2)] = null);

(statearr_26407_26421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (5))){
var inst_26375 = (state_26395[(7)]);
var state_26395__$1 = state_26395;
var statearr_26408_26422 = state_26395__$1;
(statearr_26408_26422[(2)] = inst_26375);

(statearr_26408_26422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (10))){
var inst_26389 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26409_26423 = state_26395__$1;
(statearr_26409_26423[(2)] = inst_26389);

(statearr_26409_26423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26382 = (state_26395[(9)]);
var inst_26385 = cljs.core.deref.call(null,inst_26382);
var state_26395__$1 = state_26395;
var statearr_26410_26424 = state_26395__$1;
(statearr_26410_26424[(2)] = inst_26385);

(statearr_26410_26424[(1)] = (10));


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
});})(c__25909__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25815__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25815__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = cljs$core$async$reduce_$_state_machine__25815__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var cljs$core$async$reduce_$_state_machine__25815__auto____1 = (function (state_26395){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__25818__auto__ = e26412;
var statearr_26413_26425 = state_26395;
(statearr_26413_26425[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26395;
state_26395 = G__26426;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25815__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25815__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25815__auto____0;
cljs$core$async$reduce_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25815__auto____1;
return cljs$core$async$reduce_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__))
})();
var state__25911__auto__ = (function (){var statearr_26414 = f__25910__auto__.call(null);
(statearr_26414[(6)] = c__25909__auto__);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__))
);

return c__25909__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__,f__$1){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__,f__$1){
return (function (state_26432){
var state_val_26433 = (state_26432[(1)]);
if((state_val_26433 === (1))){
var inst_26427 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26432__$1,(2),inst_26427);
} else {
if((state_val_26433 === (2))){
var inst_26429 = (state_26432[(2)]);
var inst_26430 = f__$1.call(null,inst_26429);
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26432__$1,inst_26430);
} else {
return null;
}
}
});})(c__25909__auto__,f__$1))
;
return ((function (switch__25814__auto__,c__25909__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25815__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25815__auto____0 = (function (){
var statearr_26434 = [null,null,null,null,null,null,null];
(statearr_26434[(0)] = cljs$core$async$transduce_$_state_machine__25815__auto__);

(statearr_26434[(1)] = (1));

return statearr_26434;
});
var cljs$core$async$transduce_$_state_machine__25815__auto____1 = (function (state_26432){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26435){if((e26435 instanceof Object)){
var ex__25818__auto__ = e26435;
var statearr_26436_26438 = state_26432;
(statearr_26436_26438[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26439 = state_26432;
state_26432 = G__26439;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25815__auto__ = function(state_26432){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25815__auto____1.call(this,state_26432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25815__auto____0;
cljs$core$async$transduce_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25815__auto____1;
return cljs$core$async$transduce_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__,f__$1))
})();
var state__25911__auto__ = (function (){var statearr_26437 = f__25910__auto__.call(null);
(statearr_26437[(6)] = c__25909__auto__);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__,f__$1))
);

return c__25909__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26441 = arguments.length;
switch (G__26441) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__){
return (function (state_26466){
var state_val_26467 = (state_26466[(1)]);
if((state_val_26467 === (7))){
var inst_26448 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26468_26489 = state_26466__$1;
(statearr_26468_26489[(2)] = inst_26448);

(statearr_26468_26489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (1))){
var inst_26442 = cljs.core.seq.call(null,coll);
var inst_26443 = inst_26442;
var state_26466__$1 = (function (){var statearr_26469 = state_26466;
(statearr_26469[(7)] = inst_26443);

return statearr_26469;
})();
var statearr_26470_26490 = state_26466__$1;
(statearr_26470_26490[(2)] = null);

(statearr_26470_26490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (4))){
var inst_26443 = (state_26466[(7)]);
var inst_26446 = cljs.core.first.call(null,inst_26443);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26466__$1,(7),ch,inst_26446);
} else {
if((state_val_26467 === (13))){
var inst_26460 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26471_26491 = state_26466__$1;
(statearr_26471_26491[(2)] = inst_26460);

(statearr_26471_26491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (6))){
var inst_26451 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
if(cljs.core.truth_(inst_26451)){
var statearr_26472_26492 = state_26466__$1;
(statearr_26472_26492[(1)] = (8));

} else {
var statearr_26473_26493 = state_26466__$1;
(statearr_26473_26493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (3))){
var inst_26464 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26466__$1,inst_26464);
} else {
if((state_val_26467 === (12))){
var state_26466__$1 = state_26466;
var statearr_26474_26494 = state_26466__$1;
(statearr_26474_26494[(2)] = null);

(statearr_26474_26494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (2))){
var inst_26443 = (state_26466[(7)]);
var state_26466__$1 = state_26466;
if(cljs.core.truth_(inst_26443)){
var statearr_26475_26495 = state_26466__$1;
(statearr_26475_26495[(1)] = (4));

} else {
var statearr_26476_26496 = state_26466__$1;
(statearr_26476_26496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (11))){
var inst_26457 = cljs.core.async.close_BANG_.call(null,ch);
var state_26466__$1 = state_26466;
var statearr_26477_26497 = state_26466__$1;
(statearr_26477_26497[(2)] = inst_26457);

(statearr_26477_26497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (9))){
var state_26466__$1 = state_26466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26478_26498 = state_26466__$1;
(statearr_26478_26498[(1)] = (11));

} else {
var statearr_26479_26499 = state_26466__$1;
(statearr_26479_26499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (5))){
var inst_26443 = (state_26466[(7)]);
var state_26466__$1 = state_26466;
var statearr_26480_26500 = state_26466__$1;
(statearr_26480_26500[(2)] = inst_26443);

(statearr_26480_26500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (10))){
var inst_26462 = (state_26466[(2)]);
var state_26466__$1 = state_26466;
var statearr_26481_26501 = state_26466__$1;
(statearr_26481_26501[(2)] = inst_26462);

(statearr_26481_26501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26467 === (8))){
var inst_26443 = (state_26466[(7)]);
var inst_26453 = cljs.core.next.call(null,inst_26443);
var inst_26443__$1 = inst_26453;
var state_26466__$1 = (function (){var statearr_26482 = state_26466;
(statearr_26482[(7)] = inst_26443__$1);

return statearr_26482;
})();
var statearr_26483_26502 = state_26466__$1;
(statearr_26483_26502[(2)] = null);

(statearr_26483_26502[(1)] = (2));


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
});})(c__25909__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_26484 = [null,null,null,null,null,null,null,null];
(statearr_26484[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_26484[(1)] = (1));

return statearr_26484;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_26466){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26485){if((e26485 instanceof Object)){
var ex__25818__auto__ = e26485;
var statearr_26486_26503 = state_26466;
(statearr_26486_26503[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26504 = state_26466;
state_26466 = G__26504;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_26466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_26466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__))
})();
var state__25911__auto__ = (function (){var statearr_26487 = f__25910__auto__.call(null);
(statearr_26487[(6)] = c__25909__auto__);

return statearr_26487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__))
);

return c__25909__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26505 = (function (ch,cs,meta26506){
this.ch = ch;
this.cs = cs;
this.meta26506 = meta26506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26507,meta26506__$1){
var self__ = this;
var _26507__$1 = this;
return (new cljs.core.async.t_cljs$core$async26505(self__.ch,self__.cs,meta26506__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26507){
var self__ = this;
var _26507__$1 = this;
return self__.meta26506;
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26506","meta26506",-222803701,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26505";

cljs.core.async.t_cljs$core$async26505.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26505");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26505.
 */
cljs.core.async.__GT_t_cljs$core$async26505 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26505(ch__$1,cs__$1,meta26506){
return (new cljs.core.async.t_cljs$core$async26505(ch__$1,cs__$1,meta26506));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26505(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25909__auto___26727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26727,cs,m,dchan,dctr,done){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26727,cs,m,dchan,dctr,done){
return (function (state_26642){
var state_val_26643 = (state_26642[(1)]);
if((state_val_26643 === (7))){
var inst_26638 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26644_26728 = state_26642__$1;
(statearr_26644_26728[(2)] = inst_26638);

(statearr_26644_26728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (20))){
var inst_26541 = (state_26642[(7)]);
var inst_26553 = cljs.core.first.call(null,inst_26541);
var inst_26554 = cljs.core.nth.call(null,inst_26553,(0),null);
var inst_26555 = cljs.core.nth.call(null,inst_26553,(1),null);
var state_26642__$1 = (function (){var statearr_26645 = state_26642;
(statearr_26645[(8)] = inst_26554);

return statearr_26645;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26646_26729 = state_26642__$1;
(statearr_26646_26729[(1)] = (22));

} else {
var statearr_26647_26730 = state_26642__$1;
(statearr_26647_26730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (27))){
var inst_26510 = (state_26642[(9)]);
var inst_26590 = (state_26642[(10)]);
var inst_26583 = (state_26642[(11)]);
var inst_26585 = (state_26642[(12)]);
var inst_26590__$1 = cljs.core._nth.call(null,inst_26583,inst_26585);
var inst_26591 = cljs.core.async.put_BANG_.call(null,inst_26590__$1,inst_26510,done);
var state_26642__$1 = (function (){var statearr_26648 = state_26642;
(statearr_26648[(10)] = inst_26590__$1);

return statearr_26648;
})();
if(cljs.core.truth_(inst_26591)){
var statearr_26649_26731 = state_26642__$1;
(statearr_26649_26731[(1)] = (30));

} else {
var statearr_26650_26732 = state_26642__$1;
(statearr_26650_26732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (1))){
var state_26642__$1 = state_26642;
var statearr_26651_26733 = state_26642__$1;
(statearr_26651_26733[(2)] = null);

(statearr_26651_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (24))){
var inst_26541 = (state_26642[(7)]);
var inst_26560 = (state_26642[(2)]);
var inst_26561 = cljs.core.next.call(null,inst_26541);
var inst_26519 = inst_26561;
var inst_26520 = null;
var inst_26521 = (0);
var inst_26522 = (0);
var state_26642__$1 = (function (){var statearr_26652 = state_26642;
(statearr_26652[(13)] = inst_26560);

(statearr_26652[(14)] = inst_26519);

(statearr_26652[(15)] = inst_26521);

(statearr_26652[(16)] = inst_26522);

(statearr_26652[(17)] = inst_26520);

return statearr_26652;
})();
var statearr_26653_26734 = state_26642__$1;
(statearr_26653_26734[(2)] = null);

(statearr_26653_26734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (39))){
var state_26642__$1 = state_26642;
var statearr_26657_26735 = state_26642__$1;
(statearr_26657_26735[(2)] = null);

(statearr_26657_26735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (4))){
var inst_26510 = (state_26642[(9)]);
var inst_26510__$1 = (state_26642[(2)]);
var inst_26511 = (inst_26510__$1 == null);
var state_26642__$1 = (function (){var statearr_26658 = state_26642;
(statearr_26658[(9)] = inst_26510__$1);

return statearr_26658;
})();
if(cljs.core.truth_(inst_26511)){
var statearr_26659_26736 = state_26642__$1;
(statearr_26659_26736[(1)] = (5));

} else {
var statearr_26660_26737 = state_26642__$1;
(statearr_26660_26737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (15))){
var inst_26519 = (state_26642[(14)]);
var inst_26521 = (state_26642[(15)]);
var inst_26522 = (state_26642[(16)]);
var inst_26520 = (state_26642[(17)]);
var inst_26537 = (state_26642[(2)]);
var inst_26538 = (inst_26522 + (1));
var tmp26654 = inst_26519;
var tmp26655 = inst_26521;
var tmp26656 = inst_26520;
var inst_26519__$1 = tmp26654;
var inst_26520__$1 = tmp26656;
var inst_26521__$1 = tmp26655;
var inst_26522__$1 = inst_26538;
var state_26642__$1 = (function (){var statearr_26661 = state_26642;
(statearr_26661[(14)] = inst_26519__$1);

(statearr_26661[(18)] = inst_26537);

(statearr_26661[(15)] = inst_26521__$1);

(statearr_26661[(16)] = inst_26522__$1);

(statearr_26661[(17)] = inst_26520__$1);

return statearr_26661;
})();
var statearr_26662_26738 = state_26642__$1;
(statearr_26662_26738[(2)] = null);

(statearr_26662_26738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (21))){
var inst_26564 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26666_26739 = state_26642__$1;
(statearr_26666_26739[(2)] = inst_26564);

(statearr_26666_26739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (31))){
var inst_26590 = (state_26642[(10)]);
var inst_26594 = done.call(null,null);
var inst_26595 = cljs.core.async.untap_STAR_.call(null,m,inst_26590);
var state_26642__$1 = (function (){var statearr_26667 = state_26642;
(statearr_26667[(19)] = inst_26594);

return statearr_26667;
})();
var statearr_26668_26740 = state_26642__$1;
(statearr_26668_26740[(2)] = inst_26595);

(statearr_26668_26740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (32))){
var inst_26583 = (state_26642[(11)]);
var inst_26585 = (state_26642[(12)]);
var inst_26584 = (state_26642[(20)]);
var inst_26582 = (state_26642[(21)]);
var inst_26597 = (state_26642[(2)]);
var inst_26598 = (inst_26585 + (1));
var tmp26663 = inst_26583;
var tmp26664 = inst_26584;
var tmp26665 = inst_26582;
var inst_26582__$1 = tmp26665;
var inst_26583__$1 = tmp26663;
var inst_26584__$1 = tmp26664;
var inst_26585__$1 = inst_26598;
var state_26642__$1 = (function (){var statearr_26669 = state_26642;
(statearr_26669[(11)] = inst_26583__$1);

(statearr_26669[(12)] = inst_26585__$1);

(statearr_26669[(20)] = inst_26584__$1);

(statearr_26669[(22)] = inst_26597);

(statearr_26669[(21)] = inst_26582__$1);

return statearr_26669;
})();
var statearr_26670_26741 = state_26642__$1;
(statearr_26670_26741[(2)] = null);

(statearr_26670_26741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (40))){
var inst_26610 = (state_26642[(23)]);
var inst_26614 = done.call(null,null);
var inst_26615 = cljs.core.async.untap_STAR_.call(null,m,inst_26610);
var state_26642__$1 = (function (){var statearr_26671 = state_26642;
(statearr_26671[(24)] = inst_26614);

return statearr_26671;
})();
var statearr_26672_26742 = state_26642__$1;
(statearr_26672_26742[(2)] = inst_26615);

(statearr_26672_26742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (33))){
var inst_26601 = (state_26642[(25)]);
var inst_26603 = cljs.core.chunked_seq_QMARK_.call(null,inst_26601);
var state_26642__$1 = state_26642;
if(inst_26603){
var statearr_26673_26743 = state_26642__$1;
(statearr_26673_26743[(1)] = (36));

} else {
var statearr_26674_26744 = state_26642__$1;
(statearr_26674_26744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (13))){
var inst_26531 = (state_26642[(26)]);
var inst_26534 = cljs.core.async.close_BANG_.call(null,inst_26531);
var state_26642__$1 = state_26642;
var statearr_26675_26745 = state_26642__$1;
(statearr_26675_26745[(2)] = inst_26534);

(statearr_26675_26745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (22))){
var inst_26554 = (state_26642[(8)]);
var inst_26557 = cljs.core.async.close_BANG_.call(null,inst_26554);
var state_26642__$1 = state_26642;
var statearr_26676_26746 = state_26642__$1;
(statearr_26676_26746[(2)] = inst_26557);

(statearr_26676_26746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (36))){
var inst_26601 = (state_26642[(25)]);
var inst_26605 = cljs.core.chunk_first.call(null,inst_26601);
var inst_26606 = cljs.core.chunk_rest.call(null,inst_26601);
var inst_26607 = cljs.core.count.call(null,inst_26605);
var inst_26582 = inst_26606;
var inst_26583 = inst_26605;
var inst_26584 = inst_26607;
var inst_26585 = (0);
var state_26642__$1 = (function (){var statearr_26677 = state_26642;
(statearr_26677[(11)] = inst_26583);

(statearr_26677[(12)] = inst_26585);

(statearr_26677[(20)] = inst_26584);

(statearr_26677[(21)] = inst_26582);

return statearr_26677;
})();
var statearr_26678_26747 = state_26642__$1;
(statearr_26678_26747[(2)] = null);

(statearr_26678_26747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (41))){
var inst_26601 = (state_26642[(25)]);
var inst_26617 = (state_26642[(2)]);
var inst_26618 = cljs.core.next.call(null,inst_26601);
var inst_26582 = inst_26618;
var inst_26583 = null;
var inst_26584 = (0);
var inst_26585 = (0);
var state_26642__$1 = (function (){var statearr_26679 = state_26642;
(statearr_26679[(11)] = inst_26583);

(statearr_26679[(12)] = inst_26585);

(statearr_26679[(20)] = inst_26584);

(statearr_26679[(27)] = inst_26617);

(statearr_26679[(21)] = inst_26582);

return statearr_26679;
})();
var statearr_26680_26748 = state_26642__$1;
(statearr_26680_26748[(2)] = null);

(statearr_26680_26748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (43))){
var state_26642__$1 = state_26642;
var statearr_26681_26749 = state_26642__$1;
(statearr_26681_26749[(2)] = null);

(statearr_26681_26749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (29))){
var inst_26626 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26682_26750 = state_26642__$1;
(statearr_26682_26750[(2)] = inst_26626);

(statearr_26682_26750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (44))){
var inst_26635 = (state_26642[(2)]);
var state_26642__$1 = (function (){var statearr_26683 = state_26642;
(statearr_26683[(28)] = inst_26635);

return statearr_26683;
})();
var statearr_26684_26751 = state_26642__$1;
(statearr_26684_26751[(2)] = null);

(statearr_26684_26751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (6))){
var inst_26574 = (state_26642[(29)]);
var inst_26573 = cljs.core.deref.call(null,cs);
var inst_26574__$1 = cljs.core.keys.call(null,inst_26573);
var inst_26575 = cljs.core.count.call(null,inst_26574__$1);
var inst_26576 = cljs.core.reset_BANG_.call(null,dctr,inst_26575);
var inst_26581 = cljs.core.seq.call(null,inst_26574__$1);
var inst_26582 = inst_26581;
var inst_26583 = null;
var inst_26584 = (0);
var inst_26585 = (0);
var state_26642__$1 = (function (){var statearr_26685 = state_26642;
(statearr_26685[(30)] = inst_26576);

(statearr_26685[(11)] = inst_26583);

(statearr_26685[(12)] = inst_26585);

(statearr_26685[(20)] = inst_26584);

(statearr_26685[(29)] = inst_26574__$1);

(statearr_26685[(21)] = inst_26582);

return statearr_26685;
})();
var statearr_26686_26752 = state_26642__$1;
(statearr_26686_26752[(2)] = null);

(statearr_26686_26752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (28))){
var inst_26601 = (state_26642[(25)]);
var inst_26582 = (state_26642[(21)]);
var inst_26601__$1 = cljs.core.seq.call(null,inst_26582);
var state_26642__$1 = (function (){var statearr_26687 = state_26642;
(statearr_26687[(25)] = inst_26601__$1);

return statearr_26687;
})();
if(inst_26601__$1){
var statearr_26688_26753 = state_26642__$1;
(statearr_26688_26753[(1)] = (33));

} else {
var statearr_26689_26754 = state_26642__$1;
(statearr_26689_26754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (25))){
var inst_26585 = (state_26642[(12)]);
var inst_26584 = (state_26642[(20)]);
var inst_26587 = (inst_26585 < inst_26584);
var inst_26588 = inst_26587;
var state_26642__$1 = state_26642;
if(cljs.core.truth_(inst_26588)){
var statearr_26690_26755 = state_26642__$1;
(statearr_26690_26755[(1)] = (27));

} else {
var statearr_26691_26756 = state_26642__$1;
(statearr_26691_26756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (34))){
var state_26642__$1 = state_26642;
var statearr_26692_26757 = state_26642__$1;
(statearr_26692_26757[(2)] = null);

(statearr_26692_26757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (17))){
var state_26642__$1 = state_26642;
var statearr_26693_26758 = state_26642__$1;
(statearr_26693_26758[(2)] = null);

(statearr_26693_26758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (3))){
var inst_26640 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26642__$1,inst_26640);
} else {
if((state_val_26643 === (12))){
var inst_26569 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26694_26759 = state_26642__$1;
(statearr_26694_26759[(2)] = inst_26569);

(statearr_26694_26759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (2))){
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26642__$1,(4),ch);
} else {
if((state_val_26643 === (23))){
var state_26642__$1 = state_26642;
var statearr_26695_26760 = state_26642__$1;
(statearr_26695_26760[(2)] = null);

(statearr_26695_26760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (35))){
var inst_26624 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26696_26761 = state_26642__$1;
(statearr_26696_26761[(2)] = inst_26624);

(statearr_26696_26761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (19))){
var inst_26541 = (state_26642[(7)]);
var inst_26545 = cljs.core.chunk_first.call(null,inst_26541);
var inst_26546 = cljs.core.chunk_rest.call(null,inst_26541);
var inst_26547 = cljs.core.count.call(null,inst_26545);
var inst_26519 = inst_26546;
var inst_26520 = inst_26545;
var inst_26521 = inst_26547;
var inst_26522 = (0);
var state_26642__$1 = (function (){var statearr_26697 = state_26642;
(statearr_26697[(14)] = inst_26519);

(statearr_26697[(15)] = inst_26521);

(statearr_26697[(16)] = inst_26522);

(statearr_26697[(17)] = inst_26520);

return statearr_26697;
})();
var statearr_26698_26762 = state_26642__$1;
(statearr_26698_26762[(2)] = null);

(statearr_26698_26762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (11))){
var inst_26519 = (state_26642[(14)]);
var inst_26541 = (state_26642[(7)]);
var inst_26541__$1 = cljs.core.seq.call(null,inst_26519);
var state_26642__$1 = (function (){var statearr_26699 = state_26642;
(statearr_26699[(7)] = inst_26541__$1);

return statearr_26699;
})();
if(inst_26541__$1){
var statearr_26700_26763 = state_26642__$1;
(statearr_26700_26763[(1)] = (16));

} else {
var statearr_26701_26764 = state_26642__$1;
(statearr_26701_26764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (9))){
var inst_26571 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26702_26765 = state_26642__$1;
(statearr_26702_26765[(2)] = inst_26571);

(statearr_26702_26765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (5))){
var inst_26517 = cljs.core.deref.call(null,cs);
var inst_26518 = cljs.core.seq.call(null,inst_26517);
var inst_26519 = inst_26518;
var inst_26520 = null;
var inst_26521 = (0);
var inst_26522 = (0);
var state_26642__$1 = (function (){var statearr_26703 = state_26642;
(statearr_26703[(14)] = inst_26519);

(statearr_26703[(15)] = inst_26521);

(statearr_26703[(16)] = inst_26522);

(statearr_26703[(17)] = inst_26520);

return statearr_26703;
})();
var statearr_26704_26766 = state_26642__$1;
(statearr_26704_26766[(2)] = null);

(statearr_26704_26766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (14))){
var state_26642__$1 = state_26642;
var statearr_26705_26767 = state_26642__$1;
(statearr_26705_26767[(2)] = null);

(statearr_26705_26767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (45))){
var inst_26632 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26706_26768 = state_26642__$1;
(statearr_26706_26768[(2)] = inst_26632);

(statearr_26706_26768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (26))){
var inst_26574 = (state_26642[(29)]);
var inst_26628 = (state_26642[(2)]);
var inst_26629 = cljs.core.seq.call(null,inst_26574);
var state_26642__$1 = (function (){var statearr_26707 = state_26642;
(statearr_26707[(31)] = inst_26628);

return statearr_26707;
})();
if(inst_26629){
var statearr_26708_26769 = state_26642__$1;
(statearr_26708_26769[(1)] = (42));

} else {
var statearr_26709_26770 = state_26642__$1;
(statearr_26709_26770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (16))){
var inst_26541 = (state_26642[(7)]);
var inst_26543 = cljs.core.chunked_seq_QMARK_.call(null,inst_26541);
var state_26642__$1 = state_26642;
if(inst_26543){
var statearr_26710_26771 = state_26642__$1;
(statearr_26710_26771[(1)] = (19));

} else {
var statearr_26711_26772 = state_26642__$1;
(statearr_26711_26772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (38))){
var inst_26621 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26712_26773 = state_26642__$1;
(statearr_26712_26773[(2)] = inst_26621);

(statearr_26712_26773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (30))){
var state_26642__$1 = state_26642;
var statearr_26713_26774 = state_26642__$1;
(statearr_26713_26774[(2)] = null);

(statearr_26713_26774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (10))){
var inst_26522 = (state_26642[(16)]);
var inst_26520 = (state_26642[(17)]);
var inst_26530 = cljs.core._nth.call(null,inst_26520,inst_26522);
var inst_26531 = cljs.core.nth.call(null,inst_26530,(0),null);
var inst_26532 = cljs.core.nth.call(null,inst_26530,(1),null);
var state_26642__$1 = (function (){var statearr_26714 = state_26642;
(statearr_26714[(26)] = inst_26531);

return statearr_26714;
})();
if(cljs.core.truth_(inst_26532)){
var statearr_26715_26775 = state_26642__$1;
(statearr_26715_26775[(1)] = (13));

} else {
var statearr_26716_26776 = state_26642__$1;
(statearr_26716_26776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (18))){
var inst_26567 = (state_26642[(2)]);
var state_26642__$1 = state_26642;
var statearr_26717_26777 = state_26642__$1;
(statearr_26717_26777[(2)] = inst_26567);

(statearr_26717_26777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (42))){
var state_26642__$1 = state_26642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26642__$1,(45),dchan);
} else {
if((state_val_26643 === (37))){
var inst_26510 = (state_26642[(9)]);
var inst_26610 = (state_26642[(23)]);
var inst_26601 = (state_26642[(25)]);
var inst_26610__$1 = cljs.core.first.call(null,inst_26601);
var inst_26611 = cljs.core.async.put_BANG_.call(null,inst_26610__$1,inst_26510,done);
var state_26642__$1 = (function (){var statearr_26718 = state_26642;
(statearr_26718[(23)] = inst_26610__$1);

return statearr_26718;
})();
if(cljs.core.truth_(inst_26611)){
var statearr_26719_26778 = state_26642__$1;
(statearr_26719_26778[(1)] = (39));

} else {
var statearr_26720_26779 = state_26642__$1;
(statearr_26720_26779[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26643 === (8))){
var inst_26521 = (state_26642[(15)]);
var inst_26522 = (state_26642[(16)]);
var inst_26524 = (inst_26522 < inst_26521);
var inst_26525 = inst_26524;
var state_26642__$1 = state_26642;
if(cljs.core.truth_(inst_26525)){
var statearr_26721_26780 = state_26642__$1;
(statearr_26721_26780[(1)] = (10));

} else {
var statearr_26722_26781 = state_26642__$1;
(statearr_26722_26781[(1)] = (11));

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
});})(c__25909__auto___26727,cs,m,dchan,dctr,done))
;
return ((function (switch__25814__auto__,c__25909__auto___26727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25815__auto__ = null;
var cljs$core$async$mult_$_state_machine__25815__auto____0 = (function (){
var statearr_26723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26723[(0)] = cljs$core$async$mult_$_state_machine__25815__auto__);

(statearr_26723[(1)] = (1));

return statearr_26723;
});
var cljs$core$async$mult_$_state_machine__25815__auto____1 = (function (state_26642){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26724){if((e26724 instanceof Object)){
var ex__25818__auto__ = e26724;
var statearr_26725_26782 = state_26642;
(statearr_26725_26782[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26783 = state_26642;
state_26642 = G__26783;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25815__auto__ = function(state_26642){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25815__auto____1.call(this,state_26642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25815__auto____0;
cljs$core$async$mult_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25815__auto____1;
return cljs$core$async$mult_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26727,cs,m,dchan,dctr,done))
})();
var state__25911__auto__ = (function (){var statearr_26726 = f__25910__auto__.call(null);
(statearr_26726[(6)] = c__25909__auto___26727);

return statearr_26726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26727,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26785 = arguments.length;
switch (G__26785) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26797 = arguments.length;
var i__4731__auto___26798 = (0);
while(true){
if((i__4731__auto___26798 < len__4730__auto___26797)){
args__4736__auto__.push((arguments[i__4731__auto___26798]));

var G__26799 = (i__4731__auto___26798 + (1));
i__4731__auto___26798 = G__26799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26791){
var map__26792 = p__26791;
var map__26792__$1 = (((((!((map__26792 == null))))?(((((map__26792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);
var opts = map__26792__$1;
var statearr_26794_26800 = state;
(statearr_26794_26800[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26792,map__26792__$1,opts){
return (function (val){
var statearr_26795_26801 = state;
(statearr_26795_26801[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26792,map__26792__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26796_26802 = state;
(statearr_26796_26802[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26787){
var G__26788 = cljs.core.first.call(null,seq26787);
var seq26787__$1 = cljs.core.next.call(null,seq26787);
var G__26789 = cljs.core.first.call(null,seq26787__$1);
var seq26787__$2 = cljs.core.next.call(null,seq26787__$1);
var G__26790 = cljs.core.first.call(null,seq26787__$2);
var seq26787__$3 = cljs.core.next.call(null,seq26787__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26788,G__26789,G__26790,seq26787__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26803 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26804){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26804 = meta26804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26805,meta26804__$1){
var self__ = this;
var _26805__$1 = this;
return (new cljs.core.async.t_cljs$core$async26803(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26804__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26805){
var self__ = this;
var _26805__$1 = this;
return self__.meta26804;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26804","meta26804",1489162920,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26803";

cljs.core.async.t_cljs$core$async26803.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26803");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26803.
 */
cljs.core.async.__GT_t_cljs$core$async26803 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26803(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26804){
return (new cljs.core.async.t_cljs$core$async26803(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26804));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26803(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25909__auto___26967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26907){
var state_val_26908 = (state_26907[(1)]);
if((state_val_26908 === (7))){
var inst_26822 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26909_26968 = state_26907__$1;
(statearr_26909_26968[(2)] = inst_26822);

(statearr_26909_26968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (20))){
var inst_26834 = (state_26907[(7)]);
var state_26907__$1 = state_26907;
var statearr_26910_26969 = state_26907__$1;
(statearr_26910_26969[(2)] = inst_26834);

(statearr_26910_26969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (27))){
var state_26907__$1 = state_26907;
var statearr_26911_26970 = state_26907__$1;
(statearr_26911_26970[(2)] = null);

(statearr_26911_26970[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (1))){
var inst_26809 = (state_26907[(8)]);
var inst_26809__$1 = calc_state.call(null);
var inst_26811 = (inst_26809__$1 == null);
var inst_26812 = cljs.core.not.call(null,inst_26811);
var state_26907__$1 = (function (){var statearr_26912 = state_26907;
(statearr_26912[(8)] = inst_26809__$1);

return statearr_26912;
})();
if(inst_26812){
var statearr_26913_26971 = state_26907__$1;
(statearr_26913_26971[(1)] = (2));

} else {
var statearr_26914_26972 = state_26907__$1;
(statearr_26914_26972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (24))){
var inst_26858 = (state_26907[(9)]);
var inst_26867 = (state_26907[(10)]);
var inst_26881 = (state_26907[(11)]);
var inst_26881__$1 = inst_26858.call(null,inst_26867);
var state_26907__$1 = (function (){var statearr_26915 = state_26907;
(statearr_26915[(11)] = inst_26881__$1);

return statearr_26915;
})();
if(cljs.core.truth_(inst_26881__$1)){
var statearr_26916_26973 = state_26907__$1;
(statearr_26916_26973[(1)] = (29));

} else {
var statearr_26917_26974 = state_26907__$1;
(statearr_26917_26974[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (4))){
var inst_26825 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26825)){
var statearr_26918_26975 = state_26907__$1;
(statearr_26918_26975[(1)] = (8));

} else {
var statearr_26919_26976 = state_26907__$1;
(statearr_26919_26976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (15))){
var inst_26852 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26852)){
var statearr_26920_26977 = state_26907__$1;
(statearr_26920_26977[(1)] = (19));

} else {
var statearr_26921_26978 = state_26907__$1;
(statearr_26921_26978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (21))){
var inst_26857 = (state_26907[(12)]);
var inst_26857__$1 = (state_26907[(2)]);
var inst_26858 = cljs.core.get.call(null,inst_26857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26859 = cljs.core.get.call(null,inst_26857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26860 = cljs.core.get.call(null,inst_26857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26907__$1 = (function (){var statearr_26922 = state_26907;
(statearr_26922[(13)] = inst_26859);

(statearr_26922[(9)] = inst_26858);

(statearr_26922[(12)] = inst_26857__$1);

return statearr_26922;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26907__$1,(22),inst_26860);
} else {
if((state_val_26908 === (31))){
var inst_26889 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26889)){
var statearr_26923_26979 = state_26907__$1;
(statearr_26923_26979[(1)] = (32));

} else {
var statearr_26924_26980 = state_26907__$1;
(statearr_26924_26980[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (32))){
var inst_26866 = (state_26907[(14)]);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26907__$1,(35),out,inst_26866);
} else {
if((state_val_26908 === (33))){
var inst_26857 = (state_26907[(12)]);
var inst_26834 = inst_26857;
var state_26907__$1 = (function (){var statearr_26925 = state_26907;
(statearr_26925[(7)] = inst_26834);

return statearr_26925;
})();
var statearr_26926_26981 = state_26907__$1;
(statearr_26926_26981[(2)] = null);

(statearr_26926_26981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (13))){
var inst_26834 = (state_26907[(7)]);
var inst_26841 = inst_26834.cljs$lang$protocol_mask$partition0$;
var inst_26842 = (inst_26841 & (64));
var inst_26843 = inst_26834.cljs$core$ISeq$;
var inst_26844 = (cljs.core.PROTOCOL_SENTINEL === inst_26843);
var inst_26845 = ((inst_26842) || (inst_26844));
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26845)){
var statearr_26927_26982 = state_26907__$1;
(statearr_26927_26982[(1)] = (16));

} else {
var statearr_26928_26983 = state_26907__$1;
(statearr_26928_26983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (22))){
var inst_26866 = (state_26907[(14)]);
var inst_26867 = (state_26907[(10)]);
var inst_26865 = (state_26907[(2)]);
var inst_26866__$1 = cljs.core.nth.call(null,inst_26865,(0),null);
var inst_26867__$1 = cljs.core.nth.call(null,inst_26865,(1),null);
var inst_26868 = (inst_26866__$1 == null);
var inst_26869 = cljs.core._EQ_.call(null,inst_26867__$1,change);
var inst_26870 = ((inst_26868) || (inst_26869));
var state_26907__$1 = (function (){var statearr_26929 = state_26907;
(statearr_26929[(14)] = inst_26866__$1);

(statearr_26929[(10)] = inst_26867__$1);

return statearr_26929;
})();
if(cljs.core.truth_(inst_26870)){
var statearr_26930_26984 = state_26907__$1;
(statearr_26930_26984[(1)] = (23));

} else {
var statearr_26931_26985 = state_26907__$1;
(statearr_26931_26985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (36))){
var inst_26857 = (state_26907[(12)]);
var inst_26834 = inst_26857;
var state_26907__$1 = (function (){var statearr_26932 = state_26907;
(statearr_26932[(7)] = inst_26834);

return statearr_26932;
})();
var statearr_26933_26986 = state_26907__$1;
(statearr_26933_26986[(2)] = null);

(statearr_26933_26986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (29))){
var inst_26881 = (state_26907[(11)]);
var state_26907__$1 = state_26907;
var statearr_26934_26987 = state_26907__$1;
(statearr_26934_26987[(2)] = inst_26881);

(statearr_26934_26987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (6))){
var state_26907__$1 = state_26907;
var statearr_26935_26988 = state_26907__$1;
(statearr_26935_26988[(2)] = false);

(statearr_26935_26988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (28))){
var inst_26877 = (state_26907[(2)]);
var inst_26878 = calc_state.call(null);
var inst_26834 = inst_26878;
var state_26907__$1 = (function (){var statearr_26936 = state_26907;
(statearr_26936[(7)] = inst_26834);

(statearr_26936[(15)] = inst_26877);

return statearr_26936;
})();
var statearr_26937_26989 = state_26907__$1;
(statearr_26937_26989[(2)] = null);

(statearr_26937_26989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (25))){
var inst_26903 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26938_26990 = state_26907__$1;
(statearr_26938_26990[(2)] = inst_26903);

(statearr_26938_26990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (34))){
var inst_26901 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26939_26991 = state_26907__$1;
(statearr_26939_26991[(2)] = inst_26901);

(statearr_26939_26991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (17))){
var state_26907__$1 = state_26907;
var statearr_26940_26992 = state_26907__$1;
(statearr_26940_26992[(2)] = false);

(statearr_26940_26992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (3))){
var state_26907__$1 = state_26907;
var statearr_26941_26993 = state_26907__$1;
(statearr_26941_26993[(2)] = false);

(statearr_26941_26993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (12))){
var inst_26905 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26907__$1,inst_26905);
} else {
if((state_val_26908 === (2))){
var inst_26809 = (state_26907[(8)]);
var inst_26814 = inst_26809.cljs$lang$protocol_mask$partition0$;
var inst_26815 = (inst_26814 & (64));
var inst_26816 = inst_26809.cljs$core$ISeq$;
var inst_26817 = (cljs.core.PROTOCOL_SENTINEL === inst_26816);
var inst_26818 = ((inst_26815) || (inst_26817));
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26818)){
var statearr_26942_26994 = state_26907__$1;
(statearr_26942_26994[(1)] = (5));

} else {
var statearr_26943_26995 = state_26907__$1;
(statearr_26943_26995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (23))){
var inst_26866 = (state_26907[(14)]);
var inst_26872 = (inst_26866 == null);
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26872)){
var statearr_26944_26996 = state_26907__$1;
(statearr_26944_26996[(1)] = (26));

} else {
var statearr_26945_26997 = state_26907__$1;
(statearr_26945_26997[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (35))){
var inst_26892 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
if(cljs.core.truth_(inst_26892)){
var statearr_26946_26998 = state_26907__$1;
(statearr_26946_26998[(1)] = (36));

} else {
var statearr_26947_26999 = state_26907__$1;
(statearr_26947_26999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (19))){
var inst_26834 = (state_26907[(7)]);
var inst_26854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26834);
var state_26907__$1 = state_26907;
var statearr_26948_27000 = state_26907__$1;
(statearr_26948_27000[(2)] = inst_26854);

(statearr_26948_27000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (11))){
var inst_26834 = (state_26907[(7)]);
var inst_26838 = (inst_26834 == null);
var inst_26839 = cljs.core.not.call(null,inst_26838);
var state_26907__$1 = state_26907;
if(inst_26839){
var statearr_26949_27001 = state_26907__$1;
(statearr_26949_27001[(1)] = (13));

} else {
var statearr_26950_27002 = state_26907__$1;
(statearr_26950_27002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (9))){
var inst_26809 = (state_26907[(8)]);
var state_26907__$1 = state_26907;
var statearr_26951_27003 = state_26907__$1;
(statearr_26951_27003[(2)] = inst_26809);

(statearr_26951_27003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (5))){
var state_26907__$1 = state_26907;
var statearr_26952_27004 = state_26907__$1;
(statearr_26952_27004[(2)] = true);

(statearr_26952_27004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (14))){
var state_26907__$1 = state_26907;
var statearr_26953_27005 = state_26907__$1;
(statearr_26953_27005[(2)] = false);

(statearr_26953_27005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (26))){
var inst_26867 = (state_26907[(10)]);
var inst_26874 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26867);
var state_26907__$1 = state_26907;
var statearr_26954_27006 = state_26907__$1;
(statearr_26954_27006[(2)] = inst_26874);

(statearr_26954_27006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (16))){
var state_26907__$1 = state_26907;
var statearr_26955_27007 = state_26907__$1;
(statearr_26955_27007[(2)] = true);

(statearr_26955_27007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (38))){
var inst_26897 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26956_27008 = state_26907__$1;
(statearr_26956_27008[(2)] = inst_26897);

(statearr_26956_27008[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (30))){
var inst_26859 = (state_26907[(13)]);
var inst_26858 = (state_26907[(9)]);
var inst_26867 = (state_26907[(10)]);
var inst_26884 = cljs.core.empty_QMARK_.call(null,inst_26858);
var inst_26885 = inst_26859.call(null,inst_26867);
var inst_26886 = cljs.core.not.call(null,inst_26885);
var inst_26887 = ((inst_26884) && (inst_26886));
var state_26907__$1 = state_26907;
var statearr_26957_27009 = state_26907__$1;
(statearr_26957_27009[(2)] = inst_26887);

(statearr_26957_27009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (10))){
var inst_26809 = (state_26907[(8)]);
var inst_26830 = (state_26907[(2)]);
var inst_26831 = cljs.core.get.call(null,inst_26830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26832 = cljs.core.get.call(null,inst_26830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26833 = cljs.core.get.call(null,inst_26830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26834 = inst_26809;
var state_26907__$1 = (function (){var statearr_26958 = state_26907;
(statearr_26958[(16)] = inst_26832);

(statearr_26958[(17)] = inst_26831);

(statearr_26958[(7)] = inst_26834);

(statearr_26958[(18)] = inst_26833);

return statearr_26958;
})();
var statearr_26959_27010 = state_26907__$1;
(statearr_26959_27010[(2)] = null);

(statearr_26959_27010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (18))){
var inst_26849 = (state_26907[(2)]);
var state_26907__$1 = state_26907;
var statearr_26960_27011 = state_26907__$1;
(statearr_26960_27011[(2)] = inst_26849);

(statearr_26960_27011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (37))){
var state_26907__$1 = state_26907;
var statearr_26961_27012 = state_26907__$1;
(statearr_26961_27012[(2)] = null);

(statearr_26961_27012[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26908 === (8))){
var inst_26809 = (state_26907[(8)]);
var inst_26827 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26809);
var state_26907__$1 = state_26907;
var statearr_26962_27013 = state_26907__$1;
(statearr_26962_27013[(2)] = inst_26827);

(statearr_26962_27013[(1)] = (10));


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
});})(c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25814__auto__,c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25815__auto__ = null;
var cljs$core$async$mix_$_state_machine__25815__auto____0 = (function (){
var statearr_26963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26963[(0)] = cljs$core$async$mix_$_state_machine__25815__auto__);

(statearr_26963[(1)] = (1));

return statearr_26963;
});
var cljs$core$async$mix_$_state_machine__25815__auto____1 = (function (state_26907){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_26907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e26964){if((e26964 instanceof Object)){
var ex__25818__auto__ = e26964;
var statearr_26965_27014 = state_26907;
(statearr_26965_27014[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26907;
state_26907 = G__27015;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25815__auto__ = function(state_26907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25815__auto____1.call(this,state_26907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25815__auto____0;
cljs$core$async$mix_$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25815__auto____1;
return cljs$core$async$mix_$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25911__auto__ = (function (){var statearr_26966 = f__25910__auto__.call(null);
(statearr_26966[(6)] = c__25909__auto___26967);

return statearr_26966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___26967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27017 = arguments.length;
switch (G__27017) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27021 = arguments.length;
switch (G__27021) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__27019_SHARP_){
if(cljs.core.truth_(p1__27019_SHARP_.call(null,topic))){
return p1__27019_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27019_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27022 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27023){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27023 = meta27023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27024,meta27023__$1){
var self__ = this;
var _27024__$1 = this;
return (new cljs.core.async.t_cljs$core$async27022(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27023__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27024){
var self__ = this;
var _27024__$1 = this;
return self__.meta27023;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27023","meta27023",731465533,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27022";

cljs.core.async.t_cljs$core$async27022.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27022");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27022.
 */
cljs.core.async.__GT_t_cljs$core$async27022 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27023){
return (new cljs.core.async.t_cljs$core$async27022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27023));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27022(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25909__auto___27142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27142,mults,ensure_mult,p){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27142,mults,ensure_mult,p){
return (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (7))){
var inst_27092 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27098_27143 = state_27096__$1;
(statearr_27098_27143[(2)] = inst_27092);

(statearr_27098_27143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (20))){
var state_27096__$1 = state_27096;
var statearr_27099_27144 = state_27096__$1;
(statearr_27099_27144[(2)] = null);

(statearr_27099_27144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (1))){
var state_27096__$1 = state_27096;
var statearr_27100_27145 = state_27096__$1;
(statearr_27100_27145[(2)] = null);

(statearr_27100_27145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (24))){
var inst_27075 = (state_27096[(7)]);
var inst_27084 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27075);
var state_27096__$1 = state_27096;
var statearr_27101_27146 = state_27096__$1;
(statearr_27101_27146[(2)] = inst_27084);

(statearr_27101_27146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (4))){
var inst_27027 = (state_27096[(8)]);
var inst_27027__$1 = (state_27096[(2)]);
var inst_27028 = (inst_27027__$1 == null);
var state_27096__$1 = (function (){var statearr_27102 = state_27096;
(statearr_27102[(8)] = inst_27027__$1);

return statearr_27102;
})();
if(cljs.core.truth_(inst_27028)){
var statearr_27103_27147 = state_27096__$1;
(statearr_27103_27147[(1)] = (5));

} else {
var statearr_27104_27148 = state_27096__$1;
(statearr_27104_27148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (15))){
var inst_27069 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27105_27149 = state_27096__$1;
(statearr_27105_27149[(2)] = inst_27069);

(statearr_27105_27149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (21))){
var inst_27089 = (state_27096[(2)]);
var state_27096__$1 = (function (){var statearr_27106 = state_27096;
(statearr_27106[(9)] = inst_27089);

return statearr_27106;
})();
var statearr_27107_27150 = state_27096__$1;
(statearr_27107_27150[(2)] = null);

(statearr_27107_27150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (13))){
var inst_27051 = (state_27096[(10)]);
var inst_27053 = cljs.core.chunked_seq_QMARK_.call(null,inst_27051);
var state_27096__$1 = state_27096;
if(inst_27053){
var statearr_27108_27151 = state_27096__$1;
(statearr_27108_27151[(1)] = (16));

} else {
var statearr_27109_27152 = state_27096__$1;
(statearr_27109_27152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (22))){
var inst_27081 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_27081)){
var statearr_27110_27153 = state_27096__$1;
(statearr_27110_27153[(1)] = (23));

} else {
var statearr_27111_27154 = state_27096__$1;
(statearr_27111_27154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (6))){
var inst_27075 = (state_27096[(7)]);
var inst_27027 = (state_27096[(8)]);
var inst_27077 = (state_27096[(11)]);
var inst_27075__$1 = topic_fn.call(null,inst_27027);
var inst_27076 = cljs.core.deref.call(null,mults);
var inst_27077__$1 = cljs.core.get.call(null,inst_27076,inst_27075__$1);
var state_27096__$1 = (function (){var statearr_27112 = state_27096;
(statearr_27112[(7)] = inst_27075__$1);

(statearr_27112[(11)] = inst_27077__$1);

return statearr_27112;
})();
if(cljs.core.truth_(inst_27077__$1)){
var statearr_27113_27155 = state_27096__$1;
(statearr_27113_27155[(1)] = (19));

} else {
var statearr_27114_27156 = state_27096__$1;
(statearr_27114_27156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (25))){
var inst_27086 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27115_27157 = state_27096__$1;
(statearr_27115_27157[(2)] = inst_27086);

(statearr_27115_27157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (17))){
var inst_27051 = (state_27096[(10)]);
var inst_27060 = cljs.core.first.call(null,inst_27051);
var inst_27061 = cljs.core.async.muxch_STAR_.call(null,inst_27060);
var inst_27062 = cljs.core.async.close_BANG_.call(null,inst_27061);
var inst_27063 = cljs.core.next.call(null,inst_27051);
var inst_27037 = inst_27063;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27096__$1 = (function (){var statearr_27116 = state_27096;
(statearr_27116[(12)] = inst_27062);

(statearr_27116[(13)] = inst_27037);

(statearr_27116[(14)] = inst_27039);

(statearr_27116[(15)] = inst_27038);

(statearr_27116[(16)] = inst_27040);

return statearr_27116;
})();
var statearr_27117_27158 = state_27096__$1;
(statearr_27117_27158[(2)] = null);

(statearr_27117_27158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (3))){
var inst_27094 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27096__$1,inst_27094);
} else {
if((state_val_27097 === (12))){
var inst_27071 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27118_27159 = state_27096__$1;
(statearr_27118_27159[(2)] = inst_27071);

(statearr_27118_27159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (2))){
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27096__$1,(4),ch);
} else {
if((state_val_27097 === (23))){
var state_27096__$1 = state_27096;
var statearr_27119_27160 = state_27096__$1;
(statearr_27119_27160[(2)] = null);

(statearr_27119_27160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (19))){
var inst_27027 = (state_27096[(8)]);
var inst_27077 = (state_27096[(11)]);
var inst_27079 = cljs.core.async.muxch_STAR_.call(null,inst_27077);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27096__$1,(22),inst_27079,inst_27027);
} else {
if((state_val_27097 === (11))){
var inst_27037 = (state_27096[(13)]);
var inst_27051 = (state_27096[(10)]);
var inst_27051__$1 = cljs.core.seq.call(null,inst_27037);
var state_27096__$1 = (function (){var statearr_27120 = state_27096;
(statearr_27120[(10)] = inst_27051__$1);

return statearr_27120;
})();
if(inst_27051__$1){
var statearr_27121_27161 = state_27096__$1;
(statearr_27121_27161[(1)] = (13));

} else {
var statearr_27122_27162 = state_27096__$1;
(statearr_27122_27162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (9))){
var inst_27073 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27123_27163 = state_27096__$1;
(statearr_27123_27163[(2)] = inst_27073);

(statearr_27123_27163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (5))){
var inst_27034 = cljs.core.deref.call(null,mults);
var inst_27035 = cljs.core.vals.call(null,inst_27034);
var inst_27036 = cljs.core.seq.call(null,inst_27035);
var inst_27037 = inst_27036;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27096__$1 = (function (){var statearr_27124 = state_27096;
(statearr_27124[(13)] = inst_27037);

(statearr_27124[(14)] = inst_27039);

(statearr_27124[(15)] = inst_27038);

(statearr_27124[(16)] = inst_27040);

return statearr_27124;
})();
var statearr_27125_27164 = state_27096__$1;
(statearr_27125_27164[(2)] = null);

(statearr_27125_27164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (14))){
var state_27096__$1 = state_27096;
var statearr_27129_27165 = state_27096__$1;
(statearr_27129_27165[(2)] = null);

(statearr_27129_27165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (16))){
var inst_27051 = (state_27096[(10)]);
var inst_27055 = cljs.core.chunk_first.call(null,inst_27051);
var inst_27056 = cljs.core.chunk_rest.call(null,inst_27051);
var inst_27057 = cljs.core.count.call(null,inst_27055);
var inst_27037 = inst_27056;
var inst_27038 = inst_27055;
var inst_27039 = inst_27057;
var inst_27040 = (0);
var state_27096__$1 = (function (){var statearr_27130 = state_27096;
(statearr_27130[(13)] = inst_27037);

(statearr_27130[(14)] = inst_27039);

(statearr_27130[(15)] = inst_27038);

(statearr_27130[(16)] = inst_27040);

return statearr_27130;
})();
var statearr_27131_27166 = state_27096__$1;
(statearr_27131_27166[(2)] = null);

(statearr_27131_27166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (10))){
var inst_27037 = (state_27096[(13)]);
var inst_27039 = (state_27096[(14)]);
var inst_27038 = (state_27096[(15)]);
var inst_27040 = (state_27096[(16)]);
var inst_27045 = cljs.core._nth.call(null,inst_27038,inst_27040);
var inst_27046 = cljs.core.async.muxch_STAR_.call(null,inst_27045);
var inst_27047 = cljs.core.async.close_BANG_.call(null,inst_27046);
var inst_27048 = (inst_27040 + (1));
var tmp27126 = inst_27037;
var tmp27127 = inst_27039;
var tmp27128 = inst_27038;
var inst_27037__$1 = tmp27126;
var inst_27038__$1 = tmp27128;
var inst_27039__$1 = tmp27127;
var inst_27040__$1 = inst_27048;
var state_27096__$1 = (function (){var statearr_27132 = state_27096;
(statearr_27132[(13)] = inst_27037__$1);

(statearr_27132[(14)] = inst_27039__$1);

(statearr_27132[(15)] = inst_27038__$1);

(statearr_27132[(17)] = inst_27047);

(statearr_27132[(16)] = inst_27040__$1);

return statearr_27132;
})();
var statearr_27133_27167 = state_27096__$1;
(statearr_27133_27167[(2)] = null);

(statearr_27133_27167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (18))){
var inst_27066 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27134_27168 = state_27096__$1;
(statearr_27134_27168[(2)] = inst_27066);

(statearr_27134_27168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (8))){
var inst_27039 = (state_27096[(14)]);
var inst_27040 = (state_27096[(16)]);
var inst_27042 = (inst_27040 < inst_27039);
var inst_27043 = inst_27042;
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_27043)){
var statearr_27135_27169 = state_27096__$1;
(statearr_27135_27169[(1)] = (10));

} else {
var statearr_27136_27170 = state_27096__$1;
(statearr_27136_27170[(1)] = (11));

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
});})(c__25909__auto___27142,mults,ensure_mult,p))
;
return ((function (switch__25814__auto__,c__25909__auto___27142,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27137[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27137[(1)] = (1));

return statearr_27137;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27096){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27138){if((e27138 instanceof Object)){
var ex__25818__auto__ = e27138;
var statearr_27139_27171 = state_27096;
(statearr_27139_27171[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27172 = state_27096;
state_27096 = G__27172;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27142,mults,ensure_mult,p))
})();
var state__25911__auto__ = (function (){var statearr_27140 = f__25910__auto__.call(null);
(statearr_27140[(6)] = c__25909__auto___27142);

return statearr_27140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27142,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27174 = arguments.length;
switch (G__27174) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27177 = arguments.length;
switch (G__27177) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27180 = arguments.length;
switch (G__27180) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25909__auto___27247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27219){
var state_val_27220 = (state_27219[(1)]);
if((state_val_27220 === (7))){
var state_27219__$1 = state_27219;
var statearr_27221_27248 = state_27219__$1;
(statearr_27221_27248[(2)] = null);

(statearr_27221_27248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (1))){
var state_27219__$1 = state_27219;
var statearr_27222_27249 = state_27219__$1;
(statearr_27222_27249[(2)] = null);

(statearr_27222_27249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (4))){
var inst_27183 = (state_27219[(7)]);
var inst_27185 = (inst_27183 < cnt);
var state_27219__$1 = state_27219;
if(cljs.core.truth_(inst_27185)){
var statearr_27223_27250 = state_27219__$1;
(statearr_27223_27250[(1)] = (6));

} else {
var statearr_27224_27251 = state_27219__$1;
(statearr_27224_27251[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (15))){
var inst_27215 = (state_27219[(2)]);
var state_27219__$1 = state_27219;
var statearr_27225_27252 = state_27219__$1;
(statearr_27225_27252[(2)] = inst_27215);

(statearr_27225_27252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (13))){
var inst_27208 = cljs.core.async.close_BANG_.call(null,out);
var state_27219__$1 = state_27219;
var statearr_27226_27253 = state_27219__$1;
(statearr_27226_27253[(2)] = inst_27208);

(statearr_27226_27253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (6))){
var state_27219__$1 = state_27219;
var statearr_27227_27254 = state_27219__$1;
(statearr_27227_27254[(2)] = null);

(statearr_27227_27254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (3))){
var inst_27217 = (state_27219[(2)]);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27219__$1,inst_27217);
} else {
if((state_val_27220 === (12))){
var inst_27205 = (state_27219[(8)]);
var inst_27205__$1 = (state_27219[(2)]);
var inst_27206 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27205__$1);
var state_27219__$1 = (function (){var statearr_27228 = state_27219;
(statearr_27228[(8)] = inst_27205__$1);

return statearr_27228;
})();
if(cljs.core.truth_(inst_27206)){
var statearr_27229_27255 = state_27219__$1;
(statearr_27229_27255[(1)] = (13));

} else {
var statearr_27230_27256 = state_27219__$1;
(statearr_27230_27256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (2))){
var inst_27182 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27183 = (0);
var state_27219__$1 = (function (){var statearr_27231 = state_27219;
(statearr_27231[(9)] = inst_27182);

(statearr_27231[(7)] = inst_27183);

return statearr_27231;
})();
var statearr_27232_27257 = state_27219__$1;
(statearr_27232_27257[(2)] = null);

(statearr_27232_27257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (11))){
var inst_27183 = (state_27219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27219,(10),Object,null,(9));
var inst_27192 = chs__$1.call(null,inst_27183);
var inst_27193 = done.call(null,inst_27183);
var inst_27194 = cljs.core.async.take_BANG_.call(null,inst_27192,inst_27193);
var state_27219__$1 = state_27219;
var statearr_27233_27258 = state_27219__$1;
(statearr_27233_27258[(2)] = inst_27194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (9))){
var inst_27183 = (state_27219[(7)]);
var inst_27196 = (state_27219[(2)]);
var inst_27197 = (inst_27183 + (1));
var inst_27183__$1 = inst_27197;
var state_27219__$1 = (function (){var statearr_27234 = state_27219;
(statearr_27234[(10)] = inst_27196);

(statearr_27234[(7)] = inst_27183__$1);

return statearr_27234;
})();
var statearr_27235_27259 = state_27219__$1;
(statearr_27235_27259[(2)] = null);

(statearr_27235_27259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (5))){
var inst_27203 = (state_27219[(2)]);
var state_27219__$1 = (function (){var statearr_27236 = state_27219;
(statearr_27236[(11)] = inst_27203);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27219__$1,(12),dchan);
} else {
if((state_val_27220 === (14))){
var inst_27205 = (state_27219[(8)]);
var inst_27210 = cljs.core.apply.call(null,f,inst_27205);
var state_27219__$1 = state_27219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27219__$1,(16),out,inst_27210);
} else {
if((state_val_27220 === (16))){
var inst_27212 = (state_27219[(2)]);
var state_27219__$1 = (function (){var statearr_27237 = state_27219;
(statearr_27237[(12)] = inst_27212);

return statearr_27237;
})();
var statearr_27238_27260 = state_27219__$1;
(statearr_27238_27260[(2)] = null);

(statearr_27238_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (10))){
var inst_27187 = (state_27219[(2)]);
var inst_27188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27219__$1 = (function (){var statearr_27239 = state_27219;
(statearr_27239[(13)] = inst_27187);

return statearr_27239;
})();
var statearr_27240_27261 = state_27219__$1;
(statearr_27240_27261[(2)] = inst_27188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27220 === (8))){
var inst_27201 = (state_27219[(2)]);
var state_27219__$1 = state_27219;
var statearr_27241_27262 = state_27219__$1;
(statearr_27241_27262[(2)] = inst_27201);

(statearr_27241_27262[(1)] = (5));


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
});})(c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25814__auto__,c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27242[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27242[(1)] = (1));

return statearr_27242;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27219){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27243){if((e27243 instanceof Object)){
var ex__25818__auto__ = e27243;
var statearr_27244_27263 = state_27219;
(statearr_27244_27263[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27264 = state_27219;
state_27219 = G__27264;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25911__auto__ = (function (){var statearr_27245 = f__25910__auto__.call(null);
(statearr_27245[(6)] = c__25909__auto___27247);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27247,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27267 = arguments.length;
switch (G__27267) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27321,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27321,out){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27278 = (state_27299[(7)]);
var inst_27279 = (state_27299[(8)]);
var inst_27278__$1 = (state_27299[(2)]);
var inst_27279__$1 = cljs.core.nth.call(null,inst_27278__$1,(0),null);
var inst_27280 = cljs.core.nth.call(null,inst_27278__$1,(1),null);
var inst_27281 = (inst_27279__$1 == null);
var state_27299__$1 = (function (){var statearr_27301 = state_27299;
(statearr_27301[(7)] = inst_27278__$1);

(statearr_27301[(8)] = inst_27279__$1);

(statearr_27301[(9)] = inst_27280);

return statearr_27301;
})();
if(cljs.core.truth_(inst_27281)){
var statearr_27302_27322 = state_27299__$1;
(statearr_27302_27322[(1)] = (8));

} else {
var statearr_27303_27323 = state_27299__$1;
(statearr_27303_27323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var inst_27268 = cljs.core.vec.call(null,chs);
var inst_27269 = inst_27268;
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(10)] = inst_27269);

return statearr_27304;
})();
var statearr_27305_27324 = state_27299__$1;
(statearr_27305_27324[(2)] = null);

(statearr_27305_27324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var inst_27269 = (state_27299[(10)]);
var state_27299__$1 = state_27299;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27299__$1,(7),inst_27269);
} else {
if((state_val_27300 === (6))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27306_27325 = state_27299__$1;
(statearr_27306_27325[(2)] = inst_27295);

(statearr_27306_27325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (2))){
var inst_27269 = (state_27299[(10)]);
var inst_27271 = cljs.core.count.call(null,inst_27269);
var inst_27272 = (inst_27271 > (0));
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27272)){
var statearr_27308_27326 = state_27299__$1;
(statearr_27308_27326[(1)] = (4));

} else {
var statearr_27309_27327 = state_27299__$1;
(statearr_27309_27327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (11))){
var inst_27269 = (state_27299[(10)]);
var inst_27288 = (state_27299[(2)]);
var tmp27307 = inst_27269;
var inst_27269__$1 = tmp27307;
var state_27299__$1 = (function (){var statearr_27310 = state_27299;
(statearr_27310[(11)] = inst_27288);

(statearr_27310[(10)] = inst_27269__$1);

return statearr_27310;
})();
var statearr_27311_27328 = state_27299__$1;
(statearr_27311_27328[(2)] = null);

(statearr_27311_27328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var inst_27279 = (state_27299[(8)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(11),out,inst_27279);
} else {
if((state_val_27300 === (5))){
var inst_27293 = cljs.core.async.close_BANG_.call(null,out);
var state_27299__$1 = state_27299;
var statearr_27312_27329 = state_27299__$1;
(statearr_27312_27329[(2)] = inst_27293);

(statearr_27312_27329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27291 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27313_27330 = state_27299__$1;
(statearr_27313_27330[(2)] = inst_27291);

(statearr_27313_27330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27278 = (state_27299[(7)]);
var inst_27269 = (state_27299[(10)]);
var inst_27279 = (state_27299[(8)]);
var inst_27280 = (state_27299[(9)]);
var inst_27283 = (function (){var cs = inst_27269;
var vec__27274 = inst_27278;
var v = inst_27279;
var c = inst_27280;
return ((function (cs,vec__27274,v,c,inst_27278,inst_27269,inst_27279,inst_27280,state_val_27300,c__25909__auto___27321,out){
return (function (p1__27265_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27265_SHARP_);
});
;})(cs,vec__27274,v,c,inst_27278,inst_27269,inst_27279,inst_27280,state_val_27300,c__25909__auto___27321,out))
})();
var inst_27284 = cljs.core.filterv.call(null,inst_27283,inst_27269);
var inst_27269__$1 = inst_27284;
var state_27299__$1 = (function (){var statearr_27314 = state_27299;
(statearr_27314[(10)] = inst_27269__$1);

return statearr_27314;
})();
var statearr_27315_27331 = state_27299__$1;
(statearr_27315_27331[(2)] = null);

(statearr_27315_27331[(1)] = (2));


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
});})(c__25909__auto___27321,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27321,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27299){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27317){if((e27317 instanceof Object)){
var ex__25818__auto__ = e27317;
var statearr_27318_27332 = state_27299;
(statearr_27318_27332[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27333 = state_27299;
state_27299 = G__27333;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27321,out))
})();
var state__25911__auto__ = (function (){var statearr_27319 = f__25910__auto__.call(null);
(statearr_27319[(6)] = c__25909__auto___27321);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27321,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27335 = arguments.length;
switch (G__27335) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27380,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27380,out){
return (function (state_27359){
var state_val_27360 = (state_27359[(1)]);
if((state_val_27360 === (7))){
var inst_27341 = (state_27359[(7)]);
var inst_27341__$1 = (state_27359[(2)]);
var inst_27342 = (inst_27341__$1 == null);
var inst_27343 = cljs.core.not.call(null,inst_27342);
var state_27359__$1 = (function (){var statearr_27361 = state_27359;
(statearr_27361[(7)] = inst_27341__$1);

return statearr_27361;
})();
if(inst_27343){
var statearr_27362_27381 = state_27359__$1;
(statearr_27362_27381[(1)] = (8));

} else {
var statearr_27363_27382 = state_27359__$1;
(statearr_27363_27382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (1))){
var inst_27336 = (0);
var state_27359__$1 = (function (){var statearr_27364 = state_27359;
(statearr_27364[(8)] = inst_27336);

return statearr_27364;
})();
var statearr_27365_27383 = state_27359__$1;
(statearr_27365_27383[(2)] = null);

(statearr_27365_27383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (4))){
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27359__$1,(7),ch);
} else {
if((state_val_27360 === (6))){
var inst_27354 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27366_27384 = state_27359__$1;
(statearr_27366_27384[(2)] = inst_27354);

(statearr_27366_27384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (3))){
var inst_27356 = (state_27359[(2)]);
var inst_27357 = cljs.core.async.close_BANG_.call(null,out);
var state_27359__$1 = (function (){var statearr_27367 = state_27359;
(statearr_27367[(9)] = inst_27356);

return statearr_27367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27359__$1,inst_27357);
} else {
if((state_val_27360 === (2))){
var inst_27336 = (state_27359[(8)]);
var inst_27338 = (inst_27336 < n);
var state_27359__$1 = state_27359;
if(cljs.core.truth_(inst_27338)){
var statearr_27368_27385 = state_27359__$1;
(statearr_27368_27385[(1)] = (4));

} else {
var statearr_27369_27386 = state_27359__$1;
(statearr_27369_27386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (11))){
var inst_27336 = (state_27359[(8)]);
var inst_27346 = (state_27359[(2)]);
var inst_27347 = (inst_27336 + (1));
var inst_27336__$1 = inst_27347;
var state_27359__$1 = (function (){var statearr_27370 = state_27359;
(statearr_27370[(8)] = inst_27336__$1);

(statearr_27370[(10)] = inst_27346);

return statearr_27370;
})();
var statearr_27371_27387 = state_27359__$1;
(statearr_27371_27387[(2)] = null);

(statearr_27371_27387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (9))){
var state_27359__$1 = state_27359;
var statearr_27372_27388 = state_27359__$1;
(statearr_27372_27388[(2)] = null);

(statearr_27372_27388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (5))){
var state_27359__$1 = state_27359;
var statearr_27373_27389 = state_27359__$1;
(statearr_27373_27389[(2)] = null);

(statearr_27373_27389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (10))){
var inst_27351 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27374_27390 = state_27359__$1;
(statearr_27374_27390[(2)] = inst_27351);

(statearr_27374_27390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (8))){
var inst_27341 = (state_27359[(7)]);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27359__$1,(11),out,inst_27341);
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
});})(c__25909__auto___27380,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27380,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27375[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27375[(1)] = (1));

return statearr_27375;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27359){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27376){if((e27376 instanceof Object)){
var ex__25818__auto__ = e27376;
var statearr_27377_27391 = state_27359;
(statearr_27377_27391[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27392 = state_27359;
state_27359 = G__27392;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27380,out))
})();
var state__25911__auto__ = (function (){var statearr_27378 = f__25910__auto__.call(null);
(statearr_27378[(6)] = c__25909__auto___27380);

return statearr_27378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27380,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27394 = (function (f,ch,meta27395){
this.f = f;
this.ch = ch;
this.meta27395 = meta27395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27396,meta27395__$1){
var self__ = this;
var _27396__$1 = this;
return (new cljs.core.async.t_cljs$core$async27394(self__.f,self__.ch,meta27395__$1));
});

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27396){
var self__ = this;
var _27396__$1 = this;
return self__.meta27395;
});

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27397 = (function (f,ch,meta27395,_,fn1,meta27398){
this.f = f;
this.ch = ch;
this.meta27395 = meta27395;
this._ = _;
this.fn1 = fn1;
this.meta27398 = meta27398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27399,meta27398__$1){
var self__ = this;
var _27399__$1 = this;
return (new cljs.core.async.t_cljs$core$async27397(self__.f,self__.ch,self__.meta27395,self__._,self__.fn1,meta27398__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27399){
var self__ = this;
var _27399__$1 = this;
return self__.meta27398;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27393_SHARP_){
return f1.call(null,(((p1__27393_SHARP_ == null))?null:self__.f.call(null,p1__27393_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27395","meta27395",-688411056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27394","cljs.core.async/t_cljs$core$async27394",-889105090,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27398","meta27398",487647027,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27397";

cljs.core.async.t_cljs$core$async27397.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27397");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27397.
 */
cljs.core.async.__GT_t_cljs$core$async27397 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27397(f__$1,ch__$1,meta27395__$1,___$2,fn1__$1,meta27398){
return (new cljs.core.async.t_cljs$core$async27397(f__$1,ch__$1,meta27395__$1,___$2,fn1__$1,meta27398));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27397(self__.f,self__.ch,self__.meta27395,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27395","meta27395",-688411056,null)], null);
});

cljs.core.async.t_cljs$core$async27394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27394";

cljs.core.async.t_cljs$core$async27394.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27394");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27394.
 */
cljs.core.async.__GT_t_cljs$core$async27394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27394(f__$1,ch__$1,meta27395){
return (new cljs.core.async.t_cljs$core$async27394(f__$1,ch__$1,meta27395));
});

}

return (new cljs.core.async.t_cljs$core$async27394(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27400 = (function (f,ch,meta27401){
this.f = f;
this.ch = ch;
this.meta27401 = meta27401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27402,meta27401__$1){
var self__ = this;
var _27402__$1 = this;
return (new cljs.core.async.t_cljs$core$async27400(self__.f,self__.ch,meta27401__$1));
});

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27402){
var self__ = this;
var _27402__$1 = this;
return self__.meta27401;
});

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27401","meta27401",-791250219,null)], null);
});

cljs.core.async.t_cljs$core$async27400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27400";

cljs.core.async.t_cljs$core$async27400.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27400");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27400.
 */
cljs.core.async.__GT_t_cljs$core$async27400 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27400(f__$1,ch__$1,meta27401){
return (new cljs.core.async.t_cljs$core$async27400(f__$1,ch__$1,meta27401));
});

}

return (new cljs.core.async.t_cljs$core$async27400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27403 = (function (p,ch,meta27404){
this.p = p;
this.ch = ch;
this.meta27404 = meta27404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27405,meta27404__$1){
var self__ = this;
var _27405__$1 = this;
return (new cljs.core.async.t_cljs$core$async27403(self__.p,self__.ch,meta27404__$1));
});

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27405){
var self__ = this;
var _27405__$1 = this;
return self__.meta27404;
});

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27404","meta27404",2118455434,null)], null);
});

cljs.core.async.t_cljs$core$async27403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27403";

cljs.core.async.t_cljs$core$async27403.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27403");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27403.
 */
cljs.core.async.__GT_t_cljs$core$async27403 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27403(p__$1,ch__$1,meta27404){
return (new cljs.core.async.t_cljs$core$async27403(p__$1,ch__$1,meta27404));
});

}

return (new cljs.core.async.t_cljs$core$async27403(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27407 = arguments.length;
switch (G__27407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27447,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27447,out){
return (function (state_27428){
var state_val_27429 = (state_27428[(1)]);
if((state_val_27429 === (7))){
var inst_27424 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
var statearr_27430_27448 = state_27428__$1;
(statearr_27430_27448[(2)] = inst_27424);

(statearr_27430_27448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (1))){
var state_27428__$1 = state_27428;
var statearr_27431_27449 = state_27428__$1;
(statearr_27431_27449[(2)] = null);

(statearr_27431_27449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (4))){
var inst_27410 = (state_27428[(7)]);
var inst_27410__$1 = (state_27428[(2)]);
var inst_27411 = (inst_27410__$1 == null);
var state_27428__$1 = (function (){var statearr_27432 = state_27428;
(statearr_27432[(7)] = inst_27410__$1);

return statearr_27432;
})();
if(cljs.core.truth_(inst_27411)){
var statearr_27433_27450 = state_27428__$1;
(statearr_27433_27450[(1)] = (5));

} else {
var statearr_27434_27451 = state_27428__$1;
(statearr_27434_27451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (6))){
var inst_27410 = (state_27428[(7)]);
var inst_27415 = p.call(null,inst_27410);
var state_27428__$1 = state_27428;
if(cljs.core.truth_(inst_27415)){
var statearr_27435_27452 = state_27428__$1;
(statearr_27435_27452[(1)] = (8));

} else {
var statearr_27436_27453 = state_27428__$1;
(statearr_27436_27453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (3))){
var inst_27426 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27428__$1,inst_27426);
} else {
if((state_val_27429 === (2))){
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27428__$1,(4),ch);
} else {
if((state_val_27429 === (11))){
var inst_27418 = (state_27428[(2)]);
var state_27428__$1 = state_27428;
var statearr_27437_27454 = state_27428__$1;
(statearr_27437_27454[(2)] = inst_27418);

(statearr_27437_27454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (9))){
var state_27428__$1 = state_27428;
var statearr_27438_27455 = state_27428__$1;
(statearr_27438_27455[(2)] = null);

(statearr_27438_27455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (5))){
var inst_27413 = cljs.core.async.close_BANG_.call(null,out);
var state_27428__$1 = state_27428;
var statearr_27439_27456 = state_27428__$1;
(statearr_27439_27456[(2)] = inst_27413);

(statearr_27439_27456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (10))){
var inst_27421 = (state_27428[(2)]);
var state_27428__$1 = (function (){var statearr_27440 = state_27428;
(statearr_27440[(8)] = inst_27421);

return statearr_27440;
})();
var statearr_27441_27457 = state_27428__$1;
(statearr_27441_27457[(2)] = null);

(statearr_27441_27457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27429 === (8))){
var inst_27410 = (state_27428[(7)]);
var state_27428__$1 = state_27428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27428__$1,(11),out,inst_27410);
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
});})(c__25909__auto___27447,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27447,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27442 = [null,null,null,null,null,null,null,null,null];
(statearr_27442[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27442[(1)] = (1));

return statearr_27442;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27428){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27443){if((e27443 instanceof Object)){
var ex__25818__auto__ = e27443;
var statearr_27444_27458 = state_27428;
(statearr_27444_27458[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27459 = state_27428;
state_27428 = G__27459;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27447,out))
})();
var state__25911__auto__ = (function (){var statearr_27445 = f__25910__auto__.call(null);
(statearr_27445[(6)] = c__25909__auto___27447);

return statearr_27445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27447,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27461 = arguments.length;
switch (G__27461) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto__){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto__){
return (function (state_27524){
var state_val_27525 = (state_27524[(1)]);
if((state_val_27525 === (7))){
var inst_27520 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27526_27564 = state_27524__$1;
(statearr_27526_27564[(2)] = inst_27520);

(statearr_27526_27564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (20))){
var inst_27490 = (state_27524[(7)]);
var inst_27501 = (state_27524[(2)]);
var inst_27502 = cljs.core.next.call(null,inst_27490);
var inst_27476 = inst_27502;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27524__$1 = (function (){var statearr_27527 = state_27524;
(statearr_27527[(8)] = inst_27477);

(statearr_27527[(9)] = inst_27501);

(statearr_27527[(10)] = inst_27476);

(statearr_27527[(11)] = inst_27479);

(statearr_27527[(12)] = inst_27478);

return statearr_27527;
})();
var statearr_27528_27565 = state_27524__$1;
(statearr_27528_27565[(2)] = null);

(statearr_27528_27565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (1))){
var state_27524__$1 = state_27524;
var statearr_27529_27566 = state_27524__$1;
(statearr_27529_27566[(2)] = null);

(statearr_27529_27566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (4))){
var inst_27465 = (state_27524[(13)]);
var inst_27465__$1 = (state_27524[(2)]);
var inst_27466 = (inst_27465__$1 == null);
var state_27524__$1 = (function (){var statearr_27530 = state_27524;
(statearr_27530[(13)] = inst_27465__$1);

return statearr_27530;
})();
if(cljs.core.truth_(inst_27466)){
var statearr_27531_27567 = state_27524__$1;
(statearr_27531_27567[(1)] = (5));

} else {
var statearr_27532_27568 = state_27524__$1;
(statearr_27532_27568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (15))){
var state_27524__$1 = state_27524;
var statearr_27536_27569 = state_27524__$1;
(statearr_27536_27569[(2)] = null);

(statearr_27536_27569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (21))){
var state_27524__$1 = state_27524;
var statearr_27537_27570 = state_27524__$1;
(statearr_27537_27570[(2)] = null);

(statearr_27537_27570[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (13))){
var inst_27477 = (state_27524[(8)]);
var inst_27476 = (state_27524[(10)]);
var inst_27479 = (state_27524[(11)]);
var inst_27478 = (state_27524[(12)]);
var inst_27486 = (state_27524[(2)]);
var inst_27487 = (inst_27479 + (1));
var tmp27533 = inst_27477;
var tmp27534 = inst_27476;
var tmp27535 = inst_27478;
var inst_27476__$1 = tmp27534;
var inst_27477__$1 = tmp27533;
var inst_27478__$1 = tmp27535;
var inst_27479__$1 = inst_27487;
var state_27524__$1 = (function (){var statearr_27538 = state_27524;
(statearr_27538[(8)] = inst_27477__$1);

(statearr_27538[(10)] = inst_27476__$1);

(statearr_27538[(11)] = inst_27479__$1);

(statearr_27538[(12)] = inst_27478__$1);

(statearr_27538[(14)] = inst_27486);

return statearr_27538;
})();
var statearr_27539_27571 = state_27524__$1;
(statearr_27539_27571[(2)] = null);

(statearr_27539_27571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (22))){
var state_27524__$1 = state_27524;
var statearr_27540_27572 = state_27524__$1;
(statearr_27540_27572[(2)] = null);

(statearr_27540_27572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (6))){
var inst_27465 = (state_27524[(13)]);
var inst_27474 = f.call(null,inst_27465);
var inst_27475 = cljs.core.seq.call(null,inst_27474);
var inst_27476 = inst_27475;
var inst_27477 = null;
var inst_27478 = (0);
var inst_27479 = (0);
var state_27524__$1 = (function (){var statearr_27541 = state_27524;
(statearr_27541[(8)] = inst_27477);

(statearr_27541[(10)] = inst_27476);

(statearr_27541[(11)] = inst_27479);

(statearr_27541[(12)] = inst_27478);

return statearr_27541;
})();
var statearr_27542_27573 = state_27524__$1;
(statearr_27542_27573[(2)] = null);

(statearr_27542_27573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (17))){
var inst_27490 = (state_27524[(7)]);
var inst_27494 = cljs.core.chunk_first.call(null,inst_27490);
var inst_27495 = cljs.core.chunk_rest.call(null,inst_27490);
var inst_27496 = cljs.core.count.call(null,inst_27494);
var inst_27476 = inst_27495;
var inst_27477 = inst_27494;
var inst_27478 = inst_27496;
var inst_27479 = (0);
var state_27524__$1 = (function (){var statearr_27543 = state_27524;
(statearr_27543[(8)] = inst_27477);

(statearr_27543[(10)] = inst_27476);

(statearr_27543[(11)] = inst_27479);

(statearr_27543[(12)] = inst_27478);

return statearr_27543;
})();
var statearr_27544_27574 = state_27524__$1;
(statearr_27544_27574[(2)] = null);

(statearr_27544_27574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (3))){
var inst_27522 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27524__$1,inst_27522);
} else {
if((state_val_27525 === (12))){
var inst_27510 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27545_27575 = state_27524__$1;
(statearr_27545_27575[(2)] = inst_27510);

(statearr_27545_27575[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (2))){
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27524__$1,(4),in$);
} else {
if((state_val_27525 === (23))){
var inst_27518 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27546_27576 = state_27524__$1;
(statearr_27546_27576[(2)] = inst_27518);

(statearr_27546_27576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (19))){
var inst_27505 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27547_27577 = state_27524__$1;
(statearr_27547_27577[(2)] = inst_27505);

(statearr_27547_27577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (11))){
var inst_27476 = (state_27524[(10)]);
var inst_27490 = (state_27524[(7)]);
var inst_27490__$1 = cljs.core.seq.call(null,inst_27476);
var state_27524__$1 = (function (){var statearr_27548 = state_27524;
(statearr_27548[(7)] = inst_27490__$1);

return statearr_27548;
})();
if(inst_27490__$1){
var statearr_27549_27578 = state_27524__$1;
(statearr_27549_27578[(1)] = (14));

} else {
var statearr_27550_27579 = state_27524__$1;
(statearr_27550_27579[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (9))){
var inst_27512 = (state_27524[(2)]);
var inst_27513 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27524__$1 = (function (){var statearr_27551 = state_27524;
(statearr_27551[(15)] = inst_27512);

return statearr_27551;
})();
if(cljs.core.truth_(inst_27513)){
var statearr_27552_27580 = state_27524__$1;
(statearr_27552_27580[(1)] = (21));

} else {
var statearr_27553_27581 = state_27524__$1;
(statearr_27553_27581[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (5))){
var inst_27468 = cljs.core.async.close_BANG_.call(null,out);
var state_27524__$1 = state_27524;
var statearr_27554_27582 = state_27524__$1;
(statearr_27554_27582[(2)] = inst_27468);

(statearr_27554_27582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (14))){
var inst_27490 = (state_27524[(7)]);
var inst_27492 = cljs.core.chunked_seq_QMARK_.call(null,inst_27490);
var state_27524__$1 = state_27524;
if(inst_27492){
var statearr_27555_27583 = state_27524__$1;
(statearr_27555_27583[(1)] = (17));

} else {
var statearr_27556_27584 = state_27524__$1;
(statearr_27556_27584[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (16))){
var inst_27508 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27557_27585 = state_27524__$1;
(statearr_27557_27585[(2)] = inst_27508);

(statearr_27557_27585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (10))){
var inst_27477 = (state_27524[(8)]);
var inst_27479 = (state_27524[(11)]);
var inst_27484 = cljs.core._nth.call(null,inst_27477,inst_27479);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27524__$1,(13),out,inst_27484);
} else {
if((state_val_27525 === (18))){
var inst_27490 = (state_27524[(7)]);
var inst_27499 = cljs.core.first.call(null,inst_27490);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27524__$1,(20),out,inst_27499);
} else {
if((state_val_27525 === (8))){
var inst_27479 = (state_27524[(11)]);
var inst_27478 = (state_27524[(12)]);
var inst_27481 = (inst_27479 < inst_27478);
var inst_27482 = inst_27481;
var state_27524__$1 = state_27524;
if(cljs.core.truth_(inst_27482)){
var statearr_27558_27586 = state_27524__$1;
(statearr_27558_27586[(1)] = (10));

} else {
var statearr_27559_27587 = state_27524__$1;
(statearr_27559_27587[(1)] = (11));

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
});})(c__25909__auto__))
;
return ((function (switch__25814__auto__,c__25909__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____0 = (function (){
var statearr_27560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27560[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____1 = (function (state_27524){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27561){if((e27561 instanceof Object)){
var ex__25818__auto__ = e27561;
var statearr_27562_27588 = state_27524;
(statearr_27562_27588[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27589 = state_27524;
state_27524 = G__27589;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__ = function(state_27524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____1.call(this,state_27524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25815__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto__))
})();
var state__25911__auto__ = (function (){var statearr_27563 = f__25910__auto__.call(null);
(statearr_27563[(6)] = c__25909__auto__);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto__))
);

return c__25909__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27591 = arguments.length;
switch (G__27591) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27594 = arguments.length;
switch (G__27594) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27597 = arguments.length;
switch (G__27597) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27644,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27644,out){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (7))){
var inst_27616 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27623_27645 = state_27621__$1;
(statearr_27623_27645[(2)] = inst_27616);

(statearr_27623_27645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (1))){
var inst_27598 = null;
var state_27621__$1 = (function (){var statearr_27624 = state_27621;
(statearr_27624[(7)] = inst_27598);

return statearr_27624;
})();
var statearr_27625_27646 = state_27621__$1;
(statearr_27625_27646[(2)] = null);

(statearr_27625_27646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (4))){
var inst_27601 = (state_27621[(8)]);
var inst_27601__$1 = (state_27621[(2)]);
var inst_27602 = (inst_27601__$1 == null);
var inst_27603 = cljs.core.not.call(null,inst_27602);
var state_27621__$1 = (function (){var statearr_27626 = state_27621;
(statearr_27626[(8)] = inst_27601__$1);

return statearr_27626;
})();
if(inst_27603){
var statearr_27627_27647 = state_27621__$1;
(statearr_27627_27647[(1)] = (5));

} else {
var statearr_27628_27648 = state_27621__$1;
(statearr_27628_27648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var state_27621__$1 = state_27621;
var statearr_27629_27649 = state_27621__$1;
(statearr_27629_27649[(2)] = null);

(statearr_27629_27649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (3))){
var inst_27618 = (state_27621[(2)]);
var inst_27619 = cljs.core.async.close_BANG_.call(null,out);
var state_27621__$1 = (function (){var statearr_27630 = state_27621;
(statearr_27630[(9)] = inst_27618);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(4),ch);
} else {
if((state_val_27622 === (11))){
var inst_27601 = (state_27621[(8)]);
var inst_27610 = (state_27621[(2)]);
var inst_27598 = inst_27601;
var state_27621__$1 = (function (){var statearr_27631 = state_27621;
(statearr_27631[(10)] = inst_27610);

(statearr_27631[(7)] = inst_27598);

return statearr_27631;
})();
var statearr_27632_27650 = state_27621__$1;
(statearr_27632_27650[(2)] = null);

(statearr_27632_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (9))){
var inst_27601 = (state_27621[(8)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(11),out,inst_27601);
} else {
if((state_val_27622 === (5))){
var inst_27601 = (state_27621[(8)]);
var inst_27598 = (state_27621[(7)]);
var inst_27605 = cljs.core._EQ_.call(null,inst_27601,inst_27598);
var state_27621__$1 = state_27621;
if(inst_27605){
var statearr_27634_27651 = state_27621__$1;
(statearr_27634_27651[(1)] = (8));

} else {
var statearr_27635_27652 = state_27621__$1;
(statearr_27635_27652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (10))){
var inst_27613 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27636_27653 = state_27621__$1;
(statearr_27636_27653[(2)] = inst_27613);

(statearr_27636_27653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (8))){
var inst_27598 = (state_27621[(7)]);
var tmp27633 = inst_27598;
var inst_27598__$1 = tmp27633;
var state_27621__$1 = (function (){var statearr_27637 = state_27621;
(statearr_27637[(7)] = inst_27598__$1);

return statearr_27637;
})();
var statearr_27638_27654 = state_27621__$1;
(statearr_27638_27654[(2)] = null);

(statearr_27638_27654[(1)] = (2));


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
});})(c__25909__auto___27644,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27644,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27639[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27621){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__25818__auto__ = e27640;
var statearr_27641_27655 = state_27621;
(statearr_27641_27655[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27656 = state_27621;
state_27621 = G__27656;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27644,out))
})();
var state__25911__auto__ = (function (){var statearr_27642 = f__25910__auto__.call(null);
(statearr_27642[(6)] = c__25909__auto___27644);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27644,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27658 = arguments.length;
switch (G__27658) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27724,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27724,out){
return (function (state_27696){
var state_val_27697 = (state_27696[(1)]);
if((state_val_27697 === (7))){
var inst_27692 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27698_27725 = state_27696__$1;
(statearr_27698_27725[(2)] = inst_27692);

(statearr_27698_27725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (1))){
var inst_27659 = (new Array(n));
var inst_27660 = inst_27659;
var inst_27661 = (0);
var state_27696__$1 = (function (){var statearr_27699 = state_27696;
(statearr_27699[(7)] = inst_27661);

(statearr_27699[(8)] = inst_27660);

return statearr_27699;
})();
var statearr_27700_27726 = state_27696__$1;
(statearr_27700_27726[(2)] = null);

(statearr_27700_27726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (4))){
var inst_27664 = (state_27696[(9)]);
var inst_27664__$1 = (state_27696[(2)]);
var inst_27665 = (inst_27664__$1 == null);
var inst_27666 = cljs.core.not.call(null,inst_27665);
var state_27696__$1 = (function (){var statearr_27701 = state_27696;
(statearr_27701[(9)] = inst_27664__$1);

return statearr_27701;
})();
if(inst_27666){
var statearr_27702_27727 = state_27696__$1;
(statearr_27702_27727[(1)] = (5));

} else {
var statearr_27703_27728 = state_27696__$1;
(statearr_27703_27728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (15))){
var inst_27686 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27704_27729 = state_27696__$1;
(statearr_27704_27729[(2)] = inst_27686);

(statearr_27704_27729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (13))){
var state_27696__$1 = state_27696;
var statearr_27705_27730 = state_27696__$1;
(statearr_27705_27730[(2)] = null);

(statearr_27705_27730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (6))){
var inst_27661 = (state_27696[(7)]);
var inst_27682 = (inst_27661 > (0));
var state_27696__$1 = state_27696;
if(cljs.core.truth_(inst_27682)){
var statearr_27706_27731 = state_27696__$1;
(statearr_27706_27731[(1)] = (12));

} else {
var statearr_27707_27732 = state_27696__$1;
(statearr_27707_27732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (3))){
var inst_27694 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27696__$1,inst_27694);
} else {
if((state_val_27697 === (12))){
var inst_27660 = (state_27696[(8)]);
var inst_27684 = cljs.core.vec.call(null,inst_27660);
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27696__$1,(15),out,inst_27684);
} else {
if((state_val_27697 === (2))){
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27696__$1,(4),ch);
} else {
if((state_val_27697 === (11))){
var inst_27676 = (state_27696[(2)]);
var inst_27677 = (new Array(n));
var inst_27660 = inst_27677;
var inst_27661 = (0);
var state_27696__$1 = (function (){var statearr_27708 = state_27696;
(statearr_27708[(10)] = inst_27676);

(statearr_27708[(7)] = inst_27661);

(statearr_27708[(8)] = inst_27660);

return statearr_27708;
})();
var statearr_27709_27733 = state_27696__$1;
(statearr_27709_27733[(2)] = null);

(statearr_27709_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (9))){
var inst_27660 = (state_27696[(8)]);
var inst_27674 = cljs.core.vec.call(null,inst_27660);
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27696__$1,(11),out,inst_27674);
} else {
if((state_val_27697 === (5))){
var inst_27664 = (state_27696[(9)]);
var inst_27669 = (state_27696[(11)]);
var inst_27661 = (state_27696[(7)]);
var inst_27660 = (state_27696[(8)]);
var inst_27668 = (inst_27660[inst_27661] = inst_27664);
var inst_27669__$1 = (inst_27661 + (1));
var inst_27670 = (inst_27669__$1 < n);
var state_27696__$1 = (function (){var statearr_27710 = state_27696;
(statearr_27710[(11)] = inst_27669__$1);

(statearr_27710[(12)] = inst_27668);

return statearr_27710;
})();
if(cljs.core.truth_(inst_27670)){
var statearr_27711_27734 = state_27696__$1;
(statearr_27711_27734[(1)] = (8));

} else {
var statearr_27712_27735 = state_27696__$1;
(statearr_27712_27735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (14))){
var inst_27689 = (state_27696[(2)]);
var inst_27690 = cljs.core.async.close_BANG_.call(null,out);
var state_27696__$1 = (function (){var statearr_27714 = state_27696;
(statearr_27714[(13)] = inst_27689);

return statearr_27714;
})();
var statearr_27715_27736 = state_27696__$1;
(statearr_27715_27736[(2)] = inst_27690);

(statearr_27715_27736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (10))){
var inst_27680 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27716_27737 = state_27696__$1;
(statearr_27716_27737[(2)] = inst_27680);

(statearr_27716_27737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (8))){
var inst_27669 = (state_27696[(11)]);
var inst_27660 = (state_27696[(8)]);
var tmp27713 = inst_27660;
var inst_27660__$1 = tmp27713;
var inst_27661 = inst_27669;
var state_27696__$1 = (function (){var statearr_27717 = state_27696;
(statearr_27717[(7)] = inst_27661);

(statearr_27717[(8)] = inst_27660__$1);

return statearr_27717;
})();
var statearr_27718_27738 = state_27696__$1;
(statearr_27718_27738[(2)] = null);

(statearr_27718_27738[(1)] = (2));


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
});})(c__25909__auto___27724,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27724,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27696){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__25818__auto__ = e27720;
var statearr_27721_27739 = state_27696;
(statearr_27721_27739[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27740 = state_27696;
state_27696 = G__27740;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27724,out))
})();
var state__25911__auto__ = (function (){var statearr_27722 = f__25910__auto__.call(null);
(statearr_27722[(6)] = c__25909__auto___27724);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27724,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27742 = arguments.length;
switch (G__27742) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25909__auto___27812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25909__auto___27812,out){
return (function (){
var f__25910__auto__ = (function (){var switch__25814__auto__ = ((function (c__25909__auto___27812,out){
return (function (state_27784){
var state_val_27785 = (state_27784[(1)]);
if((state_val_27785 === (7))){
var inst_27780 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27786_27813 = state_27784__$1;
(statearr_27786_27813[(2)] = inst_27780);

(statearr_27786_27813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (1))){
var inst_27743 = [];
var inst_27744 = inst_27743;
var inst_27745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27784__$1 = (function (){var statearr_27787 = state_27784;
(statearr_27787[(7)] = inst_27744);

(statearr_27787[(8)] = inst_27745);

return statearr_27787;
})();
var statearr_27788_27814 = state_27784__$1;
(statearr_27788_27814[(2)] = null);

(statearr_27788_27814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (4))){
var inst_27748 = (state_27784[(9)]);
var inst_27748__$1 = (state_27784[(2)]);
var inst_27749 = (inst_27748__$1 == null);
var inst_27750 = cljs.core.not.call(null,inst_27749);
var state_27784__$1 = (function (){var statearr_27789 = state_27784;
(statearr_27789[(9)] = inst_27748__$1);

return statearr_27789;
})();
if(inst_27750){
var statearr_27790_27815 = state_27784__$1;
(statearr_27790_27815[(1)] = (5));

} else {
var statearr_27791_27816 = state_27784__$1;
(statearr_27791_27816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (15))){
var inst_27774 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27792_27817 = state_27784__$1;
(statearr_27792_27817[(2)] = inst_27774);

(statearr_27792_27817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (13))){
var state_27784__$1 = state_27784;
var statearr_27793_27818 = state_27784__$1;
(statearr_27793_27818[(2)] = null);

(statearr_27793_27818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (6))){
var inst_27744 = (state_27784[(7)]);
var inst_27769 = inst_27744.length;
var inst_27770 = (inst_27769 > (0));
var state_27784__$1 = state_27784;
if(cljs.core.truth_(inst_27770)){
var statearr_27794_27819 = state_27784__$1;
(statearr_27794_27819[(1)] = (12));

} else {
var statearr_27795_27820 = state_27784__$1;
(statearr_27795_27820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (3))){
var inst_27782 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27784__$1,inst_27782);
} else {
if((state_val_27785 === (12))){
var inst_27744 = (state_27784[(7)]);
var inst_27772 = cljs.core.vec.call(null,inst_27744);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27784__$1,(15),out,inst_27772);
} else {
if((state_val_27785 === (2))){
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27784__$1,(4),ch);
} else {
if((state_val_27785 === (11))){
var inst_27748 = (state_27784[(9)]);
var inst_27752 = (state_27784[(10)]);
var inst_27762 = (state_27784[(2)]);
var inst_27763 = [];
var inst_27764 = inst_27763.push(inst_27748);
var inst_27744 = inst_27763;
var inst_27745 = inst_27752;
var state_27784__$1 = (function (){var statearr_27796 = state_27784;
(statearr_27796[(11)] = inst_27762);

(statearr_27796[(12)] = inst_27764);

(statearr_27796[(7)] = inst_27744);

(statearr_27796[(8)] = inst_27745);

return statearr_27796;
})();
var statearr_27797_27821 = state_27784__$1;
(statearr_27797_27821[(2)] = null);

(statearr_27797_27821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (9))){
var inst_27744 = (state_27784[(7)]);
var inst_27760 = cljs.core.vec.call(null,inst_27744);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27784__$1,(11),out,inst_27760);
} else {
if((state_val_27785 === (5))){
var inst_27748 = (state_27784[(9)]);
var inst_27745 = (state_27784[(8)]);
var inst_27752 = (state_27784[(10)]);
var inst_27752__$1 = f.call(null,inst_27748);
var inst_27753 = cljs.core._EQ_.call(null,inst_27752__$1,inst_27745);
var inst_27754 = cljs.core.keyword_identical_QMARK_.call(null,inst_27745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27755 = ((inst_27753) || (inst_27754));
var state_27784__$1 = (function (){var statearr_27798 = state_27784;
(statearr_27798[(10)] = inst_27752__$1);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27755)){
var statearr_27799_27822 = state_27784__$1;
(statearr_27799_27822[(1)] = (8));

} else {
var statearr_27800_27823 = state_27784__$1;
(statearr_27800_27823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (14))){
var inst_27777 = (state_27784[(2)]);
var inst_27778 = cljs.core.async.close_BANG_.call(null,out);
var state_27784__$1 = (function (){var statearr_27802 = state_27784;
(statearr_27802[(13)] = inst_27777);

return statearr_27802;
})();
var statearr_27803_27824 = state_27784__$1;
(statearr_27803_27824[(2)] = inst_27778);

(statearr_27803_27824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (10))){
var inst_27767 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27804_27825 = state_27784__$1;
(statearr_27804_27825[(2)] = inst_27767);

(statearr_27804_27825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (8))){
var inst_27748 = (state_27784[(9)]);
var inst_27744 = (state_27784[(7)]);
var inst_27752 = (state_27784[(10)]);
var inst_27757 = inst_27744.push(inst_27748);
var tmp27801 = inst_27744;
var inst_27744__$1 = tmp27801;
var inst_27745 = inst_27752;
var state_27784__$1 = (function (){var statearr_27805 = state_27784;
(statearr_27805[(14)] = inst_27757);

(statearr_27805[(7)] = inst_27744__$1);

(statearr_27805[(8)] = inst_27745);

return statearr_27805;
})();
var statearr_27806_27826 = state_27784__$1;
(statearr_27806_27826[(2)] = null);

(statearr_27806_27826[(1)] = (2));


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
});})(c__25909__auto___27812,out))
;
return ((function (switch__25814__auto__,c__25909__auto___27812,out){
return (function() {
var cljs$core$async$state_machine__25815__auto__ = null;
var cljs$core$async$state_machine__25815__auto____0 = (function (){
var statearr_27807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27807[(0)] = cljs$core$async$state_machine__25815__auto__);

(statearr_27807[(1)] = (1));

return statearr_27807;
});
var cljs$core$async$state_machine__25815__auto____1 = (function (state_27784){
while(true){
var ret_value__25816__auto__ = (function (){try{while(true){
var result__25817__auto__ = switch__25814__auto__.call(null,state_27784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25817__auto__;
}
break;
}
}catch (e27808){if((e27808 instanceof Object)){
var ex__25818__auto__ = e27808;
var statearr_27809_27827 = state_27784;
(statearr_27809_27827[(5)] = ex__25818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27828 = state_27784;
state_27784 = G__27828;
continue;
} else {
return ret_value__25816__auto__;
}
break;
}
});
cljs$core$async$state_machine__25815__auto__ = function(state_27784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25815__auto____1.call(this,state_27784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25815__auto____0;
cljs$core$async$state_machine__25815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25815__auto____1;
return cljs$core$async$state_machine__25815__auto__;
})()
;})(switch__25814__auto__,c__25909__auto___27812,out))
})();
var state__25911__auto__ = (function (){var statearr_27810 = f__25910__auto__.call(null);
(statearr_27810[(6)] = c__25909__auto___27812);

return statearr_27810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25911__auto__);
});})(c__25909__auto___27812,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1592614560104
