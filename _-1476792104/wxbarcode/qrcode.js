!function() {
    "use strict";
    !function() {
        var r, o, f, e, t, a, n = [ 0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28 ], i = [ 3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177 ], c = [ 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107 ], s = [ 1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30 ], l = [ 255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175 ], u = [ 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0 ], v = [], h = [], d = [], C = [], g = [], b = 2;
        function k(r, o) {
            var f;
            r > o && (f = r, r = o, o = f), f = o, f *= o, f += o, f >>= 1, C[f += r] = 1;
        }
        function m(r, f) {
            var e;
            for (d[r + o * f] = 1, e = -2; e < 2; e++) d[r + e + o * (f - 2)] = 1, d[r - 2 + o * (f + e + 1)] = 1, 
            d[r + 2 + o * (f + e)] = 1, d[r + e + 1 + o * (f + 2)] = 1;
            for (e = 0; e < 2; e++) k(r - 1, f + e), k(r + 1, f - e), k(r - e, f - 1), k(r + e, f + 1);
        }
        function w(r) {
            for (;r >= 255; ) r = ((r -= 255) >> 8) + (255 & r);
            return r;
        }
        var S = [];
        function z(r, o, f, e) {
            var t, a, n;
            for (t = 0; t < e; t++) v[f + t] = 0;
            for (t = 0; t < o; t++) {
                if (255 != (n = l[v[r + t] ^ v[f]])) for (a = 1; a < e; a++) v[f + a - 1] = v[f + a] ^ u[w(n + S[e - a])]; else for (a = f; a < f + e; a++) v[a] = v[a + 1];
                v[f + e - 1] = 255 == n ? 0 : u[w(n + S[0])];
            }
        }
        function F(r, o) {
            var f;
            return r > o && (f = r, r = o, o = f), f = o, f += o * o, f >>= 1, C[f += r];
        }
        function p(r) {
            var f, e, t, a;
            switch (r) {
              case 0:
                for (e = 0; e < o; e++) for (f = 0; f < o; f++) f + e & 1 || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 1:
                for (e = 0; e < o; e++) for (f = 0; f < o; f++) 1 & e || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 2:
                for (e = 0; e < o; e++) for (t = 0, f = 0; f < o; f++, t++) 3 == t && (t = 0), t || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 3:
                for (a = 0, e = 0; e < o; e++, a++) for (3 == a && (a = 0), t = a, f = 0; f < o; f++, 
                t++) 3 == t && (t = 0), t || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 4:
                for (e = 0; e < o; e++) for (t = 0, a = e >> 1 & 1, f = 0; f < o; f++, t++) 3 == t && (t = 0, 
                a = !a), a || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 5:
                for (a = 0, e = 0; e < o; e++, a++) for (3 == a && (a = 0), t = 0, f = 0; f < o; f++, 
                t++) 3 == t && (t = 0), (f & e & 1) + !(!t | !a) || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 6:
                for (a = 0, e = 0; e < o; e++, a++) for (3 == a && (a = 0), t = 0, f = 0; f < o; f++, 
                t++) 3 == t && (t = 0), (f & e & 1) + (t && t == a) & 1 || F(f, e) || (d[f + e * o] ^= 1);
                break;

              case 7:
                for (a = 0, e = 0; e < o; e++, a++) for (3 == a && (a = 0), t = 0, f = 0; f < o; f++, 
                t++) 3 == t && (t = 0), (t && t == a) + (f + e & 1) & 1 || F(f, e) || (d[f + e * o] ^= 1);
            }
        }
        function x(r) {
            var o, f = 0;
            for (o = 0; o <= r; o++) g[o] >= 5 && (f += 3 + g[o] - 5);
            for (o = 3; o < r - 1; o += 2) g[o - 2] == g[o + 2] && g[o + 2] == g[o - 1] && g[o - 1] == g[o + 1] && 3 * g[o - 1] == g[o] && (0 == g[o - 3] || o + 3 > r || 3 * g[o - 3] >= 4 * g[o] || 3 * g[o + 3] >= 4 * g[o]) && (f += 40);
            return f;
        }
        function A() {
            var r, f, e, t, a, n = 0, i = 0;
            for (f = 0; f < o - 1; f++) for (r = 0; r < o - 1; r++) (d[r + o * f] && d[r + 1 + o * f] && d[r + o * (f + 1)] && d[r + 1 + o * (f + 1)] || !(d[r + o * f] || d[r + 1 + o * f] || d[r + o * (f + 1)] || d[r + 1 + o * (f + 1)])) && (n += 3);
            for (f = 0; f < o; f++) {
                for (g[0] = 0, e = t = r = 0; r < o; r++) (a = d[r + o * f]) == t ? g[e]++ : g[++e] = 1, 
                i += (t = a) ? 1 : -1;
                n += x(e);
            }
            i < 0 && (i = -i);
            var c = i, s = 0;
            for (c += c << 2, c <<= 1; c > o * o; ) c -= o * o, s++;
            for (n += 10 * s, r = 0; r < o; r++) {
                for (g[0] = 0, e = t = f = 0; f < o; f++) (a = d[r + o * f]) == t ? g[e]++ : g[++e] = 1, 
                t = a;
                n += x(e);
            }
            return n;
        }
        var M = null, R = {
            get ecclevel() {
                return b;
            },
            set ecclevel(r) {
                b = r;
            },
            get size() {
                return _size;
            },
            set size(r) {
                _size = r;
            },
            get canvas() {
                return M;
            },
            set canvas(r) {
                M = r;
            },
            getFrame: function(g) {
                return function(g) {
                    var x, M, R, y, _, N, Q, j;
                    y = g.length, r = 0;
                    do {
                        if (r++, R = 4 * (b - 1) + 16 * (r - 1), f = s[R++], e = s[R++], t = s[R++], a = s[R], 
                        y <= (R = t * (f + e) + e - 3 + (r <= 9))) break;
                    } while (r < 40);
                    for (o = 17 + 4 * r, _ = t + (t + a) * (f + e) + e, y = 0; y < _; y++) h[y] = 0;
                    for (v = g.slice(0), y = 0; y < o * o; y++) d[y] = 0;
                    for (y = 0; y < (o * (o + 1) + 1) / 2; y++) C[y] = 0;
                    for (y = 0; y < 3; y++) {
                        for (R = 0, M = 0, 1 == y && (R = o - 7), 2 == y && (M = o - 7), d[M + 3 + o * (R + 3)] = 1, 
                        x = 0; x < 6; x++) d[M + x + o * R] = 1, d[M + o * (R + x + 1)] = 1, d[M + 6 + o * (R + x)] = 1, 
                        d[M + x + 1 + o * (R + 6)] = 1;
                        for (x = 1; x < 5; x++) k(M + x, R + 1), k(M + 1, R + x + 1), k(M + 5, R + x), k(M + x + 1, R + 5);
                        for (x = 2; x < 4; x++) d[M + x + o * (R + 2)] = 1, d[M + 2 + o * (R + x + 1)] = 1, 
                        d[M + 4 + o * (R + x)] = 1, d[M + x + 1 + o * (R + 4)] = 1;
                    }
                    if (r > 1) for (y = n[r], M = o - 7; ;) {
                        for (x = o - 7; x > y - 3 && (m(x, M), !(x < y)); ) x -= y;
                        if (M <= y + 9) break;
                        m(6, M -= y), m(M, 6);
                    }
                    for (d[8 + o * (o - 8)] = 1, M = 0; M < 7; M++) k(7, M), k(o - 8, M), k(7, M + o - 7);
                    for (x = 0; x < 8; x++) k(x, 7), k(x + o - 8, 7), k(x, o - 8);
                    for (x = 0; x < 9; x++) k(x, 8);
                    for (x = 0; x < 8; x++) k(x + o - 8, 8), k(8, x);
                    for (M = 0; M < 7; M++) k(8, M + o - 7);
                    for (x = 0; x < o - 14; x++) 1 & x ? (k(8 + x, 6), k(6, 8 + x)) : (d[8 + x + 6 * o] = 1, 
                    d[6 + o * (8 + x)] = 1);
                    if (r > 6) for (y = i[r - 7], R = 17, x = 0; x < 6; x++) for (M = 0; M < 3; M++, 
                    R--) 1 & (R > 11 ? r >> R - 12 : y >> R) ? (d[5 - x + o * (2 - M + o - 11)] = 1, 
                    d[2 - M + o - 11 + o * (5 - x)] = 1) : (k(5 - x, 2 - M + o - 11), k(2 - M + o - 11, 5 - x));
                    for (M = 0; M < o; M++) for (x = 0; x <= M; x++) d[x + o * M] && k(x, M);
                    for (_ = v.length, N = 0; N < _; N++) h[N] = v.charCodeAt(N);
                    if (v = h.slice(0), _ >= (x = t * (f + e) + e) - 2 && (_ = x - 2, r > 9 && _--), 
                    N = _, r > 9) {
                        for (v[N + 2] = 0, v[N + 3] = 0; N--; ) y = v[N], v[N + 3] |= 255 & y << 4, v[N + 2] = y >> 4;
                        v[2] |= 255 & _ << 4, v[1] = _ >> 4, v[0] = 64 | _ >> 12;
                    } else {
                        for (v[N + 1] = 0, v[N + 2] = 0; N--; ) y = v[N], v[N + 2] |= 255 & y << 4, v[N + 1] = y >> 4;
                        v[1] |= 255 & _ << 4, v[0] = 64 | _ >> 4;
                    }
                    for (N = _ + 3 - (r < 10); N < x; ) v[N++] = 236, v[N++] = 17;
                    for (S[0] = 1, N = 0; N < a; N++) {
                        for (S[N + 1] = 1, Q = N; Q > 0; Q--) S[Q] = S[Q] ? S[Q - 1] ^ u[w(l[S[Q]] + N)] : S[Q - 1];
                        S[0] = u[w(l[S[0]] + N)];
                    }
                    for (N = 0; N <= a; N++) S[N] = l[S[N]];
                    for (R = x, M = 0, N = 0; N < f; N++) z(M, t, R, a), M += t, R += a;
                    for (N = 0; N < e; N++) z(M, t + 1, R, a), M += t + 1, R += a;
                    for (M = 0, N = 0; N < t; N++) {
                        for (Q = 0; Q < f; Q++) h[M++] = v[N + Q * t];
                        for (Q = 0; Q < e; Q++) h[M++] = v[f * t + N + Q * (t + 1)];
                    }
                    for (Q = 0; Q < e; Q++) h[M++] = v[f * t + N + Q * (t + 1)];
                    for (N = 0; N < a; N++) for (Q = 0; Q < f + e; Q++) h[M++] = v[x + N + Q * a];
                    for (v = h, x = M = o - 1, R = _ = 1, j = (t + a) * (f + e) + e, N = 0; N < j; N++) for (y = v[N], 
                    Q = 0; Q < 8; Q++, y <<= 1) {
                        128 & y && (d[x + o * M] = 1);
                        do {
                            _ ? x-- : (x++, R ? 0 != M ? M-- : (R = !R, 6 == (x -= 2) && (x--, M = 9)) : M != o - 1 ? M++ : (R = !R, 
                            6 == (x -= 2) && (x--, M -= 8))), _ = !_;
                        } while (F(x, M));
                    }
                    for (v = d.slice(0), y = 0, M = 3e4, R = 0; R < 8 && (p(R), (x = A()) < M && (M = x, 
                    y = R), 7 != y); R++) d = v.slice(0);
                    for (y != R && p(y), M = c[y + (b - 1 << 3)], R = 0; R < 8; R++, M >>= 1) 1 & M && (d[o - 1 - R + 8 * o] = 1, 
                    R < 6 ? d[8 + o * R] = 1 : d[8 + o * (R + 1)] = 1);
                    for (R = 0; R < 7; R++, M >>= 1) 1 & M && (d[8 + o * (o - 7 + R)] = 1, R ? d[6 - R + 8 * o] = 1 : d[7 + 8 * o] = 1);
                    return d;
                }(g);
            },
            utf16to8: function(r) {
                var o, f, e, t;
                for (o = "", e = r.length, f = 0; f < e; f++) (t = r.charCodeAt(f)) >= 1 && t <= 127 ? o += r.charAt(f) : t > 2047 ? (o += String.fromCharCode(224 | t >> 12 & 15), 
                o += String.fromCharCode(128 | t >> 6 & 63), o += String.fromCharCode(128 | t >> 0 & 63)) : (o += String.fromCharCode(192 | t >> 6 & 31), 
                o += String.fromCharCode(128 | t >> 0 & 63));
                return o;
            },
            draw: function(r, f, e, t, a) {
                if (b = a || b, f = f || M) {
                    var n = Math.min(e, t);
                    r = this.utf16to8(r);
                    var i = this.getFrame(r), c = wx.createCanvasContext(f), s = Math.round(n / (o + 8)), l = s * (o + 8), u = Math.floor((n - l) / 2);
                    n = l, c.setFillStyle("#ffffff"), c.fillRect(0, 0, e, e), c.setFillStyle("#000000");
                    for (var v = 0; v < o; v++) for (var h = 0; h < o; h++) i[h * o + v] && c.fillRect(s * (4 + v) + u, s * (4 + h) + u, s, s);
                    c.draw();
                } else console.warn("No canvas provided to draw QR code in!");
            }
        };
        module.exports = {
            api: R
        };
    }();
}();