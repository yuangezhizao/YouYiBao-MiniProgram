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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/custom-statusbar.js")), r = o(require("./../../components/scan.js")), a = o(require("./../../utils/api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, o) {
                    try {
                        var i = t[a](o), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
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
    var u = function(o) {
        function u() {
            var e, t, a;
            s(this, u);
            for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            return t = a = c(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(i))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                customStatusbar: {
                    title: "搜索门店"
                },
                scan: {
                    class: "scan"
                }
            }, a.$events = {}, a.components = {
                customStatusbar: n.default,
                scan: r.default
            }, a.mixins = [], a.data = {
                longitude: "",
                latitude: "",
                regionid: "",
                pageNo: 1,
                pageSize: 20,
                storeList: [],
                canLoadMore: !0,
                addCard: !1,
                storeName: "",
                enterType: "",
                storeTitle: "附近门店"
            }, a.computed = {}, a.methods = {
                storeDetail: function(e) {
                    console.log(e), wx.setStorageSync("storeDetail", e), this.addCard ? wx.navigateBack({
                        delta: 1
                    }) : wx.navigateTo({
                        url: "/pages/store/store-detail?storeId=" + e.store_id
                    });
                },
                getStoreName: function(e) {
                    console.log(e), this.storeName = e.detail.value;
                },
                seek: function() {
                    "" != this.storeName && (this.getSearchStore(), this.storeTitle = "搜索结果", this.$apply);
                }
            }, a.events = {}, c(a, t);
        }
        var l, p, d;
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
        }(u, o), e(u, [ {
            key: "onLoad",
            value: function(e) {
                console.log(e), e && (this.addCard = e.addCard, this.enterType = e.enterType);
            }
        }, {
            key: "onShow",
            value: (d = i(regeneratorRuntime.mark(function e() {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, t.default.getLocation();

                      case 3:
                        n = e.sent, this.longitude = n.longitude, this.latitude = n.latitude, this.regionid = wx.getStorageSync("selectedAddress").region_id ? wx.getStorageSync("selectedAddress").region_id : 1966, 
                        this.getStore(), e.next = 13;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(0), wx.showModal({
                            title: "温馨提示",
                            content: "您未开启定位服务，可能会影响小程序部分功能的使用。请点击“确定”进行授权",
                            success: function(e) {
                                e.confirm ? wx.openSetting() : e.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 10 ] ]);
            })), function() {
                return d.apply(this, arguments);
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
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getStore());
            }
        }, {
            key: "getStore",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            regionid: this.regionid,
                            latitude: this.latitude,
                            longitude: this.longitude,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, a.default.storeList(t);

                      case 3:
                        (n = e.sent) && ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = n.data : this.storeList = this.storeList.concat(n.data)), 
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getSearchStore",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            name: this.storeName,
                            type: 1,
                            regionid: 0,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, "selfRegister" == this.enterType && (t.hasCardPackage = !0), "select" == this.enterType && (t.hasPackage = !0), 
                        e.next = 5, a.default.searchStore(t);

                      case 5:
                        n = e.sent, console.log(n), n && ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = n.data : this.storeList = this.storeList.concat(n.data)), 
                        this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/store/nearby-stores"));
}();