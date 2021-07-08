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
    }(), t = n(require("./../npm/wepy/lib/wepy.js")), a = n(require("./../components/wacca2-navigation.js")), r = (n(require("./../utils/wechat.js")), 
    n(require("./../utils/wacca-api.js")));
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
                wacca2Navigation: {
                    title: "歌曲大全"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: a.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                trackName: "",
                currentTab: 0,
                navbar: [ "NORMAL", "HARD", "EXPERT", "INFERNO" ],
                pageNo: 1,
                pageSize: 10,
                arr: [],
                musicGrade: 1,
                canLoadMore: !0
            }, r.computed = {}, r.methods = {
                getTrackName: function(e) {
                    this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, this.canLoadMore = !0, 
                    this.getSongList());
                },
                searchTrack: function() {
                    "" != this.trackName && this.getSongList();
                },
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
                        this.pageNo = 1, this.canLoadMore = !0, this.getSongList();
                    }
                },
                songClick: function(e) {
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-song-ranking?item=" + t
                    });
                }
            }, r.events = {}, o(r, t);
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getSongList());
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
                        a.screenWidth = e.screenWidth;
                    }
                }), this.getSongList();
            }
        }, {
            key: "getSongList",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, a, n, i, o, s, c, u, h;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            name: this.trackName,
                            musicGrade: this.musicGrade,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, a = "", n = "", 0 == this.currentTab ? (a = "normal", n = "NORMAL") : 1 == this.currentTab ? (a = "hard", 
                        n = "HARD") : 2 == this.currentTab ? (a = "expert", n = "EXPERT") : (a = "inferno", 
                        n = "INFERNO"), i = this, e.next = 7, r.default.getSongsWacca2(t);

                      case 7:
                        if (1 == (o = e.sent).code) {
                            e.next = 11;
                            break;
                        }
                        e.next = 21;
                        break;

                      case 11:
                        if (!o.data) {
                            e.next = 19;
                            break;
                        }
                        if ((!o.data || o.data.length < this.pageSize) && (this.canLoadMore = !1), o.data) {
                            e.next = 15;
                            break;
                        }
                        return e.abrupt("return");

                      case 15:
                        for (1 == this.pageNo ? this.arr = o.data : this.arr = this.arr.concat(o.data), 
                        s = 0; s < this.arr.length; s++) (c = this.arr[s]).type = a, c.musicGrade = i.currentTab + 1, 
                        u = Math.floor(c.level), h = "" + u, 10 * c.level - 10 * h >= 7 && (h += "+"), c.typeDesc = n + " " + h;
                        e.next = 20;
                        break;

                      case 19:
                        this.arr = "";

                      case 20:
                        this.$apply();

                      case 21:
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
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "wacca2/wacca2-song"));
}();