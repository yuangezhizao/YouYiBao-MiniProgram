!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), r = a(require("./../components/custom-statusbar.js")), n = a(require("./../components/star.js")), o = a(require("./../utils/wacca-api.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function a() {
            var e, t, o;
            i(this, a);
            for (var u = arguments.length, p = Array(u), c = 0; c < u; c++) p[c] = arguments[c];
            return t = o = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(p))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {
                trophyList: {
                    com: "star",
                    props: ""
                }
            }, o.$props = {
                star: {
                    "xmlns:v-bind": {
                        value: "",
                        for: "trophyList",
                        item: "item",
                        index: "index",
                        key: "key"
                    },
                    "v-bind:starNumber.sync": {
                        value: "item.trophyRarity",
                        for: "trophyList",
                        item: "item",
                        index: "index",
                        key: "key"
                    }
                },
                customStatusbar: {
                    title: "奖杯详情"
                }
            }, o.$events = {}, o.components = {
                customStatusbar: r.default,
                star: n.default
            }, o.mixins = [], o.data = {
                trophyRarity: 0,
                seasonId: 0,
                pageNo: 1,
                pageSize: 5,
                canLoadMore: !0,
                trophyList: []
            }, o.computed = {}, o.methods = {}, o.events = {}, s(o, t);
        }
        var u, p;
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function(e) {
                this.trophyRarity = e.trophyRarity, this.seasonId = e.seasonId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserTrophyList();
            }
        }, {
            key: "onShareAppMessage",
            value: function(e) {
                return {
                    title: "关注游艺宝，发现更多精彩",
                    path: "/pages/index/index",
                    imageUrl: "/assets/imgs/share.png",
                    success: function(e) {
                        console.log("转发成功！");
                    },
                    fail: function(e) {
                        return console.log(e.errMsg);
                    }
                };
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getUserTrophyList());
            }
        }, {
            key: "getUserTrophyList",
            value: (u = regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            seasonId: this.seasonId,
                            trophyRarity: this.trophyRarity
                        }, e.next = 3, o.default.userTrophyList(t);

                      case 3:
                        if (1 != (r = e.sent).code) {
                            e.next = 10;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.trophyList = r.data : this.trophyList = this.trophyList.concat(r.data), 
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), p = function() {
                var e = u.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(o, a) {
                        try {
                            var i = e[o](a), s = i.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return p.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    exports.default = u;
}();