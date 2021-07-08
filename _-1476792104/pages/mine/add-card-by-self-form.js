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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), addCardBySelfForm = function(e) {
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
                title: "自助开卡"
            },
            addCardDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "isShowDialog"
            }
        }, a.$events = {}, a.components = {
            statusbar: _matchStatusbar2.default,
            addCardDialog: _matchDialog2.default
        }, a.mixins = [ _userMixin2.default ], a.data = {
            codeText: "获取验证码",
            isShowDialog: !1,
            aemsGoodsName: "",
            isCaptcha: !1,
            nextStep: !1,
            aemsGoodsNo: "",
            storeDetail: "",
            totalPrice: "",
            storeName: "",
            storeId: "",
            orderNo: "",
            phone: "",
            code: "",
            name: ""
        }, a.methods = {
            pay: function() {
                this.createOrder();
            },
            exchangeCard: function() {
                this.getCardOrderDetail(), this.isShowDialog = !1;
            },
            getCaptcha: function() {
                var e = this, t = 60;
                if (!this.data.codeText.includes("s")) {
                    this.getCaptcha();
                    var r = function() {
                        e.codeText = t + "s", t--, e.$apply(), t < -1 && (clearInterval(e.timer), e.codeText = "重获验证码", 
                        e.$apply());
                    };
                    r(), this.timer = setInterval(r, 1e3);
                }
            },
            getPhone: function(e) {
                if (this.phone = e.detail.value, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                void (this.nextStep = !1);
                this.isCaptcha = !0, this.smsAgree();
            },
            getCode: function(e) {
                this.code = e.detail.value, this.smsAgree();
            },
            getUserPhone: function() {
                if (this.phone = this.userInfo.mobile, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(this.phone)) return void (this.isCaptcha = !1);
                this.isCaptcha = !0, this.$apply();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log(e), this.aemsGoodsName = e.aemsGoodsName, this.aemsGoodsNo = e.aemsGoodsNo, 
            this.totalPrice = e.totalPrice, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.storeDetail = wx.getStorageSync("storeDetail"), this.storeDetail && (this.storeName = this.storeDetail.store_name, 
            this.storeId = this.storeDetail.store_id), this.$apply();
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
        key: "smsAgree",
        value: function() {
            if (!this.isCaptcha || this.code.length < 4) return void (this.nextStep = !1);
            this.nextStep = !0;
        }
    }, {
        key: "getCaptcha",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.sendCaptcha({
                            mobile: this.phone
                        });

                      case 2:
                        t = e.sent, console.log(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "createOrder",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.nextStep) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return t = {
                            name: this.userInfo.nickname,
                            mobile: this.phone,
                            captcha: this.code,
                            storeId: this.storeId,
                            aemsGoodsNo: this.aemsGoodsNo
                        }, e.next = 5, _api2.default.cardCreateOrder(t);

                      case 5:
                        if (r = e.sent, Object.keys(r.data).length && Object.keys(r.data.wxpay).length) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        _wechat2.default.payment(r.data.wxpay).then(function(e) {
                            a.orderNo = r.data.orderNo, a.isShowDialog = !0;
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getCardOrderDetail",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.orderDetail({
                            orderNo: this.orderNo
                        });

                      case 2:
                        t = e.sent, console.log(t), t && (this.getCode(t.data.orderNo), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getCode",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getExchangeCode({
                            orderNo: t
                        });

                      case 2:
                        r = e.sent, r && wx.navigateTo({
                            url: "/pages/mine/card-exchange-qr?exchangeCode=" + r.data.exchangeCode
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCardBySelfForm, "pages/mine/add-card-by-self-form"));