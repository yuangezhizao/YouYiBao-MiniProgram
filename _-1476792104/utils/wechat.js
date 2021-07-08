function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function payment(e) {
    return _wepy2.default.requestPayment({
        timeStamp: e.timeStamp,
        nonceStr: e.nonceStr,
        package: e.package,
        signType: "MD5",
        paySign: e.paySign
    });
}

function payment2(e) {
    return console.log({
        timeStamp: e.timestamp,
        nonceStr: e.noncestr,
        package: "prepay_id=" + e.prepayid,
        signType: "MD5",
        paySign: e.sign
    }), _wepy2.default.requestPayment({
        timeStamp: e.timestamp,
        nonceStr: e.noncestr,
        package: "prepay_id=" + e.prepayid,
        signType: "MD5",
        paySign: e.sign
    });
}

function login() {
    return new Promise(function(e, n) {
        wx.login({
            success: e,
            fail: n
        });
    });
}

function getUserInfo() {
    return new Promise(function(e, n) {
        wx.getUserInfo({
            lang: "zh_CN",
            success: e,
            fail: n
        });
    });
}

function showModal() {
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
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

exports.default = {
    payment: payment,
    payment2: payment2,
    login: login,
    getUserInfo: getUserInfo,
    showModal: showModal
};