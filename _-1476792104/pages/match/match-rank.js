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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), n = i(require("./../../components/match-statusbar.js")), a = i(require("./../../utils/api.js")), r = i(require("./../../components/custom-dialog.js")), o = i(require("./../../mixins/user-mixin.js"));
    function i(e) {
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
        function i() {
            var e, t, a;
            s(this, i);
            for (var c = arguments.length, l = Array(c), f = 0; f < c; f++) l[f] = arguments[f];
            return t = a = u(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(l))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    title: "赛事排行榜",
                    leftIcon: "true"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, a.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, a.components = {
                statusbar: n.default,
                customDialog: r.default
            }, a.mixins = [ o.default ], a.data = {
                showAlert: !1,
                alertTxt: "",
                eventId: "",
                rankList: [],
                rankInfo: null,
                eventDetail: "",
                top3: [],
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10
            }, a.methods = {
                confirm: function() {
                    this.showAlert = !1;
                }
            }, u(a, t);
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
        }(i, t), e(i, [ {
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
                this.canLoadMore && (this.pageNo++, this.getEventRank());
            }
        }, {
            key: "getEventRank",
            value: (c = regeneratorRuntime.mark(function e() {
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
                        this.top3 = n.data.rankList.slice(0, 3), (!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        console.log("getEventRank", this.rankInfo), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), l = function() {
                var e = c.apply(this, arguments);
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
                return l.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/match/match-rank"));
}();