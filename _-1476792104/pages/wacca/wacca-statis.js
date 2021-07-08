function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var c = t[n](o), i = c.value;
                } catch (e) {
                    return void a(e);
                }
                if (!c.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
            }
            return r("next");
        });
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
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _customProgress = require("./../../components/custom-progress.js"), _customProgress2 = _interopRequireDefault(_customProgress), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), waccaStatis = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, c = Array(o), i = 0; i < o; i++) c[i] = arguments[i];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "华卡音舞"
            },
            memberDialog: {
                "v-bind:isShowDialog.sync": "memberDialog",
                title: "升级为基本会员"
            },
            customProgress: {
                "xmlns:v-bind": "",
                "v-bind:days.sync": "days"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default,
            memberDialog: _matchDialog2.default,
            customProgress: _customProgress2.default
        }, r.mixins = [], r.data = {
            productId: "",
            productName: "",
            productImage: "",
            recordList: [],
            memberInfo: "",
            memberDialog: !1,
            days: 0
        }, r.computed = {}, r.methods = {
            nearbyShopMachine: function() {
                wx.navigateTo({
                    url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                });
            },
            gradeRecord: function() {
                this.memberInfo.memberType > 1 && wx.navigateTo({
                    url: "/pages/wacca/wacca-grade-record?productId=" + this.productId
                });
            },
            upMember: function() {
                this.memberDialog = !0;
            },
            buyMember: function() {
                this.joinMember();
            },
            rechargeVip: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-vip-recharge"
                });
            },
            buyGoods: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-shop"
                });
            },
            toTrophy: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-trophy"
                });
            },
            changeAvatar: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-change-avatar"
                });
            },
            changeAchievement: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-achievement"
                });
            },
            musicLib: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-track"
                });
            },
            toPrivilege: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-vip-rights"
                });
            },
            rank: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-rank"
                });
            },
            handleError: function() {
                this.memberInfo.iconUrl = "http://yyb-oss.universal-space.cn/imgs/default_avatar.png";
            }
        }, r.events = {}, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log(e), this.productId = e.productId, this.productName = e.productName, 
            this.productImage = e.productImage;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getUserRecordStatis(), this.getMemberInfo();
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
        key: "getUserRecordStatis",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        t = e.sent, 1 == t.code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.memberInfoWacca();

                      case 2:
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "joinMember",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.joinMember();

                      case 2:
                        t = e.sent, console.log("加入会员", t), 1 == t.code && (this.memberDialog = !1, _wechat2.default.payment(t.data.wxpay).then(function(e) {
                            console.log("微信支付"), a.getMemberInfo(), a.$apply();
                        }).catch(function(e) {
                            console.log("支付失败", e), wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaStatis, "pages/wacca/wacca-statis"));