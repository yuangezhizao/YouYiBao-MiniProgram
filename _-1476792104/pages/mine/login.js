!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = u(require("./../../npm/wepy/lib/wepy.js")), n = u(require("./../../utils/wechat.js")), o = u(require("./../../utils/api.js")), r = u(require("./../../utils/environment.js")), a = u(require("./../../components/custom-statusbar.js")), i = u(require("./../../components/custom-dialog.js"));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function o(r, a) {
                    try {
                        var i = t[r](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(u);
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
        function u() {
            var e, t, n;
            c(this, u);
            for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
            return t = n = p(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(r))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
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
            }, n.$events = {
                phoneDialog: {
                    "v-on:getPhoneNumber": "getPhone"
                },
                userDialog: {
                    "v-on:getAuthHandler": "userLogin"
                }
            }, n.components = {
                customStatusbar: a.default,
                phoneDialog: i.default,
                userDialog: i.default
            }, n.mixins = [], n.data = {
                getPhone: !1,
                getInfo: !1,
                phoneEncryptedData: "",
                phoneIv: "",
                encryptedData: "",
                iv: ""
            }, n.computed = {}, n.methods = {
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
            }, n.events = {}, p(n, t);
        }
        var l, d, f, g, h, v;
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
        }(u, t), e(u, [ {
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
            value: (v = s(regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        wx.getUserProfile({
                            desc: "用于完善会员资料",
                            success: function(e) {
                                e.userInfo, t.encryptedData = e.encryptedData, t.iv = e.iv, t.beginLogin();
                            },
                            fail: function(e) {}
                        });

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return v.apply(this, arguments);
            })
        }, {
            key: "dealLoadingData",
            value: (h = s(regeneratorRuntime.mark(function e(t, n) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            appid: t,
                            code: n,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 3, o.default.wxLogin(r);

                      case 3:
                        1 == e.sent.code && this.weappLogin2();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e, t) {
                return h.apply(this, arguments);
            })
        }, {
            key: "weappLogin2",
            value: (g = s(regeneratorRuntime.mark(function e() {
                var t, a, i, u, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.login();

                      case 2:
                        return t = e.sent, a = t.code, i = r.default.production ? r.default.prod.appid : r.default.dev.appid, 
                        u = {
                            appid: i,
                            code: a
                        }, e.next = 8, o.default.weappLogin(u);

                      case 8:
                        1 == (s = e.sent).code && (wx.setStorageSync("token", s.data.token), wx.setStorageSync("userInfo", s.data.user), 
                        this.userInfo = s.data.user, setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)), 401 == s.code && this.wxLogin(), 402 == s.code && (this.getPhone = !0, 
                        this.$apply());

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "beginLogin",
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t, o, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.login();

                      case 2:
                        t = e.sent, o = t.code, console.log("首次调用code", o), a = r.default.production ? r.default.prod.appid : r.default.dev.appid, 
                        this.dealLoadingData(a, o);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "wxLogin",
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t, a, i, u, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = r.default.production ? r.default.prod.appid : r.default.dev.appid, e.next = 3, 
                        n.default.login();

                      case 3:
                        a = e.sent;
                        try {
                            i = a.code, console.log("重新调用login获取code", i), this.getInfo = !1, this.$apply();
                        } catch (e) {
                            wx.clearStorageSync(), this.getInfo = !0, wx.hideTabBar(), this.$apply();
                        }
                        return u = {
                            appid: t,
                            code: i,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 8, o.default.wxLogin(u);

                      case 8:
                        s = e.sent, console.log("wxLogin", s), 1 == s.code && (console.log("执行了这里"), this.getPhone = !0, 
                        this.$apply());

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "bindLogin",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t, a, i, u, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = r.default.production ? r.default.prod.appid : r.default.dev.appid, e.next = 3, 
                        n.default.login();

                      case 3:
                        return a = e.sent, i = a.code, console.log("第三次调用login获取code", i), u = {
                            appid: t,
                            code: i,
                            encryptedData: this.phoneEncryptedData,
                            iv: this.phoneIv
                        }, e.next = 9, o.default.weappBind(u);

                      case 9:
                        1 == (s = e.sent).code ? (wx.setStorageSync("token", s.data.token), wx.setStorageSync("userInfo", s.data.user), 
                        setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3)) : wx.showToast({
                            title: s.message,
                            icon: "none"
                        }), console.log("小程序绑定登录", s);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/mine/login"));
}();