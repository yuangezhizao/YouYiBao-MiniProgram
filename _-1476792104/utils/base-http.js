function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _units = require("./units.js"), _units2 = _interopRequireDefault(_units), env = require("./environment.js"), firstTime = void 0, BaseHttp = function() {
    function e() {
        _classCallCheck(this, e);
    }
    return _createClass(e, null, [ {
        key: "request",
        value: function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = (wx.getStorageSync("Authorization"), 
            wx.getStorageSync("token"));
            firstTime = wx.getStorageSync("firstTime"), a && wx.showLoading({
                title: "加载中...",
                mask: !0
            });
            var i = void 0;
            return i = t.indexOf("http") > -1 ? t + "?" + _units2.default.parseParam(n) : e.service.apiUrl + t + "?" + _units2.default.parseParam(n), 
            new Promise(function(e, t) {
                wx.request({
                    url: i,
                    data: Object.assign({}, n),
                    method: r,
                    header: {
                        "Content-Type": "application/json",
                        token: o || "",
                        clientType: "weapp",
                        appType: "YouYiBao"
                    },
                    success: e,
                    fail: t
                });
            }).then(function(t) {
                return wx.hideLoading(), e.errorHandler(t), 200 == t.statusCode ? e.codeHandler(t) ? null : t.data : null;
            }).catch(function(e) {
                wx.hideLoading(), console.log(e), wx.showModal({
                    content: "走开一下，马上回来！"
                });
            });
        }
    }, {
        key: "requestJson",
        value: function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = (wx.getStorageSync("Authorization"), 
            wx.getStorageSync("token"));
            a && wx.showLoading({
                title: "加载中...",
                mask: !0
            });
            var i = void 0;
            return i = t.indexOf("http") > -1 ? t : e.service.apiUrl + t, _wepy2.default.request({
                url: i,
                method: r,
                data: Object.assign({}, n),
                header: {
                    "Content-Type": "application/json",
                    token: o || "",
                    clientType: "weapp",
                    appType: "YouYiBao"
                }
            }).then(function(t) {
                return wx.hideLoading(), e.errorHandler(t), 200 == t.statusCode ? e.codeHandler(t) ? null : t.data : null;
            }).catch(function(e) {
                wx.hideLoading(), console.log(e), wx.showModal({
                    content: "走开一下，马上回来！"
                });
            });
        }
    }, {
        key: "requestForm",
        value: function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET", a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = (wx.getStorageSync("Authorization"), 
            wx.getStorageSync("token"));
            a && wx.showLoading({
                title: "加载中...",
                mask: !0
            });
            var i = void 0;
            return i = t.indexOf("http") > -1 ? t : e.service.apiUrl + t, _wepy2.default.request({
                url: i,
                method: r,
                data: Object.assign({}, n),
                header: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    token: o || "",
                    clientType: "weapp",
                    appType: "YouYiBao"
                }
            }).then(function(t) {
                return wx.hideLoading(), e.errorHandler(t), 200 == t.statusCode ? e.codeHandler(t) ? null : t.data : null;
            }).catch(function(e) {
                wx.hideLoading(), console.log(e), wx.showModal({
                    content: "走开一下，马上回来！"
                });
            });
        }
    }, {
        key: "errorHandler",
        value: function() {
            function e(e, n) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
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
            }));
            return e;
        }()
    }, {
        key: "codeHandler",
        value: function(e) {
            if (0 == firstTime) return void wx.setStorageSync("firstTime", !0);
            if (e.data.code) switch (e.data.code) {
              case 403:
                return firstTime = !1, wx.removeStorageSync("token"), wx.removeStorageSync("userInfo"), 
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
        }
    } ]), e;
}();

BaseHttp.service = {
    apiUrl: env.production ? "https://" + env.prod.domain : "https://" + env.dev.domain,
    socketUrl: env.production ? "https://" + env.prod.domain : "https://" + env.dev.domain
}, exports.default = BaseHttp;