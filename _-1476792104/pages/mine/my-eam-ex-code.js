!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/match-statusbar.js")), o = a(require("./../../utils/konami-api.js")), r = a(require("./../../components/custom-dialog.js")), i = a(require("./../../utils/wacca-api.js")), s = a(require("./../../utils/units.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function o(r, i) {
                    try {
                        var s = t[r](i), a = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(a).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(a);
                }("next");
            });
        };
    }
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var h = function(t) {
        function a() {
            var e, t, o;
            u(this, a);
            for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
            return t = o = p(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(s))), 
            o.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, o.$repeat = {}, o.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "会员兑换码"
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
                statusbar: n.default,
                customDialog: r.default
            }, o.data = {
                code: "",
                codeLen: 0,
                couponInfo: "",
                exchangeSuccess: !1,
                showAlert: !1,
                alertTxt: "",
                couponNo: "",
                couponNoLen: "",
                isPass: !1,
                type: "1",
                name: ""
            }, o.methods = {
                getCode: function(e) {
                    this.code = e.detail.value, this.codeLen = e.detail.value.length, /^11\d{10}$/.test(e.detail.value) ? this.isPass = !0 : this.isPass = !1;
                },
                search: function() {
                    return this.codeLen < 1 ? (this.showAlert = !0, void (this.alertTxt = "请先输入兑换码!")) : "2" != this.type || 12 == this.codeLen && 0 != this.isPass ? void this.searchCouponInfo() : (this.couponInfo = "", 
                    this.showAlert = !0, void (this.alertTxt = "兑换码无效!"));
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                confirmExchange: function() {
                    if ("1" != this.type) {
                        if (12 != this.couponNoLen) return this.showAlert = !0, void (this.alertTxt = "请先搜索后再兑换!");
                        this.getExchangeCoupon();
                    } else this.getExchangeDanceCoupon();
                },
                goBack: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                exchangeList: function() {
                    var e;
                    e = "1" == this.type ? {
                        type: "1",
                        text: "华卡音舞卡券"
                    } : {
                        type: "0",
                        text: "KONAMI"
                    };
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-history?obj=" + encodeURIComponent(t)
                    });
                }
            }, p(o, t);
        }
        var h, l, f, d;
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
            key: "searchCouponInfo",
            value: function() {
                "1" == this.type ? this.getDanceCouponInfo() : this.getCouponInfo();
            }
        }, {
            key: "getDanceCouponInfo",
            value: (d = c(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("跳舞咯"), t = {
                            code: this.code
                        }, e.next = 4, i.default.searchCouponTicket(t);

                      case 4:
                        n = e.sent, console.log(JSON.stringify(n)), 1 == n.code ? n.data ? (this.couponInfo = this.dealDanceCodeRes(n.data), 
                        this.couponNo = this.code, this.couponNoLen = this.codeLen, this.$apply()) : (this.showAlert = !0, 
                        this.alertTxt = "此券已领或兑换券不存在", this.couponInfo = "", this.$apply()) : (this.showAlert = !0, 
                        this.alertTxt = n.message, this.couponInfo = "", this.$apply());

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getCouponInfo",
            value: (f = c(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            couponNo: this.code
                        }, e.next = 3, o.default.couponInfo(t);

                      case 3:
                        1 == (n = e.sent).code ? (this.couponInfo = n.data, this.couponNo = this.code, this.couponNoLen = this.codeLen, 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = n.message, this.couponInfo = "", 
                        this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "dealDanceCodeRes",
            value: function(e) {
                var t, n = s.default.formatTimeTwo(e.startTime, "Y-M-D"), o = s.default.formatTimeTwo(e.invalidTime, "Y-M-D");
                return t = 0 == e.rewardNum ? e.exTicketTypeName : e.exTicketTypeName + "×" + e.rewardNum, 
                {
                    couponName: e.name,
                    type: t,
                    productType: "",
                    memberType: "",
                    memberTypePoint: "",
                    limitTrial: "",
                    beginDate: n,
                    endDate: o,
                    storeName: e.storeName
                };
            }
        }, {
            key: "getExchangeCoupon",
            value: (l = c(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            couponNo: this.couponNo
                        }, e.next = 3, o.default.exchangeCoupon(t);

                      case 3:
                        1 == (n = e.sent).code ? (this.exchangeSuccess = !0, this.showAlert = !0, this.alertTxt = "兑换成功", 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = n.message, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getExchangeDanceCoupon",
            value: (h = c(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            code: this.couponNo
                        }, e.next = 3, i.default.receiveCouponTicket(t);

                      case 3:
                        1 == (n = e.sent).code ? (this.exchangeSuccess = !0, this.showAlert = !0, this.alertTxt = "兑换成功", 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = n.message, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "onLoad",
            value: function(e) {
                var t = JSON.parse(decodeURIComponent(e.obj));
                this.name = t.text, this.type = t.type, console.log(this.name + "=======================" + this.type);
            }
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(h, "pages/mine/my-eam-ex-code"));
}();