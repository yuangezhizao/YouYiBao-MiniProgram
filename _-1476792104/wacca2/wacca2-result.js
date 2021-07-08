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
    }(), t = n(require("./../npm/wepy/lib/wepy.js")), a = n(require("./../components/wacca2-navigation.js")), r = n(require("./../utils/wacca-api.js"));
    n(require("./../utils/wechat.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function n() {
            var e, t, r;
            s(this, n);
            for (var c = arguments.length, i = Array(c), u = 0; u < c; u++) i[u] = arguments[u];
            return t = r = o(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(i))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "成绩记录"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: a.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                navbar: [ "ALL", "NORMAL", "HARD", "EXPERT", "INFERNO" ],
                navbar2: [ "按时间", "按得分" ],
                currentTab2: 0,
                currentTab: 0,
                gradeWidth: 100,
                scoreMargin: 0,
                gradeList: [],
                recordList: [],
                pageSize: 10,
                pageNo: 1,
                canLoadMore: !0
            }, r.computed = {}, r.methods = {
                navbar2Tap: function(e) {
                    this.currentTab2 != e.currentTarget.dataset.index && (this.currentTab2 = e.currentTarget.dataset.index, 
                    this.pageNo = 1, this.anLoadMore = !0, this.recordList = [], this.getUserMusicRate());
                },
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    this.pageNo = 1, this.anLoadMore = !0, this.recordList = [], this.getUserMusicRate());
                },
                gradeClick: function(e) {
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-detail?json=" + t
                    });
                }
            }, r.events = {}, o(r, t);
        }
        var c, i;
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var a = this;
                wx.getSystemInfo({
                    success: function(e) {
                        a.screenWidth = e.screenWidth, a.gradeWidth = .392 * e.screenWidth, a.scoreMargin = e.screenWidth - (.3066 * e.screenWidth * 2 + 120);
                    }
                }), this.getUserMusicRate();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getUserMusicRate());
            }
        }, {
            key: "getUserMusicRate",
            value: (c = regeneratorRuntime.mark(function e() {
                var t, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            grade: this.currentTab,
                            sort: this.currentTab2 + 1
                        }, e.next = 3, r.default.userMusicRateWacca2(t);

                      case 3:
                        if (1 != (a = e.sent).code) {
                            e.next = 13;
                            break;
                        }
                        if (n = a.data.gather, this.dealData(n), (!a.data.records.list || a.data.records.list.length < this.pageSize) && (this.canLoadMore = !1), 
                        a.data.records.list) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        1 == this.pageNo ? this.recordList = a.data.records.list : this.recordList = this.recordList.concat(a.data.records.list), 
                        this.dealRecord(this.recordList), this.$apply();

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), i = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, a) {
                    return function r(n, s) {
                        try {
                            var o = e[n](s), c = o.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!o.done) return Promise.resolve(c).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(c);
                    }("next");
                });
            }, function() {
                return i.apply(this, arguments);
            })
        }, {
            key: "dealRecord",
            value: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t], r = "", n = "";
                    1 == a.musicGrade ? (r = "normal", n = "NORMAL") : 2 == a.musicGrade ? (r = "hard", 
                    n = "HARD") : 3 == a.musicGrade ? (r = "expert", n = "EXPERT") : (r = "inferno", 
                    n = "INFERNO"), a.type = r;
                    var s = "" + Math.floor(a.rankLevel);
                    10 * a.rankLevel - 10 * s >= 7 && (s += "+"), a.typeDesc = n + " " + s;
                    var o = [ "D", "C", "B", "A", "AA", "AAA", "S", "SS", "SSS", "MASTER" ][a.rate - 1];
                    a.image1 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + o + ".png", 
                    a.image2 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + a.flag + ".png", 
                    a.gradeList = [ {
                        type: "Marvelous",
                        score: a.marvelouscount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/marvelous_score.png"
                    }, {
                        type: "Great",
                        score: a.greatCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/great_score.png"
                    }, {
                        type: "Good",
                        score: a.goodCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/good_score.png"
                    }, {
                        type: "Miss",
                        score: a.missCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/miss_score.png"
                    }, {
                        type: "Fast",
                        score: a.fastCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/fast_score.png"
                    }, {
                        type: "Late",
                        score: a.lateCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/late_score.png"
                    }, {
                        type: "Combo",
                        score: a.comboCount,
                        image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/combo_score.png"
                    } ];
                }
            }
        }, {
            key: "dealData",
            value: function(e) {
                var t = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/";
                this.gradeList = [ [ {
                    icon: t + "clear_1.png",
                    score: null != e ? e.clearCount : 0
                }, {
                    icon: t + "s_1.png",
                    score: null != e ? e.rateSCount : 0
                } ], [ {
                    icon: t + "missless_1.png",
                    score: null != e ? e.misslessCount : 0
                }, {
                    icon: t + "ss_1.png",
                    score: null != e ? e.rateSsCount : 0
                } ], [ {
                    icon: t + "fullcombo_1.png",
                    score: null != e ? e.fullcomboCount : 0
                }, {
                    icon: t + "sss_1.png",
                    score: null != e ? e.rateSssCount : 0
                } ], [ {
                    icon: t + "allmarvelous.png",
                    score: null != e ? e.masterCount : 0
                }, {
                    icon: t + "master_1.png",
                    score: null != e ? e.masterCount : 0
                } ] ], this.$apply();
            }
        } ]), n;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(c, "wacca2/wacca2-result"));
}();