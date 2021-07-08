!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    }(), t = r(require("./../../npm/wepy/lib/wepy.js")), n = r(require("./../../utils/api.js")), i = (r(require("./../../utils/environment.js")), 
    r(require("./../../utils/units.js")), r(require("./../../utils/wechat.js")), r(require("./../../components/custom-statusbar.js")));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(t) {
        function r() {
            var e, t, n;
            s(this, r);
            for (var a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
            return t = n = o(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "编辑收件地址"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: i.default
            }, n.mixins = [], n.data = {
                name: "",
                phone: "",
                detail: "",
                isEdit: !1,
                model: "",
                screenHeight: 500,
                default: !1
            }, n.computed = {}, n.methods = {
                setDefaultAdress: function() {
                    this.default = !this.default;
                },
                getName: function(e) {
                    this.name = e.detail.value;
                },
                getPhone: function(e) {
                    this.phone = e.detail.value;
                },
                getDetail: function(e) {
                    this.detail = e.detail.value;
                },
                sure: function() {
                    this.submit();
                }
            }, n.events = {}, o(n, t);
        }
        var a, u;
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
                if (wx.getSystemInfo({
                    success: function(e) {
                        t.screenHeight = e.screenHeight;
                    }
                }), e.json) {
                    this.isEdit = !0;
                    var n = JSON.parse(decodeURIComponent(e.json));
                    this.name = n.name, this.phone = n.phone, this.default = 1 == n.isdefault, this.detail = n.address, 
                    this.model = n, this.$apply();
                }
            }
        }, {
            key: "onShow",
            value: function() {}
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
            key: "submit",
            value: (a = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            name: this.name,
                            phone: this.phone,
                            address: this.detail,
                            isdefault: 1 == this.default ? 1 : 0,
                            province: "1",
                            city: "1",
                            town: "1"
                        }, console.log("=========" + JSON.stringify(t)), 1 != this.isEdit) {
                            e.next = 10;
                            break;
                        }
                        return t.id = this.model.id, e.next = 6, n.default.putAddress(t);

                      case 6:
                        1 == e.sent.code && (wx.showToast({
                            title: "编辑成功",
                            icon: "success"
                        }), wx.navigateBack({
                            delta: 1
                        })), e.next = 14;
                        break;

                      case 10:
                        return e.next = 12, n.default.addAddress(t);

                      case 12:
                        1 == e.sent.code && (wx.showToast({
                            title: "添加成功",
                            icon: "success"
                        }), wx.navigateBack({
                            delta: 1
                        }));

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), u = function() {
                var e = a.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function i(r, s) {
                        try {
                            var o = e[r](s), a = o.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!o.done) return Promise.resolve(a).then(function(e) {
                            i("next", e);
                        }, function(e) {
                            i("throw", e);
                        });
                        t(a);
                    }("next");
                });
            }, function() {
                return u.apply(this, arguments);
            })
        } ]), r;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(a, "pages/mine/address-edict"));
}();