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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/custom-statusbar.js"));
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
            for (var c = arguments.length, s = Array(c), u = 0; u < c; u++) s[u] = arguments[u];
            return t = i = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                customStatusbar: {
                    title: "扫二维码"
                }
            }, i.$events = {}, i.components = {
                customStatusbar: n.default
            }, i.mixins = [], i.data = {}, i.computed = {}, i.methods = {
                scan: function() {
                    wx.showLoading({
                        title: "加载中...",
                        mask: !0
                    }), wx.scanCode({
                        onlyFromCamera: !0,
                        success: function(e) {
                            console.log(JSON.stringify(e) + "1111111111111111111");
                            var t = wx.getStorageSync("token");
                            wx.request({
                                url: encodeURI(e.result).replace(/\%00/g, ""),
                                method: "GET",
                                header: {
                                    "Content-Type": "application/json",
                                    token: t || "4WtEbIVbhCNV86nSdAcXIAenm6swEaj5OyXH0C6IEVzS2V86ySVO3dV4HNzLJMjy",
                                    clientType: "weapp",
                                    appType: "YouYiBao"
                                },
                                success: function(e) {
                                    wx.hideLoading(), console.log(e), wx.navigateTo({
                                        url: e.data
                                    }), wx.setStorageSync("isScan", !0);
                                },
                                complete: function() {
                                    wx.hideLoading();
                                }
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
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
            value: function() {}
        }, {
            key: "onShow",
            value: function() {}
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
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/index/scan"));
}();