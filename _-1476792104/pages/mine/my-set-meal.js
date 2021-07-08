!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), a = i(require("./../../utils/api.js")), n = i(require("./../../utils/units.js")), r = i(require("./../../components/match-dialog.js")), o = i(require("./../../components/match-statusbar.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function n(r, o) {
                    try {
                        var i = t[r](o), s = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function i() {
            var e, t, a;
            c(this, i);
            for (var n = arguments.length, s = Array(n), l = 0; l < n; l++) s[l] = arguments[l];
            return t = a = u(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(s))), 
            a.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "我的套餐"
                },
                dialog1: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog",
                    title: "订单"
                }
            }, a.$events = {}, a.components = {
                statusbar: o.default,
                dialog1: r.default
            }, a.data = {
                tabIndex: 1,
                pageNo: 1,
                pageSize: 3,
                packageList: [],
                isShowDialog: !1,
                cancelOrderId: "",
                canLoadMore: !0
            }, a.methods = {
                navbarTap: function(e) {
                    this.currentTab = e.currentTarget.dataset.index, this.currentTab, this.$apply();
                },
                tabChange: function(e) {
                    this.tabIndex != e && (this.tabIndex = e, this.canLoadMore = !0, this.pageNo = 1, 
                    this.getPackages());
                },
                mealDetail: function(e) {
                    console.log(e), wx.navigateTo({
                        url: "/pages/mine/my-set-meal-detail?openType=record&orderId=" + e.order_id + "&status=" + this.tabIndex
                    });
                },
                convert: function(e) {
                    this.myPackagesExchange(e.order_id);
                },
                closeDialog: function() {
                    this.isShowDialog = !1, this.$apply();
                },
                cancel: function(e) {
                    this.isShowDialog = !0, this.cancelOrderId = e.order_id, this.$apply();
                },
                cancelOrder: function() {
                    this.cancelOrder(this.cancelOrderId);
                }
            }, u(a, t);
        }
        var l, p, f;
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
                this.getPackages();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getPackages());
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
            key: "getPackages",
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t, r, o, i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: this.tabIndex,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, a.default.myPackages(t);

                      case 3:
                        if (r = e.sent, console.log(r), (!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        this.pageNo > 1) {
                            for (o = r.data, i = 0; i < o.length; i++) o[i].valid_time = n.default.formatTime(new Date(1e3 * o[i].valid_time)), 
                            o[i].order_time = n.default.formatTime(new Date(1e3 * o[i].order_time));
                            this.packageList = this.packageList.concat(o), this.$apply();
                        } else {
                            for (o = r.data, s = 0; s < o.length; s++) o[s].valid_time = n.default.formatTime(new Date(1e3 * o[s].valid_time)), 
                            o[s].order_time = n.default.formatTime(new Date(1e3 * o[s].order_time));
                            this.packageList = o, this.$apply();
                        }

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "myPackagesExchange",
            value: (p = s(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.myPackagesExchange({
                            orderno: t
                        });

                      case 2:
                        (n = e.sent) && wx.navigateTo({
                            url: "/pages/mine/my-set-meal-qr?exchangeCode=" + n.data.exchangeCode + "&codeUrl=" + n.data.codeUrl
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return p.apply(this, arguments);
            })
        }, {
            key: "cancelOrder",
            value: (l = s(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.cancellationMyOrder({
                            orderno: t
                        });

                      case 2:
                        e.sent && (this.isShowDialog = !1, this.getPackages(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return l.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/mine/my-set-meal"));
}();