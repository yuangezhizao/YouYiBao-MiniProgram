!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function e(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : t(e))) return !1;
        return !![ "@@__IMMUTABLE_ITERABLE__@@", "@@__IMMUTABLE_KEYED__@@", "@@__IMMUTABLE_INDEXED__@@", "@@__IMMUTABLE_ORDERED__@@", "@@__IMMUTABLE_RECORD__@@" ].filter(function(t) {
            return e[t];
        }).length;
    }
    exports.default = {
        $isEmpty: function(t) {
            return 0 === Object.keys(t).length;
        },
        $isEqual: function(r, n, o, i) {
            if (e(r)) return r.equals(n);
            if (e(n)) return n.equals(r);
            if (r === n) return 0 !== r || 1 / r == 1 / n;
            if (r != r) return n != n;
            if (!r || !n) return r === n;
            var u = void 0 === r ? "undefined" : t(r);
            return ("function" === u || "object" === u || "object" === (void 0 === n ? "undefined" : t(n))) && this.$isDeepEqual(r, n, o, i);
        },
        $isDeepEqual: function(r, n, o, i) {
            e(r) && (r = r.toJS()), e(n) && (n = n.toJS());
            var u = toString.call(r);
            if (u !== toString.call(n)) return !1;
            switch (u) {
              case "[object RegExp]":
              case "[object String]":
                return "" + r == "" + n;

              case "[object Number]":
                return +r != +r ? +n != +n : 0 == +r ? 1 / +r == 1 / n : +r == +n;

              case "[object Date]":
              case "[object Boolean]":
                return +r == +n;

              case "[object Symbol]":
                var c = "undefined" != typeof Symbol ? Symbol.prototype : null;
                return c.valueOf.call(r) === c.valueOf.call(n);
            }
            var a = "[object Array]" === u;
            if (!a) {
                if ("object" !== (void 0 === r ? "undefined" : t(r)) || "object" !== (void 0 === n ? "undefined" : t(n))) return r === n;
                var s = r.constructor, f = n.constructor;
                if (s !== f && !("function" == typeof s && s instanceof s && "function" == typeof f && f instanceof f) && "constructor" in r && "constructor" in n) return !1;
            }
            i = i || [];
            for (var l = (o = o || []).length; l--; ) if (o[l] === r) return i[l] === n;
            if (o.push(r), i.push(n), a) {
                if ((l = r.length) !== n.length) return !1;
                for (;l--; ) if (!this.$isEqual(r[l], n[l], o, i)) return !1;
            } else {
                var p, y = Object.keys(r);
                if (l = y.length, Object.keys(n).length !== l) return !1;
                for (;l--; ) if (p = y[l], !this.$has(n, p) || !this.$isEqual(r[p], n[p], o, i)) return !1;
            }
            return o.pop(), i.pop(), !0;
        },
        $has: function(t, e) {
            if ("[object Array]" !== toString.call(e)) return t && hasOwnProperty.call(t, e);
            for (var r = e.length, n = 0; n < r; n++) {
                var o = e[n];
                if (!t || !hasOwnProperty.call(t, o)) return !1;
                t = t[o];
            }
            return !!r;
        },
        $extend: function() {
            var e, r, n, o, i, u, c = arguments[0] || {}, a = 1, s = arguments.length, f = !1, l = this;
            for ("boolean" == typeof c && (f = c, c = arguments[a] || {}, a++), "object" !== (void 0 === c ? "undefined" : t(c)) && "function" != typeof c && (c = {}), 
            a === s && (c = this, a--); a < s; a++) if (e = arguments[a]) for (r in e) n = c[r], 
            c !== (o = e[r]) && (f && o && (l.$isPlainObject(o) || (i = Array.isArray(o))) ? (i ? (i = !1, 
            u = n && Array.isArray(n) ? n : []) : u = n && l.$isPlainObject(n) ? n : {}, c[r] = l.$extend(f, u, o)) : c[r] = o);
            return c;
        },
        $copy: function(r) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Array.isArray(r) ? this.$extend(n, [], r) : "" + r == "null" ? r : "object" === (void 0 === r ? "undefined" : t(r)) ? e(r) ? r : this.$extend(n, {}, r) : r;
        },
        $isPlainObject: function(t) {
            var e, r;
            return !(!t || "[object Object]" !== Object.prototype.toString.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof (r = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor) && Object.prototype.hasOwnProperty.toString.call(r) === Object.prototype.hasOwnProperty.toString.call(Object));
        },
        $resolvePath: function(t, e) {
            if (!e) return t;
            if ("/" === e[0]) return e = e.substr(1), this.$resolvePath("", e);
            if ("." !== e[0]) return this.$resolvePath(t, "./" + e);
            var r = t.split("/");
            return "." === e[0] && "/" === e[1] ? "." !== (e = e.substr(2))[0] ? (r.length ? r[r.length - 1] = e : r = [ e ], 
            1 === r.length ? "/" + r[0] : r.join("/")) : this.$resolvePath(r.join("/"), e) : "." === e[0] && "." === e[1] && "/" === e[2] ? (e = e.replace(/^\.*/gi, ""), 
            r.pop(), this.$resolvePath(r.join("/"), "." + e)) : "." === e[0] ? this.$resolvePath(t, e.substr(1)) : void 0;
        },
        $getParams: function(t) {
            var e = {}, r = t.indexOf("?");
            if (-1 !== r) {
                var n = t.substr(r + 1), o = void 0;
                n.split("&").forEach(function(t) {
                    o = t.split("="), e[o[0]] = decodeURIComponent(o[1]);
                });
            }
            return e;
        },
        isImmutable: e,
        hyphenate: function(t) {
            return t.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
        },
        camelize: function(t) {
            return t.replace(/-(\w)/g, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        }
    };
}();