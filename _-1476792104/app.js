function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" != typeof a && "function" != typeof a ? e : a;
}

function _inherits(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, a) {
        for (var t = 0; t < a.length; t++) {
            var s = a[t];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(a, t, s) {
        return t && e(a.prototype, t), s && e(a, s), a;
    };
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _default = function(e) {
    function a() {
        _classCallCheck(this, a);
        var e = _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
        return e.config = {
            pages: [ "pages/index/index", "pages/index/scan", "pages/index/activity", "pages/index/shops", "pages/index/shops-search", "pages/record/my-record", "pages/record/basketball-record", "pages/record/basketball-statis", "pages/record/basketball-detail", "pages/record/basketball-rank", "pages/record/nearby-shop-machine", "pages/record/football-statis", "pages/record/football-record", "pages/record/football-detail", "pages/record/football-rank", "pages/record/pong-statis", "pages/record/pong-record", "pages/record/pong-detail", "pages/record/pong-rank", "pages/record/music-statis", "pages/record/music-record", "pages/record/music-detail", "pages/record/music-rank", "pages/record/music-track", "pages/record/music5-statis", "pages/record/music5-record", "pages/record/music5-detail", "pages/record/music5-track", "pages/record/music5-rank", "pages/record/dance-statis", "pages/record/dance-record", "pages/record/dance-detail", "pages/record/dance-rank", "pages/record/dance-track", "pages/record/normal-statis", "pages/record/normal-record", "pages/record/normal-detail", "pages/record/normal-rank", "pages/record/topic", "pages/record/topic-konami", "pages/record/topic-normal", "pages/record/game-record", "pages/match/activities", "pages/match/activity", "pages/match/activity-result", "pages/match/arena", "pages/match/arena-rank", "pages/match/arena-detail", "pages/match/match", "pages/match/match-list", "pages/match/match-detail", "pages/match/match-rank", "pages/match/pay-success", "pages/match/my-prize", "pages/match/set-prize-address", "pages/match/jackpot-rank", "pages/mine/mine", "pages/mine/login", "pages/mine/mobile-login", "pages/mine/forget-password", "pages/mine/agreement", "pages/mine/confirm-pay", "pages/mine/coin-record", "pages/mine/eam-record", "pages/mine/integral-record", "pages/mine/ticket-record", "pages/mine/ticket-record-detail", "pages/mine/my-medal", "pages/mine/medal-detail", "pages/mine/set-prize-address", "pages/mine/lottery", "pages/mine/my-lottery-prize", "pages/mine/my-card", "pages/mine/card-sets", "pages/mine/card-exchange-qr", "pages/mine/card-exchange", "pages/mine/add-card-by-self", "pages/mine/add-card-by-self-form", "pages/mine/card-orders", "pages/mine/card", "pages/mine/add-card", "pages/mine/my-eam", "pages/mine/my-eam-ex-code", "pages/mine/my-eam-history", "pages/mine/my-eam-recharge", "pages/mine/my-eam-records", "pages/mine/my-eam-refund", "pages/mine/my-eam-pay-success", "pages/mine/my-set-meal", "pages/mine/my-set-meal-detail", "pages/mine/my-set-meal-qr", "pages/store/store-detail", "pages/store/member-package", "pages/store/normal-package", "pages/store/pay-success", "pages/store/nearby-stores", "pages/store/activity-detail", "pages/store/more-activity", "pages/store/package-agreement", "pages/machine/recharge-coin", "pages/machine/pay-success", "pages/machine/machine-detail", "pages/machine/machine-music", "pages/machine/machine-music5", "pages/machine/machine-dance", "pages/machine/coin-agreement", "pages/qrcode/qrcode" ],
            subPackages: [ {
                root: "pages/wacca/",
                pages: [ "wacca-machine", "wacca-detail", "wacca-statis", "wacca-vip-recharge", "wacca-shop", "wacca-consume-record", "wacca-record", "wacca-vip-rights", "wacca-grade-record", "wacca-achievement", "wacca-change-avatar", "wacca-trophy", "wacca-trophy-detail", "wacca-track", "wacca-single-rank", "wacca-rank" ]
            } ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#3ca6fe",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "white"
            },
            permission: {
                "scope.userLocation": {
                    desc: "您的位置信息将用于小程序定位到离您最近的门店"
                }
            },
            tabBar: {
                color: "#A8A8A8",
                selectedColor: "#3991F2",
                backgroundColor: "#ffffff",
                borderStyle: "black",
                list: [ {
                    pagePath: "pages/index/index",
                    iconPath: "/assets/imgs/icon_home.png",
                    selectedIconPath: "/assets/imgs/icon_home_HL.png",
                    text: "首页"
                }, {
                    pagePath: "pages/match/match",
                    iconPath: "/assets/imgs/icon_match.png",
                    selectedIconPath: "/assets/imgs/icon_match_HL.png",
                    text: "赛事"
                }, {
                    pagePath: "pages/record/my-record",
                    iconPath: "/assets/imgs/icon_record.png",
                    selectedIconPath: "/assets/imgs/icon_record_HL.png",
                    text: "战绩"
                }, {
                    pagePath: "pages/mine/mine",
                    iconPath: "/assets/imgs/icon_mine.png",
                    selectedIconPath: "/assets/imgs/icon_mine_HL.png",
                    text: "我的"
                } ]
            }
        }, e.globalData = {
            userInfo: null,
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
            showScan: !0,
            showGuide: !0,
            menuButtonTop: ""
        }, e.use("requestfix"), e.use("promisify"), e;
    }
    return _inherits(a, e), _createClass(a, [ {
        key: "onLaunch",
        value: function() {
            if (wx.setStorageSync("firstTime", !0), wx.setStorageSync("isScan", !1), wx.canIUse("getUpdateManager")) {
                var e = wx.getUpdateManager();
                e.onCheckForUpdate(function(a) {
                    console.log(a), a.hasUpdate && (e.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，请重启应用",
                            success: function(a) {
                                a.confirm && e.applyUpdate();
                            }
                        });
                    }), e.onUpdateFailed(function() {
                        wx.showModal({
                            title: "已经有新版本了哟~",
                            content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                        });
                    }));
                });
            } else wx.showModal({
                title: "提示",
                content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
            });
            wx.hideTabBar(), wx.setStorageSync("showScan", this.globalData.showScan), wx.setStorageSync("showGuide", this.globalData.showGuide), 
            wx.loadFontFace({
                family: "Merriweather",
                source: 'url("https://yyb-oss.oss-cn-shenzhen.aliyuncs.com/font/Merriweather.ttf")',
                global: !0,
                success: function(e) {
                    console.log(e);
                }
            });
        }
    }, {
        key: "onShow",
        value: function() {
            var e = this;
            setTimeout(function() {
                var a = wx.getMenuButtonBoundingClientRect();
                e.globalData.menuButtonTop = a.top, console.log("胶囊上边距高度", e.globalData.menuButtonTop);
            }, 100);
        }
    } ]), a;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));