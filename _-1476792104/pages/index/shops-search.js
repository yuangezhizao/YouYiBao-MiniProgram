function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function o(a, n) {
                try {
                    var i = t[a](n), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(s);
            }
            return o("next");
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), indexShopsSearch = function(e) {
    function t() {
        var e, r, o, a;
        _classCallCheck(this, t);
        for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
        return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.config = {
            navigationStyle: "custom",
            backgroundColor: "#F2F9FF"
        }, o.$repeat = {}, o.$props = {
            statusbar: {
                leftIcon: "true",
                title: "更多门店"
            }
        }, o.$events = {}, o.components = {
            statusbar: _matchStatusbar2.default
        }, o.data = {
            storeName: "",
            storeList: [],
            pageNo: 1,
            pageSize: 20,
            canLoadMore: !0
        }, o.methods = {
            getStoreName: function(e) {
                this.storeName = e.detail.value;
            },
            seek: function() {
                "" != this.storeName && (this.pageNo = 1, this.storeList = [], this.getSearchStore(), 
                this.$apply());
            },
            storeDetail: function(e) {
                console.log(e), wx.setStorageSync("storeDetail", e), wx.navigateBack({
                    delta: 2
                });
            }
        }, a = r, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onReachBottom",
        value: function() {
            console.log(this.canLoadMore), this.canLoadMore && (this.pageNo++, this.getSearchStore());
        }
    }, {
        key: "getSearchStore",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.canLoadMore = !0, t = {
                            name: this.storeName,
                            type: 1,
                            regionid: 0,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 4, _api2.default.searchStore(t);

                      case 4:
                        r = e.sent, console.log(r), r && ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), 
                        1 == this.pageNo ? this.storeList = r.data : this.storeList = this.storeList.concat(r.data)), 
                        this.$apply();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(indexShopsSearch, "pages/index/shops-search"));