!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    }(), t = a(require("./../npm/wepy/lib/wepy.js")), n = a(require("./../components/wacca2-navigation.js")), i = (a(require("./../utils/wechat.js")), 
    a(require("./../utils/wacca-api.js")));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function a() {
            var e, t, i;
            r(this, a);
            for (var s = arguments.length, c = Array(s), l = 0; l < s; l++) c[l] = arguments[l];
            return t = i = o(this, (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(e, [ this ].concat(c))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    "xmlns:v-bind": "",
                    "v-bind:title.sync": "titleName"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default
            }, i.mixins = [], i.data = {
                screenWidth: 300,
                screenHeight: 300,
                titleName: "模板",
                model: "",
                isShowPicker: !1,
                value: [ 0 ],
                valueData: [],
                selectValue: 0,
                type: 0,
                showingList: [],
                circleWidth: 130,
                selectItem: "",
                selectItemTmp: ""
            }, i.computed = {}, i.methods = {
                selectButtonDidClick: function() {
                    this.isShowPicker = !0;
                },
                cancleClick: function() {
                    this.selectItemTmp = null, this.isShowPicker = !1;
                },
                pickerSure: function() {
                    this.isShowPicker = !1, this.selectItem = this.selectItemTmp;
                    var e = this.model.data.indexOf(this.selectItem);
                    this.value = [ e ];
                },
                bindChange: function(e) {
                    console.log(e.detail);
                    var t = e.detail.value[0], n = this.model.data[t];
                    this.selectItemTmp = n;
                },
                clickImg: function(e) {
                    this.selectItem = e, this.$apply();
                },
                sureButton: function() {
                    this.type, console.log(this.selectItem), this.setSetting();
                }
            }, i.events = {}, o(i, t);
        }
        var s, c;
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
        }(a, t), e(a, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                setTimeout(function() {
                    t.$apply();
                }, 100);
                var n = this;
                wx.getSystemInfo({
                    success: function(e) {
                        n.screenWidth = e.screenWidth, n.screenHeight = e.screenHeight, n.circleWidth = (e.screenWidth - 90) / 2;
                    }
                });
                var i = JSON.parse(e.json);
                n.model = i, n.titleName = i.display, i.data[0].img ? n.type = 1 : n.type = 0, this.showingList = this.model.data, 
                this.dealValue(), this.$apply();
            }
        }, {
            key: "setSetting",
            value: (s = regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = {
                            type: this.model.type,
                            value: this.selectItem.value
                        }, e.next = 3, i.default.setSettingeWacca2(t);

                      case 3:
                        1 != e.sent.code || wx.showToast({
                            title: "设置成功",
                            icon: "success",
                            complete: function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = s.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function i(a, r) {
                        try {
                            var o = e[a](r), s = o.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(e) {
                            i("next", e);
                        }, function(e) {
                            i("throw", e);
                        });
                        t(s);
                    }("next");
                });
            }, function() {
                return c.apply(this, arguments);
            })
        }, {
            key: "dealValue",
            value: function() {
                for (var e = this.model.displayValue, t = 0; t < this.model.data.length; t++) {
                    this.model.data[t].display == e && (this.value = [ t ]);
                }
            }
        } ]), a;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "wacca2/wacca2-setting-chose"));
}();