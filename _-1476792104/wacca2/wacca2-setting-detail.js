!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
        };
    }(), t = r(require("./../npm/wepy/lib/wepy.js")), n = r(require("./../components/wacca2-navigation.js")), a = r(require("./../utils/wacca-api.js"));
    r(require("./../utils/wechat.js"));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function a(r, i) {
                    try {
                        var o = t[r](i), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function r() {
            var e, t, a;
            o(this, r);
            for (var i = arguments.length, c = Array(i), u = 0; u < i; u++) c[u] = arguments[u];
            return t = a = s(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(c))), 
            a.config = {
                navigationStyle: "custom"
            }, a.$repeat = {}, a.$props = {
                wacca2Navigation: {
                    "xmlns:v-bind": "",
                    "v-bind:title.sync": "titleName"
                }
            }, a.$events = {}, a.components = {
                wacca2Navigation: n.default
            }, a.mixins = [], a.data = {
                screenWidth: 300,
                titleName: "设置..",
                dataList: [],
                type: 1
            }, a.computed = {}, a.methods = {
                buttonClick: function(e) {
                    var t = JSON.stringify(e);
                    wx.navigateTo({
                        url: "wacca2-setting-chose?json=" + t
                    });
                }
            }, a.events = {}, s(a, t);
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
        }(r, t), e(r, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                switch (wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth;
                    }
                }), parseInt(e.type)) {
                  case 0:
                    n.titleName = "游戏设置";
                    break;

                  case 1:
                    n.titleName = "显示设置";
                    break;

                  case 2:
                    n.titleName = "设计设置";
                    break;

                  case 3:
                    n.titleName = "声音设置";
                }
                this.type = parseInt(e.type) + 1;
            }
        }, {
            key: "onShow",
            value: function() {
                this.getOption();
            }
        }, {
            key: "getOption",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: this.type
                        }, e.next = 3, a.default.getSettingeWacca2(t);

                      case 3:
                        1 != (n = e.sent).code || (this.dataList = n.data, this.getSetData());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "getSetData",
            value: (c = i(regeneratorRuntime.mark(function e() {
                var t, n, r, i, o, s, c, u, p, l, f, h;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: this.type
                        }, e.next = 3, a.default.userSettingeWacca2(t);

                      case 3:
                        if (1 != (n = e.sent).code) ; else {
                            for (r = n.data, i = 0; i < this.dataList.length; i++) for (o = this.dataList[i], 
                            s = 0; s < r.length; s++) c = r[s], o.type == c.optionType && (o.desc = c);
                            for (u = 0; u < this.dataList.length; u++) for (p = this.dataList[u], l = p.desc.optionValue, 
                            f = 0; f < p.data.length; f++) (h = p.data[f]).value == l && (p.displayValue = h.display);
                            console.log(this.dataList), this.$apply();
                        }

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), r;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(c, "wacca2/wacca2-setting-detail"));
}();