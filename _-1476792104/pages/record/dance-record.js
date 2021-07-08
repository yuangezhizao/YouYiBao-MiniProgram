!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
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
    }(), t = i(require("./../../npm/wepy/lib/wepy.js")), r = i(require("./../../components/match-statusbar.js")), n = i(require("./../../mixins/user-mixin.js")), o = i(require("./../../utils/api.js")), a = i(require("./../../components/custom-dialog.js"));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
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
    var p = function(t) {
        function i() {
            var e, t, o;
            c(this, i);
            for (var s = arguments.length, p = Array(s), d = 0; d < s; d++) p[d] = arguments[d];
            return t = o = u(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [ this ].concat(p))), 
            o.config = {
                navigationStyle: "custom"
            }, o.$repeat = {}, o.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "战绩记录"
                },
                customDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShow.sync": "showAlert",
                    title: "温馨提示",
                    "v-bind:content.sync": "alertTxt",
                    "xmlns:v-on": ""
                }
            }, o.$events = {
                customDialog: {
                    "v-on:confirm": "confirm"
                }
            }, o.components = {
                statusbar: r.default,
                customDialog: a.default
            }, o.data = {
                navbar: [ "按时间", "按得分" ],
                currentTab: 0,
                productId: "",
                gameType: "gameDate",
                canLoadMore: !0,
                pageNo: 1,
                pageSize: 10,
                recordStatis: "",
                recordList: [],
                showAlert: !1,
                alertTxt: "",
                productImage: ""
            }, o.mixins = [ n.default ], o.methods = {
                navbarTap: function(e) {
                    this.currentTab != e.currentTarget.dataset.index && (this.currentTab = e.currentTarget.dataset.index, 
                    0 == this.currentTab ? this.gameType = "gameDate" : this.gameType = "score", this.pageNo = 1, 
                    this.canLoadMore = !0, this.getMachineRecordList());
                },
                confirm: function() {
                    this.showAlert = !1;
                },
                recordDetail: function(e) {
                    wx.navigateTo({
                        url: "/pages/record/dance-detail?machineId=" + e.machineId + "&scoreId=" + e.scoreId
                    });
                }
            }, u(o, t);
        }
        var p, d;
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
            value: function(e) {
                console.log("options", e), this.productId = e.productId, this.productImage = e.productImage, 
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
            value: (d = s(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, o.default.userRecordStatis({
                            productId: this.productId
                        });

                      case 2:
                        1 == (t = e.sent).code && (this.recordStatis = t.data, this.$apply(), console.log("综合成绩", t));

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            })), function() {
                return d.apply(this, arguments);
            })
        }, {
            key: "getMachineRecordList",
            value: (p = s(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            productId: this.productId,
                            pageNo: this.pageNo,
                            pageSize: this.pageSize,
                            orderBy: this.gameType
                        }, e.next = 3, o.default.machineRecordList(t);

                      case 3:
                        if (1 != (r = e.sent).code) {
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
            })), function() {
                return p.apply(this, arguments);
            })
        } ]), i;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/record/dance-record"));
}();