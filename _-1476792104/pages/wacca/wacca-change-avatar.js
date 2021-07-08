function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
            function r(n, o) {
                try {
                    var s = t[n](o), i = s.value;
                } catch (e) {
                    return void a(e);
                }
                if (!s.done) return Promise.resolve(i).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(i);
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
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _customStatusbar = require("./../../components/custom-statusbar.js"), _customStatusbar2 = _interopRequireDefault(_customStatusbar), _star = require("./../../components/star.js"), _star2 = _interopRequireDefault(_star), _matchDialog = require("./../../components/match-dialog.js"), _matchDialog2 = _interopRequireDefault(_matchDialog), _waccaApi = require("./../../utils/wacca-api.js"), _waccaApi2 = _interopRequireDefault(_waccaApi), waccaChangeAvatar = function(e) {
    function t() {
        var e, a, r, n;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
        return a = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {
            avatarList: {
                com: "starList",
                props: ""
            }
        }, r.$props = {
            starList: {
                "v-bind:starNumber.sync": "selectAvatarStar"
            },
            customStatusbar: {
                title: "更换头像"
            },
            star: {
                "xmlns:v-bind": "",
                "v-bind:starNumber.sync": "starNumber"
            },
            changeDialog: {
                "v-bind:isShowDialog.sync": "changeDialog",
                title: "更换头像"
            }
        }, r.$events = {}, r.components = {
            customStatusbar: _customStatusbar2.default,
            star: _star2.default,
            starList: _star2.default,
            changeDialog: _matchDialog2.default
        }, r.mixins = [], r.data = {
            memberInfo: "",
            starNumber: 0,
            selectAvatarStar: "",
            selectAvatar: "",
            changeDialog: !1,
            avatarList: [],
            totalAvatar: 0,
            canLoadMore: !0,
            pageNo: 1,
            pageSize: 10
        }, r.computed = {}, r.methods = {
            changeAvatar: function(e) {
                this.selectAvatarStar = e.iconRarity, this.selectAvatar = e, this.changeDialog = !0;
            },
            confirmChange: function() {
                this.setUserIcon();
            }
        }, r.events = {}, n = a, _possibleConstructorReturn(r, n);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.getMemberInfo();
        }
    }, {
        key: "onShow",
        value: function() {
            this.getUserIconList();
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
            this.canLoadMore && (this.pageNo++, this.getUserIconList());
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
                        t = e.sent, 1 == t.code && (this.memberInfo = t.data, this.starNumber = t.data.iconRarity, 
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
        key: "getUserIconList",
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
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, _waccaApi2.default.userIconList(t);

                      case 3:
                        if (a = e.sent, 1 != a.code) {
                            e.next = 11;
                            break;
                        }
                        if ((!a.data || a.data.length < this.pageSize) && (this.canLoadMore = !1), a.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.avatarList = a.data : this.avatarList = this.avatarList.concat(a.data), 
                        this.totalAvatar = a.totalSize, this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "setUserIcon",
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
                            iconId: this.selectAvatar.iconId
                        }, e.next = 3, _waccaApi2.default.setUserIcon(t);

                      case 3:
                        a = e.sent, 1 == a.code && (this.changeDialog = !1, this.getMemberInfo(), wx.showToast({
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

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(waccaChangeAvatar, "pages/wacca/wacca-change-avatar"));