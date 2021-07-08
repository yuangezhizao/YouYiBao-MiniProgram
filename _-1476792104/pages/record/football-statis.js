function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(n, a) {
                try {
                    var i = t[n](a), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(u);
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
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), footballStatis = function(e) {
    function t() {
        var e, r, o, n;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationStyle: "custom"
        }, o.$repeat = {}, o.$props = {
            statusbar: {
                leftIcon: "true",
                title: "一球成名"
            }
        }, o.$events = {}, o.components = {
            statusbar: _matchStatusbar2.default
        }, o.data = {
            productId: "",
            productName: "",
            productImage: "",
            recordList: []
        }, o.methods = {
            historyRecord: function() {
                wx.navigateTo({
                    url: "/pages/record/football-record?productId=" + this.productId + "&productImage=" + this.productImage
                });
            },
            rank: function() {
                wx.navigateTo({
                    url: "/pages/record/football-rank?productId=" + this.productId
                });
            },
            nearbyShopMachine: function() {
                wx.navigateTo({
                    url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                });
            }
        }, n = r, _possibleConstructorReturn(o, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.productId = e.productId, this.productName = e.productName, this.productImage = e.productImage;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getUserRecordStatis();
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
        key: "getUserRecordStatis",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        t = e.sent, 1 == t.code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(footballStatis, "pages/record/football-statis"));