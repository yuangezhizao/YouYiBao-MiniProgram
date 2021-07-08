!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = function() {
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
    }(), t = o(require("./../npm/wepy/lib/wepy.js")), n = o(require("./../components/custom-statusbar.js")), r = o(require("./../components/star.js")), a = o(require("./../components/match-dialog.js")), i = o(require("./../utils/wacca-api.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, i) {
                    try {
                        var o = t[a](i), s = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!o.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }("next");
            });
        };
    }
    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var l = function(t) {
        function o() {
            var e, t, i;
            c(this, o);
            for (var s = arguments.length, l = Array(s), h = 0; h < s; h++) l[h] = arguments[h];
            return t = i = u(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {
                achievementList: {
                    com: "star",
                    props: ""
                }
            }, i.$props = {
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
            }, i.$events = {}, i.components = {
                customStatusbar: n.default,
                star: r.default,
                changeDialog: a.default
            }, i.mixins = [], i.data = {
                navbar: [ "成就称号", "特殊称号" ],
                currentTab: 0,
                changeDialog: !1,
                memberInfo: "",
                pageNo: 1,
                pageSize: 20,
                canLoadMore: !0,
                selectAchievemen: "",
                selectAchievemenStar: "",
                achievementList: []
            }, i.computed = {}, i.methods = {
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
            }, i.events = {}, u(i, t);
        }
        var l, h, f;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(o, t), e(o, [ {
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
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, i.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getUserTitleList",
            value: (h = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: 20,
                            titleType: this.currentTab + 1
                        }, e.next = 3, i.default.userTitleList(t);

                      case 3:
                        if (1 != (n = e.sent).code) {
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
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "setUserTitle",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            titleId: this.selectAchievemen.titleId
                        }, e.next = 3, i.default.setUserTitle(t);

                      case 3:
                        1 == e.sent.code && (this.changeDialog = !1, this.getMemberInfo(), wx.showToast({
                            title: "更换成功",
                            icon: "none"
                        }), this.$apply());

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), o;
    }(t.default.page);
    exports.default = l;
}();