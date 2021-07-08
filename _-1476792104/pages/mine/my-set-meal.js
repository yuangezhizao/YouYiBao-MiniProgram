function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _units = require("./../../utils/units.js"), _units2 = _interopRequireDefault(_units), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), mySetMeal = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, n.$repeat = {}, n.$props = {
            statusbar: {
                leftIcon: "true",
                title: "我的套餐"
            },
            dialog1: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "isShowDialog",
                title: "订单"
            }
        }, n.$events = {}, n.components = {
            statusbar: _matchStatusbar2.default,
            dialog1: _matchDialog2.default
        }, n.data = {
            tabIndex: 1,
            pageNo: 1,
            pageSize: 3,
            packageList: [],
            isShowDialog: !1,
            cancelOrderId: "",
            canLoadMore: !0
        }, n.methods = {
            navbarTap: function(e) {
                this.currentTab = e.currentTarget.dataset.index, this.currentTab, this.$apply();
            },
            tabChange: function(e) {
                this.tabIndex != e && (this.tabIndex = e, this.canLoadMore = !0, this.pageNo = 1, 
                this.getPackages());
            },
            mealDetail: function(e) {
                console.log(e), wx.navigateTo({
                    url: "/pages/mine/my-set-meal-detail?openType=record&orderId=" + e.order_id + "&status=" + this.tabIndex
                });
            },
            convert: function(e) {
                this.myPackagesExchange(e.order_id);
            },
            closeDialog: function() {
                this.isShowDialog = !1, this.$apply();
            },
            cancel: function(e) {
                this.isShowDialog = !0, this.cancelOrderId = e.order_id, this.$apply();
            },
            cancelOrder: function() {
                this.cancelOrder(this.cancelOrderId);
            }
        }, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.getPackages();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.getPackages());
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
        key: "getPackages",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a, n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: this.tabIndex,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.myPackages(t);

                      case 3:
                        if (a = e.sent, console.log(a), (!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        this.pageNo > 1) {
                            for (n = a.data, r = 0; r < n.length; r++) n[r].valid_time = _units2.default.formatTime(new Date(1e3 * n[r].valid_time)), 
                            n[r].order_time = _units2.default.formatTime(new Date(1e3 * n[r].order_time));
                            this.packageList = this.packageList.concat(n), this.$apply();
                        } else {
                            for (n = a.data, i = 0; i < n.length; i++) n[i].valid_time = _units2.default.formatTime(new Date(1e3 * n[i].valid_time)), 
                            n[i].order_time = _units2.default.formatTime(new Date(1e3 * n[i].order_time));
                            this.packageList = n, this.$apply();
                        }

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "myPackagesExchange",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.myPackagesExchange({
                            orderno: t
                        });

                      case 2:
                        a = e.sent, a && wx.navigateTo({
                            url: "/pages/mine/my-set-meal-qr?exchangeCode=" + a.data.exchangeCode + "&codeUrl=" + a.data.codeUrl
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "cancelOrder",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.cancellationMyOrder({
                            orderno: t
                        });

                      case 2:
                        a = e.sent, a && (this.isShowDialog = !1, this.getPackages(), this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(mySetMeal, "pages/mine/my-set-meal"));