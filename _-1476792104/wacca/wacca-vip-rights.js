!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = i(require("./../npm/wepy/lib/wepy.js")), n = i(require("./../components/custom-statusbar.js")), r = i(require("./../components/match-dialog.js")), a = i(require("./../utils/wacca-api.js")), o = i(require("./../utils/wechat.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, o) {
                    try {
                        var i = t[a](o), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function i() {
            var e, t, a;
            c(this, i);
            for (var o = arguments.length, u = Array(o), l = 0; l < o; l++) u[l] = arguments[l];
            return t = a = s(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                customStatusbar: {
                    title: "华卡音舞会员权益"
                },
                memberDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "memberDialog",
                    title: "升级为基本会员"
                },
                privilegeDialog: {
                    "v-bind:isShowDialog.sync": "privilegeDialog",
                    "v-bind:title.sync": "dialogTitle"
                }
            }, a.$events = {}, a.components = {
                customStatusbar: n.default,
                memberDialog: r.default,
                privilegeDialog: r.default
            }, a.mixins = [], a.data = {
                cardCur: 0,
                memberInfo: "",
                memberDialog: !1,
                dialogTitle: "",
                privilegeDialog: !1
            }, a.computed = {}, a.methods = {
                cardSwiper: function(e) {
                    this.cardCur = e.detail.current;
                },
                swiperChange: function(e) {
                    this.cardCur = e;
                },
                rechargeVip: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-vip-recharge"
                    });
                },
                buyGoods: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-shop"
                    });
                },
                upMember: function() {
                    this.memberDialog = !0;
                },
                buyMember: function() {
                    this.joinMember();
                },
                showPrivilege: function() {
                    this.privilegeDialog = !0, this.dialogTitle = "更多权益";
                },
                closePrivilegeDialog: function() {
                    this.privilegeDialog = !1;
                },
                goBack: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }, a.events = {}, s(a, t);
        }
        var l, p;
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
                this.getMemberInfo();
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
            key: "getMemberInfo",
            value: (p = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.memberInfoWacca();

                      case 2:
                        if (1 != (t = e.sent).code) {
                            e.next = 16;
                            break;
                        }
                        this.memberInfo = t.data, this.days = parseInt(t.data.validDays), e.t0 = parseInt(t.data.memberType), 
                        e.next = 2 === e.t0 ? 9 : 3 === e.t0 ? 11 : 13;
                        break;

                      case 9:
                        return this.cardCur = 1, e.abrupt("break", 15);

                      case 11:
                        return this.cardCur = 2, e.abrupt("break", 15);

                      case 13:
                        return this.cardCur = 0, e.abrupt("break", 15);

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "joinMember",
            value: (l = u(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, o.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), n.getMemberInfo(), n.$apply();
                        }).catch(function(e) {
                            console.log("支付失败", e), wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    exports.default = l;
}();