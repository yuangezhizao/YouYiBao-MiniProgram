!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = void 0;
    var e = o(require("./../npm/wepy/lib/wepy.js")), t = o(require("./../utils/api.js")), r = o(require("./../utils/environment.js")), n = o(require("./../utils/wechat.js"));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, r) {
                return function n(o, u) {
                    try {
                        var i = t[o](u), a = i.value;
                    } catch (e) {
                        return void r(e);
                    }
                    if (!i.done) return Promise.resolve(a).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(a);
                }("next");
            });
        };
    }
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var c = function(e) {
        function o() {
            var e, c, s, f;
            i(this, o);
            for (var p = arguments.length, l = Array(p), d = 0; d < p; d++) l[d] = arguments[d];
            return c = s = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
            s.methods = {
                tap: (f = u(regeneratorRuntime.mark(function e(o) {
                    var u, i, a;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, n.default.login();

                          case 2:
                            u = e.sent, i = u.code, a = r.default.production ? r.default.prod.appid : r.default.dev.appid, 
                            setTimeout(function() {
                                t.default.saveFormId({
                                    formId: o.detail.formId,
                                    appid: a,
                                    code: i
                                });
                            }, 0), this.$emit("submitFn");

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                })), function(e) {
                    return f.apply(this, arguments);
                })
            }, s.props = {
                params: {
                    default: "null"
                }
            }, a(s, c);
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
        }(o, e), o;
    }(e.default.component);
    exports.default = c;
}();