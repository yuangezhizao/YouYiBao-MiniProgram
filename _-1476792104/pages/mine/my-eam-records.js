function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var i = t[n](o), s = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), cardExchange = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "消费记录"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default
        }, r.data = {
            currentTab: 0,
            navbar: [ "可使用", "已使用", "已退款", "消费记录" ],
            pageNo: 1,
            pageSize: 10,
            canLoadMore: !0,
            tempList: [],
            packageList: []
        }, r.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                this.pageNo = 1, this.canLoadMore = !0, this.currentTab < 3 ? (this.getMemberPackage(), 
                this.packageList = "") : this.getRecordList());
            },
            preRefund: function(e) {
                wx.navigateTo({
                    url: "/pages/mine/my-eam-refund?refundNo=" + e
                });
            }
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getMemberPackage();
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (console.log("走了这里"), this.pageNo++, this.getRecordList());
        }
    }, {
        key: "getMemberPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            status: this.currentTab + 1,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _konamiApi2.default.userPackageList(t);

                      case 3:
                        if (a = e.sent, 1 != a.code) {
                            e.next = 9;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.packageList = a.data : this.packageList = this.packageList.concat(a.data);

                      case 9:
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getRecordList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _konamiApi2.default.userPackageBalance(t);

                      case 3:
                        if (a = e.sent, console.log("记录", a), 1 != a.code) {
                            e.next = 10;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        1 == this.pageNo ? this.tempList = a.data : this.tempList = this.tempList.concat(a.data);

                      case 10:
                        this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(cardExchange, "pages/mine/my-eam-records"));