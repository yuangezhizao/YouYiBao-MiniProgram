!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), r = s(require("./../../components/match-statusbar.js")), n = s(require("./../../mixins/user-mixin.js")), a = s(require("./../../utils/api.js")), o = s(require("./../../utils/wechat.js")), i = s(require("./../../components/match-dialog.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
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
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var h = function(t) {
        function s() {
            var e, t, a;
            c(this, s);
            for (var o = arguments.length, u = Array(o), h = 0; h < o; h++) u[h] = arguments[h];
            return t = a = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(u))), 
            a.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "自助开卡"
                },
                addCardDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog"
                }
            }, a.$events = {}, a.components = {
                statusbar: r.default,
                addCardDialog: i.default
            }, a.mixins = [ n.default ], a.data = {
                codeText: "获取验证码",
                isShowDialog: !1,
                aemsGoodsName: "",
                isCaptcha: !1,
                nextStep: !1,
                aemsGoodsNo: "",
                storeDetail: "",
                totalPrice: "",
                storeName: "",
                storeId: "",
                orderNo: "",
                phone: "",
                code: "",
                name: ""
            }, a.methods = {
                pay: function() {
                    this.createOrder();
                },
                exchangeCard: function() {
                    this.getCardOrderDetail(), this.isShowDialog = !1;
                },
                getCaptcha: function() {
                    var e = this, t = 60;
                    if (!this.data.codeText.includes("s")) {
                        this.getCaptcha();
                        var r = function() {
                            e.codeText = t + "s", t--, e.$apply(), t < -1 && (clearInterval(e.timer), e.codeText = "重获验证码", 
                            e.$apply());
                        };
                        r(), this.timer = setInterval(r, 1e3);
                    }
                },
                getPhone: function(e) {
                    if (this.phone = e.detail.value, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                    void (this.nextStep = !1);
                    this.isCaptcha = !0, this.smsAgree();
                },
                getCode: function(e) {
                    this.code = e.detail.value, this.smsAgree();
                },
                getUserPhone: function() {
                    this.phone = this.userInfo.mobile, /^1(?:3|4|5|7|8|9)\d{9}$/.test(this.phone) ? (this.isCaptcha = !0, 
                    this.$apply()) : this.isCaptcha = !1;
                }
            }, l(a, t);
        }
        var h, p, d, f;
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
            value: function(e) {
                console.log(e), this.aemsGoodsName = e.aemsGoodsName, this.aemsGoodsNo = e.aemsGoodsNo, 
                this.totalPrice = e.totalPrice, this.$apply();
            }
        }, {
            key: "onShow",
            value: function() {
                this.storeDetail = wx.getStorageSync("storeDetail"), this.storeDetail && (this.storeName = this.storeDetail.store_name, 
                this.storeId = this.storeDetail.store_id), this.$apply();
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
            key: "smsAgree",
            value: function() {
                !this.isCaptcha || this.code.length < 4 ? this.nextStep = !1 : this.nextStep = !0;
            }
        }, {
            key: "getCaptcha",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.sendCaptcha({
                            mobile: this.phone
                        });

                      case 2:
                        t = e.sent, console.log(t);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "createOrder",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t, r, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.nextStep) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return t = {
                            name: this.userInfo.nickname,
                            mobile: this.phone,
                            captcha: this.code,
                            storeId: this.storeId,
                            aemsGoodsNo: this.aemsGoodsNo
                        }, e.next = 5, a.default.cardCreateOrder(t);

                      case 5:
                        if (r = e.sent, Object.keys(r.data).length && Object.keys(r.data.wxpay).length) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        o.default.payment(r.data.wxpay).then(function(e) {
                            n.orderNo = r.data.orderNo, n.isShowDialog = !0;
                        });

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getCardOrderDetail",
            value: (p = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.orderDetail({
                            orderNo: this.orderNo
                        });

                      case 2:
                        t = e.sent, console.log(t), t && (this.getCode(t.data.orderNo), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getCode",
            value: (h = u(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.getExchangeCode({
                            orderNo: t
                        });

                      case 2:
                        (r = e.sent) && wx.navigateTo({
                            url: "/pages/mine/card-exchange-qr?exchangeCode=" + r.data.exchangeCode
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return h.apply(this, arguments);
            })
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(h, "pages/mine/add-card-by-self-form"));
}();