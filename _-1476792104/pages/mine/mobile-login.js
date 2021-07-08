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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../utils/api.js")), r = s(require("./../../utils/environment.js")), a = s(require("./../../utils/md5.js")), o = s(require("./../../utils/wechat.js")), i = s(require("./../../components/custom-statusbar.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, o) {
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
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function s() {
            var e, t, n;
            c(this, s);
            for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return t = n = p(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(a))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "账号登录"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: i.default
            }, n.mixins = [], n.data = {
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
            }, n.computed = {}, n.methods = {
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
            }, n.events = {}, p(n, t);
        }
        var l, h, d, f, g, w;
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
        }(s, t), e(s, [ {
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
                !this.isCaptcha || this.codeLen < 4 ? this.smsNextStep = !1 : this.smsNextStep = !0;
            }
        }, {
            key: "getCaptcha",
            value: (w = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.phone, e.next = 3, n.default.getCaptcha(this.phone);

                      case 3:
                        t = e.sent, console.log(t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return w.apply(this, arguments);
            })
        }, {
            key: "getMemberLogin",
            value: (g = u(regeneratorRuntime.mark(function e() {
                var t, r, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = a.default.hexMD5(this.password), r = {
                            mobile: this.phone,
                            password: t
                        }, e.next = 4, n.default.loginPassword(r);

                      case 4:
                        o = e.sent;
                        try {
                            wx.setStorageSync("token", o.data.token), wx.setStorageSync("userInfo", o.data), 
                            this.weappLoginBind(), this.$apply();
                        } catch (e) {
                            wx.showToast({
                                title: o.retMsg,
                                icon: "none",
                                duration: 3e3
                            });
                        }

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "smsLogin",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            mobile: this.phone,
                            captcha: this.code
                        }, e.next = 3, n.default.loginUser(t);

                      case 3:
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

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getCardDetail",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            vipstore: 11111,
                            membernumber: 22222
                        }, e.next = 3, n.default.vipCardInfo(t);

                      case 3:
                        r = e.sent, console.log(r), 1 == r.code && (console.log("执行了这里"), wx.setStorageSync("memberInfo", r.data), 
                        this.$apply()), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "weappLoginBind",
            value: (h = u(regeneratorRuntime.mark(function e() {
                var t, a, i, s, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = r.default.production ? r.default.prod.appid : r.default.dev.appid, e.next = 3, 
                        o.default.login();

                      case 3:
                        return a = e.sent, i = a.code, s = {
                            appid: t,
                            code: i
                        }, e.next = 8, n.default.weappLoginBind(s);

                      case 8:
                        1 == (u = e.sent).code ? wx.navigateBack({
                            delta: 2
                        }) : this.wxLogin(), console.log(u);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "wxLogin",
            value: (l = u(regeneratorRuntime.mark(function e() {
                var t, a, i, s, u, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = r.default.production ? r.default.prod.appid : r.default.dev.appid, e.next = 3, 
                        o.default.login();

                      case 3:
                        return a = e.sent, i = a.code, console.log("重新调用login获取code", i), e.prev = 6, e.next = 9, 
                        o.default.getUserInfo();

                      case 9:
                        s = e.sent, this.encryptedData = s.encryptedData, this.iv = s.iv, this.isShow = !1, 
                        this.$apply(), e.next = 22;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(6), wx.clearStorageSync(), this.isShow = !0, wx.hideTabBar(), 
                        this.$apply();

                      case 22:
                        return u = {
                            appid: t,
                            code: i,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 25, n.default.wxLogin(u);

                      case 25:
                        c = e.sent, console.log("wxLogin", c), 1 == c.code && wx.navigateBack({
                            delta: 2
                        });

                      case 28:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 6, 16 ] ]);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/mine/mobile-login"));
}();