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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../utils/api.js")), r = o(require("./../../components/custom-statusbar.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(o, i) {
                    try {
                        var a = t[o](i), u = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!a.done) return Promise.resolve(u).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(o) {
        function s() {
            var e, t, n;
            a(this, s);
            for (var o = arguments.length, i = Array(o), c = 0; c < o; c++) i[c] = arguments[c];
            return t = n = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(i))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "附近门店"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default
            }, n.mixins = [], n.data = {
                productName: "",
                productId: "",
                regionid: "",
                longitude: "",
                latitude: "",
                storeList: []
            }, n.computed = {}, n.methods = {
                storeDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/store/store-detail?storeId=" + e
                    });
                }
            }, n.events = {}, u(n, t);
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
        }(s, o), e(s, [ {
            key: "onLoad",
            value: function(e) {
                console.log(e), this.productId = e.productId, this.productName = e.productName;
            }
        }, {
            key: "onShow",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, t.default.getLocation();

                      case 3:
                        n = e.sent, this.latitude = n.latitude, this.longitude = n.longitude, this.getStoreList(), 
                        e.next = 12;
                        break;

                      case 9:
                        e.prev = 9, e.t0 = e.catch(0), wx.showModal({
                            title: "温馨提示",
                            content: "您未开启定位服务，可能会影响小程序部分功能的使用。请点击“确定”进行授权",
                            success: function(e) {
                                e.confirm ? wx.openSetting() : e.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 9 ] ]);
            })), function() {
                return l.apply(this, arguments);
            })
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
            key: "getStoreList",
            value: (c = i(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            longitude: this.longitude,
                            latitude: this.latitude,
                            productId: this.productId,
                            pageNo: 1,
                            pageSize: 20
                        }, e.next = 3, n.default.storeList(t);

                      case 3:
                        (r = e.sent) && (this.storeList = r.data, console.log(this.storeList), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/nearby-shop-machine"));
}();