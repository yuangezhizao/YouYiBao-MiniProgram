function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _asyncToGenerator(t) {
    return function() {
        var e = t.apply(this, arguments);
        return new Promise(function(t, n) {
            function i(r, a) {
                try {
                    var o = e[r](a), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                if (!o.done) return Promise.resolve(s).then(function(t) {
                    i("next", t);
                }, function(t) {
                    i("throw", t);
                });
                t(s);
            }
            return i("next");
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
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _wepy = require("./../../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _matchStatusbar = require("./../../components/match-statusbar.js"), _matchStatusbar2 = _interopRequireDefault(_matchStatusbar), _wechat = require("./../../utils/wechat.js"), _wechat2 = _interopRequireDefault(_wechat), _konamiApi = require("./../../utils/konami-api.js"), _konamiApi2 = _interopRequireDefault(_konamiApi), _customDialog = require("./../../components/custom-dialog.js"), _customDialog2 = _interopRequireDefault(_customDialog), matchDetail = function(t) {
    function e() {
        var t, n, i, r;
        _classCallCheck(this, e);
        for (var a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return n = i = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(o))), 
        i.config = {
            navigationStyle: "custom"
        }, i.$repeat = {}, i.$props = {
            statusbar: {
                title: "ARENA大赛详情",
                leftIcon: "true"
            },
            customDialog: {
                "xmlns:v-bind": "",
                "v-bind:isShow.sync": "showAlert",
                title: "温馨提示",
                "v-bind:content.sync": "alertTxt",
                "xmlns:v-on": ""
            }
        }, i.$events = {
            customDialog: {
                "v-on:confirm": "confirm"
            }
        }, i.components = {
            statusbar: _matchStatusbar2.default,
            customDialog: _customDialog2.default
        }, i.data = {
            eventId: "",
            eventDetail: "",
            pointList: [],
            memberInfo: "",
            showAlert: !1,
            alertTxt: "",
            eventTiemDown: "",
            timer: null,
            showPayEam: !1,
            entryPoint: "",
            day1: "",
            day2: "",
            hou1: "",
            hou2: "",
            min1: "",
            min2: ""
        }, i.methods = {
            entryDialog: function() {
                return this.memberInfo.memberType < 2 ? (this.showAlert = !0, void (this.alertTxt = "正式会员才能报名参赛")) : "" == this.entryPoint ? (this.showAlert = !0, 
                void (this.alertTxt = "当前会员级别不能参与大赛")) : void (this.showPayEam = !0);
            },
            entryMatch: function() {
                this.getEntryEvent();
            },
            confirm: function() {
                this.showAlert = !1;
            },
            eventRank: function() {
                wx.navigateTo({
                    url: "/pages/match/arena-rank?eventId=" + this.eventId
                });
            },
            close: function() {
                this.showPayEam = !1;
            }
        }, r = n, _possibleConstructorReturn(i, r);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function(t) {
            this.eventId = t.eventId;
        }
    }, {
        key: "onShow",
        value: function() {
            this.getEventDetail(), this.overTime();
            var t = this;
            t.timer = setInterval(function() {
                t.overTime();
            }, 1e3);
        }
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
        key: "getEventDetail",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, _konamiApi2.default.eventDetail({
                            eventId: this.eventId
                        });

                      case 2:
                        if (e = t.sent, 1 != e.code) this.showAlert = !0, this.alertTxt = e.message, this.$apply(); else {
                            if (this.eventDetail = e.data.eventDetail, this.pointList = e.data.pointList, this.memberInfo = e.data.memberInfo, 
                            1 == e.data.pointList.length) e.data.pointList[0].memberType == e.data.memberInfo.memberType && (this.entryPoint = e.data.pointList[0].entryPoint); else if (e.data.pointList.length > 1) for (n = 0; n < e.data.pointList.length; n++) e.data.pointList[n].memberType == e.data.memberInfo.memberType && (this.entryPoint = e.data.pointList[n].entryPoint);
                            this.$apply();
                        }

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "getEntryEvent",
        value: function() {
            function t() {
                return e.apply(this, arguments);
            }
            var e = _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, _konamiApi2.default.entryEvent({
                            eventId: this.eventId
                        });

                      case 2:
                        e = t.sent, 1 != e.code ? (this.showAlert = !0, this.alertTxt = e.message, this.showPayEam = !1, 
                        this.$apply()) : (this.showAlert = !0, this.alertTxt = "报名成功", this.showPayEam = !1, 
                        this.getEventDetail(), this.$apply()), console.log(e);

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return t;
        }()
    }, {
        key: "overTime",
        value: function() {
            var t = new Date().getTime(), e = 1e3 * this.eventDetail.endTimeStamp;
            if (e - t > 0) {
                var n = (e - t) / 1e3, i = this.timeFormat(parseInt(n / 86400)), r = this.timeFormat(parseInt(n % 86400 / 3600)), a = this.timeFormat(parseInt(n % 86400 % 3600 / 60));
                this.eventTiemDown = i + "天" + r + "时" + a + "分", this.day1 = this.eventTiemDown.substring(0, 1), 
                this.day2 = this.eventTiemDown.substring(1, 2), this.hou1 = this.eventTiemDown.substring(3, 4), 
                this.hou2 = this.eventTiemDown.substring(4, 5), this.min1 = this.eventTiemDown.substring(6, 7), 
                this.min2 = this.eventTiemDown.substring(7, 8), this.$apply();
            } else clearInterval(this.timer), this.$apply();
        }
    }, {
        key: "timeFormat",
        value: function(t) {
            return t < 10 ? "0" + t : t;
        }
    } ]), e;
}(_wepy2.default.page);

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(matchDetail, "pages/match/arena-detail"));