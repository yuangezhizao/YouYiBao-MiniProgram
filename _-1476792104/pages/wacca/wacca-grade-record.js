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
                    var i = t[n](o), c = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    a("next", e);
                }, function(e) {
                    a("throw", e);
                });
                e(c);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), waccaGradeRecord = function(e) {
    function t() {
        var e, r, a, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), c = 0; c < o; c++) i[c] = arguments[c];
        return r = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {}, a.$props = {
            customStatusbar: {
                title: "成绩记录"
            }
        }, a.$events = {}, a.components = {
            customStatusbar: _customStatusbar2.default
        }, a.mixins = [], a.data = {
            navbar: [ "按时间", "按得分" ],
            currentTab: 0,
            userMusicRate: "",
            productId: "",
            gameType: "gameDate",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 5,
            recordList: []
        }, a.computed = {}, a.methods = {
            navbarTap: function(e) {
                if (this.currentTab != e.currentTarget.dataset.index) {
                    switch (this.currentTab = e.currentTarget.dataset.index, this.currentTab) {
                      case 0:
                        this.gameType = "gameDate";
                        break;

                      case 1:
                        this.gameType = "score";
                    }
                    this.pageNo = 1, this.canLoadMore = !0, this.getMachineRecordList();
                }
            },
            recordDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/wacca/wacca-detail?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                });
            }
        }, a.events = {}, n = r, _possibleConstructorReturn(a, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.productId = e.productId, this.getMachineRecordList();
        }
    }, {
        key: "onShow",
        value: function() {
            this.getUserMusicRate();
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
            this.canLoadMore && (this.pageNo++, this.getMachineRecordList());
        }
    }, {
        key: "getUserMusicRate",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _waccaApi2.default.userMusicRate();

                      case 2:
                        t = e.sent, 1 == t.code && (this.userMusicRate = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getMachineRecordList",
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
                            productId: this.productId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            orderBy: this.gameType
                        }, e.next = 3, _api2.default.machineRecordList(t);

                      case 3:
                        if (r = e.sent, 1 != r.code) {
                            e.next = 10;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.recordList = r.data : this.recordList = this.recordList.concat(r.data), 
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaGradeRecord, "pages/wacca/wacca-grade-record"));