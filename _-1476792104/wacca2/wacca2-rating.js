!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
        };
    }(), t = r(require("./../npm/wepy/lib/wepy.js")), a = r(require("./../components/wacca2-navigation.js")), n = (r(require("./../utils/wechat.js")), 
    r(require("./../utils/wacca-api.js")));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function r() {
            var e, t, n;
            i(this, r);
            for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
            return t = n = o(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                wacca2Navigation: {
                    title: "Rating"
                }
            }, n.$events = {}, n.components = {
                wacca2Navigation: a.default
            }, n.mixins = [], n.data = {
                screenWidth: 300,
                selectIndex: 0,
                menuList: [ {
                    title: "总Rating"
                }, {
                    title: "新曲rating"
                }, {
                    title: "旧曲rating"
                } ],
                pageSize: 10,
                pageNo: 1,
                canLoadMore: !0,
                arr: [],
                userName: "",
                userIcon: "",
                sumRate: 0,
                totalCount: 0
            }, n.computed = {}, n.methods = {
                topMenuDidSelect: function(e) {
                    this.selectIndex != e && (this.selectIndex = e, this.canLoadMore = !0, this.pageNo = 1, 
                    this.getData());
                }
            }, n.events = {}, o(n, t);
        }
        var s, c;
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
        }(r, t), e(r, [ {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getData());
            }
        }, {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var a = this;
                wx.getSystemInfo({
                    success: function(e) {
                        a.screenWidth = e.screenWidth;
                    }
                });
                var n = JSON.parse(e.json);
                this.userName = n.name, this.userIcon = n.image, this.totalCount = n.rate, this.getData();
            }
        }, {
            key: "getData",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, 0 != this.selectIndex && (t.type = 2 == this.selectIndex ? 0 : 1), e.next = 4, 
                        n.default.ratingListWacca2(t);

                      case 4:
                        if (1 != (a = e.sent).code) {
                            e.next = 19;
                            break;
                        }
                        if ("" != a.data[0]) {
                            e.next = 11;
                            break;
                        }
                        return this.arr = [], this.canLoadMore = !1, this.$apply(), e.abrupt("return");

                      case 11:
                        if (a.data, (!a.data.page.list || a.data.page.list.length < this.pageSize) && (this.canLoadMore = !1), 
                        a.data) {
                            e.next = 15;
                            break;
                        }
                        return e.abrupt("return");

                      case 15:
                        1 == this.pageNo ? this.arr = a.data.page.list : this.arr = this.arr.concat(a.data.page.list), 
                        this.sumRate = a.data.count, this.dealRecord(this.arr), this.$apply();

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, a) {
                    return function n(r, i) {
                        try {
                            var o = e[r](i), s = o.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "dealRecord",
            value: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t], n = "", r = "";
                    1 == a.rankCategory ? (n = "normal", r = "NORMAL") : 2 == a.rankCategory ? (n = "hard", 
                    r = "HARD") : 3 == a.rankCategory ? (n = "expert", r = "EXPERT") : (n = "inferno", 
                    r = "INFERNO"), a.type = n;
                    var i = Math.floor(a.level), o = "" + i;
                    a.rankLevel - i >= .7 && (o += "+"), a.typeDesc = r + " " + o;
                }
            }
        } ]), r;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "wacca2/wacca2-rating"));
}();