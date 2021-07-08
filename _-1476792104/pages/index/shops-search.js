!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
        };
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), o = n(require("./../../utils/api.js")), r = n(require("./../../components/match-statusbar.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function n() {
            var e, t, o;
            a(this, n);
            for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
            return t = o = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(c))), 
            o.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, o.$repeat = {}, o.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "更多门店"
                }
            }, o.$events = {}, o.components = {
                statusbar: r.default
            }, o.data = {
                storeName: "",
                storeList: [],
                pageNo: 1,
                pageSize: 20,
                canLoadMore: !0
            }, o.methods = {
                getStoreName: function(e) {
                    this.storeName = e.detail.value;
                },
                seek: function() {
                    "" != this.storeName && (this.pageNo = 1, this.storeList = [], this.getSearchStore(), 
                    this.$apply());
                },
                storeDetail: function(e) {
                    console.log(e), wx.setStorageSync("storeDetail", e), wx.navigateBack({
                        delta: 2
                    });
                }
            }, i(o, t);
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function() {}
        }, {
            key: "onReachBottom",
            value: function() {
                console.log(this.canLoadMore), this.canLoadMore && (this.pageNo++, this.getSearchStore());
            }
        }, {
            key: "getSearchStore",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.canLoadMore = !0, t = {
                            name: this.storeName,
                            type: 1,
                            regionid: 0,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 4, o.default.searchStore(t);

                      case 4:
                        r = e.sent, console.log(r), r && ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = r.data : this.storeList = this.storeList.concat(r.data)), 
                        this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, o) {
                    return function r(n, a) {
                        try {
                            var i = e[n](a), s = i.value;
                        } catch (e) {
                            return void o(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/index/shops-search"));
}();