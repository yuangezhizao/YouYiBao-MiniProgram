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
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), Scan = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        o.config = {
            navigationStyle: "custom"
        }, o.$repeat = {}, o.$props = {
            customStatusbar: {
                title: "扫二维码"
            }
        }, o.$events = {}, o.components = {
            customStatusbar: _customStatusbar2.default
        }, o.mixins = [], o.data = {}, o.computed = {}, o.methods = {
            scan: function() {
                wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), wx.scanCode({
                    onlyFromCamera: !0,
                    success: function(e) {
                        console.log(e);
                        var t = wx.getStorageSync("token");
                        wx.request({
                            url: encodeURI(e.result).replace(/\%00/g, ""),
                            method: "GET",
                            header: {
                                "Content-Type": "application/json",
                                token: t || "4WtEbIVbhCNV86nSdAcXIAenm6swEaj5OyXH0C6IEVzS2V86ySVO3dV4HNzLJMjy",
                                clientType: "weapp",
                                appType: "YouYiBao"
                            },
                            success: function(e) {
                                wx.hideLoading(), console.log(e), wx.navigateTo({
                                    url: e.data
                                }), wx.setStorageSync("isScan", !0);
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                });
            }
        }, o.events = {}, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
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
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Scan, "pages/index/scan"));