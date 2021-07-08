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
    }(), t = s(require("./../npm/wepy/lib/wepy.js")), a = s(require("./../components/wacca2-rank-list-item.js")), n = s(require("./../components/wacca2-navigation.js")), r = s(require("./../components/wacca2-rank-assembly.js")), i = (s(require("./../utils/wechat.js")), 
    s(require("./../utils/wacca-api.js")));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function n(r, i) {
                    try {
                        var s = t[r](i), c = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!s.done) return Promise.resolve(c).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(t) {
        function s() {
            var e, t, i;
            o(this, s);
            for (var c = arguments.length, p = Array(c), l = 0; l < c; l++) p[l] = arguments[l];
            return t = i = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(p))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    title: "单曲排行"
                },
                wacca2RankAssembly: {
                    "xmlns:v-bind": "",
                    "v-bind:rankInfo.sync": "rankInfo",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:arr.sync": "top3",
                    type: "Single-song"
                },
                wacca2RankListItem: {
                    "v-bind:arr.sync": "arr",
                    "v-bind:screenWidth.sync": "screenWidth",
                    type: "Single-song"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default,
                wacca2RankAssembly: r.default,
                wacca2RankListItem: a.default
            }, i.mixins = [], i.data = {
                screenWidth: 300,
                imageWidth: 50,
                model: "",
                top3: [],
                rankInfo: "",
                arr: [],
                navbar: [ "NORMAL", "HARD", "EXPERT", "INFERNO" ],
                midArr: [ {
                    type: "normal",
                    typeDesc: "NORMAL",
                    image1: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/02.png",
                    image2: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/01.png",
                    play_count: 0,
                    max_score: 0
                }, {
                    type: "hard",
                    typeDesc: "HARD",
                    image1: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/02.png",
                    image2: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/01.png",
                    play_count: 0,
                    max_score: 0
                }, {
                    type: "expert",
                    typeDesc: "EXPERT",
                    image1: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/02.png",
                    image2: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/01.png",
                    play_count: 0,
                    max_score: 0
                }, {
                    type: "inferno",
                    typeDesc: "INFERNO",
                    image1: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/02.png",
                    image2: "http://yyb-oss.universal-space.cn/imgs/wacca2/rating/01.png",
                    play_count: 0,
                    max_score: 0
                } ],
                pageSize: 10,
                pageNo: 1,
                canLoadMore: !0,
                musicGrade: 1,
                currentTab: 0
            }, i.computed = {}, i.methods = {
                navbarTap: function(e) {
                    if (this.currentTab != e.currentTarget.dataset.index) {
                        switch (this.currentTab = e.currentTarget.dataset.index, this.currentTab) {
                          case 0:
                            this.musicGrade = 1;
                            break;

                          case 1:
                            this.musicGrade = 2;
                            break;

                          case 2:
                            this.musicGrade = 3;
                            break;

                          case 3:
                            this.musicGrade = 4;
                            break;

                          case 4:
                            this.musicGrade = 5;
                            break;

                          default:
                            this.musicGrade = 0;
                        }
                        this.pageNo = 1, this.canLoadMore = !0, this.getData();
                    }
                }
            }, i.events = {}, u(i, t);
        }
        var p, l;
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getData());
            }
        }, {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var a = this;
                wx.getSystemInfo({
                    success: function(e) {
                        a.screenWidth = e.screenWidth, a.imageWidth = .085 * e.screenWidth;
                    }
                }), this.model = JSON.parse(e.item), this.musicGrade = this.model.musicGrade, this.currentTab = this.musicGrade - 1, 
                this.loadSongData(), this.$apply(), this.getData();
            }
        }, {
            key: "loadSongData",
            value: (l = c(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicId: this.model.id
                        }, e.next = 3, i.default.getSongDetailWacca2(t);

                      case 3:
                        1 == (a = e.sent).code && (0 == parseInt(a.data.infernoLevel) ? (this.navbar = [ "NORMAL", "HARD", "EXPERT" ], 
                        this.midArr.splice(this.midArr.length - 1, 1)) : this.navbar = [ "NORMAL", "HARD", "EXPERT", "INFERNO" ]);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getData",
            value: (p = c(regeneratorRuntime.mark(function e() {
                var t, a, n, r, s, c, o, u, p, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.musicGrade,
                            musicId: this.model.id
                        }, e.next = 3, i.default.getSongRakingWacca2(t);

                      case 3:
                        if (1 != (a = e.sent).code) ; else {
                            for (a.data ? (a.data.rankList.list.length < this.pageSize && (this.canLoadMore = !1), 
                            1 == this.pageNo ? this.arr = a.data.rankList.list : this.arr = this.arr.concat(a.data.rankList.list), 
                            this.rankInfo = a.data.rankInfo, this.top3 = this.arr.slice(0, 3)) : this.arr = "", 
                            n = a.data.musicInfo, r = 0, s = [ "D", "C", "B", "A", "AA", "AAA", "S", "SS", "SSS", "MASTER" ], 
                            c = "", o = "", u = 0; u < n.length; u++) p = n[u], r += p.play_count, l = s[p.rate - 1], 
                            p.image1 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + l + ".png", 
                            p.image2 = "http://yyb-oss.universal-space.cn/imgs/wacca2/grade/" + p.flag + ".png", 
                            1 == p.music_grade ? (c = "normal", o = "NORMAL") : 2 == p.music_grade ? (c = "hard", 
                            o = "HARD") : 3 == p.music_grade ? (c = "expert", o = "EXPERT") : (c = "inferno", 
                            o = "INFERNO"), p.type = c, p.typeDesc = o;
                            this.midArr.forEach(function(e) {
                                n.forEach(function(t) {
                                    e.type == t.type && (e.max_score = t.max_score, e.image1 = t.image1, e.image2 = t.image2, 
                                    e.play_count = t.play_count);
                                });
                            }), this.model.play_count = r, this.$apply();
                        }

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
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(p, "wacca2/wacca2-song-ranking"));
}();