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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), storeDetail = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
            customStatusbar: {
                title: "门店详情"
            }
        }, n.$events = {}, n.components = {
            customStatusbar: _customStatusbar2.default
        }, n.mixins = [], n.data = {
            storeDetail: [],
            activityList: [],
            memberPackage: [],
            normalPackage: [],
            storeId: ""
        }, n.computed = {}, n.methods = {
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
        }, n.events = {}, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
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
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.storeDetail({
                            id: this.storeId
                        });

                      case 2:
                        t = e.sent, t && (this.storeDetail = t.data), "" != this.storeDetail && wx.setStorageSync("storeDetail", this.storeDetail), 
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
        key: "getActivityListData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.activityListData({
                            storeid: this.storeId,
                            type: 1,
                            pageNo: 1,
                            pageSize: 1
                        });

                      case 2:
                        t = e.sent, t && (this.activityList = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getVipTicket({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 20
                        });

                      case 2:
                        t = e.sent, t && (this.memberPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getNormalPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.comboListData({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 20
                        });

                      case 2:
                        t = e.sent, t && (this.normalPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(storeDetail, "pages/store/store-detail"));