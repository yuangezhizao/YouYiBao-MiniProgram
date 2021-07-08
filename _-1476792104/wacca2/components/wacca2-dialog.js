!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
        };
    }(), o = require("./../npm/wepy/lib/wepy.js");
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(e) {
        function o() {
            var e, t, i;
            n(this, o);
            for (var u = arguments.length, a = Array(u), f = 0; f < u; f++) a[f] = arguments[f];
            return t = i = r(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(a))), 
            i.props = {
                statusBarHeight: {
                    default: "",
                    twoWay: !0
                },
                type: {
                    default: "confirm"
                },
                content: {
                    default: ""
                },
                title: {
                    default: ""
                },
                isShow: {
                    default: !1,
                    twoWay: !0
                }
            }, i.data = {}, i.components = {}, i.methods = {
                close: function() {
                    this.isShow = !1, this.$emit("close");
                },
                confirm: function() {
                    this.$emit("confirm");
                },
                getAuthHandle: function(e) {
                    console.log(e), "getUserInfo:fail auth deny" !== e.detail.errMsg && (this.isShow = !1, 
                    this.$emit("getAuthHandler"));
                },
                getPhoneNumber: function(e) {
                    "getPhoneNumber:fail user deny" !== e.detail.errMsg && (this.isShow = !1, this.$emit("getPhoneNumber", e));
                }
            }, i.events = {}, i.watch = {}, i.computed = {}, r(i, t);
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
        }(o, e), t(o, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onShow",
            value: function() {}
        } ]), o;
    }(((e = o) && e.__esModule ? e : {
        default: e
    }).default.component);
    exports.default = i;
}();