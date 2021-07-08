!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(t, i.key, i);
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
        };
    }(), e = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), i = (o(require("./../../utils/wechat.js")), 
    o(require("./../../utils/konami-api.js"))), r = o(require("./../../components/custom-dialog.js"));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new Promise(function(t, n) {
                return function i(r, o) {
                    try {
                        var a = e[r](o), s = a.value;
                    } catch (t) {
                        return void n(t);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(t) {
                        i("next", t);
                    }, function(t) {
                        i("throw", t);
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
            var t, e, i;
            s(this, o);
            for (var a = arguments.length, l = Array(a), h = 0; h < a; h++) l[h] = arguments[h];
            return e = i = u(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [ this ].concat(l))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                statusbar: {
                    title: "ARENA大赛详情",
                    leftIcon: "true"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, i.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, i.components = {
                statusbar: n.default,
                customDialog: r.default
            }, i.data = {
                eventId: "",
                eventDetail: "",
                pointList: [],
                memberInfo: "",
                showAlert: !1,
                alertTxt: "",
                eventTiemDown: "",
                timer: null,
                showPayEam: !1,
                entryPoint: "",
                day1: "",
                day2: "",
                hou1: "",
                hou2: "",
                min1: "",
                min2: ""
            }, i.methods = {
                entryDialog: function() {
                    return this.memberInfo.memberType < 2 ? (this.showAlert = !0, void (this.alertTxt = "正式会员才能报名参赛")) : "" == this.entryPoint ? (this.showAlert = !0, 
                    void (this.alertTxt = "当前会员级别不能参与大赛")) : void (this.showPayEam = !0);
                },
                entryMatch: function() {
                    this.getEntryEvent();
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                eventRank: function() {
                    wx.navigateTo({
                        url: "/pages/match/arena-rank?eventId=" + this.eventId
                    });
                },
                close: function() {
                    this.showPayEam = !1;
                }
            }, u(i, e);
        }
        var l, h;
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
            key: "onLoad",
            value: function(t) {
                this.eventId = t.eventId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getEventDetail(), this.overTime();
                var t = this;
                t.timer = setInterval(function() {
                    t.overTime();
                }, 1e3);
            }
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
            key: "getEventDetail",
            value: (h = a(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, i.default.eventDetail({
                            eventId: this.eventId
                        });

                      case 2:
                        if (1 != (e = t.sent).code) this.showAlert = !0, this.alertTxt = e.message, this.$apply(); else {
                            if (this.eventDetail = e.data.eventDetail, this.pointList = e.data.pointList, this.memberInfo = e.data.memberInfo, 
                            1 == e.data.pointList.length) e.data.pointList[0].memberType == e.data.memberInfo.memberType && (this.entryPoint = e.data.pointList[0].entryPoint); else if (e.data.pointList.length > 1) for (n = 0; n < e.data.pointList.length; n++) e.data.pointList[n].memberType == e.data.memberInfo.memberType && (this.entryPoint = e.data.pointList[n].entryPoint);
                            this.$apply();
                        }

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getEntryEvent",
            value: (l = a(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, i.default.entryEvent({
                            eventId: this.eventId
                        });

                      case 2:
                        1 != (e = t.sent).code ? (this.showAlert = !0, this.alertTxt = e.message, this.showPayEam = !1, 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = "报名成功", this.showPayEam = !1, 
                        this.getEventDetail(), this.$apply()), console.log(e);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "overTime",
            value: function() {
                var t = new Date().getTime(), e = 1e3 * this.eventDetail.endTimeStamp;
                if (e - t > 0) {
                    var n = (e - t) / 1e3, i = this.timeFormat(parseInt(n / 86400)), r = this.timeFormat(parseInt(n % 86400 / 3600)), o = this.timeFormat(parseInt(n % 86400 % 3600 / 60));
                    this.eventTiemDown = i + "天" + r + "时" + o + "分", this.day1 = this.eventTiemDown.substring(0, 1), 
                    this.day2 = this.eventTiemDown.substring(1, 2), this.hou1 = this.eventTiemDown.substring(3, 4), 
                    this.hou2 = this.eventTiemDown.substring(4, 5), this.min1 = this.eventTiemDown.substring(6, 7), 
                    this.min2 = this.eventTiemDown.substring(7, 8), this.$apply();
                } else clearInterval(this.timer), this.$apply();
            }
        }, {
            key: "timeFormat",
            value: function(t) {
                return t < 10 ? "0" + t : t;
            }
        } ]), o;
    }(e.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/match/arena-detail"));
}();