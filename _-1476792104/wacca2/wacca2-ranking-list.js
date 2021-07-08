!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(t, a.key, a);
            }
        }
        return function(e, n, a) {
            return n && t(e.prototype, n), a && t(e, a), e;
        };
    }(), e = s(require("./../npm/wepy/lib/wepy.js")), n = s(require("./../components/wacca2-rank-list-item.js")), a = s(require("./../components/wacca2-navigation.js")), i = s(require("./../components/wacca2-rank-assembly.js")), r = s(require("./../utils/wacca-api.js"));
    s(require("./../utils/wechat.js"));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function c(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new Promise(function(t, n) {
                return function a(i, r) {
                    try {
                        var s = e[i](r), c = s.value;
                    } catch (t) {
                        return void n(t);
                    }
                    if (!s.done) return Promise.resolve(c).then(function(t) {
                        a("next", t);
                    }, function(t) {
                        a("throw", t);
                    });
                    t(c);
                }("next");
            });
        };
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function u(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var p = function(e) {
        function s() {
            var t, e, r;
            o(this, s);
            for (var c = arguments.length, p = Array(c), l = 0; l < c; l++) p[l] = arguments[l];
            return e = r = u(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(p))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "总分排行"
                },
                wacca2RankAssembly: {
                    "xmlns:v-bind": "",
                    "v-bind:rankInfo.sync": "rankInfo",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:arr.sync": "top3",
                    "v-bind:type.sync": "showingType"
                },
                wacca2RankListItem: {
                    "v-bind:arr.sync": "rankList",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:type.sync": "showingType"
                },
                wacca2RankAssembly2: {
                    "v-bind:rankInfo.sync": "ratingRankInfo",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:arr.sync": "raingTop3",
                    "v-bind:type.sync": "showingType"
                },
                wacca2RankListItem2: {
                    "v-bind:arr.sync": "ratingArr",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:type.sync": "showingType"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: a.default,
                wacca2RankAssembly: i.default,
                wacca2RankListItem: n.default,
                wacca2RankAssembly2: i.default,
                wacca2RankListItem2: n.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                menuList: [ {
                    title: "总分排行"
                }, {
                    title: "关卡排行"
                }, {
                    title: "Rating排行"
                } ],
                selectIndex: 0,
                navbar: [ "NORMAL", "HARD", "EXPERT", "INFERNO" ],
                currentTab: 0,
                top3: [],
                rankList: [],
                rankInfo: "",
                rank_name_list: [],
                showingType: "",
                pageNo: 1,
                pageSize: 10,
                canLoadMore: !0,
                ratingArr: [],
                raingTop3: [],
                pageNoRating: 1,
                pageSizeRating: 10,
                canLoadMoreRating: !0,
                ratingRankInfo: ""
            }, r.computed = {}, r.methods = {
                topMenuDidSelect: function(t) {
                    this.selectIndex != t && (this.selectIndex = t, 0 == t ? this.showingType = "All-ranking" : 2 == t && (this.showingType = "Rate-ranking"));
                },
                navbarTap: function(t) {
                    this.currentTab != t.currentTarget.dataset.index && (this.currentTab = t.currentTarget.dataset.index, 
                    this.pageNo = 1, this.canLoadMore = !0, this.getStatisRank());
                },
                rankRankingClick: function(t) {
                    wx.navigateTo({
                        url: "wacca2-rank-ranking?name=" + t.trialClassName + "&id=" + t.trialClass
                    });
                }
            }, r.events = {}, u(r, e);
        }
        var p, l, g;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(s, e), t(s, [ {
            key: "onLoad",
            value: function(t) {
                var e = this;
                setTimeout(function() {
                    e.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(t) {
                        n.screenWidth = t.screenWidth;
                    }
                }), this.getStatisRank(), this.getRatingList(), this.getRatingRank(), this.showingType = "All-ranking";
            }
        }, {
            key: "onReachBottom",
            value: function() {
                if (console.log("------------------------"), 0 == this.selectIndex) {
                    if (!this.canLoadMore) return;
                    this.pageNo++, this.getStatisRank();
                } else {
                    if (!this.canLoadMoreRating) return;
                    this.pageNoRating++, this.getRatingRank();
                }
            }
        }, {
            key: "getStatisRank",
            value: (g = c(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.currentTab + 1
                        }, t.next = 3, r.default.statisRankWacca2(e);

                      case 3:
                        if (1 != (n = t.sent).code) {
                            t.next = 12;
                            break;
                        }
                        if ((!n.data.rankList.list || n.data.rankList.list.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList.list) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.rankList = n.data.rankList.list : this.rankList = this.rankList.concat(n.data.rankList.list), 
                        this.rankInfo = n.data.rankInfo, this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "getRatingRank",
            value: (l = c(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageNo: this.pageNoRating,
                            pageSize: this.pageSizeRating
                        }, t.next = 3, r.default.getRatingRakingListWacca2(e);

                      case 3:
                        if (1 != (n = t.sent).code) {
                            t.next = 12;
                            break;
                        }
                        if ((!n.data.rankList.list || n.data.rankList.list.length < this.pageSize) && (this.canLoadMoreRating = !1), 
                        n.data.rankList.list) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        1 == this.pageNoRating ? this.ratingArr = n.data.rankList.list : this.ratingArr = this.ratingArr.concat(n.data.rankList.list), 
                        this.ratingRankInfo = n.data.rankInfo, this.raingTop3 = this.ratingArr.slice(0, 3), 
                        this.$apply();

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getRatingList",
            value: (p = c(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageSize: 20
                        }, t.next = 3, r.default.getTotalTrialListNameWacca2(e);

                      case 3:
                        1 == (n = t.sent).code && (this.rank_name_list = n.data, this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), s;
    }(e.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(p, "wacca2/wacca2-ranking-list"));
}();