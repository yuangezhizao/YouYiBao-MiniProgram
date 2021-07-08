!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
        };
    }(), e = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), r = o(require("./../../components/match-dialog.js")), i = (o(require("./../../utils/wechat.js")), 
    require("./../../utils/api.js"));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new Promise(function(t, n) {
                return function r(i, o) {
                    try {
                        var a = e[i](o), s = a.value;
                    } catch (t) {
                        return void n(t);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(t) {
                        r("next", t);
                    }, function(t) {
                        r("throw", t);
                    });
                    t(s);
                }("next");
            });
        };
    }
    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function u(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var l = function(e) {
        function o() {
            var t, e, l, c;
            s(this, o);
            for (var p = arguments.length, h = Array(p), f = 0; f < p; f++) h[f] = arguments[f];
            return e = l = u(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [ this ].concat(h))), 
            l.config = {
                navigationStyle: "custom"
            }, l.$repeat = {}, l.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "抽奖",
                    "xmlns:v-on": ""
                },
                prizeDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowPrizeDialog",
                    "v-bind:title.sync": "dialogTitle"
                }
            }, l.$events = {
                statusbar: {
                    "v-on:back": "backHandle"
                }
            }, l.components = {
                statusbar: n.default,
                prizeDialog: r.default
            }, l.data = {
                isShowPrizeDialog: !1,
                prize: null,
                prizeMapping: [],
                targetIndex: 0,
                dialogTitle: "",
                lotteryCount: 0,
                currentIndex: 0,
                loopCount: 0,
                endLoopCount: 0,
                minSpeed: 100,
                maxSpeed: 800,
                rolling: !1,
                rollTM: null,
                lightCount: 0
            }, l.methods = {
                start: (c = a(regeneratorRuntime.mark(function t() {
                    var e, n = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!this.rolling) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");

                          case 2:
                            if (!(this.lotteryCount <= 0)) {
                                t.next = 5;
                                break;
                            }
                            return wx.showToast({
                                title: "抽奖次数已经用完",
                                icon: "none"
                            }), t.abrupt("return");

                          case 5:
                            return t.next = 7, (0, i.postLottery)();

                          case 7:
                            1 === (e = t.sent).code ? (this.targetIndex = +e.data.sortNo, this.prize = e.data, 
                            this.lotteryCount = e.data.remainTimes, this.dialogTitle = 1 === e.data.isWin ? "中奖" : "未中奖", 
                            this.rolling = !0, this.$apply(), this.startRoll(500, function() {
                                n.isShowPrizeDialog = !0, n.$apply();
                            })) : wx.showToast({
                                title: e.message,
                                icon: "none"
                            });

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                })), function() {
                    return c.apply(this, arguments);
                }),
                getPrize: function() {
                    "1" == this.prize.isWin && wx.navigateTo({
                        url: "/pages/mine/my-lottery-prize"
                    }), this.isShowPrizeDialog = !1, this.$apply();
                },
                backHandle: function() {
                    clearTimeout(this.rollTM);
                },
                myPrize: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-lottery-prize"
                    });
                }
            }, u(l, e);
        }
        var l, c;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(o, e), t(o, [ {
            key: "startRoll",
            value: function(t, e) {
                var n = this;
                this.currentIndex++, this.currentIndex > 8 && (this.currentIndex = 1), this.$apply(), 
                t = (t = t < this.minSpeed ? this.minSpeed : t) > this.maxSpeed ? this.maxSpeed : t, 
                this.loopCount < 30 ? (this.loopCount++, this.lightCount += 3, this.rollTM = setTimeout(function() {
                    return n.startRoll(t - 100 * n.loopCount, e);
                }, t)) : (this.endLoopCount++, this.lightCount++, t >= 600 && this.currentIndex === this.targetIndex && this.endLoopCount >= this.targetIndex ? (this.currentIndex = 0, 
                this.loopCount = 0, this.endLoopCount = 0, this.lightCount = 0, this.rolling = !1, 
                setTimeout(function() {
                    e && e();
                }, 1e3)) : this.rollTM = setTimeout(function() {
                    return n.startRoll(t + 50 * n.endLoopCount, e);
                }, t));
            }
        }, {
            key: "getPrizeList",
            value: (c = a(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return wx.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), t.next = 3, (0, i.getLotteryPrizeList)();

                      case 3:
                        1 == (e = t.sent).code && (this.prizeMapping = e.data, this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "getLotteryTimes",
            value: (l = a(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, (0, i.getLotteryTimes)();

                      case 2:
                        1 == (e = t.sent).code && (this.lotteryCount = e.data.remainTimes, this.$apply(), 
                        wx.hideLoading());

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "onShareAppMessage",
            value: function(t) {
                return {
                    title: "关注游艺宝，发现更多精彩",
                    path: "/pages/index/index",
                    imageUrl: "/assets/imgs/share.png",
                    success: function(t) {
                        console.log("转发成功！");
                    },
                    fail: function(t) {
                        return console.log(t.errMsg);
                    }
                };
            }
        }, {
            key: "onUnload",
            value: function() {
                clearTimeout(this.rollTM);
            }
        }, {
            key: "onShow",
            value: function() {
                this.getPrizeList(), this.getLotteryTimes();
            }
        } ]), o;
    }(e.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/mine/lottery"));
}();