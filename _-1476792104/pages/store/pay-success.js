!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/custom-statusbar.js")), r = a(require("./../../utils/api.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function a() {
            var e, t, r;
            o(this, a);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return t = r = c(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "支付成功"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                packageDetail: ""
            }, r.computed = {}, r.methods = {
                packageExchange: function() {
                    this.myPackagesExchange();
                }
            }, r.events = {}, c(r, t);
        }
        var i, u;
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
            value: function(e) {
                console.log("套餐", e), "member_package" == e.resultType ? (this.packageDetail = e, 
                this.packageDetail.goodsName = decodeURIComponent(e.goodsName)) : "normal_package" == e.resultType && (this.packageDetail = e);
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
            key: "myPackagesExchange",
            value: (i = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.myPackagesExchange({
                            orderno: this.packageDetail.orderId
                        });

                      case 2:
                        (t = e.sent) && wx.navigateTo({
                            url: "/pages/mine/my-set-meal-qr?exchangeCode=" + t.data.exchangeCode + "&codeUrl=" + t.data.codeUrl
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = i.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(a, o) {
                        try {
                            var c = e[a](o), i = c.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!c.done) return Promise.resolve(i).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(i);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/store/pay-success"));
}();