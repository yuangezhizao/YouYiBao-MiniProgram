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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), n = i(require("./../../utils/api.js")), r = (i(require("./../../utils/environment.js")), 
    i(require("./../../utils/units.js"))), a = i(require("./../../components/custom-statusbar.js"));
    i(require("./../../utils/wechat.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
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
        function i() {
            var e, t, n;
            o(this, i);
            for (var r = arguments.length, u = Array(r), c = 0; c < r; c++) u[c] = arguments[c];
            return t = n = s(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "我的积分"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: a.default
            }, n.mixins = [], n.data = {
                integralList: [],
                myIntegral: 0,
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10
            }, n.computed = {}, n.methods = {
                getIntegral: function() {
                    wx.navigateTo({
                        url: "/pages/mine/ticket-record"
                    });
                }
            }, n.events = {}, s(n, t);
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
        }(i, t), e(i, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.getIntegralList();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getIntegralList());
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
            key: "getIntegralList",
            value: (u = regeneratorRuntime.mark(function e() {
                var t, a, i, o, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: 1,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, n.default.scroeList(t);

                      case 3:
                        if (0 != (a = e.sent).retCode) {
                            e.next = 11;
                            break;
                        }
                        if (this.myIntegral = a.score, (!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        a.data) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        if (1 == this.pageNo) {
                            for (i = a.data, o = 0; o < i.length; o++) i[o].add_time = r.default.formatTime(new Date(1e3 * i[o].add_time));
                            this.integralList = i;
                        } else {
                            for (i = a.data, s = 0; s < i.length; s++) i[s].add_time = r.default.formatTime(new Date(1e3 * i[s].add_time));
                            this.integralList = this.integralList.concat(a.data);
                        }
                        this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(a, i) {
                        try {
                            var o = e[a](i), s = o.value;
                        } catch (e) {
                            return void n(e);
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
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/mine/integral-record"));
}();