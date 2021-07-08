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
                    var s = t[a](i), o = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), machineDance = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "舞律炫步"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            },
            tipsDialog: {
                "v-bind:isShow.sync": "showScan",
                title: "温馨提示",
                "v-bind:content.sync": "scanTxt"
            }
        }, r.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            },
            tipsDialog: {
                "v-on:confirm": "handleScan",
                "v-on:close": "handleScan"
            }
        }, r.components = {
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default,
            tipsDialog: _customDialog2.default
        }, r.data = {
            cardCur: 0,
            serialNo: "",
            tag: "",
            memberState: "",
            machineDetail: "",
            alertTxt: "",
            showAlert: !1,
            showExc: !1,
            memberTypeList: [ {
                song: 15,
                awaitSong: 0,
                name: "游客",
                price: 0
            }, {
                song: 38,
                awaitSong: 20,
                name: "试用会员",
                price: 0
            }, {
                song: 38,
                awaitSong: 20,
                name: "基本会员",
                price: 15,
                halfYearPrice: 60
            }, {
                song: 71,
                name: "特别会员",
                price: 50
            }, {
                song: 53,
                awaitSong: 26,
                name: "VIP会员",
                price: 30,
                halfYearPrice: 120
            } ],
            consumePoint: 0,
            exchangeDays: 30,
            exchangeType: 1,
            selectType: 1,
            showPlayGame: !1,
            isLock: !1,
            isConfirm: !1,
            isScan: "",
            templateIdList: [],
            showScan: !1,
            scanTxt: ""
        }, r.mixins = [ _userMixin2.default ], r.methods = {
            cardSwiper: function(e) {
                this.cardCur = e.detail.current;
            },
            swiperChange: function(e) {
                this.cardCur = e;
            },
            rechargeEamPoint: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam"
                }), this.isConfirm = !1;
            },
            close: function() {
                this.showExc = !1, this.isConfirm = !1;
            },
            confirm: function() {
                this.showAlert = !1;
            },
            handleScan: function() {
                wx.reLaunch({
                    url: "/pages/index/scan"
                });
            },
            freeMember: function() {
                this.trialMember();
            },
            start: function() {
                if (0 == this.memberState.memberType) return this.alertTxt = "请先成为机台会员", void (this.showAlert = !0);
                var e = this;
                wx.requestSubscribeMessage({
                    tmplIds: e.templateIdList,
                    success: function(t) {
                        var n = [];
                        for (var r in t) "accept" == t[r] && n.push(r);
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
            exchange: function(e, t) {
                if (this.memberState.remainPoint < 1) return void (this.isConfirm = !0);
                this.selectType = e, this.exchangeType = t, this.getExchangeInfo(e, t);
            },
            exchangeDance: function() {
                if (this.memberState.remainPoint < this.consumePoint) return this.isConfirm = !0, 
                void (this.showExc = !1);
                this.exchangeMember(this.selectType, this.exchangeType);
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.serialNo = e.serialNo, this.tag = e.tag, this.isScan = e.isScan, this.getTemplateIds();
        }
    }, {
        key: "onShow",
        value: function() {
            var e = wx.getStorageSync("isScan");
            0 == this.isScan && this.getMemberState(), e || 0 == this.isScan ? this.scanCodeDance() : (this.scanTxt = "二维码已过期，请重新扫码", 
            this.showScan = !0);
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
        key: "onReachBottom",
        value: function() {}
    }, {
        key: "getMemberState",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _konamiApi2.default.getMemberInfoDance();

                      case 2:
                        t = e.sent, t && (1 !== t.code ? (this.alertTxt = t.message, this.showAlert = !0) : (this.memberState = t.data, 
                        t.data.membershipList.forEach(function(e) {
                            n.memberTypeList[e.id].price = e.point, n.memberTypeList[e.id].days = e.days;
                        }), 2 == this.memberState.memberType ? this.cardCur = 1 : 4 == this.memberState.memberType ? this.cardCur = 2 : this.cardCur = 0)), 
                        this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "scanCodeDance",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.serialNo) {
                            e.next = 8;
                            break;
                        }
                        return t = {
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 4, _konamiApi2.default.scanCodeDance(t);

                      case 4:
                        n = e.sent, this.isLock = !0, 1 !== n.code ? (this.alertTxt = n.message, this.showAlert = !0, 
                        this.showPlayGame = !1) : (this.machineDetail = n.data, this.showPlayGame = !0, 
                        this.getMemberState()), this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "trialMember",
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
                            serialNo: this.serialNo ? this.serialNo : "",
                            tag: this.tag ? this.tag : ""
                        }, e.next = 3, _konamiApi2.default.trialMemberDance(t);

                      case 3:
                        n = e.sent, n && (1 !== n.code ? (this.alertTxt = n.message, this.showAlert = !0) : this.getMemberState()), 
                        this.$apply();

                      case 6:
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
                var t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            paymentType: r,
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, _konamiApi2.default.startPlayDance(t);

                      case 3:
                        n = e.sent, wx.setStorageSync("isScan", !1), 1 !== n.code ? (this.alertTxt = n.message, 
                        this.showAlert = !0) : (wx.showToast({
                            title: "游戏已经开始",
                            icon: "success",
                            duration: 1500
                        }), this.showPlayGame = !1, this.getMemberState(), wx.redirectTo({
                            url: "/pages/record/dance-statis?productId=" + this.machineDetail.productId + "&productName=" + this.machineDetail.productName + "&productImage=" + this.machineDetail.image
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
        key: "getExchangeInfo",
        value: function() {
            function e(e, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            membershipType: t,
                            exchangeType: n
                        }, e.next = 3, _konamiApi2.default.preExchangeMemberDance(r);

                      case 3:
                        a = e.sent, a && (1 !== a.code ? (this.alertTxt = a.message, this.showAlert = !0) : (this.consumePoint = a.data.consumePoint, 
                        this.exchangeDays = a.data.validDays, this.showExc = !0)), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "exchangeMember",
        value: function() {
            function e(e, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            serialNo: this.serialNo ? this.serialNo : "",
                            tag: this.tag ? this.tag : "",
                            membershipType: t,
                            exchangeType: n
                        }, e.next = 3, _konamiApi2.default.exchangeMemberDance(r);

                      case 3:
                        a = e.sent, a && (1 !== a.code ? (this.alertTxt = a.message, this.showAlert = !0) : (this.showExc = !1, 
                        this.getMemberState())), this.$apply();

                      case 6:
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
                var n, r, a, i, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wechat2.default.login();

                      case 2:
                        return n = e.sent, r = n.code, a = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        i = {
                            appid: a,
                            code: r,
                            templateIds: t
                        }, console.log("参数", i), e.next = 9, _api2.default.subscribeTemplate(i);

                      case 9:
                        s = e.sent, console.log("订阅消息模板", s);

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(machineDance, "pages/machine/machine-dance"));