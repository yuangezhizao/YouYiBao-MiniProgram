!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), a = o(require("./../../components/match-statusbar.js")), n = o(require("./../../components/match-card.js")), i = o(require("./../../components/custom-dialog.js")), r = o(require("./../../utils/konami-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function o() {
            var e, t, r;
            s(this, o);
            for (var c = arguments.length, l = Array(c), p = 0; p < c; p++) l[p] = arguments[p];
            return t = r = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {
                listData: {
                    com: "arenaCard",
                    props: "item"
                }
            }, r.$props = {
                arenaCard: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "v-bind:item.once": {
                        value: "item",
                        type: "item",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    type: {
                        value: "arena",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    },
                    "xmlns:v-on": {
                        value: "",
                        for: "listData",
                        item: "item",
                        index: "index",
                        key: "index"
                    }
                },
                statusbar: {
                    leftIcon: "true",
                    title: "ARENA大赛"
                },
                customDialog: {
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt"
                }
            }, r.$events = {
                arenaCard: {
                    "v-on:eventHandle": "arenaDetail"
                },
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                statusbar: a.default,
                arenaCard: n.default,
                customDialog: i.default
            }, r.data = {
                status: 1,
                listData: [],
                showAlert: !1,
                alertTxt: "",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 3
            }, r.methods = {
                changeTab: function(e) {
                    this.status = e, this.listData = "", this.pageNo = 1, this.canLoadMore = !0, this.getEventListArena();
                },
                arenaDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/arena-detail?eventId=" + e.eventId
                    });
                }
            }, u(r, t);
        }
        var c, l;
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
                this.getEventListArena();
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
                this.canLoadMore && (this.pageNo++, this.getEventListArena());
            }
        }, {
            key: "getEventListArena",
            value: (c = regeneratorRuntime.mark(function e() {
                var t, a, n, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            status: this.status
                        }, e.next = 3, r.default.eventList(t);

                      case 3:
                        if (1 == (a = e.sent).code) {
                            e.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = a.message, this.$apply(), e.next = 15;
                        break;

                      case 10:
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("return");

                      case 13:
                        if (1 == this.pageNo) {
                            for (n = 0; n < a.data.length; n++) a.data[n].beginTime = a.data[n].beginTime.substring(0, 10), 
                            a.data[n].endTime = a.data[n].endTime.substring(0, 10);
                            this.listData = a.data;
                        } else {
                            for (i = 0; i < a.data.length; i++) a.data[i].beginTime = a.data[i].beginTime.substring(0, 10), 
                            a.data[i].endTime = a.data[i].endTime.substring(0, 10);
                            this.listData = this.listData.concat(a.data);
                        }
                        this.$apply();

                      case 15:
                        console.log("赛事列表", a);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), l = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, a) {
                    return function n(i, r) {
                        try {
                            var o = e[i](r), s = o.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/match/arena"));
}();