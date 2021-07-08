!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e, t = function() {
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
    }(), n = require("./../npm/wepy/lib/wepy.js");
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(e) {
        function n() {
            var e, t, a;
            r(this, n);
            for (var i = arguments.length, u = Array(i), f = 0; f < i; f++) u[f] = arguments[f];
            return t = a = o(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(u))), 
            a.data = {
                page: 0,
                size: 10,
                total: 500,
                hasNextPage: !0
            }, a.methods = {}, o(a, t);
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
            key: "getListData",
            value: function() {}
        }, {
            key: "nextPage",
            value: function() {
                this.hasNextPage && (this.page++, this.getListData());
            }
        }, {
            key: "refresh",
            value: function() {
                this.page = 0, this.getListData();
            }
        } ]), n;
    }(((e = n) && e.__esModule ? e : {
        default: e
    }).default.mixin);
    exports.default = a;
}();