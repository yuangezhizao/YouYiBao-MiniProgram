function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, a) {
                try {
                    var o = t[i](a), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _api = require("./../../utils/api.js"), _api2 = _interopRequireDefault(_api), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), matchDetail = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.config = {
            navigationStyle: "custom"
        }, r.$repeat = {}, r.$props = {
            statusbar: {
                title: "赛事详情",
                leftIcon: "true"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, r.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, r.components = {
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default
        }, r.data = {
            eventId: "",
            eventDetail: "",
            showAlert: !1,
            alertTxt: "",
            eventTiemDown: "",
            timer: null,
            day1: "",
            day2: "",
            hou1: "",
            hou2: "",
            min1: "",
            min2: ""
        }, r.methods = {
            entryMatch: function() {
                this.entryEvent();
            },
            confirm: function() {
                this.showAlert = !1;
            },
            eventRank: function() {
                wx.navigateTo({
                    url: "/pages/match/match-rank?eventId=" + this.eventId
                });
            }
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.eventId = e.eventId;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getEventDetail(), this.overTime();
            var e = this;
            e.timer = setInterval(function() {
                e.overTime();
            }, 1e3);
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
        key: "getEventDetail",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.eventDetail({
                            eventId: this.eventId
                        });

                      case 2:
                        t = e.sent, 1 != t.code ? (this.showAlert = !0, this.alertTxt = t.message, this.$apply()) : (this.eventDetail = t.data, 
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
        key: "entryEvent",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _api2.default.entryEvent({
                            eventId: this.eventId
                        });

                      case 2:
                        t = e.sent, 1 != t.code ? (this.showAlert = !0, this.alertTxt = t.message, this.$apply()) : 1 != this.eventDetail.isFree ? _wechat2.default.payment(t.data.wxpay).then(function(e) {
                            n.showAlert = !0, n.alertTxt = "报名成功", n.getEventDetail(), n.$apply();
                        }).catch(function(e) {
                            wx.showToast({
                                title: "支付失败",
                                icon: "none",
                                duration: 1500
                            });
                        }) : (this.showAlert = !0, this.alertTxt = "报名成功", this.getEventDetail(), this.$apply()), 
                        console.log(t);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "overTime",
        value: function() {
            var e = new Date().getTime(), t = 1e3 * this.eventDetail.endTimeStamp;
            if (t - e > 0) {
                var n = (t - e) / 1e3, r = this.timeFormat(parseInt(n / 86400)), i = this.timeFormat(parseInt(n % 86400 / 3600)), a = this.timeFormat(parseInt(n % 86400 % 3600 / 60));
                this.eventTiemDown = r + "天" + i + "时" + a + "分", this.day1 = this.eventTiemDown.substring(0, 1), 
                this.day2 = this.eventTiemDown.substring(1, 2), this.hou1 = this.eventTiemDown.substring(3, 4), 
                this.hou2 = this.eventTiemDown.substring(4, 5), this.min1 = this.eventTiemDown.substring(6, 7), 
                this.min2 = this.eventTiemDown.substring(7, 8), this.$apply();
            } else clearInterval(this.timer), this.$apply();
        }
    }, {
        key: "timeFormat",
        value: function(e) {
            return e < 10 ? "0" + e : e;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(matchDetail, "pages/match/match-detail"));