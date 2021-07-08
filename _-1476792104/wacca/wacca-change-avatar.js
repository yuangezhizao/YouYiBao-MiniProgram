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
    }(), t = i(require("./../npm/wepy/lib/wepy.js")), n = i(require("./../components/custom-statusbar.js")), r = i(require("./../components/star.js")), a = i(require("./../components/match-dialog.js")), o = i(require("./../utils/wacca-api.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(a, o) {
                    try {
                        var i = t[a](o), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
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
        function i() {
            var e, t, o;
            c(this, i);
            for (var s = arguments.length, l = Array(s), f = 0; f < s; f++) l[f] = arguments[f];
            return t = o = u(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(l))), 
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
                customStatusbar: n.default,
                star: r.default,
                starList: r.default,
                changeDialog: a.default
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
                pageSize: 10
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
        }(i, t), e(i, [ {
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
            value: (p = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.memberInfoWacca();

                      case 2:
                        1 == (t = e.sent).code && (this.memberInfo = t.data, this.starNumber = t.data.iconRarity, 
                        this.$apply());

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getUserIconList",
            value: (f = s(regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            pageNo: this.pageNo,
                            pageSize: this.pageSize
                        }, e.next = 3, o.default.userIconList(t);

                      case 3:
                        if (1 != (n = e.sent).code) {
                            e.next = 11;
                            break;
                        }
                        if ((!n.data || n.data.length < this.pageSize) && (this.canLoadMore = !1), n.data) {
                            e.next = 8;
                            break;
                        }
                        return e.abrupt("return");

                      case 8:
                        1 == this.pageNo ? this.avatarList = n.data : this.avatarList = this.avatarList.concat(n.data), 
                        this.totalAvatar = n.totalSize, this.$apply();

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "setUserIcon",
            value: (l = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            iconId: this.selectAvatar.iconId
                        }, e.next = 3, o.default.setUserIcon(t);

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
        } ]), i;
    }(t.default.page);
    exports.default = l;
}();