function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
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
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaRecord = function(e) {
    function t() {
        var e, r, n, o;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
            customStatusbar: {
                "xmlns:v-bind": "",
                "v-bind:title.sync": "title"
            }
        }, n.$events = {}, n.components = {
            customStatusbar: _customStatusbar2.default
        }, n.mixins = [], n.data = {
            title: "",
            recordType: "",
            itemId: "",
            pageNo: 0,
            pageSize: 10,
            goodsRecordList: [],
            memberInfo: [],
            goodsNum: 0
        }, n.computed = {}, n.methods = {
            clickEvent: function() {
                "vip" == this.recordType ? wx.navigateTo({
                    url: "/pages/wacca/wacca-vip-recharge"
                }) : wx.navigateBack({
                    delta: 1
                });
            }
        }, n.events = {}, o = r, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            switch (this.recordType = e.type, this.itemId = e.itemId, this.goodsNum = e.goodsNum, 
            e.type) {
              case "vip":
                this.title = "VIP次数记录";
                break;

              case "bb":
                this.title = "Boost Badge";
                break;

              case "bbs":
                this.title = "Boost Badge S";
                break;

              case "ex":
                this.title = "EX ticket 记录";
            }
        }
    }, {
        key: "onShow",
        value: function() {
            "vip" == this.recordType ? (this.getMemberInfo(), this.getVipCountLog()) : this.getGoodsLog();
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
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getGoodsLog",
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
                            itemId: this.itemId
                        }, e.next = 3, _waccaApi2.default.goodsLog(t);

                      case 3:
                        r = e.sent, 1 == r.code && (this.goodsRecordList = r.data, this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "getVipCountLog",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {}, e.next = 3, _waccaApi2.default.vipCountLog(t);

                      case 3:
                        r = e.sent, 1 == r.code && (this.goodsRecordList = r.data, this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaRecord, "pages/wacca/wacca-record"));