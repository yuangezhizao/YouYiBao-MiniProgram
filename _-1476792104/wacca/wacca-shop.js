!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = function() {
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
    }(), t = s(require("./../npm/wepy/lib/wepy.js")), n = s(require("./../components/custom-statusbar.js")), o = s(require("./../utils/wacca-api.js")), r = s(require("./../utils/wechat.js")), a = s(require("./../components/custom-dialog.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function o(r, a) {
                    try {
                        var s = t[r](a), i = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(i).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(i);
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
        function s() {
            var e, t, o;
            c(this, s);
            for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
            return t = o = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(i))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                customStatusbar: {
                    title: "华卡音舞商店"
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
                customDialog: a.default
            }, o.mixins = [], o.data = {
                count: [],
                memberInfo: "",
                goodsList: [],
                alertTxt: "",
                showAlert: !1
            }, o.computed = {}, o.methods = {
                add: function(e) {
                    this.count[e] ? this.count[e] += 1 : this.count[e] = 1;
                },
                down: function(e) {
                    this.count[e] <= 1 ? this.count[e] = 1 : this.count[e] -= 1;
                },
                getCount: function(e, t) {
                    if (!/^[1-9]*$/.test(t.detail.value)) return this.count[e];
                    this.count[e] = parseInt(t.detail.value);
                },
                buyGoods: function(e, t) {
                    console.log("item", e, t);
                    var n = e.id;
                    this.purchaseGoods(n, t);
                },
                consumeRecord: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-consume-record"
                    });
                },
                rechargeVip: function() {
                    wx.navigateTo({
                        url: "/pages/wacca/wacca-vip-recharge"
                    });
                },
                toRecord: function(e) {
                    switch (parseInt(e)) {
                      case 0:
                        wx.navigateTo({
                            url: "/pages/wacca/wacca-record?type=vip"
                        });
                        break;

                      case 1:
                        wx.navigateTo({
                            url: "/pages/wacca/wacca-record?type=bb&itemId=109001&goodsNum=" + this.memberInfo.boostBadgeCount
                        });
                        break;

                      case 2:
                        wx.navigateTo({
                            url: "/pages/wacca/wacca-record?type=bbs&itemId=109002&goodsNum=" + this.memberInfo.boostBadgeSCount
                        });
                        break;

                      case 3:
                        wx.navigateTo({
                            url: "/pages/wacca/wacca-record?type=ex&itemId=106002&goodsNum=" + this.memberInfo.ticketCount
                        });
                    }
                },
                confirm: function() {
                    this.showAlert = !1;
                }
            }, o.events = {}, u(o, t);
        }
        var l, f, p;
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
        }(s, t), e(s, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.getMemberInfo(), this.getGoodsList();
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
            key: "getMemberInfo",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getGoodsList",
            value: (f = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.goodsList();

                      case 2:
                        if (1 == (t = e.sent).code) {
                            for (this.goodsList = t.data, n = 0; n <= this.goodsList.length - 1; n++) this.count[n] = 1;
                            this.$apply();
                        }

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "purchaseGoods",
            value: (l = i(regeneratorRuntime.mark(function e(t, n) {
                var a, s = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.purchaseGoods({
                            goodsId: parseInt(t),
                            qty: this.count[n]
                        });

                      case 2:
                        a = e.sent, console.log(a), 1 != a.code ? (console.log("失败", a), this.alertTxt = a.message, 
                        this.showAlert = !0) : r.default.payment(a.data.wxpay).then(function(e) {
                            wx.showToast({
                                title: "支付成功",
                                icon: "none",
                                duration: 1500
                            }), s.getMemberInfo();
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e, t) {
                return l.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    exports.default = l;
}();