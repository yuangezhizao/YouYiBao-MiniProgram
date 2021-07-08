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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = (o(require("./../../utils/api.js")), 
    o(require("./../../utils/environment.js")), o(require("./../../components/match-statusbar.js")));
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
            for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
            return t = i = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            i.config = {
                navigationBarTitleText: ""
            }, i.components = {
                statusbar: n.default
            }, i.mixins = [], i.data = {
                adUrl: ""
            }, i.computed = {}, i.methods = {}, i.events = {}, a(i, t);
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
            value: function(e) {}
        }, {
            key: "onShow",
            value: function() {
                var e = this;
                wx.setNavigationBarTitle({
                    title: "我的年度报告"
                }), wx.getStorage({
                    key: "userInfo",
                    success: function(t) {
                        console.log(JSON.stringify(t)), e.adUrl = "https://adapi.shiyugame.com/report2020/index.html?user=" + t.data.openid, 
                        console.log(e.adUrl);
                    },
                    fail: function() {
                        wx.showModal({
                            content: "您还未登录，请先登录",
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "/pages/mine/login"
                                }) : e.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    },
                    complete: function() {}
                });
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
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/index/waccaReport"));
}();