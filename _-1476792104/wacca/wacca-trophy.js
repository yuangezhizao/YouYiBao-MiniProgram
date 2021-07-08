!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), t = s(require("./../npm/wepy/lib/wepy.js")), r = s(require("./../components/custom-statusbar.js")), n = s(require("./../components/star.js")), a = s(require("./../utils/wacca-api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, s) {
                    try {
                        var o = t[a](s), i = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!o.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function s() {
            var e, t, a;
            i(this, s);
            for (var o = arguments.length, c = Array(o), l = 0; l < o; l++) c[l] = arguments[l];
            return t = a = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {
                trophyList: {
                    com: "star",
                    props: ""
                }
            }, a.$props = {
                star: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "trophyList",
                        item: "item",
                        index: "index",
                        key: "key"
                    },
                    "v-bind:starNumber.sync": {
                        value: "item.star",
                        for: "trophyList",
                        item: "item",
                        index: "index",
                        key: "key"
                    }
                },
                customStatusbar: {
                    title: "我的奖杯"
                },
                star1: {
                    starNumber: "1"
                },
                star2: {
                    starNumber: "2"
                },
                star3: {
                    starNumber: "3"
                },
                star4: {
                    starNumber: "4"
                }
            }, a.$events = {}, a.components = {
                customStatusbar: r.default,
                star: n.default,
                star1: n.default,
                star2: n.default,
                star3: n.default,
                star4: n.default
            }, a.mixins = [], a.data = {
                navbar: [ "获奖统计", "奖杯一览" ],
                currentTab: 0,
                seasonIdsList: [],
                seasonId: 0,
                userTrophyData: "",
                trophyList: [ {
                    label: !0,
                    name: "初学者进阶",
                    star: 1
                }, {
                    label: !1,
                    name: "通往中级者的道路",
                    star: 2
                }, {
                    label: !1,
                    name: "中级者进阶",
                    star: 3
                }, {
                    label: !1,
                    name: "中级者进阶",
                    star: 4
                } ]
            }, a.computed = {}, a.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index);
                },
                trophyDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-trophy-detail?trophyRarity=" + e + "&seasonId=" + this.seasonId
                    });
                },
                changeSeason: function(e) {
                    var t = e.detail.current;
                    this.seasonId = this.seasonIdsList[t], this.getUserTrophyStatis();
                }
            }, a.events = {}, u(a, t);
        }
        var c, l;
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
                this.getSeasonIds();
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
            key: "getSeasonIds",
            value: (l = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.seasonIds();

                      case 2:
                        1 == (t = e.sent).code && (this.seasonIdsList = t.data, this.seasonId = this.seasonIdsList[0], 
                        this.getUserTrophyStatis(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getUserTrophyStatis",
            value: (c = o(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            seasonId: this.seasonId
                        }, e.next = 3, a.default.userTrophyStatis(t);

                      case 3:
                        1 == (r = e.sent).code && (this.userTrophyData = r.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    exports.default = c;
}();