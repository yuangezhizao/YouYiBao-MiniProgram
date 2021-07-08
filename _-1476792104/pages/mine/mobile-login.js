function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _md = require("./../../utils/md5.js"), _md2 = _interopRequireDefault(_md), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), mobileLogin = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "账号登录"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default
        }, r.mixins = [], r.data = {
            passwordLogin: !0,
            codeText: "获取验证码",
            isCaptcha: !1,
            phone: "",
            phoneLen: "",
            password: "",
            code: "",
            passwordLen: 0,
            codeLen: 0,
            nextStep: !1,
            smsNextStep: !1,
            isShow: !1,
            encryptedData: "",
            iv: ""
        }, r.computed = {}, r.methods = {
            loginType: function() {
                this.passwordLogin ? this.passwordLogin = !1 : this.passwordLogin = !0, this.nextStep = !1, 
                this.agree();
            },
            goBack: function() {
                wx.navigateBack({
                    delta: 1
                });
            },
            goAgreement: function() {
                wx.navigateTo({
                    url: "/pages/mine/agreement"
                });
            },
            getCaptcha: function() {
                var e = this, t = 60;
                if (!this.data.codeText.includes("s")) {
                    this.getCaptcha();
                    var n = function() {
                        e.codeText = t + "s", t--, e.$apply(), t < -1 && (clearInterval(e.timer), e.codeText = "重获验证码", 
                        e.$apply());
                    };
                    n(), this.timer = setInterval(n, 1e3);
                }
            },
            getPhone: function(e) {
                if (this.phone = e.detail.value, this.phoneLen = e.detail.cursor, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                this.nextStep = !1, void (this.smsNextStep = !1);
                this.isCaptcha = !0, this.agree(), this.smsAgree();
            },
            getPassword: function(e) {
                this.password = e.detail.value, this.passwordLen = e.detail.value.length, this.agree();
            },
            getCode: function(e) {
                this.code = e.detail.value, this.codeLen = e.detail.value.length, this.smsAgree();
            },
            passwordLogin: function() {
                this.getMemberLogin();
            },
            smsLogin: function() {
                this.smsLogin();
            },
            forgetPassword: function() {
                wx.navigateTo({
                    url: "/pages/mine/forget-password"
                });
            },
            userLogin: function() {
                this.wxLogin();
            }
        }, r.events = {}, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {}
    }, {
        key: "onShow",
        value: function() {}
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
        key: "agree",
        value: function() {
            if (1 == this.passwordLogin && 11 == this.phoneLen) {
                if (this.passwordLen <= 0) return void (this.nextStep = !1);
                this.nextStep = !0;
            }
        }
    }, {
        key: "smsAgree",
        value: function() {
            if (!this.isCaptcha || this.codeLen < 4) return void (this.smsNextStep = !1);
            this.smsNextStep = !0;
        }
    }, {
        key: "getCaptcha",
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
                            mobile: this.phone
                        }, e.next = 3, _api2.default.getCaptcha(this.phone);

                      case 3:
                        n = e.sent, console.log(n);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _md2.default.hexMD5(this.password), n = {
                            mobile: this.phone,
                            password: t
                        }, e.next = 4, _api2.default.loginPassword(n);

                      case 4:
                        r = e.sent;
                        try {
                            wx.setStorageSync("token", r.data.token), wx.setStorageSync("userInfo", r.data), 
                            this.weappLoginBind(), this.$apply();
                        } catch (e) {
                            wx.showToast({
                                title: r.retMsg,
                                icon: "none",
                                duration: 3e3
                            });
                        }

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "smsLogin",
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
                            mobile: this.phone,
                            captcha: this.code
                        }, e.next = 3, _api2.default.loginUser(t);

                      case 3:
                        n = e.sent;
                        try {
                            wx.setStorageSync("token", n.data.token), wx.setStorageSync("userInfo", n.data), 
                            this.weappLoginBind(), this.$apply();
                        } catch (e) {
                            wx.showToast({
                                title: n.retMsg,
                                icon: "none",
                                duration: 3e3
                            });
                        }

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getCardDetail",
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
                            vipstore: 11111,
                            membernumber: 22222
                        }, e.next = 3, _api2.default.vipCardInfo(t);

                      case 3:
                        n = e.sent, console.log(n), 1 == n.code && (console.log("执行了这里"), wx.setStorageSync("memberInfo", n.data), 
                        this.$apply()), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "weappLoginBind",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        e.next = 3, _wechat2.default.login();

                      case 3:
                        return n = e.sent, r = n.code, a = {
                            appid: t,
                            code: r
                        }, e.next = 8, _api2.default.weappLoginBind(a);

                      case 8:
                        o = e.sent, 1 == o.code ? wx.navigateBack({
                            delta: 2
                        }) : this.wxLogin(), console.log(o);

                      case 11:
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
                var t, n, r, a, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        e.next = 3, _wechat2.default.login();

                      case 3:
                        return n = e.sent, r = n.code, console.log("重新调用login获取code", r), e.prev = 6, e.next = 9, 
                        _wechat2.default.getUserInfo();

                      case 9:
                        a = e.sent, this.encryptedData = a.encryptedData, this.iv = a.iv, this.isShow = !1, 
                        this.$apply(), e.next = 22;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(6), wx.clearStorageSync(), this.isShow = !0, wx.hideTabBar(), 
                        this.$apply();

                      case 22:
                        return o = {
                            appid: t,
                            code: r,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 25, _api2.default.wxLogin(o);

                      case 25:
                        i = e.sent, console.log("wxLogin", i), 1 == i.code && wx.navigateBack({
                            delta: 2
                        });

                      case 28:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 6, 16 ] ]);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(mobileLogin, "pages/mine/mobile-login"));