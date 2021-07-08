!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = require("./../npm/wepy/lib/wepy.js");
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var n = function(e) {
        function t() {
            var e, n, a;
            r(this, t);
            for (var u = arguments.length, i = Array(u), f = 0; f < u; f++) i[f] = arguments[f];
            return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
            a.props = {
                screenWidth: {
                    default: 375
                },
                arr: {
                    default: []
                },
                type: {
                    default: "RankRanking"
                }
            }, o(a, n);
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
        }(t, e), t;
    }(((e = t) && e.__esModule ? e : {
        default: e
    }).default.component);
    exports.default = n;
}();