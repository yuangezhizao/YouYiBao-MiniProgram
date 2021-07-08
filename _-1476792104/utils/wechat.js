!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e, n = require("./../npm/wepy/lib/wepy.js"), t = (e = n) && e.__esModule ? e : {
        default: e
    };
    exports.default = {
        payment: function(e) {
            return t.default.requestPayment({
                timeStamp: e.timeStamp,
                nonceStr: e.nonceStr,
                package: e.package,
                signType: "MD5",
                paySign: e.paySign
            });
        },
        payment2: function(e) {
            return console.log({
                timeStamp: e.timestamp,
                nonceStr: e.noncestr,
                package: "prepay_id=" + e.prepayid,
                signType: "MD5",
                paySign: e.sign
            }), t.default.requestPayment({
                timeStamp: e.timestamp,
                nonceStr: e.noncestr,
                package: "prepay_id=" + e.prepayid,
                signType: "MD5",
                paySign: e.sign
            });
        },
        login: function() {
            return new Promise(function(e, n) {
                wx.login({
                    success: e,
                    fail: n
                });
            });
        },
        getUserInfo: function() {
            return new Promise(function(e, n) {
                wx.getUserInfo({
                    lang: "zh_CN",
                    success: e,
                    fail: n
                });
            });
        },
        showModal: function() {
            wx.showModal({
                content: "您还未登录，请先登录",
                success: function(e) {
                    e.confirm ? wx.navigateTo({
                        url: "/pages/mine/login"
                    }) : e.cancel && wx.navigateBack({
                        delta: 1
                    });
                }
            });
        },
        getUserInfoNew: function() {
            return new Promise(function(e, n) {
                wx.getUserProfile({
                    desc: "获取你的昵称、头像、地区及性别",
                    lang: "zh_CN",
                    success: e,
                    fail: n
                });
            });
        }
    };
}();