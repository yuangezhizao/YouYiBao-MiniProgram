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
    }(), t = a(require("./../../npm/wepy/lib/wepy.js")), r = a(require("./../../utils/api.js")), n = (a(require("./../../utils/environment.js")), 
    a(require("./../../components/match-statusbar.js"))), o = a(require("./../../utils/konami-api.js"));
    a(require("./../../utils/wechat.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, a) {
                    try {
                        var i = t[o](a), c = i.value;
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
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function a() {
            var e, t, r;
            c(this, a);
            for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            return t = r = u(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(i))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "舞律炫步"
                }
            }, r.$events = {}, r.components = {
                statusbar: n.default
            }, r.data = {
                productId: "",
                productName: "",
                productImage: "",
                recordList: [],
                memberState: [],
                isHideVip: !0
            }, r.methods = {
                danceTrack: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-track"
                    });
                },
                danceRecord: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-record?productId=" + this.productId + "&productImage=" + this.productImage
                    });
                },
                danceRank: function() {
                    wx.navigateTo({
                        url: "/pages/record/dance-rank"
                    });
                },
                exchangeMember: function() {
                    wx.navigateTo({
                        url: "/pages/machine/machine-dance?isScan=0"
                    });
                },
                nearbyShopMachine: function() {
                    wx.navigateTo({
                        url: "/pages/record/nearby-shop-machine?productId=" + this.productId + "&productName=" + ("" != this.recordList ? this.recordList.productName : this.productName)
                    });
                }
            }, u(r, t);
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
        }(a, t), e(a, [ {
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
            value: (p = i(regeneratorRuntime.mark(function e() {
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
            value: (s = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.getMemberInfoDance();

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
        } ]), a;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/dance-statis"));
}();