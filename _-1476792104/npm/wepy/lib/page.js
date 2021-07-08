!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, e = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        return function(e, r, o) {
            return r && t(e.prototype, r), o && t(e, o), e;
        };
    }(), r = function t(e, r, o) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, r);
        if (void 0 === n) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : t(a, r, o);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(o) : void 0;
    }, o = i(require("./native.js")), n = i(require("./component.js")), a = i(require("./util.js"));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function u(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function p(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var l = function(n) {
        function i() {
            var t, e, r;
            u(this, i);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return e = r = p(this, (t = i.__proto__ || Object.getPrototypeOf(i)).call.apply(t, [ this ].concat(n))), 
            r.$isComponent = !1, r.$preloadData = void 0, r.$prefetchData = void 0, p(r, e);
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(i, n), e(i, [ {
            key: "$init",
            value: function(t, e) {
                this.$parent = e, this.$root = this, e.$wxapp || (e.$wxapp = getApp()), this.$wxapp = e.$wxapp, 
                r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "$init", this).call(this, t, this);
            }
        }, {
            key: "onLoad",
            value: function() {
                r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "onLoad", this).call(this);
            }
        }, {
            key: "onUnload",
            value: function() {
                r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "onUnload", this).call(this);
            }
        }, {
            key: "$preload",
            value: function(e, r) {
                if ("object" === (void 0 === e ? "undefined" : t(e))) {
                    var o = void 0;
                    for (o in e) this.$preload(o, e[o]);
                } else (this.$preloadData ? this.$preloadData : this.$preloadData = {})[e] = r;
            }
        }, {
            key: "$route",
            value: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof e) {
                    var n = e + "?";
                    if (r) {
                        var i = void 0;
                        for (i in r) n += i + "=" + r[i] + "&";
                    }
                    e = {
                        url: n = n.substring(0, n.length - 1)
                    };
                } else r = a.default.$getParams(e.url);
                this.$parent.__route__ || (this.$parent.__route__ = getCurrentPages()[0].__route__, 
                this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__);
                var u = "/" !== this.$parent.__route__[0] ? "/" + this.$parent.__route__ : this.$parent.__route__, p = a.default.$resolvePath(u, e.url.split("?")[0]), l = this.$parent.$pages[p];
                if (l && l.onPrefetch) {
                    var f = this.$parent.__prevPage__, c = void 0;
                    f && f.$preloadData && (c = f.$preloadData), l.$prefetchData = l.onPrefetch(r, {
                        from: this,
                        preload: c
                    });
                }
                return o.default[t](e);
            }
        }, {
            key: "$redirect",
            value: function(t, e) {
                return this.$route("redirectTo", t, e);
            }
        }, {
            key: "$navigate",
            value: function(t, e) {
                return this.$route("navigateTo", t, e);
            }
        }, {
            key: "$switch",
            value: function(t) {
                return "string" == typeof t && (t = {
                    url: t
                }), o.default.switchTab(t);
            }
        }, {
            key: "$back",
            value: function(t) {
                var e = t || {};
                return "number" == typeof e && (e = {
                    delta: e
                }), e.delta || (e.delta = 1), o.default.navigateBack(e);
            }
        } ]), i;
    }(n.default);
    exports.default = l;
}();