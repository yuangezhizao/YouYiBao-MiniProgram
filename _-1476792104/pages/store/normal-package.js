function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var i = t[n](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(s);
            }
            return a("next");
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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), normalPackage = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            customStatusbar: {
                title: "非会员卡套餐"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, a.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, a.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, a.mixins = [], a.data = {
            count: 1,
            storeId: "",
            packageId: "",
            image: "",
            normalPakcageDetail: "",
            showAlert: !1,
            alertTxt: "",
            isChecked: !1
        }, a.computed = {}, a.methods = {
            add: function() {
                this.count++;
            },
            down: function() {
                if (this.count <= 1) return void (this.count = 1);
                this.count--;
            },
            getCount: function(e) {
                this.count = e.detail.value;
            },
            createOrder: function() {
                if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                this.getCreateOreder();
            },
            confirm: function() {
                this.showAlert = !1;
            },
            toggleCheckbox: function() {
                this.isChecked = !this.isChecked;
            },
            showAgree: function() {
                wx.navigateTo({
                    url: "/pages/store/package-agreement"
                });
            }
        }, a.events = {}, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.storeId = e.storeId, this.packageId = e.packageId, this.image = e.image, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.comboList();
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
        key: "comboList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.comboList({
                            id: this.packageId,
                            storeid: this.storeId
                        });

                      case 2:
                        t = e.sent, t && (t.data.validity = _units2.default.formatTime(new Date(1e3 * t.data.validity)), 
                        this.normalPakcageDetail = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getCreateOreder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, o = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            openid: "",
                            storeId: this.normalPakcageDetail.storeId,
                            cardNum: 0,
                            goodsType: 2,
                            goodsId: this.normalPakcageDetail.id,
                            payType: 4,
                            qty: this.count,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, _api2.default.createOrder(t);

                      case 3:
                        if (r = e.sent, 1 == r.code) {
                            e.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = r.message, this.$apply(), e.next = 16;
                        break;

                      case 10:
                        return a = r.data.orderid, e.next = 13, _api2.default.payOrder({
                            payType: 4,
                            orderNo: a
                        });

                      case 13:
                        n = e.sent, _wechat2.default.payment(n.data.sign).then(function(e) {
                            wx.navigateTo({
                                url: "/pages/store/pay-success?resultType=normal_package&orderId=" + n.data.orderid + "&storeId=" + o.normalPakcageDetail.storeId + "&goodsId=" + o.normalPakcageDetail.id + "&storeName=" + o.normalPakcageDetail.store_name + "&price=" + o.normalPakcageDetail.packages_price + "&goodsName=" + o.normalPakcageDetail.packages_name
                            });
                        }), this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(normalPackage, "pages/store/normal-package"));