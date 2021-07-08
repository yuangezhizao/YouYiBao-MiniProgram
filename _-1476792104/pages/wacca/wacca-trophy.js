!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
        };
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), a = s(require("./../../components/custom-statusbar.js")), r = s(require("./../../components/star.js")), n = s(require("./../../utils/wacca-api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function r(n, s) {
                    try {
                        var o = t[n](s), i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!o.done) return Promise.resolve(i).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
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
            var e, t, n;
            i(this, s);
            for (var o = arguments.length, c = Array(o), p = 0; p < o; p++) c[p] = arguments[p];
            return t = n = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {
                trophyList: {
                    com: "star",
                    props: ""
                }
            }, n.$props = {
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
            }, n.$events = {}, n.components = {
                customStatusbar: a.default,
                star: r.default,
                star1: r.default,
                star2: r.default,
                star3: r.default,
                star4: r.default
            }, n.mixins = [], n.data = {
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
                } ],
                type: 1
            }, n.computed = {}, n.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index);
                },
                trophyDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-trophy-detail?trophyRarity=" + e + "&seasonId=" + this.seasonId + "&type=" + this.type
                    });
                },
                changeSeason: function(e) {
                    var t = e.detail.current;
                    this.seasonId = this.seasonIdsList[t], this.getUserTrophyStatis();
                }
            }, n.events = {}, u(n, t);
        }
        var c, p;
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
                this.type = e.type, this.getSeasonIds();
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
            value: (p = o(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("1" != this.type) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, n.default.seasonIds();

                      case 3:
                        t = e.sent, this.dealSeasonIds(t), e.next = 11;
                        break;

                      case 7:
                        return e.next = 9, n.default.getSeasonListWacca2();

                      case 9:
                        a = e.sent, this.dealSeasonIds(a);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "dealSeasonIds",
            value: function(e) {
                1 == e.code && (this.seasonIdsList = e.data, this.seasonId = this.seasonIdsList[0], 
                this.getUserTrophyStatis(), this.$apply());
            }
        }, {
            key: "getUserTrophyStatis",
            value: (c = o(regeneratorRuntime.mark(function e() {
                var t, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            seasonId: this.type
                        }, 1 != this.type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, n.default.userTrophyStatis(t);

                      case 4:
                        a = e.sent, this.dealStatis(a), e.next = 12;
                        break;

                      case 8:
                        return e.next = 10, n.default.userTrophyStatisWacca2(t);

                      case 10:
                        r = e.sent, this.dealStatis(r);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "dealStatis",
            value: function(e) {
                1 == e.code && (this.userTrophyData = e.data, this.$apply());
            }
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/wacca/wacca-trophy"));
}();