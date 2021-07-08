function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var s = t[a](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(i);
            }
            return n("next");
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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _scan = require("./../../components/scan.js"), _scan2 = _interopRequireDefault(_scan), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), nearbyStores = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
            customStatusbar: {
                title: "搜索门店"
            },
            scan: {
                class: "scan"
            }
        }, n.$events = {}, n.components = {
            customStatusbar: _customStatusbar2.default,
            scan: _scan2.default
        }, n.mixins = [], n.data = {
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
        }, n.computed = {}, n.methods = {
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
        }, n.events = {}, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log(e), e && (this.addCard = e.addCard, this.enterType = e.enterType);
        }
    }, {
        key: "onShow",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, _wepy2.default.getLocation();

                      case 3:
                        t = e.sent, this.longitude = t.longitude, this.latitude = t.latitude, this.regionid = wx.getStorageSync("selectedAddress").region_id ? wx.getStorageSync("selectedAddress").region_id : 1966, 
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
            }));
            return e;
        }()
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
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            regionid: this.regionid,
                            latitude: this.latitude,
                            longitude: this.longitude,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.storeList(t);

                      case 3:
                        r = e.sent, r && ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = r.data : this.storeList = this.storeList.concat(r.data)), 
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getSearchStore",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
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
                        e.next = 5, _api2.default.searchStore(t);

                      case 5:
                        r = e.sent, console.log(r), r && ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = r.data : this.storeList = this.storeList.concat(r.data)), 
                        this.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(nearbyStores, "pages/store/nearby-stores"));