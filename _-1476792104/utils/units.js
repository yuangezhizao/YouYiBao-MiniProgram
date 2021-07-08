!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function(e) {
        return (e = e.toString())[1] ? e : "0" + e;
    };
    exports.default = {
        parseParam: function(e) {
            if (!e) return "";
            var t = [];
            for (var r in e) t.push(r + "=" + encodeURIComponent(e[r]));
            return t.join("&");
        },
        getUrlParam: function(e, t) {
            var r = t.split("?");
            if (r.length > 1) {
                for (var n, o = r[1].split("&"), a = 0; a < o.length; a++) if (null != (n = o[a].split("=")) && n[0] == e) return n[1];
                return "";
            }
            return "";
        },
        formatTime: function(t) {
            var r = t.getFullYear(), n = t.getMonth() + 1, o = t.getDate(), a = t.getHours(), u = t.getMinutes(), i = t.getSeconds();
            return [ r, n, o ].map(e).join("/") + " " + [ a, u, i ].map(e).join(":");
        },
        format: function(e) {
            var t = new Date(1e3 * parseInt(e));
            return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].join("-");
        },
        remainTime: function(e) {
            var t = "", r = !1, n = Math.floor(e / 864e5);
            t = n ? n + "天" : "", r = !!n, e -= 864e5 * n;
            var o = Math.floor(e / 36e5);
            t += o ? o + "时" : r ? "0时" : "", r = !!o, e -= 36e5 * o;
            var a = Math.floor(e / 6e4);
            t += a ? a + "分" : r ? "0分" : "", e -= 6e4 * a;
            var u = Math.floor(e / 1e3);
            return t += u ? u + "秒" : "0秒";
        },
        toFix: function(e) {
            return e ? e.toFixed(2) : "";
        },
        formatTimeTwo: function(t, r) {
            var n = [ "Y", "M", "D", "h", "m", "s" ], o = [], a = new Date(1e3 * t);
            for (var u in o.push(a.getFullYear()), o.push(e(a.getMonth() + 1)), o.push(e(a.getDate())), 
            o.push(e(a.getHours())), o.push(e(a.getMinutes())), o.push(e(a.getSeconds())), o) r = r.replace(n[u], o[u]);
            return r;
        }
    };
}();