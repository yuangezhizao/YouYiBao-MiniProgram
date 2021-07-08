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
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), n = a(require("./../components/wacca2-navigation.js")), r = a(require("./../utils/wacca-api.js"));
    a(require("./../utils/wechat.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function a() {
            var e, t, r;
            o(this, a);
            for (var c = arguments.length, u = Array(c), s = 0; s < c; s++) u[s] = arguments[s];
            return t = r = i(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "闸门列表"
                }
            }, r.$events = {}, r.components = {
                wacca2Navigation: n.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                gateArr: []
            }, r.computed = {}, r.methods = {
                itemClick: function(e) {
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-gate-detail?json=" + t
                    });
                }
            }, r.events = {}, i(r, t);
        }
        var c, u;
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
                }), this.getData();
            }
        }, {
            key: "getData",
            value: (c = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getGateListWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.gateArr = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = c.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(a, o) {
                        try {
                            var i = e[a](o), c = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(c).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        t(c);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(c, "wacca2/wacca2-gate"));
}();