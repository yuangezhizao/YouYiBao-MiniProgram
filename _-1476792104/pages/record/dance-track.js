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
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), a = n(require("./../../components/match-statusbar.js")), r = n(require("./../../utils/konami-api.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function n() {
            var e, t, r;
            i(this, n);
            for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
            return t = r = o(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "曲目大全"
                }
            }, r.$events = {}, r.components = {
                statusbar: a.default
            }, r.data = {
                currentTab: 0,
                navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
                musicGrade: 0,
                trackList: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 20,
                trackName: ""
            }, r.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    1 == this.currentTab ? this.musicGrade = 1 : 2 == this.currentTab ? this.musicGrade = 2 : this.musicGrade = 0, 
                    this.pageNo = 1, this.canLoadMore = !0, this.trackList = [], this.getListDance());
                },
                trackRank: function(e) {
                    wx.navigateTo({
                        url: "/pages/record/dance-rank?musicId=" + e + "&musicGrade=" + this.musicGrade
                    });
                },
                getTrackName: function(e) {
                    console.log(e), this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, 
                    this.canLoadMore = !0, this.getListDance());
                },
                searchTrack: function() {
                    "" != this.trackName && this.getListDance();
                }
            }, o(r, t);
        }
        var s, c;
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
            value: function() {
                this.getListDance();
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getListDance());
            }
        }, {
            key: "getListDance",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            isLocks: this.musicGrade,
                            name: this.trackName,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.listDance(t);

                      case 3:
                        if (1 == (a = e.sent).code) {
                            e.next = 7;
                            break;
                        }
                        e.next = 16;
                        break;

                      case 7:
                        if (!a.data) {
                            e.next = 14;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        1 == this.pageNo ? this.trackList = a.data : this.trackList = this.trackList.concat(a.data), 
                        e.next = 15;
                        break;

                      case 14:
                        this.trackList = "";

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, a) {
                    return function r(n, i) {
                        try {
                            var o = e[n](i), s = o.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/dance-track"));
}();