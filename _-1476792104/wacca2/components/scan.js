!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
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
    }(), o = require("./../npm/wepy/lib/wepy.js"), n = (e = o) && e.__esModule ? e : {
        default: e
    };
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(e) {
        function o() {
            var e, t, i;
            r(this, o);
            for (var c = arguments.length, u = Array(c), l = 0; l < c; l++) u[l] = arguments[l];
            return t = i = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            i.props = {}, i.data = {}, i.components = {}, i.methods = {
                scan: function() {
                    wx.showLoading({
                        title: "加载中...",
                        mask: !0
                    }), wx.scanCode({
                        onlyFromCamera: !0,
                        success: function(e) {
                            console.log(e);
                            var t = wx.getStorageSync("Authorization"), o = wx.getStorageSync("token");
                            n.default.request({
                                url: e.result,
                                method: "GET",
                                header: {
                                    "Content-Type": "application/json",
                                    Authorization: t || "",
                                    token: o || "4WtEbIVbhCNV86nSdAcXIAenm6swEaj5OyXH0C6IEVzS2V86ySVO3dV4HNzLJMjy",
                                    clientType: "weapp",
                                    appType: "YouYiBao"
                                }
                            }).then(function(e) {
                                wx.hideLoading(), console.log(e), wx.navigateTo({
                                    url: "/" + e.data
                                });
                            }).catch(function(e) {
                                wx.hideLoading();
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                }
            }, i.events = {}, i.watch = {}, i.computed = {}, a(i, t);
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
        }(o, e), t(o, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {}
        } ]), o;
    }(n.default.component);
    exports.default = i;
}();