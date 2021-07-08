function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), addCard = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, n.$repeat = {}, n.$props = {
            statusbar: {
                leftIcon: "true",
                title: "添加会员卡"
            }
        }, n.$events = {}, n.components = {
            statusbar: _matchStatusbar2.default
        }, n.mixins = [ _userMixin2.default ], n.data = {
            codeText: "获取验证码",
            isCaptcha: !1,
            phone: "",
            code: "",
            store: "选择门店",
            storeDetail: "",
            nextStep: !1,
            needCode: !0
        }, n.methods = {
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
            addCard: function() {
                this.addVipCard();
            },
            getPhone: function(e) {
                if (this.phone = e.detail.value, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                this.needCode = !0, void (this.nextStep = !1);
                this.isCaptcha = !0, this.smsAgree();
            },
            getCode: function(e) {
                this.code = e.detail.value, this.smsAgree();
            },
            getStore: function() {
                wx.navigateTo({
                    url: "/pages/store/nearby-stores?addCard='true'&enterType=select"
                });
            },
            getUserPhone: function() {
                if (this.phone = this.userInfo.mobile, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(this.phone)) return this.isCaptcha = !1, 
                void (this.needCode = !0);
                this.isCaptcha = !1, this.needCode = !1, this.smsAgree(), this.$apply();
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.storeDetail = wx.getStorageSync("storeDetail"), this.storeDetail && (this.store = this.storeDetail.store_name), 
            this.$apply();
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
            if (this.needCode && (!this.isCaptcha || this.code.length < 4)) return void (this.nextStep = !1);
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
        key: "addVipCard",
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
                            mobile: this.phone,
                            captcha: this.code,
                            storeid: this.storeDetail.store_id
                        }, e.next = 3, _api2.default.addVipCard(t);

                      case 3:
                        r = e.sent, 0 == r.retCode && (wx.setStorageSync("addSuccess", 1), wx.navigateBack({
                            delta: 1
                        }));

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/mine/add-card"));