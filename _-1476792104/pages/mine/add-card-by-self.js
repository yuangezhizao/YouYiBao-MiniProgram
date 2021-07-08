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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/match-statusbar.js")), r = a(require("./../../utils/api.js")), o = a(require("./../../components/custom-dialog.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, r;
            s(this, a);
            for (var c = arguments.length, u = Array(c), l = 0; l < c; l++) u[l] = arguments[l];
            return t = r = i(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
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
            }, r.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                statusbar: n.default,
                customDialog: o.default
            }, r.data = {
                selectIndex: 0,
                storeDetail: "",
                store: "点击选择门店",
                packageList: [],
                isChecked: !1,
                showAlert: !1,
                alertTxt: ""
            }, r.methods = {
                changeOption: function(e) {
                    console.log(e), this.selectIndex = e, this.$apply();
                },
                payPackage: function() {
                    if (0 == this.isChecked) return this.alertTxt = "请先阅读同意后勾选游艺宝套餐购买服务协议", void (this.showAlert = !0);
                    var e = this.packageList[this.selectIndex].aemsGoodsName, t = this.packageList[this.selectIndex].aemsGoodsNo, n = this.packageList[this.selectIndex].totalPrice;
                    wx.navigateTo({
                        url: "/pages/mine/add-card-by-self-form?aemsGoodsName=" + e + "&aemsGoodsNo=" + t + "&totalPrice=" + n
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
            }, i(r, t);
        }
        var c, u;
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
        }(a, t), e(a, [ {
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
            value: (c = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.cardPackageList({
                            storeId: this.storeDetail.store_id
                        });

                      case 2:
                        (t = e.sent).data ? this.packageList = t.data : this.packageList = [], this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, a) {
                        try {
                            var s = e[o](a), i = s.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!s.done) return Promise.resolve(i).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(i);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/add-card-by-self"));
}();