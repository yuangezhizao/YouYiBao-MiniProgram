function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, i) {
                try {
                    var s = t[n](i), o = s.value;
                } catch (e) {
                    return void r(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(o);
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
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), musicTrack = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            statusbar: {
                leftIcon: "true",
                title: "曲目大全"
            }
        }, a.$events = {}, a.components = {
            statusbar: _matchStatusbar2.default
        }, a.data = {
            currentTab: 0,
            navbar: [ "全部曲目", "已游玩曲目", "未游玩曲目" ],
            musicGrade: 0,
            trackList: [],
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 20,
            trackName: ""
        }, a.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                1 == this.currentTab ? this.musicGrade = 1 : 2 == this.currentTab ? this.musicGrade = 2 : this.musicGrade = 0, 
                this.trackList = [], this.pageNo = 1, this.canLoadMore = !0, this.getListMusic());
            },
            trackRank: function(e) {
                wx.navigateTo({
                    url: "/pages/record/music-rank?musicId=" + e + "&musicGrade=" + this.musicGrade
                });
            },
            getTrackName: function(e) {
                this.trackName = e.detail.value, 0 == e.detail.cursor && (this.pageNo = 1, this.canLoadMore = !0, 
                this.getListMusic());
            },
            searchTrack: function() {
                "" != this.trackName && this.getListMusic();
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getListMusic();
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
            this.canLoadMore && (this.pageNo++, this.getListMusic());
        }
    }, {
        key: "getListMusic",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            isLocks: this.musicGrade,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            name: this.trackName
                        }, e.next = 3, _konamiApi2.default.listMusic(t);

                      case 3:
                        if (r = e.sent, 1 == r.code) {
                            e.next = 7;
                            break;
                        }
                        e.next = 16;
                        break;

                      case 7:
                        if (!r.data) {
                            e.next = 14;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 11;
                            break;
                        }
                        return e.abrupt("return");

                      case 11:
                        1 == this.pageNo ? this.trackList = r.data : this.trackList = this.trackList.concat(r.data), 
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(musicTrack, "pages/record/music-track"));