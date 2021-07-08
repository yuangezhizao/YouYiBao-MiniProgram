function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, i) {
                try {
                    var u = t[o](i), s = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), rechargeCoin = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "游点充值"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, r.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, r.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, r.mixins = [ _userMixin2.default ], r.data = {
            coin: 0,
            count: 10,
            isChecked: !1,
            showAlert: !1,
            alertTxt: ""
        }, r.computed = {}, r.methods = {
            add: function() {
                this.count += 10;
            },
            down: function() {
                if (this.count <= 10) return void (this.count = 10);
                this.count -= 10;
            },
            getCount: function(e) {
                if (console.log(e), !/^[0-9]*$/.test(e.detail.value)) return this.count;
                this.count = parseInt(e.detail.value);
            },
            rechargeCoin: function() {
                return NaN === this.count || this.count % 10 != 0 ? void wx.showToast({
                    title: "充值数额需为10的倍数",
                    icon: "none"
                }) : 0 == this.isChecked ? (this.alertTxt = "请先阅读同意后勾选游艺宝游点服务协议", void (this.showAlert = !0)) : void this.recharge();
            },
            toggleCheckbox: function() {
                this.isChecked = !this.isChecked;
            },
            showAgree: function() {
                wx.navigateTo({
                    url: "/pages/machine/coin-agreement"
                });
            },
            confirm: function() {
                this.showAlert = !1;
            }
        }, r.events = {}, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {}
    }, {
        key: "onShow",
        value: function() {
            this.findScoreCoin();
        }
    }, {
        key: "onHide",
        value: function() {
            wx.hideKeyboard();
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
                        t = e.sent, t && (this.coin = t.coin, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "recharge",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            storeId: 3456,
                            cardNum: 0,
                            goodsType: 1,
                            goodsId: 0,
                            payType: 4,
                            qty: this.count,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, _api2.default.createOrder(t);

                      case 3:
                        n = e.sent, n && _wechat2.default.payment(n.data.sign).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/pay-success?resultType=" + r.resultType
                            });
                        }).catch(function(e) {});

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(rechargeCoin, "pages/machine/recharge-coin"));