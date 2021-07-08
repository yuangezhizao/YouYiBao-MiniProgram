!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), r = o(require("./../components/custom-statusbar.js")), n = o(require("./../utils/wacca-api.js")), a = o(require("./../utils/api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var i = t[a](o), s = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(s);
                }("next");
            });
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
            var e, t, n;
            s(this, o);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return t = n = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "成绩记录"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default
            }, n.mixins = [], n.data = {
                navbar: [ "按时间", "按得分" ],
                currentTab: 0,
                userMusicRate: "",
                productId: "",
                gameType: "gameDate",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 5,
                recordList: []
            }, n.computed = {}, n.methods = {
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
            }, n.events = {}, c(n, t);
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
                        return e.next = 2, n.default.userMusicRate();

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
                        }, e.next = 3, a.default.machineRecordList(t);

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
    exports.default = u;
}();