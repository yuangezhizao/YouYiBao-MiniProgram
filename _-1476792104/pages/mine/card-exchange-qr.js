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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _qrcode = require("./../../wxbarcode/qrcode.js"), _qrcode2 = _interopRequireDefault(_qrcode), _environment = require("./../../utils/environment.js"), _environment2 = _interopRequireDefault(_environment), cardExchangeQr = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, c = Array(a), s = 0; s < a; s++) c[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
        o.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, o.$repeat = {}, o.$props = {
            statusbar: {
                leftIcon: "true",
                title: "会员卡兑换码"
            }
        }, o.$events = {}, o.components = {
            statusbar: _matchStatusbar2.default
        }, o.data = {
            selectIndex: 0,
            storeName: "",
            qcode: ""
        }, o.methods = {
            preview: function() {
                var e = o.qcode;
                wx.previewImage({
                    urls: [ e ]
                });
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = this;
            console.log(e), t.storeName = e.storeName;
            var n = wx.createCanvasContext("img"), o = t.setCanvasSize();
            _qrcode2.default.api.draw(e.exchangeCode, "qrcode", o.w, o.h), n.draw(), setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: "qrcode",
                    success: function(e) {
                        t.qcode = e.tempFilePath, t.$apply();
                    }
                });
            }, 1e3), t.createSocket(e.exchangeCode);
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
                var t = wx.getSystemInfoSync(), n = t.windowWidth / 1.25, o = n;
                e.w = n, e.h = o;
            } catch (e) {
                console.log("获取设备信息失败" + e);
            }
            return e;
        }
    }, {
        key: "createSocket",
        value: function(e) {
            var t = _environment2.default.production ? _environment2.default.prod.domain : _environment2.default.dev.domain, n = "wss://" + t + "/websocket";
            wx.connectSocket({
                url: n + "?name=" + e,
                method: "GET"
            }), wx.onSocketOpen(function(t) {
                console.log("WebSocket连接已打开!"), wx.sendSocketMessage({
                    data: {
                        name: e,
                        content: "exchange"
                    }
                });
            }), wx.onSocketMessage(function(e) {
                var t = JSON.parse(e.data);
                Object.keys(t.content).length && "succeed" == t.content && (wx.closeSocket(), wx.showModal({
                    title: "温馨提示",
                    content: "兑换出卡成功!",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm ? (console.log("用户点击确定"), wx.navigateBack()) : wx.navigateBack();
                    }
                }));
            }), wx.onSocketClose(function() {
                console.log("WebSocket连接已经关闭！");
            });
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(cardExchangeQr, "pages/mine/card-exchange-qr"));