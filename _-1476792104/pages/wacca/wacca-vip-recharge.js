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
                    var c = t[a](i), o = c.value;
                } catch (e) {
                    return void n(e);
                }
                if (!c.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), waccaVipRecharge = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, c = Array(i), o = 0; o < i; o++) c[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "VIP套餐"
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
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default
        }, r.mixins = [ _userMixin2.default ], r.data = {
            selectIndex: 0,
            count: 1,
            packageList: [],
            selectPackageId: "",
            price: 0,
            memberInfo: [],
            alertTxt: "",
            showAlert: !1
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
            buyVipPackage: function() {
                this.buyMemberPackage();
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
            },
            confirm: function() {
                this.showAlert = !1;
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.getVipPackageList(), this.getMemberInfo();
        }
    }, {
        key: "getMemberInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.memberInfoWacca();

                      case 2:
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getVipPackageList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.vipPackageList();

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
        key: "buyMemberPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.buyMemberPackage({
                            packageId: this.selectPackageId,
                            qty: this.count
                        });

                      case 2:
                        t = e.sent, 1 != t.code ? (this.alertTxt = t.message, this.showAlert = !0) : (console.log(t), 
                        _wechat2.default.payment(t.data.wxpay).then(function(e) {
                            wx.showToast({
                                title: "支付成功",
                                icon: "none",
                                duration: 1500
                            }), n.getMemberInfo();
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaVipRecharge, "pages/wacca/wacca-vip-recharge"));