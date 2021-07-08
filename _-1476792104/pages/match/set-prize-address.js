!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var r = t[s];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, s, r) {
            return s && e(t.prototype, s), r && e(t, r), t;
        };
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), s = o(require("./../../components/match-statusbar.js")), r = o(require("./../../components/match-dialog.js")), i = o(require("./../../mixins/user-mixin.js")), n = o(require("./../../utils/api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, n;
            a(this, o);
            for (var u = arguments.length, l = Array(u), p = 0; p < u; p++) l[p] = arguments[p];
            return t = n = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "奖品收件信息"
                },
                matchDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog"
                }
            }, n.$events = {}, n.components = {
                statusbar: s.default,
                matchDialog: r.default
            }, n.data = {
                isShowDialog: !1,
                prizeName: "",
                prizeId: "",
                expressName: "",
                expressMobile: "",
                expressAddress: "",
                isReceive: ""
            }, n.mixins = [ i.default ], n.methods = {
                submitHandle: function() {
                    "" == this.expressName ? wx.showToast({
                        title: "请填写收货姓名",
                        icon: "none"
                    }) : "" == this.expressMobile ? wx.showToast({
                        title: "请填写收货电话",
                        icon: "none"
                    }) : "" == this.expressAddress ? wx.showToast({
                        title: "请填写收货地址",
                        icon: "none"
                    }) : this.collectPrize(), this.$apply();
                },
                getExpressName: function(e) {
                    this.expressName = e.detail.value;
                },
                getExpressMobile: function(e) {
                    this.expressMobile = e.detail.value;
                },
                getExpressAddress: function(e) {
                    this.expressAddress = e.detail.value;
                },
                goBack: function() {
                    this.isShowDialog = !1, wx.navigateBack({
                        delta: 1
                    });
                }
            }, c(n, t);
        }
        var u, l;
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
            value: function(e) {
                console.log("options", e), this.prizeName = e.prizeName, this.prizeId = e.prizeId, 
                this.isReceive = e.isReceive, 1 == this.isReceive && (this.expressName = e.expressName, 
                this.expressMobile = e.expressMobile, this.expressAddress = e.expressAddress);
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
            key: "collectPrize",
            value: (u = regeneratorRuntime.mark(function e() {
                var t, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            id: this.prizeId,
                            expressName: this.expressName,
                            expressMobile: this.expressMobile,
                            expressAddress: this.expressAddress
                        }, e.next = 3, n.default.collectPrizeJackpot(t);

                      case 3:
                        1 == (s = e.sent).code ? (this.isShowDialog = !0, this.$apply()) : wx.showToast({
                            title: s.message,
                            icon: "none"
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), l = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, s) {
                    return function r(i, n) {
                        try {
                            var o = e[i](n), a = o.value;
                        } catch (e) {
                            return void s(e);
                        }
                        if (!o.done) return Promise.resolve(a).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(a);
                    }("next");
                });
            }, function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/match/set-prize-address"));
}();