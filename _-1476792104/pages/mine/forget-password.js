!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../utils/api.js")), r = (a(require("./../../utils/environment.js")), 
    a(require("./../../utils/md5.js"))), o = a(require("./../../components/custom-statusbar.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, n;
            s(this, a);
            for (var r = arguments.length, i = Array(r), c = 0; c < r; c++) i[c] = arguments[c];
            return t = n = u(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(i))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "修改密码"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: o.default
            }, n.mixins = [], n.data = {
                codeText: "获取验证码",
                phone: "",
                code: "",
                codeLen: "",
                newPassword: "",
                newPasswordLen: "",
                isCaptcha: !1,
                nextStep: !1
            }, n.computed = {}, n.methods = {
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
            }, n.events = {}, u(n, t);
        }
        var c, l;
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
        }(a, t), e(a, [ {
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
                this.codeLen < 4 || this.newPasswordLen <= 0 ? this.nextStep = !1 : this.nextStep = !0;
            }
        }, {
            key: "getCaptcha",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.getCaptcha(this.phone);

                      case 2:
                        t = e.sent, console.log(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getUpdatePassword",
            value: (c = i(regeneratorRuntime.mark(function e() {
                var t, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = r.default.hexMD5(this.newPassword), o = {
                            mobile: this.phone,
                            captcha: this.code,
                            password: t
                        }, e.next = 4, n.default.updatePassword(o);

                      case 4:
                        0 == (a = e.sent).retCode ? (wx.showToast({
                            title: "密码修改成功",
                            icon: "none"
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3)) : wx.showToast({
                            title: a.message,
                            icon: "none"
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/forget-password"));
}();