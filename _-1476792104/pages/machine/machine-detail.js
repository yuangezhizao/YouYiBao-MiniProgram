function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, i) {
            function a(n, s) {
                try {
                    var r = t[n](s), o = r.value;
                } catch (e) {
                    return void i(e);
                }
                if (!r.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
            }
            return a("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), machineDetail = function(e) {
    function t() {
        var e, i, a, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, r = Array(s), o = 0; o < s; o++) r[o] = arguments[o];
        return i = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            customStatusbar: {
                title: "机台详情"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, a.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, a.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, a.mixins = [ _userMixin2.default ], a.data = {
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
        }, a.computed = {}, a.methods = {
            rechargeCoin: function() {
                wx.navigateTo({
                    url: "/pages/machine/recharge-coin?coin=" + this.userAssets.coin
                });
            },
            payCoin: function() {
                if (this.userAssets.coin <= 0) return void wx.showToast({
                    title: "游点不足，请充值",
                    icon: "none"
                });
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
                if (this.playTimes <= 1) return void (this.playTimes = 1);
                this.playTimes--, this.payCoin = Math.ceil(Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) * Number(this.machineDetail.coinExchange) / 100);
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
                if (this.playTimes <= 1) return void (this.playTimes = 1);
                this.playTimes--, this.payPrice = Number(this.machineDetail.coinQty) * Number(this.playTimes) * Number(this.machineDetail.coinPrice) / 100;
            },
            confirmPay: function() {
                this.createOrder();
            },
            payFree: function() {
                console.log("点了免费体验");
                var e = this;
                wx.requestSubscribeMessage({
                    tmplIds: e.templateIdList,
                    success: function(e) {
                        var t = [];
                        for (var i in e) "accept" == e[i] && t.push(i);
                    },
                    fail: function(e) {
                        console.error("这是订阅消息err", e);
                    },
                    complete: function() {
                        e.subscribeTemplate(newTemplateIdList), e.payType = 0, e.createOrder(), e.$apply();
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
                if ("" != this.prizeList) return void (this.showTips = !0);
                this.myEventDetail();
            },
            jackpotDetail: function() {
                wx.navigateTo({
                    url: "/pages/match/activity?eventId=" + this.machineDetail.lastEventId
                }), this.showTips = !1;
            }
        }, a.events = {}, n = i, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log("机台信息", e), this.serialNo = e.serialNo, this.tag = e.tag, this.getTemplateIds();
        }
    }, {
        key: "onShow",
        value: function() {
            this.firstShowGuide = wx.getStorageSync("showGuide");
            wx.getStorageSync("token");
            this.getMachineDetail();
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
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, _api2.default.machineInfo(t);

                      case 3:
                        i = e.sent, 1 == i.code ? (console.log(i), this.machineDetail = i.data, this.singlePrice = Number(i.data.coinQty) * Number(this.playTimes) * Number(i.data.coinPrice) / 100, 
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
            }));
            return e;
        }()
    }, {
        key: "findScoreCoin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.findScoreCoin();

                      case 2:
                        t = e.sent, t && (console.log("游点积分", t), this.userAssets = t, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "createOrder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, i, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag,
                            playTimes: this.playTimes,
                            payType: this.payType,
                            packageId: this.packageId
                        }, e.prev = 1, e.next = 4, _api2.default.machineCreateOrder(t);

                      case 4:
                        i = e.sent, console.log(i), i && (1 == i.code ? 4 == this.payType ? (this.cionPay = !1, 
                        this.cionPackagePay = !1, this.playTimes = 1, console.log("游点支付"), this.machineOrderLottery(i.data.orderNo), 
                        this.$apply()) : 5 == this.payType ? _wechat2.default.payment(i.data.wxpay).then(function(e) {
                            console.log("微信支付"), a.pricePay = !1, a.pricePackagePay = !1, a.playTimes = 1, a.machineOrderLottery(i.data.orderNo), 
                            a.$apply();
                        }).catch(function(e) {
                            console.log("支付失败", e), wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }) : 0 == this.payType && this.$apply() : (this.showAlert = !0, this.alertTxt = i.message, 
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
            }));
            return e;
        }()
    }, {
        key: "machineOrderLottery",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.machineOrderLottery({
                            orderNo: t
                        });

                      case 2:
                        i = e.sent, 1 == i.code ? this.isLottery = !0 : this.isLottery = !1, wx.navigateTo({
                            url: "/pages/machine/pay-success?isLottery=" + this.isLottery
                        }), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "myEventDetail",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 6,
                            eventId: this.machineDetail.lastEventId
                        }, e.next = 3, _api2.default.myEventDetail(t);

                      case 3:
                        i = e.sent, 1 == i.code && (this.prizeList = i.data.prizeList, this.showTips = !0, 
                        this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getTemplateIds",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.templateIds();

                      case 2:
                        t = e.sent, console.log("模板id", t), this.templateIdList = t.data;

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "subscribeTemplate",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var i, a, n, s, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wechat2.default.login();

                      case 2:
                        return i = e.sent, a = i.code, n = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        s = {
                            appid: n,
                            code: a,
                            templateIds: t
                        }, console.log("参数", s), e.next = 9, _api2.default.subscribeTemplate(s);

                      case 9:
                        r = e.sent, console.log("订阅消息模板", r);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(machineDetail, "pages/machine/machine-detail"));