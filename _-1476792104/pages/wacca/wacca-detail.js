function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, s) {
                try {
                    var i = t[n](s), o = i.value;
                } catch (e) {
                    return void a(e);
                }
                if (!i.done) return Promise.resolve(o).then(function(e) {
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _customProgress = require("./../../components/custom-progress.js"), _customProgress2 = _interopRequireDefault(_customProgress), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaMachine = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var s = arguments.length, i = Array(s), o = 0; o < s; o++) i[o] = arguments[o];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            customStatusbar: {
                title: "华卡音舞"
            },
            customProgress: {
                "xmlns:v-bind": "",
                "v-bind:days.sync": "days"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default,
            customProgress: _customProgress2.default
        }, r.mixins = [], r.data = {
            scoreDetail: "",
            machineId: "",
            scoreId: "",
            memberInfo: "",
            days: 0,
            navbar: [ "NORMAL", "HARD", "EXPERT" ],
            currentTab: 0,
            myStatisRankInfo: "",
            iconList: [],
            titleList: [],
            trophyList: []
        }, r.computed = {}, r.methods = {
            nearbyShopMachine: function() {
                wx.navigateTo({
                    url: "/pages/record/nearby-shop-machine?productId=" + this.scoreDetail.productId + "&productName=" + this.scoreDetail.productName
                });
            },
            changeAvatar: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-change-avatar"
                });
            },
            changeAchievement: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-achievement"
                });
            },
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                this.getMyStatisRank());
            },
            rank: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-rank"
                });
            },
            statisRecord: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-statis?productId=" + this.scoreDetail.productId
                });
            },
            track: function() {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-single-rank?musicId=" + this.scoreDetail.musicId
                });
            }
        }, r.events = {}, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.machineId = e.machineId, this.scoreId = e.scoreId;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getGameDetail(), this.getMemberInfo();
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
        key: "getGameDetail",
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
                            machineId: this.machineId,
                            scoreId: this.scoreId
                        }, e.next = 3, _api2.default.recordDetail(t);

                      case 3:
                        a = e.sent, console.log(a), 1 == a.code && (this.scoreDetail = a.data.scoreDetail, 
                        this.iconList = a.data.getItems.iconList, this.titleList = a.data.getItems.titleList, 
                        this.trophyList = a.data.getItems.trophyList, this.getMyStatisRank(), this.$apply());

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMemberInfo",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.memberInfoWacca();

                      case 2:
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.days = parseInt(t.data.validDays), 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMyStatisRank",
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
                            musicGrade: this.currentTab + 1,
                            musicId: this.scoreDetail.musicId
                        }, e.next = 3, _waccaApi2.default.myStatisRank(t);

                      case 3:
                        a = e.sent, 1 == a.code && (this.myStatisRankInfo = a.data, this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaMachine, "pages/wacca/wacca-detail"));