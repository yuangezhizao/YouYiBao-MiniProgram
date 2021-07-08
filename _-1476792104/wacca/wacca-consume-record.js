!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
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
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), r = a(require("./../components/custom-statusbar.js")), n = a(require("./../utils/wacca-api.js"));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(a, o) {
                    try {
                        var s = t[a](o), i = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!s.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var u = function(t) {
        function a() {
            var e, t, n;
            s(this, a);
            for (var o = arguments.length, u = Array(o), c = 0; c < o; c++) u[c] = arguments[c];
            return t = n = i(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(u))), 
            n.config = {
                navigationStyle: "custom"
            }, n.$repeat = {}, n.$props = {
                customStatusbar: {
                    title: "消费记录"
                }
            }, n.$events = {}, n.components = {
                customStatusbar: r.default
            }, n.mixins = [], n.data = {
                currentTab: 0,
                navbar: [ "购买记录", "使用记录" ],
                pageNo: 1,
                pageSize: 5,
                canLoadMore: !0,
                buyRecord: [],
                useRecord: []
            }, n.computed = {}, n.methods = {
                navbarTap: function(e) {
                    if (this.currentTab != e.currentTarget.dataset.index) {
                        switch (this.currentTab = e.currentTarget.dataset.index, this.currentTab) {
                          case 0:
                            this.getGoodsOrderList();
                            break;

                          case 1:
                            this.getUseGoodsList();
                        }
                        this.pageNo = 1, this.canLoadMore = !0;
                    }
                }
            }, n.events = {}, i(n, t);
        }
        var u, c;
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
            value: function() {
                this.getGoodsOrderList();
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, 0 == this.currentTab ? this.getGoodsOrderList() : this.getUseGoodsList());
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
            key: "getGoodsOrderList",
            value: (c = o(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, n.default.goodsOrderList(t);

                      case 3:
                        if (1 != (r = e.sent).code) {
                            e.next = 9;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.buyRecord = r.data : this.buyRecord = this.buyRecord.concat(r.data);

                      case 9:
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "getUseGoodsList",
            value: (u = o(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, n.default.useGoodsList(t);

                      case 3:
                        if (1 != (r = e.sent).code) {
                            e.next = 9;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.useRecord = r.data : this.useRecord = this.useRecord.concat(r.data);

                      case 9:
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), a;
    }(t.default.page);
    exports.default = u;
}();