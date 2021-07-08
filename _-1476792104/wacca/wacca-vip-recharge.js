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
    }(), t = c(require("./../npm/wepy/lib/wepy.js")), n = c(require("./../utils/wacca-api.js")), r = c(require("./../mixins/user-mixin.js")), i = c(require("./../utils/units.js")), a = c(require("./../utils/wechat.js")), o = c(require("./../components/match-statusbar.js")), s = c(require("./../components/custom-dialog.js"));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, a) {
                    try {
                        var o = t[i](a), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function c() {
            var e, t, n;
            l(this, c);
            for (var a = arguments.length, u = Array(a), f = 0; f < a; f++) u[f] = arguments[f];
            return t = n = p(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "VIP套餐"
                },
                customDialog: {
                    "xmlns:v-bind": "",
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
                statusbar: o.default,
                customDialog: s.default
            }, n.mixins = [ r.default ], n.data = {
                selectIndex: 0,
                count: 1,
                packageList: [],
                selectPackageId: "",
                price: 0,
                memberInfo: [],
                alertTxt: "",
                showAlert: !1
            }, n.methods = {
                changeOption: function(e, t) {
                    this.selectIndex = e, this.selectPackageId = this.packageList[this.selectIndex].id, 
                    this.price = t.price, this.count = 1;
                },
                plus: function() {
                    this.count++, this.price = i.default.toFix(this.packageList[this.selectIndex].price * this.count);
                },
                cut: function() {
                    1 !== this.count && (this.count--, this.price = i.default.toFix(this.packageList[this.selectIndex].price * this.count));
                },
                buyVipPackage: function() {
                    this.buyMemberPackage();
                },
                goback: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                consumeRocord: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-records"
                    });
                },
                confirm: function() {
                    this.showAlert = !1;
                }
            }, p(n, t);
        }
        var f, h, d;
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
        }(c, t), e(c, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.getVipPackageList(), this.getMemberInfo();
            }
        }, {
            key: "getMemberInfo",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getVipPackageList",
            value: (h = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.vipPackageList();

                      case 2:
                        (t = e.sent) && (this.packageList = t.data, this.packageList.map(function(e) {
                            e.price = parseFloat(e.price) / 100;
                        }), this.price = i.default.toFix(this.packageList[this.selectIndex].price * this.count), 
                        this.selectPackageId = this.packageList[this.selectIndex].id), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "buyMemberPackage",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.buyMemberPackage({
                            packageId: this.selectPackageId,
                            qty: this.count
                        });

                      case 2:
                        1 != (t = e.sent).code ? (this.alertTxt = t.message, this.showAlert = !0) : (console.log(t), 
                        a.default.payment(t.data.wxpay).then(function(e) {
                            wx.showToast({
                                title: "支付成功",
                                icon: "none",
                                duration: 1500
                            }), r.getMemberInfo();
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        })), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        } ]), c;
    }(t.default.page);
    exports.default = f;
}();