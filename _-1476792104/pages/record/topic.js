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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../components/match-statusbar.js")), n = o(require("./../../utils/api.js"));
    o(require("./../../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function o() {
            var e, t, n;
            a(this, o);
            for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
            return t = n = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "热门游戏"
                }
            }, n.$events = {}, n.components = {
                statusbar: r.default
            }, n.data = {
                currentTab: 0,
                navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
                rankList: 5,
                myHotGameList: []
            }, n.methods = {
                navbarTap: function(e) {
                    this.currentTab = e.currentTarget.dataset.index, this.currentTab;
                },
                record: function(e) {
                    wx.navigateTo({
                        url: e.statisPage + "?productId=" + e.productId + "&productName=" + e.productName + "&productImage=" + e.productImage
                    });
                }
            }, u(n, t);
        }
        var i, s;
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
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.getMyHotGameList();
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
            key: "getMyHotGameList",
            value: (i = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.myHotGameList();

                      case 2:
                        1 == (t = e.sent).code && (this.myHotGameList = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), s = function() {
                var e = i.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(o, a) {
                        try {
                            var u = e[o](a), i = u.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!u.done) return Promise.resolve(i).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(i);
                    }("next");
                });
            }, function() {
                return s.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/record/topic"));
}();