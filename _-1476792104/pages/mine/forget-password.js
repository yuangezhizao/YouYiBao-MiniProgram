function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var s = t[o](a), i = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _md = require("./../../utils/md5.js"), _md2 = _interopRequireDefault(_md), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), forgetPassword = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "修改密码"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default
        }, r.mixins = [], r.data = {
            codeText: "获取验证码",
            phone: "",
            code: "",
            codeLen: "",
            newPassword: "",
            newPasswordLen: "",
            isCaptcha: !1,
            nextStep: !1
        }, r.computed = {}, r.methods = {
            getPhone: function(e) {
                if (this.phone = e.detail.value, !/^1(?:3|4|5|7|8)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                void (this.nextStep = !1);
                this.isCaptcha = !0, this.agree();
            },
            getCode: function(e) {
                this.code = e.detail.value, this.codeLen = e.detail.value.length, this.agree();
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
            getNewPassword: function(e) {
                this.newPassword = e.detail.value, this.newPasswordLen = e.detail.value.length, 
                this.agree();
            },
            confirm: function() {
                this.getUpdatePassword();
            }
        }, r.events = {}, o = n, _possibleConstructorReturn(r, o);
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
            if (this.codeLen < 4 || this.newPasswordLen <= 0) return void (this.nextStep = !1);
            this.nextStep = !0;
        }
    }, {
        key: "getCaptcha",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getCaptcha(this.phone);

                      case 2:
                        t = e.sent, console.log(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUpdatePassword",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = _md2.default.hexMD5(this.newPassword), n = {
                            mobile: this.phone,
                            captcha: this.code,
                            password: t
                        }, e.next = 4, _api2.default.updatePassword(n);

                      case 4:
                        r = e.sent, 0 == r.retCode ? (wx.showToast({
                            title: "密码修改成功",
                            icon: "none"
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3)) : wx.showToast({
                            title: r.message,
                            icon: "none"
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(forgetPassword, "pages/mine/forget-password"));