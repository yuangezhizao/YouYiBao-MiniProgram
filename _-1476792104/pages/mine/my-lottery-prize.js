!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), r = i(require("./../../utils/api.js")), n = (i(require("./../../utils/environment.js")), 
    i(require("./../../components/match-statusbar.js")));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function i() {
            var e, t, r;
            o(this, i);
            for (var s = arguments.length, u = Array(s), p = 0; p < s; p++) u[p] = arguments[p];
            return t = r = a(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "我的奖品"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                prizeList: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10
            }, r.methods = {
                setAddress: function(e) {
                    1 == e.prizeType ? wx.navigateTo({
                        url: "/pages/mine/coin-record"
                    }) : 2 == e.prizeType ? wx.navigateTo({
                        url: "/pages/mine/integral-record"
                    }) : 0 == e.isReceive ? wx.navigateTo({
                        url: "/pages/mine/set-prize-address?prizeName=" + e.prizeName + "&prizeId=" + e.id + "&isReceive=" + e.isReceive
                    }) : wx.navigateTo({
                        url: "/pages/mine/set-prize-address?prizeName=" + e.prizeName + "&expressName=" + e.expressName + "&expressMobile=" + e.expressMobile + "&expressAddress=" + e.expressAddress + "&isReceive=" + e.isReceive
                    });
                }
            }, a(r, t);
        }
        var s, u;
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
                this.getMyPrizeList();
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
                this.canLoadMore && (this.pageNo++, this.getMyPrizeList());
            }
        }, {
            key: "getMyPrizeList",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.myPrizeList(t);

                      case 3:
                        1 == (n = e.sent).code && ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.prizeList = n.data : this.prizeList = this.prizeList.concat(n.data), 
                        this.$apply(), console.log("我的奖品列表", n));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(i, o) {
                        try {
                            var a = e[i](o), s = a.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/mine/my-lottery-prize"));
}();