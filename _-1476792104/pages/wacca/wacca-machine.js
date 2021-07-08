function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customProgress = require("./../../components/custom-progress.js"), _customProgress2 = _interopRequireDefault(_customProgress), waccaMachine = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
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
        }, n.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            },
            tipsDialog: {
                "v-on:confirm": "handleScan",
                "v-on:close": "handleScan"
            }
        }, n.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default,
            memberDialog: _matchDialog2.default,
            privilegeDialog: _matchDialog2.default,
            customProgress: _customProgress2.default,
            tipsDialog: _customDialog2.default
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
            scanTxt: ""
        }, n.mixins = [], n.computed = {}, n.methods = {
            startGame: function() {
                var e = this;
                wx.requestSubscribeMessage({
                    tmplIds: e.templateIdList,
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
                    url: "/pages/wacca/wacca-achievement"
                });
            },
            handleError: function() {
                this.memberInfo.iconUrl = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png";
            }
        }, n.events = {}, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.serialNo = e.serialNo, this.tag = e.tag;
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
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
            }));
            return e;
        }()
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
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, _waccaApi2.default.scanCodeWacca(t);

                      case 3:
                        a = e.sent, this.isLock = !0, 1 != a.code ? (this.alertTxt = a.message, this.showAlert = !0, 
                        this.showPlayGame = !1) : (this.machineDetail = a.data, this.showPlayGame = !0, 
                        this.getTemplateIds()), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.memberInfoWacca();

                      case 2:
                        if (t = e.sent, 1 != t.code) {
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
            }));
            return e;
        }()
    }, {
        key: "joinMember",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, _wechat2.default.payment(t.data.wxpay).then(function(e) {
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
            }));
            return e;
        }()
    }, {
        key: "startGame",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, _waccaApi2.default.startPlayWacca(t);

                      case 3:
                        a = e.sent, wx.setStorageSync("isScan", !1), 1 != a.code ? (this.alertTxt = a.message, 
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
                var a, n, r, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wechat2.default.login();

                      case 2:
                        return a = e.sent, n = a.code, r = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        i = {
                            appid: r,
                            code: n,
                            templateIds: t
                        }, console.log("参数", i), e.next = 9, _api2.default.subscribeTemplate(i);

                      case 9:
                        o = e.sent, console.log("订阅消息模板", o);

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaMachine, "pages/wacca/wacca-machine"));