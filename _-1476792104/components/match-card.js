!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var t, e = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        return function(e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
        };
    }(), n = require("./../npm/wepy/lib/wepy.js");
    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }
    var i = function(t) {
        function n() {
            var t, e, i;
            o(this, n);
            for (var a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
            return e = i = r(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(u))), 
            i.props = {
                title: String,
                desc: String,
                desc2: String,
                btnTxt: String,
                status: String,
                btnType: {
                    type: String,
                    default: ""
                },
                item: Object,
                hot: String,
                type: String,
                eventStatus: String
            }, i.data = {}, i.methods = {
                btnTapHandle: function() {
                    console.log("btn tap", this.item, this.hot), this.$emit("btnClick", this.item);
                },
                eventHandle: function(t) {
                    console.log("点击了组件事件"), this.$emit("eventHandle", t);
                }
            }, r(i, e);
        }
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
        }(n, t), e(n, [ {
            key: "onLoad",
            value: function() {}
        } ]), n;
    }(((t = n) && t.__esModule ? t : {
        default: t
    }).default.component);
    exports.default = i;
}();