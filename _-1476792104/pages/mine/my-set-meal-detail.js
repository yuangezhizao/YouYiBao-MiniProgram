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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), mySetMealDetail = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, a.$repeat = {}, a.$props = {
            statusbar: {
                leftIcon: "true",
                title: "套餐详情"
            },
            dialog1: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "isShowDialog",
                title: "订单"
            }
        }, a.$events = {}, a.components = {
            statusbar: _matchStatusbar2.default,
            dialog1: _matchDialog2.default
        }, a.data = {
            normalPakcageDetail: "",
            isShowDialog: !1,
            orderNo: "",
            status: 0
        }, a.methods = {
            cancel: function() {
                this.isShowDialog = !0, this.$apply();
            },
            closeDialog: function() {
                this.isShowDialog = !1, this.$apply();
            },
            convert: function() {
                this.myPackagesExchange();
            },
            cancelOrder: function() {
                this.cancelOrder();
            },
            pay: function() {
                this.payOrder();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log(e), this.orderNo = e.orderId, this.status = e.status;
        }
    }, {
        key: "onShow",
        value: function() {
            this.myPackagesInfo();
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
        key: "myPackagesInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.myPackagesInfo({
                            orderno: this.orderNo
                        });

                      case 2:
                        t = e.sent, t && (r = t.data, 0 != r.valid_time && (r.valid_time = _units2.default.formatTime(new Date(1e3 * r.valid_time))), 
                        0 != r.ordertime && (r.ordertime = _units2.default.formatTime(new Date(1e3 * r.ordertime))), 
                        0 != r.convert_time && (r.convert_time = _units2.default.formatTime(new Date(1e3 * r.convert_time))), 
                        0 != r.abolishtime && (r.abolishtime = _units2.default.formatTime(new Date(1e3 * r.abolishtime))), 
                        this.normalPakcageDetail = r, this.$apply(), console.log(r));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "myPackagesExchange",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.myPackagesExchange({
                            orderno: this.orderNo
                        });

                      case 2:
                        t = e.sent, t && wx.navigateTo({
                            url: "/pages/mine/my-set-meal-qr?exchangeCode=" + t.data.exchangeCode + "&codeUrl=" + t.data.codeUrl
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "cancelOrder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.cancellationMyOrder({
                            orderno: this.orderNo
                        });

                      case 2:
                        t = e.sent, t && wx.navigateBack({
                            delta: 1
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "payOrder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.payOrder({
                            payType: 4,
                            orderNo: this.orderNo
                        });

                      case 2:
                        t = e.sent, t && _wechat2.default.payment(t.data.sign).then(function(e) {
                            wx.navigateTo({
                                url: "/pages/store/pay-success?resultType=normal_package&orderId=" + t.data.orderid + "&storeId=" + r.normalPakcageDetail.storeId + "&goodsId=" + r.normalPakcageDetail.id + "&storeName=" + r.normalPakcageDetail.store_name + "&price=" + r.normalPakcageDetail.pay_price + "&goodsName=" + r.normalPakcageDetail.name
                            });
                        }, function(e) {
                            console.log(e);
                        }).catch(function(e) {
                            console.log(e);
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(mySetMealDetail, "pages/mine/my-set-meal-detail"));