!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), n = s(require("./../../components/custom-statusbar.js")), a = s(require("./../../components/star.js")), r = s(require("./../../components/match-dialog.js")), i = s(require("./../../utils/wacca-api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function a(r, i) {
                    try {
                        var s = t[r](i), o = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!s.done) return Promise.resolve(o).then(function(e) {
                        a("next", e);
                    }, function(e) {
                        a("throw", e);
                    });
                    e(o);
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
        function s() {
            var e, t, i;
            c(this, s);
            for (var o = arguments.length, l = Array(o), h = 0; h < o; h++) l[h] = arguments[h];
            return t = i = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(l))), 
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
                star: a.default,
                changeDialog: r.default
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
                achievementList: [],
                type: 1
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
        }(s, t), e(s, [ {
            key: "onLoad",
            value: function(e) {
                this.type = parseInt(e.type), this.getMemberInfo(), this.getUserTitleList();
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
            value: (f = o(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (1 != this.type) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, i.default.memberInfoWacca();

                      case 3:
                        t = e.sent, this.dealMember(t), e.next = 11;
                        break;

                      case 7:
                        return e.next = 9, i.default.memberInfoWacca2();

                      case 9:
                        n = e.sent, this.dealMember(n);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "dealMember",
            value: function(e) {
                1 == e.code && (this.memberInfo = e.data, this.$apply());
            }
        }, {
            key: "getUserTitleList",
            value: (h = o(regeneratorRuntime.mark(function e() {
                var t, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            titleType: this.currentTab + 1
                        }, 1 != this.type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, i.default.userTitleList(t);

                      case 4:
                        n = e.sent, this.dealRes(n), e.next = 12;
                        break;

                      case 8:
                        return e.next = 10, i.default.userTitleListWacca2(t);

                      case 10:
                        a = e.sent, this.dealRes(a);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "dealRes",
            value: function(e) {
                if (1 == e.code) {
                    if ((!e.data || e.data.length < this.pageSize) && (this.canLoadMore = !1), !e.data) return;
                    1 == this.pageNo ? this.achievementList = e.data : this.achievementList = this.achievementList.concat(e.data), 
                    this.$apply();
                }
            }
        }, {
            key: "setUserTitle",
            value: (l = o(regeneratorRuntime.mark(function e() {
                var t, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            titleId: this.selectAchievemen.titleId
                        }, 1 != this.type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, i.default.setUserTitle(t);

                      case 4:
                        n = e.sent, this.dealSetTitle(n), e.next = 12;
                        break;

                      case 8:
                        return e.next = 10, i.default.setUserTitleWacca2(t);

                      case 10:
                        a = e.sent, this.dealSetTitle(a);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "dealSetTitle",
            value: function(e) {
                1 == e.code && (this.changeDialog = !1, this.getMemberInfo(), wx.showToast({
                    title: "更换成功",
                    icon: "none"
                }), this.$apply());
            }
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/wacca/wacca-achievement"));
}();