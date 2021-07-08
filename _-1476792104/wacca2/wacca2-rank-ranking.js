!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(t, a.key, a);
            }
        }
        return function(e, n, a) {
            return n && t(e.prototype, n), a && t(e, a), e;
        };
    }(), e = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/wacca2-navigation.js")), a = o(require("./../components/wacca2-rank-assembly.js")), r = o(require("./../components/wacca2-rank-list-item.js")), i = (o(require("./../utils/wechat.js")), 
    o(require("./../utils/wacca-api.js")));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function c(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var u = function(e) {
        function o() {
            var t, e, i;
            s(this, o);
            for (var u = arguments.length, l = Array(u), f = 0; f < u; f++) l[f] = arguments[f];
            return e = i = c(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [ this ].concat(l))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    title: "段位排行"
                },
                wacca2RankAssembly: {
                    type: "Ranking",
                    "xmlns:v-bind": "",
                    "v-bind:rankInfo.sync": "rankInfo",
                    "v-bind:screenWidth.sync": "screenWidth",
                    "v-bind:arr.sync": "top3"
                },
                wacca2RankListItem: {
                    "v-bind:arr.sync": "arr",
                    "v-bind:screenWidth.sync": "screenWidth"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default,
                wacca2RankAssembly: a.default,
                wacca2RankListItem: r.default
            }, i.mixins = [], i.data = {
                screenWidth: 300,
                arr: [],
                top3: [],
                trial: "",
                trialId: "",
                pageNo: 1,
                pageSize: 10,
                canLoadMore: !0,
                rankInfo: ""
            }, i.computed = {}, i.methods = {
                itemClick: function(t) {}
            }, i.events = {}, c(i, e);
        }
        var u, l;
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
        }(o, e), t(o, [ {
            key: "onLoad",
            value: function(t) {
                var e = this;
                setTimeout(function() {
                    e.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(t) {
                        n.screenWidth = t.screenWidth;
                    }
                }), this.trial = t.name, this.trialId = t.id, this.$apply(), this.getData();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getData());
            }
        }, {
            key: "getData",
            value: (u = regeneratorRuntime.mark(function t() {
                var e, n, a, r;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            trial: this.trialId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, t.next = 3, i.default.getRateRakingWacca2(e);

                      case 3:
                        if (1 != (n = t.sent).code) {
                            t.next = 13;
                            break;
                        }
                        if ((!n.data.rankList.list || n.data.rankList.list.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList.list) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        for (1 == this.pageNo ? this.arr = n.data.rankList.list : this.arr = this.arr.concat(n.data.rankList.list), 
                        a = 0; a < this.arr.length; a++) this.arr[a].trialClass = this.trialId;
                        this.top3 = this.arr.slice(0, 3), null != n.data.rankInfo.rank && (this.rankInfo = n.data.rankInfo, 
                        r = this.convert(this.rankInfo.rank), this.rankInfo.showRank = r), this.$apply();

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }), l = function() {
                var t = u.apply(this, arguments);
                return new Promise(function(e, n) {
                    return function a(r, i) {
                        try {
                            var o = t[r](i), s = o.value;
                        } catch (t) {
                            return void n(t);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(t) {
                            a("next", t);
                        }, function(t) {
                            a("throw", t);
                        });
                        e(s);
                    }("next");
                });
            }, function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "convert",
            value: function(t) {
                if (t > 3999 || t <= 0) return "超出计算范围！";
                for (var e = t + "", n = "", a = 0; a < e.length; a++) {
                    var r = e.charAt(a);
                    "0" != r && (n += this.getLuoma(parseInt(r) - 1, e.length - a - 1));
                }
                return n;
            }
        }, {
            key: "getLuoma",
            value: function(t, e) {
                var n = [];
                return n.push([ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ], [ "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ], [ "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ], [ "M", "MM", "MMM" ]), 
                n[e][t];
            }
        } ]), o;
    }(e.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-rank-ranking"));
}();