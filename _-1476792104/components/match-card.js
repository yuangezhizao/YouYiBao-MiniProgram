function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), MatchCard = function(t) {
    function e() {
        var t, n, r, o;
        _classCallCheck(this, e);
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(a))), 
        r.props = {
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
        }, r.data = {}, r.methods = {
            btnTapHandle: function() {
                console.log("btn tap", this.item, this.hot), this.$emit("btnClick", this.item);
            },
            eventHandle: function(t) {
                console.log("点击了组件事件"), this.$emit("eventHandle", t);
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "onLoad",
        value: function() {}
    } ]), e;
}(_wepy2.default.component);

exports.default = MatchCard;