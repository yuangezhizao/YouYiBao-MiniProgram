!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), a = s(require("./../../components/custom-statusbar.js")), n = s(require("./../../components/custom-progress.js")), r = s(require("./../../utils/api.js")), i = s(require("./../../utils/wacca-api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function n(r, i) {
                    try {
                        var s = t[r](i), o = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!s.done) return Promise.resolve(o).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(o);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(t) {
        function s() {
            var e, t, r;
            c(this, s);
            for (var i = arguments.length, o = Array(i), p = 0; p < i; p++) o[p] = arguments[p];
            return t = r = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(o))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "华卡音舞"
                },
                customProgress: {
                    "xmlns:v-bind": "",
                    "v-bind:days.sync": "days"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: a.default,
                customProgress: n.default
            }, r.mixins = [], r.data = {
                scoreDetail: "",
                machineId: "",
                scoreId: "",
                memberInfo: "",
                days: 0,
                navbar: [ "NORMAL", "HARD", "EXPERT" ],
                currentTab: 0,
                myStatisRankInfo: "",
                iconList: [],
                titleList: [],
                trophyList: []
            }, r.computed = {}, r.methods = {
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.scoreDetail.productId + "&productName=" + this.scoreDetail.productName
                    });
                },
                changeAvatar: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-change-avatar?type=1"
                    });
                },
                changeAchievement: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-achievement?type=1"
                    });
                },
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    this.getMyStatisRank());
                },
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-rank"
                    });
                },
                statisRecord: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-statis?productId=" + this.scoreDetail.productId
                    });
                },
                track: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-single-rank?musicId=" + this.scoreDetail.musicId
                    });
                }
            }, r.events = {}, u(r, t);
        }
        var p, l, f;
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
            value: function(e) {
                this.machineId = e.machineId, this.scoreId = e.scoreId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getGameDetail(), this.getMemberInfo();
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
            key: "getGameDetail",
            value: (f = o(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            machineId: this.machineId,
                            scoreId: this.scoreId
                        }, e.next = 3, r.default.recordDetail(t);

                      case 3:
                        a = e.sent, console.log(a), 1 == a.code && (this.scoreDetail = a.data.scoreDetail, 
                        this.iconList = a.data.getItems.iconList, this.titleList = a.data.getItems.titleList, 
                        this.trophyList = a.data.getItems.trophyList, this.getMyStatisRank(), this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (l = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getMyStatisRank",
            value: (p = o(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicGrade: this.currentTab + 1,
                            musicId: this.scoreDetail.musicId
                        }, e.next = 3, i.default.myStatisRank(t);

                      case 3:
                        1 == (a = e.sent).code && (this.myStatisRankInfo = a.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/wacca/wacca-detail"));
}();