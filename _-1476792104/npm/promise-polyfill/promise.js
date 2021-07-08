!function() {
    !function(e) {
        var n = setTimeout;
        function t() {}
        function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], 
            a(e, this);
        }
        function i(e, n) {
            for (;3 === e._state; ) e = e._value;
            0 !== e._state ? (e._handled = !0, o._immediateFn(function() {
                var t = 1 === e._state ? n.onFulfilled : n.onRejected;
                if (null !== t) {
                    var o;
                    try {
                        o = t(e._value);
                    } catch (e) {
                        return void f(n.promise, e);
                    }
                    r(n.promise, o);
                } else (1 === e._state ? r : f)(n.promise, e._value);
            })) : e._deferreds.push(n);
        }
        function r(e, n) {
            try {
                if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var t = n.then;
                    if (n instanceof o) return e._state = 3, e._value = n, void u(e);
                    if ("function" == typeof t) return void a((i = t, r = n, function() {
                        i.apply(r, arguments);
                    }), e);
                }
                e._state = 1, e._value = n, u(e);
            } catch (n) {
                f(e, n);
            }
            var i, r;
        }
        function f(e, n) {
            e._state = 2, e._value = n, u(e);
        }
        function u(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                e._handled || o._unhandledRejectionFn(e._value);
            });
            for (var n = 0, t = e._deferreds.length; n < t; n++) i(e, e._deferreds[n]);
            e._deferreds = null;
        }
        function c(e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, 
            this.promise = t;
        }
        function a(e, n) {
            var t = !1;
            try {
                e(function(e) {
                    t || (t = !0, r(n, e));
                }, function(e) {
                    t || (t = !0, f(n, e));
                });
            } catch (e) {
                if (t) return;
                t = !0, f(n, e);
            }
        }
        o.prototype.catch = function(e) {
            return this.then(null, e);
        }, o.prototype.then = function(e, n) {
            var o = new this.constructor(t);
            return i(this, new c(e, n, o)), o;
        }, o.all = function(e) {
            return new o(function(n, t) {
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(e);
                if (0 === o.length) return n([]);
                var i = o.length;
                function r(e, f) {
                    try {
                        if (f && ("object" == typeof f || "function" == typeof f)) {
                            var u = f.then;
                            if ("function" == typeof u) return void u.call(f, function(n) {
                                r(e, n);
                            }, t);
                        }
                        o[e] = f, 0 == --i && n(o);
                    } catch (e) {
                        t(e);
                    }
                }
                for (var f = 0; f < o.length; f++) r(f, o[f]);
            });
        }, o.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === o ? e : new o(function(n) {
                n(e);
            });
        }, o.reject = function(e) {
            return new o(function(n, t) {
                t(e);
            });
        }, o.race = function(e) {
            return new o(function(n, t) {
                for (var o = 0, i = e.length; o < i; o++) e[o].then(n, t);
            });
        }, o._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e);
        } || function(e) {
            n(e, 0);
        }, o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, o._setImmediateFn = function(e) {
            o._immediateFn = e;
        }, o._setUnhandledRejectionFn = function(e) {
            o._unhandledRejectionFn = e;
        }, "undefined" != typeof module && module.exports ? module.exports = o : e.Promise || (e.Promise = o);
    }(this);
}();