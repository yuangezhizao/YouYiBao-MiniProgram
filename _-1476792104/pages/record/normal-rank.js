!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e;
        };
    }(), e = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../components/match-statusbar.js")), n = o(require("./../../mixins/user-mixin.js")), a = o(require("./../../utils/api.js"));
    function o(t) {
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
    var u = function(e) {
        function o() {
            var t, e, a;
            i(this, o);
            for (var u = arguments.length, c = Array(u), p = 0; p < u; p++) c[p] = arguments[p];
            return e = a = s(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "战绩排行榜"
                }
            }, a.$events = {}, a.components = {
                statusbar: r.default
            }, a.data = {
                currentTab: 0,
                navbar: [ "总排行", "月排行", "周排行", "日排行" ],
                productId: "",
                orderBy: "",
                rankInfo: "",
                rankList: [],
                top3: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10,
                fontSize: 0
            }, a.mixins = [ n.default ], a.methods = {
                navbarTap: function(t) {
                    this.currentTab != t.currentTarget.dataset.index && (this.currentTab = t.currentTarget.dataset.index, 
                    1 == this.currentTab ? this.orderBy = "month" : 2 == this.currentTab ? this.orderBy = "week" : 3 == this.currentTab ? this.orderBy = "today" : this.orderBy = "", 
                    this.pageNo = 1, this.canLoadMore = !0, this.getRankList());
                }
            }, s(a, e);
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
        }(o, e), t(o, [ {
            key: "onLoad",
            value: function(t) {
                this.productId = t.productId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getRankList();
            }
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
                this.canLoadMore && (this.pageNo++, this.getRankList());
            }
        }, {
            key: "getRankList",
            value: (u = regeneratorRuntime.mark(function t() {
                var e, r;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            productId: this.productId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            orderBy: this.orderBy
                        }, t.next = 3, a.default.rankList(e);

                      case 3:
                        if (1 == (r = t.sent).code) {
                            t.next = 7;
                            break;
                        }
                        t.next = 15;
                        break;

                      case 7:
                        if ((!r.data.rankList || r.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        r.data.rankList) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        1 == this.pageNo ? this.rankList = r.data.rankList : this.rankList = this.rankList.concat(r.data.rankList), 
                        this.rankInfo = r.data.rankInfo, this.rankInfo.rank <= 99 ? this.fontSize = 60 : this.fontSize = 40, 
                        this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }), c = function() {
                var t = u.apply(this, arguments);
                return new Promise(function(e, r) {
                    return function n(a, o) {
                        try {
                            var i = t[a](o), s = i.value;
                        } catch (t) {
                            return void r(t);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(t) {
                            n("next", t);
                        }, function(t) {
                            n("throw", t);
                        });
                        e(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), o;
    }(e.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/record/normal-rank"));
}();