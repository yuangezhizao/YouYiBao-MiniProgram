function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, a) {
                try {
                    var i = t[r](a), s = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(s);
            }
            return o("next");
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
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), Login = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationStyle: "custom"
        }, o.$repeat = {}, o.$props = {
            customStatusbar: {
                title: "登录"
            },
            phoneDialog: {
                "v-bind:isShow.sync": "getPhone",
                title: "温馨提示",
                type: "phoneAuth",
                content: "需要授权手机号码才能正常使用哦"
            },
            userDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "getInfo",
                title: "温馨提示",
                type: "getAuth",
                content: "需要授权才能正常使用哦",
                "xmlns:v-on": ""
            }
        }, o.$events = {
            phoneDialog: {
                "v-on:getPhoneNumber": "getPhone"
            },
            userDialog: {
                "v-on:getAuthHandler": "userLogin"
            }
        }, o.components = {
            customStatusbar: _customStatusbar2.default,
            phoneDialog: _customDialog2.default,
            userDialog: _customDialog2.default
        }, o.mixins = [], o.data = {
            getPhone: !1,
            getInfo: !1,
            phoneEncryptedData: "",
            phoneIv: "",
            encryptedData: "",
            iv: ""
        }, o.computed = {}, o.methods = {
            quickLogin: function() {
                this.weappLogin();
            },
            mobileLogin: function() {
                wx.navigateTo({
                    url: "/pages/mine/mobile-login"
                });
            },
            getPhone: function(e) {
                console.log("手机号", e), this.phoneEncryptedData = e.detail.encryptedData, this.phoneIv = e.detail.iv, 
                this.bindLogin();
            },
            userLogin: function(e) {
                console.log("abc", e), this.wxLogin();
            },
            goAgreement: function() {
                wx.navigateTo({
                    url: "/pages/mine/agreement"
                });
            }
        }, o.events = {}, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            wx.setStorageSync("firstTime", !0);
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
        key: "weappLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, o, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wechat2.default.login();

                      case 2:
                        return t = e.sent, n = t.code, console.log("首次调用code", n), o = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        r = {
                            appid: o,
                            code: n
                        }, e.next = 9, _api2.default.weappLogin(r);

                      case 9:
                        a = e.sent, console.log(a), 1 == a.code && (wx.setStorageSync("token", a.data.token), 
                        wx.setStorageSync("userInfo", a.data.user), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)), 401 == a.code && this.wxLogin(), 402 == a.code && (this.getPhone = !0, 
                        this.$apply());

                      case 14:
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
                var t, n, o, r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        e.next = 3, _wechat2.default.login();

                      case 3:
                        return n = e.sent, e.prev = 4, o = n.code, console.log("重新调用login获取code", o), e.next = 9, 
                        _wechat2.default.getUserInfo();

                      case 9:
                        r = e.sent, this.encryptedData = r.encryptedData, this.iv = r.iv, this.getInfo = !1, 
                        this.$apply(), e.next = 22;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(4), wx.clearStorageSync(), this.getInfo = !0, wx.hideTabBar(), 
                        this.$apply();

                      case 22:
                        return a = {
                            appid: t,
                            code: o,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 25, _api2.default.wxLogin(a);

                      case 25:
                        i = e.sent, console.log("wxLogin", i), 1 == i.code && (console.log("执行了这里"), this.getPhone = !0, 
                        this.$apply());

                      case 28:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 4, 16 ] ]);
            }));
            return e;
        }()
    }, {
        key: "bindLogin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, o, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _environment2.default.production ? _environment2.default.prod.appid : _environment2.default.dev.appid, 
                        e.next = 3, _wechat2.default.login();

                      case 3:
                        return n = e.sent, o = n.code, console.log("第三次调用login获取code", o), r = {
                            appid: t,
                            code: o,
                            encryptedData: this.phoneEncryptedData,
                            iv: this.phoneIv
                        }, e.next = 9, _api2.default.weappBind(r);

                      case 9:
                        a = e.sent, 1 == a.code ? (wx.setStorageSync("token", a.data.token), wx.setStorageSync("userInfo", a.data.user), 
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)) : wx.showToast({
                            title: a.message,
                            icon: "none"
                        }), console.log("小程序绑定登录", a);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Login, "pages/mine/login"));