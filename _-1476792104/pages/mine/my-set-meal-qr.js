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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _qrcode = require("./../../wxbarcode/qrcode.js"), _qrcode2 = _interopRequireDefault(_qrcode), mySetMealQr = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        n.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, n.$repeat = {}, n.$props = {
            statusbar: {
                leftIcon: "true",
                title: "扫描二维码"
            }
        }, n.$events = {}, n.components = {
            statusbar: _matchStatusbar2.default
        }, n.data = {
            selectIndex: 0,
            exchangeCode: "",
            qcode: ""
        }, n.methods = {
            preview: function() {
                var e = n.qcode;
                wx.previewImage({
                    urls: [ e ]
                });
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = this;
            console.log(e);
            var r = wx.createCanvasContext("img"), n = t.setCanvasSize();
            t.exchangeCode = e.exchangeCode, _qrcode2.default.api.draw(e.codeUrl, "qrcode", n.w, n.h), 
            r.draw(), setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: "qrcode",
                    success: function(e) {
                        t.qcode = e.tempFilePath, t.$apply();
                    }
                });
            }, 1e3);
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
        key: "setCanvasSize",
        value: function() {
            var e = {};
            try {
                var t = wx.getSystemInfoSync(), r = t.windowWidth / 1.25, n = r;
                e.w = r, e.h = n;
            } catch (e) {
                console.log("获取设备信息失败" + e);
            }
            return e;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(mySetMealQr, "pages/mine/my-set-meal-qr"));