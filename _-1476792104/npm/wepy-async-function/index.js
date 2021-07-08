var e;

(e = require("./global.js")) ? (e.Promise || (e.Promise = require("./../promise-polyfill/promise.js")), 
e.regeneratorRuntime || (e.regeneratorRuntime = require("./../regenerator-runtime/runtime.js"))) : console.warn('请确认关闭小程序选项 "关闭ES6转ES5"');