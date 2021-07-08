!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/wacca2-navigation.js"));
    o(require("./../utils/wechat.js")), o(require("./../utils/wacca-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function o() {
            var e, t, i;
            r(this, o);
            for (var c = arguments.length, u = Array(c), s = 0; s < c; s++) u[s] = arguments[s];
            return t = i = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    title: "周边兑换活动"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default
            }, i.mixins = [], i.data = {
                screenWidth: 300,
                showAlert: !1,
                model1: {},
                model2: {},
                subTitle: ""
            }, i.computed = {}, i.methods = {
                backClick: function() {
                    wx.navigateBack({
                        delta: 4
                    });
                }
            }, i.events = {}, a(i, t);
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
        }(o, t), e(o, [ {
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
                }), this.model1 = JSON.parse(e.json), this.model2 = JSON.parse(e.jsonn);
            }
        } ]), o;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(i, "wacca2/wacca2-zhoubian-success"));
}();