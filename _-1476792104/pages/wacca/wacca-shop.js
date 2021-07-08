function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function o(r, a) {
                try {
                    var c = t[r](a), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                if (!c.done) return Promise.resolve(s).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), waccaMachine = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, c = Array(a), s = 0; s < a; s++) c[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
        o.config = {
            navigationStyle: "custom"
        }, o.$repeat = {}, o.$props = {
            customStatusbar: {
                title: "华卡音舞商店"
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
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, o.mixins = [], o.data = {
            count: [],
            memberInfo: "",
            goodsList: [],
            alertTxt: "",
            showAlert: !1
        }, o.computed = {}, o.methods = {
            add: function(e) {
                if (!this.count[e]) return void (this.count[e] = 1);
                this.count[e] += 1;
            },
            down: function(e) {
                if (this.count[e] <= 1) return void (this.count[e] = 1);
                this.count[e] -= 1;
            },
            getCount: function(e, t) {
                if (!/^[1-9]*$/.test(t.detail.value)) return this.count[e];
                this.count[e] = parseInt(t.detail.value);
            },
            buyGoods: function(e, t) {
                console.log("item", e, t);
                var n = e.id;
                this.purchaseGoods(n, t);
            },
            consumeRecord: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-consume-record"
                });
            },
            rechargeVip: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-vip-recharge"
                });
            },
            toRecord: function(e) {
                switch (parseInt(e)) {
                  case 0:
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-record?type=vip"
                    });
                    break;

                  case 1:
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-record?type=bb&itemId=109001&goodsNum=" + this.memberInfo.boostBadgeCount
                    });
                    break;

                  case 2:
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-record?type=bbs&itemId=109002&goodsNum=" + this.memberInfo.boostBadgeSCount
                    });
                    break;

                  case 3:
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-record?type=ex&itemId=106002&goodsNum=" + this.memberInfo.ticketCount
                    });
                }
            },
            confirm: function() {
                this.showAlert = !1;
            }
        }, o.events = {}, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.getMemberInfo(), this.getGoodsList();
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
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getGoodsList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.goodsList();

                      case 2:
                        if (t = e.sent, 1 == t.code) {
                            for (this.goodsList = t.data, n = 0; n <= this.goodsList.length - 1; n++) this.count[n] = 1;
                            this.$apply();
                        }

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "purchaseGoods",
        value: function() {
            function e(e, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
                var o, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.purchaseGoods({
                            goodsId: parseInt(t),
                            qty: this.count[n]
                        });

                      case 2:
                        o = e.sent, console.log(o), 1 != o.code ? (console.log("失败", o), this.alertTxt = o.message, 
                        this.showAlert = !0) : _wechat2.default.payment(o.data.wxpay).then(function(e) {
                            wx.showToast({
                                title: "支付成功",
                                icon: "none",
                                duration: 1500
                            }), r.getMemberInfo();
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }), this.$apply();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaMachine, "pages/wacca/wacca-shop"));