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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/wacca2-navigation.js")), r = o(require("./../utils/api.js")), s = (o(require("./../utils/wechat.js")), 
    o(require("./../utils/wacca-api.js"))), i = o(require("./../components/custom-dialog.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(s, i) {
                    try {
                        var o = t[s](i), a = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(a).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(a);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function o() {
            var e, t, r;
            c(this, o);
            for (var s = arguments.length, a = Array(s), l = 0; l < s; l++) a[l] = arguments[l];
            return t = r = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(a))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "线上兑换确认",
                    addHeight: "100"
                },
                customDialog: {
                    "xmlns:v-on": "",
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "兑换后的积分",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:subTitle.sync": "subTitle",
                    sureImage: "http://yyb-oss.universal-space.cn/imgs/wacca2/common/pink_sure.png",
                    type: "wacca2-charge"
                }
            }, r.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                wacca2Navigation: n.default,
                customDialog: i.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                selectAddress: "",
                lineID: "",
                arr: [],
                subTitle: "",
                model1: {},
                model2: {},
                showAlert: !1
            }, r.computed = {}, r.methods = {
                chargeClick: function() {
                    this.showAlert = !0;
                },
                confirm: function() {
                    this.showAlert = !1, this.sure();
                },
                addressClick: function() {
                    wx.navigateTo({
                        url: "../pages/mine/address?select=1"
                    });
                }
            }, r.events = {}, u(r, t);
        }
        var l, d;
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
            key: "onShow",
            value: function() {
                this.selectAddress = this.$parent.globalData.selectAddress, "" == this.selectAddress && this.getAddressData();
            }
        }, {
            key: "onUnload",
            value: function() {
                this.$parent.globalData.selectAddress = "";
            }
        }, {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth;
                    }
                }), this.model1 = JSON.parse(e.json), this.model2 = JSON.parse(e.jsonn), this.subTitle = this.model1.userPoint + "pt  →  " + (this.model1.userPoint - this.model2.point) + "pt", 
                this.$apply();
            }
        }, {
            key: "getAddressData",
            value: (d = a(regeneratorRuntime.mark(function e() {
                var t, n, s, i, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getAddress();

                      case 2:
                        if (t = e.sent, null != (n = t.data) && 0 != n.length) {
                            for (s = null, i = 0; i < n.length; i++) 1 == (o = n[i]).isdefault && (s = o);
                            null == s && (s = n[0]), this.selectAddress = s;
                        }
                        this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "sure",
            value: (l = a(regeneratorRuntime.mark(function e() {
                var t, n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("" != this.selectAddress) {
                            e.next = 3;
                            break;
                        }
                        return wx.showToast({
                            title: "请填写地址",
                            icon: "none"
                        }), e.abrupt("return");

                      case 3:
                        return t = {
                            pid: this.model2.id,
                            aid: this.model1.id,
                            addressId: this.selectAddress.id
                        }, e.next = 6, s.default.mailToOnlinePresentWacca2(t);

                      case 6:
                        1 == (n = e.sent).code ? (r = JSON.stringify(this.model1), i = JSON.stringify(this.model2), 
                        wx.navigateTo({
                            url: "wacca2-zhoubian-success?json=" + r + "&jsonn=" + i,
                            events: {
                                selectedAddress: function(e) {
                                    this.selectedAddress = e, this.$$apply;
                                }
                            }
                        })) : wx.showToast({
                            title: n.message,
                            icon: "none"
                        });

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(l, "wacca2/wacca2-zhoubian-online-confirm"));
}();