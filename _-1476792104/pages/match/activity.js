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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), r = o(require("./../../utils/api.js"));
    o(require("./../../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function o() {
            var e, t, r;
            i(this, o);
            for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return t = r = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    title: "超级奖池",
                    leftIcon: "true"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                eventId: "",
                eventInfo: "",
                userList: [],
                prizeList: [],
                showTips: !1
            }, r.methods = {
                eventTips: function() {
                    this.showTips = !0;
                },
                close: function() {
                    this.showTips = !1;
                },
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/match/jackpot-rank?eventId=" + this.eventId
                    });
                },
                eventResult: function() {
                    wx.navigateTo({
                        url: "/pages/match/activity-result?eventId=" + this.eventId
                    }), this.showTips = !1;
                },
                update: function() {
                    this.myEventDetail();
                }
            }, a(r, t);
        }
        var s, u;
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                console.log("eventId", e), this.eventId = e.eventId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.myEventDetail();
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
            key: "myEventDetail",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 6,
                            eventId: this.eventId
                        }, e.next = 3, r.default.myEventDetail(t);

                      case 3:
                        1 == (n = e.sent).code && (this.eventInfo = n.data.eventInfo, this.userList = n.data.userList, 
                        this.prizeList = n.data.prizeList, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, i) {
                        try {
                            var a = e[o](i), s = a.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/match/activity"));
}();