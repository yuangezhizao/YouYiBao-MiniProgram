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
    }(), t = i(require("./../npm/wepy/lib/wepy.js")), n = i(require("./../components/wacca2-navigation.js")), r = i(require("./../utils/wacca-api.js")), a = i(require("./../components/custom-dialog.js"));
    i(require("./../utils/wechat.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
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
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function i() {
            var e, t, r;
            c(this, i);
            for (var o = arguments.length, u = Array(o), l = 0; l < o; l++) u[l] = arguments[l];
            return t = r = s(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "领航员"
                },
                customDialog: {
                    "xmlns:v-on": "",
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "更换领航员",
                    "v-bind:screenWidth.sync": "screenWidth",
                    isWacca2: "true",
                    "v-bind:subTitle.sync": "selectName",
                    desc: "该领航员一开始就拥有",
                    sureImage: "http://yyb-oss.universal-space.cn/imgs/wacca2/common/change.png",
                    type: "wacca2"
                }
            }, r.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, r.components = {
                wacca2Navigation: n.default,
                customDialog: a.default
            }, r.mixins = [], r.data = {
                screenWidth: 300,
                memberInfo: "",
                selectItem: "",
                selectName: "",
                arr: [],
                itemWidth: 100,
                itemHeight: 110,
                showAlert: !1
            }, r.computed = {}, r.methods = {
                itemClick: function(e) {
                    this.selectItem = e, this.selectName = this.selectItem.naviCharacterName, this.showAlert = !0;
                },
                confirm: function() {
                    console.log("选择id为" + this.selectItem.id), this.setNaviCharacter();
                }
            }, r.events = {}, s(r, t);
        }
        var u, l, f;
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
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth, n.itemWidth = (e.screenWidth - 100) / 2, n.itemHeight = n.itemWidth + 20;
                    }
                });
            }
        }, {
            key: "onShow",
            value: function() {
                this.loadData(), this.getMemberInfo();
            }
        }, {
            key: "loadData",
            value: (f = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("!!"), e.next = 3, r.default.getGuideListWacca2();

                      case 3:
                        1 == (t = e.sent).code && (this.arr = t.data, this.$apply(), console.log("领航员列表", t));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (l = o(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.memberInfoWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "setNaviCharacter",
            value: (u = o(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, n = {
                            value: this.selectItem.navicharacterId
                        }, e.next = 4, r.default.setUserNavicharacterWacca2(n);

                      case 4:
                        1 == e.sent.code && (this.showAlert = !1, this.$apply(), wx.showToast({
                            title: "设置成功",
                            icon: "success",
                            complete: function() {
                                t.getMemberInfo();
                            }
                        }));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-guide"));
}();