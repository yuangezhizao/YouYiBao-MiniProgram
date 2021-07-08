function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function a(r, i) {
                try {
                    var o = e[r](i), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
                    a("next", t);
                }, function(t) {
                    a("throw", t);
                });
                t(s);
            }
            return a("next");
        });
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaMachine = function(t) {
    function e() {
        var t, n, a, r;
        _classCallCheck(this, e);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            customStatusbar: {
                title: "全国排行"
            }
        }, a.$events = {}, a.components = {
            customStatusbar: _customStatusbar2.default
        }, a.mixins = [], a.data = {
            navbar: [ "NORMAL", "HARD", "EXPERT" ],
            currentTab: 0,
            rankList: [],
            top3: [],
            rankInfo: "",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10,
            fontSize: 0
        }, a.computed = {}, a.methods = {
            navbarTap: function(t) {
                this.currentTab != t.currentTarget.dataset.index && (this.currentTab = t.currentTarget.dataset.index, 
                this.pageNo = 1, this.anLoadMore = !0, this.getStatisRank());
            }
        }, a.events = {}, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            this.getStatisRank();
        }
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "onShareAppMessage",
        value: function(t) {
            return {
                title: "关注游艺宝，发现更多精彩",
                path: "/pages/index/index",
                imageUrl: "/assets/imgs/share.png",
                success: function(t) {
                    console.log("转发成功！");
                },
                fail: function(t) {
                    return console.log(t.errMsg);
                }
            };
        }
    }, {
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.getStatisRank());
        }
    }, {
        key: "getStatisRank",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            musicGrade: this.currentTab + 1
                        }, t.next = 3, _waccaApi2.default.statisRank(e);

                      case 3:
                        if (n = t.sent, 1 != n.code) {
                            t.next = 13;
                            break;
                        }
                        if ((!n.data.rankList || n.data.rankList.length < this.pageSize) && (this.canLoadMore = !1), 
                        n.data.rankList) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.rankList = n.data.rankList : this.rankList = this.rankList.concat(n.data.rankList), 
                        this.rankInfo = n.data.rankInfo, this.rankInfo.rank <= 99 ? this.fontSize = 60 : this.rankInfo.rank <= 999 ? this.fontSize = 40 : this.fontSize = 30, 
                        this.top3 = this.rankList.slice(0, 3), this.$apply();

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaMachine, "pages/wacca/wacca-rank"));