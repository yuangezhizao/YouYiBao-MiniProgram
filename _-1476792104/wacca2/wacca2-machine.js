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
    }(), t = l(require("./../npm/wepy/lib/wepy.js")), a = l(require("./../components/wacca2-navigation.js")), n = l(require("./../utils/wacca-api.js")), r = l(require("./../components/custom-dialog.js")), i = l(require("./../components/match-dialog.js")), s = l(require("./../utils/api.js")), o = l(require("./../utils/wechat.js")), c = l(require("./../utils/environment.js")), u = l(require("./../components/custom-progress.js"));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function p(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function n(r, i) {
                    try {
                        var s = t[r](i), o = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!s.done) return Promise.resolve(o).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(o);
                }("next");
            });
        };
    }
    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function m(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function l() {
            var e, t, n;
            h(this, l);
            for (var s = arguments.length, o = Array(s), c = 0; c < s; c++) o[c] = arguments[c];
            return t = n = m(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(o))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                wacca2Navigation: {
                    title: "华卡音舞Ver.2"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                },
                memberDialog: {
                    "v-bind:isShowDialog.sync": "memberDialog",
                    "v-bind:title.sync": "dialogTitle"
                },
                privilegeDialog: {
                    "v-bind:isShowDialog.sync": "privilegeDialog",
                    "v-bind:title.sync": "dialogTitle"
                },
                tipsDialog: {
                    "v-bind:isShow.sync": "showScan",
                    title: "温馨提示",
                    "v-bind:content.sync": "scanTxt"
                }
            }, n.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                },
                tipsDialog: {
                    "v-on:confirm": "handleScan",
                    "v-on:close": "handleScan"
                }
            }, n.components = {
                wacca2Navigation: a.default,
                customDialog: r.default,
                memberDialog: i.default,
                privilegeDialog: i.default,
                customProgress: u.default,
                tipsDialog: r.default
            }, n.mixins = [], n.data = {
                serialNo: "",
                tag: "",
                showAlert: !1,
                alertTxt: "",
                machineDetail: [],
                cardCur: 0,
                memberDialog: !1,
                dialogTitle: "",
                privilegeDialog: !1,
                memberInfo: "",
                days: 0,
                showScan: !1,
                scanTxt: "",
                screenWidth: 250,
                validRate: 80,
                list: [],
                rateImage: ""
            }, n.mixins = [], n.computed = {}, n.methods = {
                startGame: function() {
                    if (0 == this.memberInfo.memberType || 1 == this.memberInfo.memberType) return this.memberDialog = !0, 
                    void (this.dialogTitle = "升级为基本会员");
                    var e = this;
                    wx.requestSubscribeMessage({
                        tmplIds: [ e.templateIdList[3] ],
                        success: function(t) {
                            var a = [];
                            for (var n in t) "accept" == t[n] && a.push(n);
                            e.subscribeTemplate(a);
                        },
                        fail: function(e) {
                            console.error("这是订阅消息err", e);
                        },
                        complete: function() {
                            e.startGame();
                        }
                    });
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                handleScan: function() {
                    wx.reLaunch({
                        url: "/pages/index/scan"
                    });
                },
                cardSwiper: function(e) {
                    this.cardCur = e.detail.current;
                },
                swiperChange: function(e) {
                    this.cardCur = e;
                },
                upMember: function() {
                    this.memberDialog = !0, this.dialogTitle = "升级为基本会员";
                },
                showPrivilege: function() {
                    this.privilegeDialog = !0, this.dialogTitle = "更多权益";
                },
                closePrivilegeDialog: function() {
                    this.privilegeDialog = !1;
                },
                rechargeVip: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-vip-recharge"
                    });
                },
                buyGoods: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-shop?type=1"
                    });
                },
                buyMember: function() {
                    this.joinMember();
                },
                changeAvatar: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-change-avatar?type=1"
                    });
                },
                changeAchievement: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-achievement?type=1"
                    });
                },
                handleError: function() {
                    this.memberInfo.iconUrl = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png";
                }
            }, n.events = {}, m(n, t);
        }
        var f, g, d, v, y, w, b, x;
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
        }(l, t), e(l, [ {
            key: "onLoad",
            value: function(e) {
                this.serialNo = e.serialNo, this.tag = e.tag;
                var t = this;
                wx.getSystemInfo({
                    success: function(e) {
                        t.screenWidth = e.screenWidth;
                    }
                }), this.getBanner(), this.$apply();
            }
        }, {
            key: "onShow",
            value: (x = p(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = wx.getStorageSync("isScan"), this.getMemberInfo(), this.serialNo && this.tag && t ? this.scanCodeWacca() : (this.scanTxt = "二维码已过期，请重新扫码", 
                        this.showScan = !0);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return x.apply(this, arguments);
            })
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
            key: "dealRateImage",
            value: function() {
                var e = "", t = this.memberInfo;
                e = t.rating <= 299 ? "000" : t.rating <= 599 ? "300" : t.rating <= 999 ? "600" : t.rating <= 1299 ? "1000" : t.rating <= 1599 ? "1300" : t.rating <= 1899 ? "1600" : t.rating <= 2199 ? "1900" : t.rating <= 2499 ? "2200" : "2500", 
                this.rateImage = "http://yyb-oss.universal-space.cn/imgs/wacca2/firstpage/" + e + ".png";
            }
        }, {
            key: "scanCodeWacca",
            value: (b = p(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, n.default.scanCodeWacca(t);

                      case 3:
                        a = e.sent, this.isLock = !0, 1 != a.code ? (this.alertTxt = a.message, this.showAlert = !0, 
                        this.showPlayGame = !1) : (this.machineDetail = a.data, this.showPlayGame = !0, 
                        this.getTemplateIds()), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return b.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (w = p(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.memberInfoWacca2();

                      case 2:
                        if (1 != (t = e.sent).code) {
                            e.next = 18;
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
                        this.dealRateImage(), this.validRate = (this.memberInfo.validDays > 90 ? 90 : this.memberInfo.validDays) / 90 * 100, 
                        this.$apply();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return w.apply(this, arguments);
            })
        }, {
            key: "joinMember",
            value: (y = p(regeneratorRuntime.mark(function e() {
                var t, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, o.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), a.getMemberInfo(), a.$apply();
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
                return y.apply(this, arguments);
            })
        }, {
            key: "startGame",
            value: (v = p(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, n.default.beginGameWacca2(t);

                      case 3:
                        a = e.sent, wx.setStorageSync("isScan", !1), 1 != a.code ? (this.alertTxt = a.message, 
                        this.showAlert = !0) : (wx.showToast({
                            title: "游戏已经开始",
                            icon: "success",
                            duration: 1500
                        }), wx.redirectTo({
                            url: "/wacca2/wacca2-statis?productId=" + this.machineDetail.productId + "&productName=" + this.machineDetail.productName + "&productImage=" + this.machineDetail.image
                        })), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return v.apply(this, arguments);
            })
        }, {
            key: "getTemplateIds",
            value: (d = p(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, s.default.templateIds();

                      case 2:
                        t = e.sent, console.log("模板id", t), this.templateIdList = t.data;

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "subscribeTemplate",
            value: (g = p(regeneratorRuntime.mark(function e(t) {
                var a, n, r, i, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.login();

                      case 2:
                        return a = e.sent, n = a.code, r = c.default.production ? c.default.prod.appid : c.default.dev.appid, 
                        i = {
                            appid: r,
                            code: n,
                            templateIds: t
                        }, console.log("参数", i), e.next = 9, s.default.subscribeTemplate(i);

                      case 9:
                        u = e.sent, console.log("订阅消息模板", u);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return g.apply(this, arguments);
            })
        }, {
            key: "getBanner",
            value: (f = p(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: "4"
                        }, e.next = 3, s.default.adData(t);

                      case 3:
                        0 == (a = e.sent).retCode && (this.list = a.data);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        } ]), l;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(f, "wacca2/wacca2-machine"));
}();