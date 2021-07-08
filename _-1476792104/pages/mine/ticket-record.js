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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/custom-statusbar.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function o() {
            var e, t, c;
            r(this, o);
            for (var a = arguments.length, u = Array(a), s = 0; s < a; s++) u[s] = arguments[s];
            return t = c = i(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            c.config = {
                navigationStyle: "custom"
            }, c.$repeat = {}, c.$props = {
                customStatusbar: {
                    title: "我的奖票"
                }
            }, c.$events = {}, c.components = {
                customStatusbar: n.default
            }, c.mixins = [], c.data = {
                exchangeIntegral: !1,
                exchangeTicket: !1,
                count: 10,
                ticket: 10
            }, c.computed = {}, c.methods = {
                exchangeIntegral: function() {
                    this.exchangeIntegral = !0;
                },
                add: function() {
                    this.count += 10, this.ticket = this.count;
                },
                down: function() {
                    this.count <= 10 ? this.count = 10 : (this.count -= 10, this.ticket = this.count);
                },
                exchangeTicket: function() {
                    this.exchangeTicket = !0;
                },
                close: function() {
                    this.exchangeIntegral = !1, this.exchangeTicket = !1;
                },
                ticketRecord: function() {
                    wx.navigateTo({
                        url: "/pages/mine/ticket-record-detail"
                    });
                }
            }, c.events = {}, i(c, t);
        }
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
            value: function() {}
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
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/mine/ticket-record"));
}();