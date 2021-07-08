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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), r = a(require("./../../components/custom-tabbar.js")), n = a(require("./../../mixins/user-mixin.js")), o = a(require("./../../utils/api.js"));
    a(require("./../../utils/environment.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, o;
            u(this, a);
            for (var i = arguments.length, c = Array(i), p = 0; p < i; p++) c[p] = arguments[p];
            return t = o = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(c))), 
            o.config = {
                navigationStyle: "custom"
            }, o.components = {
                customTabbar: r.default
            }, o.mixins = [ n.default ], o.data = {
                statusBarHeight: "",
                recordList: [],
                userGameSummary: "",
                hotGameList: [],
                token: ""
            }, o.computed = {}, o.methods = {
                binderror: function(e) {
                    console.log(e.detail);
                },
                recordDetail: function(e) {
                    wx.navigateTo({
                        url: e.statisPage + "?productId=" + e.productId
                    });
                },
                moreGame: function() {
                    wx.navigateTo({
                        url: "/pages/record/topic"
                    });
                },
                hotGameList: function(e) {
                    wx.navigateTo({
                        url: e.statisPage + "?productId=" + e.productId + "&productName=" + e.productName + "&productImage=" + e.productImage
                    });
                },
                gameRecord: function() {
                    "" != this.token ? wx.navigateTo({
                        url: "/pages/record/game-record?totalCount=" + (null != this.userGameSummary.totalCount ? this.userGameSummary.totalCount : "0")
                    }) : wx.showModal({
                        content: "您还未登录，请先登录",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "/pages/mine/login"
                            });
                        }
                    });
                },
                nearbyShopMachine: function(e) {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + e.productId + "&productName=" + e.productName
                    });
                },
                nearbyShop: function() {
                    wx.navigateTo({
                        url: "/pages/store/nearby-stores"
                    });
                }
            }, o.events = {}, s(o, t);
        }
        var c, p, l;
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.statusBarHeight = this.$parent.globalData.statusBarHeight, this.token = wx.getStorageSync("token"), 
                "" != this.token && (this.getUserGameSummary(), this.getUserRecordList()), this.getHotGameList();
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
            key: "getUserGameSummary",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.userGameSummary();

                      case 2:
                        1 == (t = e.sent).code && (this.userGameSummary = t.data, this.$apply(), console.log("玩家成绩汇总", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getUserRecordList",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.userRecordList();

                      case 2:
                        if (1 != (t = e.sent).code) {
                            e.next = 11;
                            break;
                        }
                        if (!t.data) {
                            e.next = 8;
                            break;
                        }
                        return this.recordList = t.data, this.$apply(), e.abrupt("return");

                      case 8:
                        this.recordList = "", this.$apply(), console.log("用户战绩列表", t);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getHotGameList",
            value: (c = i(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 4
                        }, e.next = 3, o.default.hotGameList(t);

                      case 3:
                        1 == (r = e.sent).code && (console.log("热门游戏", r), this.hotGameList = r.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/record/my-record"));
}();