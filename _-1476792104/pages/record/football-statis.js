!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t;
        };
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), r = n(require("./../../components/match-statusbar.js")), o = n(require("./../../utils/api.js"));
    n(require("./../../utils/environment.js")), n(require("./../../utils/wechat.js"));
    function n(e) {
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
        function n() {
            var e, t, o;
            a(this, n);
            for (var i = arguments.length, c = Array(i), s = 0; s < i; s++) c[s] = arguments[s];
            return t = o = u(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(c))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "一球成名"
                }
            }, o.$events = {}, o.components = {
                statusbar: r.default
            }, o.data = {
                productId: "",
                productName: "",
                productImage: "",
                recordList: []
            }, o.methods = {
                historyRecord: function() {
                    wx.navigateTo({
                        url: "/pages/record/football-record?productId=" + this.productId + "&productImage=" + this.productImage
                    });
                },
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/record/football-rank?productId=" + this.productId
                    });
                },
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                    });
                }
            }, u(o, t);
        }
        var i, c;
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function(e) {
                this.productId = e.productId, this.productName = e.productName, this.productImage = e.productImage;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserRecordStatis();
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
            key: "getUserRecordStatis",
            value: (i = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = i.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function o(n, a) {
                        try {
                            var u = e[n](a), i = u.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!u.done) return Promise.resolve(i).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        t(i);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/record/football-statis"));
}();