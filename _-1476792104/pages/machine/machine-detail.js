!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, i, a) {
            return i && e(t.prototype, i), a && e(t, a), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), i = o(require("./../../utils/wechat.js")), a = o(require("./../../utils/api.js")), s = o(require("./../../utils/environment.js")), n = o(require("./../../mixins/user-mixin.js")), r = o(require("./../../components/custom-statusbar.js")), c = o(require("./../../components/custom-dialog.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, i) {
                return function a(s, n) {
                    try {
                        var r = t[s](n), c = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(c).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function h(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(t) {
        function o() {
            var e, t, i;
            l(this, o);
            for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
            return t = i = h(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                customStatusbar: {
                    title: "机台详情"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showSubscribe",
                    title: "温馨提示",
                    "v-bind:content.sync": "subscribeString",
                    "xmlns:v-on": ""
                }
            }, i.$events = {
                customDialog: {
                    "v-on:confirm": "onSubscribe"
                }
            }, i.components = {
                customStatusbar: r.default,
                customDialog: c.default
            }, i.mixins = [ n.default ], i.data = {
                showSubscribe: !1,
                subscribeString: "点击获取游戏成绩推送",
                serialNo: "",
                tag: "",
                cionPay: !1,
                pricePay: !1,
                cionPackagePay: !1,
                pricePackagePay: !1,
                machineDetail: "",
                userAssets: "",
                singlePrice: 0,
                signleCoin: 0,
                payPrice: 0,
                payCoin: 0,
                playTimes: 1,
                payType: 4,
                isFree: !1,
                isLottery: !1,
                showAlert: !1,
                alertTxt: "",
                coinCurrentTab: 0,
                priceCurrentTab: 0,
                machinePackageList: [],
                packageTotalCoin: 0,
                packagePlayTimes: 0,
                packageId: 0,
                packagePrice: 0,
                pricePlayTimes: 0,
                showGuide: !1,
                isJackpot: !1,
                firstShowGuide: !1,
                showTips: !1,
                prizeList: [],
                templateIdList: []
            }, i.computed = {}, i.methods = {
                rechargeCoin: function() {
                    wx.navigateTo({
                        url: "/pages/machine/recharge-coin?coin=" + this.userAssets.coin
                    });
                },
                onSubscribe: function() {
                    var e = this;
                    this.showSubscribe = !1, wx.requestSubscribeMessage({
                        tmplIds: e.templateIdList,
                        success: function(t) {
                            var i = [];
                            for (var a in t) "accept" == t[a] && i.push(a);
                            e.subscribeTemplate(i), e.showSubscribe = !1;
                        },
                        fail: function(t) {
                            console.error("这是订阅消息err", t), e.showSubscribe = !1;
                        },
                        complete: function() {
                            e.showSubscribe = !1;
                        }
                    });
                },
                payCoin: function() {
                    if (this.userAssets.coin <= 0) wx.showToast({
                        title: "游点不足，请充值",
                        icon: "none"
                    }); else {
                        var e = this;
                        wx.requestSubscribeMessage({
                            tmplIds: e.templateIdList,
                            success: function(t) {
                                var i = [];
                                for (var a in t) "accept" == t[a] && i.push(a);
                                e.subscribeTemplate(i);
                            },
                            fail: function(e) {
                                console.error("这是订阅消息err", e);
                            },
                            complete: function() {
                                null != e.machinePackageList ? e.cionPackagePay = !0 : e.cionPay = !0, e.payType = 4, 
                                e.$apply();
                            }
                        });
                    }
                },
                close: function() {
                    this.cionPay = !1, this.pricePay = !1, this.playTimes = 1, this.payCoin = this.signleCoin, 
                    this.payPrice = this.singlePrice, this.cionPackagePay = !1, this.pricePackagePay = !1, 
                    this.showTips = !1;
                },
                add: function() {
                    this.playTimes++, this.payCoin = Math.ceil(Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) * Number(this.machineDetail.coinExchange) / 100);
                },
                down: function() {
                    this.playTimes <= 1 ? this.playTimes = 1 : (this.playTimes--, this.payCoin = Math.ceil(Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) * Number(this.machineDetail.coinExchange) / 100));
                },
                payPrice: function() {
                    var e = this;
                    wx.requestSubscribeMessage({
                        tmplIds: e.templateIdList,
                        success: function(t) {
                            var i = [];
                            for (var a in t) "accept" == t[a] && i.push(a);
                            e.subscribeTemplate(i);
                        },
                        fail: function(e) {
                            console.error("这是订阅消息err", e);
                        },
                        complete: function() {
                            null != e.machinePackageList ? e.pricePackagePay = !0 : e.pricePay = !0, e.payType = 5, 
                            e.$apply();
                        }
                    });
                },
                add_1: function() {
                    this.playTimes++, this.payPrice = Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) / 100;
                },
                down_1: function() {
                    this.playTimes <= 1 ? this.playTimes = 1 : (this.playTimes--, this.payPrice = Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) / 100);
                },
                confirmPay: function() {
                    this.createOrder();
                },
                payFree: function() {
                    console.log("点了免费体验");
                    var e = this, t = [];
                    wx.requestSubscribeMessage({
                        tmplIds: e.templateIdList,
                        success: function(e) {
                            for (var i in console.log("成功"), e) "accept" == e[i] && t.push(i);
                        },
                        fail: function(e) {
                            console.error("这是订阅消息err", e);
                        },
                        complete: function() {
                            console.log("完成"), e.subscribeTemplate(t), e.payType = 0, e.createOrder(), e.$apply();
                        }
                    });
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                cionPackage: function(e, t) {
                    this.coinCurrentTab = e, this.packageTotalCoin = t.totalCoin, this.packagePlayTimes = t.playTimes, 
                    this.packageId = t.id, this.playTimes = t.playTimes;
                },
                pricePackage: function(e, t) {
                    this.priceCurrentTab = e, this.packagePrice = t.price, this.pricePlayTimes = t.playTimes, 
                    this.packageId = t.id, this.playTimes = this.pricePlayTimes;
                },
                getCoinPlayTimes: function(e) {
                    this.playTimes = e.detail.value, this.payCoin = Math.ceil(Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) * Number(this.machineDetail.coinExchange) / 100);
                },
                getPricePlayTimes: function(e) {
                    this.playTimes = e.detail.value, this.payPrice = Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) / 100;
                },
                showGuide: function() {
                    this.showGuide = !0;
                },
                closeGuide: function() {
                    this.showGuide = !1, wx.setStorageSync("showGuide", !1);
                },
                showTips: function() {
                    "" == this.prizeList ? this.myEventDetail() : this.showTips = !0;
                },
                jackpotDetail: function() {
                    wx.navigateTo({
                        url: "/pages/match/activity?eventId=" + this.machineDetail.lastEventId
                    }), this.showTips = !1;
                }
            }, i.events = {}, h(i, t);
        }
        var p, m, y, f, g, d, b;
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                console.log("机台信息", e), this.serialNo = e.serialNo, this.tag = e.tag, this.getTemplateIds();
            }
        }, {
            key: "onShow",
            value: function() {
                this.firstShowGuide = wx.getStorageSync("showGuide");
                wx.getStorageSync("token");
                this.getMachineDetail(), console.log("来了来了"), this.jungleAlertSubscribe();
            }
        }, {
            key: "jungleAlertSubscribe",
            value: function() {
                var e = JSON.stringify(this.userInfo);
                this.userInfo || (console.log("=====" + e), this.showSubscribe = !0);
            }
        }, {
            key: "onHide",
            value: function() {
                wx.hideKeyboard();
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
            key: "getMachineDetail",
            value: (b = u(regeneratorRuntime.mark(function e() {
                var t, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, a.default.machineInfo(t);

                      case 3:
                        1 == (i = e.sent).code ? (console.log(i), this.machineDetail = i.data, this.singlePrice = Number(i.data.coinQty) * Number(this.playTimes) * Number(i.data.coinPrice) / 100, 
                        this.signleCoin = Math.ceil(Number(i.data.coinQty) * Number(this.playTimes) * Number(i.data.coinPrice) * Number(i.data.coinExchange) / 100), 
                        this.payCoin = this.signleCoin, this.payPrice = this.singlePrice, 0 == this.singlePrice && (this.isFree = !0), 
                        this.machinePackageList = i.data.mnsMachinePackageList, null != this.machinePackageList ? (this.machinePackageList.map(function(e) {
                            e.totalCoin = Number(e.totalCoin) * Number(i.data.coinPrice) * Number(i.data.coinExchange) / 100, 
                            e.price = Number(e.totalCoin) * Number(i.data.coinPrice) / 10;
                        }), this.packagePlayTimes = i.data.mnsMachinePackageList[0].playTimes, this.pricePlayTimes = i.data.mnsMachinePackageList[0].playTimes, 
                        this.packageTotalCoin = i.data.mnsMachinePackageList[0].totalCoin, this.packagePrice = i.data.mnsMachinePackageList[0].price, 
                        this.packageId = i.data.mnsMachinePackageList[0].id, this.playTimes = this.machinePackageList[0].playTimes) : this.playTimes = 1, 
                        this.firstShowGuide && (this.showGuide = !0), i.data.lastEventId > 0 && (this.isJackpot = !0), 
                        this.findScoreCoin(), this.$apply()) : (this.isShow = !0, this.content = i.message, 
                        this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return b.apply(this, arguments);
            })
        }, {
            key: "findScoreCoin",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.findScoreCoin();

                      case 2:
                        (t = e.sent) && (console.log("游点积分", t), this.userAssets = t, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "createOrder",
            value: (g = u(regeneratorRuntime.mark(function e() {
                var t, s, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag,
                            playTimes: this.playTimes,
                            payType: this.payType,
                            packageId: this.packageId
                        }, e.prev = 1, e.next = 4, a.default.machineCreateOrder(t);

                      case 4:
                        s = e.sent, console.log(s), s && (1 == s.code ? 4 == this.payType ? (this.cionPay = !1, 
                        this.cionPackagePay = !1, this.playTimes = 1, console.log("游点支付"), this.machineOrderLottery(s.data.orderNo), 
                        this.$apply()) : 5 == this.payType ? i.default.payment(s.data.wxpay).then(function(e) {
                            console.log("微信支付"), n.pricePay = !1, n.pricePackagePay = !1, n.playTimes = 1, n.machineOrderLottery(s.data.orderNo), 
                            n.$apply();
                        }).catch(function(e) {
                            console.log("支付失败", e), wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }) : 0 == this.payType && this.$apply() : (this.showAlert = !0, this.alertTxt = s.message, 
                        this.$apply())), e.next = 16;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(1), console.log(e.t0), this.isPosting = !1, this.showAlert = !0, 
                        this.alertTxt = "创建订单失败！", this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 9 ] ]);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "machineOrderLottery",
            value: (f = u(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.machineOrderLottery({
                            orderNo: t
                        });

                      case 2:
                        1 == e.sent.code ? this.isLottery = !0 : this.isLottery = !1, wx.navigateTo({
                            url: "/pages/machine/pay-success?isLottery=" + this.isLottery
                        }), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return f.apply(this, arguments);
            })
        }, {
            key: "myEventDetail",
            value: (y = u(regeneratorRuntime.mark(function e() {
                var t, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 6,
                            eventId: this.machineDetail.lastEventId
                        }, e.next = 3, a.default.myEventDetail(t);

                      case 3:
                        1 == (i = e.sent).code && (this.prizeList = i.data.prizeList, this.showTips = !0, 
                        this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return y.apply(this, arguments);
            })
        }, {
            key: "getTemplateIds",
            value: (m = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.templateIds();

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
            value: (p = u(regeneratorRuntime.mark(function e(t) {
                var n, r, c, o, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.default.login();

                      case 2:
                        return n = e.sent, r = n.code, c = s.default.production ? s.default.prod.appid : s.default.dev.appid, 
                        o = {
                            appid: c,
                            code: r,
                            templateIds: t
                        }, console.log("参数", o), e.next = 9, a.default.subscribeTemplate(o);

                      case 9:
                        u = e.sent, console.log("订阅消息模板", u);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return p.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/machine/machine-detail"));
}();