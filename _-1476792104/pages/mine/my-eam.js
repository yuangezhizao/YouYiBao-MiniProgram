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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), r = o(require("./../../utils/api.js")), i = require("./../../utils/agreement.js"), a = o(require("./../../utils/konami-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function c(e) {
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
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var f = function(t) {
        function o() {
            var e, t, r;
            s(this, o);
            for (var i = arguments.length, a = Array(i), c = 0; c < i; c++) a[c] = arguments[c];
            return t = r = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(a))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "我的e-am点"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                isChecked: !1,
                eamPoint: 0,
                check: 0,
                showAgreement: !1,
                agreeTxt: [],
                memberStateMusic: "",
                memberStateDance: "",
                isHideVip: !0
            }, r.methods = {
                toggleCheckbox: function() {
                    this.isChecked = !this.isChecked, this.$apply();
                },
                eamPointRecord: function() {
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-records"
                    });
                },
                rechargeEamPoint: function() {
                    1 == this.isChecked ? wx.navigateTo({
                        url: "/pages/mine/my-eam-recharge"
                    }) : this.showAgreement = !0;
                },
                memberExchangeCode: function() {
                    var e = JSON.stringify({
                        type: "2",
                        text: "KONAMI游戏会员"
                    });
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-ex-code?obj=" + encodeURIComponent(e)
                    });
                },
                musicMachine: function() {
                    wx.navigateTo({
                        url: "/pages/machine/machine-music5?isScan=0"
                    });
                },
                danceMachine: function() {
                    wx.navigateTo({
                        url: "/pages/machine/machine-dance?isScan=0"
                    });
                },
                close: function() {
                    this.showAgreement = !1;
                },
                confirm: function() {
                    this.isChecked = !0, this.showAgreement = !1, wx.navigateTo({
                        url: "/pages/mine/my-eam-recharge"
                    });
                },
                showAgree: function() {
                    this.showAgreement = !0;
                }
            }, u(r, t);
        }
        var f, p, h;
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
                this.agreeTxt = i.agreementTxt;
                var t = wx.getStorageSync("isHideVip");
                console.log(JSON.stringify(t) + "====================="), this.isHideVip = t;
            }
        }, {
            key: "onShow",
            value: function() {
                this.findScoreCoin(), this.getMemberStateMusic(), this.getMemberStateDance();
            }
        }, {
            key: "findScoreCoin",
            value: (h = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.findScoreCoin();

                      case 2:
                        (t = e.sent) && (this.eamPoint = t.point, this.check = t.check, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getMemberStateMusic",
            value: (p = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.getMemberInfoMusic();

                      case 2:
                        1 == (t = e.sent).code && (this.memberStateMusic = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getMemberStateDance",
            value: (f = c(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.getMemberInfoDance();

                      case 2:
                        1 == (t = e.sent).code && (this.memberStateDance = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/mine/my-eam"));
}();