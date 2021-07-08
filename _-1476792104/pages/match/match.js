function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
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
            }
            return a("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _customTabbar = require("./../../components/custom-tabbar.js"), _customTabbar2 = _interopRequireDefault(_customTabbar), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchCard = require("./../../components/match-card.js"), _matchCard2 = _interopRequireDefault(_matchCard), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), match = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {
            arenaList: {
                com: "arenaCard",
                props: "item"
            },
            matchList: {
                com: "matchCard",
                props: "item"
            }
        }, a.$props = {
            arenaCard: {
                "xmlns:v-bind": {
                    value: "",
                    for: "arenaList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "arenaList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                type: {
                    value: "arena",
                    for: "arenaList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "arenaList",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            matchCard: {
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                type: {
                    value: "match",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            }
        }, a.$events = {
            arenaCard: {
                "v-on:eventHandle": "arenaDetail"
            },
            matchCard: {
                "v-on:eventHandle": "matchDetail"
            }
        }, a.components = {
            customTabbar: _customTabbar2.default,
            statusbar: _matchStatusbar2.default,
            matchCard: _matchCard2.default,
            arenaCard: _matchCard2.default
        }, a.mixins = [], a.data = {
            eventList: [],
            cardCur: 0,
            matchList: [],
            arenaList: [],
            statusBarHeight: ""
        }, a.computed = {}, a.methods = {
            cardSwiper: function(e) {
                this.cardCur = e.detail.current;
            },
            redirectTo: function(e) {
                wx.navigateTo({
                    url: e
                });
            },
            eventDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/match/activity?eventId=" + e.id
                });
            },
            matchDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/match/match-detail?eventId=" + e.eventId
                });
            },
            arenaDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/match/arena-detail?eventId=" + e.eventId
                });
            }
        }, a.events = {}, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.statusBarHeight = this.$parent.globalData.statusBarHeight;
        }
    }, {
        key: "onShow",
        value: function() {
            this.eventListJackpot(), this.getEventListArena(), this.getEventList();
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
        key: "eventListJackpot",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.eventListJackpot(t);

                      case 3:
                        n = e.sent, 1 == n.code && (this.eventList = n.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getEventList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _api2.default.eventList(t);

                      case 3:
                        for (n = e.sent, a = n.data, r = 0; r < a.length; r++) a[r].beginTime = a[r].beginTime.substring(0, 10), 
                        a[r].endTime = a[r].endTime.substring(0, 10);
                        this.matchList = a, this.$apply(), console.log("赛事列表", n);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getEventListArena",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, a, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: 1,
                            pageSize: 3
                        }, e.next = 3, _konamiApi2.default.eventList(t);

                      case 3:
                        for (n = e.sent, a = n.data, r = 0; r < a.length; r++) a[r].beginTime = a[r].beginTime.substring(0, 10), 
                        a[r].endTime = a[r].endTime.substring(0, 10);
                        this.arenaList = a, this.$apply(), console.log("ARENA大赛列表", n);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(match, "pages/match/match"));