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
    }(), t = u(require("./../../npm/wepy/lib/wepy.js")), n = u(require("./../../components/match-statusbar.js")), r = u(require("./../../utils/api.js")), a = u(require("./../../mixins/user-mixin.js")), i = u(require("./../../utils/konami-api.js")), s = u(require("./../../components/custom-dialog.js")), o = u(require("./../../utils/wechat.js")), c = u(require("./../../utils/environment.js"));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function h(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
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
    var m = function(t) {
        function u() {
            var e, t, r;
            l(this, u);
            for (var i = arguments.length, o = Array(i), c = 0; c < i; c++) o[c] = arguments[c];
            return t = r = p(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(o))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "音律炫动5"
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
                statusbar: n.default,
                customDialog: s.default,
                tipsDialog: s.default
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
                    song: 8,
                    name: "游客",
                    price: 0
                }, {
                    song: 16,
                    name: "试用会员",
                    price: 0
                }, {
                    song: "25-75",
                    name: "基本会员",
                    price: 15,
                    halfYearPrice: 60
                }, {
                    song: 75,
                    name: "特别会员",
                    price: 50
                }, {
                    song: 90,
                    name: "VIP会员",
                    price: 30,
                    halfYearPrice: 120,
                    halfDay: 180
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
            }, r.mixins = [ a.default ], r.methods = {
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
                    this.memberState.remainPoint < 1 ? this.isConfirm = !0 : (this.selectType = e, this.exchangeType = t, 
                    this.getExchangeInfo(e, t));
                },
                exchangeMusic5: function() {
                    if (this.memberState.remainPoint < this.consumePoint) return this.isConfirm = !0, 
                    void (this.showExc = !1);
                    this.exchangeMember(this.selectType, this.exchangeType);
                }
            }, p(r, t);
        }
        var m, f, g, d, y, x, b, v, w;
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
                this.serialNo = e.serialNo, this.tag = e.tag, this.isScan = e.isScan, this.getTemplateIds(), 
                this.getExchangeInfo2();
            }
        }, {
            key: "onShow",
            value: function() {
                var e = wx.getStorageSync("isScan");
                0 == this.isScan && this.getMemberState(), e || 0 == this.isScan ? this.scanCodeMusic5() : (this.scanTxt = "二维码已过期，请重新扫码", 
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
            value: (w = h(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.default.getMemberInfoMusic5();

                      case 2:
                        (t = e.sent) && (1 !== t.code ? (this.alertTxt = t.message, this.showAlert = !0) : (this.memberState = t.data, 
                        t.data.membershipList.forEach(function(e) {
                            n.memberTypeList[e.id].price = e.point, n.memberTypeList[e.id].days = e.days;
                        }), 2 == this.memberState.memberType ? this.cardCur = 0 : 4 == this.memberState.memberType && (this.cardCur = 1))), 
                        this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return w.apply(this, arguments);
            })
        }, {
            key: "scanCodeMusic5",
            value: (v = h(regeneratorRuntime.mark(function e() {
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
                        }, e.next = 4, i.default.scanCodeMusic5(t);

                      case 4:
                        n = e.sent, this.isLock = !0, 1 !== n.code ? (this.alertTxt = n.message, this.showAlert = !0, 
                        this.showPlayGame = !1) : (this.machineDetail = n.data, this.showPlayGame = !0, 
                        this.getMemberState()), this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return v.apply(this, arguments);
            })
        }, {
            key: "trialMember",
            value: (b = h(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            serialNo: this.serialNo ? this.serialNo : "",
                            tag: this.tag ? this.tag : ""
                        }, e.next = 3, i.default.trialMemberMusic(t);

                      case 3:
                        (n = e.sent) && (1 !== n.code ? (this.alertTxt = n.message, this.showAlert = !0) : this.getMemberState()), 
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return b.apply(this, arguments);
            })
        }, {
            key: "startGame",
            value: (x = h(regeneratorRuntime.mark(function e() {
                var t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            paymentType: r,
                            serialNo: this.serialNo,
                            tag: this.tag
                        }, e.next = 3, i.default.startPlayMusic5(t);

                      case 3:
                        n = e.sent, wx.setStorageSync("isScan", !1), 1 !== n.code ? (this.alertTxt = n.message, 
                        this.showAlert = !0) : (wx.showToast({
                            title: "游戏已经开始",
                            icon: "success",
                            duration: 1500
                        }), this.showPlayGame = !1, this.getMemberState(), wx.redirectTo({
                            url: "/pages/record/music5-statis?productId=" + this.machineDetail.productId + "&productName=" + this.machineDetail.productName + "&productImage=" + this.machineDetail.image
                        })), this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return x.apply(this, arguments);
            })
        }, {
            key: "getExchangeInfo",
            value: (y = h(regeneratorRuntime.mark(function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            membershipType: t,
                            exchangeType: n
                        }, e.next = 3, i.default.preExchangeMemberMusic(r);

                      case 3:
                        (a = e.sent) && (1 !== a.code ? (this.alertTxt = a.message, this.showAlert = !0) : (this.consumePoint = a.data.consumePoint, 
                        this.exchangeDays = a.data.validDays, this.showExc = !0)), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e, t) {
                return y.apply(this, arguments);
            })
        }, {
            key: "exchangeMember",
            value: (d = h(regeneratorRuntime.mark(function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            serialNo: this.serialNo ? this.serialNo : "",
                            tag: this.tag ? this.tag : "",
                            membershipType: t,
                            exchangeType: n
                        }, e.next = 3, i.default.exchangeMemberMusic(r);

                      case 3:
                        (a = e.sent) && (1 !== a.code ? (this.alertTxt = a.message, this.showAlert = !0) : (this.showExc = !1, 
                        this.getMemberState())), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e, t) {
                return d.apply(this, arguments);
            })
        }, {
            key: "getExchangeInfo2",
            value: (g = h(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            membershipType: 4,
                            exchangeType: 2
                        }, console.log("1111111111111111" + JSON.stringify(t)), e.next = 4, i.default.preExchangeMemberMusic(t);

                      case 4:
                        (n = e.sent) && (this.memberTypeList[4].halfYearPrice = n.data.consumePoint, this.memberTypeList[4].halfDay = n.data.validDays), 
                        this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "getTemplateIds",
            value: (f = h(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.templateIds();

                      case 2:
                        t = e.sent, console.log("模板id", t), this.templateIdList = t.data;

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "subscribeTemplate",
            value: (m = h(regeneratorRuntime.mark(function e(t) {
                var n, a, i, s, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.login();

                      case 2:
                        return n = e.sent, a = n.code, i = c.default.production ? c.default.prod.appid : c.default.dev.appid, 
                        s = {
                            appid: i,
                            code: a,
                            templateIds: t
                        }, console.log("参数", s), e.next = 9, r.default.subscribeTemplate(s);

                      case 9:
                        u = e.sent, console.log("订阅消息模板", u);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return m.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(m, "pages/machine/machine-music5"));
}();