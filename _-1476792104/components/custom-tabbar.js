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
}), exports.default = void 0;

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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _scan = require("./scan.js"), _scan2 = _interopRequireDefault(_scan), Tabbar = function(e) {
    function t() {
        var e, n, o, a;
        _classCallCheck(this, t);
        for (var s = arguments.length, r = Array(s), i = 0; i < s; i++) r[i] = arguments[i];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        o.props = {}, o.data = {
            tabbar: {
                color: "#A8A8A8",
                selectedColor: "#3991F2",
                backgroundColor: "#ffffff",
                borderStyle: "black",
                list: [ {
                    pagePath: "/pages/index/index",
                    iconPath: "/assets/imgs/icon_home.png",
                    selectedIconPath: "/assets/imgs/icon_home_HL.png",
                    text: "首页"
                }, {
                    pagePath: "/pages/match/match",
                    iconPath: "/assets/imgs/icon_match.png",
                    selectedIconPath: "/assets/imgs/icon_match_HL.png",
                    text: "赛事"
                }, {
                    pagePath: "/pages/index/index",
                    iconPath: "/assets/imgs/icon_release.png",
                    isSpecial: !0
                }, {
                    pagePath: "/pages/record/my-record",
                    iconPath: "/assets/imgs/icon_record.png",
                    selectedIconPath: "/assets/imgs/icon_record_HL.png",
                    text: "战绩"
                }, {
                    pagePath: "/pages/mine/mine",
                    iconPath: "/assets/imgs/icon_mine.png",
                    selectedIconPath: "/assets/imgs/icon_mine_HL.png",
                    text: "我的"
                } ]
            },
            systemInfo: "",
            intercept: "",
            isIphoneX: !1
        }, o.components = {
            scan: _scan2.default
        }, o.methods = {
            scan: function() {
                var e = wx.getStorageSync("showScan");
                1 == e ? (wx.navigateTo({
                    url: "/pages/index/scan"
                }), e = !1, wx.setStorageSync("showScan", e)) : (wx.showLoading({
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
                }));
            }
        }, o.events = {}, o.watch = {}, o.computed = {}, a = n, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getSystemInfo(), this.editTabbar(), wx.hideTabBar();
        }
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "getSystemInfo",
        value: function() {
            var e = this;
            wx.getSystemInfo({
                success: function(t) {
                    e.systemInfo = t, e.intercept = e.systemInfo.model.substring(0, 8), console.log("手机型号前八个字母", e.intercept), 
                    e.isIphoneX = "iPhone X" == e.intercept, e.$apply();
                }
            });
        }
    }, {
        key: "editTabbar",
        value: function() {
            var e = this.data.tabbar, t = getCurrentPages(), n = t[t.length - 1], o = n.route;
            0 != o.indexOf("/") && (o = "/" + o);
            for (var a in e.list) e.list[a].selected = !1, e.list[a].pagePath == o && (e.list[a].selected = !0);
            this.data.tabbar = e, this.$apply();
        }
    } ]), t;
}(_wepy2.default.component);

exports.default = Tabbar;