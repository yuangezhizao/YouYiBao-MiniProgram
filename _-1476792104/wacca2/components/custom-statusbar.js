!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), n = require("./../npm/wepy/lib/wepy.js");
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(e) {
        function n() {
            var e, t, u;
            o(this, n);
            for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
            return t = u = r(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(i))), 
            u.props = {
                domain: {
                    default: "",
                    twoWay: !0
                },
                title: {
                    default: ""
                }
            }, u.data = {
                menuButtonTop: ""
            }, u.components = {}, u.methods = {
                goBack: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                goHome: function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }
            }, u.events = {}, u.watch = {}, u.computed = {}, r(u, t);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(n, e), t(n, [ {
            key: "onLoad",
            value: function() {
                var e = this;
                setTimeout(function() {
                    e.menuButtonTop = e.menuButtonTop = wx.getMenuButtonBoundingClientRect().top, console.log("页面statusbar高度", e.menuButtonTop), 
                    e.$apply();
                }, 100);
            }
        } ]), n;
    }(((e = n) && e.__esModule ? e : {
        default: e
    }).default.component);
    exports.default = u;
}();