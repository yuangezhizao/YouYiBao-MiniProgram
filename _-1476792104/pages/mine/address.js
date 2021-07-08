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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), n = i(require("./../../utils/api.js")), r = (i(require("./../../utils/environment.js")), 
    i(require("./../../utils/units.js")), i(require("./../../utils/wechat.js")), i(require("./../../components/custom-statusbar.js")));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, a) {
                    try {
                        var s = t[i](a), o = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(o).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(o);
                }("next");
            });
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function i() {
            var e, t, n;
            s(this, i);
            for (var a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
            return t = n = o(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "收件地址"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default
            }, n.mixins = [], n.data = {
                list: [],
                screenHeight: 500,
                isSelect: !1
            }, n.computed = {}, n.methods = {
                itemClick: function(e) {
                    0 != this.isSelect && (this.$parent.globalData.selectAddress = e, wx.navigateBack());
                },
                addNewAddress: function() {
                    wx.navigateTo({
                        url: "address-edict"
                    });
                },
                deleteClick: function(e) {
                    var t = this;
                    wx.showModal({
                        title: "温馨提示",
                        content: "是否确定删除此地址",
                        success: function(n) {
                            n.confirm && t.deleteData(e);
                        }
                    });
                },
                editClick: function(e) {
                    var t = JSON.stringify(e), n = encodeURIComponent(t);
                    wx.navigateTo({
                        url: "address-edict?json=" + n
                    });
                },
                setDefault: function(e) {
                    var t = this, n = "是否确定将此地址设置为默认地址";
                    1 == e.isdefault && (n = "是否确定将此地址设置为非默认地址"), wx.showModal({
                        title: "温馨提示",
                        content: n,
                        success: function(n) {
                            n.confirm && t.newData(e);
                        }
                    });
                }
            }, n.events = {}, o(n, t);
        }
        var u, c, l;
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
                wx.getSystemInfo({
                    success: function(e) {
                        t.screenHeight = e.screenHeight;
                    }
                }), e.select && 1 == e.select && (this.isSelect = !0);
            }
        }, {
            key: "onShow",
            value: function() {
                this.getData();
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
            key: "getData",
            value: (l = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.getAddress();

                      case 2:
                        (t = e.sent).data ? this.list = t.data : this.list = [], this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "newData",
            value: (c = a(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = {
                            name: t.name,
                            phone: t.phone,
                            address: t.address,
                            isdefault: 1 == t.isdefault ? 0 : 1,
                            province: "1",
                            city: "1",
                            town: "1",
                            id: t.id
                        }, e.next = 3, n.default.putAddress(r);

                      case 3:
                        1 == e.sent.code && this.getData();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return c.apply(this, arguments);
            })
        }, {
            key: "deleteData",
            value: (u = a(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, n.default.deleteAddress({
                            id: t.id
                        });

                      case 2:
                        1 == e.sent.code && this.getData();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function(e) {
                return u.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/mine/address"));
}();