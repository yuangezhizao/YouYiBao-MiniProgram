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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), r = a(require("./../../utils/api.js")), n = a(require("./../../components/match-statusbar.js")), o = a(require("./../../components/match-dialog.js")), i = a(require("./../../components/custom-dialog.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, i) {
                    try {
                        var a = t[o](i), s = a.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(e) {
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
        function a() {
            var e, t, r;
            c(this, a);
            for (var s = arguments.length, l = Array(s), p = 0; p < s; p++) l[p] = arguments[p];
            return t = r = u(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(l))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "会员卡详情"
                },
                dialog1: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog"
                },
                customDialog: {
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, r.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                statusbar: n.default,
                dialog1: o.default,
                customDialog: i.default
            }, r.data = {
                isShowDialog: !1,
                selectIndex: 0,
                vipCardInfo: "",
                cardNumber: "",
                memberNumber: "",
                storeId: "",
                cardStoreId: "",
                memberPackage: "",
                showAlert: !1,
                alertTxt: ""
            }, r.methods = {
                changeOption: function(e) {
                    this.selectIndex = e, this.$apply();
                },
                showDialog: function() {
                    this.isShowDialog = !0;
                },
                payRecord: function() {
                    wx.navigateTo({
                        url: "/pages/mine/card-orders?cardNumber=" + this.cardNumber
                    });
                },
                moreMatch: function() {
                    wx.navigateTo({
                        url: "/pages/mine/card-sets?storeId=" + this.storeId
                    });
                },
                memberPackageDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/store/member-package?storeId=" + this.storeId + "&setcoinno=" + e.setcoinno
                    });
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                delCard: function() {
                    this.deleteCard();
                },
                callPhone: function() {
                    wx.makePhoneCall({
                        phoneNumber: this.vipCardInfo.storeMobile
                    });
                },
                errorImg: function(e) {
                    this.memberPackage[e].image = "http://yyb-oss.universal-space.cn/imgs/mine/button_vip-100.png";
                }
            }, u(r, t);
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function(e) {
                console.log(e), this.cardNumber = e.card_number, this.storeId = e.store_id, this.memberNumber = e.member_number, 
                this.cardStoreId = e.card_storeid, this.$apply();
            }
        }, {
            key: "onShow",
            value: function() {
                this.getVipInfo();
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
            key: "getVipInfo",
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.vipCardInfo({
                            vipstore: this.cardStoreId,
                            membernumber: this.cardNumber
                        });

                      case 2:
                        0 == (t = e.sent).retCode ? (this.vipCardInfo = t.data, new Date(this.vipCardInfo.validdate.replace(/-/g, "/")).getTime() < new Date().getTime() ? this.vipCardInfo.isExpired = !0 : this.vipCardInfo.isExpired = !1, 
                        this.getMemberPackage(), this.$apply()) : (this.showAlert = !0, this.alertTxt = t.retMsg, 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getMemberPackage",
            value: (p = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getVipTicket({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 2
                        });

                      case 2:
                        (t = e.sent) && (this.memberPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "deleteCard",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            mobile: this.vipCardInfo.mobile,
                            cardNumber: this.cardNumber,
                            memberNumber: this.memberNumber,
                            storeid: this.storeId
                        }, e.next = 3, r.default.delVipCard(t);

                      case 3:
                        e.sent && wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 1500,
                            success: function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/mine/card"));
}();