function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customTabbar = require("./../../components/custom-tabbar.js"), _customTabbar2 = _interopRequireDefault(_customTabbar), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), Index = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom"
        }, r.components = {
            customTabbar: _customTabbar2.default
        }, r.mixins = [], r.data = {
            statusBarHeight: "",
            list: [],
            type: [ {
                imaUrl: "https://oss.asit.me/imgs/type-1.png"
            }, {
                imaUrl: "https://oss.asit.me/imgs/type-2.png"
            }, {
                imaUrl: "https://oss.asit.me/imgs/type-3.png"
            } ],
            matchList: [],
            hotGame: [],
            latitude: "",
            longitude: "",
            storeDetail: "",
            templateIdList: []
        }, r.computed = {}, r.methods = {
            selectAddress: function() {
                wx.navigateTo({
                    url: "/pages/index/shops"
                });
            },
            banner: function(e) {
                console.log(e), wx.navigateTo({
                    url: "/pages/index/activity?title=" + e.title + "&url=" + encodeURIComponent(e.url)
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
                if (this.storeDetail) return void wx.navigateTo({
                    url: "/pages/store/store-detail?storeId=" + this.storeDetail.store_id
                });
                wx.navigateTo({
                    url: "/pages/store/nearby-stores"
                });
            }
        }, r.events = {}, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getLocation();
        }
    }, {
        key: "onShow",
        value: function() {
            this.storeDetail = wx.getStorageSync("storeDetail"), this.$apply(), this.statusBarHeight = this.$parent.globalData.statusBarHeight, 
            this.getAdData(), this.getEventList(), this.getHotGameList();
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
        key: "getAdData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: 1
                        }, e.next = 3, _api2.default.adData(t);

                      case 3:
                        n = e.sent, 0 == n.retCode && (console.log("首页banner", n), this.list = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getEventList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.eventList(t);

                      case 3:
                        for (n = e.sent, r = n.data, a = 0; a < r.length; a++) r[a].beginTime = r[a].beginTime.substring(0, 10);
                        this.matchList = r, this.$apply(), console.log("赛事列表", n);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getHotGameList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.hotGameList(t);

                      case 3:
                        n = e.sent, 1 == n.code && (console.log("热门游戏", n), this.hotGame = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getLocation",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, a, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getLocation();

                      case 3:
                        return t = e.sent, console.log("经纬度", t), n = {
                            key: "9f00a54f281d607356e1cc17830dde25",
                            location: t.longitude + "," + t.latitude
                        }, e.next = 8, _api2.default.getLocation(n);

                      case 8:
                        return r = e.sent, this.$apply(), e.next = 12, this.getCityList();

                      case 12:
                        a = e.sent, r ? (i = r.regeocode.addressComponent.adcode.substr(0, 4) + "00", o = this.formatCity(i, a), 
                        o ? wx.setStorageSync("selectedAddress", o) : this.setDefaultAddress()) : this.setDefaultAddress(), 
                        e.next = 19;
                        break;

                      case 16:
                        e.prev = 16, e.t0 = e.catch(0), this.setDefaultAddress();

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 16 ] ]);
            }));
            return e;
        }()
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
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(t = wx.getStorageSync("cityList"))) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", t);

                      case 5:
                        return e.next = 7, _api2.default.regionListData({
                            pageNo: 1,
                            pageSize: 1e3
                        });

                      case 7:
                        if (!(n = e.sent)) {
                            e.next = 11;
                            break;
                        }
                        return wx.setStorageSync("cityList", n.data), e.abrupt("return", n.data);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "formatCity",
        value: function(e, t) {
            var n = t.filter(function(t) {
                return t.code == e;
            });
            return console.log(n), n[0];
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index/index"));