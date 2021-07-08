!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = s(require("./../npm/wepy/lib/wepy.js")), r = s(require("./../components/custom-statusbar.js")), n = s(require("./../utils/api.js")), a = s(require("./../utils/wacca-api.js")), o = s(require("./../components/match-dialog.js")), i = s(require("./../components/custom-progress.js")), c = s(require("./../utils/wechat.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var i = t[a](o), c = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(c).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function s() {
            var e, t, n;
            p(this, s);
            for (var a = arguments.length, c = Array(a), u = 0; u < a; u++) c[u] = arguments[u];
            return t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "华卡音舞"
                },
                memberDialog: {
                    "v-bind:isShowDialog.sync": "memberDialog",
                    title: "升级为基本会员"
                },
                customProgress: {
                    "xmlns:v-bind": "",
                    "v-bind:days.sync": "days"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default,
                memberDialog: o.default,
                customProgress: i.default
            }, n.mixins = [], n.data = {
                productId: "",
                productName: "",
                productImage: "",
                recordList: [],
                memberInfo: "",
                memberDialog: !1,
                days: 0,
                isHideVip: !0
            }, n.computed = {}, n.methods = {
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                    });
                },
                gradeRecord: function() {
                    this.memberInfo.memberType > 1 && wx.navigateTo({
                        url: "/pages/wacca/wacca-grade-record?productId=" + this.productId
                    });
                },
                upMember: function() {
                    this.memberDialog = !0;
                },
                buyMember: function() {
                    this.joinMember();
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
                toTrophy: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-trophy"
                    });
                },
                changeAvatar: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-change-avatar"
                    });
                },
                changeAchievement: function() {
                    wx.navigateTo({
                        url: "wacca-achievement"
                    });
                },
                musicLib: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-track"
                    });
                },
                toPrivilege: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-vip-rights"
                    });
                },
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-rank"
                    });
                },
                handleError: function() {
                    this.memberInfo.iconUrl = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png";
                }
            }, n.events = {}, l(n, t);
        }
        var f, d, m;
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
                console.log(e), this.productId = e.productId, this.productName = e.productName, 
                this.productImage = e.productImage;
                var t = wx.getStorageSync("isHideVip");
                console.log(JSON.stringify(t) + "====================="), this.isHideVip = t;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserRecordStatis(), this.getMemberInfo();
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
            key: "getUserRecordStatis",
            value: (m = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
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
            key: "joinMember",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, c.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), r.getMemberInfo(), r.$apply();
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
                return f.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    exports.default = f;
}();