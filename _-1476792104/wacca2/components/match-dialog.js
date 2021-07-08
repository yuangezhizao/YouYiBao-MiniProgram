!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var t, e = require("./../npm/wepy/lib/wepy.js");
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var n = function(t) {
        function e() {
            var t, n, i;
            o(this, e);
            for (var a = arguments.length, l = Array(a), u = 0; u < a; u++) l[u] = arguments[u];
            return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(l))), 
            i.props = {
                title: {
                    type: String,
                    default: "温馨提示"
                },
                size: {
                    type: String,
                    default: "default"
                },
                isShowDialog: {
                    twoWay: !0
                }
            }, i.methods = {
                handleClick: function() {
                    this.isShowDialog = !1, this.$apply();
                }
            }, r(i, n);
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(e, t), e;
    }(((t = e) && t.__esModule ? t : {
        default: t
    }).default.component);
    exports.default = n;
}();