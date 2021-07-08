function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, i) {
                try {
                    var a = t[r](i), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(s).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(s);
            }
            return o("next");
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
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), addCard = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, o.$repeat = {}, o.$props = {
            statusbar: {
                leftIcon: "true",
                title: "会员兑换码"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, o.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, o.components = {
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default
        }, o.data = {
            code: "",
            codeLen: 0,
            couponInfo: "",
            exchangeSuccess: !1,
            showAlert: !1,
            alertTxt: "",
            couponNo: "",
            couponNoLen: "",
            isPass: !1
        }, o.methods = {
            getCode: function(e) {
                this.code = e.detail.value, this.codeLen = e.detail.value.length, /^11\d{10}$/.test(e.detail.value) ? this.isPass = !0 : this.isPass = !1;
            },
            search: function() {
                return this.codeLen < 1 ? (this.showAlert = !0, void (this.alertTxt = "请先输入兑换码!")) : 12 != this.codeLen || 0 == this.isPass ? (this.couponInfo = "", 
                this.showAlert = !0, void (this.alertTxt = "兑换码无效!")) : void this.getCouponInfo();
            },
            confirm: function() {
                this.showAlert = !1;
            },
            confirmExchange: function() {
                if (12 != this.couponNoLen) return this.showAlert = !0, void (this.alertTxt = "请先搜索后再兑换!");
                this.getExchangeCoupon();
            },
            goBack: function() {
                wx.navigateBack({
                    delta: 1
                });
            },
            exchangeList: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam-history"
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "getCouponInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            couponNo: this.code
                        }, e.next = 3, _konamiApi2.default.couponInfo(t);

                      case 3:
                        n = e.sent, 1 == n.code ? (this.couponInfo = n.data, this.couponNo = this.code, 
                        this.couponNoLen = this.codeLen, this.$apply()) : (this.showAlert = !0, this.alertTxt = n.message, 
                        this.couponInfo = "", this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getExchangeCoupon",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            couponNo: this.couponNo
                        }, e.next = 3, _konamiApi2.default.exchangeCoupon(t);

                      case 3:
                        n = e.sent, 1 == n.code ? (this.exchangeSuccess = !0, this.showAlert = !0, this.alertTxt = "兑换成功", 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = n.message, this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/mine/my-eam-ex-code"));