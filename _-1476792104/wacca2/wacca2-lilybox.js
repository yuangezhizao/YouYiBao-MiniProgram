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
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), n = a(require("./../components/wacca2-navigation.js")), r = a(require("./../components/custom-dialog.js")), o = (a(require("./../utils/wechat.js")), 
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
                return function r(o, a) {
                    try {
                        var i = t[o](a), c = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(c).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
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
        function a() {
            var e, t, o;
            c(this, a);
            for (var i = arguments.length, u = Array(i), l = 0; l < i; l++) u[l] = arguments[l];
            return t = o = s(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                wacca2Navigation: {
                    title: "Lily Box"
                },
                customDialog: {
                    type: "lilybox",
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    "xmlns:v-on": "",
                    "v-bind:title.sync": "title",
                    "v-bind:subTitle.sync": "subTitle"
                }
            }, o.$events = {
                customDialog: {
                    "v-on:confirm": "openConfirm"
                }
            }, o.components = {
                wacca2Navigation: n.default,
                customDialog: r.default
            }, o.props = {}, o.mixins = [], o.data = {
                screenWidth: 300,
                showAlert: !1,
                type: "",
                model: "",
                memberInfo: "",
                title: "",
                subTitle: "",
                model2: "",
                canOpen: !1
            }, o.computed = {}, o.methods = {
                openClick: function() {
                    this.canOpen && (this.showAlert = !0);
                },
                openConfirm: function() {
                    this.openGacha(), this.showAlert = !1;
                },
                recordButtonClick: function() {
                    wx.navigateTo({
                        url: "wacca2-lilybox-records?gid=" + this.model.gachaId
                    });
                }
            }, o.events = {}, s(o, t);
        }
        var u, l, p;
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
                this.type = e.type, setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                if (wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth;
                    }
                }), "open" == this.type) {
                    var r = JSON.parse(e.json);
                    this.model2 = r;
                    for (var o = [ 0, 0, 0, 0 ], a = 0; a < r.rarity; a++) o[a] = 1;
                    console.log(o), this.model2.start = o, this.getData();
                } else this.getData();
                this.getMemberInfo();
            }
        }, {
            key: "getData",
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.getGachaListWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.model = t.data[0]);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.memberInfoWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.title = "将会消耗" + this.model.price + "WP", 
                        this.subTitle = t.data.waccaPoint + "WP", this.canOpen = this.model.price <= t.data.waccaPoint, 
                        this.subTitle = t.data.waccaPoint + "WP  →  " + (t.data.waccaPoint - this.model.price) + "WP", 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "openGacha",
            value: (u = i(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            gid: this.model.gachaId
                        }, e.next = 3, o.default.openGachaWacca2(t);

                      case 3:
                        1 == (n = e.sent).code ? (r = JSON.stringify(n.data), wx.navigateTo({
                            url: "wacca2-lilybox?type=open&json=" + r
                        }), this.$apply()) : wx.showToast({
                            title: n.message,
                            icon: "none"
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-lilybox"));
}();