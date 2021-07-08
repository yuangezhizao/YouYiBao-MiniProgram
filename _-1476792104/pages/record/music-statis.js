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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), r = i(require("./../../utils/api.js")), n = (i(require("./../../utils/environment.js")), 
    i(require("./../../utils/konami-api.js"))), o = i(require("./../../components/match-statusbar.js"));
    i(require("./../../utils/wechat.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, i) {
                    try {
                        var a = t[o](i), u = a.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!a.done) return Promise.resolve(u).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(u);
                }("next");
            });
        };
    }
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function i() {
            var e, t, r;
            u(this, i);
            for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
            return t = r = c(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(a))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "音律炫动"
                }
            }, r.$events = {}, r.components = {
                statusbar: o.default
            }, r.data = {
                productId: "",
                productName: "",
                productImage: "",
                memberState: "",
                recordList: [],
                isHideVip: !0
            }, r.methods = {
                musicLib: function() {
                    wx.navigateTo({
                        url: "/pages/record/music-track"
                    });
                },
                musicRecord: function() {
                    wx.navigateTo({
                        url: "/pages/record/music-record?productId=" + this.productId + "&productImage=" + this.productImage
                    });
                },
                musicRank: function() {
                    wx.navigateTo({
                        url: "/pages/record/music-rank"
                    });
                },
                exchangeMember: function() {
                    wx.navigateTo({
                        url: "/pages/machine/machine-music?isScan=0"
                    });
                },
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                    });
                }
            }, c(r, t);
        }
        var s, p;
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
        }(i, t), e(i, [ {
            key: "onLoad",
            value: function(e) {
                this.productId = e.productId, this.productName = e.productName, this.productImage = e.productImage;
                var t = wx.getStorageSync("isHideVip");
                console.log(JSON.stringify(t) + "====================="), this.isHideVip = t;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getUserRecordStatis(), this.getMemberState();
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
            key: "getUserRecordStatis",
            value: (p = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordList = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getMemberState",
            value: (s = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.getMemberInfoMusic();

                      case 2:
                        1 == (t = e.sent).code && (this.memberState = t.data), this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return s.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/music-statis"));
}();