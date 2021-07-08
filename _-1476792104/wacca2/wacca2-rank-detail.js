!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
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
    }(), t = r(require("./../npm/wepy/lib/wepy.js")), n = r(require("./../components/wacca2-navigation.js"));
    r(require("./../utils/wechat.js"));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var i = function(t) {
        function r() {
            var e, t, i;
            a(this, r);
            for (var c = arguments.length, s = Array(c), u = 0; u < c; u++) s[u] = arguments[u];
            return t = i = o(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
            i.config = {
                navigationStyle: "custom"
            }, i.$repeat = {}, i.$props = {
                wacca2Navigation: {
                    title: "升级关卡详情"
                }
            }, i.$events = {}, i.components = {
                wacca2Navigation: n.default
            }, i.mixins = [], i.data = {
                screenWidth: 300,
                model: "",
                arr: []
            }, i.computed = {}, i.methods = {
                rankRankingBtnClick: function() {
                    wx.navigateTo({
                        url: "wacca2-rank-ranking?name=" + this.model.trialClassName + "&id=" + this.model.trialClass
                    });
                }
            }, i.events = {}, o(i, t);
        }
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
        }(r, t), e(r, [ {
            key: "onLoad",
            value: function(e) {
                var t = this;
                console.log("=====" + e.jsonStr);
                var n = JSON.parse(decodeURIComponent(e.jsonStr));
                this.model = n, this.arr = [ {
                    score: n.maxScore1,
                    title: "曲目1",
                    subTitle: n.musicName1,
                    image: n.music1ImageUrl
                }, {
                    score: n.maxScore2,
                    title: "曲目2",
                    subTitle: n.musicName2,
                    image: n.music2ImageUrl
                }, {
                    score: n.maxScore3,
                    title: "曲目3",
                    subTitle: n.musicName3,
                    image: n.music3ImageUrl
                } ], setTimeout(function() {
                    t.$apply();
                }, 100);
                var r = this;
                wx.getSystemInfo({
                    success: function(e) {
                        r.screenWidth = e.screenWidth;
                    }
                });
            }
        } ]), r;
    }(t.default.page);
    Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(i, "wacca2/wacca2-rank-detail"));
}();