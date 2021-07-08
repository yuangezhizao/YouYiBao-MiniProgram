function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function n(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void a(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _matchCard = require("./../../components/match-card.js"), _matchCard2 = _interopRequireDefault(_matchCard), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), arena = function(e) {
    function t() {
        var e, a, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {
            listData: {
                com: "arenaCard",
                props: "item"
            }
        }, n.$props = {
            arenaCard: {
                "xmlns:v-bind": {
                    value: "",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                type: {
                    value: "arena",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                },
                "xmlns:v-on": {
                    value: "",
                    for: "listData",
                    item: "item",
                    index: "index",
                    key: "index"
                }
            },
            statusbar: {
                leftIcon: "true",
                title: "ARENA大赛"
            },
            customDialog: {
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt"
            }
        }, n.$events = {
            arenaCard: {
                "v-on:eventHandle": "arenaDetail"
            },
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, n.components = {
            statusbar: _matchStatusbar2.default,
            arenaCard: _matchCard2.default,
            customDialog: _customDialog2.default
        }, n.data = {
            status: 1,
            listData: [],
            showAlert: !1,
            alertTxt: "",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 3
        }, n.methods = {
            changeTab: function(e) {
                this.status = e, this.listData = "", this.pageNo = 1, this.canLoadMore = !0, this.getEventListArena();
            },
            arenaDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/match/arena-detail?eventId=" + e.eventId
                });
            }
        }, r = a, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getEventListArena();
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
            this.canLoadMore && (this.pageNo++, this.getEventListArena());
        }
    }, {
        key: "getEventListArena",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, a, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            status: this.status
                        }, e.next = 3, _konamiApi2.default.eventList(t);

                      case 3:
                        if (a = e.sent, 1 == a.code) {
                            e.next = 10;
                            break;
                        }
                        this.showAlert = !0, this.alertTxt = a.message, this.$apply(), e.next = 15;
                        break;

                      case 10:
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 13;
                            break;
                        }
                        return e.abrupt("return");

                      case 13:
                        if (1 == this.pageNo) {
                            for (n = 0; n < a.data.length; n++) a.data[n].beginTime = a.data[n].beginTime.substring(0, 10), 
                            a.data[n].endTime = a.data[n].endTime.substring(0, 10);
                            this.listData = a.data;
                        } else {
                            for (r = 0; r < a.data.length; r++) a.data[r].beginTime = a.data[r].beginTime.substring(0, 10), 
                            a.data[r].endTime = a.data[r].endTime.substring(0, 10);
                            this.listData = this.listData.concat(a.data);
                        }
                        this.$apply();

                      case 15:
                        console.log("赛事列表", a);

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(arena, "pages/match/arena"));