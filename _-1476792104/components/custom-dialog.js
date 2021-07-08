function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), CustomDialog = function(e) {
    function t() {
        var e, o, n, r;
        _classCallCheck(this, t);
        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
        return o = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        n.props = {
            statusBarHeight: {
                default: "",
                twoWay: !0
            },
            type: {
                default: "confirm"
            },
            content: {
                default: ""
            },
            title: {
                default: ""
            },
            isShow: {
                default: !1,
                twoWay: !0
            }
        }, n.data = {}, n.components = {}, n.methods = {
            close: function() {
                this.isShow = !1, this.$emit("close");
            },
            confirm: function() {
                this.$emit("confirm");
            },
            getAuthHandle: function(e) {
                console.log(e), "getUserInfo:fail auth deny" !== e.detail.errMsg && (this.isShow = !1, 
                this.$emit("getAuthHandler"));
            },
            getPhoneNumber: function(e) {
                "getPhoneNumber:fail user deny" !== e.detail.errMsg && (this.isShow = !1, this.$emit("getPhoneNumber", e));
            }
        }, n.events = {}, n.watch = {}, n.computed = {}, r = o, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
    } ]), t;
}(_wepy2.default.component);

exports.default = CustomDialog;