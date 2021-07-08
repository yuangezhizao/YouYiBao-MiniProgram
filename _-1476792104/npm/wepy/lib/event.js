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
    }();
    var t = function() {
        function t(e, n, r) {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.active = !0, this.name = e, this.source = n, this.type = r;
        }
        return e(t, [ {
            key: "$destroy",
            value: function() {
                this.active = !1;
            }
        }, {
            key: "$transfor",
            value: function(e) {
                var t = 0;
                for (t in e) this[t] = e[t];
            }
        } ]), t;
    }();
    exports.default = t;
}();