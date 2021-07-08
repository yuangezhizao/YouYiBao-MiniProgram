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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/wacca2-navigation.js")), r = o(require("./../utils/wacca-api.js")), a = o(require("./../components/custom-dialog.js"));
    o(require("./../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, o) {
                    try {
                        var i = t[a](o), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function o() {
            var e, t, r;
            s(this, o);
            for (var i = arguments.length, u = Array(i), l = 0; l < i; l++) u[l] = arguments[l];
            return t = r = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                wacca2Navigation: {
                    title: "我的铭牌"
                },
                customDialog: {
                    "xmlns:v-on": "",
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    "v-bind:screenWidth.sync": "screenWidth",
                    title: "更换铭牌",
                    isWacca2: "true",
                    "v-bind:subTitle.sync": "selectName",
                    "v-bind:desc.sync": "subTitle",
                    "v-bind:image.sync": "selectImg",
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
                arr: [],
                alertTxt: "xxxx",
                showAlert: !1,
                memberInfo: "",
                selectItem: "",
                selectName: "",
                selectImg: "",
                subTitle: ""
            }, r.computed = {}, r.methods = {
                changeClick: function(e) {
                    this.selectItem = e, this.selectName = e.nameplateName, this.selectImg = e.img, 
                    this.subTitle = e.nameplateDescription, this.showAlert = !0;
                },
                confirm: function() {
                    console.log("选择id为" + this.selectItem.id), this.setUserNamePlate();
                }
            }, r.events = {}, c(r, t);
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
        }(o, t), e(o, [ {
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
                this.getMemberInfo(), this.getUserNamePlateList();
            }
        }, {
            key: "getUserNamePlateList",
            value: (f = i(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.getUserNameplateListWacca2();

                      case 2:
                        1 == (t = e.sent).code && (this.arr = t.data, this.$apply(), console.log("铭牌列表", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "setUserNamePlate",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, n = {
                            value: this.selectItem.nameplateId
                        }, e.next = 4, r.default.setUserNameplatetWacca2(n);

                      case 4:
                        1 == (a = e.sent).code && (this.showAlert = !1, this.$apply(), wx.showToast({
                            title: "设置成功",
                            icon: "success",
                            complete: function() {
                                t.getMemberInfo();
                            }
                        }), console.log("铭牌列表", a));

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getMemberInfo",
            value: (u = i(regeneratorRuntime.mark(function e() {
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
                return u.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "wacca2/wacca2-logo"));
}();