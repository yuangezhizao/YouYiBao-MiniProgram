!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/custom-statusbar.js")), r = a(require("./../../utils/wacca-api.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
                    try {
                        var o = t[a](i), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function a() {
            var e, t, r;
            o(this, a);
            for (var i = arguments.length, u = Array(i), c = 0; c < i; c++) u[c] = arguments[c];
            return t = r = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "单曲排行榜"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                navbar: [ "NORMAL", "HARD", "EXPERT" ],
                currentTab: 0,
                musicId: "",
                musicDetail: "",
                rankList: [],
                top3: [],
                rankInfo: "",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10,
                fontSize: 0
            }, r.computed = {}, r.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    this.pageNo = 1, this.anLoadMore = !0, this.getMusicRank());
                }
            }, r.events = {}, s(r, t);
        }
        var u, c;
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function(e) {
                this.musicId = e.musicId, this.getMusicInfo(), this.getMusicRank();
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getMusicRank());
            }
        }, {
            key: "getMusicInfo",
            value: (c = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicId: this.musicId
                        }, e.next = 3, r.default.musicInfo(t);

                      case 3:
                        1 == (n = e.sent).code && (this.musicDetail = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "getMusicRank",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            musicId: this.musicId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.currentTab + 1
                        }, e.next = 3, r.default.musicRank(t);

                      case 3:
                        if (1 != (n = e.sent).code) {
                            e.next = 13;
                            break;
                        }
                        if ((!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.rankInfo = n.data.rankInfo, this.rankInfo.rank <= 99 ? this.fontSize = 60 : this.rankInfo.rank <= 999 ? this.fontSize = 40 : this.fontSize = 30, 
                        this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/wacca/wacca-single-rank"));
}();