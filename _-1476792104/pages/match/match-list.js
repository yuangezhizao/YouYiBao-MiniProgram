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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), a = o(require("./../../components/match-card.js")), i = o(require("./../../utils/api.js")), r = o(require("./../../components/custom-dialog.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, i;
            s(this, o);
            for (var u = arguments.length, l = Array(u), h = 0; h < u; h++) l[h] = arguments[h];
            return t = i = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {
                matchList: {
                    com: "matchCard",
                    props: "item"
                }
            }, i.$props = {
                matchCard: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "v-bind:item.once": {
                        value: "item",
                        type: "item",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    type: {
                        value: "match",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "xmlns:v-on": {
                        value: "",
                        for: "matchList",
                        item: "item",
                        index: "index",
                        key: "index"
                    }
                },
                statusbar: {
                    leftIcon: "true",
                    title: "更多赛事"
                },
                customDialog: {
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt"
                }
            }, i.$events = {
                matchCard: {
                    "v-on:eventHandle": "matchDetail"
                },
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, i.components = {
                statusbar: n.default,
                matchCard: a.default,
                customDialog: r.default
            }, i.data = {
                status: 1,
                matchList: [],
                showAlert: !1,
                alertTxt: "",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 3
            }, i.methods = {
                changeTab: function(e) {
                    this.status = e, this.matchList = "", this.pageNo = 1, this.canLoadMore = !0, this.getEventList();
                },
                matchDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/match-detail?eventId=" + e.eventId
                    });
                }
            }, c(i, t);
        }
        var u, l;
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
            value: function() {
                this.getEventList();
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
                this.canLoadMore && (this.pageNo++, this.getEventList());
            }
        }, {
            key: "getEventList",
            value: (u = regeneratorRuntime.mark(function e() {
                var t, n, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            status: this.status
                        }, e.next = 3, i.default.eventList(t);

                      case 3:
                        if (1 == (n = e.sent).code) {
                            e.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = n.message, this.$apply(), e.next = 15;
                        break;

                      case 10:
                        if ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), n.data) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("return");

                      case 13:
                        if (1 == this.pageNo) {
                            for (a = 0; a < n.data.length; a++) n.data[a].beginTime = n.data[a].beginTime.substring(0, 10), 
                            n.data[a].endTime = n.data[a].endTime.substring(0, 10);
                            this.matchList = n.data;
                        } else {
                            for (r = 0; r < n.data.length; r++) n.data[r].beginTime = n.data[r].beginTime.substring(0, 10), 
                            n.data[r].endTime = n.data[r].endTime.substring(0, 10);
                            this.matchList = this.listData.concat(n.data);
                        }
                        this.$apply();

                      case 15:
                        console.log("赛事列表", n);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), l = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function a(i, r) {
                        try {
                            var o = e[i](r), s = o.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(e) {
                            a("next", e);
                        }, function(e) {
                            a("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/match/match-list"));
}();