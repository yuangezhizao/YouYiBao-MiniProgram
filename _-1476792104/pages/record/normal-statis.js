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
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), r = n(require("./../../utils/api.js")), o = n(require("./../../components/match-statusbar.js"));
    n(require("./../../utils/wechat.js"));
    function n(e) {
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
    var u = function(t) {
        function n() {
            var e, t, r;
            a(this, n);
            for (var u = arguments.length, c = Array(u), s = 0; s < u; s++) c[s] = arguments[s];
            return t = r = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    "xmlns:v-bind": "",
                    "v-bind:title.sync": "title"
                }
            }, r.$events = {}, r.components = {
                statusbar: o.default
            }, r.data = {
                productId: "",
                productName: "",
                productImage: "",
                recordList: [],
                title: ""
            }, r.methods = {
                historyRecord: function() {
                    wx.navigateTo({
                        url: "/pages/record/normal-record?productId=" + this.productId + "&productImage=" + this.productImage
                    });
                },
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/record/normal-rank?productId=" + this.productId
                    });
                },
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                    });
                }
            }, i(r, t);
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
            value: (u = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordList = t.data, "" != this.recordList ? this.title = this.recordList.productName : this.title = this.productName, 
                        this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function o(n, a) {
                        try {
                            var i = e[n](a), u = i.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        t(u);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/record/normal-statis"));
}();