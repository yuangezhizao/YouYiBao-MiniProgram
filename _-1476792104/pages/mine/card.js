function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
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
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), cardDetail = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, n.$repeat = {}, n.$props = {
            statusbar: {
                leftIcon: "true",
                title: "会员卡详情"
            },
            dialog1: {
                "xmlns:v-bind": "",
                "v-bind:isShowDialog.sync": "isShowDialog"
            },
            customDialog: {
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, n.components = {
            statusbar: _matchStatusbar2.default,
            dialog1: _matchDialog2.default,
            customDialog: _customDialog2.default
        }, n.data = {
            isShowDialog: !1,
            selectIndex: 0,
            vipCardInfo: "",
            cardNumber: "",
            memberNumber: "",
            storeId: "",
            cardStoreId: "",
            memberPackage: "",
            showAlert: !1,
            alertTxt: ""
        }, n.methods = {
            changeOption: function(e) {
                this.selectIndex = e, this.$apply();
            },
            showDialog: function() {
                this.isShowDialog = !0;
            },
            payRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/card-orders?cardNumber=" + this.cardNumber
                });
            },
            moreMatch: function() {
                wx.navigateTo({
                    url: "/pages/mine/card-sets?storeId=" + this.storeId
                });
            },
            memberPackageDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/store/member-package?storeId=" + this.storeId + "&setcoinno=" + e.setcoinno
                });
            },
            confirm: function() {
                this.showAlert = !1;
            },
            delCard: function() {
                this.deleteCard();
            },
            callPhone: function() {
                wx.makePhoneCall({
                    phoneNumber: this.vipCardInfo.storeMobile
                });
            },
            errorImg: function(e) {
                this.memberPackage[e].image = "http://yyb-oss.universal-space.cn/imgs/mine/button_vip-100.png";
            }
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            console.log(e), this.cardNumber = e.card_number, this.storeId = e.store_id, this.memberNumber = e.member_number, 
            this.cardStoreId = e.card_storeid, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.getVipInfo();
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
        key: "getVipInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.vipCardInfo({
                            vipstore: this.cardStoreId,
                            membernumber: this.cardNumber
                        });

                      case 2:
                        t = e.sent, 0 == t.retCode ? (this.vipCardInfo = t.data, new Date(this.vipCardInfo.validdate.replace(/-/g, "/")).getTime() < new Date().getTime() ? this.vipCardInfo.isExpired = !0 : this.vipCardInfo.isExpired = !1, 
                        this.getMemberPackage(), this.$apply()) : (this.showAlert = !0, this.alertTxt = t.retMsg, 
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
        key: "getMemberPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.getVipTicket({
                            storeid: this.storeId,
                            pageNo: 1,
                            pageSize: 2
                        });

                      case 2:
                        t = e.sent, t && (this.memberPackage = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "deleteCard",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            mobile: this.vipCardInfo.mobile,
                            cardNumber: this.cardNumber,
                            memberNumber: this.memberNumber,
                            storeid: this.storeId
                        }, e.next = 3, _api2.default.delVipCard(t);

                      case 3:
                        r = e.sent, r && wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 1500,
                            success: function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(cardDetail, "pages/mine/card"));