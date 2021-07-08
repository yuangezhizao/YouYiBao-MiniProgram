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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../utils/api.js")), n = o(require("./../../components/match-statusbar.js"));
    o(require("./../../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function o() {
            var e, t, r;
            a(this, o);
            for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return t = r = i(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "游戏记录"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                recordList: [],
                resultList: [],
                pageNo: 1,
                pageSize: 20,
                canLoadMore: !0,
                totalCount: 0
            }, r.methods = {
                gameDetail: function(e) {
                    wx.navigateTo({
                        url: e.recordPage + "?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                    });
                }
            }, i(r, t);
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                var t = wx.getStorageSync("token");
                this.totalCount = "" != t ? e.totalCount : 0;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getRecordList();
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
                this.canLoadMore && (this.pageNo++, this.getRecordList());
            }
        }, {
            key: "getRecordList",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, n, o, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.recordAllList(t);

                      case 3:
                        if (!(n = e.sent)) {
                            e.next = 17;
                            break;
                        }
                        if ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), n.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        for (i in 1 == this.pageNo ? this.recordList = n.data : this.recordList = this.recordList.concat(n.data), 
                        console.log("recordList", this.recordList), o = {}, this.recordList.forEach(function(e) {
                            var t = e.gameDate.substr(0, 10);
                            o[t] ? o[t].push(e) : o[t] = [ e ];
                        }), a = [], o) a.push({
                            date: i,
                            data: o[i]
                        });
                        this.resultList = a, n.data.length < this.pageSize && (this.canLoadMore = !1), this.$apply();

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(o, a) {
                        try {
                            var i = e[o](a), s = i.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
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
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/game-record"));
}();