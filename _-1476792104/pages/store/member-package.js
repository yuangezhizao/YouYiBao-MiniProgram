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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), memberPackage = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
            customStatusbar: {
                title: "会员卡套餐详情"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, n.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, n.mixins = [], n.data = {
            selectCard: !1,
            confirmCard: !1,
            cardList: [],
            storeId: "",
            setcoinno: "",
            packageDetail: "",
            showAlert: !1,
            alertTxt: "",
            isChecked: !1
        }, n.computed = {}, n.methods = {
            selectCard: function() {
                if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                this.selectCard = !0;
            },
            close: function() {
                this.selectCard = !1, this.confirmCard = !1;
            },
            getCard: function(e) {
                console.log(e), this.createOrder(e);
            },
            confirm: function() {
                this.showAlert = !1;
            },
            addCard: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-card"
                });
            },
            errorImg: function(e) {
                this.packageDetail.image = "http://yyb-oss.universal-space.cn/imgs/mine/button_vip-100.png";
            },
            toggleCheckbox: function() {
                this.isChecked = !this.isChecked;
            },
            showAgree: function() {
                wx.navigateTo({
                    url: "/pages/store/package-agreement"
                });
            }
        }, n.events = {}, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.storeId = e.storeId, this.setcoinno = e.setcoinno;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getPackageDetail();
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
        key: "getPackageDetail",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.memberPackageInfo({
                            setcoinno: this.setcoinno,
                            storeId: this.storeId
                        });

                      case 2:
                        t = e.sent, 0 == t.retCode ? (this.packageDetail = t.data, this.getCardList(), this.$apply()) : (this.showAlert = !0, 
                        this.alertTxt = t.retMsg, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getCardList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.myVipCard({
                            storeId: this.storeId
                        });

                      case 2:
                        t = e.sent, t && (this.cardList = t.data.filter(function(e) {
                            return 1e3 * e.validdate > new Date().getTime();
                        }), this.$apply());

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
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var r, n, a, o, s = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            openid: "",
                            storeId: this.storeId,
                            cardNum: t.card_number,
                            goodsType: 3,
                            goodsId: this.packageDetail.id,
                            payType: 4,
                            qty: 1,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, _api2.default.createOrder(r);

                      case 3:
                        if (!(n = e.sent)) {
                            e.next = 10;
                            break;
                        }
                        return a = n.data.orderid, e.next = 8, _api2.default.payOrder({
                            payType: 4,
                            orderNo: a
                        });

                      case 8:
                        o = e.sent, o && (console.log(o), _wechat2.default.payment(o.data.sign).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/store/pay-success?resultType=member_package&orderId=" + o.data.orderid + "\n              &storeId=" + s.storeId + "\n              &cardNum=" + t.card_number + "\n              &goodsId=" + s.packageDetail.id + "\n              &storeName=" + s.packageDetail.storeName + "\n              &price=" + s.packageDetail.money1 + "\n              &goodsName=" + encodeURIComponent(s.packageDetail.desc1)
                            });
                        }));

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(memberPackage, "pages/store/member-package"));