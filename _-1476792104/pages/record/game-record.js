function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function a(n, o) {
                try {
                    var i = t[n](o), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
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
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), addCard = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, a.$repeat = {}, a.$props = {
            statusbar: {
                leftIcon: "true",
                title: "游戏记录"
            }
        }, a.$events = {}, a.components = {
            statusbar: _matchStatusbar2.default
        }, a.data = {
            recordList: [],
            resultList: [],
            pageNo: 1,
            pageSize: 20,
            canLoadMore: !0,
            totalCount: 0
        }, a.methods = {
            gameDetail: function(e) {
                wx.navigateTo({
                    url: e.recordPage + "?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                });
            }
        }, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            var t = wx.getStorageSync("token");
            this.totalCount = "" != t ? e.totalCount : 0;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getRecordList();
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
            this.canLoadMore && (this.pageNo++, this.getRecordList());
        }
    }, {
        key: "getRecordList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r, a, n, o;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _api2.default.recordAllList(t);

                      case 3:
                        if (!(r = e.sent)) {
                            e.next = 17;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.recordList = r.data : this.recordList = this.recordList.concat(r.data), 
                        console.log("recordList", this.recordList), a = {}, this.recordList.forEach(function(e) {
                            var t = e.gameDate.substr(0, 10);
                            a[t] ? a[t].push(e) : a[t] = [ e ];
                        }), n = [];
                        for (o in a) n.push({
                            date: o,
                            data: a[o]
                        });
                        this.resultList = n, r.data.length < this.pageSize && (this.canLoadMore = !1), this.$apply();

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(addCard, "pages/record/game-record"));