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
                    var o = t[r](i), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(u);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchCard = require("./../../components/match-card.js"), _matchCard2 = _interopRequireDefault(_matchCard), _PaginationMixin = require("./../../mixins/PaginationMixin.js"), _PaginationMixin2 = _interopRequireDefault(_PaginationMixin), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), jackpotRank = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) o[u] = arguments[u];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.mixins = [ _PaginationMixin2.default, _userMixin2.default ], a.config = {
            navigationStyle: "custom",
            enablePullDownRefresh: !0
        }, a.components = {
            statusbar: _matchStatusbar2.default,
            matchCard: _matchCard2.default
        }, a.data = {
            windowHeight: 0,
            menuButtonTop: "",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10,
            poolRank: [],
            rankList: [],
            eventId: ""
        }, a.methods = {
            loadMore: function() {
                this.canLoadMore && (this.pageNo++, this.getMyPoolRank());
            },
            myPrize: function() {
                wx.navigateTo({
                    url: "/pages/match/my-prize"
                });
            },
            goBack: function() {
                wx.navigateBack({
                    delta: 1
                });
            },
            goHome: function() {
                wx.reLaunch({
                    url: "/pages/index/index"
                });
            }
        }, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = this, n = this;
            n.eventId = e.eventId, wx.getSystemInfo({
                success: function(e) {
                    n.windowHeight = e.windowHeight;
                }
            }), setTimeout(function() {
                t.menuButtonTop = t.$parent.globalData.menuButtonTop, t.$apply();
            }, 100), this.getMyPoolRank();
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
        key: "onPullDownRefresh",
        value: function() {
            this.getMyPoolRank(), setTimeout(function() {
                wx.stopPullDownRefresh();
            }, 1e3);
        }
    }, {
        key: "getMyPoolRank",
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
                            eventId: this.eventId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.myPoolRank(t);

                      case 3:
                        n = e.sent, 1 == n.code && (this.poolRank = n.data, (!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(jackpotRank, "pages/match/jackpot-rank"));