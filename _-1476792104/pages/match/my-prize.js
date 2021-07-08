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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), n = i(require("./../../components/match-statusbar.js")), r = i(require("./../../utils/api.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, a) {
                    try {
                        var o = t[i](a), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function i() {
            var e, t, r;
            o(this, i);
            for (var a = arguments.length, c = Array(a), u = 0; u < a; u++) c[u] = arguments[u];
            return t = r = s(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "我的奖池奖品"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 20,
                prizeList: [],
                showExchange: !1,
                exchangeCode: "",
                prizeId: ""
            }, r.methods = {
                setAddress: function(e) {
                    if (1 == e.prizeType) wx.navigateTo({
                        url: "/pages/mine/coin-record"
                    }); else if (2 == e.prizeType) wx.navigateTo({
                        url: "/pages/mine/integral-record"
                    }); else if (3 == e.prizeType) wx.navigateTo({
                        url: "/pages/mine/ticket-record"
                    }); else if (0 == e.prizeType && "平台活动" == e.eventTypeName) 0 == e.isReceive ? wx.navigateTo({
                        url: "/pages/match/set-prize-address?prizeName=" + e.prizeName + "&prizeId=" + e.id + "&isReceive=" + e.isReceive
                    }) : wx.navigateTo({
                        url: "/pages/match/set-prize-address?prizeName=" + e.prizeName + "&expressName=" + e.expressName + "&expressMobile=" + e.expressMobile + "&expressAddress=" + e.expressAddress + "&isReceive=" + e.isReceive
                    }); else {
                        if (1 == e.isReceive) return;
                        this.showExchange = !0, this.prizeId = e.id;
                    }
                },
                close: function() {
                    this.showExchange = !1;
                },
                getExchangeCode: function(e) {
                    this.exchangeCode = e.detail.value;
                },
                exchange: function() {
                    "" == this.exchangeCode ? wx.showToast({
                        title: "请输入兑换码",
                        icon: "none"
                    }) : this.exchangePrize();
                }
            }, s(r, t);
        }
        var c, u;
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
        }(i, t), e(i, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.myPrizeListJackpot();
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.myPrizeListJackpot());
            }
        }, {
            key: "myPrizeListJackpot",
            value: (u = a(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.myPrizeListJackpot(t);

                      case 3:
                        1 == (n = e.sent).code && ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.prizeList = n.data : this.prizeList = this.prizeList.concat(n.data), 
                        this.$apply(), console.log("我的奖品列表", n));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "exchangePrize",
            value: (c = a(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            id: this.prizeId,
                            exchangeCode: this.exchangeCode
                        }, e.next = 3, r.default.exchangePrize(t);

                      case 3:
                        1 == (n = e.sent).code ? (this.myPrizeListJackpot(), this.showExchange = !1, this.$apply()) : wx.showToast({
                            title: n.message,
                            icon: "none"
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/match/my-prize"));
}();