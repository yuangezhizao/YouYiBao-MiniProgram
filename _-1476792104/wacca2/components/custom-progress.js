!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
        };
    }(), o = require("./../npm/wepy/lib/wepy.js");
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(e) {
        function o() {
            var e, t, a;
            r(this, o);
            for (var i = arguments.length, s = Array(i), u = 0; u < i; u++) s[u] = arguments[u];
            return t = a = n(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(s))), 
            a.props = {
                days: {
                    type: Number,
                    default: 0,
                    twoWay: !0
                }
            }, a.data = {
                progressWidth: 0
            }, a.components = {}, a.methods = {}, a.events = {}, a.watch = {
                days: function(e, t) {
                    console.log("num value: " + t + " -> " + e);
                    var o = void 0;
                    if (this.days > 90) return o = 100, this.progressWidth = parseInt(o), void this.$apply();
                    o = this.days / 90 * 100, this.progressWidth = parseInt(o), console.log("days", this.days), 
                    this.$apply();
                }
            }, a.computed = {}, n(a, t);
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
        } ]), o;
    }(((e = o) && e.__esModule ? e : {
        default: e
    }).default.component);
    exports.default = a;
}();