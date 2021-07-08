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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/match-statusbar.js")), r = a(require("./../../utils/api.js")), i = a(require("./../../utils/wechat.js")), o = a(require("./../../components/custom-dialog.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, o) {
                    try {
                        var a = t[i](o), s = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, r;
            u(this, a);
            for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
            return t = r = l(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(s))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    title: "赛事详情",
                    leftIcon: "true"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, r.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                statusbar: n.default,
                customDialog: o.default
            }, r.data = {
                eventId: "",
                eventDetail: "",
                showAlert: !1,
                alertTxt: "",
                eventTiemDown: "",
                timer: null,
                day1: "",
                day2: "",
                hou1: "",
                hou2: "",
                min1: "",
                min2: ""
            }, r.methods = {
                entryMatch: function() {
                    this.entryEvent();
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                eventRank: function() {
                    wx.navigateTo({
                        url: "/pages/match/match-rank?eventId=" + this.eventId
                    });
                }
            }, l(r, t);
        }
        var c, h;
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
            value: function(e) {
                this.eventId = e.eventId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getEventDetail(), this.overTime();
                var e = this;
                e.timer = setInterval(function() {
                    e.overTime();
                }, 1e3);
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
            key: "getEventDetail",
            value: (h = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.eventDetail({
                            eventId: this.eventId
                        });

                      case 2:
                        1 != (t = e.sent).code ? (this.showAlert = !0, this.alertTxt = t.message, this.$apply()) : (this.eventDetail = t.data, 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "entryEvent",
            value: (c = s(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.entryEvent({
                            eventId: this.eventId
                        });

                      case 2:
                        1 != (t = e.sent).code ? (this.showAlert = !0, this.alertTxt = t.message, this.$apply()) : 1 != this.eventDetail.isFree ? i.default.payment(t.data.wxpay).then(function(e) {
                            n.showAlert = !0, n.alertTxt = "报名成功", n.getEventDetail(), n.$apply();
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }) : (this.showAlert = !0, this.alertTxt = "报名成功", this.getEventDetail(), this.$apply()), 
                        console.log(t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "overTime",
            value: function() {
                var e = new Date().getTime(), t = 1e3 * this.eventDetail.endTimeStamp;
                if (t - e > 0) {
                    var n = (t - e) / 1e3, r = this.timeFormat(parseInt(n / 86400)), i = this.timeFormat(parseInt(n % 86400 / 3600)), o = this.timeFormat(parseInt(n % 86400 % 3600 / 60));
                    this.eventTiemDown = r + "天" + i + "时" + o + "分", this.day1 = this.eventTiemDown.substring(0, 1), 
                    this.day2 = this.eventTiemDown.substring(1, 2), this.hou1 = this.eventTiemDown.substring(3, 4), 
                    this.hou2 = this.eventTiemDown.substring(4, 5), this.min1 = this.eventTiemDown.substring(6, 7), 
                    this.min2 = this.eventTiemDown.substring(7, 8), this.$apply();
                } else clearInterval(this.timer), this.$apply();
            }
        }, {
            key: "timeFormat",
            value: function(e) {
                return e < 10 ? "0" + e : e;
            }
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/match/match-detail"));
}();