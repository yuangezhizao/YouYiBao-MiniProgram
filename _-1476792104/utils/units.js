function remainTime(r) {
    var e = "", t = !1, a = Math.floor(r / 864e5);
    e = a ? a + "天" : "", t = !!a, r -= 864e5 * a;
    var n = Math.floor(r / 36e5);
    e += n ? n + "时" : t ? "0时" : "", t = !!n, r -= 36e5 * n;
    var o = Math.floor(r / 6e4);
    e += o ? o + "分" : t ? "0分" : "", r -= 6e4 * o;
    var i = Math.floor(r / 1e3);
    return e += i ? i + "秒" : "0秒";
}

function toFix(r) {
    return r ? r.toFixed(2) : "";
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var formatTime = function(r) {
    var e = r.getFullYear(), t = r.getMonth() + 1, a = r.getDate(), n = r.getHours(), o = r.getMinutes(), i = r.getSeconds();
    return [ e, t, a ].map(formatNumber).join("/") + " " + [ n, o, i ].map(formatNumber).join(":");
}, formatNumber = function(r) {
    return r = r.toString(), r[1] ? r : "0" + r;
}, getUrlParam = function(r, e) {
    var t = e.split("?");
    if (t.length > 1) {
        for (var a, n = t[1].split("&"), o = 0; o < n.length; o++) if (null != (a = n[o].split("=")) && a[0] == r) return a[1];
        return "";
    }
    return "";
}, parseParam = function(r) {
    if (!r) return "";
    var e = [];
    for (var t in r) e.push(t + "=" + encodeURIComponent(r[t]));
    return e.join("&");
}, format = function(r) {
    var e = new Date(1e3 * parseInt(r));
    return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].join("-");
};

exports.default = {
    parseParam: parseParam,
    getUrlParam: getUrlParam,
    formatTime: formatTime,
    format: format,
    remainTime: remainTime,
    toFix: toFix
};