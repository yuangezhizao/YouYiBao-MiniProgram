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
                    var o = t[a](i), c = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(c).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(c);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _agreement = require("./../../utils/agreement.js"), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), addCard = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), c = 0; c < i; c++) o[c] = arguments[c];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "我的e-am点"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default
        }, r.data = {
            isChecked: !1,
            eamPoint: 0,
            check: 0,
            showAgreement: !1,
            agreeTxt: [],
            memberStateMusic: "",
            memberStateDance: ""
        }, r.methods = {
            toggleCheckbox: function() {
                this.isChecked = !this.isChecked, this.$apply();
            },
            eamPointRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam-records"
                });
            },
            rechargeEamPoint: function() {
                1 == this.isChecked ? wx.navigateTo({
                    url: "/pages/mine/my-eam-recharge"
                }) : this.showAgreement = !0;
            },
            memberExchangeCode: function() {
                wx.navigateTo({
                    url: "/pages/mine/my-eam-ex-code"
                });
            },
            musicMachine: function() {
                wx.navigateTo({
                    url: "/pages/machine/machine-music5?isScan=0"
                });
            },
            danceMachine: function() {
                wx.navigateTo({
                    url: "/pages/machine/machine-dance?isScan=0"
                });
            },
            close: function() {
                this.showAgreement = !1;
            },
            confirm: function() {
                this.isChecked = !0, this.showAgreement = !1, wx.navigateTo({
                    url: "/pages/mine/my-eam-recharge"
                });
            },
            showAgree: function() {
                this.showAgreement = !0;
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.agreeTxt = _agreement.agreementTxt;
        }
    }, {
        key: "onShow",
        value: function() {
            this.findScoreCoin(), this.getMemberStateMusic(), this.getMemberStateDance();
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
                        t = e.sent, t && (this.eamPoint = t.point, this.check = t.check, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberStateMusic",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _konamiApi2.default.getMemberInfoMusic();

                      case 2:
                        t = e.sent, 1 == t.code && (this.memberStateMusic = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberStateDance",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _konamiApi2.default.getMemberInfoDance();

                      case 2:
                        t = e.sent, 1 == t.code && (this.memberStateDance = t.data), this.$apply();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/mine/my-eam"));