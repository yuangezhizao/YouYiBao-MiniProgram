!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../components/match-statusbar.js")), i = s(require("./../../components/match-card.js")), a = s(require("./../../mixins/PaginationMixin.js")), r = s(require("./../../mixins/user-mixin.js")), o = s(require("./../../utils/api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function i(a, r) {
                    try {
                        var o = t[a](r), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        i("next", e);
                    }, function(e) {
                        i("throw", e);
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
            var e, t, o;
            c(this, s);
            for (var u = arguments.length, l = Array(u), f = 0; f < u; f++) l[f] = arguments[f];
            return t = o = p(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(l))), 
            o.mixins = [ a.default, r.default ], o.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, o.$repeat = {
                listData: {
                    com: "matchCard",
                    props: "item"
                }
            }, o.$props = {
                matchCard: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "v-bind:item.once": {
                        value: "item",
                        type: "item",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    type: {
                        value: "jackpot",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "v-bind:eventStatus.once": {
                        value: "status",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "xmlns:v-on": {
                        value: "",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    }
                },
                statusbar: {
                    leftIcon: "true",
                    title: "奖池活动"
                }
            }, o.$events = {
                matchCard: {
                    "v-on:eventHandle": "activityDetail"
                }
            }, o.components = {
                statusbar: n.default,
                matchCard: i.default
            }, o.data = {
                myJackpotInfo: "",
                status: 1,
                listData: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 20
            }, o.methods = {
                changeTab: function(e) {
                    this.status = e, this.myEventListJackpot(), this.$apply();
                },
                activityDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/activity?eventId=" + e.eventId
                    });
                },
                myPrize: function() {
                    wx.navigateTo({
                        url: "/pages/match/my-prize"
                    });
                }
            }, p(o, t);
        }
        var l, f;
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
                this.myEventListJackpot();
            }
        }, {
            key: "onShow",
            value: function() {
                this.getMyJackpotInfo();
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
            key: "getMyJackpotInfo",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.myJackpotInfo();

                      case 2:
                        1 == (t = e.sent).code && (this.myJackpotInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "myEventListJackpot",
            value: (l = u(regeneratorRuntime.mark(function e() {
                var t, n, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            status: this.status,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, o.default.myEventListJackpot(t);

                      case 3:
                        if ((n = e.sent).data) {
                            for (i = n.data, a = 0; a < i.length; a++) i[a].beginTime = i[a].beginTime.substring(0, 16), 
                            i[a].endTime = i[a].endTime.substring(0, 16);
                            this.listData = i, this.$apply();
                        } else this.listData = "", this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/match/activities"));
}();