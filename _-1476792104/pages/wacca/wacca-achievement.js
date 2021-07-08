function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function a(r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
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
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _star = require("./../../components/star.js"), _star2 = _interopRequireDefault(_star), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaAchievement = function(e) {
    function t() {
        var e, n, a, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return n = a = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        a.config = {
            navigationStyle: "custom"
        }, a.$repeat = {
            achievementList: {
                com: "star",
                props: ""
            }
        }, a.$props = {
            star: {
                "xmlns:v-bind": {
                    value: "",
                    for: "achievementList",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:starNumber.sync": "selectAchievemenStar"
            },
            customStatusbar: {
                title: "成就称号"
            },
            changeDialog: {
                "v-bind:isShowDialog.sync": "changeDialog",
                title: "更换成就称号"
            }
        }, a.$events = {}, a.components = {
            customStatusbar: _customStatusbar2.default,
            star: _star2.default,
            changeDialog: _matchDialog2.default
        }, a.mixins = [], a.data = {
            navbar: [ "成就称号", "特殊称号" ],
            currentTab: 0,
            changeDialog: !1,
            memberInfo: "",
            pageNo: 1,
            pageSize: 10,
            canLoadMore: !0,
            selectAchievemen: "",
            selectAchievemenStar: "",
            achievementList: []
        }, a.computed = {}, a.methods = {
            navbarTap: function(e) {
                this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                this.achievementList = [], this.pageNo = 1, this.canLoadMore = !0, this.getUserTitleList());
            },
            changeAchievement: function(e) {
                this.selectAchievemen = e, this.selectAchievemenStar = e.titleRarity, this.changeDialog = !0;
            },
            confirmChange: function() {
                this.setUserTitle();
            }
        }, a.events = {}, r = n, _possibleConstructorReturn(a, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getMemberInfo(), this.getUserTitleList();
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
        key: "onReachBottom",
        value: function() {
            this.canLoadMore && (this.pageNo++, this.getUserTitleList());
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
        key: "getUserTitleList",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            titleType: this.currentTab + 1
                        }, e.next = 3, _waccaApi2.default.userTitleList(t);

                      case 3:
                        if (n = e.sent, 1 != n.code) {
                            e.next = 10;
                            break;
                        }
                        if ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), n.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.achievementList = n.data : this.achievementList = this.achievementList.concat(n.data), 
                        this.$apply();

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "setUserTitle",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            titleId: this.selectAchievemen.titleId
                        }, e.next = 3, _waccaApi2.default.setUserTitle(t);

                      case 3:
                        n = e.sent, 1 == n.code && (this.changeDialog = !1, this.getMemberInfo(), wx.showToast({
                            title: "更换成功",
                            icon: "none"
                        }), this.$apply());

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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaAchievement, "pages/wacca/wacca-achievement"));