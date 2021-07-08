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
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var i = t[a](o), u = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, r;
            i(this, a);
            for (var o = arguments.length, c = Array(o), s = 0; s < o; s++) c[s] = arguments[s];
            return t = r = u(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "兑换记录"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                currentTab: 0,
                navbar: [ "已支付", "已退款" ],
                cardList: []
            }, r.methods = {
                navbarTap: function(e) {
                    this.currentTab = e.currentTarget.dataset.index, this.currentTab;
                },
                exchangeCard: function(e) {
                    this.getOrderDetail(e);
                }
            }, u(r, t);
        }
        var c, s, f;
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
                this.getOrder();
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
            key: "getOrder",
            value: (f = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.orderList();

                      case 2:
                        (t = e.sent) && (this.cardList = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getOrderDetail",
            value: (s = o(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.orderDetail({
                            orderNo: this.cardList[t].no
                        });

                      case 2:
                        (n = e.sent) && this.exchange(n.data);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return s.apply(this, arguments);
            })
        }, {
            key: "exchange",
            value: (c = o(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getExchangeCode({
                            orderNo: t.orderNo
                        });

                      case 2:
                        n = e.sent, wx.navigateTo({
                            url: "/pages/mine/card-exchange-qr?exchangeCode=" + n.data.exchangeCode + "&storeName=" + t.storeName
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return c.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/card-exchange"));
}();