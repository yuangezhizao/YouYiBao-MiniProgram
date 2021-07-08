function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, s) {
            function r(i, n) {
                try {
                    var o = t[i](n), a = o.value;
                } catch (e) {
                    return void s(e);
                }
                if (!o.done) return Promise.resolve(a).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(a);
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
        for (var s = 0; s < t.length; s++) {
            var r = t[s];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, s, r) {
        return s && e(t.prototype, s), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), setPrizeAddress = function(e) {
    function t() {
        var e, s, r, i;
        _classCallCheck(this, t);
        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
        return s = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "奖品收件信息"
            },
            matchDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "isShowDialog"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default,
            matchDialog: _matchDialog2.default
        }, r.data = {
            isShowDialog: !1,
            prizeName: "",
            prizeId: "",
            expressName: "",
            expressMobile: "",
            expressAddress: "",
            isReceive: ""
        }, r.mixins = [ _userMixin2.default ], r.methods = {
            submitHandle: function() {
                "" == this.expressName ? wx.showToast({
                    title: "请填写收货姓名",
                    icon: "none"
                }) : "" == this.expressMobile ? wx.showToast({
                    title: "请填写收货电话",
                    icon: "none"
                }) : "" == this.expressAddress ? wx.showToast({
                    title: "请填写收货地址",
                    icon: "none"
                }) : this.collectPrize(), this.$apply();
            },
            getExpressName: function(e) {
                this.expressName = e.detail.value;
            },
            getExpressMobile: function(e) {
                this.expressMobile = e.detail.value;
            },
            getExpressAddress: function(e) {
                this.expressAddress = e.detail.value;
            },
            goBack: function() {
                this.isShowDialog = !1, wx.navigateBack({
                    delta: 1
                });
            }
        }, i = s, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log("options", e), this.prizeName = e.prizeName, this.prizeId = e.prizeId, 
            this.isReceive = e.isReceive, 1 == this.isReceive && (this.expressName = e.expressName, 
            this.expressMobile = e.expressMobile, this.expressAddress = e.expressAddress);
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
        key: "collectPrize",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            id: this.prizeId,
                            expressName: this.expressName,
                            expressMobile: this.expressMobile,
                            expressAddress: this.expressAddress
                        }, e.next = 3, _api2.default.collectPrizeJackpot(t);

                      case 3:
                        s = e.sent, 1 == s.code ? (this.isShowDialog = !0, this.$apply()) : wx.showToast({
                            title: s.message,
                            icon: "none"
                        });

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(setPrizeAddress, "pages/match/set-prize-address"));