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
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), a = n(require("./../../components/custom-statusbar.js")), r = n(require("./../../utils/wacca-api.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function n() {
            var e, t, r;
            i(this, n);
            for (var c = arguments.length, o = Array(c), u = 0; u < c; u++) o[u] = arguments[u];
            return t = r = s(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(o))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "曲目大全"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: a.default
            }, r.mixins = [], r.data = {
                currentTab: 0,
                navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
                musicGrade: 0,
                trackList: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 20,
                trackName: ""
            }, r.computed = {}, r.methods = {
                navbarTap: function(e) {
                    if (this.currentTab != e.currentTarget.dataset.index) {
                        switch (this.currentTab = e.currentTarget.dataset.index, this.currentTab) {
                          case 1:
                            this.musicGrade = 1;
                            break;

                          case 2:
                            this.musicGrade = 2;
                            break;

                          default:
                            this.musicGrade = 0;
                        }
                        this.trackList = [], this.pageNo = 1, this.canLoadMore = !0, this.getAllMusicList();
                    }
                },
                trackRank: function(e) {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-single-rank?musicId=" + e
                    });
                },
                getTrackName: function(e) {
                    this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, this.canLoadMore = !0, 
                    this.getAllMusicList());
                },
                searchTrack: function() {
                    "" != this.trackName && this.getAllMusicList();
                }
            }, r.events = {}, s(r, t);
        }
        var c, o;
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
                this.getAllMusicList();
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
                this.canLoadMore && (this.pageNo++, this.getAllMusicList());
            }
        }, {
            key: "getAllMusicList",
            value: (c = regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            isLocks: this.musicGrade,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            name: this.trackName
                        }, e.next = 3, r.default.allMusicList(t);

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
            }), o = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, a) {
                    return function r(n, i) {
                        try {
                            var s = e[n](i), c = s.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!s.done) return Promise.resolve(c).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(c);
                    }("next");
                });
            }, function() {
                return o.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/wacca/wacca-track"));
}();