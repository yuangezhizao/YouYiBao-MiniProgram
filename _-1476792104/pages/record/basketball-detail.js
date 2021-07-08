!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../components/custom-statusbar.js")), n = o(require("./../../utils/api.js"));
    function o(e) {
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
        function o() {
            var e, t, n;
            a(this, o);
            for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
            return t = n = i(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(c))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "战绩详情"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default
            }, n.mixins = [], n.data = {
                scoreDetail: "",
                scoreList: [],
                machineId: "",
                scoreId: ""
            }, n.computed = {}, n.methods = {
                recordStatis: function() {
                    wx.navigateTo({
                        url: "/pages/record/basketball-statis?productId=" + this.scoreDetail.productId
                    });
                },
                recordRank: function() {
                    wx.navigateTo({
                        url: "/pages/record/basketball-rank?productId=" + this.scoreDetail.productId
                    });
                }
            }, n.events = {}, i(n, t);
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
        }(o, t), e(o, [ {
            key: "onLoad",
            value: function(e) {
                this.machineId = e.machineId, this.scoreId = e.scoreId;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getGameDetail();
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
            key: "getGameDetail",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            machineId: this.machineId,
                            scoreId: this.scoreId
                        }, e.next = 3, n.default.recordDetail(t);

                      case 3:
                        r = e.sent, console.log(r), r && (this.scoreDetail = r.data.scoreDetail, this.scoreList = r.data.scoreList, 
                        this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = s.apply(this, arguments);
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
                return c.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/basketball-detail"));
}();