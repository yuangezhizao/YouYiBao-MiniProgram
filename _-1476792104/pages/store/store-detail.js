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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), r = a(require("./../../utils/api.js")), n = (a(require("./../../utils/environment.js")), 
    a(require("./../../components/custom-statusbar.js")));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
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
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function a() {
            var e, t, r;
            i(this, a);
            for (var o = arguments.length, u = Array(o), c = 0; c < o; c++) u[c] = arguments[c];
            return t = r = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    title: "门店详情"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                storeDetail: [],
                activityList: [],
                memberPackage: [],
                normalPackage: [],
                storeId: ""
            }, r.computed = {}, r.methods = {
                memberPackageDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/store/member-package?storeId=" + this.storeId + "&setcoinno=" + e.setcoinno
                    });
                },
                normalPackageDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/store/normal-package?storeId=" + this.storeId + "&packageId=" + e.id + "&image=" + e.image
                    });
                },
                storeExchange: function() {
                    wx.redirectTo({
                        url: "/pages/store/nearby-stores"
                    });
                },
                callPhone: function() {
                    wx.makePhoneCall({
                        phoneNumber: this.storeDetail.store_mobile
                    });
                },
                activityDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/store/activity-detail?id=" + e.id
                    });
                },
                moreActivity: function() {
                    wx.navigateTo({
                        url: "/pages/store/more-activity?storeId=" + this.storeId
                    });
                },
                navigationAddress: function() {
                    wx.openLocation({
                        latitude: this.storeDetail.store_latitude,
                        longitude: this.storeDetail.store_longitude,
                        address: this.storeDetail.store_address,
                        name: this.storeDetail.store_name,
                        scale: 10
                    });
                },
                errorImg: function(e) {
                    this.memberPackage[e].image = "http://yyb-oss.universal-space.cn/imgs/mine/button_vip-100.png";
                }
            }, r.events = {}, s(r, t);
        }
        var u, c, l, p;
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
                console.log("options", e), this.storeId = e.storeId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getStore(), this.getActivityListData(), this.getMemberPackage(), this.getNormalPackage();
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
            key: "getStore",
            value: (p = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.storeDetail({
                            id: this.storeId
                        });

                      case 2:
                        (t = e.sent) && (this.storeDetail = t.data), "" != this.storeDetail && wx.setStorageSync("storeDetail", this.storeDetail), 
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
            key: "getActivityListData",
            value: (l = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.activityListData({
                            storeid: this.storeId,
                            type: 1,
                            pageNo: 1,
                            pageSize: 1
                        });

                      case 2:
                        (t = e.sent) && (this.activityList = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getMemberPackage",
            value: (c = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getVipTicket({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 20
                        });

                      case 2:
                        (t = e.sent) && (this.memberPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "getNormalPackage",
            value: (u = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.comboListData({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 20
                        });

                      case 2:
                        (t = e.sent) && (this.normalPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/store/store-detail"));
}();