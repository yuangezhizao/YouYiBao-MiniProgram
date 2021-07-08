!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), r = a(require("./../../utils/api.js")), n = a(require("./../../components/match-statusbar.js"));
    function a(e) {
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
    var u = function(t) {
        function a() {
            var e, t, r;
            o(this, a);
            for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
            return t = r = i(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(s))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "会员卡包"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                cardList: []
            }, r.methods = {
                addCard: function() {
                    wx.navigateTo({
                        url: "/pages/mine/add-card"
                    });
                },
                cardDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/mine/card?card_storeid=" + e.card_storeid + "&card_number=" + e.card_number + "&store_id=" + e.store_id + "&member_number=" + e.member_number
                    });
                },
                payCard: function() {
                    wx.navigateTo({
                        url: "/pages/mine/add-card-by-self"
                    });
                }
            }, i(r, t);
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.myVipCard();
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
            key: "myVipCard",
            value: (u = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.myVipCard({
                            storeId: 0
                        });

                      case 2:
                        (t = e.sent) && (console.log("res", t), this.cardList = t.data, this.cardList.map(function(e) {
                            1e3 * e.validdate < new Date().getTime() ? e.isExpired = !0 : e.isExpired = !1;
                        }), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), s = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(a, o) {
                        try {
                            var i = e[a](o), u = i.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(u);
                    }("next");
                });
            }, function() {
                return s.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/mine/my-card"));
}();