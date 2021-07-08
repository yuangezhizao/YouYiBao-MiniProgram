!function() {
    "use strict";
    function n(n, r) {
        var t = (65535 & n) + (65535 & r);
        return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
    }
    function r(r, t, e, u, o, f) {
        return n((c = n(n(t, r), n(u, f))) << (a = o) | c >>> 32 - a, e);
        var c, a;
    }
    function t(n, t, e, u, o, f, c) {
        return r(t & e | ~t & u, n, t, o, f, c);
    }
    function e(n, t, e, u, o, f, c) {
        return r(t & u | e & ~u, n, t, o, f, c);
    }
    function u(n, t, e, u, o, f, c) {
        return r(t ^ e ^ u, n, t, o, f, c);
    }
    function o(n, t, e, u, o, f, c) {
        return r(e ^ (t | ~u), n, t, o, f, c);
    }
    function f(r) {
        for (var f = 1732584193, c = -271733879, a = -1732584194, i = 271733878, h = 0; h < r.length; h += 16) {
            var l = f, g = c, v = a, A = i;
            f = t(f, c, a, i, r[h + 0], 7, -680876936), i = t(i, f, c, a, r[h + 1], 12, -389564586), 
            a = t(a, i, f, c, r[h + 2], 17, 606105819), c = t(c, a, i, f, r[h + 3], 22, -1044525330), 
            f = t(f, c, a, i, r[h + 4], 7, -176418897), i = t(i, f, c, a, r[h + 5], 12, 1200080426), 
            a = t(a, i, f, c, r[h + 6], 17, -1473231341), c = t(c, a, i, f, r[h + 7], 22, -45705983), 
            f = t(f, c, a, i, r[h + 8], 7, 1770035416), i = t(i, f, c, a, r[h + 9], 12, -1958414417), 
            a = t(a, i, f, c, r[h + 10], 17, -42063), c = t(c, a, i, f, r[h + 11], 22, -1990404162), 
            f = t(f, c, a, i, r[h + 12], 7, 1804603682), i = t(i, f, c, a, r[h + 13], 12, -40341101), 
            a = t(a, i, f, c, r[h + 14], 17, -1502002290), f = e(f, c = t(c, a, i, f, r[h + 15], 22, 1236535329), a, i, r[h + 1], 5, -165796510), 
            i = e(i, f, c, a, r[h + 6], 9, -1069501632), a = e(a, i, f, c, r[h + 11], 14, 643717713), 
            c = e(c, a, i, f, r[h + 0], 20, -373897302), f = e(f, c, a, i, r[h + 5], 5, -701558691), 
            i = e(i, f, c, a, r[h + 10], 9, 38016083), a = e(a, i, f, c, r[h + 15], 14, -660478335), 
            c = e(c, a, i, f, r[h + 4], 20, -405537848), f = e(f, c, a, i, r[h + 9], 5, 568446438), 
            i = e(i, f, c, a, r[h + 14], 9, -1019803690), a = e(a, i, f, c, r[h + 3], 14, -187363961), 
            c = e(c, a, i, f, r[h + 8], 20, 1163531501), f = e(f, c, a, i, r[h + 13], 5, -1444681467), 
            i = e(i, f, c, a, r[h + 2], 9, -51403784), a = e(a, i, f, c, r[h + 7], 14, 1735328473), 
            f = u(f, c = e(c, a, i, f, r[h + 12], 20, -1926607734), a, i, r[h + 5], 4, -378558), 
            i = u(i, f, c, a, r[h + 8], 11, -2022574463), a = u(a, i, f, c, r[h + 11], 16, 1839030562), 
            c = u(c, a, i, f, r[h + 14], 23, -35309556), f = u(f, c, a, i, r[h + 1], 4, -1530992060), 
            i = u(i, f, c, a, r[h + 4], 11, 1272893353), a = u(a, i, f, c, r[h + 7], 16, -155497632), 
            c = u(c, a, i, f, r[h + 10], 23, -1094730640), f = u(f, c, a, i, r[h + 13], 4, 681279174), 
            i = u(i, f, c, a, r[h + 0], 11, -358537222), a = u(a, i, f, c, r[h + 3], 16, -722521979), 
            c = u(c, a, i, f, r[h + 6], 23, 76029189), f = u(f, c, a, i, r[h + 9], 4, -640364487), 
            i = u(i, f, c, a, r[h + 12], 11, -421815835), a = u(a, i, f, c, r[h + 15], 16, 530742520), 
            f = o(f, c = u(c, a, i, f, r[h + 2], 23, -995338651), a, i, r[h + 0], 6, -198630844), 
            i = o(i, f, c, a, r[h + 7], 10, 1126891415), a = o(a, i, f, c, r[h + 14], 15, -1416354905), 
            c = o(c, a, i, f, r[h + 5], 21, -57434055), f = o(f, c, a, i, r[h + 12], 6, 1700485571), 
            i = o(i, f, c, a, r[h + 3], 10, -1894986606), a = o(a, i, f, c, r[h + 10], 15, -1051523), 
            c = o(c, a, i, f, r[h + 1], 21, -2054922799), f = o(f, c, a, i, r[h + 8], 6, 1873313359), 
            i = o(i, f, c, a, r[h + 15], 10, -30611744), a = o(a, i, f, c, r[h + 6], 15, -1560198380), 
            c = o(c, a, i, f, r[h + 13], 21, 1309151649), f = o(f, c, a, i, r[h + 4], 6, -145523070), 
            i = o(i, f, c, a, r[h + 11], 10, -1120210379), a = o(a, i, f, c, r[h + 2], 15, 718787259), 
            c = o(c, a, i, f, r[h + 9], 21, -343485551), f = n(f, l), c = n(c, g), a = n(a, v), 
            i = n(i, A);
        }
        return [ f, c, a, i ];
    }
    function c(n) {
        for (var r = "", t = 0; t < 4 * n.length; t++) r += "0123456789abcdef".charAt(n[t >> 2] >> t % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(n[t >> 2] >> t % 4 * 8 & 15);
        return r;
    }
    function a(n) {
        for (var r = "", t = 0; t < 32 * n.length; t += 6) r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n[t >> 5] << t % 32 & 63 | n[t >> 6] >> 32 - t % 32 & 63);
        return r;
    }
    function i(n) {
        for (var r = 1 + (n.length + 8 >> 6), t = new Array(16 * r), e = 0; e < 16 * r; e++) t[e] = 0;
        for (e = 0; e < n.length; e++) t[e >> 2] |= (255 & n.charCodeAt(e)) << e % 4 * 8;
        return t[e >> 2] |= 128 << e % 4 * 8, t[16 * r - 2] = 8 * n.length, t;
    }
    function h(n) {
        for (var r = 1 + (n.length + 4 >> 5), t = new Array(16 * r), e = 0; e < 16 * r; e++) t[e] = 0;
        for (e = 0; e < n.length; e++) t[e >> 1] |= n.charCodeAt(e) << e % 2 * 16;
        return t[e >> 1] |= 128 << e % 2 * 16, t[16 * r - 2] = 16 * n.length, t;
    }
    module.exports = {
        hexMD5: function(n) {
            return c(f(i(n)));
        },
        hexMD5w: function(n) {
            return c(f(h(n)));
        },
        b64MD5: function(n) {
            return a(f(i(n)));
        },
        b64MD5w: function(n) {
            return a(f(h(n)));
        }
    };
}();