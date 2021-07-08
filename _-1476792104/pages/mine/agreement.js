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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../utils/environment.js"));
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
    var a = function(t) {
        function o() {
            var e, t, n;
            r(this, o);
            for (var a = arguments.length, u = Array(a), l = 0; l < a; l++) u[l] = arguments[l];
            return t = n = i(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationBarTitleText: ""
            }, n.components = {}, n.mixins = [], n.data = {
                domain: "",
                webUrl: ""
            }, n.computed = {}, n.methods = {}, n.events = {}, i(n, t);
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
            value: function(e) {
                this.domain = n.default.production ? n.default.prod.domain : n.default.dev.domain, 
                this.webUrl = this.domain + "/html/user_agreement.html";
            }
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
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(a, "pages/mine/agreement"));
}();