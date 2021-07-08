!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = s(require("./app.js")), t = s(require("./page.js")), a = s(require("./component.js")), u = s(require("./event.js")), i = s(require("./base.js")), l = s(require("./util.js")), r = s(require("./mixin.js"));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    exports.default = {
        event: u.default,
        app: e.default,
        component: a.default,
        page: t.default,
        mixin: r.default,
        $createApp: i.default.$createApp,
        $createPage: i.default.$createPage,
        $isEmpty: l.default.$isEmpty,
        $isEqual: l.default.$isEqual,
        $isDeepEqual: l.default.$isDeepEqual,
        $has: l.default.$has,
        $extend: l.default.$extend,
        $isPlainObject: l.default.$isPlainObject,
        $copy: l.default.$copy
    };
}();