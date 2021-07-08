function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, i) {
                try {
                    var s = t[n](i), o = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
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
        for (var a = 0; a < t.length; a++) {
            var r = t[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, a, r) {
        return a && e(t.prototype, a), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), danceTrack = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                leftIcon: "true",
                title: "曲目大全"
            }
        }, r.$events = {}, r.components = {
            statusbar: _matchStatusbar2.default
        }, r.data = {
            currentTab: 0,
            navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
            musicGrade: 0,
            trackList: [],
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 20,
            trackName: ""
        }, r.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                1 == this.currentTab ? this.musicGrade = 1 : 2 == this.currentTab ? this.musicGrade = 2 : this.musicGrade = 0, 
                this.pageNo = 1, this.canLoadMore = !0, this.trackList = [], this.getListDance());
            },
            trackRank: function(e) {
                wx.navigateTo({
                    url: "/pages/record/dance-rank?musicId=" + e + "&musicGrade=" + this.musicGrade
                });
            },
            getTrackName: function(e) {
                console.log(e), this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, 
                this.canLoadMore = !0, this.getListDance());
            },
            searchTrack: function() {
                "" != this.trackName && this.getListDance();
            }
        }, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getListDance();
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
            this.canLoadMore && (this.pageNo++, this.getListDance());
        }
    }, {
        key: "getListDance",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            isLocks: this.musicGrade,
                            name: this.trackName,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _konamiApi2.default.listDance(t);

                      case 3:
                        if (a = e.sent, 1 == a.code) {
                            e.next = 7;
                            break;
                        }
                        e.next = 16;
                        break;

                      case 7:
                        if (!a.data) {
                            e.next = 14;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        1 == this.pageNo ? this.trackList = a.data : this.trackList = this.trackList.concat(a.data), 
                        e.next = 15;
                        break;

                      case 14:
                        this.trackList = "";

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(danceTrack, "pages/record/dance-track"));