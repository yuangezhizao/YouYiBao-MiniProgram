!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, i) {
            for (var e = 0; e < i.length; e++) {
                var n = i[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(i, e, n) {
            return e && t(i.prototype, e), n && t(i, n), i;
        };
    }(), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, e = o(require("./event.js")), n = o(require("./util.js"));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var a = {
        check: function(t, e) {
            switch (t) {
              case String:
                return "string" == typeof e;

              case Number:
                return "number" == typeof e;

              case Boolean:
                return "boolean" == typeof e;

              case Function:
                return "function" == typeof e;

              case Object:
                return "object" === (void 0 === e ? "undefined" : i(e));

              case Array:
                return "[object Array]" === toString.call(e);

              default:
                return e instanceof t;
            }
        },
        build: function(t) {
            var i = {};
            return "string" == typeof t ? i[t] = {} : "[object Array]" === toString.call(t) ? t.forEach(function(t) {
                i[t] = {};
            }) : Object.keys(t).forEach(function(e) {
                "function" == typeof t[e] ? i[e] = {
                    type: [ t[e] ]
                } : "[object Array]" === toString.call(t[e]) ? i[e] = {
                    type: t[e]
                } : i[e] = t[e], i[e].type && "[object Array]" !== toString.call(i[e].type) && (i[e].type = [ i[e].type ]);
            }), i;
        },
        valid: function(t, i, e) {
            var n = this, o = !1;
            if (t[i]) {
                if (t[i].type) return t[i].type.some(function(t) {
                    return n.check(t, e);
                });
                o = !0;
            }
            return o;
        },
        getValue: function(t, i, e, n) {
            var o;
            return o = void 0 !== e && this.valid(t, i, e) ? e : "function" == typeof t[i].default ? t[i].default() : t[i].default, 
            t[i].coerce ? t[i].coerce.call(n, o) : o;
        }
    }, r = function() {
        function o() {
            !function(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
            }(this, o), this.$com = {}, this.$events = {}, this.$mixins = [], this.$isComponent = !0, 
            this.$prefix = "", this.$mappingProps = {}, this.data = {}, this.methods = {};
        }
        return t(o, [ {
            key: "$init",
            value: function(t, e, o) {
                var r = this;
                this.$wxpage = t, this.$isComponent && (this.$root = e || this.$root, this.$parent = o || this.$parent, 
                this.$wxapp = this.$root.$parent.$wxapp), this.props && (this.props = a.build(this.props));
                var p = void 0, h = {}, f = this.props, c = void 0, $ = void 0, u = void 0, l = !1, d = void 0;
                if (void 0 === this.$initData ? this.$initData = n.default.$copy(this.data, !0) : this.data = n.default.$copy(this.$initData, !0), 
                this.$props) for (c in this.$props) for (u in this.$props[c]) /\.sync$/.test(u) && (this.$mappingProps[this.$props[c][u]] || (this.$mappingProps[this.$props[c][u]] = {}), 
                this.$mappingProps[this.$props[c][u]][c] = u.substring(7, u.length - 5));
                if (f) for (c in f) s(this, c) && ($ = void 0, o && o.$props && o.$props[this.$name] && ($ = o.$props[this.$name][c], 
                (u = o.$props[this.$name]["v-bind:" + c + ".once"] || o.$props[this.$name]["v-bind:" + c + ".sync"]) ? "object" === (void 0 === u ? "undefined" : i(u)) ? function() {
                    f[c].repeat = u.for, f[c].item = u.item, f[c].index = u.index, f[c].key = u.key, 
                    f[c].value = u.value, l = !0;
                    var t = u.for, e = o;
                    t.split(".").forEach(function(t) {
                        e = e ? e[t] : {};
                    }), !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "string" != typeof e || (d = Object.keys(e)[0]), 
                    r.$mappingProps[c] || (r.$mappingProps[c] = {}), r.$mappingProps[c].parent = {
                        mapping: u.for,
                        from: c
                    };
                }() : ($ = o[u], f[c].twoWay && (this.$mappingProps[c] || (this.$mappingProps[c] = {}), 
                this.$mappingProps[c].parent = u)) : "object" === (void 0 === $ ? "undefined" : i($)) && void 0 !== $.value && (this.data[c] = $.value)), 
                this.data[c] || f[c].repeat || ($ = a.getValue(f, c, $, this), this.data[c] = $));
                for (p in "function" == typeof this.data && (this.data = this.data.apply(this.data)), 
                this.data) s(this, p) && (h["" + this.$prefix + p] = this.data[p], this[p] = this.data[p]);
                if (this.$data = n.default.$copy(this.data, !0), l && void 0 !== d && this.$setIndex(d), 
                this.computed) for (p in this.computed) if (s(this, p)) {
                    var v = this.computed[p];
                    h["" + this.$prefix + p] = v.call(this), this[p] = n.default.$copy(h["" + this.$prefix + p], !0);
                }
                this.setData(h);
                var y = Object.getOwnPropertyNames(this.$com);
                y.length && y.forEach(function(t) {
                    r.$com[t].$init(r.getWxPage(), e, r);
                });
            }
        }, {
            key: "$initMixins",
            value: function() {
                var t = this;
                this.mixins ? "function" == typeof this.mixins && (this.mixins = [ this.mixins ]) : this.mixins = [], 
                this.mixins.forEach(function(i) {
                    var e = new i();
                    e.$init(t), t.$mixins.push(e);
                });
            }
        }, {
            key: "$onLoad",
            value: function() {
                for (var t = this, i = arguments.length, e = Array(i), n = 0; n < i; n++) e[n] = arguments[n];
                [].concat(this.$mixins, this).forEach(function(i) {
                    i.onLoad && i.onLoad.apply(t, e);
                });
                var o = Object.getOwnPropertyNames(this.$com);
                o.length && o.forEach(function(i) {
                    var e = t.$com[i];
                    e.$onLoad.call(e);
                });
            }
        }, {
            key: "$onUnload",
            value: function() {
                for (var t = this, i = arguments.length, e = Array(i), n = 0; n < i; n++) e[n] = arguments[n];
                var o = Object.getOwnPropertyNames(this.$com);
                o.length && o.forEach(function(i) {
                    var e = t.$com[i];
                    e.$onUnload.call(e);
                }), [].concat(this.$mixins, this).forEach(function(i) {
                    i.onUnload && i.onUnload.apply(t, e);
                });
            }
        }, {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onUnload",
            value: function() {}
        }, {
            key: "setData",
            value: function(t, i) {
                if ("string" == typeof t) {
                    if (i) {
                        var e = {};
                        e[t] = i, t = e;
                    } else {
                        var o = {};
                        o[t] = this.data["" + t], t = o;
                    }
                    return this.$wxpage.setData(t);
                }
                var a = null, r = new RegExp("^" + this.$prefix.replace(/\$/g, "\\$"), "ig");
                for (a in t) {
                    var s = a.replace(r, "");
                    this.$data[s] = n.default.$copy(t[a], !0), n.default.isImmutable(t[a]) && (t[a] = t[a].toJS()), 
                    void 0 === t[a] && delete t[a];
                }
                return "function" == typeof i ? this.$root.$wxpage.setData(t, i) : this.$root.$wxpage.setData(t);
            }
        }, {
            key: "getWxPage",
            value: function() {
                return this.$wxpage;
            }
        }, {
            key: "getCurrentPages",
            value: function(t) {
                function i() {
                    return t.apply(this, arguments);
                }
                return i.toString = function() {
                    return t.toString();
                }, i;
            }(function() {
                return getCurrentPages();
            })
        }, {
            key: "$setIndex",
            value: function(t) {
                var e = this;
                this.$index = t;
                var o = this.props, a = this.$parent, r = void 0, s = void 0, p = void 0;
                if (o) {
                    for (r in o) s = void 0, a && a.$props && a.$props[this.$name] && (s = a.$props[this.$name][r], 
                    (p = a.$props[this.$name]["v-bind:" + r + ".once"] || a.$props[this.$name]["v-bind:" + r + ".sync"]) && "object" === (void 0 === p ? "undefined" : i(p)) && function() {
                        var i = p.for, h = a;
                        if (0 === i.indexOf("[")) {
                            var f = [];
                            (i = i.substr(1, i.length - 2).trim()).split(",").forEach(function(t) {
                                var i = a;
                                t.trim().split(".").forEach(function(t) {
                                    i = i ? i[t] : {};
                                }), f.push(i);
                            }), h = f;
                        } else i.split(".").forEach(function(t) {
                            h = h ? h[t] : {};
                        });
                        t = Array.isArray(h) ? +t : t, s = o[r].value === o[r].item ? h[t] : o[r].value === o[r].index || o[r].value === o[r].key ? t : a[o[r].value], 
                        e.$index = t, e.data[r] = s, e[r] = s, e.$data[r] = n.default.$copy(e[r], !0);
                    }());
                    for (r in this.$com) this.$com[r].$index = void 0;
                }
            }
        }, {
            key: "$getComponent",
            value: function(t) {
                var e = this;
                if ("string" == typeof t) {
                    if (-1 === t.indexOf("/")) return this.$com[t];
                    if ("/" === t) return this.$parent;
                    t.split("/").forEach(function(i, n) {
                        0 === n ? t = "" === i ? e.$root : "." === i ? e : ".." === i ? e.$parent : e.$getComponent(i) : i && (t = t.$com[i]);
                    });
                }
                return "object" !== (void 0 === t ? "undefined" : i(t)) ? null : t;
            }
        }, {
            key: "$invoke",
            value: function(t, i) {
                if (!(t = this.$getComponent(t))) throw new Error("Invalid path: " + t);
                for (var n = t.methods ? t.methods[i] : "", o = arguments.length, a = Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++) a[r - 2] = arguments[r];
                if ("function" == typeof n) {
                    var s = new e.default("", this, "invoke"), p = n.apply(t, a.concat(s));
                    return t.$apply(), p;
                }
                if ("function" == typeof (n = t[i])) return n.apply(t, a);
                throw new Error("Invalid method: " + i);
            }
        }, {
            key: "$broadcast",
            value: function(t) {
                for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                for (var a = this, r = "string" == typeof t ? new e.default(t, this, "broadcast") : r, s = [ a ]; s.length && r.active; ) {
                    var h = s.shift(), f = function(i) {
                        i = h.$com[i], s.push(i);
                        var e = p(i, t);
                        if (e && i.$apply(function() {
                            e.apply(i, n.concat(r));
                        }), !r.active) return "break";
                        c = i;
                    };
                    for (var c in h.$com) {
                        var $ = f(c);
                        if ("break" === $) break;
                    }
                }
            }
        }, {
            key: "$emit",
            value: function(t) {
                for (var i = this, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                var r = this, s = this, h = new e.default(t, s, "emit");
                if (o = o.concat(h), this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                    var f = this.$parent.$events[this.$name]["v-on:" + t];
                    if (f && this.$parent.methods) {
                        var c = this.$parent.methods[f];
                        if ("function" == typeof c) return void this.$parent.$apply(function() {
                            c.apply(i.$parent, o);
                        });
                        throw new Error("Invalid method from emit, component is " + this.$parent.$name + ", method is " + f + ". Make sure you defined it already.\n");
                    }
                }
                for (var $ = function() {
                    var i = r, e = p(i, t);
                    e && ("function" == typeof e ? i.$apply(function() {
                        e.apply(i, o);
                    }) : Array.isArray(e) && (e.forEach(function(t) {
                        t.apply(i, o);
                    }), i.$apply())), r = i.$parent;
                }; r && void 0 !== r.$isComponent && h.active; ) $();
            }
        }, {
            key: "$on",
            value: function(t, e) {
                var n = this;
                if ("string" == typeof t) (this.$events[t] || (this.$events[t] = [])).push(e); else if (Array.isArray(t)) t.forEach(function(t) {
                    n.$on(t, e);
                }); else if ("object" === (void 0 === t ? "undefined" : i(t))) for (var o in t) this.$on(o, t[o]);
                return this;
            }
        }, {
            key: "$once",
            value: function(t, i) {
                var e = this, n = function n() {
                    e.$off(t, n), i.apply(e, arguments);
                };
                n.fn = i, this.$on(t, n);
            }
        }, {
            key: "$off",
            value: function(t, i) {
                var e = this;
                if (void 0 === t) this.$events = {}; else if ("string" == typeof t) if (i) {
                    for (var n = this.$events[t], o = n.length; o--; ) if (i === n[o] || i === n[o].fn) {
                        n.splice(o, 1);
                        break;
                    }
                } else this.$events[t] = []; else Array.isArray(t) && t.forEach(function(t) {
                    e.$off(t, i);
                });
                return this;
            }
        }, {
            key: "$apply",
            value: function(t) {
                "function" == typeof t ? (t.call(this), this.$apply()) : this.$$phase ? this.$$phase = "$apply" : this.$digest();
            }
        }, {
            key: "$digest",
            value: function() {
                var t = this, e = void 0, o = this.$data;
                for (this.$$phase = "$digest", this.$$dc = 0; this.$$phase; ) {
                    if (this.$$dc++, this.$$dc >= 3) throw new Error("Can not call $apply in $apply process");
                    var a = {};
                    if (this.computed) for (e in this.computed) {
                        var r = this.computed[e].call(this);
                        n.default.$isEqual(this[e], r) || (a[this.$prefix + e] = r, this[e] = n.default.$copy(r, !0));
                    }
                    for (e in o) if (!n.default.$isEqual(this[e], o[e])) {
                        if (this.watch && this.watch[e] && ("function" == typeof this.watch[e] ? this.watch[e].call(this, this[e], o[e]) : "string" == typeof this.watch[e] && "function" == typeof this.methods[e] && this.methods[e].call(this, this[e], o[e])), 
                        a[this.$prefix + e] = this[e], this.data[e] = this[e], o[e] = n.default.$copy(this[e], !0), 
                        this.$repeat && this.$repeat[e]) {
                            var s = this.$repeat[e];
                            this.$com[s.com].data[s.props] = this[e], this.$com[s.com].$setIndex(0), this.$com[s.com].$apply();
                        }
                        this.$mappingProps[e] && Object.keys(this.$mappingProps[e]).forEach(function(o) {
                            var a = t.$mappingProps[e][o];
                            "object" === (void 0 === a ? "undefined" : i(a)) ? t.$parent.$apply() : "parent" !== o || n.default.$isEqual(t.$parent.$data[a], t[e]) ? "parent" === o || n.default.$isEqual(t.$com[o].$data[a], t[e]) || (t.$com[o][a] = t[e], 
                            t.$com[o].data[a] = t[e], t.$com[o].$apply()) : (t.$parent[a] = t[e], t.$parent.data[a] = t[e], 
                            t.$parent.$apply());
                        });
                    }
                    if (Object.keys(a).length) this.setData(a, function() {
                        if (t.$$nextTick) {
                            var i = t.$$nextTick;
                            t.$$nextTick = null, i.promise ? i() : i.call(t);
                        }
                    }); else if (this.$$nextTick) {
                        var p = this.$$nextTick;
                        this.$$nextTick = null, p.promise ? p() : p.call(this);
                    }
                    this.$$phase = "$apply" === this.$$phase && "$digest";
                }
            }
        }, {
            key: "$nextTick",
            value: function(t) {
                var i = this;
                if (void 0 === t) return new Promise(function(t, e) {
                    i.$$nextTick = function() {
                        t();
                    }, i.$$nextTick.promise = !0;
                });
                this.$$nextTick = t;
            }
        } ]), o;
    }();
    function s(t, i) {
        return "function" == typeof t[i] ? (console.warn('You are not allowed to define a function "' + i + '" in data.'), 
        0) : -1 !== [ "data", "props", "methods", "events", "mixins" ].indexOf(i) ? (console.warn('"' + i + '" is reserved word, please fix it.'), 
        0) : "$" === i[0] ? (console.warn('"' + i + ': You can not define a property started with "$"'), 
        0) : 1;
    }
    function p(t, e) {
        var n = t.events ? t.events[e] : t.$events[e] ? t.$events[e] : void 0, o = void 0 === n ? "undefined" : i(n), a = void 0;
        if ("string" === o) {
            var r = t.methods && t.methods[n];
            "function" == typeof r && (a = r);
        } else ("function" === o || Array.isArray(n)) && (a = n);
        return a;
    }
    exports.default = r;
}();