!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
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
    }(), n = require("./../npm/wepy/lib/wepy.js");
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(e) {
        function n() {
            var e, t, i;
            o(this, n);
            for (var a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
            return t = i = r(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(u))), 
            i.data = {
                mixin: "This is mixin data."
            }, i.methods = {
                tap: function() {
                    this.mixin = "mixin data was changed", console.log("mixin method tap");
                }
            }, r(i, t);
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
        }(n, e), t(n, [ {
            key: "onShow",
            value: function() {
                console.log("mixin onShow");
            }
        }, {
            key: "onLoad",
            value: function() {
                console.log("mixin onLoad");
            }
        } ]), n;
    }(((e = n) && e.__esModule ? e : {
        default: e
    }).default.mixin);
    exports.default = i;
}();