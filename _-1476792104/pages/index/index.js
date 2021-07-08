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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), n = i(require("./../../utils/api.js")), r = i(require("./../../utils/environment.js")), a = i(require("./../../components/custom-tabbar.js"));
    i(require("./../../utils/wechat.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
                    try {
                        var s = t[a](i), o = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(o).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(o);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(i) {
        function c() {
            var e, t, n;
            o(this, c);
            for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
            return t = n = u(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(i))), 
            n.config = {
                navigationStyle: "custom"
            }, n.components = {
                customTabbar: a.default
            }, n.mixins = [], n.data = {
                statusBarHeight: "",
                list: [],
                type: [ {
                    imaUrl: "http://yyb-oss.universal-space.cn/imgs/type-1.png"
                }, {
                    imaUrl: "http://yyb-oss.universal-space.cn/imgs/type-2.png"
                }, {
                    imaUrl: "http://yyb-oss.universal-space.cn/imgs/type-3.png"
                } ],
                matchList: [],
                hotGame: [],
                latitude: "",
                longitude: "",
                storeDetail: "",
                templateIdList: []
            }, n.computed = {}, n.methods = {
                selectAddress: function() {
                    wx.navigateTo({
                        url: "/pages/index/shops"
                    });
                },
                banner: function(e) {
                    if (console.log(e.url), -1 == e.url.indexOf("https://wacca.samnya.cn/report2020")) return 4 == e.type ? (console.log(e.url), 
                    void wx.navigateTo({
                        url: e.url
                    })) : void wx.navigateTo({
                        url: "/pages/index/activity?title=" + e.title + "&url=" + encodeURIComponent(e.url)
                    });
                    wx.navigateTo({
                        url: "/pages/index/waccaReport"
                    });
                },
                moreMatch: function() {
                    wx.switchTab({
                        url: "/pages/match/match"
                    });
                },
                moreGame: function() {
                    wx.navigateTo({
                        url: "/pages/record/topic"
                    });
                },
                exchangeTicket: function() {
                    wx.navigateTo({
                        url: "/pages/mine/ticket-record"
                    });
                },
                matchDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/match/match-detail?eventId=" + e.eventId
                    });
                },
                payEamPoint: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-eam"
                    });
                },
                mySetMeal: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-set-meal"
                    });
                },
                storeSetMeal: function() {
                    this.storeDetail ? wx.navigateTo({
                        url: "/pages/store/store-detail?storeId=" + this.storeDetail.store_id
                    }) : wx.navigateTo({
                        url: "/pages/store/nearby-stores"
                    });
                }
            }, n.events = {}, u(n, t);
        }
        var l, p, f, g, d, h;
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
        }(c, i), e(c, [ {
            key: "onLoad",
            value: function() {
                this.getLocation();
            }
        }, {
            key: "onShow",
            value: function() {
                this.storeDetail = wx.getStorageSync("storeDetail"), this.$apply(), this.statusBarHeight = this.$parent.globalData.statusBarHeight, 
                this.getAdData(), this.getEventList(), this.getHotGameList(), this.getPubilcData();
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
            key: "getPubilcData",
            value: (h = s(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            appid: r.default.production ? r.default.prod.appid : r.default.dev.appid
                        }, e.next = 3, n.default.publicRequest(t);

                      case 3:
                        a = e.sent, console.log(JSON.stringify(a) + "=============="), "1.0.0" == a.data.version && wx.setStorageSync("isHideVip", !0);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getAdData",
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: 1
                        }, e.next = 3, n.default.adData(t);

                      case 3:
                        0 == (r = e.sent).retCode && (console.log("首页banner", r), this.list = r.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getEventList",
            value: (g = s(regeneratorRuntime.mark(function e() {
                var t, r, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, n.default.eventList(t);

                      case 3:
                        for (r = e.sent, a = r.data, i = 0; i < a.length; i++) a[i].beginTime = a[i].beginTime.substring(0, 10);
                        this.matchList = a, this.$apply(), console.log("赛事列表", r);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return g.apply(this, arguments);
            })
        }, {
            key: "getHotGameList",
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, n.default.hotGameList(t);

                      case 3:
                        1 == (r = e.sent).code && (console.log("热门游戏", r), this.hotGame = r.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getLocation",
            value: (p = s(regeneratorRuntime.mark(function e() {
                var r, a, i, s, o, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, t.default.getLocation();

                      case 3:
                        return r = e.sent, console.log("经纬度", r), a = {
                            key: "9f00a54f281d607356e1cc17830dde25",
                            location: r.longitude + "," + r.latitude
                        }, e.next = 8, n.default.getLocation(a);

                      case 8:
                        return i = e.sent, this.$apply(), e.next = 12, this.getCityList();

                      case 12:
                        s = e.sent, i ? (o = i.regeocode.addressComponent.adcode.substr(0, 4) + "00", (u = this.formatCity(o, s)) ? wx.setStorageSync("selectedAddress", u) : this.setDefaultAddress()) : this.setDefaultAddress(), 
                        e.next = 19;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(0), this.setDefaultAddress();

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 16 ] ]);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "setDefaultAddress",
            value: function() {
                this.selectedAddress = {
                    code: "442000",
                    is_hot: 1,
                    region_id: 2124,
                    region_name: "中山市",
                    firstLetter: "ZSS",
                    full_pinyin: "zhongshanshi"
                }, this.$apply(), wx.setStorageSync("selectedAddress", this.selectedAddress);
            }
        }, {
            key: "getCityList",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(t = wx.getStorageSync("cityList"))) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", t);

                      case 5:
                        return e.next = 7, n.default.regionListData({
                            pageNo: 1,
                            pageSize: 1e3
                        });

                      case 7:
                        if (!(r = e.sent)) {
                            e.next = 11;
                            break;
                        }
                        return wx.setStorageSync("cityList", r.data), e.abrupt("return", r.data);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "formatCity",
            value: function(e, t) {
                var n = t.filter(function(t) {
                    return t.code == e;
                });
                return console.log(n), n[0];
            }
        } ]), c;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/index/index"));
}();