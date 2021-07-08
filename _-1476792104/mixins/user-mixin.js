!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), r = require("./../npm/wepy/lib/wepy.js");
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(e) {
        function r() {
            var e, t, u;
            n(this, r);
            for (var i = arguments.length, a = Array(i), f = 0; f < i; f++) a[f] = arguments[f];
            return t = u = o(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(a))), 
            u.data = {
                userInfo: ""
            }, o(u, t);
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
        }(r, e), t(r, [ {
            key: "onShow",
            value: function() {
                this.userInfo = wx.getStorageSync("userInfo");
            }
        } ]), r;
    }(((e = r) && e.__esModule ? e : {
        default: e
    }).default.mixin);
    exports.default = u;
}();