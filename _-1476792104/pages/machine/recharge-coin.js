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
    }(), t = u(require("./../../npm/wepy/lib/wepy.js")), n = u(require("./../../components/custom-statusbar.js")), r = u(require("./../../mixins/user-mixin.js")), o = u(require("./../../utils/wechat.js")), i = u(require("./../../utils/api.js")), s = (u(require("./../../utils/environment.js")), 
    u(require("./../../components/custom-dialog.js")));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(o, i) {
                    try {
                        var s = t[o](i), u = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(u).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function u() {
            var e, t, o;
            a(this, u);
            for (var i = arguments.length, c = Array(i), f = 0; f < i; f++) c[f] = arguments[f];
            return t = o = l(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(c))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                customStatusbar: {
                    title: "游点充值"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, o.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, o.components = {
                customStatusbar: n.default,
                customDialog: s.default
            }, o.mixins = [ r.default ], o.data = {
                coin: 0,
                count: 10,
                isChecked: !1,
                showAlert: !1,
                alertTxt: ""
            }, o.computed = {}, o.methods = {
                add: function() {
                    this.count += 10;
                },
                down: function() {
                    this.count <= 10 ? this.count = 10 : this.count -= 10;
                },
                getCount: function(e) {
                    if (console.log(e), !/^[0-9]*$/.test(e.detail.value)) return this.count;
                    this.count = parseInt(e.detail.value);
                },
                rechargeCoin: function() {
                    if (NaN !== this.count && this.count % 10 == 0) return 0 == this.isChecked ? (this.alertTxt = "请先阅读同意后勾选游艺宝游点服务协议", 
                    void (this.showAlert = !0)) : void this.recharge();
                    wx.showToast({
                        title: "充值数额需为10的倍数",
                        icon: "none"
                    });
                },
                toggleCheckbox: function() {
                    this.isChecked = !this.isChecked;
                },
                showAgree: function() {
                    wx.navigateTo({
                        url: "/pages/machine/coin-agreement"
                    });
                },
                confirm: function() {
                    this.showAlert = !1;
                }
            }, o.events = {}, l(o, t);
        }
        var f, p;
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
        }(u, t), e(u, [ {
            key: "onLoad",
            value: function(e) {}
        }, {
            key: "onShow",
            value: function() {
                this.findScoreCoin();
            }
        }, {
            key: "onHide",
            value: function() {
                wx.hideKeyboard();
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
            key: "findScoreCoin",
            value: (p = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.default.findScoreCoin();

                      case 2:
                        (t = e.sent) && (this.coin = t.coin, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "recharge",
            value: (f = c(regeneratorRuntime.mark(function e() {
                var t, n, r = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            storeId: 3456,
                            cardNum: 0,
                            goodsType: 1,
                            goodsId: 0,
                            payType: 4,
                            qty: this.count,
                            scores: 0,
                            cashId: 0,
                            couponId: 0
                        }, e.next = 3, i.default.createOrder(t);

                      case 3:
                        (n = e.sent) && o.default.payment(n.data.sign).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/pay-success?resultType=" + r.resultType
                            });
                        }).catch(function(e) {});

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        } ]), u;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/machine/recharge-coin"));
}();