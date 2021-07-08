!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, r, a) {
            return r && e(t.prototype, r), a && e(t, a), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../components/custom-statusbar.js")), a = o(require("./../../utils/wacca-api.js")), n = o(require("./../../utils/api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function a(n, o) {
                    try {
                        var i = t[n](o), c = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(c).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, a;
            c(this, o);
            for (var n = arguments.length, i = Array(n), u = 0; u < n; u++) i[u] = arguments[u];
            return t = a = s(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                customStatusbar: {
                    title: "成绩记录"
                }
            }, a.$events = {}, a.components = {
                customStatusbar: r.default
            }, a.mixins = [], a.data = {
                navbar: [ "按时间", "按得分" ],
                currentTab: 0,
                userMusicRate: "",
                productId: "",
                gameType: "gameDate",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 5,
                recordList: []
            }, a.computed = {}, a.methods = {
                navbarTap: function(e) {
                    if (this.currentTab != e.currentTarget.dataset.index) {
                        switch (this.currentTab = e.currentTarget.dataset.index, this.currentTab) {
                          case 0:
                            this.gameType = "gameDate";
                            break;

                          case 1:
                            this.gameType = "score";
                        }
                        this.pageNo = 1, this.canLoadMore = !0, this.getMachineRecordList();
                    }
                },
                recordDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-detail?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                    });
                }
            }, a.events = {}, s(a, t);
        }
        var u, p;
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
                this.productId = e.productId, this.getMachineRecordList();
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserMusicRate();
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
                this.canLoadMore && (this.pageNo++, this.getMachineRecordList());
            }
        }, {
            key: "getUserMusicRate",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.userMusicRate();

                      case 2:
                        1 == (t = e.sent).code && (this.userMusicRate = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getMachineRecordList",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            productId: this.productId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            orderBy: this.gameType
                        }, e.next = 3, n.default.machineRecordList(t);

                      case 3:
                        if (1 != (r = e.sent).code) {
                            e.next = 10;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.recordList = r.data : this.recordList = this.recordList.concat(r.data), 
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/wacca/wacca-grade-record"));
}();