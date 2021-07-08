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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../utils/api.js")), r = s(require("./../../utils/environment.js")), a = s(require("./../../components/custom-tabbar.js")), i = s(require("./../../components/custom-dialog.js")), o = s(require("./../../utils/wechat.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
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
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(t) {
        function s() {
            var e, t, n;
            c(this, s);
            for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
            return t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(o))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                userDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "isShow",
                    title: "温馨提示",
                    type: "getAuth",
                    content: "需要授权才能更新头像哦",
                    "xmlns:v-on": ""
                }
            }, n.$events = {
                userDialog: {
                    "v-on:getAuthHandler": "userLogin"
                }
            }, n.components = {
                customTabbar: a.default,
                userDialog: i.default
            }, n.mixins = [], n.data = {
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
            }, n.computed = {}, n.methods = {
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
                addressClick: function() {
                    wx.navigateTo({
                        url: "/pages/mine/address"
                    });
                },
                giftOrderClick: function() {
                    wx.navigateTo({
                        url: "/pages/mine/gift-order"
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
                    var e = this;
                    wx.getStorageSync("token") ? wx.getUserProfile({
                        desc: "获取你的昵称、头像、地区及性别",
                        success: function(t) {
                            console.log(JSON.stringify(t)), e.wxLogin(t);
                        },
                        fail: function(e) {}
                    }) : wx.navigateTo({
                        url: "/pages/mine/login"
                    });
                },
                userLogin: function(e) {}
            }, n.events = {}, l(n, t);
        }
        var p, g, f, d, m, h, y;
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
            value: (y = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.findScoreCoin();

                      case 2:
                        (t = e.sent) && (this.coins = t.coin, this.score = t.score, this.eamPoint = t.point, 
                        this.tickets = t.ticket, this.check = t.check, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return y.apply(this, arguments);
            })
        }, {
            key: "getTicket",
            value: (h = u(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = wx.getStorageSync("memberInfo"), e.next = 3, n.default.myTicket({
                            orgin: "weapp",
                            param: JSON.stringify({
                                u_id: t.id ? t.id : 192943
                            }),
                            u_id: t.id ? t.id : 192943
                        });

                      case 3:
                        (r = e.sent) && (this.tickets = r.data.MGL_Num_Count, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getLotteryTimes",
            value: (m = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.lotteryTimes();

                      case 2:
                        1 == (t = e.sent).code && (this.remainTimes = t.data.remainTimes, this.$apply()), 
                        console.log("获取奖票次数", t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "getMyHotGameList",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, n.default.myHotGameList(t);

                      case 3:
                        1 == (r = e.sent).code && (this.medalList = r.data, this.medalList.map(function(e) {
                            e.medalImage = "http://yyb-oss.universal-space.cn/imgs/mine/medal/" + e.productModel + ".png";
                        }), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "wxLogin",
            value: (f = u(regeneratorRuntime.mark(function e(t) {
                var n, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = r.default.production ? r.default.prod.appid : r.default.dev.appid, e.next = 3, 
                        o.default.login();

                      case 3:
                        a = e.sent, i = a.code, this.userInfo = t.userInfo, this.encryptedData = t.encryptedData, 
                        this.iv = t.iv, this.isShow = !1, this.$apply(), this.dealLoadingData(n, i), console.log(t);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return f.apply(this, arguments);
            })
        }, {
            key: "dealLoadingData",
            value: (g = u(regeneratorRuntime.mark(function e(t, r) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = {
                            appid: t,
                            code: r,
                            encryptedData: this.encryptedData,
                            iv: this.iv
                        }, e.next = 3, n.default.wxLogin(a);

                      case 3:
                        1 == e.sent.code && this.weappLogin();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e, t) {
                return g.apply(this, arguments);
            })
        }, {
            key: "weappLogin",
            value: (p = u(regeneratorRuntime.mark(function e() {
                var t, a, i, s, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.login();

                      case 2:
                        return t = e.sent, a = t.code, i = r.default.production ? r.default.prod.appid : r.default.dev.appid, 
                        s = {
                            appid: i,
                            code: a
                        }, e.next = 8, n.default.weappLogin(s);

                      case 8:
                        1 == (u = e.sent).code && (wx.setStorageSync("token", u.data.token), wx.setStorageSync("userInfo", u.data.user), 
                        this.userInfo = u.data.user, 0 != getCurrentPages().length && getCurrentPages()[getCurrentPages().length - 1].onShow());

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/mine/mine"));
}();