function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var o = t[n](i), c = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(c).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(c);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), waccaVipRights = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), c = 0; c < i; c++) o[c] = arguments[c];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            customStatusbar: {
                title: "华卡音舞会员权益"
            },
            memberDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "memberDialog",
                title: "升级为基本会员"
            },
            privilegeDialog: {
                "v-bind:isShowDialog.sync": "privilegeDialog",
                "v-bind:title.sync": "dialogTitle"
            }
        }, a.$events = {}, a.components = {
            customStatusbar: _customStatusbar2.default,
            memberDialog: _matchDialog2.default,
            privilegeDialog: _matchDialog2.default
        }, a.mixins = [], a.data = {
            cardCur: 0,
            memberInfo: "",
            memberDialog: !1,
            dialogTitle: "",
            privilegeDialog: !1
        }, a.computed = {}, a.methods = {
            cardSwiper: function(e) {
                this.cardCur = e.detail.current;
            },
            swiperChange: function(e) {
                this.cardCur = e;
            },
            rechargeVip: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-vip-recharge"
                });
            },
            buyGoods: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-shop"
                });
            },
            upMember: function() {
                this.memberDialog = !0;
            },
            buyMember: function() {
                this.joinMember();
            },
            showPrivilege: function() {
                this.privilegeDialog = !0, this.dialogTitle = "更多权益";
            },
            closePrivilegeDialog: function() {
                this.privilegeDialog = !1;
            },
            goBack: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }, a.events = {}, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.getMemberInfo();
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
                        if (t = e.sent, 1 != t.code) {
                            e.next = 16;
                            break;
                        }
                        this.memberInfo = t.data, this.days = parseInt(t.data.validDays), e.t0 = parseInt(t.data.memberType), 
                        e.next = 2 === e.t0 ? 9 : 3 === e.t0 ? 11 : 13;
                        break;

                      case 9:
                        return this.cardCur = 1, e.abrupt("break", 15);

                      case 11:
                        return this.cardCur = 2, e.abrupt("break", 15);

                      case 13:
                        return this.cardCur = 0, e.abrupt("break", 15);

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "joinMember",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, _wechat2.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), r.getMemberInfo(), r.$apply();
                        }).catch(function(e) {
                            console.log("支付失败", e), wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }), this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaVipRights, "pages/wacca/wacca-vip-rights"));