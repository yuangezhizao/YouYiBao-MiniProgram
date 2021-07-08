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
    }(), t = i(require("./../npm/wepy/lib/wepy.js")), n = i(require("./../components/wacca2-navigation.js")), o = (i(require("./../utils/wechat.js")), 
    i(require("./../utils/wacca-api.js"))), r = i(require("./../components/custom-dialog.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function i() {
            var e, t, o;
            s(this, i);
            for (var c = arguments.length, u = Array(c), l = 0; l < c; l++) u[l] = arguments[l];
            return t = o = a(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                wacca2Navigation: {
                    title: "周边兑换活动"
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
            }, o.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, o.components = {
                wacca2Navigation: n.default,
                customDialog: r.default
            }, o.mixins = [], o.data = {
                screenWidth: 300,
                showAlert: !1,
                model1: {},
                model2: {},
                subTitle: "",
                exlainStr: "1. 请将该页面出示给门店工作人员。\n\n2. 点击下方确认兑换按钮。\n\n3. 当显示兑换成功，积分已扣除的时候，即可完成。\n\n*如果因自行操作导致积分意外扣除，无法恢复。"
            }, o.computed = {}, o.methods = {
                chargeClick: function() {
                    this.showAlert = !0;
                },
                confirm: function() {
                    this.showAlert = !1, this.sure();
                }
            }, o.events = {}, a(o, t);
        }
        var c, u;
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
        }(i, t), e(i, [ {
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
                }), this.model1 = JSON.parse(e.json), this.model2 = JSON.parse(e.jsonn), this.subTitle = this.model1.userPoint + "pt  →  " + (this.model1.userPoint - this.model2.point) + "pt";
            }
        }, {
            key: "sure",
            value: (c = regeneratorRuntime.mark(function e() {
                var t, n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pid: this.model2.id,
                            sid: this.model1.storeId,
                            aid: this.model2.activityId
                        }, e.next = 3, o.default.exchangePresentWacca2(t);

                      case 3:
                        1 == (n = e.sent).code ? (r = JSON.stringify(this.model1), i = JSON.stringify(this.model2), 
                        wx.navigateTo({
                            url: "wacca2-zhoubian-success?json=" + r + "&jsonn=" + i
                        })) : wx.showToast({
                            title: n.message,
                            icon: "none"
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function o(r, i) {
                        try {
                            var s = e[r](i), a = s.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!s.done) return Promise.resolve(a).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        t(a);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(c, "wacca2/wacca2-zhoubian-confirm"));
}();