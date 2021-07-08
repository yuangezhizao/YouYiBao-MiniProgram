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
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var s = function(e) {
        function a() {
            var t, e, r;
            o(this, a);
            for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return e = r = i(this, (t = a.__proto__ || Object.getPrototypeOf(a)).call.apply(t, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "全国排行"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                navbar: [ "NORMAL", "HARD", "EXPERT" ],
                currentTab: 0,
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
                    this.pageNo = 1, this.anLoadMore = !0, this.getStatisRank());
                }
            }, r.events = {}, i(r, e);
        }
        var s, u;
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
            value: function() {
                this.getStatisRank();
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
                this.canLoadMore && (this.pageNo++, this.getStatisRank());
            }
        }, {
            key: "getStatisRank",
            value: (s = regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.currentTab + 1
                        }, t.next = 3, r.default.statisRank(e);

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
            }), u = function() {
                var t = s.apply(this, arguments);
                return new Promise(function(e, n) {
                    return function r(a, o) {
                        try {
                            var i = t[a](o), s = i.value;
                        } catch (t) {
                            return void n(t);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        e(s);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(e.default.page);
    exports.default = s;
}();