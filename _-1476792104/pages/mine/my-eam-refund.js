function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var u = t[o](a), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                if (!u.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), addCard = function(e) {
    function t() {
        var e, n, r, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, u = Array(a), i = 0; i < a; i++) u[i] = arguments[i];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "退款"
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
        }, r.data = {
            refundNo: "",
            preRefundData: [],
            showAlert: !1,
            alertTxt: ""
        }, r.methods = {
            confirmRefund: function() {
                this.getRefund();
            },
            confirm: function() {
                this.showAlert = !1;
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.refundNo = e.refundNo;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getPreRefund();
        }
    }, {
        key: "getPreRefund",
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
                            orderNo: this.refundNo
                        }, e.next = 3, _konamiApi2.default.userPackagePreRefund(t);

                      case 3:
                        n = e.sent, 1 == n.code && (this.preRefundData = n.data), console.log("预退款", n), 
                        this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getRefund",
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
                            orderNo: this.refundNo
                        }, e.next = 3, _konamiApi2.default.userPackageRefund(t);

                      case 3:
                        n = e.sent, 1 == n.code ? (wx.navigateBack({
                            delta: 1
                        }), wx.showToast({
                            title: "申请成功",
                            icon: "none"
                        })) : (this.showAlert = !0, this.alertTxt = n.message), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/mine/my-eam-refund"));