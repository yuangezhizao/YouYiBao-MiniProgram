function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
            }
            return a("next");
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
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), addCardBySelf = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, a.$repeat = {}, a.$props = {
            statusbar: {
                leftIcon: "true",
                title: "自助开卡"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, a.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, a.components = {
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default
        }, a.data = {
            selectIndex: 0,
            storeDetail: "",
            store: "点击选择门店",
            packageList: [],
            isChecked: !1,
            showAlert: !1,
            alertTxt: ""
        }, a.methods = {
            changeOption: function(e) {
                console.log(e), this.selectIndex = e, this.$apply();
            },
            payPackage: function() {
                if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                var e = this.packageList[this.selectIndex].aemsGoodsName, t = this.packageList[this.selectIndex].aemsGoodsNo, r = this.packageList[this.selectIndex].totalPrice;
                wx.navigateTo({
                    url: "/pages/mine/add-card-by-self-form?aemsGoodsName=" + e + "&aemsGoodsNo=" + t + "&totalPrice=" + r
                });
            },
            openCardRecord: function() {
                wx.navigateTo({
                    url: "/pages/mine/card-exchange"
                });
            },
            getStore: function() {
                wx.navigateTo({
                    url: "/pages/store/nearby-stores?addCard='true'&enterType=selfRegister"
                });
            },
            toggleCheckbox: function() {
                this.isChecked = !this.isChecked;
            },
            confirm: function() {
                this.showAlert = !1;
            },
            showAgree: function() {
                wx.navigateTo({
                    url: "/pages/store/package-agreement"
                });
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.storeDetail = wx.getStorageSync("storeDetail"), this.storeDetail && (this.store = this.storeDetail.store_name, 
            this.getCardPackage()), this.$apply();
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
        key: "getCardPackage",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.cardPackageList({
                            storeId: this.storeDetail.store_id
                        });

                      case 2:
                        t = e.sent, t.data ? this.packageList = t.data : this.packageList = [], this.$apply();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCardBySelf, "pages/mine/add-card-by-self"));