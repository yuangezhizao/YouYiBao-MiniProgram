function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(a, i) {
                try {
                    var o = t[a](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
            }
            return r("next");
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
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), musicRank = function(e) {
    function t() {
        var e, n, r, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "战绩排行榜"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default
        }, r.data = {
            currentTab: 0,
            navbar: [ "单人简单(NOV)", "单人一般(ADV)", "双人简单(NOV)", "双人一般(ADV)" ],
            rankList: [],
            musicId: 0,
            rankInfo: "",
            top3: [],
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10,
            fontSize: 0
        }, r.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                this.pageNo = 1, this.canLoadMore = !0, this.getDanceRank());
            }
        }, a = n, _possibleConstructorReturn(r, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.musicId = e.musicId, this.currentTab = e.musicGrade, this.getDanceRank();
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
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.getDanceRank());
        }
    }, {
        key: "getDanceRank",
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
                            musicId: this.musicId,
                            musicGrade: this.currentTab,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _konamiApi2.default.rankDance(t);

                      case 3:
                        if (n = e.sent, 1 == n.code) {
                            e.next = 7;
                            break;
                        }
                        e.next = 15;
                        break;

                      case 7:
                        if ((!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.rankInfo = n.data.rankInfo, this.rankInfo.rank <= 99 ? this.fontSize = 60 : this.rankInfo.rank <= 999 ? this.fontSize = 40 : this.fontSize = 30, 
                        this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(musicRank, "pages/record/dance-rank"));