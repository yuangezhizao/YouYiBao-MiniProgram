function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(i, a) {
                try {
                    var o = t[i](a), s = o.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), myPrize = function(e) {
    function t() {
        var e, r, n, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, n.$repeat = {}, n.$props = {
            statusbar: {
                leftIcon: "true",
                title: "我的奖池奖品"
            }
        }, n.$events = {}, n.components = {
            statusbar: _matchStatusbar2.default
        }, n.data = {
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 20,
            prizeList: [],
            showExchange: !1,
            exchangeCode: "",
            prizeId: ""
        }, n.methods = {
            setAddress: function(e) {
                if (1 == e.prizeType) wx.navigateTo({
                    url: "/pages/mine/coin-record"
                }); else if (2 == e.prizeType) wx.navigateTo({
                    url: "/pages/mine/integral-record"
                }); else if (3 == e.prizeType) wx.navigateTo({
                    url: "/pages/mine/ticket-record"
                }); else if (0 == e.prizeType && "平台活动" == e.eventTypeName) 0 == e.isReceive ? wx.navigateTo({
                    url: "/pages/match/set-prize-address?prizeName=" + e.prizeName + "&prizeId=" + e.id + "&isReceive=" + e.isReceive
                }) : wx.navigateTo({
                    url: "/pages/match/set-prize-address?prizeName=" + e.prizeName + "&expressName=" + e.expressName + "&expressMobile=" + e.expressMobile + "&expressAddress=" + e.expressAddress + "&isReceive=" + e.isReceive
                }); else {
                    if (1 == e.isReceive) return;
                    this.showExchange = !0, this.prizeId = e.id;
                }
            },
            close: function() {
                this.showExchange = !1;
            },
            getExchangeCode: function(e) {
                this.exchangeCode = e.detail.value;
            },
            exchange: function() {
                "" == this.exchangeCode ? wx.showToast({
                    title: "请输入兑换码",
                    icon: "none"
                }) : this.exchangePrize();
            }
        }, i = r, _possibleConstructorReturn(n, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.myPrizeListJackpot();
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
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.myPrizeListJackpot());
        }
    }, {
        key: "myPrizeListJackpot",
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
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.myPrizeListJackpot(t);

                      case 3:
                        r = e.sent, 1 == r.code && ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.prizeList = r.data : this.prizeList = this.prizeList.concat(r.data), 
                        this.$apply(), console.log("我的奖品列表", r));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "exchangePrize",
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
                            id: this.prizeId,
                            exchangeCode: this.exchangeCode
                        }, e.next = 3, _api2.default.exchangePrize(t);

                      case 3:
                        r = e.sent, 1 == r.code ? (this.myPrizeListJackpot(), this.showExchange = !1, this.$apply()) : wx.showToast({
                            title: r.message,
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(myPrize, "pages/match/my-prize"));