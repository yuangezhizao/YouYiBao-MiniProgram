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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../utils/api.js")), r = o(require("./../../mixins/user-mixin.js")), i = o(require("./../../components/match-statusbar.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, o) {
                    try {
                        var a = t[i](o), s = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function o() {
            var e, t, n;
            s(this, o);
            for (var a = arguments.length, c = Array(a), p = 0; p < a; p++) c[p] = arguments[p];
            return t = n = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "添加会员卡"
                }
            }, n.$events = {}, n.components = {
                statusbar: i.default
            }, n.mixins = [ r.default ], n.data = {
                codeText: "获取验证码",
                isCaptcha: !1,
                phone: "",
                code: "",
                store: "选择门店",
                storeDetail: "",
                nextStep: !1,
                needCode: !0
            }, n.methods = {
                getCaptcha: function() {
                    var e = this, t = 60;
                    if (!this.data.codeText.includes("s")) {
                        this.getCaptcha();
                        var n = function() {
                            e.codeText = t + "s", t--, e.$apply(), t < -1 && (clearInterval(e.timer), e.codeText = "重获验证码", 
                            e.$apply());
                        };
                        n(), this.timer = setInterval(n, 1e3);
                    }
                },
                addCard: function() {
                    this.addVipCard();
                },
                getPhone: function(e) {
                    if (this.phone = e.detail.value, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(e.detail.value)) return this.isCaptcha = !1, 
                    this.needCode = !0, void (this.nextStep = !1);
                    this.isCaptcha = !0, this.smsAgree();
                },
                getCode: function(e) {
                    this.code = e.detail.value, this.smsAgree();
                },
                getStore: function() {
                    wx.navigateTo({
                        url: "/pages/store/nearby-stores?addCard='true'&enterType=select"
                    });
                },
                getUserPhone: function() {
                    if (this.phone = this.userInfo.mobile, !/^1(?:3|4|5|7|8|9)\d{9}$/.test(this.phone)) return this.isCaptcha = !1, 
                    void (this.needCode = !0);
                    this.isCaptcha = !1, this.needCode = !1, this.smsAgree(), this.$apply();
                }
            }, u(n, t);
        }
        var c, p;
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
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.storeDetail = wx.getStorageSync("storeDetail"), this.storeDetail && (this.store = this.storeDetail.store_name), 
                this.$apply();
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
                this.needCode && (!this.isCaptcha || this.code.length < 4) ? this.nextStep = !1 : this.nextStep = !0;
            }
        }, {
            key: "getCaptcha",
            value: (p = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.sendCaptcha({
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
                return p.apply(this, arguments);
            })
        }, {
            key: "addVipCard",
            value: (c = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            mobile: this.phone,
                            captcha: this.code,
                            storeid: this.storeDetail.store_id
                        }, e.next = 3, n.default.addVipCard(t);

                      case 3:
                        0 == e.sent.retCode && (wx.setStorageSync("addSuccess", 1), wx.navigateBack({
                            delta: 1
                        }));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/add-card"));
}();