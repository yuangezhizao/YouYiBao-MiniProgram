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
    }(), t = u(require("./../../npm/wepy/lib/wepy.js")), n = u(require("./../../components/match-statusbar.js")), o = u(require("./../../components/match-card.js")), a = u(require("./../../mixins/PaginationMixin.js")), r = u(require("./../../utils/api.js")), i = u(require("./../../mixins/user-mixin.js"));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function u() {
            var e, t, r;
            s(this, u);
            for (var l = arguments.length, p = Array(l), f = 0; f < l; f++) p[f] = arguments[f];
            return t = r = c(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(p))), 
            r.mixins = [ a.default, i.default ], r.config = {
                navigationStyle: "custom",
                enablePullDownRefresh: !0
            }, r.components = {
                statusbar: n.default,
                matchCard: o.default
            }, r.data = {
                windowHeight: 0,
                menuButtonTop: "",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10,
                poolRank: [],
                rankList: [],
                eventId: ""
            }, r.methods = {
                loadMore: function() {
                    this.canLoadMore && (this.pageNo++, this.getMyPoolRank());
                },
                myPrize: function() {
                    wx.navigateTo({
                        url: "/pages/match/my-prize"
                    });
                },
                goBack: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                goHome: function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }
            }, c(r, t);
        }
        var l, p;
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
                var t = this, n = this;
                n.eventId = e.eventId, wx.getSystemInfo({
                    success: function(e) {
                        n.windowHeight = e.windowHeight;
                    }
                }), setTimeout(function() {
                    t.menuButtonTop = t.$parent.globalData.menuButtonTop, t.$apply();
                }, 100), this.getMyPoolRank();
            }
        }, {
            key: "onShow",
            value: function() {}
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
            key: "onPullDownRefresh",
            value: function() {
                this.getMyPoolRank(), setTimeout(function() {
                    wx.stopPullDownRefresh();
                }, 1e3);
            }
        }, {
            key: "getMyPoolRank",
            value: (l = regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            eventId: this.eventId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.myPoolRank(t);

                      case 3:
                        1 == (n = e.sent).code && (this.poolRank = n.data, (!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), p = function() {
                var e = l.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function o(a, r) {
                        try {
                            var i = e[a](r), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        t(u);
                    }("next");
                });
            }, function() {
                return p.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/match/jackpot-rank"));
}();