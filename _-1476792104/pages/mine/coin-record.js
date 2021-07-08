function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, o) {
                try {
                    var a = t[i](o), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), Scan = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "我的游点"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default
        }, r.mixins = [], r.data = {
            myCoin: 0,
            coinList: [],
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10,
            check: 0
        }, r.computed = {}, r.methods = {
            rechargeCoin: function() {
                wx.navigateTo({
                    url: "/pages/machine/recharge-coin"
                });
            }
        }, r.events = {}, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.getCoinList();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.getCoinList());
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
        key: "getCoinList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: 2,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.coinList(t);

                      case 3:
                        if (n = e.sent, 0 != n.retCode) {
                            e.next = 12;
                            break;
                        }
                        if (this.myCoin = n.coin, this.check = n.check, (!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        if (1 == this.pageNo) {
                            for (r = n.data, i = 0; i < r.length; i++) r[i].add_time = _units2.default.formatTime(new Date(1e3 * r[i].add_time));
                            this.coinList = r;
                        } else {
                            for (r = n.data, o = 0; o < r.length; o++) r[o].add_time = _units2.default.formatTime(new Date(1e3 * r[o].add_time));
                            this.coinList = this.coinList.concat(n.data);
                        }
                        this.$apply();

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Scan, "pages/mine/coin-record"));