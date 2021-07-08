function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), Qrcode = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.config = {
            navigationBarTitleText: "游艺宝"
        }, n.data = {
            options: ""
        }, n.components = {}, n.methods = {}, n.events = {}, n.mixins = [], n.computed = {}, 
        r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log("qrcode page loaded", e), this.options = e;
        }
    }, {
        key: "onShow",
        value: function() {
            this.jump(this.options);
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
        key: "jump",
        value: function(e) {
            var t = wx.getStorageSync("token");
            _wepy2.default.request({
                url: decodeURIComponent(e.q),
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                    token: t || "",
                    clientType: "weapp",
                    appType: "YouYiBao"
                }
            }).then(function(e) {
                wx.hideLoading(), console.log(e.data), _wepy2.default.redirectTo({
                    url: e.data
                }).then(function(e) {
                    console.log("失败", e);
                }).catch(function(e) {
                    console.log("redirect error", e), wx.redirectTo({
                        url: "/pages/index/scan"
                    });
                }), wx.setStorageSync("isScan", !0);
            }).catch(function(e) {
                wx.hideLoading(), wx.redirectTo({
                    url: "/pages/index/scan"
                });
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Qrcode, "pages/qrcode/qrcode"));