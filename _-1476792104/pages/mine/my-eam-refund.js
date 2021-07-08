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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), n = a(require("./../../components/match-statusbar.js")), r = a(require("./../../utils/konami-api.js")), o = a(require("./../../components/custom-dialog.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(o, a) {
                    try {
                        var u = t[o](a), i = u.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!u.done) return Promise.resolve(i).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, r;
            i(this, a);
            for (var u = arguments.length, c = Array(u), f = 0; f < u; f++) c[f] = arguments[f];
            return t = r = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "退款"
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
                refundNo: "",
                preRefundData: [],
                showAlert: !1,
                alertTxt: ""
            }, r.methods = {
                confirmRefund: function() {
                    this.getRefund();
                },
                confirm: function() {
                    this.showAlert = !1;
                }
            }, s(r, t);
        }
        var c, f;
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
            value: function(e) {
                this.refundNo = e.refundNo;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getPreRefund();
            }
        }, {
            key: "getPreRefund",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            orderNo: this.refundNo
                        }, e.next = 3, r.default.userPackagePreRefund(t);

                      case 3:
                        1 == (n = e.sent).code && (this.preRefundData = n.data), console.log("预退款", n), 
                        this.$apply();

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getRefund",
            value: (c = u(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            orderNo: this.refundNo
                        }, e.next = 3, r.default.userPackageRefund(t);

                      case 3:
                        1 == (n = e.sent).code ? (wx.navigateBack({
                            delta: 1
                        }), wx.showToast({
                            title: "申请成功",
                            icon: "none"
                        })) : (this.showAlert = !0, this.alertTxt = n.message), this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/my-eam-refund"));
}();