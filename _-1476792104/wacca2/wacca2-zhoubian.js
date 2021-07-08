!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), n = a(require("./../components/wacca2-navigation.js")), r = (a(require("./../utils/wechat.js")), 
    a(require("./../utils/wacca-api.js")));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
                    try {
                        var o = t[a](i), c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(c).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(c);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function a() {
            var e, t, r;
            o(this, a);
            for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
            return t = r = c(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "周边兑换活动"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: n.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                arr: [],
                exlainStr: "",
                topImage: ""
            }, r.computed = {}, r.methods = {
                itemClick: function(e) {
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-zhoubian-detail?json=" + t
                    });
                }
            }, r.events = {}, c(r, t);
        }
        var u, s, l;
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
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth;
                    }
                });
            }
        }, {
            key: "onShow",
            value: function() {
                this.getMsg();
            }
        }, {
            key: "getData",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.activityStoreWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.arr = t.data, this.getOnline(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getMsg",
            value: (s = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.activityExplainWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.exlainStr = t.data.description, this.topImage = t.data.img, 
                        this.getData(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return s.apply(this, arguments);
            })
        }, {
            key: "getOnline",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, n, a, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.activityExplainWacca2({
                            line: 1
                        });

                      case 2:
                        if (1 == (t = e.sent).code && null != t.data && t.data.length > 0) for (this.id = t.data[0].id, 
                        n = 0; n < t.data.length; n++) a = t.data[n], i = {
                            path: a.img,
                            userPoint: null == a.userPoint ? 0 : a.userPoint,
                            storeName: a.description,
                            id: a.id,
                            line: 1
                        }, this.arr.splice(0, 0, i), this.$apply();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-zhoubian"));
}();