!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, r, a) {
            return r && e(t.prototype, r), a && e(t, a), t;
        };
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), r = n(require("./../../components/match-statusbar.js")), a = n(require("./../../utils/konami-api.js"));
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
    var o = function(t) {
        function n() {
            var e, t, a;
            i(this, n);
            for (var o = arguments.length, c = Array(o), u = 0; u < o; u++) c[u] = arguments[u];
            return t = a = s(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "曲目大全"
                }
            }, a.$events = {}, a.components = {
                statusbar: r.default
            }, a.data = {
                currentTab: 0,
                navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
                musicGrade: 0,
                trackList: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 20,
                trackName: ""
            }, a.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    1 == this.currentTab ? this.musicGrade = 1 : 2 == this.currentTab ? this.musicGrade = 2 : this.musicGrade = 0, 
                    this.pageNo = 1, this.canLoadMore = !0, this.trackList = [], this.getListMusic5());
                },
                trackRank: function(e) {
                    wx.navigateTo({
                        url: "/pages/record/music5-rank?musicId=" + e + "&musicGrade=" + this.musicGrade
                    });
                },
                getTrackName: function(e) {
                    console.log(e), this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, 
                    this.canLoadMore = !0, this.getListMusic5());
                },
                searchTrack: function() {
                    "" != this.trackName && this.getListMusic5();
                }
            }, s(a, t);
        }
        var o, c;
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
                this.getListMusic5();
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
                this.canLoadMore && (this.pageNo++, this.getListMusic5());
            }
        }, {
            key: "getListMusic5",
            value: (o = regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            isLocks: this.musicGrade,
                            name: this.trackName,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, a.default.listMusic5(t);

                      case 3:
                        if (1 == (r = e.sent).code) {
                            e.next = 7;
                            break;
                        }
                        e.next = 16;
                        break;

                      case 7:
                        if (!r.data) {
                            e.next = 14;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        1 == this.pageNo ? this.trackList = r.data : this.trackList = this.trackList.concat(r.data), 
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
                var e = o.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function a(n, i) {
                        try {
                            var s = e[n](i), o = s.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!s.done) return Promise.resolve(o).then(function(e) {
                            a("next", e);
                        }, function(e) {
                            a("throw", e);
                        });
                        t(o);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(o, "pages/record/music5-track"));
}();