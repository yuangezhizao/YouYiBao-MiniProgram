function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, s) {
                try {
                    var o = t[n](s), i = o.value;
                } catch (e) {
                    return void r(e);
                }
                if (!o.done) return Promise.resolve(i).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _star = require("./../../components/star.js"), _star2 = _interopRequireDefault(_star), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaTrophy = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, o = Array(s), i = 0; i < s; i++) o[i] = arguments[i];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {
            trophyList: {
                com: "star",
                props: ""
            }
        }, a.$props = {
            star: {
                "xmlns:v-bind": {
                    value: "",
                    for: "trophyList",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:starNumber.sync": {
                    value: "item.star",
                    for: "trophyList",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            },
            customStatusbar: {
                title: "我的奖杯"
            },
            star1: {
                starNumber: "1"
            },
            star2: {
                starNumber: "2"
            },
            star3: {
                starNumber: "3"
            },
            star4: {
                starNumber: "4"
            }
        }, a.$events = {}, a.components = {
            customStatusbar: _customStatusbar2.default,
            star: _star2.default,
            star1: _star2.default,
            star2: _star2.default,
            star3: _star2.default,
            star4: _star2.default
        }, a.mixins = [], a.data = {
            navbar: [ "获奖统计", "奖杯一览" ],
            currentTab: 0,
            seasonIdsList: [],
            seasonId: 0,
            userTrophyData: "",
            trophyList: [ {
                label: !0,
                name: "初学者进阶",
                star: 1
            }, {
                label: !1,
                name: "通往中级者的道路",
                star: 2
            }, {
                label: !1,
                name: "中级者进阶",
                star: 3
            }, {
                label: !1,
                name: "中级者进阶",
                star: 4
            } ]
        }, a.computed = {}, a.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index);
            },
            trophyDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-trophy-detail?trophyRarity=" + e + "&seasonId=" + this.seasonId
                });
            },
            changeSeason: function(e) {
                var t = e.detail.current;
                this.seasonId = this.seasonIdsList[t], this.getUserTrophyStatis();
            }
        }, a.events = {}, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getSeasonIds();
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
        key: "getSeasonIds",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.seasonIds();

                      case 2:
                        t = e.sent, 1 == t.code && (this.seasonIdsList = t.data, this.seasonId = this.seasonIdsList[0], 
                        this.getUserTrophyStatis(), this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getUserTrophyStatis",
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
                            seasonId: this.seasonId
                        }, e.next = 3, _waccaApi2.default.userTrophyStatis(t);

                      case 3:
                        r = e.sent, 1 == r.code && (this.userTrophyData = r.data, this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaTrophy, "pages/wacca/wacca-trophy"));