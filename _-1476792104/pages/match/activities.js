function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function i(a, r) {
                try {
                    var o = t[a](r), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(s);
            }
            return i("next");
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
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchCard = require("./../../components/match-card.js"), _matchCard2 = _interopRequireDefault(_matchCard), _PaginationMixin = require("./../../mixins/PaginationMixin.js"), _PaginationMixin2 = _interopRequireDefault(_PaginationMixin), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), activities = function(e) {
    function t() {
        var e, n, i, a;
        _classCallCheck(this, t);
        for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return n = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        i.mixins = [ _PaginationMixin2.default, _userMixin2.default ], i.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, i.$repeat = {
            listData: {
                com: "matchCard",
                props: "item"
            }
        }, i.$props = {
            matchCard: {
                "xmlns:v-bind": {
                    value: "",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                type: {
                    value: "jackpot",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:eventStatus.once": {
                    value: "status",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            statusbar: {
                leftIcon: "true",
                title: "奖池活动"
            }
        }, i.$events = {
            matchCard: {
                "v-on:eventHandle": "activityDetail"
            }
        }, i.components = {
            statusbar: _matchStatusbar2.default,
            matchCard: _matchCard2.default
        }, i.data = {
            myJackpotInfo: "",
            status: 1,
            listData: [],
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 20
        }, i.methods = {
            changeTab: function(e) {
                this.status = e, this.myEventListJackpot(), this.$apply();
            },
            activityDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/match/activity?eventId=" + e.eventId
                });
            },
            myPrize: function() {
                wx.navigateTo({
                    url: "/pages/match/my-prize"
                });
            }
        }, a = n, _possibleConstructorReturn(i, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.myEventListJackpot();
        }
    }, {
        key: "onShow",
        value: function() {
            this.getMyJackpotInfo();
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
        key: "getMyJackpotInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.myJackpotInfo();

                      case 2:
                        t = e.sent, 1 == t.code && (this.myJackpotInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "myEventListJackpot",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, i, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            status: this.status,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.myEventListJackpot(t);

                      case 3:
                        if (n = e.sent, n.data) {
                            for (i = n.data, a = 0; a < i.length; a++) i[a].beginTime = i[a].beginTime.substring(0, 16), 
                            i[a].endTime = i[a].endTime.substring(0, 16);
                            this.listData = i, this.$apply();
                        } else this.listData = "", this.$apply();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(activities, "pages/match/activities"));