!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.postLottery = exports.getLotteryTimes = exports.getLotteryPrizeList = void 0;
    var e, n = require("./base-http.js"), t = (e = n) && e.__esModule ? e : {
        default: e
    };
    var r = t.default.request, i = (t.default.requestJson, t.default.requestForm);
    exports.getLotteryPrizeList = function() {
        return r("/api/mns/mnsLottery/getLotteryPrizeList");
    }, exports.getLotteryTimes = function() {
        return r("/api/mns/mnsLottery/getLotteryTimes");
    }, exports.postLottery = function() {
        return r("/api/mns/mnsLottery/lottery", null, "POST");
    };
    exports.default = {
        deleteAddress: function(e) {
            return r("/api/unis/Myself/myAddress", e, "DELETE");
        },
        putAddress: function(e) {
            return r("/api/unis/Myself/myAddress", e, "PUT");
        },
        getAddress: function(e) {
            return r("/api/unis/Myself/myAddress", e, "GET");
        },
        addAddress: function(e) {
            return r("/api/unis/Myself/myAddress", e, "POST");
        },
        machineInfo: function(e) {
            return r("/api/mns/mnsMachine/machineDetail", e);
        },
        startCoin: function(e) {
            return r("/api/unis/machine/startCoin", e);
        },
        machineCreateOrder: function(e) {
            return r("/api/mns/mnsMachine/createOrder", e, "POST");
        },
        yunActivityList: function(e) {
            return i("https://zlb-api.universal-space.cn/RuanJieApi/Yun/get?method=YunActivityList", e, "POST");
        },
        yunActivityDetails: function(e) {
            return i("https://zlb-api.universal-space.cn/RuanJieApi/Yun/get?method=YunActivityDetails", e, "POST");
        },
        findScoreCoin: function(e) {
            return r("/api/unis/Myself/findScoreCoin", e);
        },
        myTicket: function(e) {
            return i("https://zlb-api.universal-space.cn/RuanJieApi/Gamelog/get?method=MGL_Ticket_Count", e, "POST");
        },
        scroeList: function(e) {
            return r("/api/unis/Myself/scroeCoinList", e);
        },
        coinList: function(e) {
            return r("/api/unis/Myself/scroeCoinList", e);
        },
        ticketRecord: function(e) {
            return i("https://zlb-api.universal-space.cn/RuanJieApi/Gamelog/get?method=NEW_MGL_Ticket_List", e, "POST");
        },
        myVipCard: function(e) {
            return r("/api/unis/Myself/myVipCard", e);
        },
        vipCardInfo: function(e) {
            return r("/api/unis/Myself/vipCardInfo", e);
        },
        purchaseRecord: function(e) {
            return r("/api/unis/Myself/purchaseRecord", e);
        },
        myPackages: function(e) {
            return r("/api/unis/Myself/myPackages", e);
        },
        myPackagesInfo: function(e) {
            return r("/api/unis/Myself/myPackagesInfo", e);
        },
        myPackagesExchange: function(e) {
            return r("/api/unis/Myself/myPackagesExchange", e);
        },
        cancellationMyOrder: function(e) {
            return r("/api/unis/Myself/cancellationMyOrder", e);
        },
        cardPackageList: function(e) {
            return r("/api/unis/cardPackage/list", e);
        },
        sendCaptcha: function(e) {
            return r("/api/unis/cardOrder/sendCaptcha", e, "POST");
        },
        orderAems: function(e) {
            return r("/api/unis/cardOrder/aems", e, "POST");
        },
        cancelOrder: function(e) {
            return r("/api/unis/cardOrder/aems", e, "POST");
        },
        cardCreateOrder: function(e) {
            return r("/api/unis/cardOrder/createOrder", e, "POST");
        },
        orderList: function(e) {
            return r("/api/unis/cardOrder/orderList", e);
        },
        orderDetail: function(e) {
            return r("/api/unis/cardOrder/orderDetail", e);
        },
        cardPayOrder: function(e) {
            return r("/api/unis/cardOrder/payOrder", e, "POST");
        },
        regionListData: function(e) {
            return r("/api/unis/region/regionListData?pageNo=1&pageSize=1000", e);
        },
        chooseStores: function(e) {
            return r("/api/unis/Recommended/chooseStores", e);
        },
        storeList: function(e) {
            return r("/api/unis/stores/List", e);
        },
        searchStore: function(e) {
            return r("/api/unis/search/cabinetList", e);
        },
        storeDetail: function(e) {
            return r("/api/unis/stores/storesList", e);
        },
        activityListData: function(e) {
            return r("/api/unis/stores/activityListData", e);
        },
        activityList: function(e) {
            return r("/api/unis/stores/activityList", e);
        },
        ticketListData: function(e) {
            return r("/api/unis/stores/ticketListData", e);
        },
        comboListData: function(e) {
            return r("/api/unis/stores/comboListData", e);
        },
        comboList: function(e) {
            return r("/api/unis/stores/comboList", e);
        },
        getVipTicket: function(e) {
            return r("/api/unis/stores/getVipTicket", e, "POST");
        },
        memberPackageInfo: function(e) {
            return r("/api/unis/stores/memberPackageInfo", e);
        },
        prepayOrder: function(e) {
            return r("/api/unis/order/prepayOrder", e, "POST");
        },
        createOrder: function(e) {
            return r("/api/unis/order/createOrder", e, "POST");
        },
        payOrder: function(e) {
            return r("/api/unis/order/payOrder", e, "POST");
        },
        loginPassword: function(e) {
            return r("/api/unis/Myself/loginPassword", e, "POST");
        },
        getCaptcha: function(e) {
            return r("/api/sms/captcha/get/" + e, null, "POST");
        },
        loginUser: function(e) {
            return r("/api/unis/Myself/loginUser", e, "POST");
        },
        saveFormId: function(e) {
            return r("/weapp/saveFormId", e, "POST", !1);
        },
        templateIds: function(e) {
            return r("/weapp/getTemplateIds", e);
        },
        subscribeTemplate: function(e) {
            return r("/weapp/subscribeTemplate", e, "POST");
        },
        getExchangeCode: function(e) {
            return r("/api/unis/cardOrder/getExchangeCode", e);
        },
        getLocation: function(e) {
            return r("https://restapi.amap.com/v3/geocode/regeo", e);
        },
        weappLogin: function(e) {
            return r("/api/unis/Myself/weapp_login", e, "POST");
        },
        delVipCard: function(e) {
            return r("/api/unis/Myself/delVipCard", e, "POST");
        },
        addVipCard: function(e) {
            return r("/api/unis/Myself/addVipCard", e, "POST");
        },
        gameScore: function(e) {
            return r("/api/mns/mnsGame/gameScore", e);
        },
        recordAllList: function(e) {
            return r("/api/mns/mnsGame/recordAllList", e);
        },
        recordDetail: function(e) {
            return r("/api/mns/mnsGame/recordDetail", e);
        },
        weappLogout: function(e) {
            return r("/api/unis/Myself/weappLogout", e, "POST");
        },
        integralGoods: function(e) {
            return r("https://shop.yyb.universal-space.cn/api/daib2c_wxapp_goods/items", e);
        },
        pointChargeOrderList: function(e) {
            return r("/api/konami/pointCharge/orderList", e);
        },
        pointPackageList: function(e) {
            return r("/api/konami/pointPackage/list", e);
        },
        pointChargeCreateOrder: function(e) {
            return r("/api/konami/pointCharge/createOrder", e, "POST");
        },
        pointChargePayOrder: function(e) {
            return r("/api/konami/pointCharge/payOrder", e, "POST");
        },
        userPackageBalance: function(e) {
            return r("/api/konami/userPackage/balance", e);
        },
        userPackageList: function(e) {
            return r("/api/konami/userPackage/list", e);
        },
        userPackagePreRefund: function(e) {
            return r("/api/konami/userPackage/preRefund", e, "POST");
        },
        userPackageRefund: function(e) {
            return r("/api/konami/userPackage/refund", e, "POST");
        },
        scanCode: function(e) {
            return r("/api/konami/music/readQRCode", e);
        },
        getMemberInfo: function(e) {
            return r("/api/konami/music/getMemberInfo", e);
        },
        startPlay: function(e) {
            return r("/api/konami/music/startPlay", e, "POST");
        },
        trialMember: function(e) {
            return r("/api/konami/music/trialMember", e, "POST");
        },
        preExchangeMember: function(e) {
            return r("/api/konami/music/preExchangeMember", e, "POST");
        },
        exchangeMember: function(e) {
            return r("/api/konami/music/exchangeMember", e, "POST");
        },
        scoreDetail: function(e) {
            return r("/api/konami/music/scoreDetail", e);
        },
        rankList: function(e) {
            return r("/api/mns/mnsGame/rankList", e);
        },
        playRecord: function(e) {
            return r("/api/konami/music/playRecord", e);
        },
        scanCodeDance: function(e) {
            return r("/api/konami/dance/readQRCode", e);
        },
        getMemberInfoDance: function(e) {
            return r("/api/konami/dance/getMemberInfo", e);
        },
        startPlayDance: function(e) {
            return r("/api/konami/dance/startPlay", e, "POST");
        },
        trialMemberDance: function(e) {
            return r("/api/konami/dance/trialMember", e, "POST");
        },
        preExchangeMemberDance: function(e) {
            return r("/api/konami/dance/preExchangeMember", e, "POST");
        },
        exchangeMemberDance: function(e) {
            return r("/api/konami/dance/exchangeMember", e, "POST");
        },
        weappBind: function(e) {
            return r("/api/unis/Myself/weapp_bind", e, "POST");
        },
        wxLogin: function(e) {
            return r("/weapp/login", e, "POST");
        },
        weappLoginBind: function(e) {
            return r("/api/unis/Myself/weapp_login_bind", e, "POST");
        },
        updatePassword: function(e) {
            return r("/api/unis/Myself/updatePassword", e, "POST");
        },
        adData: function(e) {
            return r("/api/unis/Myself/adData", e, "POST");
        },
        eventList: function(e) {
            return r("/api/mns/mnsGameEvent/getEventList", e);
        },
        hotGameList: function(e) {
            return r("/api/mns/mnsGameStatis/hotGameList", e);
        },
        lotteryTimes: function(e) {
            return r("/api/mns/mnsLottery/getLotteryTimes", e);
        },
        userGameSummary: function(e) {
            return r("/api/mns/mnsGameStatis/getUserGameSummary", e);
        },
        userRecordList: function(e) {
            return r("/api/mns/mnsGameStatis/getUserRecordList", e);
        },
        userRecordStatis: function(e) {
            return r("/api/mns/mnsGameStatis/getUserRecordStatis", e);
        },
        myPrizeList: function(e) {
            return r("/api/mns/mnsLottery/getMyPrizeList", e);
        },
        collectPrize: function(e) {
            return r("/api/mns/mnsLottery/collectPrize", e, "POST");
        },
        myHotGameList: function(e) {
            return r("/api/mns/mnsGameStatis/myHotGameList", e);
        },
        myPoolRank: function(e) {
            return r("/api/mns/mnsJackpot/getMyPoolRank", e);
        },
        myPrizeListJackpot: function(e) {
            return r("/api/mns/mnsJackpot/getMyPrizeList", e);
        },
        collectPrizeJackpot: function(e) {
            return r("/api/mns/mnsJackpot/collectPrize", e, "POST");
        },
        eventListJackpot: function(e) {
            return r("/api/mns/mnsJackpot/getEventList", e);
        },
        myEventListJackpot: function(e) {
            return r("/api/mns/mnsJackpot/getMyEventList", e);
        },
        myJackpotInfo: function(e) {
            return r("/api/mns/mnsJackpot/getMyJackpotInfo", e);
        },
        myEventDetail: function(e) {
            return r("/api/mns/mnsJackpot/getMyEventDetail", e);
        },
        prizeWinnerList: function(e) {
            return r("/api/mns/mnsJackpot/getPrizeWinnerList", e);
        },
        exchangePrize: function(e) {
            return r("/api/mns/mnsJackpot/exchangePrize", e, "POST");
        },
        machineRecordList: function(e) {
            return r("/api/mns/mnsGame/recordList", e);
        },
        eventDetail: function(e) {
            return r("/api/mns/mnsGameEvent/getEventDetail", e);
        },
        entryEvent: function(e) {
            return r("/api/mns/mnsGameEvent/entryEvent", e, "POST");
        },
        eventRank: function(e) {
            return r("/api/mns/mnsGameEvent/getEventRank", e);
        },
        machineOrderLottery: function(e) {
            return r("/api/mns/mnsLottery/machineOrderLottery", e, "POST");
        },
        allStoreList: function(e) {
            return r("/api/unis/stores/allStoreList", e);
        },
        nearestStore: function(e) {
            return r("/api/unis/stores/nearestStore", e);
        },
        publicRequest: function(e) {
            return r("api/unis/Basic/weparam", e, "POST");
        }
    };
}();