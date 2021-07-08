!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n = o(require("./event.js")), e = o(require("./util.js"));
    function o(n) {
        return n && n.__esModule ? n : {
            default: n
        };
    }
    var t = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap" ], a = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ], r = function o(a, r, i) {
        r.$prefix = e.default.camelize(i || ""), Object.getOwnPropertyNames(r.components || {}).forEach(function(n) {
            var e = new (0, r.components[n])();
            e.$initMixins(), e.$name = n;
            var t = i ? i + e.$name + "$" : "$" + e.$name + "$";
            r.$com[n] = e, o(a, e, t);
        }), Object.getOwnPropertyNames(r.constructor.prototype || []).forEach(function(n) {
            "constructor" !== n && -1 === t.indexOf(n) && (a[n] = function() {
                r.constructor.prototype[n].apply(r, arguments), r.$apply();
            });
        });
        var p = Object.getOwnPropertyNames(r.methods || []);
        return r.$mixins.forEach(function(n) {
            p = p.concat(Object.getOwnPropertyNames(n.methods || []));
        }), p.forEach(function(e, o) {
            a[r.$prefix + e] = function(o) {
                for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) a[i - 1] = arguments[i];
                var p = new n.default("system", this, o.type);
                p.$transfor(o);
                var c = [], s = 0, f = void 0, h = void 0, u = void 0;
                if (o.currentTarget && o.currentTarget.dataset) {
                    for (f = o.currentTarget.dataset; void 0 !== f["wpy" + e.toLowerCase() + (h = String.fromCharCode(65 + s++))]; ) c.push(f["wpy" + e.toLowerCase() + h]);
                    void 0 !== f.comIndex && (u = f.comIndex);
                }
                if (void 0 !== u) for (var l = (u = ("" + u).split("-")).length, d = l; l-- > 0; ) {
                    d = l;
                    for (var $ = r; d-- > 0; ) $ = $.$parent;
                    $.$setIndex(u.shift());
                }
                a = a.concat(c);
                var v = void 0, g = void 0, y = r.methods[e];
                return y && (v = y.apply(r, a.concat(p))), r.$mixins.forEach(function(n) {
                    n.methods[e] && (g = n.methods[e].apply(r, a.concat(p)));
                }), r.$apply(), y ? v : g;
            };
        }), a;
    };
    exports.default = {
        $createApp: function(n, e) {
            var o = {}, r = new n();
            return this.$instance || (r.$init(this, e), this.$instance = r, this.$appConfig = e), 
            2 === arguments.length && !0 === arguments[1] && (o.$app = r), r.$wxapp = getApp(), 
            a = a.concat(e.appEvents || []), t = t.concat(e.pageEvents || []), a.forEach(function(n) {
                o[n] = function() {
                    for (var e = arguments.length, o = Array(e), t = 0; t < e; t++) o[t] = arguments[t];
                    var a = void 0;
                    return !r.$wxapp && (r.$wxapp = getApp()), r[n] && (a = r[n].apply(r, o)), a;
                };
            }), o;
        },
        $createPage: function(n, e) {
            var o = this, a = {}, i = new n();
            return "string" == typeof e && (this.$instance.$pages["/" + e] = i), i.$initMixins(), 
            ("boolean" == typeof e && e || 3 === arguments.length && !0 === arguments[2]) && (a.$page = i), 
            a.onLoad = function() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                !("options" in this) && (this.options = t.length ? t[0] : {}), i.$name = n.name || "unnamed", 
                i.$init(this, o.$instance, o.$instance);
                var r = o.$instance.__prevPage__, p = {};
                p.from = r || void 0, r && r.$preloadData && (p.preload = r.$preloadData, r.$preloadData = void 0), 
                i.$prefetchData && (p.prefetch = i.$prefetchData, i.$prefetchData = void 0), t.push(p), 
                i.$onLoad.apply(i, t), i.$apply();
            }, a.onUnload = function() {
                for (var n = arguments.length, e = Array(n), o = 0; o < n; o++) e[o] = arguments[o];
                i.$onUnload.apply(i, e);
            }, a.onShow = function() {
                for (var n = arguments.length, e = Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                o.$instance.__prevPage__ = i, [].concat(i.$mixins, i).forEach(function(n) {
                    n.onShow && n.onShow.apply(i, e);
                });
                var a = getCurrentPages(), r = a[a.length - 1].__route__, p = a[a.length - 1].__wxWebviewId__;
                o.$instance.__wxWebviewId__ !== p && (i.$wxpage = this, o.$instance.__route__ = r, 
                o.$instance.__wxWebviewId__ = p, [].concat(i.$mixins, i).forEach(function(n) {
                    n.onRoute && n.onRoute.apply(i, e);
                })), i.$apply();
            }, t.forEach(function(n) {
                "onLoad" !== n && "onUnload" !== n && "onShow" !== n && (a[n] = function() {
                    for (var e = arguments.length, o = Array(e), t = 0; t < e; t++) o[t] = arguments[t];
                    var a = void 0;
                    return "onShareAppMessage" === n ? (i[n] && (a = i[n].apply(i, o)), a) : ([].concat(i.$mixins, i).forEach(function(e) {
                        e[n] && e[n].apply(i, o);
                    }), "onPageScroll" !== n && i.$apply(), a);
                });
            }), i.onShareAppMessage || delete a.onShareAppMessage, -1 === [].concat(i.$mixins, i).findIndex(function(n) {
                return n.onPageScroll;
            }) && delete a.onPageScroll, r(a, i, "");
        }
    };
}();