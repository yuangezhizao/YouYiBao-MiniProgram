!function() {
    !function(t) {
        "use strict";
        var r = Object.prototype, e = r.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, o = n.iterator || "@@iterator", i = n.asyncIterator || "@@asyncIterator", a = n.toStringTag || "@@toStringTag", c = "object" == typeof module, u = t.regeneratorRuntime;
        if (u) c && (module.exports = u); else {
            (u = t.regeneratorRuntime = c ? module.exports : {}).wrap = y;
            var s = {}, h = {};
            h[o] = function() {
                return this;
            };
            var f = Object.getPrototypeOf, l = f && f(f(_([])));
            l && l !== r && e.call(l, o) && (h = l);
            var p = m.prototype = v.prototype = Object.create(h);
            g.prototype = p.constructor = m, m.constructor = g, m[a] = g.displayName = "GeneratorFunction", 
            u.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name));
            }, u.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, a in t || (t[a] = "GeneratorFunction")), 
                t.prototype = Object.create(p), t;
            }, u.awrap = function(t) {
                return {
                    __await: t
                };
            }, w(x.prototype), x.prototype[i] = function() {
                return this;
            }, u.AsyncIterator = x, u.async = function(t, r, e, n) {
                var o = new x(y(t, r, e, n));
                return u.isGeneratorFunction(r) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next();
                });
            }, w(p), p[a] = "Generator", p[o] = function() {
                return this;
            }, p.toString = function() {
                return "[object Generator]";
            }, u.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return r.reverse(), function e() {
                    for (;r.length; ) {
                        var n = r.pop();
                        if (n in t) return e.value = n, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, u.values = _, j.prototype = {
                constructor: j,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), 
                    !t) for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var r = this;
                    function n(e, n) {
                        return a.type = "throw", a.arg = t, r.next = e, n && (r.method = "next", r.arg = void 0), 
                        !!n;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], a = i.completion;
                        if ("root" === i.tryLoc) return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = e.call(i, "catchLoc"), u = e.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                            } else if (c) {
                                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, r) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, 
                    s) : this.complete(a);
                },
                complete: function(t, r) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), 
                    s;
                },
                finish: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), s;
                    }
                },
                catch: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var e = this.tryEntries[r];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                E(e);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, r, e) {
                    return this.delegate = {
                        iterator: _(t),
                        resultName: r,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), s;
                }
            };
        }
        function y(t, r, e, n) {
            var o = r && r.prototype instanceof v ? r : v, i = Object.create(o.prototype), a = new j(n || []);
            return i._invoke = function(t, r, e) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return O();
                    }
                    for (e.method = o, e.arg = i; ;) {
                        var a = e.delegate;
                        if (a) {
                            var c = L(a, e);
                            if (c) {
                                if (c === s) continue;
                                return c;
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                            if ("suspendedStart" === n) throw n = "completed", e.arg;
                            e.dispatchException(e.arg);
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = "executing";
                        var u = d(t, r, e);
                        if ("normal" === u.type) {
                            if (n = e.done ? "completed" : "suspendedYield", u.arg === s) continue;
                            return {
                                value: u.arg,
                                done: e.done
                            };
                        }
                        "throw" === u.type && (n = "completed", e.method = "throw", e.arg = u.arg);
                    }
                };
            }(t, e, a), i;
        }
        function d(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                };
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                };
            }
        }
        function v() {}
        function g() {}
        function m() {}
        function w(t) {
            [ "next", "throw", "return" ].forEach(function(r) {
                t[r] = function(t) {
                    return this._invoke(r, t);
                };
            });
        }
        function x(r) {
            function n(t, o, i, a) {
                var c = d(r[t], r, o);
                if ("throw" !== c.type) {
                    var u = c.arg, s = u.value;
                    return s && "object" == typeof s && e.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                        n("next", t, i, a);
                    }, function(t) {
                        n("throw", t, i, a);
                    }) : Promise.resolve(s).then(function(t) {
                        u.value = t, i(u);
                    }, a);
                }
                a(c.arg);
            }
            var o;
            "object" == typeof t.process && t.process.domain && (n = t.process.domain.bind(n)), 
            this._invoke = function(t, r) {
                function e() {
                    return new Promise(function(e, o) {
                        n(t, r, e, o);
                    });
                }
                return o = o ? o.then(e, e) : e();
            };
        }
        function L(t, r) {
            var e = t.iterator[r.method];
            if (void 0 === e) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = void 0, L(t, r), "throw" === r.method)) return s;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return s;
            }
            var n = d(e, t.iterator, r.arg);
            if ("throw" === n.type) return r.method = "throw", r.arg = n.arg, r.delegate = null, 
            s;
            var o = n.arg;
            return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", 
            r.arg = void 0), r.delegate = null, s) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), 
            r.delegate = null, s);
        }
        function b(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), 
            this.tryEntries.push(r);
        }
        function E(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r;
        }
        function j(t) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], t.forEach(b, this), this.reset(!0);
        }
        function _(t) {
            if (t) {
                var r = t[o];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1, i = function r() {
                        for (;++n < t.length; ) if (e.call(t, n)) return r.value = t[n], r.done = !1, r;
                        return r.value = void 0, r.done = !0, r;
                    };
                    return i.next = i;
                }
            }
            return {
                next: O
            };
        }
        function O() {
            return {
                value: void 0,
                done: !0
            };
        }
    }("object" == typeof global ? global : "object" == typeof window ? window : "object" == typeof self ? self : this);
}();