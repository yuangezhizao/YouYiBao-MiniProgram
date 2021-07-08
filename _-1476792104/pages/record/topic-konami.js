!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
        };
    }(), t = r(require("./../../npm/wepy/lib/wepy.js")), o = r(require("./../../components/match-statusbar.js")), n = r(require("./../../components/match-dialog.js"));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var s = function(t) {
        function r() {
            var e, t, s;
            a(this, r);
            for (var l = arguments.length, u = Array(l), c = 0; c < l; c++) u[c] = arguments[c];
            return t = s = i(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(u))), 
            s.config = {
                navigationStyle: "custom"
            }, s.$repeat = {}, s.$props = {
                statusbar: {
                    leftIcon: "true",
                    title: "音律炫动"
                },
                matchDialog: {
                    "xmlns:v-bind": "",
                    "v-bind:isShowDialog.sync": "isShowDialog",
                    title: "“音律炫动”试用会员"
                },
                matchDialog2: {
                    "v-bind:isShowDialog.sync": "isShowDialog2",
                    title: "“音律炫动”试用会员",
                    size: "large"
                }
            }, s.$events = {}, s.components = {
                statusbar: o.default,
                matchDialog: n.default,
                matchDialog2: n.default
            }, s.data = {
                isShowDialog: !1,
                isShowDialog2: !1
            }, s.methods = {}, i(s, t);
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
        } ]), r;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/record/topic-konami"));
}();