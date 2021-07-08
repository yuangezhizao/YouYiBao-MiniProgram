!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = r(require("./../npm/wepy/lib/wepy.js")), n = r(require("./../components/wacca2-navigation.js"));
    r(require("./../utils/wechat.js"));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(t) {
        function r() {
            var e, t, a;
            o(this, r);
            for (var c = arguments.length, u = Array(c), s = 0; s < c; s++) u[s] = arguments[s];
            return t = a = i(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                wacca2Navigation: {
                    title: "设置"
                }
            }, a.$events = {}, a.components = {
                wacca2Navigation: n.default
            }, a.mixins = [], a.data = {
                screenWidth: 300,
                listArr: [ {
                    title: "游戏设置"
                }, {
                    title: "显示设置"
                }, {
                    title: "设计设置"
                }, {
                    title: "声音设置"
                } ]
            }, a.computed = {}, a.methods = {
                buttonDidClick: function(e) {
                    var t = "wacca2-setting-detail?type=" + e;
                    wx.navigateTo({
                        url: t
                    });
                }
            }, a.events = {}, i(a, t);
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
        }(r, t), e(r, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth;
                    }
                });
            }
        } ]), r;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(a, "wacca2/wacca2-setting"));
}();