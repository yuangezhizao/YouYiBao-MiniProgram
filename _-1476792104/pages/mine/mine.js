function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customTabbar = require("./../../components/custom-tabbar.js"), _customTabbar2 = _interopRequireDefault(_customTabbar), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), Mine = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            userDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "isShow",
                title: "温馨提示",
                type: "getAuth",
                content: "需要授权才能更新头像哦",
                "xmlns:v-on": ""
            }
        }, r.$events = {
            userDialog: {
                "v-on:getAuthHandler": "userLogin"
            }
        }, r.components = {
            customTabbar: _customTabbar2.default,
            userDialog: _customDialog2.default
        }, r.mixins = [], r.data = {
            statusBarHeight: "",
            medalList: [],
            loginText: "登录/注册",
            score: 0,
            coins: 0,
            tickets: 0,
            eamPoint: 0,
            userInfo: "",
            remainTimes: 0,
            check: 0,
            encryptedData: "",
            iv: "",
            isShow: !1
        }, r.computed = {}, r.methods = {
            login: function() {
                if (wx.getStorageSync("token")) {
                    var e = this;
                    wx.showModal({
                        title: "温馨提示",
                        content: "是否退出登录",
                        success: function(t) {
                            t.confirm ? (wx.removeStorageSync("token"), wx.removeStorageSync("userInfo"), e.loginText = "登录/注册", 
                            e.coins = 0, e.score = 0, e.eamPoint = 0, e.tickets = 0, e.remainTimes = 0, e.userInfo = "", 
                            0 != getCurrentPages().length && getCurrentPages()[getCurrentPages().length - 1].onShow()) : t.cancel && console.log("用户点击取消");
                        }
                    });
                } else wx.navigateTo({
                    url: "/pages/mine/login"
                });
            },
            coinRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/coin-record"
                });
            },
            eamRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam"
                });
            },
            integralRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/integral-record"
                });
            },
            ticketRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/ticket-record"
                });
            },
            myMedal: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-medal"
                });
            },
            lottery: function() {
                wx.navigateTo({
                    url: "/pages/mine/lottery"
                });
            },
            medalDetail: function() {
                wx.navigateTo({
                    url: "/pages/mine/medal-detail"
                });
            },
            myCard: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-card"
                });
            },
            mySetMeal: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-set-meal"
                });
            },
            paySetMeal: function() {
                wx.navigateTo({
                    url: "/pages/store/nearby-stores"
                });
            },
            updateAvatar: function() {
                wx.getStorageSync("token") ? this.wxLogin() : wx.navigateTo({
                    url: "/pages/mine/login"
                });
            },
            userLogin: function(e) {
                this.wxLogin();
            }
        }, r.events = {}, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.statusBarHeight = this.$parent.globalData.statusBarHeight, "" == wx.getStorageSync("token") ? (this.loginText = "登录/注册", 
            this.userInfo = "") : (this.userInfo = wx.getStorageSync("userInfo"), this.findScoreCoin(), 
            this.getLotteryTimes(), this.getMyHotGameList(), this.loginText = "退出");
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
                        t = e.sent, t && (this.coins = t.coin, this.score = t.score, this.eamPoint = t.point, 
                        this.tickets = t.ticket, this.check = t.check, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getTicket",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = wx.getStorageSync("memberInfo"), e.next = 3, _api2.default.myTicket({
                            orgin: "weapp",
                            param: JSON.stringify({
                                u_id: t.id ? t.id : 192943
                            }),
                            u_id: t.id ? t.id : 192943
                        });

                      case 3:
                        n = e.sent, n && (this.tickets = n.data.MGL_Num_Count, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getLotteryTimes",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.lotteryTimes();

                      case 2:
                        t = e.sent, 1 == t.code && (this.remainTimes = t.data.remainTimes, this.$apply()), 
                        console.log("获取奖票次数", t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMyHotGameList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.myHotGameList(t);

                      case 3:
                        n = e.sent, 1 == n.code && (this.medalList = n.data, this.medalList.map(function(e) {
                            e.medalImage = "http://yyb-oss.universal-space.cn/imgs/mine/medal/" + e.productModel + ".png";
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
        key: "wxLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        e.next = 3, _wechat2.default.login();

                      case 3:
                        return n = e.sent, r = n.code, e.prev = 5, e.next = 8, _wechat2.default.getUserInfo();

                      case 8:
                        a = e.sent, this.encryptedData = a.encryptedData, this.iv = a.iv, this.isShow = !1, 
                        this.$apply(), e.next = 19;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(5), this.isShow = !0, this.$apply();

                      case 19:
                        return i = {
                            appid: t,
                            code: r,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 22, _api2.default.wxLogin(i);

                      case 22:
                        o = e.sent, 1 == o.code && this.weappLogin();

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 5, 15 ] ]);
            }));
            return e;
        }()
    }, {
        key: "weappLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wechat2.default.login();

                      case 2:
                        return t = e.sent, n = t.code, r = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        a = {
                            appid: r,
                            code: n
                        }, e.next = 8, _api2.default.weappLogin(a);

                      case 8:
                        i = e.sent, 1 == i.code && (wx.setStorageSync("token", i.data.token), wx.setStorageSync("userInfo", i.data.user), 
                        0 != getCurrentPages().length && getCurrentPages()[getCurrentPages().length - 1].onShow());

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Mine, "pages/mine/mine"));