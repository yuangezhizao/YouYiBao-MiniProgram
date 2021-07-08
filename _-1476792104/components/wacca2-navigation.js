!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
        };
    }(), o = require("./../npm/wepy/lib/wepy.js");
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(e) {
        function o() {
            var e, t, u;
            n(this, o);
            for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
            return t = u = r(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
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
        }(o, e), t(o, [ {
            key: "onLoad",
            value: function() {
                var e = this;
                console.log("xxxxxxxxxxxxxxxxxxxx"), setTimeout(function() {
                    e.menuButtonTop = e.menuButtonTop = wx.getMenuButtonBoundingClientRect().top, console.log("页面statusbar高度", e.menuButtonTop), 
                    e.$apply();
                }, 100);
            }
        } ]), o;
    }(((e = o) && e.__esModule ? e : {
        default: e
    }).default.component);
    exports.default = u;
}();