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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../utils/api.js")), r = s(require("./../../utils/konami-api.js")), i = s(require("./../../mixins/user-mixin.js")), a = s(require("./../../utils/units.js")), o = s(require("./../../utils/wechat.js")), c = s(require("./../../components/match-statusbar.js"));
    function s(e) {
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
                        var o = t[i](a), c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(c).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function l(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function s() {
            var e, t, n;
            p(this, s);
            for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
            return t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(o))), 
            n.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "充值e-am点"
                }
            }, n.$events = {}, n.components = {
                statusbar: c.default
            }, n.mixins = [ i.default ], n.data = {
                selectIndex: 0,
                count: 1,
                packageList: [],
                selectPackageId: "",
                price: 0,
                eamPoint: 0
            }, n.methods = {
                changeOption: function(e, t) {
                    this.selectIndex = e, this.selectPackageId = this.packageList[this.selectIndex].id, 
                    this.price = t.price, this.count = 1;
                },
                plus: function() {
                    this.count++, this.price = a.default.toFix(this.packageList[this.selectIndex].price * this.count);
                },
                cut: function() {
                    1 !== this.count && (this.count--, this.price = a.default.toFix(this.packageList[this.selectIndex].price * this.count));
                },
                payEamPoint: function() {
                    this.createPackageOrder();
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
                }
            }, l(n, t);
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
        }(s, t), e(s, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {
                this.pointPackageList(), this.findScoreCoin();
            }
        }, {
            key: "findScoreCoin",
            value: (d = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.findScoreCoin();

                      case 2:
                        (t = e.sent) && (this.eamPoint = t.point, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "pointPackageList",
            value: (h = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.pointPackageList();

                      case 2:
                        (t = e.sent) && (this.packageList = t.data, this.packageList.map(function(e) {
                            e.price = parseFloat(e.price) / 100;
                        }), this.price = a.default.toFix(this.packageList[this.selectIndex].price * this.count), 
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
            key: "createPackageOrder",
            value: (f = u(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.createOrder({
                            packageId: this.selectPackageId,
                            qty: this.count
                        });

                      case 2:
                        (t = e.sent) && (console.log(t), o.default.payment(t.data.wxpay).then(function(e) {
                            wx.redirectTo({
                                url: "/pages/mine/my-eam-pay-success"
                            });
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
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/mine/my-eam-recharge"));
}();