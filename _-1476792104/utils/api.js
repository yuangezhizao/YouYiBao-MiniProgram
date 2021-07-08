function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.postLottery = exports.getLotteryTimes = exports.getLotteryPrizeList = void 0;

var _baseHttp = require("./base-http.js"), _baseHttp2 = _interopRequireDefault(_baseHttp), request = _baseHttp2.default.request, requestJson = _baseHttp2.default.requestJson, requestForm = _baseHttp2.default.requestForm, yunActivityList = function(e) {
    return requestForm("https://zlb-api.universal-space.cn/RuanJieApi/Yun/get?method=YunActivityList", e, "POST");
}, yunActivityDetails = function(e) {
    return requestForm("https://zlb-api.universal-space.cn/RuanJieApi/Yun/get?method=YunActivityDetails", e, "POST");
}, findScoreCoin = function(e) {
    return request("/api/unis/Myself/findScoreCoin", e);
}, myTicket = function(e) {
    return requestForm("https://zlb-api.universal-space.cn/RuanJieApi/Gamelog/get?method=MGL_Ticket_Count", e, "POST");
}, scroeList = function(e) {
    return request("/api/unis/Myself/scroeCoinList", e);
}, coinList = function(e) {
    return request("/api/unis/Myself/scroeCoinList", e);
}, ticketRecord = function(e) {
    return requestForm("https://zlb-api.universal-space.cn/RuanJieApi/Gamelog/get?method=NEW_MGL_Ticket_List", e, "POST");
}, myVipCard = function(e) {
    return request("/api/unis/Myself/myVipCard", e);
}, vipCardInfo = function(e) {
    return request("/api/unis/Myself/vipCardInfo", e);
}, purchaseRecord = function(e) {
    return request("/api/unis/Myself/purchaseRecord", e);
}, myPackages = function(e) {
    return request("/api/unis/Myself/myPackages", e);
}, myPackagesInfo = function(e) {
    return request("/api/unis/Myself/myPackagesInfo", e);
}, myPackagesExchange = function(e) {
    return request("/api/unis/Myself/myPackagesExchange", e);
}, cancellationMyOrder = function(e) {
    return request("/api/unis/Myself/cancellationMyOrder", e);
}, delVipCard = function(e) {
    return request("/api/unis/Myself/delVipCard", e, "POST");
}, addVipCard = function(e) {
    return request("/api/unis/Myself/addVipCard", e, "POST");
}, cardPackageList = function(e) {
    return request("/api/unis/cardPackage/list", e);
}, sendCaptcha = function(e) {
    return request("/api/unis/cardOrder/sendCaptcha", e, "POST");
}, orderAems = function(e) {
    return request("/api/unis/cardOrder/aems", e, "POST");
}, getExchangeCode = function(e) {
    return request("/api/unis/cardOrder/getExchangeCode", e);
}, cancelOrder = function(e) {
    return request("/api/unis/cardOrder/aems", e, "POST");
}, cardCreateOrder = function(e) {
    return request("/api/unis/cardOrder/createOrder", e, "POST");
}, orderList = function(e) {
    return request("/api/unis/cardOrder/orderList", e);
}, orderDetail = function(e) {
    return request("/api/unis/cardOrder/orderDetail", e);
}, cardPayOrder = function(e) {
    return request("/api/unis/cardOrder/payOrder", e, "POST");
}, regionListData = function(e) {
    return request("/api/unis/region/regionListData?pageNo=1&pageSize=1000", e);
}, chooseStores = function(e) {
    return request("/api/unis/Recommended/chooseStores", e);
}, storeList = function(e) {
    return request("/api/unis/stores/List", e);
}, searchStore = function(e) {
    return request("/api/unis/search/cabinetList", e);
}, storeDetail = function(e) {
    return request("/api/unis/stores/storesList", e);
}, activityListData = function(e) {
    return request("/api/unis/stores/activityListData", e);
}, activityList = function(e) {
    return request("/api/unis/stores/activityList", e);
}, allStoreList = function(e) {
    return request("/api/unis/stores/allStoreList", e);
}, nearestStore = function(e) {
    return request("/api/unis/stores/nearestStore", e);
}, ticketListData = function(e) {
    return request("/api/unis/stores/ticketListData", e);
}, comboListData = function(e) {
    return request("/api/unis/stores/comboListData", e);
}, comboList = function(e) {
    return request("/api/unis/stores/comboList", e);
}, getVipTicket = function(e) {
    return request("/api/unis/stores/getVipTicket", e, "POST");
}, memberPackageInfo = function(e) {
    return request("/api/unis/stores/memberPackageInfo", e);
}, getLocation = function(e) {
    return request("https://restapi.amap.com/v3/geocode/regeo", e);
}, prepayOrder = function(e) {
    return request("/api/unis/order/prepayOrder", e, "POST");
}, createOrder = function(e) {
    return request("/api/unis/order/createOrder", e, "POST");
}, payOrder = function(e) {
    return request("/api/unis/order/payOrder", e, "POST");
}, loginPassword = function(e) {
    return request("/api/unis/Myself/loginPassword", e, "POST");
}, getCaptcha = function(e) {
    return request("/api/sms/captcha/get/" + e, null, "POST");
}, loginUser = function(e) {
    return request("/api/unis/Myself/loginUser", e, "POST");
}, weappLogin = function(e) {
    return request("/api/unis/Myself/weapp_login", e, "POST");
}, weappLogout = function(e) {
    return request("/api/unis/Myself/weappLogout", e, "POST");
}, weappBind = function(e) {
    return request("/api/unis/Myself/weapp_bind", e, "POST");
}, wxLogin = function(e) {
    return request("/weapp/login", e, "POST");
}, weappLoginBind = function(e) {
    return request("/api/unis/Myself/weapp_login_bind", e, "POST");
}, updatePassword = function(e) {
    return request("/api/unis/Myself/updatePassword", e, "POST");
}, saveFormId = function(e) {
    return request("/weapp/saveFormId", e, "POST", !1);
}, templateIds = function(e) {
    return request("/weapp/getTemplateIds", e);
}, subscribeTemplate = function(e) {
    return request("/weapp/subscribeTemplate", e, "POST");
}, machineInfo = function(e) {
    return request("/api/mns/mnsMachine/machineDetail", e);
}, startCoin = function(e) {
    return request("/api/unis/machine/startCoin", e);
}, machineCreateOrder = function(e) {
    return request("/api/mns/mnsMachine/createOrder", e, "POST");
}, myHotGameList = function(e) {
    return request("/api/mns/mnsGameStatis/myHotGameList", e);
}, machineOrderLottery = function(e) {
    return request("/api/mns/mnsLottery/machineOrderLottery", e, "POST");
}, gameScore = function(e) {
    return request("/api/mns/mnsGame/gameScore", e);
}, recordAllList = function(e) {
    return request("/api/mns/mnsGame/recordAllList", e);
}, recordDetail = function(e) {
    return request("/api/mns/mnsGame/recordDetail", e);
}, rankList = function(e) {
    return request("/api/mns/mnsGame/rankList", e);
}, integralGoods = function(e) {
    return request("https://shop.yyb.universal-space.cn/api/daib2c_wxapp_goods/items", e);
}, pointChargeOrderList = function(e) {
    return request("/api/konami/pointCharge/orderList", e);
}, pointPackageList = function(e) {
    return request("/api/konami/pointPackage/list", e);
}, pointChargeCreateOrder = function(e) {
    return request("/api/konami/pointCharge/createOrder", e, "POST");
}, pointChargePayOrder = function(e) {
    return request("/api/konami/pointCharge/payOrder", e, "POST");
}, userPackageBalance = function(e) {
    return request("/api/konami/userPackage/balance", e);
}, userPackageList = function(e) {
    return request("/api/konami/userPackage/list", e);
}, userPackagePreRefund = function(e) {
    return request("/api/konami/userPackage/preRefund", e, "POST");
}, userPackageRefund = function(e) {
    return request("/api/konami/userPackage/refund", e, "POST");
}, scanCode = function(e) {
    return request("/api/konami/music/readQRCode", e);
}, getMemberInfo = function(e) {
    return request("/api/konami/music/getMemberInfo", e);
}, startPlay = function(e) {
    return request("/api/konami/music/startPlay", e, "POST");
}, trialMember = function(e) {
    return request("/api/konami/music/trialMember", e, "POST");
}, preExchangeMember = function(e) {
    return request("/api/konami/music/preExchangeMember", e, "POST");
}, exchangeMember = function(e) {
    return request("/api/konami/music/exchangeMember", e, "POST");
}, scoreDetail = function(e) {
    return request("/api/konami/music/scoreDetail", e);
}, playRecord = function(e) {
    return request("/api/konami/music/playRecord", e);
}, scanCodeDance = function(e) {
    return request("/api/konami/dance/readQRCode", e);
}, getMemberInfoDance = function(e) {
    return request("/api/konami/dance/getMemberInfo", e);
}, startPlayDance = function(e) {
    return request("/api/konami/dance/startPlay", e, "POST");
}, trialMemberDance = function(e) {
    return request("/api/konami/dance/trialMember", e, "POST");
}, preExchangeMemberDance = function(e) {
    return request("/api/konami/dance/preExchangeMember", e, "POST");
}, exchangeMemberDance = function(e) {
    return request("/api/konami/dance/exchangeMember", e, "POST");
}, adData = function(e) {
    return request("/api/unis/Myself/adData", e, "POST");
}, hotGameList = function(e) {
    return request("/api/mns/mnsGameStatis/hotGameList", e);
}, myPoolRank = function(e) {
    return request("/api/mns/mnsJackpot/getMyPoolRank", e);
}, myPrizeListJackpot = function(e) {
    return request("/api/mns/mnsJackpot/getMyPrizeList", e);
}, collectPrizeJackpot = function(e) {
    return request("/api/mns/mnsJackpot/collectPrize", e, "POST");
}, eventListJackpot = function(e) {
    return request("/api/mns/mnsJackpot/getEventList", e);
}, myEventListJackpot = function(e) {
    return request("/api/mns/mnsJackpot/getMyEventList", e);
}, myJackpotInfo = function(e) {
    return request("/api/mns/mnsJackpot/getMyJackpotInfo", e);
}, myEventDetail = function(e) {
    return request("/api/mns/mnsJackpot/getMyEventDetail", e);
}, prizeWinnerList = function(e) {
    return request("/api/mns/mnsJackpot/getPrizeWinnerList", e);
}, exchangePrize = function(e) {
    return request("/api/mns/mnsJackpot/exchangePrize", e, "POST");
}, eventList = function(e) {
    return request("/api/mns/mnsGameEvent/getEventList", e);
}, eventDetail = function(e) {
    return request("/api/mns/mnsGameEvent/getEventDetail", e);
}, entryEvent = function(e) {
    return request("/api/mns/mnsGameEvent/entryEvent", e, "POST");
}, eventRank = function(e) {
    return request("/api/mns/mnsGameEvent/getEventRank", e);
}, userGameSummary = function(e) {
    return request("/api/mns/mnsGameStatis/getUserGameSummary", e);
}, userRecordList = function(e) {
    return request("/api/mns/mnsGameStatis/getUserRecordList", e);
}, userRecordStatis = function(e) {
    return request("/api/mns/mnsGameStatis/getUserRecordStatis", e);
}, machineRecordList = function(e) {
    return request("/api/mns/mnsGame/recordList", e);
}, lotteryTimes = function(e) {
    return request("/api/mns/mnsLottery/getLotteryTimes", e);
}, myPrizeList = function(e) {
    return request("/api/mns/mnsLottery/getMyPrizeList", e);
}, collectPrize = function(e) {
    return request("/api/mns/mnsLottery/collectPrize", e, "POST");
}, getLotteryPrizeList = exports.getLotteryPrizeList = function() {
    return request("/api/mns/mnsLottery/getLotteryPrizeList");
}, getLotteryTimes = exports.getLotteryTimes = function() {
    return request("/api/mns/mnsLottery/getLotteryTimes");
}, postLottery = exports.postLottery = function() {
    return request("/api/mns/mnsLottery/lottery", null, "POST");
};

exports.default = {
    machineInfo: machineInfo,
    startCoin: startCoin,
    machineCreateOrder: machineCreateOrder,
    yunActivityList: yunActivityList,
    yunActivityDetails: yunActivityDetails,
    findScoreCoin: findScoreCoin,
    myTicket: myTicket,
    scroeList: scroeList,
    coinList: coinList,
    ticketRecord: ticketRecord,
    myVipCard: myVipCard,
    vipCardInfo: vipCardInfo,
    purchaseRecord: purchaseRecord,
    myPackages: myPackages,
    myPackagesInfo: myPackagesInfo,
    myPackagesExchange: myPackagesExchange,
    cancellationMyOrder: cancellationMyOrder,
    cardPackageList: cardPackageList,
    sendCaptcha: sendCaptcha,
    orderAems: orderAems,
    cancelOrder: cancelOrder,
    cardCreateOrder: cardCreateOrder,
    orderList: orderList,
    orderDetail: orderDetail,
    cardPayOrder: cardPayOrder,
    regionListData: regionListData,
    chooseStores: chooseStores,
    storeList: storeList,
    searchStore: searchStore,
    storeDetail: storeDetail,
    activityListData: activityListData,
    activityList: activityList,
    ticketListData: ticketListData,
    comboListData: comboListData,
    comboList: comboList,
    getVipTicket: getVipTicket,
    memberPackageInfo: memberPackageInfo,
    prepayOrder: prepayOrder,
    createOrder: createOrder,
    payOrder: payOrder,
    loginPassword: loginPassword,
    getCaptcha: getCaptcha,
    loginUser: loginUser,
    saveFormId: saveFormId,
    templateIds: templateIds,
    subscribeTemplate: subscribeTemplate,
    getExchangeCode: getExchangeCode,
    getLocation: getLocation,
    weappLogin: weappLogin,
    delVipCard: delVipCard,
    addVipCard: addVipCard,
    gameScore: gameScore,
    recordAllList: recordAllList,
    recordDetail: recordDetail,
    weappLogout: weappLogout,
    integralGoods: integralGoods,
    pointChargeOrderList: pointChargeOrderList,
    pointPackageList: pointPackageList,
    pointChargeCreateOrder: pointChargeCreateOrder,
    pointChargePayOrder: pointChargePayOrder,
    userPackageBalance: userPackageBalance,
    userPackageList: userPackageList,
    userPackagePreRefund: userPackagePreRefund,
    userPackageRefund: userPackageRefund,
    scanCode: scanCode,
    getMemberInfo: getMemberInfo,
    startPlay: startPlay,
    trialMember: trialMember,
    preExchangeMember: preExchangeMember,
    exchangeMember: exchangeMember,
    scoreDetail: scoreDetail,
    rankList: rankList,
    playRecord: playRecord,
    scanCodeDance: scanCodeDance,
    getMemberInfoDance: getMemberInfoDance,
    startPlayDance: startPlayDance,
    trialMemberDance: trialMemberDance,
    preExchangeMemberDance: preExchangeMemberDance,
    exchangeMemberDance: exchangeMemberDance,
    weappBind: weappBind,
    wxLogin: wxLogin,
    weappLoginBind: weappLoginBind,
    updatePassword: updatePassword,
    adData: adData,
    eventList: eventList,
    hotGameList: hotGameList,
    lotteryTimes: lotteryTimes,
    userGameSummary: userGameSummary,
    userRecordList: userRecordList,
    userRecordStatis: userRecordStatis,
    myPrizeList: myPrizeList,
    collectPrize: collectPrize,
    myHotGameList: myHotGameList,
    myPoolRank: myPoolRank,
    myPrizeListJackpot: myPrizeListJackpot,
    collectPrizeJackpot: collectPrizeJackpot,
    eventListJackpot: eventListJackpot,
    myEventListJackpot: myEventListJackpot,
    myJackpotInfo: myJackpotInfo,
    myEventDetail: myEventDetail,
    prizeWinnerList: prizeWinnerList,
    exchangePrize: exchangePrize,
    machineRecordList: machineRecordList,
    eventDetail: eventDetail,
    entryEvent: entryEvent,
    eventRank: eventRank,
    machineOrderLottery: machineOrderLottery,
    allStoreList: allStoreList,
    nearestStore: nearestStore
};