!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    }(), t = r(require("./../npm/wepy/lib/wepy.js")), n = r(require("./../components/wacca2-navigation.js")), i = (r(require("./../utils/wechat.js")), 
    r(require("./../utils/wacca-api.js")));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function i(r, a) {
                    try {
                        var o = t[r](a), c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(c).then(function(e) {
                        i("next", e);
                    }, function(e) {
                        i("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function r() {
            var e, t, i;
            c(this, r);
            for (var a = arguments.length, u = Array(a), l = 0; l < a; l++) u[l] = arguments[l];
            return t = i = s(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    "xmlns:v-bind": "",
                    "v-bind:title.sync": "title"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default
            }, i.mixins = [], i.data = o({
                screenWidth: 300,
                lineID: "",
                arr: [],
                chargePoint: 0,
                title: "周边兑换活动",
                exlainStr: "",
                model: {}
            }, "exlainStr", "兑换时请务必向门店工作人员确认操作方法，如因操作失误扣除的积分无法恢复。\n\n款式和颜色为随机赠送，请向店员确认奖品库存情况。"), 
            i.computed = {}, i.methods = {
                inputChange: function(e) {
                    this.chargePoint = e.detail.value;
                },
                addClick: function() {
                    this.chargePoint < this.model.userPoint && this.chargePoint++;
                },
                allClick: function() {
                    this.chargePoint = this.model.userPoint;
                },
                decreaseClick: function() {
                    0 != this.chargePoint && this.chargePoint--;
                },
                beginCharge: function() {
                    var e = this, t = "确定要将此门店的" + this.chargePoint + "积分兑换成线上积分吗";
                    wx.showModal({
                        title: "温馨提示",
                        content: t,
                        success: function(t) {
                            t.confirm && e.excharge();
                        }
                    });
                },
                itemClick: function(e) {
                    var t = JSON.stringify(this.model), n = JSON.stringify(e);
                    if (null == this.model.storeId) {
                        if (0 == e.stock) return void wx.showToast({
                            title: "库存不足",
                            icon: "none"
                        });
                        this.model.userPoint >= e.point && wx.navigateTo({
                            url: "wacca2-zhoubian-online-confirm?json=" + t + "&jsonn=" + n
                        });
                    } else this.model.userPoint >= e.point && wx.navigateTo({
                        url: "wacca2-zhoubian-confirm?json=" + t + "&jsonn=" + n
                    });
                }
            }, i.events = {}, s(i, t);
        }
        var u, l, h;
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
        }(r, t), e(r, [ {
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
                }), this.model = JSON.parse(e.json), 1 == this.model.line && (this.title = "线上兑换", 
                this.exlainStr = "兑换时请填写准确的收货地址\n受库存限制，周边先到先得\n转换为线上积分后，不能再转回店铺积分"), this.$apply(), 
                null == this.model.id ? this.getDataOffline() : this.getDataOnline();
            }
        }, {
            key: "excharge",
            value: (h = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            sid: this.model.storeId,
                            aid: this.lineID,
                            point: this.chargePoint
                        }, e.next = 3, i.default.exchangeWacca2(t);

                      case 3:
                        1 == e.sent.code && (wx.showToast({
                            title: "兑换成功",
                            icon: "success",
                            duration: 1500
                        }), this.model.userPoint -= this.chargePoint, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getDataOffline",
            value: (l = a(regeneratorRuntime.mark(function e() {
                var t, n, r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            sid: this.model.storeId
                        }, e.next = 3, i.default.activityPresentWacca2(t);

                      case 3:
                        return 1 == (n = e.sent).code && (this.arr = n.data), r = {
                            line: 1
                        }, e.next = 8, i.default.activityExplainWacca2(r);

                      case 8:
                        1 == (a = e.sent).code && null != a.data && (this.lineID = a.data[0].id), this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getDataOnline",
            value: (u = a(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            aid: this.model.id
                        }, e.next = 3, i.default.onlinePresentWacca2(t);

                      case 3:
                        1 == (n = e.sent).code && (this.arr = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), r;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-zhoubian-detail"));
}();