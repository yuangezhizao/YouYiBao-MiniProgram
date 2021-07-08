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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../utils/konami-api.js")), a = s(require("./../../components/custom-tabbar.js")), r = s(require("./../../components/match-statusbar.js")), i = s(require("./../../components/match-card.js")), o = s(require("./../../utils/api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function a(r, i) {
                    try {
                        var o = t[r](i), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
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
            for (var o = arguments.length, u = Array(o), p = 0; p < o; p++) u[p] = arguments[p];
            return t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {
                arenaList: {
                    com: "arenaCard",
                    props: "item"
                },
                matchList: {
                    com: "matchCard",
                    props: "item"
                }
            }, n.$props = {
                arenaCard: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "arenaList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "v-bind:item.once": {
                        value: "item",
                        type: "item",
                        for: "arenaList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    type: {
                        value: "arena",
                        for: "arenaList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "xmlns:v-on": {
                        value: "",
                        for: "arenaList",
                        item: "item",
                        index: "index",
                        key: "index"
                    }
                },
                matchCard: {
                    "v-bind:item.once": {
                        value: "item",
                        type: "item",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    type: {
                        value: "match",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    }
                }
            }, n.$events = {
                arenaCard: {
                    "v-on:eventHandle": "arenaDetail"
                },
                matchCard: {
                    "v-on:eventHandle": "matchDetail"
                }
            }, n.components = {
                customTabbar: a.default,
                statusbar: r.default,
                matchCard: i.default,
                arenaCard: i.default
            }, n.mixins = [], n.data = {
                eventList: [],
                cardCur: 0,
                matchList: [],
                arenaList: [],
                statusBarHeight: ""
            }, n.computed = {}, n.methods = {
                cardSwiper: function(e) {
                    this.cardCur = e.detail.current;
                },
                redirectTo: function(e) {
                    wx.navigateTo({
                        url: e
                    });
                },
                eventDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/activity?eventId=" + e.id
                    });
                },
                matchDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/match-detail?eventId=" + e.eventId
                    });
                },
                arenaDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/arena-detail?eventId=" + e.eventId
                    });
                }
            }, n.events = {}, l(n, t);
        }
        var p, m, f;
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
            value: function() {
                this.statusBarHeight = this.$parent.globalData.statusBarHeight;
            }
        }, {
            key: "onShow",
            value: function() {
                this.eventListJackpot(), this.getEventListArena(), this.getEventList();
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
            key: "eventListJackpot",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, o.default.eventListJackpot(t);

                      case 3:
                        1 == (n = e.sent).code && (this.eventList = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getEventList",
            value: (m = u(regeneratorRuntime.mark(function e() {
                var t, n, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, o.default.eventList(t);

                      case 3:
                        for (n = e.sent, a = n.data, r = 0; r < a.length; r++) a[r].beginTime = a[r].beginTime.substring(0, 10), 
                        a[r].endTime = a[r].endTime.substring(0, 10);
                        this.matchList = a, this.$apply(), console.log("赛事列表", n);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
        }, {
            key: "getEventListArena",
            value: (p = u(regeneratorRuntime.mark(function e() {
                var t, a, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, n.default.eventList(t);

                      case 3:
                        for (a = e.sent, r = a.data, i = 0; i < r.length; i++) r[i].beginTime = r[i].beginTime.substring(0, 10), 
                        r[i].endTime = r[i].endTime.substring(0, 10);
                        this.arenaList = r, this.$apply(), console.log("ARENA大赛列表", a);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/match/match"));
}();