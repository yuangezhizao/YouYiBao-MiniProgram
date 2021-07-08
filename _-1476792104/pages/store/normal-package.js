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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), r = s(require("./../../components/custom-statusbar.js")), n = s(require("./../../utils/api.js")), a = s(require("./../../utils/units.js")), o = s(require("./../../utils/wechat.js")), i = s(require("./../../components/custom-dialog.js"));
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
    var p = function(t) {
        function s() {
            var e, t, n;
            u(this, s);
            for (var a = arguments.length, o = Array(a), c = 0; c < a; c++) o[c] = arguments[c];
            return t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(o))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "非会员卡套餐"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, n.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, n.components = {
                customStatusbar: r.default,
                customDialog: i.default
            }, n.mixins = [], n.data = {
                count: 1,
                storeId: "",
                packageId: "",
                image: "",
                normalPakcageDetail: "",
                showAlert: !1,
                alertTxt: "",
                isChecked: !1
            }, n.computed = {}, n.methods = {
                add: function() {
                    this.count++;
                },
                down: function() {
                    this.count <= 1 ? this.count = 1 : this.count--;
                },
                getCount: function(e) {
                    this.count = e.detail.value;
                },
                createOrder: function() {
                    if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                    this.getCreateOreder();
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                toggleCheckbox: function() {
                    this.isChecked = !this.isChecked;
                },
                showAgree: function() {
                    wx.navigateTo({
                        url: "/pages/store/package-agreement"
                    });
                }
            }, n.events = {}, l(n, t);
        }
        var p, d;
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
                this.storeId = e.storeId, this.packageId = e.packageId, this.image = e.image, this.$apply();
            }
        }, {
            key: "onShow",
            value: function() {
                this.comboList();
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
            key: "comboList",
            value: (d = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.comboList({
                            id: this.packageId,
                            storeid: this.storeId
                        });

                      case 2:
                        (t = e.sent) && (t.data.validity = a.default.formatTime(new Date(1e3 * t.data.validity)), 
                        this.normalPakcageDetail = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getCreateOreder",
            value: (p = c(regeneratorRuntime.mark(function e() {
                var t, r, a, i, s = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            openid: "",
                            storeId: this.normalPakcageDetail.storeId,
                            cardNum: 0,
                            goodsType: 2,
                            goodsId: this.normalPakcageDetail.id,
                            payType: 4,
                            qty: this.count,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, n.default.createOrder(t);

                      case 3:
                        if (1 == (r = e.sent).code) {
                            e.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = r.message, this.$apply(), e.next = 16;
                        break;

                      case 10:
                        return a = r.data.orderid, e.next = 13, n.default.payOrder({
                            payType: 4,
                            orderNo: a
                        });

                      case 13:
                        i = e.sent, o.default.payment(i.data.sign).then(function(e) {
                            wx.navigateTo({
                                url: "/pages/store/pay-success?resultType=normal_package&orderId=" + i.data.orderid + "&storeId=" + s.normalPakcageDetail.storeId + "&goodsId=" + s.normalPakcageDetail.id + "&storeName=" + s.normalPakcageDetail.store_name + "&price=" + s.normalPakcageDetail.packages_price + "&goodsName=" + s.normalPakcageDetail.packages_name
                            });
                        }), this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/store/normal-package"));
}();