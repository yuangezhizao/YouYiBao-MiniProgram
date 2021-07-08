function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, a) {
            function n(i, r) {
                try {
                    var o = e[i](r), s = o.value;
                } catch (t) {
                    return void a(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
                    n("next", t);
                }, function(t) {
                    n("throw", t);
                });
                t(s);
            }
            return n("next");
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
        for (var a = 0; a < e.length; a++) {
            var n = e[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, a, n) {
        return a && t(e.prototype, a), n && t(e, n), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchCard = require("./../../components/match-card.js"), _matchCard2 = _interopRequireDefault(_matchCard), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), matchList = function(t) {
    function e() {
        var t, a, n, i;
        _classCallCheck(this, e);
        for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {
            matchList: {
                com: "matchCard",
                props: "item"
            }
        }, n.$props = {
            matchCard: {
                "xmlns:v-bind": {
                    value: "",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                type: {
                    value: "match",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "matchList",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            statusbar: {
                leftIcon: "true",
                title: "更多赛事"
            },
            customDialog: {
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt"
            }
        }, n.$events = {
            matchCard: {
                "v-on:eventHandle": "matchDetail"
            },
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, n.components = {
            statusbar: _matchStatusbar2.default,
            matchCard: _matchCard2.default,
            customDialog: _customDialog2.default
        }, n.data = {
            status: 1,
            matchList: [],
            showAlert: !1,
            alertTxt: "",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 3
        }, n.methods = {
            changeTab: function(t) {
                this.status = t, this.matchList = "", this.pageNo = 1, this.canLoadMore = !0, this.getEventList();
            },
            matchDetail: function(t) {
                wx.navigateTo({
                    url: "/pages/match/match-detail?eventId=" + t.eventId
                });
            }
        }, i = a, _possibleConstructorReturn(n, i);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {
            this.getEventList();
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
            this.canLoadMore && (this.pageNo++, this.getEventList());
        }
    }, {
        key: "getEventList",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, a, n, i;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            status: this.status
                        }, t.next = 3, _api2.default.eventList(e);

                      case 3:
                        if (a = t.sent, 1 == a.code) {
                            t.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = a.message, this.$apply(), t.next = 15;
                        break;

                      case 10:
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            t.next = 13;
                            break;
                        }
                        return t.abrupt("return");

                      case 13:
                        if (1 == this.pageNo) {
                            for (n = 0; n < a.data.length; n++) a.data[n].beginTime = a.data[n].beginTime.substring(0, 10), 
                            a.data[n].endTime = a.data[n].endTime.substring(0, 10);
                            this.matchList = a.data;
                        } else {
                            for (i = 0; i < a.data.length; i++) a.data[i].beginTime = a.data[i].beginTime.substring(0, 10), 
                            a.data[i].endTime = a.data[i].endTime.substring(0, 10);
                            this.matchList = this.listData.concat(a.data);
                        }
                        this.$apply();

                      case 15:
                        console.log("赛事列表", a);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(matchList, "pages/match/match-list"));