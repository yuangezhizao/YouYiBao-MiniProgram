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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), r = i(require("./../../components/custom-statusbar.js")), n = i(require("./../../utils/api.js")), o = i(require("./../../utils/wechat.js")), a = i(require("./../../components/custom-dialog.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
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
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function i() {
            var e, t, n;
            c(this, i);
            for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
            return t = n = u(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(s))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "会员卡套餐详情"
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
                customDialog: a.default
            }, n.mixins = [], n.data = {
                selectCard: !1,
                confirmCard: !1,
                cardList: [],
                storeId: "",
                setcoinno: "",
                packageDetail: "",
                showAlert: !1,
                alertTxt: "",
                isChecked: !1
            }, n.computed = {}, n.methods = {
                selectCard: function() {
                    if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                    this.selectCard = !0;
                },
                close: function() {
                    this.selectCard = !1, this.confirmCard = !1;
                },
                getCard: function(e) {
                    console.log(e), this.createOrder(e);
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                addCard: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-card"
                    });
                },
                errorImg: function(e) {
                    this.packageDetail.image = "http://yyb-oss.universal-space.cn/imgs/mine/button_vip-100.png";
                },
                toggleCheckbox: function() {
                    this.isChecked = !this.isChecked;
                },
                showAgree: function() {
                    wx.navigateTo({
                        url: "/pages/store/package-agreement"
                    });
                }
            }, n.events = {}, u(n, t);
        }
        var l, p, d;
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
            value: function(e) {
                this.storeId = e.storeId, this.setcoinno = e.setcoinno;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getPackageDetail();
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
            key: "getPackageDetail",
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.memberPackageInfo({
                            setcoinno: this.setcoinno,
                            storeId: this.storeId
                        });

                      case 2:
                        0 == (t = e.sent).retCode ? (this.packageDetail = t.data, this.getCardList(), this.$apply()) : (this.showAlert = !0, 
                        this.alertTxt = t.retMsg, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getCardList",
            value: (p = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.myVipCard({
                            storeId: this.storeId
                        });

                      case 2:
                        (t = e.sent) && (this.cardList = t.data.filter(function(e) {
                            return 1e3 * e.validdate > new Date().getTime();
                        }), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "createOrder",
            value: (l = s(regeneratorRuntime.mark(function e(t) {
                var r, a, i, s, c = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            openid: "",
                            storeId: this.storeId,
                            cardNum: t.card_number,
                            goodsType: 3,
                            goodsId: this.packageDetail.id,
                            payType: 4,
                            qty: 1,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, n.default.createOrder(r);

                      case 3:
                        if (!(a = e.sent)) {
                            e.next = 10;
                            break;
                        }
                        return i = a.data.orderid, e.next = 8, n.default.payOrder({
                            payType: 4,
                            orderNo: i
                        });

                      case 8:
                        (s = e.sent) && (console.log(s), o.default.payment(s.data.sign).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/store/pay-success?resultType=member_package&orderId=" + s.data.orderid + "\n              &storeId=" + c.storeId + "\n              &cardNum=" + t.card_number + "\n              &goodsId=" + c.packageDetail.id + "\n              &storeName=" + c.packageDetail.storeName + "\n              &price=" + c.packageDetail.money1 + "\n              &goodsName=" + encodeURIComponent(c.packageDetail.desc1)
                            });
                        }));

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return l.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/store/member-package"));
}();