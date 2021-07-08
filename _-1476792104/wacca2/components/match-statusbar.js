!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var t, e = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        return function(e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
        };
    }(), n = require("./../npm/wepy/lib/wepy.js");
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var u = function(t) {
        function n() {
            var t, e, u;
            o(this, n);
            for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
            return e = u = r(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(a))), 
            u.props = {
                title: String,
                backUrl: String,
                size: {
                    type: String,
                    default: "sm"
                },
                leftIcon: {
                    type: String,
                    default: !1
                }
            }, u.data = {
                menuButtonTop: ""
            }, u.methods = {
                goBack: function() {
                    this.$emit("back"), this.backUrl ? wx.navigateTo({
                        url: this.backUrl
                    }) : wx.navigateBack();
                },
                goHome: function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }
            }, r(u, e);
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function() {
                var t = this;
                setTimeout(function() {
                    t.menuButtonTop = wx.getMenuButtonBoundingClientRect().top, console.log("页面statusbar高度", t.menuButtonTop), 
                    t.$apply();
                }, 100);
            }
        } ]), n;
    }(((t = n) && t.__esModule ? t : {
        default: t
    }).default.component);
    exports.default = u;
}();