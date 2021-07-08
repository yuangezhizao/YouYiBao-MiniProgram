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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/custom-statusbar.js")), r = o(require("./../../utils/wacca-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
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
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(t) {
        function o() {
            var e, t, r;
            i(this, o);
            for (var a = arguments.length, c = Array(a), u = 0; u < a; u++) c[u] = arguments[u];
            return t = r = s(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(c))), 
            r.config = {
                navigationStyle: "custom"
            }, r.$repeat = {}, r.$props = {
                customStatusbar: {
                    "xmlns:v-bind": "",
                    "v-bind:title.sync": "title"
                }
            }, r.$events = {}, r.components = {
                customStatusbar: n.default
            }, r.mixins = [], r.data = {
                title: "",
                recordType: "",
                itemId: "",
                pageNo: 0,
                pageSize: 10,
                goodsRecordList: [],
                memberInfo: [],
                goodsNum: 0
            }, r.computed = {}, r.methods = {
                clickEvent: function() {
                    "vip" == this.recordType ? wx.navigateTo({
                        url: "/pages/wacca/wacca-vip-recharge"
                    }) : wx.navigateBack({
                        delta: 1
                    });
                }
            }, r.events = {}, s(r, t);
        }
        var c, u, p;
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
                switch (this.recordType = e.type, this.itemId = e.itemId, this.goodsNum = e.goodsNum, 
                e.type) {
                  case "vip":
                    this.title = "VIP次数记录";
                    break;

                  case "bb":
                    this.title = "Boost Badge";
                    break;

                  case "bbs":
                    this.title = "Boost Badge S";
                    break;

                  case "ex":
                    this.title = "EX ticket 记录";
                }
            }
        }, {
            key: "onShow",
            value: function() {
                "vip" == this.recordType ? (this.getMemberInfo(), this.getVipCountLog()) : this.getGoodsLog();
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
            key: "getMemberInfo",
            value: (p = a(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, r.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getGoodsLog",
            value: (u = a(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            itemId: this.itemId
                        }, e.next = 3, r.default.goodsLog(t);

                      case 3:
                        1 == (n = e.sent).code && (this.goodsRecordList = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "getVipCountLog",
            value: (c = a(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {}, e.next = 3, r.default.vipCountLog(t);

                      case 3:
                        1 == (n = e.sent).code && (this.goodsRecordList = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/wacca/wacca-record"));
}();