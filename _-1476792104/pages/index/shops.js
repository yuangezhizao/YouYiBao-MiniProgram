!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
        };
    }(), e = r(require("./../../npm/wepy/lib/wepy.js")), i = r(require("./../../utils/api.js")), n = r(require("./../../components/match-statusbar.js"));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function o(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new Promise(function(t, i) {
                return function n(r, o) {
                    try {
                        var a = e[r](o), s = a.value;
                    } catch (t) {
                        return void i(t);
                    }
                    if (!a.done) return Promise.resolve(s).then(function(t) {
                        n("next", t);
                    }, function(t) {
                        n("throw", t);
                    });
                    t(s);
                }("next");
            });
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var c = function(r) {
        function c() {
            var t, e, i;
            a(this, c);
            for (var r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l];
            return e = i = s(this, (t = c.__proto__ || Object.getPrototypeOf(c)).call.apply(t, [ this ].concat(o))), 
            i.config = {
                navigationStyle: "custom",
                backgroundColor: "#F2F9FF"
            }, i.$repeat = {}, i.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "更多门店"
                }
            }, i.$events = {}, i.components = {
                statusbar: n.default
            }, i.data = {
                letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
                toggleCity: {},
                allCityList: [],
                cityList: [],
                allStoreList: [],
                storeList: [],
                nearestStore: "",
                idx: "",
                wxLocation: "",
                showChosenLetterToast: !1,
                toastShowLetter: "",
                toView: "",
                windowHeight: "",
                pixelRatio: "",
                offsetTop: "",
                time: ""
            }, i.methods = {
                toggleShopList: function(t, e) {
                    var i = this;
                    this.idx = e, this.$apply(), this.toggleCity[t] = !this.toggleCity[t];
                    var n = this;
                    Object.keys(this.toggleCity).forEach(function(e) {
                        e != t && (n.toggleCity[e] = !1);
                    }), clearInterval(this.time), 0 == this.allStoreList.length && (this.time = setInterval(function() {
                        i.storeList = i.allStoreList.filter(function(e) {
                            return e.city == t;
                        }), i.$apply(), 0 != i.storeList.length && clearInterval(i.time);
                    }, 1e3)), this.storeList = this.allStoreList.filter(function(e) {
                        return e.city == t;
                    }), this.$apply();
                },
                goSearch: function() {
                    wx.navigateTo({
                        url: "/pages/index/shops-search"
                    });
                },
                selectStore: function(t) {
                    console.log(t), wx.setStorageSync("storeDetail", t), wx.navigateBack({
                        delta: 1
                    });
                },
                storeDetail: function(t) {
                    wx.navigateTo({
                        url: "/pages/store/store-detail?storeId=" + t
                    });
                },
                scorllTo: function(t) {
                    console.log("走了这里", t), wx.showToast({
                        title: t,
                        icon: "none"
                    });
                    for (var e = 0; e < this.cityList.length; e++) if (0 === this.cityList[e].initial.indexOf(t)) return void (this.toView = this.cityList[e].initial);
                },
                handlerMove: function(t) {
                    var e = this.letter;
                    console.log("e", t);
                    var i = t.touches[0].clientY - this.offsetTop;
                    if (i >= 0) {
                        var n = Math.ceil((i - this.apHeight) / this.apHeight);
                        if (n >= 0 && n < e.length) {
                            var r = e[n];
                            wx.showToast({
                                title: r,
                                icon: "none"
                            });
                            for (var o = 0; o < this.cityList.length; o++) if (0 === this.cityList[o].initial.indexOf(r)) return void (this.toView = this.cityList[o].initial);
                        }
                    }
                }
            }, s(i, e);
        }
        var l, u, h, f;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(c, r), t(c, [ {
            key: "onLoad",
            value: function() {
                var t = wx.getSystemInfoSync();
                console.log("res", t), this.pixelRatio = t.pixelRatio, this.apHeight = 16, this.offsetTop = 80, 
                this.windowHeight = t.windowHeight + "px";
            }
        }, {
            key: "onShow",
            value: (f = o(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return this.allCityList = wx.getStorageSync("cityList"), t.prev = 1, t.next = 4, 
                        e.default.getLocation();

                      case 4:
                        this.wxLocation = t.sent, this.getAllStoreList(), this.getNearestStore(), this.getCityList(), 
                        t.next = 13;
                        break;

                      case 10:
                        t.prev = 10, t.t0 = t.catch(1), wx.showModal({
                            title: "温馨提示",
                            content: "您未开启定位服务，可能会影响小程序部分功能的使用。请点击“确定”进行授权",
                            success: function(t) {
                                t.confirm ? wx.openSetting() : t.cancel && wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 1, 10 ] ]);
            })), function() {
                return f.apply(this, arguments);
            })
        }, {
            key: "getAllStoreList",
            value: (h = o(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            longitude: this.wxLocation.longitude,
                            latitude: this.wxLocation.latitude
                        }, t.next = 3, i.default.allStoreList(e);

                      case 3:
                        1 == (n = t.sent).code && (this.allStoreList = n.data, this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return h.apply(this, arguments);
            })
        }, {
            key: "getNearestStore",
            value: (u = o(regeneratorRuntime.mark(function t() {
                var e, n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = {
                            longitude: this.wxLocation.longitude,
                            latitude: this.wxLocation.latitude
                        }, t.next = 3, i.default.nearestStore(e);

                      case 3:
                        1 == (n = t.sent).code && (this.nearestStore = n.data, this.$apply());

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return u.apply(this, arguments);
            })
        }, {
            key: "getCityList",
            value: (l = o(regeneratorRuntime.mark(function t() {
                var e, n = this;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, i.default.regionListData({
                            pageNo: 1,
                            pageSize: 1e3
                        });

                      case 2:
                        (e = t.sent) && (this.allCityList = e.data, this.cityList = this.letter.map(function(t) {
                            return {
                                initial: t,
                                cityInfo: n.allCityList.filter(function(e) {
                                    return e.firstLetter.substring(0, 1) == t;
                                })
                            };
                        }), wx.setStorageSync("cityList", e.data), this.$apply());

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            })), function() {
                return l.apply(this, arguments);
            })
        } ]), c;
    }(e.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(c, "pages/index/shops"));
}();