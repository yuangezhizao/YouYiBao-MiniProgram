!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = r(require("./../../npm/wepy/lib/wepy.js")), n = r(require("./../../components/match-statusbar.js")), o = (r(require("./../../utils/api.js")), 
    r(require("./../../wxbarcode/qrcode.js"))), a = r(require("./../../utils/environment.js"));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function r() {
            var e, t, o;
            c(this, r);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return t = o = s(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(i))), 
            o.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, o.$repeat = {}, o.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "会员卡兑换码"
                }
            }, o.$events = {}, o.components = {
                statusbar: n.default
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
            }, s(o, t);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(r, t), e(r, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                console.log(e), t.storeName = e.storeName;
                var n = wx.createCanvasContext("img"), a = t.setCanvasSize();
                o.default.api.draw(e.exchangeCode, "qrcode", a.w, a.h), n.draw(), setTimeout(function() {
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
                var t = "wss://" + (a.default.production ? a.default.prod.domain : a.default.dev.domain) + "/websocket";
                wx.connectSocket({
                    url: t + "?name=" + e,
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
        } ]), r;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/mine/card-exchange-qr"));
}();