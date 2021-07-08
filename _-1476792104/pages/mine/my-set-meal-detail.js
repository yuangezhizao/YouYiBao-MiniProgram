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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), r = s(require("./../../utils/api.js")), n = s(require("./../../utils/units.js")), a = s(require("./../../utils/wechat.js")), o = s(require("./../../components/match-statusbar.js")), i = s(require("./../../components/match-dialog.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var i = t[a](o), s = i.value;
                    } catch (e) {
                        return void r(e);
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
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function s() {
            var e, t, r;
            u(this, s);
            for (var n = arguments.length, a = Array(n), c = 0; c < n; c++) a[c] = arguments[c];
            return t = r = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(a))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "套餐详情"
                },
                dialog1: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog",
                    title: "订单"
                }
            }, r.$events = {}, r.components = {
                statusbar: o.default,
                dialog1: i.default
            }, r.data = {
                normalPakcageDetail: "",
                isShowDialog: !1,
                orderNo: "",
                status: 0
            }, r.methods = {
                cancel: function() {
                    this.isShowDialog = !0, this.$apply();
                },
                closeDialog: function() {
                    this.isShowDialog = !1, this.$apply();
                },
                convert: function() {
                    this.myPackagesExchange();
                },
                cancelOrder: function() {
                    this.cancelOrder();
                },
                pay: function() {
                    this.payOrder();
                }
            }, l(r, t);
        }
        var f, p, d, m;
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
        }(s, t), e(s, [ {
            key: "onLoad",
            value: function(e) {
                console.log(e), this.orderNo = e.orderId, this.status = e.status;
            }
        }, {
            key: "onShow",
            value: function() {
                this.myPackagesInfo();
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
            key: "myPackagesInfo",
            value: (m = c(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.myPackagesInfo({
                            orderno: this.orderNo
                        });

                      case 2:
                        (t = e.sent) && (0 != (a = t.data).valid_time && (a.valid_time = n.default.formatTime(new Date(1e3 * a.valid_time))), 
                        0 != a.ordertime && (a.ordertime = n.default.formatTime(new Date(1e3 * a.ordertime))), 
                        0 != a.convert_time && (a.convert_time = n.default.formatTime(new Date(1e3 * a.convert_time))), 
                        0 != a.abolishtime && (a.abolishtime = n.default.formatTime(new Date(1e3 * a.abolishtime))), 
                        this.normalPakcageDetail = a, this.$apply(), console.log(a));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "myPackagesExchange",
            value: (d = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.myPackagesExchange({
                            orderno: this.orderNo
                        });

                      case 2:
                        (t = e.sent) && wx.navigateTo({
                            url: "/pages/mine/my-set-meal-qr?exchangeCode=" + t.data.exchangeCode + "&codeUrl=" + t.data.codeUrl
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "cancelOrder",
            value: (p = c(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.cancellationMyOrder({
                            orderno: this.orderNo
                        });

                      case 2:
                        e.sent && wx.navigateBack({
                            delta: 1
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "payOrder",
            value: (f = c(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.payOrder({
                            payType: 4,
                            orderNo: this.orderNo
                        });

                      case 2:
                        (t = e.sent) && a.default.payment(t.data.sign).then(function(e) {
                            wx.navigateTo({
                                url: "/pages/store/pay-success?resultType=normal_package&orderId=" + t.data.orderid + "&storeId=" + n.normalPakcageDetail.storeId + "&goodsId=" + n.normalPakcageDetail.id + "&storeName=" + n.normalPakcageDetail.store_name + "&price=" + n.normalPakcageDetail.pay_price + "&goodsName=" + n.normalPakcageDetail.name
                            });
                        }, function(e) {
                            console.log(e);
                        }).catch(function(e) {
                            console.log(e);
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/mine/my-set-meal-detail"));
}();