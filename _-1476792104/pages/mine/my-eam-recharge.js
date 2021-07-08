function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, a) {
                try {
                    var o = t[i](a), s = o.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), addCard = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "充值e-am点"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default
        }, r.mixins = [ _userMixin2.default ], r.data = {
            selectIndex: 0,
            count: 1,
            packageList: [],
            selectPackageId: "",
            price: 0,
            eamPoint: 0
        }, r.methods = {
            changeOption: function(e, t) {
                this.selectIndex = e, this.selectPackageId = this.packageList[this.selectIndex].id, 
                this.price = t.price, this.count = 1;
            },
            plus: function() {
                this.count++, this.price = _units2.default.toFix(this.packageList[this.selectIndex].price * this.count);
            },
            cut: function() {
                1 !== this.count && (this.count--, this.price = _units2.default.toFix(this.packageList[this.selectIndex].price * this.count));
            },
            payEamPoint: function() {
                this.createPackageOrder();
            },
            goback: function() {
                wx.navigateBack({
                    delta: 1
                });
            },
            consumeRocord: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam-records"
                });
            }
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.pointPackageList(), this.findScoreCoin();
        }
    }, {
        key: "findScoreCoin",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.findScoreCoin();

                      case 2:
                        t = e.sent, t && (this.eamPoint = t.point, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "pointPackageList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _konamiApi2.default.pointPackageList();

                      case 2:
                        t = e.sent, t && (this.packageList = t.data, this.packageList.map(function(e) {
                            e.price = parseFloat(e.price) / 100;
                        }), this.price = _units2.default.toFix(this.packageList[this.selectIndex].price * this.count), 
                        this.selectPackageId = this.packageList[this.selectIndex].id), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "createPackageOrder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _konamiApi2.default.createOrder({
                            packageId: this.selectPackageId,
                            qty: this.count
                        });

                      case 2:
                        t = e.sent, t && (console.log(t), _wechat2.default.payment(t.data.wxpay).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/mine/my-eam-pay-success"
                            });
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        })), this.$apply();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/mine/my-eam-recharge"));