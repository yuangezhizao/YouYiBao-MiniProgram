!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
        };
    }(), t = n(require("./../../npm/wepy/lib/wepy.js")), a = n(require("./../../components/match-statusbar.js")), r = n(require("./../../utils/konami-api.js"));
    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function r(n, o) {
                    try {
                        var i = t[n](o), s = i.value;
                    } catch (e) {
                        return void a(e);
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
    var u = function(t) {
        function n() {
            var e, t, r;
            i(this, n);
            for (var o = arguments.length, u = Array(o), c = 0; c < o; c++) u[c] = arguments[c];
            return t = r = s(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(u))), 
            r.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, r.$repeat = {}, r.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "消费记录"
                }
            }, r.$events = {}, r.components = {
                statusbar: a.default
            }, r.data = {
                currentTab: 0,
                navbar: [ "可使用", "已使用", "已退款", "消费记录" ],
                pageNo: 1,
                pageSize: 10,
                canLoadMore: !0,
                tempList: [],
                packageList: []
            }, r.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    this.pageNo = 1, this.canLoadMore = !0, this.currentTab < 3 ? (this.getMemberPackage(), 
                    this.packageList = "") : this.getRecordList());
                },
                preRefund: function(e) {
                    wx.navigateTo({
                        url: "/pages/mine/my-eam-refund?refundNo=" + e
                    });
                }
            }, s(r, t);
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function() {
                this.getMemberPackage();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (console.log("走了这里"), this.pageNo++, this.getRecordList());
            }
        }, {
            key: "getMemberPackage",
            value: (c = o(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            status: this.currentTab + 1,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.userPackageList(t);

                      case 3:
                        if (1 != (a = e.sent).code) {
                            e.next = 9;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.packageList = a.data : this.packageList = this.packageList.concat(a.data);

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
            key: "getRecordList",
            value: (u = o(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.userPackageBalance(t);

                      case 3:
                        if (a = e.sent, console.log("记录", a), 1 != a.code) {
                            e.next = 10;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 9;
                            break;
                        }
                        return e.abrupt("return");

                      case 9:
                        1 == this.pageNo ? this.tempList = a.data : this.tempList = this.tempList.concat(a.data);

                      case 10:
                        this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return u.apply(this, arguments);
            })
        } ]), n;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/mine/my-eam-records"));
}();