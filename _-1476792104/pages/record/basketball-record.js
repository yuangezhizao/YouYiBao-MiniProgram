function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), s = i.value;
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _userMixin = require("./../../mixins/user-mixin.js"), _userMixin2 = _interopRequireDefault(_userMixin), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), basketballRecord = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.config = {
            navigationStyle: "custom"
        }, n.$repeat = {}, n.$props = {
            customStatusbar: {
                title: "战绩记录"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, n.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, n.components = {
            customStatusbar: _customStatusbar2.default,
            customDialog: _customDialog2.default
        }, n.mixins = [ _userMixin2.default ], n.data = {
            navbar: [ "按时间", "按得分" ],
            currentTab: 0,
            recordList: [],
            showAlert: !1,
            alertTxt: "",
            gameType: "gameDate",
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10,
            recordStatis: "",
            productImage: ""
        }, n.computed = {}, n.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                0 == this.currentTab ? this.gameType = "gameDate" : this.gameType = "score", this.pageNo = 1, 
                this.canLoadMore = !0, this.getMachineRecordList());
            },
            recordDetail: function(e) {
                wx.navigateTo({
                    url: "/pages/record/basketball-detail?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                });
            },
            confirm: function() {
                this.showAlert = !1;
            }
        }, n.events = {}, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.productId = e.productId, this.productImage = e.productImage;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getMachineRecordList(), this.getUserRecordStatis();
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
        key: "getUserRecordStatis",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        t = e.sent, 1 == t.code && (this.recordStatis = t.data, this.$apply(), console.log("综合成绩", t));

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
                            e.next = 13;
                            break;
                        }
                        if ((!r.data || r.data.length < this.pageSize) && (this.canLoadMore = !1), r.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.recordList = r.data : this.recordList = this.recordList.concat(r.data), 
                        this.$apply(), console.log("机台战绩记录", r), e.next = 16;
                        break;

                      case 13:
                        this.showAlert = !0, this.alertTxt = r.message, this.$apply();

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(basketballRecord, "pages/record/basketball-record"));