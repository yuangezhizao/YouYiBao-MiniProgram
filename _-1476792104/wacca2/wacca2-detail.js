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
    }(), t = s(require("./../npm/wepy/lib/wepy.js")), a = s(require("./../components/wacca2-navigation.js")), r = s(require("./../utils/wacca-api.js")), n = (s(require("./../components/custom-dialog.js")), 
    s(require("./../components/match-dialog.js")), s(require("./../utils/api.js")));
    s(require("./../utils/wechat.js")), s(require("./../utils/environment.js")), s(require("./../components/custom-progress.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function r(n, s) {
                    try {
                        var i = t[n](s), o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!i.done) return Promise.resolve(o).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(o);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function s() {
            var e, t, r;
            o(this, s);
            for (var n = arguments.length, i = Array(n), u = 0; u < n; u++) i[u] = arguments[u];
            return t = r = c(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(i))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "华卡音舞Ver.2"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: a.default
            }, r.mixins = [], r.data = {
                showAlert: !1,
                alertTxt: "",
                record: {},
                navbar: [ "NORMAL", "HARD", "EXPERT", "INFERNO" ],
                currentTab: 0,
                memberInfo: "",
                days: 0,
                showScan: !1,
                scanTxt: "",
                screenWidth: 250,
                validRate: 80,
                list: [],
                myStatisRankInfo: {},
                rateImage: ""
            }, r.mixins = [], r.computed = {}, r.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    this.getStatisRank());
                },
                allResultClick: function() {
                    wx.navigateTo({
                        url: "wacca2-result"
                    });
                },
                rankListClick: function() {
                    wx.navigateTo({
                        url: "wacca2-ranking-list"
                    });
                },
                songClick: function() {
                    var e = {
                        id: this.record.musicId,
                        musicGrade: this.record.musicGrade,
                        music_name: this.record.musicName,
                        image_url: this.record.musicImageUrl
                    }, t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-song-ranking?item=" + t
                    });
                }
            }, r.events = {}, c(r, t);
        }
        var u, p, l, g, m;
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
                var t = this;
                wx.getSystemInfo({
                    success: function(e) {
                        t.screenWidth = e.screenWidth;
                    }
                }), this.getBanner(), null != e.json ? this.record = JSON.parse(e.json) : this.getUserMusicRate(), 
                this.getStatisRank(), this.$apply();
            }
        }, {
            key: "onShow",
            value: (m = i(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.getMemberInfo();

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return m.apply(this, arguments);
            })
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
            key: "getStatisRank",
            value: (g = i(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicGrade: this.currentTab + 1
                        }, e.next = 3, r.default.statisRankWacca2(t);

                      case 3:
                        1 == (a = e.sent).code && (this.myStatisRankInfo = a.data.rankInfo, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.memberInfoWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
                        this.validRate = (this.memberInfo.validDays > 90 ? 90 : this.memberInfo.validDays) / 90 * 100, 
                        this.dealRateImage(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getBanner",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: "4"
                        }, e.next = 3, n.default.adData(t);

                      case 3:
                        0 == (a = e.sent).retCode && (this.list = a.data);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getUserMusicRate",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 10
                        }, e.next = 3, r.default.userMusicRateWacca2(t);

                      case 3:
                        1 == (a = e.sent).code && (n = a.data.records.list[0], this.dealRecord(n), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "dealRateImage",
            value: function() {
                var e = "", t = this.memberInfo;
                e = t.rating <= 299 ? "000" : t.rating <= 599 ? "300" : t.rating <= 999 ? "600" : t.rating <= 1299 ? "1000" : t.rating <= 1599 ? "1300" : t.rating <= 1899 ? "1600" : t.rating <= 2199 ? "1900" : t.rating <= 2499 ? "2200" : "2500", 
                this.rateImage = "http://yyb-oss.universal-space.cn/imgs/wacca2/firstpage/" + e + ".png";
            }
        }, {
            key: "dealRecord",
            value: function(e) {
                var t = e, a = "", r = "";
                1 == t.musicGrade ? (a = "normal", r = "NORMAL") : 2 == t.musicGrade ? (a = "hard", 
                r = "HARD") : 3 == t.musicGrade ? (a = "expert", r = "EXPERT") : (a = "inferno", 
                r = "INFERNO"), t.type = a;
                var n = "" + Math.floor(t.rankLevel);
                10 * t.rankLevel - 10 * n >= 7 && (n += "+"), t.typeDesc = r + " " + n;
                var s = [ "D", "C", "B", "A", "AA", "AAA", "S", "SS", "SSS", "MASTER" ][t.rate - 1];
                t.image1 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + s + ".png", 
                t.image2 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + t.flag + ".png", 
                t.gradeList = [ {
                    type: "Marvelous",
                    score: t.marvelouscount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/marvelous_score.png"
                }, {
                    type: "Great",
                    score: t.greatCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/great_score.png"
                }, {
                    type: "Good",
                    score: t.goodCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/good_score.png"
                }, {
                    type: "Miss",
                    score: t.missCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/miss_score.png"
                }, {
                    type: "Fast",
                    score: t.fastCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/fast_score.png"
                }, {
                    type: "Late",
                    score: t.lateCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/late_score.png"
                }, {
                    type: "Combo",
                    score: t.comboCount,
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/combo_score.png"
                } ], this.record = t;
            }
        } ]), s;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-detail"));
}();