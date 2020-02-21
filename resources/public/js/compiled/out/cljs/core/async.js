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
var G__25844 = arguments.length;
switch (G__25844) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25845 = (function (f,blockable,meta25846){
this.f = f;
this.blockable = blockable;
this.meta25846 = meta25846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25847,meta25846__$1){
var self__ = this;
var _25847__$1 = this;
return (new cljs.core.async.t_cljs$core$async25845(self__.f,self__.blockable,meta25846__$1));
});

cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25847){
var self__ = this;
var _25847__$1 = this;
return self__.meta25846;
});

cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25846","meta25846",2145573489,null)], null);
});

cljs.core.async.t_cljs$core$async25845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25845";

cljs.core.async.t_cljs$core$async25845.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25845");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25845.
 */
cljs.core.async.__GT_t_cljs$core$async25845 = (function cljs$core$async$__GT_t_cljs$core$async25845(f__$1,blockable__$1,meta25846){
return (new cljs.core.async.t_cljs$core$async25845(f__$1,blockable__$1,meta25846));
});

}

return (new cljs.core.async.t_cljs$core$async25845(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25851 = arguments.length;
switch (G__25851) {
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
var G__25854 = arguments.length;
switch (G__25854) {
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
var G__25857 = arguments.length;
switch (G__25857) {
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
var val_25859 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25859);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25859,ret){
return (function (){
return fn1.call(null,val_25859);
});})(val_25859,ret))
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
var G__25861 = arguments.length;
switch (G__25861) {
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
var n__4607__auto___25863 = n;
var x_25864 = (0);
while(true){
if((x_25864 < n__4607__auto___25863)){
(a[x_25864] = x_25864);

var G__25865 = (x_25864 + (1));
x_25864 = G__25865;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25866 = (function (flag,meta25867){
this.flag = flag;
this.meta25867 = meta25867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25868,meta25867__$1){
var self__ = this;
var _25868__$1 = this;
return (new cljs.core.async.t_cljs$core$async25866(self__.flag,meta25867__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25868){
var self__ = this;
var _25868__$1 = this;
return self__.meta25867;
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25867","meta25867",2085072707,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25866";

cljs.core.async.t_cljs$core$async25866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25866");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25866.
 */
cljs.core.async.__GT_t_cljs$core$async25866 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25866(flag__$1,meta25867){
return (new cljs.core.async.t_cljs$core$async25866(flag__$1,meta25867));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25866(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25869 = (function (flag,cb,meta25870){
this.flag = flag;
this.cb = cb;
this.meta25870 = meta25870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25871,meta25870__$1){
var self__ = this;
var _25871__$1 = this;
return (new cljs.core.async.t_cljs$core$async25869(self__.flag,self__.cb,meta25870__$1));
});

cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25871){
var self__ = this;
var _25871__$1 = this;
return self__.meta25870;
});

cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25870","meta25870",1911014745,null)], null);
});

cljs.core.async.t_cljs$core$async25869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25869";

cljs.core.async.t_cljs$core$async25869.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25869");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25869.
 */
cljs.core.async.__GT_t_cljs$core$async25869 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25869(flag__$1,cb__$1,meta25870){
return (new cljs.core.async.t_cljs$core$async25869(flag__$1,cb__$1,meta25870));
});

}

return (new cljs.core.async.t_cljs$core$async25869(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25872_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25872_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25873_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25873_SHARP_,port], null));
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
var G__25874 = (i + (1));
i = G__25874;
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
var len__4730__auto___25880 = arguments.length;
var i__4731__auto___25881 = (0);
while(true){
if((i__4731__auto___25881 < len__4730__auto___25880)){
args__4736__auto__.push((arguments[i__4731__auto___25881]));

var G__25882 = (i__4731__auto___25881 + (1));
i__4731__auto___25881 = G__25882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25877){
var map__25878 = p__25877;
var map__25878__$1 = (((((!((map__25878 == null))))?(((((map__25878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25878):map__25878);
var opts = map__25878__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25875){
var G__25876 = cljs.core.first.call(null,seq25875);
var seq25875__$1 = cljs.core.next.call(null,seq25875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25876,seq25875__$1);
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
var G__25884 = arguments.length;
switch (G__25884) {
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
var c__25784__auto___25930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___25930){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___25930){
return (function (state_25908){
var state_val_25909 = (state_25908[(1)]);
if((state_val_25909 === (7))){
var inst_25904 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25910_25931 = state_25908__$1;
(statearr_25910_25931[(2)] = inst_25904);

(statearr_25910_25931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (1))){
var state_25908__$1 = state_25908;
var statearr_25911_25932 = state_25908__$1;
(statearr_25911_25932[(2)] = null);

(statearr_25911_25932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (4))){
var inst_25887 = (state_25908[(7)]);
var inst_25887__$1 = (state_25908[(2)]);
var inst_25888 = (inst_25887__$1 == null);
var state_25908__$1 = (function (){var statearr_25912 = state_25908;
(statearr_25912[(7)] = inst_25887__$1);

return statearr_25912;
})();
if(cljs.core.truth_(inst_25888)){
var statearr_25913_25933 = state_25908__$1;
(statearr_25913_25933[(1)] = (5));

} else {
var statearr_25914_25934 = state_25908__$1;
(statearr_25914_25934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (13))){
var state_25908__$1 = state_25908;
var statearr_25915_25935 = state_25908__$1;
(statearr_25915_25935[(2)] = null);

(statearr_25915_25935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (6))){
var inst_25887 = (state_25908[(7)]);
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25908__$1,(11),to,inst_25887);
} else {
if((state_val_25909 === (3))){
var inst_25906 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25908__$1,inst_25906);
} else {
if((state_val_25909 === (12))){
var state_25908__$1 = state_25908;
var statearr_25916_25936 = state_25908__$1;
(statearr_25916_25936[(2)] = null);

(statearr_25916_25936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (2))){
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25908__$1,(4),from);
} else {
if((state_val_25909 === (11))){
var inst_25897 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
if(cljs.core.truth_(inst_25897)){
var statearr_25917_25937 = state_25908__$1;
(statearr_25917_25937[(1)] = (12));

} else {
var statearr_25918_25938 = state_25908__$1;
(statearr_25918_25938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (9))){
var state_25908__$1 = state_25908;
var statearr_25919_25939 = state_25908__$1;
(statearr_25919_25939[(2)] = null);

(statearr_25919_25939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (5))){
var state_25908__$1 = state_25908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25920_25940 = state_25908__$1;
(statearr_25920_25940[(1)] = (8));

} else {
var statearr_25921_25941 = state_25908__$1;
(statearr_25921_25941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (14))){
var inst_25902 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25922_25942 = state_25908__$1;
(statearr_25922_25942[(2)] = inst_25902);

(statearr_25922_25942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (10))){
var inst_25894 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25923_25943 = state_25908__$1;
(statearr_25923_25943[(2)] = inst_25894);

(statearr_25923_25943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (8))){
var inst_25891 = cljs.core.async.close_BANG_.call(null,to);
var state_25908__$1 = state_25908;
var statearr_25924_25944 = state_25908__$1;
(statearr_25924_25944[(2)] = inst_25891);

(statearr_25924_25944[(1)] = (10));


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
});})(c__25784__auto___25930))
;
return ((function (switch__25689__auto__,c__25784__auto___25930){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_25925 = [null,null,null,null,null,null,null,null];
(statearr_25925[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_25925[(1)] = (1));

return statearr_25925;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_25908){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_25908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e25926){if((e25926 instanceof Object)){
var ex__25693__auto__ = e25926;
var statearr_25927_25945 = state_25908;
(statearr_25927_25945[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25946 = state_25908;
state_25908 = G__25946;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_25908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_25908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___25930))
})();
var state__25786__auto__ = (function (){var statearr_25928 = f__25785__auto__.call(null);
(statearr_25928[(6)] = c__25784__auto___25930);

return statearr_25928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___25930))
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
return (function (p__25947){
var vec__25948 = p__25947;
var v = cljs.core.nth.call(null,vec__25948,(0),null);
var p = cljs.core.nth.call(null,vec__25948,(1),null);
var job = vec__25948;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25784__auto___26119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results){
return (function (state_25955){
var state_val_25956 = (state_25955[(1)]);
if((state_val_25956 === (1))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25955__$1,(2),res,v);
} else {
if((state_val_25956 === (2))){
var inst_25952 = (state_25955[(2)]);
var inst_25953 = cljs.core.async.close_BANG_.call(null,res);
var state_25955__$1 = (function (){var statearr_25957 = state_25955;
(statearr_25957[(7)] = inst_25952);

return statearr_25957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25955__$1,inst_25953);
} else {
return null;
}
}
});})(c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results))
;
return ((function (switch__25689__auto__,c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_25958 = [null,null,null,null,null,null,null,null];
(statearr_25958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__);

(statearr_25958[(1)] = (1));

return statearr_25958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1 = (function (state_25955){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_25955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e25959){if((e25959 instanceof Object)){
var ex__25693__auto__ = e25959;
var statearr_25960_26120 = state_25955;
(statearr_25960_26120[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26121 = state_25955;
state_25955 = G__26121;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = function(state_25955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1.call(this,state_25955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results))
})();
var state__25786__auto__ = (function (){var statearr_25961 = f__25785__auto__.call(null);
(statearr_25961[(6)] = c__25784__auto___26119);

return statearr_25961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___26119,res,vec__25948,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25962){
var vec__25963 = p__25962;
var v = cljs.core.nth.call(null,vec__25963,(0),null);
var p = cljs.core.nth.call(null,vec__25963,(1),null);
var job = vec__25963;
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
var n__4607__auto___26122 = n;
var __26123 = (0);
while(true){
if((__26123 < n__4607__auto___26122)){
var G__25966_26124 = type;
var G__25966_26125__$1 = (((G__25966_26124 instanceof cljs.core.Keyword))?G__25966_26124.fqn:null);
switch (G__25966_26125__$1) {
case "compute":
var c__25784__auto___26127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26123,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (__26123,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function (state_25979){
var state_val_25980 = (state_25979[(1)]);
if((state_val_25980 === (1))){
var state_25979__$1 = state_25979;
var statearr_25981_26128 = state_25979__$1;
(statearr_25981_26128[(2)] = null);

(statearr_25981_26128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (2))){
var state_25979__$1 = state_25979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25979__$1,(4),jobs);
} else {
if((state_val_25980 === (3))){
var inst_25977 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25979__$1,inst_25977);
} else {
if((state_val_25980 === (4))){
var inst_25969 = (state_25979[(2)]);
var inst_25970 = process.call(null,inst_25969);
var state_25979__$1 = state_25979;
if(cljs.core.truth_(inst_25970)){
var statearr_25982_26129 = state_25979__$1;
(statearr_25982_26129[(1)] = (5));

} else {
var statearr_25983_26130 = state_25979__$1;
(statearr_25983_26130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (5))){
var state_25979__$1 = state_25979;
var statearr_25984_26131 = state_25979__$1;
(statearr_25984_26131[(2)] = null);

(statearr_25984_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (6))){
var state_25979__$1 = state_25979;
var statearr_25985_26132 = state_25979__$1;
(statearr_25985_26132[(2)] = null);

(statearr_25985_26132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25980 === (7))){
var inst_25975 = (state_25979[(2)]);
var state_25979__$1 = state_25979;
var statearr_25986_26133 = state_25979__$1;
(statearr_25986_26133[(2)] = inst_25975);

(statearr_25986_26133[(1)] = (3));


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
});})(__26123,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
;
return ((function (__26123,switch__25689__auto__,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_25987 = [null,null,null,null,null,null,null];
(statearr_25987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__);

(statearr_25987[(1)] = (1));

return statearr_25987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1 = (function (state_25979){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_25979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e25988){if((e25988 instanceof Object)){
var ex__25693__auto__ = e25988;
var statearr_25989_26134 = state_25979;
(statearr_25989_26134[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26135 = state_25979;
state_25979 = G__26135;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = function(state_25979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1.call(this,state_25979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__;
})()
;})(__26123,switch__25689__auto__,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
})();
var state__25786__auto__ = (function (){var statearr_25990 = f__25785__auto__.call(null);
(statearr_25990[(6)] = c__25784__auto___26127);

return statearr_25990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(__26123,c__25784__auto___26127,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
);


break;
case "async":
var c__25784__auto___26136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26123,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (__26123,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function (state_26003){
var state_val_26004 = (state_26003[(1)]);
if((state_val_26004 === (1))){
var state_26003__$1 = state_26003;
var statearr_26005_26137 = state_26003__$1;
(statearr_26005_26137[(2)] = null);

(statearr_26005_26137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (2))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(4),jobs);
} else {
if((state_val_26004 === (3))){
var inst_26001 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26003__$1,inst_26001);
} else {
if((state_val_26004 === (4))){
var inst_25993 = (state_26003[(2)]);
var inst_25994 = async.call(null,inst_25993);
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25994)){
var statearr_26006_26138 = state_26003__$1;
(statearr_26006_26138[(1)] = (5));

} else {
var statearr_26007_26139 = state_26003__$1;
(statearr_26007_26139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (5))){
var state_26003__$1 = state_26003;
var statearr_26008_26140 = state_26003__$1;
(statearr_26008_26140[(2)] = null);

(statearr_26008_26140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (6))){
var state_26003__$1 = state_26003;
var statearr_26009_26141 = state_26003__$1;
(statearr_26009_26141[(2)] = null);

(statearr_26009_26141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (7))){
var inst_25999 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26010_26142 = state_26003__$1;
(statearr_26010_26142[(2)] = inst_25999);

(statearr_26010_26142[(1)] = (3));


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
});})(__26123,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
;
return ((function (__26123,switch__25689__auto__,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_26011 = [null,null,null,null,null,null,null];
(statearr_26011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__);

(statearr_26011[(1)] = (1));

return statearr_26011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1 = (function (state_26003){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26012){if((e26012 instanceof Object)){
var ex__25693__auto__ = e26012;
var statearr_26013_26143 = state_26003;
(statearr_26013_26143[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26144 = state_26003;
state_26003 = G__26144;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__;
})()
;})(__26123,switch__25689__auto__,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
})();
var state__25786__auto__ = (function (){var statearr_26014 = f__25785__auto__.call(null);
(statearr_26014[(6)] = c__25784__auto___26136);

return statearr_26014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(__26123,c__25784__auto___26136,G__25966_26124,G__25966_26125__$1,n__4607__auto___26122,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25966_26125__$1)].join('')));

}

var G__26145 = (__26123 + (1));
__26123 = G__26145;
continue;
} else {
}
break;
}

var c__25784__auto___26146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___26146,jobs,results,process,async){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___26146,jobs,results,process,async){
return (function (state_26036){
var state_val_26037 = (state_26036[(1)]);
if((state_val_26037 === (7))){
var inst_26032 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26038_26147 = state_26036__$1;
(statearr_26038_26147[(2)] = inst_26032);

(statearr_26038_26147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (1))){
var state_26036__$1 = state_26036;
var statearr_26039_26148 = state_26036__$1;
(statearr_26039_26148[(2)] = null);

(statearr_26039_26148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (4))){
var inst_26017 = (state_26036[(7)]);
var inst_26017__$1 = (state_26036[(2)]);
var inst_26018 = (inst_26017__$1 == null);
var state_26036__$1 = (function (){var statearr_26040 = state_26036;
(statearr_26040[(7)] = inst_26017__$1);

return statearr_26040;
})();
if(cljs.core.truth_(inst_26018)){
var statearr_26041_26149 = state_26036__$1;
(statearr_26041_26149[(1)] = (5));

} else {
var statearr_26042_26150 = state_26036__$1;
(statearr_26042_26150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (6))){
var inst_26017 = (state_26036[(7)]);
var inst_26022 = (state_26036[(8)]);
var inst_26022__$1 = cljs.core.async.chan.call(null,(1));
var inst_26023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26024 = [inst_26017,inst_26022__$1];
var inst_26025 = (new cljs.core.PersistentVector(null,2,(5),inst_26023,inst_26024,null));
var state_26036__$1 = (function (){var statearr_26043 = state_26036;
(statearr_26043[(8)] = inst_26022__$1);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26036__$1,(8),jobs,inst_26025);
} else {
if((state_val_26037 === (3))){
var inst_26034 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26036__$1,inst_26034);
} else {
if((state_val_26037 === (2))){
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26036__$1,(4),from);
} else {
if((state_val_26037 === (9))){
var inst_26029 = (state_26036[(2)]);
var state_26036__$1 = (function (){var statearr_26044 = state_26036;
(statearr_26044[(9)] = inst_26029);

return statearr_26044;
})();
var statearr_26045_26151 = state_26036__$1;
(statearr_26045_26151[(2)] = null);

(statearr_26045_26151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (5))){
var inst_26020 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26036__$1 = state_26036;
var statearr_26046_26152 = state_26036__$1;
(statearr_26046_26152[(2)] = inst_26020);

(statearr_26046_26152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (8))){
var inst_26022 = (state_26036[(8)]);
var inst_26027 = (state_26036[(2)]);
var state_26036__$1 = (function (){var statearr_26047 = state_26036;
(statearr_26047[(10)] = inst_26027);

return statearr_26047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26036__$1,(9),results,inst_26022);
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
});})(c__25784__auto___26146,jobs,results,process,async))
;
return ((function (switch__25689__auto__,c__25784__auto___26146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_26048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__);

(statearr_26048[(1)] = (1));

return statearr_26048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1 = (function (state_26036){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26049){if((e26049 instanceof Object)){
var ex__25693__auto__ = e26049;
var statearr_26050_26153 = state_26036;
(statearr_26050_26153[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26154 = state_26036;
state_26036 = G__26154;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = function(state_26036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1.call(this,state_26036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___26146,jobs,results,process,async))
})();
var state__25786__auto__ = (function (){var statearr_26051 = f__25785__auto__.call(null);
(statearr_26051[(6)] = c__25784__auto___26146);

return statearr_26051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___26146,jobs,results,process,async))
);


var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__,jobs,results,process,async){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__,jobs,results,process,async){
return (function (state_26089){
var state_val_26090 = (state_26089[(1)]);
if((state_val_26090 === (7))){
var inst_26085 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26091_26155 = state_26089__$1;
(statearr_26091_26155[(2)] = inst_26085);

(statearr_26091_26155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (20))){
var state_26089__$1 = state_26089;
var statearr_26092_26156 = state_26089__$1;
(statearr_26092_26156[(2)] = null);

(statearr_26092_26156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (1))){
var state_26089__$1 = state_26089;
var statearr_26093_26157 = state_26089__$1;
(statearr_26093_26157[(2)] = null);

(statearr_26093_26157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (4))){
var inst_26054 = (state_26089[(7)]);
var inst_26054__$1 = (state_26089[(2)]);
var inst_26055 = (inst_26054__$1 == null);
var state_26089__$1 = (function (){var statearr_26094 = state_26089;
(statearr_26094[(7)] = inst_26054__$1);

return statearr_26094;
})();
if(cljs.core.truth_(inst_26055)){
var statearr_26095_26158 = state_26089__$1;
(statearr_26095_26158[(1)] = (5));

} else {
var statearr_26096_26159 = state_26089__$1;
(statearr_26096_26159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (15))){
var inst_26067 = (state_26089[(8)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26089__$1,(18),to,inst_26067);
} else {
if((state_val_26090 === (21))){
var inst_26080 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26097_26160 = state_26089__$1;
(statearr_26097_26160[(2)] = inst_26080);

(statearr_26097_26160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (13))){
var inst_26082 = (state_26089[(2)]);
var state_26089__$1 = (function (){var statearr_26098 = state_26089;
(statearr_26098[(9)] = inst_26082);

return statearr_26098;
})();
var statearr_26099_26161 = state_26089__$1;
(statearr_26099_26161[(2)] = null);

(statearr_26099_26161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (6))){
var inst_26054 = (state_26089[(7)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(11),inst_26054);
} else {
if((state_val_26090 === (17))){
var inst_26075 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26075)){
var statearr_26100_26162 = state_26089__$1;
(statearr_26100_26162[(1)] = (19));

} else {
var statearr_26101_26163 = state_26089__$1;
(statearr_26101_26163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (3))){
var inst_26087 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26089__$1,inst_26087);
} else {
if((state_val_26090 === (12))){
var inst_26064 = (state_26089[(10)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(14),inst_26064);
} else {
if((state_val_26090 === (2))){
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(4),results);
} else {
if((state_val_26090 === (19))){
var state_26089__$1 = state_26089;
var statearr_26102_26164 = state_26089__$1;
(statearr_26102_26164[(2)] = null);

(statearr_26102_26164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (11))){
var inst_26064 = (state_26089[(2)]);
var state_26089__$1 = (function (){var statearr_26103 = state_26089;
(statearr_26103[(10)] = inst_26064);

return statearr_26103;
})();
var statearr_26104_26165 = state_26089__$1;
(statearr_26104_26165[(2)] = null);

(statearr_26104_26165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (9))){
var state_26089__$1 = state_26089;
var statearr_26105_26166 = state_26089__$1;
(statearr_26105_26166[(2)] = null);

(statearr_26105_26166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (5))){
var state_26089__$1 = state_26089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26106_26167 = state_26089__$1;
(statearr_26106_26167[(1)] = (8));

} else {
var statearr_26107_26168 = state_26089__$1;
(statearr_26107_26168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (14))){
var inst_26067 = (state_26089[(8)]);
var inst_26069 = (state_26089[(11)]);
var inst_26067__$1 = (state_26089[(2)]);
var inst_26068 = (inst_26067__$1 == null);
var inst_26069__$1 = cljs.core.not.call(null,inst_26068);
var state_26089__$1 = (function (){var statearr_26108 = state_26089;
(statearr_26108[(8)] = inst_26067__$1);

(statearr_26108[(11)] = inst_26069__$1);

return statearr_26108;
})();
if(inst_26069__$1){
var statearr_26109_26169 = state_26089__$1;
(statearr_26109_26169[(1)] = (15));

} else {
var statearr_26110_26170 = state_26089__$1;
(statearr_26110_26170[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (16))){
var inst_26069 = (state_26089[(11)]);
var state_26089__$1 = state_26089;
var statearr_26111_26171 = state_26089__$1;
(statearr_26111_26171[(2)] = inst_26069);

(statearr_26111_26171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (10))){
var inst_26061 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26112_26172 = state_26089__$1;
(statearr_26112_26172[(2)] = inst_26061);

(statearr_26112_26172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (18))){
var inst_26072 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26113_26173 = state_26089__$1;
(statearr_26113_26173[(2)] = inst_26072);

(statearr_26113_26173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (8))){
var inst_26058 = cljs.core.async.close_BANG_.call(null,to);
var state_26089__$1 = state_26089;
var statearr_26114_26174 = state_26089__$1;
(statearr_26114_26174[(2)] = inst_26058);

(statearr_26114_26174[(1)] = (10));


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
});})(c__25784__auto__,jobs,results,process,async))
;
return ((function (switch__25689__auto__,c__25784__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_26115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__);

(statearr_26115[(1)] = (1));

return statearr_26115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1 = (function (state_26089){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26116){if((e26116 instanceof Object)){
var ex__25693__auto__ = e26116;
var statearr_26117_26175 = state_26089;
(statearr_26117_26175[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26176 = state_26089;
state_26089 = G__26176;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__ = function(state_26089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1.call(this,state_26089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__,jobs,results,process,async))
})();
var state__25786__auto__ = (function (){var statearr_26118 = f__25785__auto__.call(null);
(statearr_26118[(6)] = c__25784__auto__);

return statearr_26118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__,jobs,results,process,async))
);

return c__25784__auto__;
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
var G__26178 = arguments.length;
switch (G__26178) {
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
var G__26181 = arguments.length;
switch (G__26181) {
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
var G__26184 = arguments.length;
switch (G__26184) {
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
var c__25784__auto___26233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___26233,tc,fc){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___26233,tc,fc){
return (function (state_26210){
var state_val_26211 = (state_26210[(1)]);
if((state_val_26211 === (7))){
var inst_26206 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26212_26234 = state_26210__$1;
(statearr_26212_26234[(2)] = inst_26206);

(statearr_26212_26234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (1))){
var state_26210__$1 = state_26210;
var statearr_26213_26235 = state_26210__$1;
(statearr_26213_26235[(2)] = null);

(statearr_26213_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (4))){
var inst_26187 = (state_26210[(7)]);
var inst_26187__$1 = (state_26210[(2)]);
var inst_26188 = (inst_26187__$1 == null);
var state_26210__$1 = (function (){var statearr_26214 = state_26210;
(statearr_26214[(7)] = inst_26187__$1);

return statearr_26214;
})();
if(cljs.core.truth_(inst_26188)){
var statearr_26215_26236 = state_26210__$1;
(statearr_26215_26236[(1)] = (5));

} else {
var statearr_26216_26237 = state_26210__$1;
(statearr_26216_26237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (13))){
var state_26210__$1 = state_26210;
var statearr_26217_26238 = state_26210__$1;
(statearr_26217_26238[(2)] = null);

(statearr_26217_26238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (6))){
var inst_26187 = (state_26210[(7)]);
var inst_26193 = p.call(null,inst_26187);
var state_26210__$1 = state_26210;
if(cljs.core.truth_(inst_26193)){
var statearr_26218_26239 = state_26210__$1;
(statearr_26218_26239[(1)] = (9));

} else {
var statearr_26219_26240 = state_26210__$1;
(statearr_26219_26240[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (3))){
var inst_26208 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26210__$1,inst_26208);
} else {
if((state_val_26211 === (12))){
var state_26210__$1 = state_26210;
var statearr_26220_26241 = state_26210__$1;
(statearr_26220_26241[(2)] = null);

(statearr_26220_26241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (2))){
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26210__$1,(4),ch);
} else {
if((state_val_26211 === (11))){
var inst_26187 = (state_26210[(7)]);
var inst_26197 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26210__$1,(8),inst_26197,inst_26187);
} else {
if((state_val_26211 === (9))){
var state_26210__$1 = state_26210;
var statearr_26221_26242 = state_26210__$1;
(statearr_26221_26242[(2)] = tc);

(statearr_26221_26242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (5))){
var inst_26190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26191 = cljs.core.async.close_BANG_.call(null,fc);
var state_26210__$1 = (function (){var statearr_26222 = state_26210;
(statearr_26222[(8)] = inst_26190);

return statearr_26222;
})();
var statearr_26223_26243 = state_26210__$1;
(statearr_26223_26243[(2)] = inst_26191);

(statearr_26223_26243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (14))){
var inst_26204 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
var statearr_26224_26244 = state_26210__$1;
(statearr_26224_26244[(2)] = inst_26204);

(statearr_26224_26244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (10))){
var state_26210__$1 = state_26210;
var statearr_26225_26245 = state_26210__$1;
(statearr_26225_26245[(2)] = fc);

(statearr_26225_26245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26211 === (8))){
var inst_26199 = (state_26210[(2)]);
var state_26210__$1 = state_26210;
if(cljs.core.truth_(inst_26199)){
var statearr_26226_26246 = state_26210__$1;
(statearr_26226_26246[(1)] = (12));

} else {
var statearr_26227_26247 = state_26210__$1;
(statearr_26227_26247[(1)] = (13));

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
});})(c__25784__auto___26233,tc,fc))
;
return ((function (switch__25689__auto__,c__25784__auto___26233,tc,fc){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_26228 = [null,null,null,null,null,null,null,null,null];
(statearr_26228[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_26228[(1)] = (1));

return statearr_26228;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_26210){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26229){if((e26229 instanceof Object)){
var ex__25693__auto__ = e26229;
var statearr_26230_26248 = state_26210;
(statearr_26230_26248[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26249 = state_26210;
state_26210 = G__26249;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_26210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_26210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___26233,tc,fc))
})();
var state__25786__auto__ = (function (){var statearr_26231 = f__25785__auto__.call(null);
(statearr_26231[(6)] = c__25784__auto___26233);

return statearr_26231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___26233,tc,fc))
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
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__){
return (function (state_26270){
var state_val_26271 = (state_26270[(1)]);
if((state_val_26271 === (7))){
var inst_26266 = (state_26270[(2)]);
var state_26270__$1 = state_26270;
var statearr_26272_26290 = state_26270__$1;
(statearr_26272_26290[(2)] = inst_26266);

(statearr_26272_26290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (1))){
var inst_26250 = init;
var state_26270__$1 = (function (){var statearr_26273 = state_26270;
(statearr_26273[(7)] = inst_26250);

return statearr_26273;
})();
var statearr_26274_26291 = state_26270__$1;
(statearr_26274_26291[(2)] = null);

(statearr_26274_26291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (4))){
var inst_26253 = (state_26270[(8)]);
var inst_26253__$1 = (state_26270[(2)]);
var inst_26254 = (inst_26253__$1 == null);
var state_26270__$1 = (function (){var statearr_26275 = state_26270;
(statearr_26275[(8)] = inst_26253__$1);

return statearr_26275;
})();
if(cljs.core.truth_(inst_26254)){
var statearr_26276_26292 = state_26270__$1;
(statearr_26276_26292[(1)] = (5));

} else {
var statearr_26277_26293 = state_26270__$1;
(statearr_26277_26293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (6))){
var inst_26250 = (state_26270[(7)]);
var inst_26257 = (state_26270[(9)]);
var inst_26253 = (state_26270[(8)]);
var inst_26257__$1 = f.call(null,inst_26250,inst_26253);
var inst_26258 = cljs.core.reduced_QMARK_.call(null,inst_26257__$1);
var state_26270__$1 = (function (){var statearr_26278 = state_26270;
(statearr_26278[(9)] = inst_26257__$1);

return statearr_26278;
})();
if(inst_26258){
var statearr_26279_26294 = state_26270__$1;
(statearr_26279_26294[(1)] = (8));

} else {
var statearr_26280_26295 = state_26270__$1;
(statearr_26280_26295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (3))){
var inst_26268 = (state_26270[(2)]);
var state_26270__$1 = state_26270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26270__$1,inst_26268);
} else {
if((state_val_26271 === (2))){
var state_26270__$1 = state_26270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26270__$1,(4),ch);
} else {
if((state_val_26271 === (9))){
var inst_26257 = (state_26270[(9)]);
var inst_26250 = inst_26257;
var state_26270__$1 = (function (){var statearr_26281 = state_26270;
(statearr_26281[(7)] = inst_26250);

return statearr_26281;
})();
var statearr_26282_26296 = state_26270__$1;
(statearr_26282_26296[(2)] = null);

(statearr_26282_26296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (5))){
var inst_26250 = (state_26270[(7)]);
var state_26270__$1 = state_26270;
var statearr_26283_26297 = state_26270__$1;
(statearr_26283_26297[(2)] = inst_26250);

(statearr_26283_26297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (10))){
var inst_26264 = (state_26270[(2)]);
var state_26270__$1 = state_26270;
var statearr_26284_26298 = state_26270__$1;
(statearr_26284_26298[(2)] = inst_26264);

(statearr_26284_26298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (8))){
var inst_26257 = (state_26270[(9)]);
var inst_26260 = cljs.core.deref.call(null,inst_26257);
var state_26270__$1 = state_26270;
var statearr_26285_26299 = state_26270__$1;
(statearr_26285_26299[(2)] = inst_26260);

(statearr_26285_26299[(1)] = (10));


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
});})(c__25784__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25690__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25690__auto____0 = (function (){
var statearr_26286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26286[(0)] = cljs$core$async$reduce_$_state_machine__25690__auto__);

(statearr_26286[(1)] = (1));

return statearr_26286;
});
var cljs$core$async$reduce_$_state_machine__25690__auto____1 = (function (state_26270){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26287){if((e26287 instanceof Object)){
var ex__25693__auto__ = e26287;
var statearr_26288_26300 = state_26270;
(statearr_26288_26300[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26301 = state_26270;
state_26270 = G__26301;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25690__auto__ = function(state_26270){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25690__auto____1.call(this,state_26270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25690__auto____0;
cljs$core$async$reduce_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25690__auto____1;
return cljs$core$async$reduce_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__))
})();
var state__25786__auto__ = (function (){var statearr_26289 = f__25785__auto__.call(null);
(statearr_26289[(6)] = c__25784__auto__);

return statearr_26289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__))
);

return c__25784__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__,f__$1){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__,f__$1){
return (function (state_26307){
var state_val_26308 = (state_26307[(1)]);
if((state_val_26308 === (1))){
var inst_26302 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26307__$1,(2),inst_26302);
} else {
if((state_val_26308 === (2))){
var inst_26304 = (state_26307[(2)]);
var inst_26305 = f__$1.call(null,inst_26304);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26307__$1,inst_26305);
} else {
return null;
}
}
});})(c__25784__auto__,f__$1))
;
return ((function (switch__25689__auto__,c__25784__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25690__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25690__auto____0 = (function (){
var statearr_26309 = [null,null,null,null,null,null,null];
(statearr_26309[(0)] = cljs$core$async$transduce_$_state_machine__25690__auto__);

(statearr_26309[(1)] = (1));

return statearr_26309;
});
var cljs$core$async$transduce_$_state_machine__25690__auto____1 = (function (state_26307){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26310){if((e26310 instanceof Object)){
var ex__25693__auto__ = e26310;
var statearr_26311_26313 = state_26307;
(statearr_26311_26313[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26314 = state_26307;
state_26307 = G__26314;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25690__auto__ = function(state_26307){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25690__auto____1.call(this,state_26307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25690__auto____0;
cljs$core$async$transduce_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25690__auto____1;
return cljs$core$async$transduce_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__,f__$1))
})();
var state__25786__auto__ = (function (){var statearr_26312 = f__25785__auto__.call(null);
(statearr_26312[(6)] = c__25784__auto__);

return statearr_26312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__,f__$1))
);

return c__25784__auto__;
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
var G__26316 = arguments.length;
switch (G__26316) {
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
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__){
return (function (state_26341){
var state_val_26342 = (state_26341[(1)]);
if((state_val_26342 === (7))){
var inst_26323 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
var statearr_26343_26364 = state_26341__$1;
(statearr_26343_26364[(2)] = inst_26323);

(statearr_26343_26364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (1))){
var inst_26317 = cljs.core.seq.call(null,coll);
var inst_26318 = inst_26317;
var state_26341__$1 = (function (){var statearr_26344 = state_26341;
(statearr_26344[(7)] = inst_26318);

return statearr_26344;
})();
var statearr_26345_26365 = state_26341__$1;
(statearr_26345_26365[(2)] = null);

(statearr_26345_26365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (4))){
var inst_26318 = (state_26341[(7)]);
var inst_26321 = cljs.core.first.call(null,inst_26318);
var state_26341__$1 = state_26341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26341__$1,(7),ch,inst_26321);
} else {
if((state_val_26342 === (13))){
var inst_26335 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
var statearr_26346_26366 = state_26341__$1;
(statearr_26346_26366[(2)] = inst_26335);

(statearr_26346_26366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (6))){
var inst_26326 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
if(cljs.core.truth_(inst_26326)){
var statearr_26347_26367 = state_26341__$1;
(statearr_26347_26367[(1)] = (8));

} else {
var statearr_26348_26368 = state_26341__$1;
(statearr_26348_26368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (3))){
var inst_26339 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26341__$1,inst_26339);
} else {
if((state_val_26342 === (12))){
var state_26341__$1 = state_26341;
var statearr_26349_26369 = state_26341__$1;
(statearr_26349_26369[(2)] = null);

(statearr_26349_26369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (2))){
var inst_26318 = (state_26341[(7)]);
var state_26341__$1 = state_26341;
if(cljs.core.truth_(inst_26318)){
var statearr_26350_26370 = state_26341__$1;
(statearr_26350_26370[(1)] = (4));

} else {
var statearr_26351_26371 = state_26341__$1;
(statearr_26351_26371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (11))){
var inst_26332 = cljs.core.async.close_BANG_.call(null,ch);
var state_26341__$1 = state_26341;
var statearr_26352_26372 = state_26341__$1;
(statearr_26352_26372[(2)] = inst_26332);

(statearr_26352_26372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (9))){
var state_26341__$1 = state_26341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26353_26373 = state_26341__$1;
(statearr_26353_26373[(1)] = (11));

} else {
var statearr_26354_26374 = state_26341__$1;
(statearr_26354_26374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (5))){
var inst_26318 = (state_26341[(7)]);
var state_26341__$1 = state_26341;
var statearr_26355_26375 = state_26341__$1;
(statearr_26355_26375[(2)] = inst_26318);

(statearr_26355_26375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (10))){
var inst_26337 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
var statearr_26356_26376 = state_26341__$1;
(statearr_26356_26376[(2)] = inst_26337);

(statearr_26356_26376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (8))){
var inst_26318 = (state_26341[(7)]);
var inst_26328 = cljs.core.next.call(null,inst_26318);
var inst_26318__$1 = inst_26328;
var state_26341__$1 = (function (){var statearr_26357 = state_26341;
(statearr_26357[(7)] = inst_26318__$1);

return statearr_26357;
})();
var statearr_26358_26377 = state_26341__$1;
(statearr_26358_26377[(2)] = null);

(statearr_26358_26377[(1)] = (2));


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
});})(c__25784__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_26341){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__25693__auto__ = e26360;
var statearr_26361_26378 = state_26341;
(statearr_26361_26378[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26379 = state_26341;
state_26341 = G__26379;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_26341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_26341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__))
})();
var state__25786__auto__ = (function (){var statearr_26362 = f__25785__auto__.call(null);
(statearr_26362[(6)] = c__25784__auto__);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__))
);

return c__25784__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26380 = (function (ch,cs,meta26381){
this.ch = ch;
this.cs = cs;
this.meta26381 = meta26381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26382,meta26381__$1){
var self__ = this;
var _26382__$1 = this;
return (new cljs.core.async.t_cljs$core$async26380(self__.ch,self__.cs,meta26381__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26382){
var self__ = this;
var _26382__$1 = this;
return self__.meta26381;
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26381","meta26381",-560473441,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26380";

cljs.core.async.t_cljs$core$async26380.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26380");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26380.
 */
cljs.core.async.__GT_t_cljs$core$async26380 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26380(ch__$1,cs__$1,meta26381){
return (new cljs.core.async.t_cljs$core$async26380(ch__$1,cs__$1,meta26381));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26380(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25784__auto___26602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___26602,cs,m,dchan,dctr,done){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___26602,cs,m,dchan,dctr,done){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26513 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26519_26603 = state_26517__$1;
(statearr_26519_26603[(2)] = inst_26513);

(statearr_26519_26603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (20))){
var inst_26416 = (state_26517[(7)]);
var inst_26428 = cljs.core.first.call(null,inst_26416);
var inst_26429 = cljs.core.nth.call(null,inst_26428,(0),null);
var inst_26430 = cljs.core.nth.call(null,inst_26428,(1),null);
var state_26517__$1 = (function (){var statearr_26520 = state_26517;
(statearr_26520[(8)] = inst_26429);

return statearr_26520;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26521_26604 = state_26517__$1;
(statearr_26521_26604[(1)] = (22));

} else {
var statearr_26522_26605 = state_26517__$1;
(statearr_26522_26605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (27))){
var inst_26460 = (state_26517[(9)]);
var inst_26458 = (state_26517[(10)]);
var inst_26385 = (state_26517[(11)]);
var inst_26465 = (state_26517[(12)]);
var inst_26465__$1 = cljs.core._nth.call(null,inst_26458,inst_26460);
var inst_26466 = cljs.core.async.put_BANG_.call(null,inst_26465__$1,inst_26385,done);
var state_26517__$1 = (function (){var statearr_26523 = state_26517;
(statearr_26523[(12)] = inst_26465__$1);

return statearr_26523;
})();
if(cljs.core.truth_(inst_26466)){
var statearr_26524_26606 = state_26517__$1;
(statearr_26524_26606[(1)] = (30));

} else {
var statearr_26525_26607 = state_26517__$1;
(statearr_26525_26607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (1))){
var state_26517__$1 = state_26517;
var statearr_26526_26608 = state_26517__$1;
(statearr_26526_26608[(2)] = null);

(statearr_26526_26608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (24))){
var inst_26416 = (state_26517[(7)]);
var inst_26435 = (state_26517[(2)]);
var inst_26436 = cljs.core.next.call(null,inst_26416);
var inst_26394 = inst_26436;
var inst_26395 = null;
var inst_26396 = (0);
var inst_26397 = (0);
var state_26517__$1 = (function (){var statearr_26527 = state_26517;
(statearr_26527[(13)] = inst_26394);

(statearr_26527[(14)] = inst_26397);

(statearr_26527[(15)] = inst_26396);

(statearr_26527[(16)] = inst_26435);

(statearr_26527[(17)] = inst_26395);

return statearr_26527;
})();
var statearr_26528_26609 = state_26517__$1;
(statearr_26528_26609[(2)] = null);

(statearr_26528_26609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (39))){
var state_26517__$1 = state_26517;
var statearr_26532_26610 = state_26517__$1;
(statearr_26532_26610[(2)] = null);

(statearr_26532_26610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (4))){
var inst_26385 = (state_26517[(11)]);
var inst_26385__$1 = (state_26517[(2)]);
var inst_26386 = (inst_26385__$1 == null);
var state_26517__$1 = (function (){var statearr_26533 = state_26517;
(statearr_26533[(11)] = inst_26385__$1);

return statearr_26533;
})();
if(cljs.core.truth_(inst_26386)){
var statearr_26534_26611 = state_26517__$1;
(statearr_26534_26611[(1)] = (5));

} else {
var statearr_26535_26612 = state_26517__$1;
(statearr_26535_26612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (15))){
var inst_26394 = (state_26517[(13)]);
var inst_26397 = (state_26517[(14)]);
var inst_26396 = (state_26517[(15)]);
var inst_26395 = (state_26517[(17)]);
var inst_26412 = (state_26517[(2)]);
var inst_26413 = (inst_26397 + (1));
var tmp26529 = inst_26394;
var tmp26530 = inst_26396;
var tmp26531 = inst_26395;
var inst_26394__$1 = tmp26529;
var inst_26395__$1 = tmp26531;
var inst_26396__$1 = tmp26530;
var inst_26397__$1 = inst_26413;
var state_26517__$1 = (function (){var statearr_26536 = state_26517;
(statearr_26536[(13)] = inst_26394__$1);

(statearr_26536[(18)] = inst_26412);

(statearr_26536[(14)] = inst_26397__$1);

(statearr_26536[(15)] = inst_26396__$1);

(statearr_26536[(17)] = inst_26395__$1);

return statearr_26536;
})();
var statearr_26537_26613 = state_26517__$1;
(statearr_26537_26613[(2)] = null);

(statearr_26537_26613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (21))){
var inst_26439 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26541_26614 = state_26517__$1;
(statearr_26541_26614[(2)] = inst_26439);

(statearr_26541_26614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (31))){
var inst_26465 = (state_26517[(12)]);
var inst_26469 = done.call(null,null);
var inst_26470 = cljs.core.async.untap_STAR_.call(null,m,inst_26465);
var state_26517__$1 = (function (){var statearr_26542 = state_26517;
(statearr_26542[(19)] = inst_26469);

return statearr_26542;
})();
var statearr_26543_26615 = state_26517__$1;
(statearr_26543_26615[(2)] = inst_26470);

(statearr_26543_26615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (32))){
var inst_26460 = (state_26517[(9)]);
var inst_26457 = (state_26517[(20)]);
var inst_26458 = (state_26517[(10)]);
var inst_26459 = (state_26517[(21)]);
var inst_26472 = (state_26517[(2)]);
var inst_26473 = (inst_26460 + (1));
var tmp26538 = inst_26457;
var tmp26539 = inst_26458;
var tmp26540 = inst_26459;
var inst_26457__$1 = tmp26538;
var inst_26458__$1 = tmp26539;
var inst_26459__$1 = tmp26540;
var inst_26460__$1 = inst_26473;
var state_26517__$1 = (function (){var statearr_26544 = state_26517;
(statearr_26544[(9)] = inst_26460__$1);

(statearr_26544[(22)] = inst_26472);

(statearr_26544[(20)] = inst_26457__$1);

(statearr_26544[(10)] = inst_26458__$1);

(statearr_26544[(21)] = inst_26459__$1);

return statearr_26544;
})();
var statearr_26545_26616 = state_26517__$1;
(statearr_26545_26616[(2)] = null);

(statearr_26545_26616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (40))){
var inst_26485 = (state_26517[(23)]);
var inst_26489 = done.call(null,null);
var inst_26490 = cljs.core.async.untap_STAR_.call(null,m,inst_26485);
var state_26517__$1 = (function (){var statearr_26546 = state_26517;
(statearr_26546[(24)] = inst_26489);

return statearr_26546;
})();
var statearr_26547_26617 = state_26517__$1;
(statearr_26547_26617[(2)] = inst_26490);

(statearr_26547_26617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (33))){
var inst_26476 = (state_26517[(25)]);
var inst_26478 = cljs.core.chunked_seq_QMARK_.call(null,inst_26476);
var state_26517__$1 = state_26517;
if(inst_26478){
var statearr_26548_26618 = state_26517__$1;
(statearr_26548_26618[(1)] = (36));

} else {
var statearr_26549_26619 = state_26517__$1;
(statearr_26549_26619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (13))){
var inst_26406 = (state_26517[(26)]);
var inst_26409 = cljs.core.async.close_BANG_.call(null,inst_26406);
var state_26517__$1 = state_26517;
var statearr_26550_26620 = state_26517__$1;
(statearr_26550_26620[(2)] = inst_26409);

(statearr_26550_26620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (22))){
var inst_26429 = (state_26517[(8)]);
var inst_26432 = cljs.core.async.close_BANG_.call(null,inst_26429);
var state_26517__$1 = state_26517;
var statearr_26551_26621 = state_26517__$1;
(statearr_26551_26621[(2)] = inst_26432);

(statearr_26551_26621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (36))){
var inst_26476 = (state_26517[(25)]);
var inst_26480 = cljs.core.chunk_first.call(null,inst_26476);
var inst_26481 = cljs.core.chunk_rest.call(null,inst_26476);
var inst_26482 = cljs.core.count.call(null,inst_26480);
var inst_26457 = inst_26481;
var inst_26458 = inst_26480;
var inst_26459 = inst_26482;
var inst_26460 = (0);
var state_26517__$1 = (function (){var statearr_26552 = state_26517;
(statearr_26552[(9)] = inst_26460);

(statearr_26552[(20)] = inst_26457);

(statearr_26552[(10)] = inst_26458);

(statearr_26552[(21)] = inst_26459);

return statearr_26552;
})();
var statearr_26553_26622 = state_26517__$1;
(statearr_26553_26622[(2)] = null);

(statearr_26553_26622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (41))){
var inst_26476 = (state_26517[(25)]);
var inst_26492 = (state_26517[(2)]);
var inst_26493 = cljs.core.next.call(null,inst_26476);
var inst_26457 = inst_26493;
var inst_26458 = null;
var inst_26459 = (0);
var inst_26460 = (0);
var state_26517__$1 = (function (){var statearr_26554 = state_26517;
(statearr_26554[(9)] = inst_26460);

(statearr_26554[(27)] = inst_26492);

(statearr_26554[(20)] = inst_26457);

(statearr_26554[(10)] = inst_26458);

(statearr_26554[(21)] = inst_26459);

return statearr_26554;
})();
var statearr_26555_26623 = state_26517__$1;
(statearr_26555_26623[(2)] = null);

(statearr_26555_26623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (43))){
var state_26517__$1 = state_26517;
var statearr_26556_26624 = state_26517__$1;
(statearr_26556_26624[(2)] = null);

(statearr_26556_26624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (29))){
var inst_26501 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26557_26625 = state_26517__$1;
(statearr_26557_26625[(2)] = inst_26501);

(statearr_26557_26625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (44))){
var inst_26510 = (state_26517[(2)]);
var state_26517__$1 = (function (){var statearr_26558 = state_26517;
(statearr_26558[(28)] = inst_26510);

return statearr_26558;
})();
var statearr_26559_26626 = state_26517__$1;
(statearr_26559_26626[(2)] = null);

(statearr_26559_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (6))){
var inst_26449 = (state_26517[(29)]);
var inst_26448 = cljs.core.deref.call(null,cs);
var inst_26449__$1 = cljs.core.keys.call(null,inst_26448);
var inst_26450 = cljs.core.count.call(null,inst_26449__$1);
var inst_26451 = cljs.core.reset_BANG_.call(null,dctr,inst_26450);
var inst_26456 = cljs.core.seq.call(null,inst_26449__$1);
var inst_26457 = inst_26456;
var inst_26458 = null;
var inst_26459 = (0);
var inst_26460 = (0);
var state_26517__$1 = (function (){var statearr_26560 = state_26517;
(statearr_26560[(9)] = inst_26460);

(statearr_26560[(20)] = inst_26457);

(statearr_26560[(30)] = inst_26451);

(statearr_26560[(29)] = inst_26449__$1);

(statearr_26560[(10)] = inst_26458);

(statearr_26560[(21)] = inst_26459);

return statearr_26560;
})();
var statearr_26561_26627 = state_26517__$1;
(statearr_26561_26627[(2)] = null);

(statearr_26561_26627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (28))){
var inst_26457 = (state_26517[(20)]);
var inst_26476 = (state_26517[(25)]);
var inst_26476__$1 = cljs.core.seq.call(null,inst_26457);
var state_26517__$1 = (function (){var statearr_26562 = state_26517;
(statearr_26562[(25)] = inst_26476__$1);

return statearr_26562;
})();
if(inst_26476__$1){
var statearr_26563_26628 = state_26517__$1;
(statearr_26563_26628[(1)] = (33));

} else {
var statearr_26564_26629 = state_26517__$1;
(statearr_26564_26629[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (25))){
var inst_26460 = (state_26517[(9)]);
var inst_26459 = (state_26517[(21)]);
var inst_26462 = (inst_26460 < inst_26459);
var inst_26463 = inst_26462;
var state_26517__$1 = state_26517;
if(cljs.core.truth_(inst_26463)){
var statearr_26565_26630 = state_26517__$1;
(statearr_26565_26630[(1)] = (27));

} else {
var statearr_26566_26631 = state_26517__$1;
(statearr_26566_26631[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (34))){
var state_26517__$1 = state_26517;
var statearr_26567_26632 = state_26517__$1;
(statearr_26567_26632[(2)] = null);

(statearr_26567_26632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (17))){
var state_26517__$1 = state_26517;
var statearr_26568_26633 = state_26517__$1;
(statearr_26568_26633[(2)] = null);

(statearr_26568_26633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (3))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (12))){
var inst_26444 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26569_26634 = state_26517__$1;
(statearr_26569_26634[(2)] = inst_26444);

(statearr_26569_26634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (2))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(4),ch);
} else {
if((state_val_26518 === (23))){
var state_26517__$1 = state_26517;
var statearr_26570_26635 = state_26517__$1;
(statearr_26570_26635[(2)] = null);

(statearr_26570_26635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (35))){
var inst_26499 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26571_26636 = state_26517__$1;
(statearr_26571_26636[(2)] = inst_26499);

(statearr_26571_26636[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (19))){
var inst_26416 = (state_26517[(7)]);
var inst_26420 = cljs.core.chunk_first.call(null,inst_26416);
var inst_26421 = cljs.core.chunk_rest.call(null,inst_26416);
var inst_26422 = cljs.core.count.call(null,inst_26420);
var inst_26394 = inst_26421;
var inst_26395 = inst_26420;
var inst_26396 = inst_26422;
var inst_26397 = (0);
var state_26517__$1 = (function (){var statearr_26572 = state_26517;
(statearr_26572[(13)] = inst_26394);

(statearr_26572[(14)] = inst_26397);

(statearr_26572[(15)] = inst_26396);

(statearr_26572[(17)] = inst_26395);

return statearr_26572;
})();
var statearr_26573_26637 = state_26517__$1;
(statearr_26573_26637[(2)] = null);

(statearr_26573_26637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (11))){
var inst_26394 = (state_26517[(13)]);
var inst_26416 = (state_26517[(7)]);
var inst_26416__$1 = cljs.core.seq.call(null,inst_26394);
var state_26517__$1 = (function (){var statearr_26574 = state_26517;
(statearr_26574[(7)] = inst_26416__$1);

return statearr_26574;
})();
if(inst_26416__$1){
var statearr_26575_26638 = state_26517__$1;
(statearr_26575_26638[(1)] = (16));

} else {
var statearr_26576_26639 = state_26517__$1;
(statearr_26576_26639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (9))){
var inst_26446 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26577_26640 = state_26517__$1;
(statearr_26577_26640[(2)] = inst_26446);

(statearr_26577_26640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (5))){
var inst_26392 = cljs.core.deref.call(null,cs);
var inst_26393 = cljs.core.seq.call(null,inst_26392);
var inst_26394 = inst_26393;
var inst_26395 = null;
var inst_26396 = (0);
var inst_26397 = (0);
var state_26517__$1 = (function (){var statearr_26578 = state_26517;
(statearr_26578[(13)] = inst_26394);

(statearr_26578[(14)] = inst_26397);

(statearr_26578[(15)] = inst_26396);

(statearr_26578[(17)] = inst_26395);

return statearr_26578;
})();
var statearr_26579_26641 = state_26517__$1;
(statearr_26579_26641[(2)] = null);

(statearr_26579_26641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (14))){
var state_26517__$1 = state_26517;
var statearr_26580_26642 = state_26517__$1;
(statearr_26580_26642[(2)] = null);

(statearr_26580_26642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (45))){
var inst_26507 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26581_26643 = state_26517__$1;
(statearr_26581_26643[(2)] = inst_26507);

(statearr_26581_26643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (26))){
var inst_26449 = (state_26517[(29)]);
var inst_26503 = (state_26517[(2)]);
var inst_26504 = cljs.core.seq.call(null,inst_26449);
var state_26517__$1 = (function (){var statearr_26582 = state_26517;
(statearr_26582[(31)] = inst_26503);

return statearr_26582;
})();
if(inst_26504){
var statearr_26583_26644 = state_26517__$1;
(statearr_26583_26644[(1)] = (42));

} else {
var statearr_26584_26645 = state_26517__$1;
(statearr_26584_26645[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (16))){
var inst_26416 = (state_26517[(7)]);
var inst_26418 = cljs.core.chunked_seq_QMARK_.call(null,inst_26416);
var state_26517__$1 = state_26517;
if(inst_26418){
var statearr_26585_26646 = state_26517__$1;
(statearr_26585_26646[(1)] = (19));

} else {
var statearr_26586_26647 = state_26517__$1;
(statearr_26586_26647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (38))){
var inst_26496 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26587_26648 = state_26517__$1;
(statearr_26587_26648[(2)] = inst_26496);

(statearr_26587_26648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (30))){
var state_26517__$1 = state_26517;
var statearr_26588_26649 = state_26517__$1;
(statearr_26588_26649[(2)] = null);

(statearr_26588_26649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (10))){
var inst_26397 = (state_26517[(14)]);
var inst_26395 = (state_26517[(17)]);
var inst_26405 = cljs.core._nth.call(null,inst_26395,inst_26397);
var inst_26406 = cljs.core.nth.call(null,inst_26405,(0),null);
var inst_26407 = cljs.core.nth.call(null,inst_26405,(1),null);
var state_26517__$1 = (function (){var statearr_26589 = state_26517;
(statearr_26589[(26)] = inst_26406);

return statearr_26589;
})();
if(cljs.core.truth_(inst_26407)){
var statearr_26590_26650 = state_26517__$1;
(statearr_26590_26650[(1)] = (13));

} else {
var statearr_26591_26651 = state_26517__$1;
(statearr_26591_26651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (18))){
var inst_26442 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26592_26652 = state_26517__$1;
(statearr_26592_26652[(2)] = inst_26442);

(statearr_26592_26652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (42))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(45),dchan);
} else {
if((state_val_26518 === (37))){
var inst_26485 = (state_26517[(23)]);
var inst_26385 = (state_26517[(11)]);
var inst_26476 = (state_26517[(25)]);
var inst_26485__$1 = cljs.core.first.call(null,inst_26476);
var inst_26486 = cljs.core.async.put_BANG_.call(null,inst_26485__$1,inst_26385,done);
var state_26517__$1 = (function (){var statearr_26593 = state_26517;
(statearr_26593[(23)] = inst_26485__$1);

return statearr_26593;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26594_26653 = state_26517__$1;
(statearr_26594_26653[(1)] = (39));

} else {
var statearr_26595_26654 = state_26517__$1;
(statearr_26595_26654[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (8))){
var inst_26397 = (state_26517[(14)]);
var inst_26396 = (state_26517[(15)]);
var inst_26399 = (inst_26397 < inst_26396);
var inst_26400 = inst_26399;
var state_26517__$1 = state_26517;
if(cljs.core.truth_(inst_26400)){
var statearr_26596_26655 = state_26517__$1;
(statearr_26596_26655[(1)] = (10));

} else {
var statearr_26597_26656 = state_26517__$1;
(statearr_26597_26656[(1)] = (11));

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
});})(c__25784__auto___26602,cs,m,dchan,dctr,done))
;
return ((function (switch__25689__auto__,c__25784__auto___26602,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25690__auto__ = null;
var cljs$core$async$mult_$_state_machine__25690__auto____0 = (function (){
var statearr_26598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26598[(0)] = cljs$core$async$mult_$_state_machine__25690__auto__);

(statearr_26598[(1)] = (1));

return statearr_26598;
});
var cljs$core$async$mult_$_state_machine__25690__auto____1 = (function (state_26517){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26599){if((e26599 instanceof Object)){
var ex__25693__auto__ = e26599;
var statearr_26600_26657 = state_26517;
(statearr_26600_26657[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26658 = state_26517;
state_26517 = G__26658;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25690__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25690__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25690__auto____0;
cljs$core$async$mult_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25690__auto____1;
return cljs$core$async$mult_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___26602,cs,m,dchan,dctr,done))
})();
var state__25786__auto__ = (function (){var statearr_26601 = f__25785__auto__.call(null);
(statearr_26601[(6)] = c__25784__auto___26602);

return statearr_26601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___26602,cs,m,dchan,dctr,done))
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
var G__26660 = arguments.length;
switch (G__26660) {
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
var len__4730__auto___26672 = arguments.length;
var i__4731__auto___26673 = (0);
while(true){
if((i__4731__auto___26673 < len__4730__auto___26672)){
args__4736__auto__.push((arguments[i__4731__auto___26673]));

var G__26674 = (i__4731__auto___26673 + (1));
i__4731__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26666){
var map__26667 = p__26666;
var map__26667__$1 = (((((!((map__26667 == null))))?(((((map__26667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26667):map__26667);
var opts = map__26667__$1;
var statearr_26669_26675 = state;
(statearr_26669_26675[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__26667,map__26667__$1,opts){
return (function (val){
var statearr_26670_26676 = state;
(statearr_26670_26676[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26667,map__26667__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26671_26677 = state;
(statearr_26671_26677[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26662){
var G__26663 = cljs.core.first.call(null,seq26662);
var seq26662__$1 = cljs.core.next.call(null,seq26662);
var G__26664 = cljs.core.first.call(null,seq26662__$1);
var seq26662__$2 = cljs.core.next.call(null,seq26662__$1);
var G__26665 = cljs.core.first.call(null,seq26662__$2);
var seq26662__$3 = cljs.core.next.call(null,seq26662__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26663,G__26664,G__26665,seq26662__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26678 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26679){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26679 = meta26679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26680,meta26679__$1){
var self__ = this;
var _26680__$1 = this;
return (new cljs.core.async.t_cljs$core$async26678(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26679__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26680){
var self__ = this;
var _26680__$1 = this;
return self__.meta26679;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26678.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26679","meta26679",1886072577,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26678";

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26678");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26678.
 */
cljs.core.async.__GT_t_cljs$core$async26678 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26679){
return (new cljs.core.async.t_cljs$core$async26678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26679));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26678(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25784__auto___26842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26782){
var state_val_26783 = (state_26782[(1)]);
if((state_val_26783 === (7))){
var inst_26697 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26784_26843 = state_26782__$1;
(statearr_26784_26843[(2)] = inst_26697);

(statearr_26784_26843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (20))){
var inst_26709 = (state_26782[(7)]);
var state_26782__$1 = state_26782;
var statearr_26785_26844 = state_26782__$1;
(statearr_26785_26844[(2)] = inst_26709);

(statearr_26785_26844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (27))){
var state_26782__$1 = state_26782;
var statearr_26786_26845 = state_26782__$1;
(statearr_26786_26845[(2)] = null);

(statearr_26786_26845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (1))){
var inst_26684 = (state_26782[(8)]);
var inst_26684__$1 = calc_state.call(null);
var inst_26686 = (inst_26684__$1 == null);
var inst_26687 = cljs.core.not.call(null,inst_26686);
var state_26782__$1 = (function (){var statearr_26787 = state_26782;
(statearr_26787[(8)] = inst_26684__$1);

return statearr_26787;
})();
if(inst_26687){
var statearr_26788_26846 = state_26782__$1;
(statearr_26788_26846[(1)] = (2));

} else {
var statearr_26789_26847 = state_26782__$1;
(statearr_26789_26847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (24))){
var inst_26733 = (state_26782[(9)]);
var inst_26742 = (state_26782[(10)]);
var inst_26756 = (state_26782[(11)]);
var inst_26756__$1 = inst_26733.call(null,inst_26742);
var state_26782__$1 = (function (){var statearr_26790 = state_26782;
(statearr_26790[(11)] = inst_26756__$1);

return statearr_26790;
})();
if(cljs.core.truth_(inst_26756__$1)){
var statearr_26791_26848 = state_26782__$1;
(statearr_26791_26848[(1)] = (29));

} else {
var statearr_26792_26849 = state_26782__$1;
(statearr_26792_26849[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (4))){
var inst_26700 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26700)){
var statearr_26793_26850 = state_26782__$1;
(statearr_26793_26850[(1)] = (8));

} else {
var statearr_26794_26851 = state_26782__$1;
(statearr_26794_26851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (15))){
var inst_26727 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26727)){
var statearr_26795_26852 = state_26782__$1;
(statearr_26795_26852[(1)] = (19));

} else {
var statearr_26796_26853 = state_26782__$1;
(statearr_26796_26853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (21))){
var inst_26732 = (state_26782[(12)]);
var inst_26732__$1 = (state_26782[(2)]);
var inst_26733 = cljs.core.get.call(null,inst_26732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26734 = cljs.core.get.call(null,inst_26732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26735 = cljs.core.get.call(null,inst_26732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26782__$1 = (function (){var statearr_26797 = state_26782;
(statearr_26797[(9)] = inst_26733);

(statearr_26797[(13)] = inst_26734);

(statearr_26797[(12)] = inst_26732__$1);

return statearr_26797;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26782__$1,(22),inst_26735);
} else {
if((state_val_26783 === (31))){
var inst_26764 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26764)){
var statearr_26798_26854 = state_26782__$1;
(statearr_26798_26854[(1)] = (32));

} else {
var statearr_26799_26855 = state_26782__$1;
(statearr_26799_26855[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (32))){
var inst_26741 = (state_26782[(14)]);
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26782__$1,(35),out,inst_26741);
} else {
if((state_val_26783 === (33))){
var inst_26732 = (state_26782[(12)]);
var inst_26709 = inst_26732;
var state_26782__$1 = (function (){var statearr_26800 = state_26782;
(statearr_26800[(7)] = inst_26709);

return statearr_26800;
})();
var statearr_26801_26856 = state_26782__$1;
(statearr_26801_26856[(2)] = null);

(statearr_26801_26856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (13))){
var inst_26709 = (state_26782[(7)]);
var inst_26716 = inst_26709.cljs$lang$protocol_mask$partition0$;
var inst_26717 = (inst_26716 & (64));
var inst_26718 = inst_26709.cljs$core$ISeq$;
var inst_26719 = (cljs.core.PROTOCOL_SENTINEL === inst_26718);
var inst_26720 = ((inst_26717) || (inst_26719));
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26720)){
var statearr_26802_26857 = state_26782__$1;
(statearr_26802_26857[(1)] = (16));

} else {
var statearr_26803_26858 = state_26782__$1;
(statearr_26803_26858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (22))){
var inst_26741 = (state_26782[(14)]);
var inst_26742 = (state_26782[(10)]);
var inst_26740 = (state_26782[(2)]);
var inst_26741__$1 = cljs.core.nth.call(null,inst_26740,(0),null);
var inst_26742__$1 = cljs.core.nth.call(null,inst_26740,(1),null);
var inst_26743 = (inst_26741__$1 == null);
var inst_26744 = cljs.core._EQ_.call(null,inst_26742__$1,change);
var inst_26745 = ((inst_26743) || (inst_26744));
var state_26782__$1 = (function (){var statearr_26804 = state_26782;
(statearr_26804[(14)] = inst_26741__$1);

(statearr_26804[(10)] = inst_26742__$1);

return statearr_26804;
})();
if(cljs.core.truth_(inst_26745)){
var statearr_26805_26859 = state_26782__$1;
(statearr_26805_26859[(1)] = (23));

} else {
var statearr_26806_26860 = state_26782__$1;
(statearr_26806_26860[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (36))){
var inst_26732 = (state_26782[(12)]);
var inst_26709 = inst_26732;
var state_26782__$1 = (function (){var statearr_26807 = state_26782;
(statearr_26807[(7)] = inst_26709);

return statearr_26807;
})();
var statearr_26808_26861 = state_26782__$1;
(statearr_26808_26861[(2)] = null);

(statearr_26808_26861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (29))){
var inst_26756 = (state_26782[(11)]);
var state_26782__$1 = state_26782;
var statearr_26809_26862 = state_26782__$1;
(statearr_26809_26862[(2)] = inst_26756);

(statearr_26809_26862[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (6))){
var state_26782__$1 = state_26782;
var statearr_26810_26863 = state_26782__$1;
(statearr_26810_26863[(2)] = false);

(statearr_26810_26863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (28))){
var inst_26752 = (state_26782[(2)]);
var inst_26753 = calc_state.call(null);
var inst_26709 = inst_26753;
var state_26782__$1 = (function (){var statearr_26811 = state_26782;
(statearr_26811[(7)] = inst_26709);

(statearr_26811[(15)] = inst_26752);

return statearr_26811;
})();
var statearr_26812_26864 = state_26782__$1;
(statearr_26812_26864[(2)] = null);

(statearr_26812_26864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (25))){
var inst_26778 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26813_26865 = state_26782__$1;
(statearr_26813_26865[(2)] = inst_26778);

(statearr_26813_26865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (34))){
var inst_26776 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26814_26866 = state_26782__$1;
(statearr_26814_26866[(2)] = inst_26776);

(statearr_26814_26866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (17))){
var state_26782__$1 = state_26782;
var statearr_26815_26867 = state_26782__$1;
(statearr_26815_26867[(2)] = false);

(statearr_26815_26867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (3))){
var state_26782__$1 = state_26782;
var statearr_26816_26868 = state_26782__$1;
(statearr_26816_26868[(2)] = false);

(statearr_26816_26868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (12))){
var inst_26780 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else {
if((state_val_26783 === (2))){
var inst_26684 = (state_26782[(8)]);
var inst_26689 = inst_26684.cljs$lang$protocol_mask$partition0$;
var inst_26690 = (inst_26689 & (64));
var inst_26691 = inst_26684.cljs$core$ISeq$;
var inst_26692 = (cljs.core.PROTOCOL_SENTINEL === inst_26691);
var inst_26693 = ((inst_26690) || (inst_26692));
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26693)){
var statearr_26817_26869 = state_26782__$1;
(statearr_26817_26869[(1)] = (5));

} else {
var statearr_26818_26870 = state_26782__$1;
(statearr_26818_26870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (23))){
var inst_26741 = (state_26782[(14)]);
var inst_26747 = (inst_26741 == null);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26747)){
var statearr_26819_26871 = state_26782__$1;
(statearr_26819_26871[(1)] = (26));

} else {
var statearr_26820_26872 = state_26782__$1;
(statearr_26820_26872[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (35))){
var inst_26767 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26767)){
var statearr_26821_26873 = state_26782__$1;
(statearr_26821_26873[(1)] = (36));

} else {
var statearr_26822_26874 = state_26782__$1;
(statearr_26822_26874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (19))){
var inst_26709 = (state_26782[(7)]);
var inst_26729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26709);
var state_26782__$1 = state_26782;
var statearr_26823_26875 = state_26782__$1;
(statearr_26823_26875[(2)] = inst_26729);

(statearr_26823_26875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (11))){
var inst_26709 = (state_26782[(7)]);
var inst_26713 = (inst_26709 == null);
var inst_26714 = cljs.core.not.call(null,inst_26713);
var state_26782__$1 = state_26782;
if(inst_26714){
var statearr_26824_26876 = state_26782__$1;
(statearr_26824_26876[(1)] = (13));

} else {
var statearr_26825_26877 = state_26782__$1;
(statearr_26825_26877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (9))){
var inst_26684 = (state_26782[(8)]);
var state_26782__$1 = state_26782;
var statearr_26826_26878 = state_26782__$1;
(statearr_26826_26878[(2)] = inst_26684);

(statearr_26826_26878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (5))){
var state_26782__$1 = state_26782;
var statearr_26827_26879 = state_26782__$1;
(statearr_26827_26879[(2)] = true);

(statearr_26827_26879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (14))){
var state_26782__$1 = state_26782;
var statearr_26828_26880 = state_26782__$1;
(statearr_26828_26880[(2)] = false);

(statearr_26828_26880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (26))){
var inst_26742 = (state_26782[(10)]);
var inst_26749 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26742);
var state_26782__$1 = state_26782;
var statearr_26829_26881 = state_26782__$1;
(statearr_26829_26881[(2)] = inst_26749);

(statearr_26829_26881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (16))){
var state_26782__$1 = state_26782;
var statearr_26830_26882 = state_26782__$1;
(statearr_26830_26882[(2)] = true);

(statearr_26830_26882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (38))){
var inst_26772 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26831_26883 = state_26782__$1;
(statearr_26831_26883[(2)] = inst_26772);

(statearr_26831_26883[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (30))){
var inst_26733 = (state_26782[(9)]);
var inst_26742 = (state_26782[(10)]);
var inst_26734 = (state_26782[(13)]);
var inst_26759 = cljs.core.empty_QMARK_.call(null,inst_26733);
var inst_26760 = inst_26734.call(null,inst_26742);
var inst_26761 = cljs.core.not.call(null,inst_26760);
var inst_26762 = ((inst_26759) && (inst_26761));
var state_26782__$1 = state_26782;
var statearr_26832_26884 = state_26782__$1;
(statearr_26832_26884[(2)] = inst_26762);

(statearr_26832_26884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (10))){
var inst_26684 = (state_26782[(8)]);
var inst_26705 = (state_26782[(2)]);
var inst_26706 = cljs.core.get.call(null,inst_26705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26707 = cljs.core.get.call(null,inst_26705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26708 = cljs.core.get.call(null,inst_26705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26709 = inst_26684;
var state_26782__$1 = (function (){var statearr_26833 = state_26782;
(statearr_26833[(16)] = inst_26708);

(statearr_26833[(7)] = inst_26709);

(statearr_26833[(17)] = inst_26707);

(statearr_26833[(18)] = inst_26706);

return statearr_26833;
})();
var statearr_26834_26885 = state_26782__$1;
(statearr_26834_26885[(2)] = null);

(statearr_26834_26885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (18))){
var inst_26724 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26835_26886 = state_26782__$1;
(statearr_26835_26886[(2)] = inst_26724);

(statearr_26835_26886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (37))){
var state_26782__$1 = state_26782;
var statearr_26836_26887 = state_26782__$1;
(statearr_26836_26887[(2)] = null);

(statearr_26836_26887[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (8))){
var inst_26684 = (state_26782[(8)]);
var inst_26702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26684);
var state_26782__$1 = state_26782;
var statearr_26837_26888 = state_26782__$1;
(statearr_26837_26888[(2)] = inst_26702);

(statearr_26837_26888[(1)] = (10));


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
});})(c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25689__auto__,c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25690__auto__ = null;
var cljs$core$async$mix_$_state_machine__25690__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$mix_$_state_machine__25690__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$mix_$_state_machine__25690__auto____1 = (function (state_26782){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e26839){if((e26839 instanceof Object)){
var ex__25693__auto__ = e26839;
var statearr_26840_26889 = state_26782;
(statearr_26840_26889[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26890 = state_26782;
state_26782 = G__26890;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25690__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25690__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25690__auto____0;
cljs$core$async$mix_$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25690__auto____1;
return cljs$core$async$mix_$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25786__auto__ = (function (){var statearr_26841 = f__25785__auto__.call(null);
(statearr_26841[(6)] = c__25784__auto___26842);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___26842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__26892 = arguments.length;
switch (G__26892) {
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
var G__26896 = arguments.length;
switch (G__26896) {
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
return (function (p1__26894_SHARP_){
if(cljs.core.truth_(p1__26894_SHARP_.call(null,topic))){
return p1__26894_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26894_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26897 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26898){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26898 = meta26898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26899,meta26898__$1){
var self__ = this;
var _26899__$1 = this;
return (new cljs.core.async.t_cljs$core$async26897(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26898__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26899){
var self__ = this;
var _26899__$1 = this;
return self__.meta26898;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26898","meta26898",-305443877,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26897";

cljs.core.async.t_cljs$core$async26897.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26897");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26897.
 */
cljs.core.async.__GT_t_cljs$core$async26897 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26898){
return (new cljs.core.async.t_cljs$core$async26897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26898));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26897(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25784__auto___27017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27017,mults,ensure_mult,p){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27017,mults,ensure_mult,p){
return (function (state_26971){
var state_val_26972 = (state_26971[(1)]);
if((state_val_26972 === (7))){
var inst_26967 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26973_27018 = state_26971__$1;
(statearr_26973_27018[(2)] = inst_26967);

(statearr_26973_27018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (20))){
var state_26971__$1 = state_26971;
var statearr_26974_27019 = state_26971__$1;
(statearr_26974_27019[(2)] = null);

(statearr_26974_27019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (1))){
var state_26971__$1 = state_26971;
var statearr_26975_27020 = state_26971__$1;
(statearr_26975_27020[(2)] = null);

(statearr_26975_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (24))){
var inst_26950 = (state_26971[(7)]);
var inst_26959 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26950);
var state_26971__$1 = state_26971;
var statearr_26976_27021 = state_26971__$1;
(statearr_26976_27021[(2)] = inst_26959);

(statearr_26976_27021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (4))){
var inst_26902 = (state_26971[(8)]);
var inst_26902__$1 = (state_26971[(2)]);
var inst_26903 = (inst_26902__$1 == null);
var state_26971__$1 = (function (){var statearr_26977 = state_26971;
(statearr_26977[(8)] = inst_26902__$1);

return statearr_26977;
})();
if(cljs.core.truth_(inst_26903)){
var statearr_26978_27022 = state_26971__$1;
(statearr_26978_27022[(1)] = (5));

} else {
var statearr_26979_27023 = state_26971__$1;
(statearr_26979_27023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (15))){
var inst_26944 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26980_27024 = state_26971__$1;
(statearr_26980_27024[(2)] = inst_26944);

(statearr_26980_27024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (21))){
var inst_26964 = (state_26971[(2)]);
var state_26971__$1 = (function (){var statearr_26981 = state_26971;
(statearr_26981[(9)] = inst_26964);

return statearr_26981;
})();
var statearr_26982_27025 = state_26971__$1;
(statearr_26982_27025[(2)] = null);

(statearr_26982_27025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (13))){
var inst_26926 = (state_26971[(10)]);
var inst_26928 = cljs.core.chunked_seq_QMARK_.call(null,inst_26926);
var state_26971__$1 = state_26971;
if(inst_26928){
var statearr_26983_27026 = state_26971__$1;
(statearr_26983_27026[(1)] = (16));

} else {
var statearr_26984_27027 = state_26971__$1;
(statearr_26984_27027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (22))){
var inst_26956 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
if(cljs.core.truth_(inst_26956)){
var statearr_26985_27028 = state_26971__$1;
(statearr_26985_27028[(1)] = (23));

} else {
var statearr_26986_27029 = state_26971__$1;
(statearr_26986_27029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (6))){
var inst_26952 = (state_26971[(11)]);
var inst_26902 = (state_26971[(8)]);
var inst_26950 = (state_26971[(7)]);
var inst_26950__$1 = topic_fn.call(null,inst_26902);
var inst_26951 = cljs.core.deref.call(null,mults);
var inst_26952__$1 = cljs.core.get.call(null,inst_26951,inst_26950__$1);
var state_26971__$1 = (function (){var statearr_26987 = state_26971;
(statearr_26987[(11)] = inst_26952__$1);

(statearr_26987[(7)] = inst_26950__$1);

return statearr_26987;
})();
if(cljs.core.truth_(inst_26952__$1)){
var statearr_26988_27030 = state_26971__$1;
(statearr_26988_27030[(1)] = (19));

} else {
var statearr_26989_27031 = state_26971__$1;
(statearr_26989_27031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (25))){
var inst_26961 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26990_27032 = state_26971__$1;
(statearr_26990_27032[(2)] = inst_26961);

(statearr_26990_27032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (17))){
var inst_26926 = (state_26971[(10)]);
var inst_26935 = cljs.core.first.call(null,inst_26926);
var inst_26936 = cljs.core.async.muxch_STAR_.call(null,inst_26935);
var inst_26937 = cljs.core.async.close_BANG_.call(null,inst_26936);
var inst_26938 = cljs.core.next.call(null,inst_26926);
var inst_26912 = inst_26938;
var inst_26913 = null;
var inst_26914 = (0);
var inst_26915 = (0);
var state_26971__$1 = (function (){var statearr_26991 = state_26971;
(statearr_26991[(12)] = inst_26937);

(statearr_26991[(13)] = inst_26914);

(statearr_26991[(14)] = inst_26912);

(statearr_26991[(15)] = inst_26913);

(statearr_26991[(16)] = inst_26915);

return statearr_26991;
})();
var statearr_26992_27033 = state_26971__$1;
(statearr_26992_27033[(2)] = null);

(statearr_26992_27033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (3))){
var inst_26969 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26971__$1,inst_26969);
} else {
if((state_val_26972 === (12))){
var inst_26946 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26993_27034 = state_26971__$1;
(statearr_26993_27034[(2)] = inst_26946);

(statearr_26993_27034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (2))){
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26971__$1,(4),ch);
} else {
if((state_val_26972 === (23))){
var state_26971__$1 = state_26971;
var statearr_26994_27035 = state_26971__$1;
(statearr_26994_27035[(2)] = null);

(statearr_26994_27035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (19))){
var inst_26952 = (state_26971[(11)]);
var inst_26902 = (state_26971[(8)]);
var inst_26954 = cljs.core.async.muxch_STAR_.call(null,inst_26952);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26971__$1,(22),inst_26954,inst_26902);
} else {
if((state_val_26972 === (11))){
var inst_26926 = (state_26971[(10)]);
var inst_26912 = (state_26971[(14)]);
var inst_26926__$1 = cljs.core.seq.call(null,inst_26912);
var state_26971__$1 = (function (){var statearr_26995 = state_26971;
(statearr_26995[(10)] = inst_26926__$1);

return statearr_26995;
})();
if(inst_26926__$1){
var statearr_26996_27036 = state_26971__$1;
(statearr_26996_27036[(1)] = (13));

} else {
var statearr_26997_27037 = state_26971__$1;
(statearr_26997_27037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (9))){
var inst_26948 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_26998_27038 = state_26971__$1;
(statearr_26998_27038[(2)] = inst_26948);

(statearr_26998_27038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (5))){
var inst_26909 = cljs.core.deref.call(null,mults);
var inst_26910 = cljs.core.vals.call(null,inst_26909);
var inst_26911 = cljs.core.seq.call(null,inst_26910);
var inst_26912 = inst_26911;
var inst_26913 = null;
var inst_26914 = (0);
var inst_26915 = (0);
var state_26971__$1 = (function (){var statearr_26999 = state_26971;
(statearr_26999[(13)] = inst_26914);

(statearr_26999[(14)] = inst_26912);

(statearr_26999[(15)] = inst_26913);

(statearr_26999[(16)] = inst_26915);

return statearr_26999;
})();
var statearr_27000_27039 = state_26971__$1;
(statearr_27000_27039[(2)] = null);

(statearr_27000_27039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (14))){
var state_26971__$1 = state_26971;
var statearr_27004_27040 = state_26971__$1;
(statearr_27004_27040[(2)] = null);

(statearr_27004_27040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (16))){
var inst_26926 = (state_26971[(10)]);
var inst_26930 = cljs.core.chunk_first.call(null,inst_26926);
var inst_26931 = cljs.core.chunk_rest.call(null,inst_26926);
var inst_26932 = cljs.core.count.call(null,inst_26930);
var inst_26912 = inst_26931;
var inst_26913 = inst_26930;
var inst_26914 = inst_26932;
var inst_26915 = (0);
var state_26971__$1 = (function (){var statearr_27005 = state_26971;
(statearr_27005[(13)] = inst_26914);

(statearr_27005[(14)] = inst_26912);

(statearr_27005[(15)] = inst_26913);

(statearr_27005[(16)] = inst_26915);

return statearr_27005;
})();
var statearr_27006_27041 = state_26971__$1;
(statearr_27006_27041[(2)] = null);

(statearr_27006_27041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (10))){
var inst_26914 = (state_26971[(13)]);
var inst_26912 = (state_26971[(14)]);
var inst_26913 = (state_26971[(15)]);
var inst_26915 = (state_26971[(16)]);
var inst_26920 = cljs.core._nth.call(null,inst_26913,inst_26915);
var inst_26921 = cljs.core.async.muxch_STAR_.call(null,inst_26920);
var inst_26922 = cljs.core.async.close_BANG_.call(null,inst_26921);
var inst_26923 = (inst_26915 + (1));
var tmp27001 = inst_26914;
var tmp27002 = inst_26912;
var tmp27003 = inst_26913;
var inst_26912__$1 = tmp27002;
var inst_26913__$1 = tmp27003;
var inst_26914__$1 = tmp27001;
var inst_26915__$1 = inst_26923;
var state_26971__$1 = (function (){var statearr_27007 = state_26971;
(statearr_27007[(13)] = inst_26914__$1);

(statearr_27007[(14)] = inst_26912__$1);

(statearr_27007[(15)] = inst_26913__$1);

(statearr_27007[(17)] = inst_26922);

(statearr_27007[(16)] = inst_26915__$1);

return statearr_27007;
})();
var statearr_27008_27042 = state_26971__$1;
(statearr_27008_27042[(2)] = null);

(statearr_27008_27042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (18))){
var inst_26941 = (state_26971[(2)]);
var state_26971__$1 = state_26971;
var statearr_27009_27043 = state_26971__$1;
(statearr_27009_27043[(2)] = inst_26941);

(statearr_27009_27043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26972 === (8))){
var inst_26914 = (state_26971[(13)]);
var inst_26915 = (state_26971[(16)]);
var inst_26917 = (inst_26915 < inst_26914);
var inst_26918 = inst_26917;
var state_26971__$1 = state_26971;
if(cljs.core.truth_(inst_26918)){
var statearr_27010_27044 = state_26971__$1;
(statearr_27010_27044[(1)] = (10));

} else {
var statearr_27011_27045 = state_26971__$1;
(statearr_27011_27045[(1)] = (11));

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
});})(c__25784__auto___27017,mults,ensure_mult,p))
;
return ((function (switch__25689__auto__,c__25784__auto___27017,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27012[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27012[(1)] = (1));

return statearr_27012;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_26971){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_26971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27013){if((e27013 instanceof Object)){
var ex__25693__auto__ = e27013;
var statearr_27014_27046 = state_26971;
(statearr_27014_27046[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27047 = state_26971;
state_26971 = G__27047;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_26971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_26971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27017,mults,ensure_mult,p))
})();
var state__25786__auto__ = (function (){var statearr_27015 = f__25785__auto__.call(null);
(statearr_27015[(6)] = c__25784__auto___27017);

return statearr_27015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27017,mults,ensure_mult,p))
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
var G__27049 = arguments.length;
switch (G__27049) {
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
var G__27052 = arguments.length;
switch (G__27052) {
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
var G__27055 = arguments.length;
switch (G__27055) {
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
var c__25784__auto___27122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27094){
var state_val_27095 = (state_27094[(1)]);
if((state_val_27095 === (7))){
var state_27094__$1 = state_27094;
var statearr_27096_27123 = state_27094__$1;
(statearr_27096_27123[(2)] = null);

(statearr_27096_27123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (1))){
var state_27094__$1 = state_27094;
var statearr_27097_27124 = state_27094__$1;
(statearr_27097_27124[(2)] = null);

(statearr_27097_27124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (4))){
var inst_27058 = (state_27094[(7)]);
var inst_27060 = (inst_27058 < cnt);
var state_27094__$1 = state_27094;
if(cljs.core.truth_(inst_27060)){
var statearr_27098_27125 = state_27094__$1;
(statearr_27098_27125[(1)] = (6));

} else {
var statearr_27099_27126 = state_27094__$1;
(statearr_27099_27126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (15))){
var inst_27090 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27100_27127 = state_27094__$1;
(statearr_27100_27127[(2)] = inst_27090);

(statearr_27100_27127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (13))){
var inst_27083 = cljs.core.async.close_BANG_.call(null,out);
var state_27094__$1 = state_27094;
var statearr_27101_27128 = state_27094__$1;
(statearr_27101_27128[(2)] = inst_27083);

(statearr_27101_27128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (6))){
var state_27094__$1 = state_27094;
var statearr_27102_27129 = state_27094__$1;
(statearr_27102_27129[(2)] = null);

(statearr_27102_27129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (3))){
var inst_27092 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27094__$1,inst_27092);
} else {
if((state_val_27095 === (12))){
var inst_27080 = (state_27094[(8)]);
var inst_27080__$1 = (state_27094[(2)]);
var inst_27081 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27080__$1);
var state_27094__$1 = (function (){var statearr_27103 = state_27094;
(statearr_27103[(8)] = inst_27080__$1);

return statearr_27103;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27104_27130 = state_27094__$1;
(statearr_27104_27130[(1)] = (13));

} else {
var statearr_27105_27131 = state_27094__$1;
(statearr_27105_27131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (2))){
var inst_27057 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27058 = (0);
var state_27094__$1 = (function (){var statearr_27106 = state_27094;
(statearr_27106[(7)] = inst_27058);

(statearr_27106[(9)] = inst_27057);

return statearr_27106;
})();
var statearr_27107_27132 = state_27094__$1;
(statearr_27107_27132[(2)] = null);

(statearr_27107_27132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (11))){
var inst_27058 = (state_27094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27094,(10),Object,null,(9));
var inst_27067 = chs__$1.call(null,inst_27058);
var inst_27068 = done.call(null,inst_27058);
var inst_27069 = cljs.core.async.take_BANG_.call(null,inst_27067,inst_27068);
var state_27094__$1 = state_27094;
var statearr_27108_27133 = state_27094__$1;
(statearr_27108_27133[(2)] = inst_27069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (9))){
var inst_27058 = (state_27094[(7)]);
var inst_27071 = (state_27094[(2)]);
var inst_27072 = (inst_27058 + (1));
var inst_27058__$1 = inst_27072;
var state_27094__$1 = (function (){var statearr_27109 = state_27094;
(statearr_27109[(7)] = inst_27058__$1);

(statearr_27109[(10)] = inst_27071);

return statearr_27109;
})();
var statearr_27110_27134 = state_27094__$1;
(statearr_27110_27134[(2)] = null);

(statearr_27110_27134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (5))){
var inst_27078 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27111 = state_27094;
(statearr_27111[(11)] = inst_27078);

return statearr_27111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27094__$1,(12),dchan);
} else {
if((state_val_27095 === (14))){
var inst_27080 = (state_27094[(8)]);
var inst_27085 = cljs.core.apply.call(null,f,inst_27080);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27094__$1,(16),out,inst_27085);
} else {
if((state_val_27095 === (16))){
var inst_27087 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27112 = state_27094;
(statearr_27112[(12)] = inst_27087);

return statearr_27112;
})();
var statearr_27113_27135 = state_27094__$1;
(statearr_27113_27135[(2)] = null);

(statearr_27113_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (10))){
var inst_27062 = (state_27094[(2)]);
var inst_27063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27094__$1 = (function (){var statearr_27114 = state_27094;
(statearr_27114[(13)] = inst_27062);

return statearr_27114;
})();
var statearr_27115_27136 = state_27094__$1;
(statearr_27115_27136[(2)] = inst_27063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (8))){
var inst_27076 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27116_27137 = state_27094__$1;
(statearr_27116_27137[(2)] = inst_27076);

(statearr_27116_27137[(1)] = (5));


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
});})(c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25689__auto__,c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27117[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27117[(1)] = (1));

return statearr_27117;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27094){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object)){
var ex__25693__auto__ = e27118;
var statearr_27119_27138 = state_27094;
(statearr_27119_27138[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27139 = state_27094;
state_27094 = G__27139;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25786__auto__ = (function (){var statearr_27120 = f__25785__auto__.call(null);
(statearr_27120[(6)] = c__25784__auto___27122);

return statearr_27120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27122,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27142 = arguments.length;
switch (G__27142) {
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
var c__25784__auto___27196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27196,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27196,out){
return (function (state_27174){
var state_val_27175 = (state_27174[(1)]);
if((state_val_27175 === (7))){
var inst_27154 = (state_27174[(7)]);
var inst_27153 = (state_27174[(8)]);
var inst_27153__$1 = (state_27174[(2)]);
var inst_27154__$1 = cljs.core.nth.call(null,inst_27153__$1,(0),null);
var inst_27155 = cljs.core.nth.call(null,inst_27153__$1,(1),null);
var inst_27156 = (inst_27154__$1 == null);
var state_27174__$1 = (function (){var statearr_27176 = state_27174;
(statearr_27176[(9)] = inst_27155);

(statearr_27176[(7)] = inst_27154__$1);

(statearr_27176[(8)] = inst_27153__$1);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27177_27197 = state_27174__$1;
(statearr_27177_27197[(1)] = (8));

} else {
var statearr_27178_27198 = state_27174__$1;
(statearr_27178_27198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (1))){
var inst_27143 = cljs.core.vec.call(null,chs);
var inst_27144 = inst_27143;
var state_27174__$1 = (function (){var statearr_27179 = state_27174;
(statearr_27179[(10)] = inst_27144);

return statearr_27179;
})();
var statearr_27180_27199 = state_27174__$1;
(statearr_27180_27199[(2)] = null);

(statearr_27180_27199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (4))){
var inst_27144 = (state_27174[(10)]);
var state_27174__$1 = state_27174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27174__$1,(7),inst_27144);
} else {
if((state_val_27175 === (6))){
var inst_27170 = (state_27174[(2)]);
var state_27174__$1 = state_27174;
var statearr_27181_27200 = state_27174__$1;
(statearr_27181_27200[(2)] = inst_27170);

(statearr_27181_27200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (3))){
var inst_27172 = (state_27174[(2)]);
var state_27174__$1 = state_27174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27174__$1,inst_27172);
} else {
if((state_val_27175 === (2))){
var inst_27144 = (state_27174[(10)]);
var inst_27146 = cljs.core.count.call(null,inst_27144);
var inst_27147 = (inst_27146 > (0));
var state_27174__$1 = state_27174;
if(cljs.core.truth_(inst_27147)){
var statearr_27183_27201 = state_27174__$1;
(statearr_27183_27201[(1)] = (4));

} else {
var statearr_27184_27202 = state_27174__$1;
(statearr_27184_27202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (11))){
var inst_27144 = (state_27174[(10)]);
var inst_27163 = (state_27174[(2)]);
var tmp27182 = inst_27144;
var inst_27144__$1 = tmp27182;
var state_27174__$1 = (function (){var statearr_27185 = state_27174;
(statearr_27185[(10)] = inst_27144__$1);

(statearr_27185[(11)] = inst_27163);

return statearr_27185;
})();
var statearr_27186_27203 = state_27174__$1;
(statearr_27186_27203[(2)] = null);

(statearr_27186_27203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (9))){
var inst_27154 = (state_27174[(7)]);
var state_27174__$1 = state_27174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27174__$1,(11),out,inst_27154);
} else {
if((state_val_27175 === (5))){
var inst_27168 = cljs.core.async.close_BANG_.call(null,out);
var state_27174__$1 = state_27174;
var statearr_27187_27204 = state_27174__$1;
(statearr_27187_27204[(2)] = inst_27168);

(statearr_27187_27204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (10))){
var inst_27166 = (state_27174[(2)]);
var state_27174__$1 = state_27174;
var statearr_27188_27205 = state_27174__$1;
(statearr_27188_27205[(2)] = inst_27166);

(statearr_27188_27205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27175 === (8))){
var inst_27144 = (state_27174[(10)]);
var inst_27155 = (state_27174[(9)]);
var inst_27154 = (state_27174[(7)]);
var inst_27153 = (state_27174[(8)]);
var inst_27158 = (function (){var cs = inst_27144;
var vec__27149 = inst_27153;
var v = inst_27154;
var c = inst_27155;
return ((function (cs,vec__27149,v,c,inst_27144,inst_27155,inst_27154,inst_27153,state_val_27175,c__25784__auto___27196,out){
return (function (p1__27140_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27140_SHARP_);
});
;})(cs,vec__27149,v,c,inst_27144,inst_27155,inst_27154,inst_27153,state_val_27175,c__25784__auto___27196,out))
})();
var inst_27159 = cljs.core.filterv.call(null,inst_27158,inst_27144);
var inst_27144__$1 = inst_27159;
var state_27174__$1 = (function (){var statearr_27189 = state_27174;
(statearr_27189[(10)] = inst_27144__$1);

return statearr_27189;
})();
var statearr_27190_27206 = state_27174__$1;
(statearr_27190_27206[(2)] = null);

(statearr_27190_27206[(1)] = (2));


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
});})(c__25784__auto___27196,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27196,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27191[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27191[(1)] = (1));

return statearr_27191;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27174){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27192){if((e27192 instanceof Object)){
var ex__25693__auto__ = e27192;
var statearr_27193_27207 = state_27174;
(statearr_27193_27207[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27208 = state_27174;
state_27174 = G__27208;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27196,out))
})();
var state__25786__auto__ = (function (){var statearr_27194 = f__25785__auto__.call(null);
(statearr_27194[(6)] = c__25784__auto___27196);

return statearr_27194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27196,out))
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
var G__27210 = arguments.length;
switch (G__27210) {
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
var c__25784__auto___27255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27255,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27255,out){
return (function (state_27234){
var state_val_27235 = (state_27234[(1)]);
if((state_val_27235 === (7))){
var inst_27216 = (state_27234[(7)]);
var inst_27216__$1 = (state_27234[(2)]);
var inst_27217 = (inst_27216__$1 == null);
var inst_27218 = cljs.core.not.call(null,inst_27217);
var state_27234__$1 = (function (){var statearr_27236 = state_27234;
(statearr_27236[(7)] = inst_27216__$1);

return statearr_27236;
})();
if(inst_27218){
var statearr_27237_27256 = state_27234__$1;
(statearr_27237_27256[(1)] = (8));

} else {
var statearr_27238_27257 = state_27234__$1;
(statearr_27238_27257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (1))){
var inst_27211 = (0);
var state_27234__$1 = (function (){var statearr_27239 = state_27234;
(statearr_27239[(8)] = inst_27211);

return statearr_27239;
})();
var statearr_27240_27258 = state_27234__$1;
(statearr_27240_27258[(2)] = null);

(statearr_27240_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (4))){
var state_27234__$1 = state_27234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27234__$1,(7),ch);
} else {
if((state_val_27235 === (6))){
var inst_27229 = (state_27234[(2)]);
var state_27234__$1 = state_27234;
var statearr_27241_27259 = state_27234__$1;
(statearr_27241_27259[(2)] = inst_27229);

(statearr_27241_27259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (3))){
var inst_27231 = (state_27234[(2)]);
var inst_27232 = cljs.core.async.close_BANG_.call(null,out);
var state_27234__$1 = (function (){var statearr_27242 = state_27234;
(statearr_27242[(9)] = inst_27231);

return statearr_27242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27234__$1,inst_27232);
} else {
if((state_val_27235 === (2))){
var inst_27211 = (state_27234[(8)]);
var inst_27213 = (inst_27211 < n);
var state_27234__$1 = state_27234;
if(cljs.core.truth_(inst_27213)){
var statearr_27243_27260 = state_27234__$1;
(statearr_27243_27260[(1)] = (4));

} else {
var statearr_27244_27261 = state_27234__$1;
(statearr_27244_27261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (11))){
var inst_27211 = (state_27234[(8)]);
var inst_27221 = (state_27234[(2)]);
var inst_27222 = (inst_27211 + (1));
var inst_27211__$1 = inst_27222;
var state_27234__$1 = (function (){var statearr_27245 = state_27234;
(statearr_27245[(10)] = inst_27221);

(statearr_27245[(8)] = inst_27211__$1);

return statearr_27245;
})();
var statearr_27246_27262 = state_27234__$1;
(statearr_27246_27262[(2)] = null);

(statearr_27246_27262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (9))){
var state_27234__$1 = state_27234;
var statearr_27247_27263 = state_27234__$1;
(statearr_27247_27263[(2)] = null);

(statearr_27247_27263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (5))){
var state_27234__$1 = state_27234;
var statearr_27248_27264 = state_27234__$1;
(statearr_27248_27264[(2)] = null);

(statearr_27248_27264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (10))){
var inst_27226 = (state_27234[(2)]);
var state_27234__$1 = state_27234;
var statearr_27249_27265 = state_27234__$1;
(statearr_27249_27265[(2)] = inst_27226);

(statearr_27249_27265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27235 === (8))){
var inst_27216 = (state_27234[(7)]);
var state_27234__$1 = state_27234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27234__$1,(11),out,inst_27216);
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
});})(c__25784__auto___27255,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27255,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27250[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27250[(1)] = (1));

return statearr_27250;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27234){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27251){if((e27251 instanceof Object)){
var ex__25693__auto__ = e27251;
var statearr_27252_27266 = state_27234;
(statearr_27252_27266[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27267 = state_27234;
state_27234 = G__27267;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27255,out))
})();
var state__25786__auto__ = (function (){var statearr_27253 = f__25785__auto__.call(null);
(statearr_27253[(6)] = c__25784__auto___27255);

return statearr_27253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27255,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27269 = (function (f,ch,meta27270){
this.f = f;
this.ch = ch;
this.meta27270 = meta27270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27271,meta27270__$1){
var self__ = this;
var _27271__$1 = this;
return (new cljs.core.async.t_cljs$core$async27269(self__.f,self__.ch,meta27270__$1));
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27271){
var self__ = this;
var _27271__$1 = this;
return self__.meta27270;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27272 = (function (f,ch,meta27270,_,fn1,meta27273){
this.f = f;
this.ch = ch;
this.meta27270 = meta27270;
this._ = _;
this.fn1 = fn1;
this.meta27273 = meta27273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27274,meta27273__$1){
var self__ = this;
var _27274__$1 = this;
return (new cljs.core.async.t_cljs$core$async27272(self__.f,self__.ch,self__.meta27270,self__._,self__.fn1,meta27273__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27274){
var self__ = this;
var _27274__$1 = this;
return self__.meta27273;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27268_SHARP_){
return f1.call(null,(((p1__27268_SHARP_ == null))?null:self__.f.call(null,p1__27268_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27270","meta27270",-1007746192,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27269","cljs.core.async/t_cljs$core$async27269",642859511,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27273","meta27273",978721316,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27272";

cljs.core.async.t_cljs$core$async27272.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27272");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27272.
 */
cljs.core.async.__GT_t_cljs$core$async27272 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27272(f__$1,ch__$1,meta27270__$1,___$2,fn1__$1,meta27273){
return (new cljs.core.async.t_cljs$core$async27272(f__$1,ch__$1,meta27270__$1,___$2,fn1__$1,meta27273));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27272(self__.f,self__.ch,self__.meta27270,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27270","meta27270",-1007746192,null)], null);
});

cljs.core.async.t_cljs$core$async27269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27269";

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27269");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27269.
 */
cljs.core.async.__GT_t_cljs$core$async27269 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27269(f__$1,ch__$1,meta27270){
return (new cljs.core.async.t_cljs$core$async27269(f__$1,ch__$1,meta27270));
});

}

return (new cljs.core.async.t_cljs$core$async27269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27275 = (function (f,ch,meta27276){
this.f = f;
this.ch = ch;
this.meta27276 = meta27276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27277,meta27276__$1){
var self__ = this;
var _27277__$1 = this;
return (new cljs.core.async.t_cljs$core$async27275(self__.f,self__.ch,meta27276__$1));
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27277){
var self__ = this;
var _27277__$1 = this;
return self__.meta27276;
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27276","meta27276",-1480327312,null)], null);
});

cljs.core.async.t_cljs$core$async27275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27275";

cljs.core.async.t_cljs$core$async27275.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27275.
 */
cljs.core.async.__GT_t_cljs$core$async27275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27275(f__$1,ch__$1,meta27276){
return (new cljs.core.async.t_cljs$core$async27275(f__$1,ch__$1,meta27276));
});

}

return (new cljs.core.async.t_cljs$core$async27275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27278 = (function (p,ch,meta27279){
this.p = p;
this.ch = ch;
this.meta27279 = meta27279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27280,meta27279__$1){
var self__ = this;
var _27280__$1 = this;
return (new cljs.core.async.t_cljs$core$async27278(self__.p,self__.ch,meta27279__$1));
});

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27280){
var self__ = this;
var _27280__$1 = this;
return self__.meta27279;
});

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27279","meta27279",-8965695,null)], null);
});

cljs.core.async.t_cljs$core$async27278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27278";

cljs.core.async.t_cljs$core$async27278.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27278.
 */
cljs.core.async.__GT_t_cljs$core$async27278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27278(p__$1,ch__$1,meta27279){
return (new cljs.core.async.t_cljs$core$async27278(p__$1,ch__$1,meta27279));
});

}

return (new cljs.core.async.t_cljs$core$async27278(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27282 = arguments.length;
switch (G__27282) {
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
var c__25784__auto___27322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27322,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27322,out){
return (function (state_27303){
var state_val_27304 = (state_27303[(1)]);
if((state_val_27304 === (7))){
var inst_27299 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27305_27323 = state_27303__$1;
(statearr_27305_27323[(2)] = inst_27299);

(statearr_27305_27323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (1))){
var state_27303__$1 = state_27303;
var statearr_27306_27324 = state_27303__$1;
(statearr_27306_27324[(2)] = null);

(statearr_27306_27324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (4))){
var inst_27285 = (state_27303[(7)]);
var inst_27285__$1 = (state_27303[(2)]);
var inst_27286 = (inst_27285__$1 == null);
var state_27303__$1 = (function (){var statearr_27307 = state_27303;
(statearr_27307[(7)] = inst_27285__$1);

return statearr_27307;
})();
if(cljs.core.truth_(inst_27286)){
var statearr_27308_27325 = state_27303__$1;
(statearr_27308_27325[(1)] = (5));

} else {
var statearr_27309_27326 = state_27303__$1;
(statearr_27309_27326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (6))){
var inst_27285 = (state_27303[(7)]);
var inst_27290 = p.call(null,inst_27285);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27290)){
var statearr_27310_27327 = state_27303__$1;
(statearr_27310_27327[(1)] = (8));

} else {
var statearr_27311_27328 = state_27303__$1;
(statearr_27311_27328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (3))){
var inst_27301 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27303__$1,inst_27301);
} else {
if((state_val_27304 === (2))){
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27303__$1,(4),ch);
} else {
if((state_val_27304 === (11))){
var inst_27293 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27312_27329 = state_27303__$1;
(statearr_27312_27329[(2)] = inst_27293);

(statearr_27312_27329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (9))){
var state_27303__$1 = state_27303;
var statearr_27313_27330 = state_27303__$1;
(statearr_27313_27330[(2)] = null);

(statearr_27313_27330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (5))){
var inst_27288 = cljs.core.async.close_BANG_.call(null,out);
var state_27303__$1 = state_27303;
var statearr_27314_27331 = state_27303__$1;
(statearr_27314_27331[(2)] = inst_27288);

(statearr_27314_27331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (10))){
var inst_27296 = (state_27303[(2)]);
var state_27303__$1 = (function (){var statearr_27315 = state_27303;
(statearr_27315[(8)] = inst_27296);

return statearr_27315;
})();
var statearr_27316_27332 = state_27303__$1;
(statearr_27316_27332[(2)] = null);

(statearr_27316_27332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (8))){
var inst_27285 = (state_27303[(7)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27303__$1,(11),out,inst_27285);
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
});})(c__25784__auto___27322,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27322,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27317 = [null,null,null,null,null,null,null,null,null];
(statearr_27317[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27317[(1)] = (1));

return statearr_27317;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27303){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27318){if((e27318 instanceof Object)){
var ex__25693__auto__ = e27318;
var statearr_27319_27333 = state_27303;
(statearr_27319_27333[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27334 = state_27303;
state_27303 = G__27334;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27322,out))
})();
var state__25786__auto__ = (function (){var statearr_27320 = f__25785__auto__.call(null);
(statearr_27320[(6)] = c__25784__auto___27322);

return statearr_27320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27322,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27336 = arguments.length;
switch (G__27336) {
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
var c__25784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto__){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto__){
return (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (7))){
var inst_27395 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27401_27439 = state_27399__$1;
(statearr_27401_27439[(2)] = inst_27395);

(statearr_27401_27439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (20))){
var inst_27365 = (state_27399[(7)]);
var inst_27376 = (state_27399[(2)]);
var inst_27377 = cljs.core.next.call(null,inst_27365);
var inst_27351 = inst_27377;
var inst_27352 = null;
var inst_27353 = (0);
var inst_27354 = (0);
var state_27399__$1 = (function (){var statearr_27402 = state_27399;
(statearr_27402[(8)] = inst_27352);

(statearr_27402[(9)] = inst_27376);

(statearr_27402[(10)] = inst_27351);

(statearr_27402[(11)] = inst_27353);

(statearr_27402[(12)] = inst_27354);

return statearr_27402;
})();
var statearr_27403_27440 = state_27399__$1;
(statearr_27403_27440[(2)] = null);

(statearr_27403_27440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (1))){
var state_27399__$1 = state_27399;
var statearr_27404_27441 = state_27399__$1;
(statearr_27404_27441[(2)] = null);

(statearr_27404_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (4))){
var inst_27340 = (state_27399[(13)]);
var inst_27340__$1 = (state_27399[(2)]);
var inst_27341 = (inst_27340__$1 == null);
var state_27399__$1 = (function (){var statearr_27405 = state_27399;
(statearr_27405[(13)] = inst_27340__$1);

return statearr_27405;
})();
if(cljs.core.truth_(inst_27341)){
var statearr_27406_27442 = state_27399__$1;
(statearr_27406_27442[(1)] = (5));

} else {
var statearr_27407_27443 = state_27399__$1;
(statearr_27407_27443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (15))){
var state_27399__$1 = state_27399;
var statearr_27411_27444 = state_27399__$1;
(statearr_27411_27444[(2)] = null);

(statearr_27411_27444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (21))){
var state_27399__$1 = state_27399;
var statearr_27412_27445 = state_27399__$1;
(statearr_27412_27445[(2)] = null);

(statearr_27412_27445[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (13))){
var inst_27352 = (state_27399[(8)]);
var inst_27351 = (state_27399[(10)]);
var inst_27353 = (state_27399[(11)]);
var inst_27354 = (state_27399[(12)]);
var inst_27361 = (state_27399[(2)]);
var inst_27362 = (inst_27354 + (1));
var tmp27408 = inst_27352;
var tmp27409 = inst_27351;
var tmp27410 = inst_27353;
var inst_27351__$1 = tmp27409;
var inst_27352__$1 = tmp27408;
var inst_27353__$1 = tmp27410;
var inst_27354__$1 = inst_27362;
var state_27399__$1 = (function (){var statearr_27413 = state_27399;
(statearr_27413[(8)] = inst_27352__$1);

(statearr_27413[(10)] = inst_27351__$1);

(statearr_27413[(11)] = inst_27353__$1);

(statearr_27413[(12)] = inst_27354__$1);

(statearr_27413[(14)] = inst_27361);

return statearr_27413;
})();
var statearr_27414_27446 = state_27399__$1;
(statearr_27414_27446[(2)] = null);

(statearr_27414_27446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (22))){
var state_27399__$1 = state_27399;
var statearr_27415_27447 = state_27399__$1;
(statearr_27415_27447[(2)] = null);

(statearr_27415_27447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (6))){
var inst_27340 = (state_27399[(13)]);
var inst_27349 = f.call(null,inst_27340);
var inst_27350 = cljs.core.seq.call(null,inst_27349);
var inst_27351 = inst_27350;
var inst_27352 = null;
var inst_27353 = (0);
var inst_27354 = (0);
var state_27399__$1 = (function (){var statearr_27416 = state_27399;
(statearr_27416[(8)] = inst_27352);

(statearr_27416[(10)] = inst_27351);

(statearr_27416[(11)] = inst_27353);

(statearr_27416[(12)] = inst_27354);

return statearr_27416;
})();
var statearr_27417_27448 = state_27399__$1;
(statearr_27417_27448[(2)] = null);

(statearr_27417_27448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (17))){
var inst_27365 = (state_27399[(7)]);
var inst_27369 = cljs.core.chunk_first.call(null,inst_27365);
var inst_27370 = cljs.core.chunk_rest.call(null,inst_27365);
var inst_27371 = cljs.core.count.call(null,inst_27369);
var inst_27351 = inst_27370;
var inst_27352 = inst_27369;
var inst_27353 = inst_27371;
var inst_27354 = (0);
var state_27399__$1 = (function (){var statearr_27418 = state_27399;
(statearr_27418[(8)] = inst_27352);

(statearr_27418[(10)] = inst_27351);

(statearr_27418[(11)] = inst_27353);

(statearr_27418[(12)] = inst_27354);

return statearr_27418;
})();
var statearr_27419_27449 = state_27399__$1;
(statearr_27419_27449[(2)] = null);

(statearr_27419_27449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (3))){
var inst_27397 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (12))){
var inst_27385 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27420_27450 = state_27399__$1;
(statearr_27420_27450[(2)] = inst_27385);

(statearr_27420_27450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (2))){
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(4),in$);
} else {
if((state_val_27400 === (23))){
var inst_27393 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27421_27451 = state_27399__$1;
(statearr_27421_27451[(2)] = inst_27393);

(statearr_27421_27451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (19))){
var inst_27380 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27422_27452 = state_27399__$1;
(statearr_27422_27452[(2)] = inst_27380);

(statearr_27422_27452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (11))){
var inst_27365 = (state_27399[(7)]);
var inst_27351 = (state_27399[(10)]);
var inst_27365__$1 = cljs.core.seq.call(null,inst_27351);
var state_27399__$1 = (function (){var statearr_27423 = state_27399;
(statearr_27423[(7)] = inst_27365__$1);

return statearr_27423;
})();
if(inst_27365__$1){
var statearr_27424_27453 = state_27399__$1;
(statearr_27424_27453[(1)] = (14));

} else {
var statearr_27425_27454 = state_27399__$1;
(statearr_27425_27454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (9))){
var inst_27387 = (state_27399[(2)]);
var inst_27388 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27399__$1 = (function (){var statearr_27426 = state_27399;
(statearr_27426[(15)] = inst_27387);

return statearr_27426;
})();
if(cljs.core.truth_(inst_27388)){
var statearr_27427_27455 = state_27399__$1;
(statearr_27427_27455[(1)] = (21));

} else {
var statearr_27428_27456 = state_27399__$1;
(statearr_27428_27456[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (5))){
var inst_27343 = cljs.core.async.close_BANG_.call(null,out);
var state_27399__$1 = state_27399;
var statearr_27429_27457 = state_27399__$1;
(statearr_27429_27457[(2)] = inst_27343);

(statearr_27429_27457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (14))){
var inst_27365 = (state_27399[(7)]);
var inst_27367 = cljs.core.chunked_seq_QMARK_.call(null,inst_27365);
var state_27399__$1 = state_27399;
if(inst_27367){
var statearr_27430_27458 = state_27399__$1;
(statearr_27430_27458[(1)] = (17));

} else {
var statearr_27431_27459 = state_27399__$1;
(statearr_27431_27459[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (16))){
var inst_27383 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27432_27460 = state_27399__$1;
(statearr_27432_27460[(2)] = inst_27383);

(statearr_27432_27460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (10))){
var inst_27352 = (state_27399[(8)]);
var inst_27354 = (state_27399[(12)]);
var inst_27359 = cljs.core._nth.call(null,inst_27352,inst_27354);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27399__$1,(13),out,inst_27359);
} else {
if((state_val_27400 === (18))){
var inst_27365 = (state_27399[(7)]);
var inst_27374 = cljs.core.first.call(null,inst_27365);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27399__$1,(20),out,inst_27374);
} else {
if((state_val_27400 === (8))){
var inst_27353 = (state_27399[(11)]);
var inst_27354 = (state_27399[(12)]);
var inst_27356 = (inst_27354 < inst_27353);
var inst_27357 = inst_27356;
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27357)){
var statearr_27433_27461 = state_27399__$1;
(statearr_27433_27461[(1)] = (10));

} else {
var statearr_27434_27462 = state_27399__$1;
(statearr_27434_27462[(1)] = (11));

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
});})(c__25784__auto__))
;
return ((function (switch__25689__auto__,c__25784__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____0 = (function (){
var statearr_27435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27435[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__);

(statearr_27435[(1)] = (1));

return statearr_27435;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____1 = (function (state_27399){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27436){if((e27436 instanceof Object)){
var ex__25693__auto__ = e27436;
var statearr_27437_27463 = state_27399;
(statearr_27437_27463[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27464 = state_27399;
state_27399 = G__27464;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25690__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto__))
})();
var state__25786__auto__ = (function (){var statearr_27438 = f__25785__auto__.call(null);
(statearr_27438[(6)] = c__25784__auto__);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto__))
);

return c__25784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27466 = arguments.length;
switch (G__27466) {
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
var G__27469 = arguments.length;
switch (G__27469) {
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
var G__27472 = arguments.length;
switch (G__27472) {
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
var c__25784__auto___27519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27519,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27519,out){
return (function (state_27496){
var state_val_27497 = (state_27496[(1)]);
if((state_val_27497 === (7))){
var inst_27491 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27498_27520 = state_27496__$1;
(statearr_27498_27520[(2)] = inst_27491);

(statearr_27498_27520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (1))){
var inst_27473 = null;
var state_27496__$1 = (function (){var statearr_27499 = state_27496;
(statearr_27499[(7)] = inst_27473);

return statearr_27499;
})();
var statearr_27500_27521 = state_27496__$1;
(statearr_27500_27521[(2)] = null);

(statearr_27500_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (4))){
var inst_27476 = (state_27496[(8)]);
var inst_27476__$1 = (state_27496[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var inst_27478 = cljs.core.not.call(null,inst_27477);
var state_27496__$1 = (function (){var statearr_27501 = state_27496;
(statearr_27501[(8)] = inst_27476__$1);

return statearr_27501;
})();
if(inst_27478){
var statearr_27502_27522 = state_27496__$1;
(statearr_27502_27522[(1)] = (5));

} else {
var statearr_27503_27523 = state_27496__$1;
(statearr_27503_27523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (6))){
var state_27496__$1 = state_27496;
var statearr_27504_27524 = state_27496__$1;
(statearr_27504_27524[(2)] = null);

(statearr_27504_27524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (3))){
var inst_27493 = (state_27496[(2)]);
var inst_27494 = cljs.core.async.close_BANG_.call(null,out);
var state_27496__$1 = (function (){var statearr_27505 = state_27496;
(statearr_27505[(9)] = inst_27493);

return statearr_27505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27496__$1,inst_27494);
} else {
if((state_val_27497 === (2))){
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27496__$1,(4),ch);
} else {
if((state_val_27497 === (11))){
var inst_27476 = (state_27496[(8)]);
var inst_27485 = (state_27496[(2)]);
var inst_27473 = inst_27476;
var state_27496__$1 = (function (){var statearr_27506 = state_27496;
(statearr_27506[(10)] = inst_27485);

(statearr_27506[(7)] = inst_27473);

return statearr_27506;
})();
var statearr_27507_27525 = state_27496__$1;
(statearr_27507_27525[(2)] = null);

(statearr_27507_27525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (9))){
var inst_27476 = (state_27496[(8)]);
var state_27496__$1 = state_27496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27496__$1,(11),out,inst_27476);
} else {
if((state_val_27497 === (5))){
var inst_27476 = (state_27496[(8)]);
var inst_27473 = (state_27496[(7)]);
var inst_27480 = cljs.core._EQ_.call(null,inst_27476,inst_27473);
var state_27496__$1 = state_27496;
if(inst_27480){
var statearr_27509_27526 = state_27496__$1;
(statearr_27509_27526[(1)] = (8));

} else {
var statearr_27510_27527 = state_27496__$1;
(statearr_27510_27527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (10))){
var inst_27488 = (state_27496[(2)]);
var state_27496__$1 = state_27496;
var statearr_27511_27528 = state_27496__$1;
(statearr_27511_27528[(2)] = inst_27488);

(statearr_27511_27528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27497 === (8))){
var inst_27473 = (state_27496[(7)]);
var tmp27508 = inst_27473;
var inst_27473__$1 = tmp27508;
var state_27496__$1 = (function (){var statearr_27512 = state_27496;
(statearr_27512[(7)] = inst_27473__$1);

return statearr_27512;
})();
var statearr_27513_27529 = state_27496__$1;
(statearr_27513_27529[(2)] = null);

(statearr_27513_27529[(1)] = (2));


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
});})(c__25784__auto___27519,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27519,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27514[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27514[(1)] = (1));

return statearr_27514;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27496){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27515){if((e27515 instanceof Object)){
var ex__25693__auto__ = e27515;
var statearr_27516_27530 = state_27496;
(statearr_27516_27530[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27531 = state_27496;
state_27496 = G__27531;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27519,out))
})();
var state__25786__auto__ = (function (){var statearr_27517 = f__25785__auto__.call(null);
(statearr_27517[(6)] = c__25784__auto___27519);

return statearr_27517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27519,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27533 = arguments.length;
switch (G__27533) {
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
var c__25784__auto___27599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27599,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27599,out){
return (function (state_27571){
var state_val_27572 = (state_27571[(1)]);
if((state_val_27572 === (7))){
var inst_27567 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27573_27600 = state_27571__$1;
(statearr_27573_27600[(2)] = inst_27567);

(statearr_27573_27600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (1))){
var inst_27534 = (new Array(n));
var inst_27535 = inst_27534;
var inst_27536 = (0);
var state_27571__$1 = (function (){var statearr_27574 = state_27571;
(statearr_27574[(7)] = inst_27535);

(statearr_27574[(8)] = inst_27536);

return statearr_27574;
})();
var statearr_27575_27601 = state_27571__$1;
(statearr_27575_27601[(2)] = null);

(statearr_27575_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (4))){
var inst_27539 = (state_27571[(9)]);
var inst_27539__$1 = (state_27571[(2)]);
var inst_27540 = (inst_27539__$1 == null);
var inst_27541 = cljs.core.not.call(null,inst_27540);
var state_27571__$1 = (function (){var statearr_27576 = state_27571;
(statearr_27576[(9)] = inst_27539__$1);

return statearr_27576;
})();
if(inst_27541){
var statearr_27577_27602 = state_27571__$1;
(statearr_27577_27602[(1)] = (5));

} else {
var statearr_27578_27603 = state_27571__$1;
(statearr_27578_27603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (15))){
var inst_27561 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27579_27604 = state_27571__$1;
(statearr_27579_27604[(2)] = inst_27561);

(statearr_27579_27604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (13))){
var state_27571__$1 = state_27571;
var statearr_27580_27605 = state_27571__$1;
(statearr_27580_27605[(2)] = null);

(statearr_27580_27605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (6))){
var inst_27536 = (state_27571[(8)]);
var inst_27557 = (inst_27536 > (0));
var state_27571__$1 = state_27571;
if(cljs.core.truth_(inst_27557)){
var statearr_27581_27606 = state_27571__$1;
(statearr_27581_27606[(1)] = (12));

} else {
var statearr_27582_27607 = state_27571__$1;
(statearr_27582_27607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (3))){
var inst_27569 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27571__$1,inst_27569);
} else {
if((state_val_27572 === (12))){
var inst_27535 = (state_27571[(7)]);
var inst_27559 = cljs.core.vec.call(null,inst_27535);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27571__$1,(15),out,inst_27559);
} else {
if((state_val_27572 === (2))){
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(4),ch);
} else {
if((state_val_27572 === (11))){
var inst_27551 = (state_27571[(2)]);
var inst_27552 = (new Array(n));
var inst_27535 = inst_27552;
var inst_27536 = (0);
var state_27571__$1 = (function (){var statearr_27583 = state_27571;
(statearr_27583[(10)] = inst_27551);

(statearr_27583[(7)] = inst_27535);

(statearr_27583[(8)] = inst_27536);

return statearr_27583;
})();
var statearr_27584_27608 = state_27571__$1;
(statearr_27584_27608[(2)] = null);

(statearr_27584_27608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (9))){
var inst_27535 = (state_27571[(7)]);
var inst_27549 = cljs.core.vec.call(null,inst_27535);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27571__$1,(11),out,inst_27549);
} else {
if((state_val_27572 === (5))){
var inst_27544 = (state_27571[(11)]);
var inst_27535 = (state_27571[(7)]);
var inst_27539 = (state_27571[(9)]);
var inst_27536 = (state_27571[(8)]);
var inst_27543 = (inst_27535[inst_27536] = inst_27539);
var inst_27544__$1 = (inst_27536 + (1));
var inst_27545 = (inst_27544__$1 < n);
var state_27571__$1 = (function (){var statearr_27585 = state_27571;
(statearr_27585[(11)] = inst_27544__$1);

(statearr_27585[(12)] = inst_27543);

return statearr_27585;
})();
if(cljs.core.truth_(inst_27545)){
var statearr_27586_27609 = state_27571__$1;
(statearr_27586_27609[(1)] = (8));

} else {
var statearr_27587_27610 = state_27571__$1;
(statearr_27587_27610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (14))){
var inst_27564 = (state_27571[(2)]);
var inst_27565 = cljs.core.async.close_BANG_.call(null,out);
var state_27571__$1 = (function (){var statearr_27589 = state_27571;
(statearr_27589[(13)] = inst_27564);

return statearr_27589;
})();
var statearr_27590_27611 = state_27571__$1;
(statearr_27590_27611[(2)] = inst_27565);

(statearr_27590_27611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (10))){
var inst_27555 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27591_27612 = state_27571__$1;
(statearr_27591_27612[(2)] = inst_27555);

(statearr_27591_27612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (8))){
var inst_27544 = (state_27571[(11)]);
var inst_27535 = (state_27571[(7)]);
var tmp27588 = inst_27535;
var inst_27535__$1 = tmp27588;
var inst_27536 = inst_27544;
var state_27571__$1 = (function (){var statearr_27592 = state_27571;
(statearr_27592[(7)] = inst_27535__$1);

(statearr_27592[(8)] = inst_27536);

return statearr_27592;
})();
var statearr_27593_27613 = state_27571__$1;
(statearr_27593_27613[(2)] = null);

(statearr_27593_27613[(1)] = (2));


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
});})(c__25784__auto___27599,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27599,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27594[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27594[(1)] = (1));

return statearr_27594;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27571){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27595){if((e27595 instanceof Object)){
var ex__25693__auto__ = e27595;
var statearr_27596_27614 = state_27571;
(statearr_27596_27614[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27615 = state_27571;
state_27571 = G__27615;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27599,out))
})();
var state__25786__auto__ = (function (){var statearr_27597 = f__25785__auto__.call(null);
(statearr_27597[(6)] = c__25784__auto___27599);

return statearr_27597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27599,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27617 = arguments.length;
switch (G__27617) {
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
var c__25784__auto___27687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25784__auto___27687,out){
return (function (){
var f__25785__auto__ = (function (){var switch__25689__auto__ = ((function (c__25784__auto___27687,out){
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (7))){
var inst_27655 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27661_27688 = state_27659__$1;
(statearr_27661_27688[(2)] = inst_27655);

(statearr_27661_27688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (1))){
var inst_27618 = [];
var inst_27619 = inst_27618;
var inst_27620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27659__$1 = (function (){var statearr_27662 = state_27659;
(statearr_27662[(7)] = inst_27619);

(statearr_27662[(8)] = inst_27620);

return statearr_27662;
})();
var statearr_27663_27689 = state_27659__$1;
(statearr_27663_27689[(2)] = null);

(statearr_27663_27689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (4))){
var inst_27623 = (state_27659[(9)]);
var inst_27623__$1 = (state_27659[(2)]);
var inst_27624 = (inst_27623__$1 == null);
var inst_27625 = cljs.core.not.call(null,inst_27624);
var state_27659__$1 = (function (){var statearr_27664 = state_27659;
(statearr_27664[(9)] = inst_27623__$1);

return statearr_27664;
})();
if(inst_27625){
var statearr_27665_27690 = state_27659__$1;
(statearr_27665_27690[(1)] = (5));

} else {
var statearr_27666_27691 = state_27659__$1;
(statearr_27666_27691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (15))){
var inst_27649 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27667_27692 = state_27659__$1;
(statearr_27667_27692[(2)] = inst_27649);

(statearr_27667_27692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (13))){
var state_27659__$1 = state_27659;
var statearr_27668_27693 = state_27659__$1;
(statearr_27668_27693[(2)] = null);

(statearr_27668_27693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (6))){
var inst_27619 = (state_27659[(7)]);
var inst_27644 = inst_27619.length;
var inst_27645 = (inst_27644 > (0));
var state_27659__$1 = state_27659;
if(cljs.core.truth_(inst_27645)){
var statearr_27669_27694 = state_27659__$1;
(statearr_27669_27694[(1)] = (12));

} else {
var statearr_27670_27695 = state_27659__$1;
(statearr_27670_27695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (3))){
var inst_27657 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (12))){
var inst_27619 = (state_27659[(7)]);
var inst_27647 = cljs.core.vec.call(null,inst_27619);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27659__$1,(15),out,inst_27647);
} else {
if((state_val_27660 === (2))){
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27659__$1,(4),ch);
} else {
if((state_val_27660 === (11))){
var inst_27623 = (state_27659[(9)]);
var inst_27627 = (state_27659[(10)]);
var inst_27637 = (state_27659[(2)]);
var inst_27638 = [];
var inst_27639 = inst_27638.push(inst_27623);
var inst_27619 = inst_27638;
var inst_27620 = inst_27627;
var state_27659__$1 = (function (){var statearr_27671 = state_27659;
(statearr_27671[(11)] = inst_27639);

(statearr_27671[(7)] = inst_27619);

(statearr_27671[(8)] = inst_27620);

(statearr_27671[(12)] = inst_27637);

return statearr_27671;
})();
var statearr_27672_27696 = state_27659__$1;
(statearr_27672_27696[(2)] = null);

(statearr_27672_27696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (9))){
var inst_27619 = (state_27659[(7)]);
var inst_27635 = cljs.core.vec.call(null,inst_27619);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27659__$1,(11),out,inst_27635);
} else {
if((state_val_27660 === (5))){
var inst_27623 = (state_27659[(9)]);
var inst_27620 = (state_27659[(8)]);
var inst_27627 = (state_27659[(10)]);
var inst_27627__$1 = f.call(null,inst_27623);
var inst_27628 = cljs.core._EQ_.call(null,inst_27627__$1,inst_27620);
var inst_27629 = cljs.core.keyword_identical_QMARK_.call(null,inst_27620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27630 = ((inst_27628) || (inst_27629));
var state_27659__$1 = (function (){var statearr_27673 = state_27659;
(statearr_27673[(10)] = inst_27627__$1);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27630)){
var statearr_27674_27697 = state_27659__$1;
(statearr_27674_27697[(1)] = (8));

} else {
var statearr_27675_27698 = state_27659__$1;
(statearr_27675_27698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (14))){
var inst_27652 = (state_27659[(2)]);
var inst_27653 = cljs.core.async.close_BANG_.call(null,out);
var state_27659__$1 = (function (){var statearr_27677 = state_27659;
(statearr_27677[(13)] = inst_27652);

return statearr_27677;
})();
var statearr_27678_27699 = state_27659__$1;
(statearr_27678_27699[(2)] = inst_27653);

(statearr_27678_27699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (10))){
var inst_27642 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27679_27700 = state_27659__$1;
(statearr_27679_27700[(2)] = inst_27642);

(statearr_27679_27700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (8))){
var inst_27623 = (state_27659[(9)]);
var inst_27619 = (state_27659[(7)]);
var inst_27627 = (state_27659[(10)]);
var inst_27632 = inst_27619.push(inst_27623);
var tmp27676 = inst_27619;
var inst_27619__$1 = tmp27676;
var inst_27620 = inst_27627;
var state_27659__$1 = (function (){var statearr_27680 = state_27659;
(statearr_27680[(14)] = inst_27632);

(statearr_27680[(7)] = inst_27619__$1);

(statearr_27680[(8)] = inst_27620);

return statearr_27680;
})();
var statearr_27681_27701 = state_27659__$1;
(statearr_27681_27701[(2)] = null);

(statearr_27681_27701[(1)] = (2));


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
});})(c__25784__auto___27687,out))
;
return ((function (switch__25689__auto__,c__25784__auto___27687,out){
return (function() {
var cljs$core$async$state_machine__25690__auto__ = null;
var cljs$core$async$state_machine__25690__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27682[(0)] = cljs$core$async$state_machine__25690__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var cljs$core$async$state_machine__25690__auto____1 = (function (state_27659){
while(true){
var ret_value__25691__auto__ = (function (){try{while(true){
var result__25692__auto__ = switch__25689__auto__.call(null,state_27659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25692__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__25693__auto__ = e27683;
var statearr_27684_27702 = state_27659;
(statearr_27684_27702[(5)] = ex__25693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27703 = state_27659;
state_27659 = G__27703;
continue;
} else {
return ret_value__25691__auto__;
}
break;
}
});
cljs$core$async$state_machine__25690__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25690__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25690__auto____0;
cljs$core$async$state_machine__25690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25690__auto____1;
return cljs$core$async$state_machine__25690__auto__;
})()
;})(switch__25689__auto__,c__25784__auto___27687,out))
})();
var state__25786__auto__ = (function (){var statearr_27685 = f__25785__auto__.call(null);
(statearr_27685[(6)] = c__25784__auto___27687);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25786__auto__);
});})(c__25784__auto___27687,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1570822064128
