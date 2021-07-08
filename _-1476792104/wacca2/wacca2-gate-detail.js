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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), r = o(require("./../components/wacca2-navigation.js")), n = o(require("./../utils/wacca-api.js"));
    o(require("./../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function o() {
            var e, t, n;
            i(this, o);
            for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return t = n = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                wacca2Navigation: {
                    title: "闸门详情"
                }
            }, n.$events = {}, n.components = {
                wacca2Navigation: r.default
            }, n.mixins = [], n.data = {
                screenWidth: 300,
                sugorokuInfo: "",
                progressWidth: 200,
                total: 800,
                current: 400,
                giftWidth: 60,
                currentLevel: 0,
                giftList: []
            }, n.computed = {}, n.methods = {}, n.events = {}, a(n, t);
        }
        var s, u;
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
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var r = this;
                wx.getSystemInfo({
                    success: function(e) {
                        r.screenWidth = e.screenWidth, r.progressWidth = e.screenWidth - 30 - 20 - 45, r.giftWidth = (e.screenWidth - 30 - 40) / 5;
                    }
                }), this.sugorokuInfo = JSON.parse(e.json), this.getData();
            }
        }, {
            key: "getData",
            value: (s = regeneratorRuntime.mark(function e() {
                var t, r, o, i, a, s, u, c, f, p;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            sid: this.sugorokuInfo.id
                        }, e.next = 3, n.default.userGateMessageWacca2(t);

                      case 3:
                        if (1 == (r = e.sent).code) {
                            for (o = r.data.userInfo, this.giftList = r.data.sugorokuInfo.rewards, this.currentLevel = o.pageNo, 
                            i = r.data.sugorokuInfo.pagenos, a = {}, s = 0; s < this.giftList.length; s++) this.giftList[s].isOpen = !1;
                            for (u = 0; u < o.pageNo; u++) this.giftList[u].isOpen = !0;
                            for (c = 0; c < i.length; c++) f = i[c], p = parseInt(this.currentLevel), parseInt(f.pageNo) == p && (a = f);
                            this.total = a.maxProgress, this.current = o.progress, this.$apply();
                        }

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function n(o, i) {
                        try {
                            var a = e[o](i), s = a.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "wacca2/wacca2-gate-detail"));
}();