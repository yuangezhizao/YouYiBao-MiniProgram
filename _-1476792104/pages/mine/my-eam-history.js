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
    }(), t = o(require("./../../npm/wepy/lib/wepy.js")), n = o(require("./../../components/match-statusbar.js")), a = o(require("./../../utils/konami-api.js")), r = o(require("./../../utils/wacca-api.js")), i = o(require("./../../utils/units.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
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
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(t) {
        function o() {
            var e, t, a;
            c(this, o);
            for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
            return t = a = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(i))), 
            a.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, a.$repeat = {}, a.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "兑换记录"
                }
            }, a.$events = {}, a.components = {
                statusbar: n.default
            }, a.data = {
                exchangeList: [],
                pageNo: 1,
                pageSize: 10,
                canLoadMore: !0,
                type: ""
            }, a.methods = {}, u(a, t);
        }
        var p, h;
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
                var t = JSON.parse(decodeURIComponent(e.obj));
                this.type = t.type;
            }
        }, {
            key: "onShow",
            value: function() {
                "1" == this.type ? this.getDanceExchangeList() : this.getExchangeList();
            }
        }, {
            key: "onReachBottom",
            value: function() {
                this.canLoadMore && (this.pageNo++, this.getExchangeList());
            }
        }, {
            key: "getExchangeList",
            value: (h = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, a.default.exchangeList(t);

                      case 3:
                        1 == (n = e.sent).code && ((!n.data || n.data.items.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.exchangeList = n.data.items : this.exchangeList = this.exchangeList.concat(n.data.items), 
                        console.log(this.exchangeList), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getDanceExchangeList",
            value: (p = s(regeneratorRuntime.mark(function e() {
                var t, n, a, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, r.default.exchangeTicketLog(t);

                      case 3:
                        if (1 == (n = e.sent).code) {
                            for (a in (!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), 
                            n.data) n.data.hasOwnProperty(a) && ((o = n.data[a]).exchangeTime = i.default.formatTimeTwo(o.exchangeTime, "Y-M-D h:m:s"));
                            1 == this.pageNo ? this.exchangeList = n.data : this.exchangeList = this.exchangeList.concat(n.data), 
                            console.log(this.exchangeList), this.$apply();
                        }

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/mine/my-eam-history"));
}();