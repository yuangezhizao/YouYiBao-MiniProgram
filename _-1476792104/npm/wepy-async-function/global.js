!function() {
    module.exports = "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof self && self.Math === Math ? self : this || Function("return this")();
}();