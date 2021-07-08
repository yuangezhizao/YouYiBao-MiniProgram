!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var t = function() {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var r = e[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        return function(e, a, r) {
            return a && t(e.prototype, a), r && t(e, r), e;
        };
    }(), e = n(require("./../npm/wepy/lib/wepy.js")), a = n(require("./../components/custom-statusbar.js")), r = n(require("./../utils/wacca-api.js"));
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var o = function(e) {
        function n() {
            var t, e, r;
            i(this, n);
            for (var o = arguments.length, c = Array(o), u = 0; u < o; u++) c[u] = arguments[u];
            return e = r = s(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(c))), 
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
                navbarTap: function(t) {
                    if (this.currentTab != t.currentTarget.dataset.index) {
                        switch (this.currentTab = t.currentTarget.dataset.index, this.currentTab) {
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
                trackRank: function(t) {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-single-rank?musicId=" + t
                    });
                },
                getTrackName: function(t) {
                    this.trackName = t.detail.value, 0 == t.detail.cursor && (this.pageNo = 1, this.canLoadMore = !0, 
                    this.getAllMusicList());
                },
                searchTrack: function() {
                    "" != this.trackName && this.getAllMusicList();
                }
            }, r.events = {}, s(r, e);
        }
        var o, c;
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
        }(n, e), t(n, [ {
            key: "onLoad",
            value: function() {
                this.getAllMusicList();
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "onShareAppMessage",
            value: function(t) {
                return {
                    title: "关注游艺宝，发现更多精彩",
                    path: "/pages/index/index",
                    imageUrl: "/assets/imgs/share.png",
                    success: function(t) {
                        console.log("转发成功！");
                    },
                    fail: function(t) {
                        return console.log(t.errMsg);
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
            value: (o = regeneratorRuntime.mark(function t() {
                var e, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            isLocks: this.musicGrade,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            name: this.trackName
                        }, t.next = 3, r.default.allMusicList(e);

                      case 3:
                        if (1 == (a = t.sent).code) {
                            t.next = 7;
                            break;
                        }
                        t.next = 16;
                        break;

                      case 7:
                        if (!a.data) {
                            t.next = 14;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            t.next = 11;
                            break;
                        }
                        return t.abrupt("return");

                      case 11:
                        1 == this.pageNo ? this.trackList = a.data : this.trackList = this.trackList.concat(a.data), 
                        t.next = 15;
                        break;

                      case 14:
                        this.trackList = "";

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }), c = function() {
                var t = o.apply(this, arguments);
                return new Promise(function(e, a) {
                    return function r(n, i) {
                        try {
                            var s = t[n](i), o = s.value;
                        } catch (t) {
                            return void a(t);
                        }
                        if (!s.done) return Promise.resolve(o).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        e(o);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(e.default.page);
    exports.default = o;
}();