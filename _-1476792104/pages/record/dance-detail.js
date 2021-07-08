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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), r = o(require("./../../components/match-statusbar.js")), n = o(require("./../../utils/api.js")), a = o(require("./../../utils/konami-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var i = t[a](o), c = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(c).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, n;
            c(this, o);
            for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
            return t = n = s(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "战绩详情"
                }
            }, n.$events = {}, n.components = {
                statusbar: r.default
            }, n.data = {
                machineId: "",
                scoreId: "",
                scoreDetail: "",
                trackRank: ""
            }, n.methods = {
                rank: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-rank?musicId=" + this.scoreDetail.musicId + "&musicGrade=" + this.scoreDetail.musicGrade
                    });
                },
                statisRecord: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-statis?productId=" + this.scoreDetail.productId
                    });
                },
                track: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-track"
                    });
                }
            }, s(n, t);
        }
        var u, l;
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
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            machineId: this.machineId,
                            scoreId: this.scoreId
                        }, e.next = 3, n.default.recordDetail(t);

                      case 3:
                        r = e.sent, console.log(r), 1 == r.code && (this.scoreDetail = r.data, this.getDanceHiscore(r), 
                        this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getDanceHiscore",
            value: (u = i(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            musicId: t.data.musicId,
                            musicGrade: t.data.musicGrade
                        }, e.next = 3, a.default.hiscoreDance(r);

                      case 3:
                        1 != (n = e.sent).code || (this.trackRank = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return u.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/record/dance-detail"));
}();