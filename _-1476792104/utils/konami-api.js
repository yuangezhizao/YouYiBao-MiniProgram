function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _baseHttp = require("./base-http.js"), _baseHttp2 = _interopRequireDefault(_baseHttp), request = _baseHttp2.default.request, requestJson = _baseHttp2.default.requestJson, requestForm = _baseHttp2.default.requestForm, pointPackageList = function(e) {
    return request("/api/konami/pointPackage/list", e);
}, createOrder = function(e) {
    return request("/api/konami/pointCharge/createOrder", e, "POST");
}, payOrder = function(e) {
    return request("/api/konami/pointCharge/payOrder", e, "POST");
}, orderList = function(e) {
    return request("/api/konami/pointCharge/orderList", e);
}, scanCodeDance = function(e) {
    return request("/api/konami/dance/readQRCode", e);
}, startPlayDance = function(e) {
    return request("/api/konami/dance/startPlay", e, "POST");
}, trialMemberDance = function(e) {
    return request("/api/konami/dance/trialMember", e, "POST");
}, exchangeMemberDance = function(e) {
    return request("/api/konami/dance/exchangeMember2", e, "POST");
}, preExchangeMemberDance = function(e) {
    return request("/api/konami/dance/preExchangeMember2", e, "POST");
}, getMemberInfoDance = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/dance/getMemberInfo", e, "GET", n);
}, scoreDetailDance = function(e) {
    return request("/api/konami/dance/scoreDetail", e, "GET");
}, rankListDance = function(e) {
    return request("/api/konami/dance/rankList", e, "GET");
}, playRecordDance = function(e) {
    return request("/api/konami/dance/playRecord", e, "GET");
}, hiscoreDance = function(e) {
    return request("/api/konami/dance/musicHiscore", e);
}, rankDance = function(e) {
    return request("/api/konami/dance/musicRank", e);
}, listDance = function(e) {
    return request("/api/konami/dance/musicList2", e);
}, scanCodeMusic = function(e) {
    return request("/api/konami/music/readQRCode", e);
}, startPlayMusic = function(e) {
    return request("/api/konami/music/startPlay", e, "POST");
}, trialMemberMusic = function(e) {
    return request("/api/konami/music/trialMember", e, "POST");
}, exchangeMemberMusic = function(e) {
    return request("/api/konami/music/exchangeMember2", e, "POST");
}, preExchangeMemberMusic = function(e) {
    return request("/api/konami/music/preExchangeMember2", e, "POST");
}, getMemberInfoMusic = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/music/getMemberInfo", e, "GET", n);
}, scoreDetailMusic = function(e) {
    return request("/api/konami/music/scoreDetail", e, "GET");
}, rankListMusic = function(e) {
    return request("/api/konami/music/rankList", e, "GET");
}, playRecordMusic = function(e) {
    return request("/api/konami/music/playRecord", e, "GET");
}, hiscoreMusic = function(e) {
    return request("/api/konami/music/musicHiscore", e);
}, rankMusic = function(e) {
    return request("/api/konami/music/musicRank", e);
}, listMusic = function(e) {
    return request("/api/konami/music/musicList2", e);
}, scanCodeMusic5 = function(e) {
    return request("/api/konami/music5/readQRCode", e);
}, startPlayMusic5 = function(e) {
    return request("/api/konami/music5/startPlay", e, "POST");
}, getMemberInfoMusic5 = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/music/getMemberInfo", e, "GET", n);
}, hiscoreMusic5 = function(e) {
    return request("/api/konami/music5/musicHiscore", e);
}, rankMusic5 = function(e) {
    return request("/api/konami/music5/musicRank", e);
}, listMusic5 = function(e) {
    return request("/api/konami/music5/musicList2", e);
}, userPackageList = function(e) {
    return request("/api/konami/userPackage/list", e, "GET");
}, userPackageBalance = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/userPackage/balance", e, "GET", n);
}, userPackagePreRefund = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/userPackage/preRefund", e, "POST", n);
}, userPackageRefund = function(e) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return request("/api/konami/userPackage/refund", e, "POST", n);
}, exchangeCoupon = function(e) {
    return request("/api/konami/memberCoupon/exchangeCoupon", e, "POST");
}, couponInfo = function(e) {
    return request("/api/konami/memberCoupon/getCouponInfo", e);
}, exchangeList = function(e) {
    return request("/api/konami/memberCoupon/exchangeList", e);
}, eventList = function(e) {
    return request("/api/konami/arenaEvent/getEventList", e);
}, eventDetail = function(e) {
    return request("/api/konami/arenaEvent/getEventDetail", e);
}, entryEvent = function(e) {
    return request("/api/konami/arenaEvent/entryEvent", e, "POST");
}, eventRank = function(e) {
    return request("/api/konami/arenaEvent/getEventRank", e);
};

exports.default = {
    pointPackageList: pointPackageList,
    createOrder: createOrder,
    payOrder: payOrder,
    orderList: orderList,
    trialMemberMusic: trialMemberMusic,
    scanCodeMusic: scanCodeMusic,
    startPlayMusic: startPlayMusic,
    exchangeMemberMusic: exchangeMemberMusic,
    preExchangeMemberMusic: preExchangeMemberMusic,
    getMemberInfoMusic: getMemberInfoMusic,
    hiscoreMusic: hiscoreMusic,
    rankMusic: rankMusic,
    listMusic: listMusic,
    scanCodeDance: scanCodeDance,
    startPlayDance: startPlayDance,
    trialMemberDance: trialMemberDance,
    exchangeMemberDance: exchangeMemberDance,
    preExchangeMemberDance: preExchangeMemberDance,
    getMemberInfoDance: getMemberInfoDance,
    userPackageList: userPackageList,
    userPackageBalance: userPackageBalance,
    userPackageRefund: userPackageRefund,
    userPackagePreRefund: userPackagePreRefund,
    scoreDetailDance: scoreDetailDance,
    rankListDance: rankListDance,
    playRecordDance: playRecordDance,
    rankListMusic: rankListMusic,
    scoreDetailMusic: scoreDetailMusic,
    playRecordMusic: playRecordMusic,
    exchangeCoupon: exchangeCoupon,
    couponInfo: couponInfo,
    exchangeList: exchangeList,
    scanCodeMusic5: scanCodeMusic5,
    startPlayMusic5: startPlayMusic5,
    getMemberInfoMusic5: getMemberInfoMusic5,
    hiscoreMusic5: hiscoreMusic5,
    rankMusic5: rankMusic5,
    listMusic5: listMusic5,
    hiscoreDance: hiscoreDance,
    rankDance: rankDance,
    listDance: listDance,
    eventList: eventList,
    eventDetail: eventDetail,
    entryEvent: entryEvent,
    eventRank: eventRank
};