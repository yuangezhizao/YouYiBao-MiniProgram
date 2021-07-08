!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var t = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
        };
    }(), e = a(require("./../npm/wepy/lib/wepy.js")), n = a(require("./../components/custom-statusbar.js")), r = a(require("./../utils/wacca-api.js"));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function i(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new Promise(function(t, n) {
                return function r(a, i) {
                    try {
                        var o = e[a](i), s = o.value;
                    } catch (t) {
                        return void n(t);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(t) {
                        r("next", t);
                    }, function(t) {
                        r("throw", t);
                    });
                    t(s);
                }("next");
            });
        };
    }
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var u = function(e) {
        function a() {
            var t, e, r;
            o(this, a);
            for (var i = arguments.length, u = Array(i), c = 0; c < i; c++) u[c] = arguments[c];
            return e = r = s(this, (t = a.__proto__ || Object.getPrototypeOf(a)).call.apply(t, [ this ].concat(u))), 
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
                navbarTap: function(t) {
                    this.currentTab != t.currentTarget.dataset.index && (this.currentTab = t.currentTarget.dataset.index, 
                    this.pageNo = 1, this.anLoadMore = !0, this.getMusicRank());
                }
            }, r.events = {}, s(r, e);
        }
        var u, c;
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
        }(a, e), t(a, [ {
            key: "onLoad",
            value: function(t) {
                this.musicId = t.musicId, this.getMusicInfo(), this.getMusicRank();
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
                this.canLoadMore && (this.pageNo++, this.getMusicRank());
            }
        }, {
            key: "getMusicInfo",
            value: (c = i(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            musicId: this.musicId
                        }, t.next = 3, r.default.musicInfo(e);

                      case 3:
                        1 == (n = t.sent).code && (this.musicDetail = n.data, this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "getMusicRank",
            value: (u = i(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            musicId: this.musicId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.currentTab + 1
                        }, t.next = 3, r.default.musicRank(e);

                      case 3:
                        if (1 != (n = t.sent).code) {
                            t.next = 13;
                            break;
                        }
                        if ((!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.rankInfo = n.data.rankInfo, this.rankInfo.rank <= 99 ? this.fontSize = 60 : this.rankInfo.rank <= 999 ? this.fontSize = 40 : this.fontSize = 30, 
                        this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(e.default.page);
    exports.default = u;
}();