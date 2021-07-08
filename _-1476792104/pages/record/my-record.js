function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customTabbar = require("./../../components/custom-tabbar.js"), _customTabbar2 = _interopRequireDefault(_customTabbar), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), myRecord = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationStyle: "custom"
        }, n.components = {
            customTabbar: _customTabbar2.default
        }, n.mixins = [ _userMixin2.default ], n.data = {
            statusBarHeight: "",
            recordList: [],
            userGameSummary: "",
            hotGameList: [],
            token: ""
        }, n.computed = {}, n.methods = {
            recordDetail: function(e) {
                wx.navigateTo({
                    url: e.statisPage + "?productId=" + e.productId
                });
            },
            moreGame: function() {
                wx.navigateTo({
                    url: "/pages/record/topic"
                });
            },
            hotGameList: function(e) {
                wx.navigateTo({
                    url: e.statisPage + "?productId=" + e.productId + "&productName=" + e.productName + "&productImage=" + e.productImage
                });
            },
            gameRecord: function() {
                "" != this.token ? wx.navigateTo({
                    url: "/pages/record/game-record?totalCount=" + (null != this.userGameSummary.totalCount ? this.userGameSummary.totalCount : "0")
                }) : wx.showModal({
                    content: "您还未登录，请先登录",
                    success: function(e) {
                        e.confirm && wx.navigateTo({
                            url: "/pages/mine/login"
                        });
                    }
                });
            },
            nearbyShopMachine: function(e) {
                wx.navigateTo({
                    url: "/pages/record/nearby-shop-machine?productId=" + e.productId + "&productName=" + e.productName
                });
            },
            nearbyShop: function() {
                wx.navigateTo({
                    url: "/pages/store/nearby-stores"
                });
            }
        }, n.events = {}, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.statusBarHeight = this.$parent.globalData.statusBarHeight, this.token = wx.getStorageSync("token"), 
            "" != this.token && (this.getUserGameSummary(), this.getUserRecordList()), this.getHotGameList();
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
        key: "getUserGameSummary",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.userGameSummary();

                      case 2:
                        t = e.sent, 1 == t.code && (this.userGameSummary = t.data, this.$apply(), console.log("玩家成绩汇总", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUserRecordList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.userRecordList();

                      case 2:
                        if (t = e.sent, 1 != t.code) {
                            e.next = 11;
                            break;
                        }
                        if (!t.data) {
                            e.next = 8;
                            break;
                        }
                        return this.recordList = t.data, this.$apply(), e.abrupt("return");

                      case 8:
                        this.recordList = "", this.$apply(), console.log("用户战绩列表", t);

                      case 11:
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
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.hotGameList(t);

                      case 3:
                        r = e.sent, 1 == r.code && (console.log("热门游戏", r), this.hotGameList = r.data, this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myRecord, "pages/record/my-record"));