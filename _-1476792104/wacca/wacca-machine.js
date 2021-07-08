!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
        };
    }(), t = l(require("./../npm/wepy/lib/wepy.js")), n = l(require("./../components/custom-statusbar.js")), a = l(require("./../utils/wacca-api.js")), r = l(require("./../components/custom-dialog.js")), i = l(require("./../components/match-dialog.js")), o = l(require("./../utils/api.js")), s = l(require("./../utils/wechat.js")), c = l(require("./../utils/environment.js")), u = l(require("./../components/custom-progress.js"));
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function p(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function a(r, i) {
                    try {
                        var o = t[r](i), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function h(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function f(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var d = function(t) {
        function l() {
            var e, t, a;
            h(this, l);
            for (var o = arguments.length, s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
            return t = a = f(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(s))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                customStatusbar: {
                    title: "华卡音舞"
                },
                customDialog: {
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
                customProgress: {
                    "xmlns:v-bind": "",
                    "v-bind:days.sync": "days"
                },
                tipsDialog: {
                    "v-bind:isShow.sync": "showScan",
                    title: "温馨提示",
                    "v-bind:content.sync": "scanTxt"
                }
            }, a.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                },
                tipsDialog: {
                    "v-on:confirm": "handleScan",
                    "v-on:close": "handleScan"
                }
            }, a.components = {
                customStatusbar: n.default,
                customDialog: r.default,
                memberDialog: i.default,
                privilegeDialog: i.default,
                customProgress: u.default,
                tipsDialog: r.default
            }, a.mixins = [], a.data = {
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
                scanTxt: ""
            }, a.mixins = [], a.computed = {}, a.methods = {
                startGame: function() {
                    var e = this;
                    wx.requestSubscribeMessage({
                        tmplIds: e.templateIdList,
                        success: function(t) {
                            var n = [];
                            for (var a in t) "accept" == t[a] && n.push(a);
                            e.subscribeTemplate(n);
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
                        url: "/pages/wacca/wacca-vip-recharge"
                    });
                },
                buyGoods: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-shop"
                    });
                },
                buyMember: function() {
                    this.joinMember();
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
                handleError: function() {
                    this.memberInfo.iconUrl = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png";
                }
            }, a.events = {}, f(a, t);
        }
        var d, m, g, v, b, w, y;
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
            }
        }, {
            key: "onShow",
            value: (y = p(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = wx.getStorageSync("isScan"), e.next = 3, this.getMemberInfo();

                      case 3:
                        this.serialNo && this.tag && t ? this.scanCodeWacca() : (this.scanTxt = "二维码已过期，请重新扫码", 
                        this.showScan = !0);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return y.apply(this, arguments);
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
            key: "scanCodeWacca",
            value: (w = p(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, a.default.scanCodeWacca(t);

                      case 3:
                        n = e.sent, this.isLock = !0, 1 != n.code ? (this.alertTxt = n.message, this.showAlert = !0, 
                        this.showPlayGame = !1) : (this.machineDetail = n.data, this.showPlayGame = !0, 
                        this.getTemplateIds()), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return w.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (b = p(regeneratorRuntime.mark(function e() {
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
                return b.apply(this, arguments);
            })
        }, {
            key: "joinMember",
            value: (v = p(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, s.default.payment(t.data.wxpay).then(function(e) {
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
                return v.apply(this, arguments);
            })
        }, {
            key: "startGame",
            value: (g = p(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, a.default.startPlayWacca(t);

                      case 3:
                        n = e.sent, wx.setStorageSync("isScan", !1), 1 != n.code ? (this.alertTxt = n.message, 
                        this.showAlert = !0) : (wx.showToast({
                            title: "游戏已经开始",
                            icon: "success",
                            duration: 1500
                        }), wx.redirectTo({
                            url: "/pages/wacca/wacca-statis?productId=" + this.machineDetail.productId + "&productName=" + this.machineDetail.productName + "&productImage=" + this.machineDetail.image
                        })), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "getTemplateIds",
            value: (m = p(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.templateIds();

                      case 2:
                        t = e.sent, console.log("模板id", t), this.templateIdList = t.data;

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "subscribeTemplate",
            value: (d = p(regeneratorRuntime.mark(function e(t) {
                var n, a, r, i, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, s.default.login();

                      case 2:
                        return n = e.sent, a = n.code, r = c.default.production ? c.default.prod.appid : c.default.dev.appid, 
                        i = {
                            appid: r,
                            code: a,
                            templateIds: t
                        }, console.log("参数", i), e.next = 9, o.default.subscribeTemplate(i);

                      case 9:
                        u = e.sent, console.log("订阅消息模板", u);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return d.apply(this, arguments);
            })
        } ]), l;
    }(t.default.page);
    exports.default = d;
}();