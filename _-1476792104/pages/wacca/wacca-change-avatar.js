!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = s(require("./../../npm/wepy/lib/wepy.js")), a = s(require("./../../components/custom-statusbar.js")), n = s(require("./../../components/star.js")), r = s(require("./../../components/match-dialog.js")), o = s(require("./../../utils/wacca-api.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, a) {
                return function n(r, o) {
                    try {
                        var s = t[r](o), i = s.value;
                    } catch (e) {
                        return void a(e);
                    }
                    if (!s.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
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
            var e, t, o;
            c(this, s);
            for (var i = arguments.length, l = Array(i), f = 0; f < i; f++) l[f] = arguments[f];
            return t = o = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(l))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {
                avatarList: {
                    com: "starList",
                    props: ""
                }
            }, o.$props = {
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
            }, o.$events = {}, o.components = {
                customStatusbar: a.default,
                star: n.default,
                starList: n.default,
                changeDialog: r.default
            }, o.mixins = [], o.data = {
                memberInfo: "",
                starNumber: 0,
                selectAvatarStar: "",
                selectAvatar: "",
                changeDialog: !1,
                avatarList: [],
                totalAvatar: 0,
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10,
                type: 1
            }, o.computed = {}, o.methods = {
                changeAvatar: function(e) {
                    this.selectAvatarStar = e.iconRarity, this.selectAvatar = e, this.changeDialog = !0;
                },
                confirmChange: function() {
                    this.setUserIcon();
                }
            }, o.events = {}, u(o, t);
        }
        var l, f, p;
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
                this.type = parseInt(e.type), this.getMemberInfo();
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
            value: (p = i(regeneratorRuntime.mark(function e() {
                var t, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (1 != this.type) {
                            e.next = 7;
                            break;
                        }
                        return e.next = 3, o.default.memberInfoWacca();

                      case 3:
                        t = e.sent, this.dealMemberInfo(t), e.next = 11;
                        break;

                      case 7:
                        return e.next = 9, o.default.memberInfoWacca2();

                      case 9:
                        a = e.sent, this.dealMemberInfo(a);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "dealMemberInfo",
            value: function(e) {
                1 == e.code && (this.memberInfo = e.data, this.starNumber = e.data.iconRarity, this.$apply());
            }
        }, {
            key: "getUserIconList",
            value: (f = i(regeneratorRuntime.mark(function e() {
                var t, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, 1 != this.type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, o.default.userIconList(t);

                      case 4:
                        a = e.sent, this.dealIconList(a), e.next = 12;
                        break;

                      case 8:
                        return e.next = 10, o.default.userIconListWacca2(t);

                      case 10:
                        n = e.sent, this.dealIconList(n);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "dealIconList",
            value: function(e) {
                if (1 == e.code) {
                    if ((!e.data || e.data.length < this.pageSize) && (this.canLoadMore = !1), !e.data) return;
                    1 == this.pageNo ? this.avatarList = e.data : this.avatarList = this.avatarList.concat(e.data), 
                    this.totalAvatar = e.totalSize, this.$apply();
                }
            }
        }, {
            key: "setUserIcon",
            value: (l = i(regeneratorRuntime.mark(function e() {
                var t, a, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = {
                            iconId: this.selectAvatar.iconId
                        }, 1 != this.type) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 4, o.default.setUserIcon(t);

                      case 4:
                        a = e.sent, this.dealSetIcon(a), e.next = 12;
                        break;

                      case 8:
                        return e.next = 10, o.default.setUserIconWacca2(t);

                      case 10:
                        n = e.sent, this.dealSetIcon(n);

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return l.apply(this, arguments);
            })
        }, {
            key: "dealSetIcon",
            value: function(e) {
                1 == e.code && (this.changeDialog = !1, this.getMemberInfo(), wx.showToast({
                    title: "更换成功",
                    icon: "none"
                }), this.$apply());
            }
        } ]), s;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/wacca/wacca-change-avatar"));
}();