!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
        };
    }(), t = u(require("./../npm/wepy/lib/wepy.js")), n = u(require("./../components/wacca2-navigation.js")), a = u(require("./../utils/api.js")), r = u(require("./../utils/wacca-api.js")), i = u(require("./../components/match-dialog.js")), o = u(require("./../components/custom-progress.js")), c = u(require("./../utils/wechat.js"));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function a(r, i) {
                    try {
                        var o = t[r](i), c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(c).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var g = function(t) {
        function u() {
            var e, t, a;
            l(this, u);
            for (var r = arguments.length, c = Array(r), s = 0; s < r; s++) c[s] = arguments[s];
            return t = a = p(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                wacca2Navigation: {
                    title: "华卡音舞Ver.2"
                },
                memberDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "memberDialog",
                    title: "升级为基本会员"
                }
            }, a.$events = {}, a.components = {
                wacca2Navigation: n.default,
                memberDialog: i.default,
                customProgress: o.default
            }, a.mixins = [], a.data = {
                productId: "",
                productName: "",
                productImage: "",
                recordList: [],
                memberInfo: "",
                memberDialog: !1,
                days: 0,
                isHideVip: !0,
                menuButtonTop: "",
                list: [],
                screenWidth: 250,
                validRate: 80,
                rateImage: "",
                zhoubianSize: null
            }, a.computed = {}, a.methods = {
                zhoubianClick: function() {
                    wx.navigateTo({
                        url: "wacca2-zhoubian"
                    });
                },
                rechargeVip: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-vip-recharge"
                    });
                },
                banner: function(e) {
                    console.log(e), wx.navigateTo({
                        url: "../pages/index/activity?title=" + e.title + "&url=" + encodeURIComponent(e.url)
                    });
                },
                upMember: function() {
                    this.memberDialog = !0;
                },
                achievementDidClick: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-achievement?type=2"
                    });
                },
                buyMember: function() {
                    this.joinMember();
                },
                trophyClick: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-trophy?type=2"
                    });
                },
                shopButtonClick: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-shop?type=1"
                    });
                },
                avatarClick: function() {
                    0 != this.memberInfo.userLoginTimes && wx.navigateTo({
                        url: "../pages/wacca/wacca-change-avatar?type=2"
                    });
                },
                toCodePage: function() {
                    var e = JSON.stringify({
                        type: "1",
                        text: "华卡音舞卡券"
                    });
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-ex-code?obj=" + encodeURIComponent(e)
                    });
                },
                toPrivilege: function() {
                    wx.navigateTo({
                        url: "../pages/wacca/wacca-vip-rights?type=2"
                    });
                },
                ratingClick: function() {
                    if (0 != this.memberInfo.userLoginTimes) {
                        var e = {
                            name: this.memberInfo.userName
                        };
                        this.memberInfo.iconUrl ? e.image = this.memberInfo.iconUrl : e.image = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png", 
                        e.rate = this.memberInfo.rating;
                        var t = JSON.stringify(e);
                        wx.navigateTo({
                            url: "wacca2-rating?json=" + t
                        });
                    }
                },
                settingDidClick: function() {
                    wx.navigateTo({
                        url: "wacca2-setting"
                    });
                },
                luckDraw: function() {
                    wx.navigateTo({
                        url: "wacca2-lilybox?type=firstpage"
                    });
                },
                resultClick: function() {
                    wx.navigateTo({
                        url: "wacca2-result"
                    });
                },
                guideClick: function() {
                    wx.navigateTo({
                        url: "wacca2-guide"
                    });
                },
                songClick: function() {
                    wx.navigateTo({
                        url: "wacca2-song"
                    });
                },
                logoClick: function() {
                    wx.navigateTo({
                        url: "wacca2-logo"
                    });
                },
                rankClick: function() {
                    wx.navigateTo({
                        url: "wacca2-rank"
                    });
                },
                rankListClick: function() {
                    wx.navigateTo({
                        url: "wacca2-ranking-list"
                    });
                },
                gateClick: function() {
                    wx.navigateTo({
                        url: "wacca2-gate"
                    });
                }
            }, a.events = {}, p(a, t);
        }
        var g, f, m, h, d;
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
            value: function(e) {
                var t = this;
                console.log(e), this.productId = e.productId, this.productName = e.productName, 
                this.productImage = e.productImage;
                var n = wx.getStorageSync("isHideVip");
                console.log(JSON.stringify(n) + "====================="), this.isHideVip = n, setTimeout(function() {
                    t.menuButtonTop = t.menuButtonTop = wx.getMenuButtonBoundingClientRect().top, console.log("页面statusbar高度", t.menuButtonTop), 
                    t.$apply();
                }, 100);
                var a = this;
                wx.getSystemInfo({
                    success: function(e) {
                        a.screenWidth = e.screenWidth;
                    }
                });
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserRecordStatis(), this.getMemberInfo(), this.getBanner(), this.loadZhoubian();
            }
        }, {
            key: "loadZhoubian",
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.activityExplainWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.zhoubianSize = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getBanner",
            value: (h = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: "4"
                        }, e.next = 3, a.default.adData(t);

                      case 3:
                        0 == (n = e.sent).retCode && (this.list = n.data);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getUserRecordStatis",
            value: (m = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.memberInfoWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
                        this.validRate = (this.memberInfo.validDays > 90 ? 90 : this.memberInfo.validDays) / 90 * 100, 
                        this.dealRateImage(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "dealRateImage",
            value: function() {
                var e = "", t = this.memberInfo;
                e = t.rating <= 299 ? "000" : t.rating <= 599 ? "300" : t.rating <= 999 ? "600" : t.rating <= 1299 ? "1000" : t.rating <= 1599 ? "1300" : t.rating <= 1899 ? "1600" : t.rating <= 2199 ? "1900" : t.rating <= 2499 ? "2200" : "2500", 
                this.rateImage = "http://yyb-oss.universal-space.cn/imgs/wacca2/firstpage/" + e + ".png";
            }
        }, {
            key: "joinMember",
            value: (g = s(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, c.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), n.getMemberInfo(), n.$apply();
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
            })), function() {
                return g.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(g, "wacca2/wacca2-statis"));
}();