!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), r = (o(require("./../../utils/api.js")), 
    o(require("./../../wxbarcode/qrcode.js")));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function o() {
            var e, t, r;
            a(this, o);
            for (var i = arguments.length, s = Array(i), u = 0; u < i; u++) s[u] = arguments[u];
            return t = r = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "扫描二维码"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                selectIndex: 0,
                exchangeCode: "",
                qcode: ""
            }, r.methods = {
                preview: function() {
                    var e = r.qcode;
                    wx.previewImage({
                        urls: [ e ]
                    });
                }
            }, c(r, t);
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                console.log(e);
                var n = wx.createCanvasContext("img"), o = t.setCanvasSize();
                t.exchangeCode = e.exchangeCode, r.default.api.draw(e.codeUrl, "qrcode", o.w, o.h), 
                n.draw(), setTimeout(function() {
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
                    var t = wx.getSystemInfoSync(), n = t.windowWidth / 1.25, r = n;
                    e.w = n, e.h = r;
                } catch (e) {
                    console.log("获取设备信息失败" + e);
                }
                return e;
            }
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(i, "pages/mine/my-set-meal-qr"));
}();