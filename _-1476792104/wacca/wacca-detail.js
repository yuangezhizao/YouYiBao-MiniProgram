!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/custom-statusbar.js")), a = o(require("./../components/custom-progress.js")), r = o(require("./../utils/api.js")), i = o(require("./../utils/wacca-api.js"));
    function o(e) {
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
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function o() {
            var e, t, r;
            c(this, o);
            for (var i = arguments.length, s = Array(i), l = 0; l < i; l++) s[l] = arguments[l];
            return t = r = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
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
                customStatusbar: n.default,
                customProgress: a.default
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
                        url: "/pages/wacca/wacca-change-avatar"
                    });
                },
                changeAchievement: function() {
                    wx.navigateTo({
                        url: "wacca/wacca-achievement"
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
        var l, p, f;
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
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            machineId: this.machineId,
                            scoreId: this.scoreId
                        }, e.next = 3, r.default.recordDetail(t);

                      case 3:
                        n = e.sent, console.log(n), 1 == n.code && (this.scoreDetail = n.data.scoreDetail, 
                        this.iconList = n.data.getItems.iconList, this.titleList = n.data.getItems.titleList, 
                        this.trophyList = n.data.getItems.trophyList, this.getMyStatisRank(), this.$apply());

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
            value: (p = s(regeneratorRuntime.mark(function e() {
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
                return p.apply(this, arguments);
            })
        }, {
            key: "getMyStatisRank",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicGrade: this.currentTab + 1,
                            musicId: this.scoreDetail.musicId
                        }, e.next = 3, i.default.myStatisRank(t);

                      case 3:
                        1 == (n = e.sent).code && (this.myStatisRankInfo = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    exports.default = l;
}();