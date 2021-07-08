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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = (o(require("./../../utils/api.js")), 
    o(require("./../../utils/environment.js")), o(require("./../../utils/units.js")), 
    o(require("./../../utils/wechat.js")), o(require("./../../components/custom-statusbar.js"))), r = o(require("./../../utils/wacca-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, r;
            a(this, o);
            for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
            return t = r = i(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "我的礼品订单"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                list: [],
                default: !1
            }, r.computed = {}, r.methods = {}, r.events = {}, i(r, t);
        }
        var u, s;
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
            value: function() {
                wx.getSystemInfo({
                    success: function(e) {}
                }), this.loadData();
            }
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
        }, {
            key: "loadData",
            value: (u = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.searchPresentOrderWacca2();

                      case 2:
                        t = e.sent, this.list = t.data, this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), s = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, a) {
                        try {
                            var i = e[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(u);
                    }("next");
                });
            }, function() {
                return s.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/mine/gift-order"));
}();