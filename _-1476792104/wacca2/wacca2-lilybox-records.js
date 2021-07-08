!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, a, n) {
            return a && t(e.prototype, a), n && t(e, n), e;
        };
    }(), e = r(require("./../npm/wepy/lib/wepy.js")), a = r(require("./../components/wacca2-navigation.js")), n = (r(require("./../utils/wechat.js")), 
    r(require("./../utils/wacca-api.js")));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var s = function(e) {
        function r() {
            var t, e, n;
            i(this, r);
            for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
            return e = n = o(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                wacca2Navigation: {
                    title: "收集记录"
                }
            }, n.$events = {}, n.components = {
                wacca2Navigation: a.default
            }, n.mixins = [], n.data = {
                screenWidth: 300,
                gid: "",
                myList: [],
                getNum: 0,
                getRate: 0,
                bigList: [],
                totalList: []
            }, n.computed = {}, n.methods = {
                itemClick: function(t) {
                    wx.navigateTo({
                        url: "wacca2-gate-detail"
                    });
                }
            }, n.events = {}, o(n, e);
        }
        var s, c;
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
        }(r, e), t(r, [ {
            key: "onLoad",
            value: function(t) {
                var e = this;
                setTimeout(function() {
                    e.$apply();
                }, 100);
                var a = this;
                wx.getSystemInfo({
                    success: function(t) {
                        a.screenWidth = t.screenWidth;
                    }
                }), this.gid = t.gid, this.getData();
            }
        }, {
            key: "getData",
            value: (s = regeneratorRuntime.mark(function t() {
                var e, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            gid: this.gid
                        }, t.next = 3, n.default.userGachaListWacca2(e);

                      case 3:
                        1 == (a = t.sent).code && (this.bigList = a.data.gachaList, this.myList = a.data.userGachaList, 
                        this.dealData(), this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }), c = function() {
                var t = s.apply(this, arguments);
                return new Promise(function(e, a) {
                    return function n(r, i) {
                        try {
                            var o = t[r](i), s = o.value;
                        } catch (t) {
                            return void a(t);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(t) {
                            n("next", t);
                        }, function(t) {
                            n("throw", t);
                        });
                        e(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "dealData",
            value: function() {
                for (var t = this, e = [ {
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/lilybox/bronze.png",
                    score: "1",
                    total: "30",
                    data: [],
                    star: [ "1" ]
                }, {
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/lilybox/silver.png",
                    score: "1",
                    total: "30",
                    data: [],
                    star: [ "1", "1" ]
                }, {
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/lilybox/gold.png",
                    score: "1",
                    total: "30",
                    data: [],
                    star: [ "1", "1", "1" ]
                }, {
                    image: "http://yyb-oss.universal-space.cn/imgs/wacca2/lilybox/platinum.png",
                    score: "1",
                    total: "30",
                    data: [],
                    star: [ "1", "1", "1", "1" ]
                } ], a = [ [ 0, 0, 0, 0 ], [ [], [], [], [] ] ], n = 0; n < this.bigList.length; n++) {
                    switch (this.bigList[n].rarity) {
                      case 1:
                        a[0][0]++;
                        break;

                      case 2:
                        a[0][1]++;
                        break;

                      case 3:
                        a[0][2]++;
                        break;

                      case 4:
                        a[0][3]++;
                    }
                }
                for (var r = 0, i = function(e) {
                    var n = t.myList[e];
                    switch (n.rarity) {
                      case 1:
                        b = !1, a[1][0].forEach(function(t) {
                            n.gachaContentId == t.gachaContentId && (b = !0);
                        }), 0 == b && (a[1][0].push(n), r++);
                        break;

                      case 2:
                        b = !1, a[1][1].forEach(function(t) {
                            n.gachaContentId == t.gachaContentId && (b = !0);
                        }), 0 == b && (a[1][1].push(n), r++);
                        break;

                      case 3:
                        b = !1, a[1][2].forEach(function(t) {
                            n.gachaContentId == t.gachaContentId && (b = !0);
                        }), 0 == b && (a[1][2].push(n), r++);
                        break;

                      case 4:
                        b = !1, a[1][3].forEach(function(t) {
                            n.gachaContentId == t.gachaContentId && (b = !0);
                        }), 0 == b && (a[1][3].push(n), r++);
                    }
                }, o = 0; o < this.myList.length; o++) {
                    i(o);
                }
                this.getNum = r, this.getRate = Math.round(r / this.bigList.length * 100);
                for (var s = [ [], [], [], [] ], c = 0; c < this.myList.length; c++) {
                    var u = this.myList[c];
                    switch (u.rarity) {
                      case 1:
                        s[0].push(u);
                        break;

                      case 2:
                        s[1].push(u);
                        break;

                      case 3:
                        s[2].push(u);
                        break;

                      case 4:
                        s[3].push(u);
                    }
                }
                for (var h = [], l = 0; l < s.length; l++) {
                    for (var g = s[l], p = [], f = 0; f < g.length; f++) for (var y = g[f], d = 0; d < this.bigList.length; d++) {
                        var v = this.bigList[d];
                        if (y.gachaContentId == v.gachaContentId) {
                            for (var b = !1, m = 0; m < p.length; m++) {
                                var w = p[m];
                                w.gachaContentId == v.gachaContentId && (b = !0, w.itemNum++);
                            }
                            0 == b && p.push(v);
                        }
                    }
                    h.push(p);
                }
                console.log(h);
                for (var L = 0; L < e.length; L++) {
                    var k = e[L];
                    k.total = a[0][L], k.score = a[1][L].length, k.data = h[L];
                }
                this.totalList = e;
            }
        } ]), r;
    }(e.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "wacca2/wacca2-lilybox-records"));
}();