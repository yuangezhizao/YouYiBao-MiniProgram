!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), a = o(require("./../../utils/konami-api.js")), r = (o(require("./../../components/custom-dialog.js")), 
    o(require("./../../mixins/user-mixin.js")));
    function o(e) {
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
    var u = function(t) {
        function o() {
            var e, t, a;
            i(this, o);
            for (var u = arguments.length, c = Array(u), l = 0; l < u; l++) c[l] = arguments[l];
            return t = a = s(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    title: "ARENA大赛排行榜",
                    leftIcon: "true"
                }
            }, a.$events = {}, a.components = {
                statusbar: n.default
            }, a.mixins = [ r.default ], a.data = {
                showAlert: !1,
                alertTxt: "",
                eventId: "",
                rankList: [],
                rankInfo: null,
                eventDetail: "",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10
            }, a.methods = {}, s(a, t);
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                this.eventId = e.eventId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getEventRank();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getEventRank());
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
            key: "getEventRank",
            value: (u = regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            eventId: this.eventId
                        }, e.next = 3, a.default.eventRank(t);

                      case 3:
                        1 != (n = e.sent).code ? (this.showAlert = !0, this.alertTxt = n.message, this.$apply()) : (this.eventDetail = n.data.eventDetail, 
                        0 === Object.keys(n.data.rankInfo).length ? this.rankInfo = null : this.rankInfo = n.data.rankInfo, 
                        (!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        console.log("getEventRank", this.rankInfo), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function a(r, o) {
                        try {
                            var i = e[r](o), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            a("next", e);
                        }, function(e) {
                            a("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/match/arena-rank"));
}();