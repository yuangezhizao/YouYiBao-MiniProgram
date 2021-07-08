!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./environment.js")), r = o(require("./units.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    require("./environment.js");
    var a = void 0, i = function() {
        function n() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, n);
        }
        var o, i;
        return e(n, null, [ {
            key: "request",
            value: function(e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], u = (wx.getStorageSync("Authorization"), 
                wx.getStorageSync("token"));
                a = wx.getStorageSync("firstTime"), i && wx.showLoading({
                    title: "加载中...",
                    mask: !0
                });
                var c = void 0;
                return c = e.indexOf("http") > -1 ? e + "?" + r.default.parseParam(t) : n.service.apiUrl + e + "?" + r.default.parseParam(t), 
                console.log(c + "=========" + JSON.stringify(t)), new Promise(function(e, n) {
                    wx.request({
                        url: c,
                        data: Object.assign({}, t),
                        method: o,
                        header: {
                            "Content-Type": "application/json",
                            token: u || "",
                            clientType: "weapp",
                            appType: "YouYiBao"
                        },
                        success: e,
                        fail: n
                    });
                }).then(function(e) {
                    return wx.hideLoading(), n.errorHandler(e), 200 == e.statusCode ? n.codeHandler(e) ? null : e.data : null;
                }).catch(function(e) {
                    wx.hideLoading(), console.log(n.service + "=================="), console.log(e), 
                    wx.showModal({
                        content: "走开一下，马上回来！"
                    });
                });
            }
        }, {
            key: "requestJson",
            value: function(e, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = (wx.getStorageSync("Authorization"), 
                wx.getStorageSync("token"));
                a && wx.showLoading({
                    title: "加载中...",
                    mask: !0
                });
                var u = void 0;
                return u = e.indexOf("http") > -1 ? e : n.service.apiUrl + e, t.default.request({
                    url: u,
                    method: o,
                    data: Object.assign({}, r),
                    header: {
                        "Content-Type": "application/json",
                        token: i || "",
                        clientType: "weapp",
                        appType: "YouYiBao"
                    }
                }).then(function(e) {
                    return wx.hideLoading(), n.errorHandler(e), 200 == e.statusCode ? n.codeHandler(e) ? null : e.data : null;
                }).catch(function(e) {
                    wx.hideLoading(), console.log(e), wx.showModal({
                        content: "走开一下，马上回来！"
                    });
                });
            }
        }, {
            key: "requestForm",
            value: function(e, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = (wx.getStorageSync("Authorization"), 
                wx.getStorageSync("token"));
                a && wx.showLoading({
                    title: "加载中...",
                    mask: !0
                });
                var u = void 0;
                return u = e.indexOf("http") > -1 ? e : n.service.apiUrl + e, t.default.request({
                    url: u,
                    method: o,
                    data: Object.assign({}, r),
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        token: i || "",
                        clientType: "weapp",
                        appType: "YouYiBao"
                    }
                }).then(function(e) {
                    return wx.hideLoading(), n.errorHandler(e), 200 == e.statusCode ? n.codeHandler(e) ? null : e.data : null;
                }).catch(function(e) {
                    wx.hideLoading(), console.log(e), wx.showModal({
                        content: "走开一下，马上回来！"
                    });
                });
            }
        }, {
            key: "errorHandler",
            value: (o = regeneratorRuntime.mark(function e(t, n) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        e.t0 = t.statusCode, e.next = 401 === e.t0 ? 3 : 403 === e.t0 ? 4 : 422 === e.t0 ? 16 : 404 === e.t0 ? 18 : 500 === e.t0 ? 20 : 502 === e.t0 ? 22 : 24;
                        break;

                      case 3:
                        return e.abrupt("break", 24);

                      case 4:
                        if (!n) {
                            e.next = 7;
                            break;
                        }
                        return n(), e.abrupt("return");

                      case 7:
                        if (10008 !== t.data.code) {
                            e.next = 14;
                            break;
                        }
                        return wx.removeStorageSync("token"), wx.removeStorageSync("memberInfo"), r = getCurrentPages(), 
                        console.log(r[r.length - 1].route), "pages/index" != r[r.length - 1].route && wx.navigateTo({
                            url: "/pages/login"
                        }), e.abrupt("return");

                      case 14:
                        return wx.showModal({
                            content: t.data.message
                        }), e.abrupt("break", 24);

                      case 16:
                        return this.showErrors(t.data.errors), e.abrupt("break", 24);

                      case 18:
                      case 20:
                      case 22:
                        return wx.showModal({
                            content: "走开一下，马上回来！"
                        }), e.abrupt("break", 24);

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), i = function() {
                var e = o.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, a) {
                        try {
                            var i = e[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(u);
                    }("next");
                });
            }, function(e, t) {
                return i.apply(this, arguments);
            })
        }, {
            key: "codeHandler",
            value: function(e) {
                if (0 != a) {
                    if (e.data.code) switch (e.data.code) {
                      case 403:
                        return a = !1, wx.removeStorageSync("token"), wx.removeStorageSync("userInfo"), 
                        wx.showModal({
                            content: "您还未登录，请先登录",
                            success: function(e) {
                                e.confirm ? wx.navigateTo({
                                    url: "/pages/mine/login"
                                }) : e.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        }), wx.setStorageSync("firstTime", !1), "error";

                      case 0:
                      case 500:
                      case 1:
                        return "";
                    }
                } else wx.setStorageSync("firstTime", !0);
            }
        } ]), n;
    }();
    i.service = {
        apiUrl: n.default.production ? n.default.prod.domain : n.default.dev.domain + "p03/",
        socketUrl: n.default.production ? n.default.prod.domain : n.default.dev.domain + "p03/"
    }, exports.default = i;
}();