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
    }(), t = n(require("./../../npm/wepy/lib/wepy.js"));
    n(require("./../../utils/api.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(n) {
        function a() {
            var e, t, n;
            o(this, a);
            for (var i = arguments.length, c = Array(i), u = 0; u < i; u++) c[u] = arguments[u];
            return t = n = r(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationBarTitleText: "游艺宝"
            }, n.data = {
                options: ""
            }, n.components = {}, n.methods = {}, n.events = {}, n.mixins = [], n.computed = {}, 
            r(n, t);
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
        }(a, n), e(a, [ {
            key: "onLoad",
            value: function(e) {
                console.log("qrcode page loaded", e), this.options = e;
            }
        }, {
            key: "onShow",
            value: function() {
                this.jump(this.options);
            }
        }, {
            key: "onShareAppMessage",
            value: function(e) {
                return {
                    title: "关注游艺宝，发现更多精彩",
                    path: "/pages/index/index",
                    imageUrl: "/assets/imgs/share.png",
                    success: function(e) {
                        console.log("转发成功！");
                    },
                    fail: function(e) {
                        return console.log(e.errMsg);
                    }
                };
            }
        }, {
            key: "jump",
            value: function(e) {
                var n = wx.getStorageSync("token");
                t.default.request({
                    url: decodeURIComponent(e.q),
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        token: n || "",
                        clientType: "weapp",
                        appType: "YouYiBao"
                    }
                }).then(function(e) {
                    wx.hideLoading(), console.log(e.data), t.default.redirectTo({
                        url: e.data
                    }).then(function(e) {
                        console.log("失败", e);
                    }).catch(function(e) {
                        console.log("redirect error", e), wx.redirectTo({
                            url: "/pages/index/scan"
                        });
                    }), wx.setStorageSync("isScan", !0);
                }).catch(function(e) {
                    wx.hideLoading(), wx.redirectTo({
                        url: "/pages/index/scan"
                    });
                });
            }
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(a, "pages/qrcode/qrcode"));
}();