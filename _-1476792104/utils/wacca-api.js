!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var a, t = require("./base-http.js");
    var c = ((a = t) && a.__esModule ? a : {
        default: a
    }).default.request;
    exports.default = {
        searchPresentOrderWacca2: function(a) {
            return c("/api/unis/playActivity/myMailPresents", a, "POST");
        },
        mailToOnlinePresentWacca2: function(a) {
            return c("/api/unis/playActivity/mailToPresent", a, "POST");
        },
        onlinePresentWacca2: function(a) {
            return c("/api/unis/playActivity/onlineAcPresent", a);
        },
        exchangeWacca2: function(a) {
            return c("/api/unis/playActivity/exchangeAcPoint", a, "POST");
        },
        scanCodeWacca: function(a) {
            return c("/api/marv/wacca/readQRCode", a, "POST");
        },
        startPlayWacca: function(a) {
            return c("/api/marv/wacca/startPlay", a, "POST");
        },
        memberInfoWacca: function(a) {
            return c("/api/marv/wacca/getMemberInfo", a);
        },
        joinMember: function(a) {
            return c("/api/marv/wacca/joinMember", a, "POST");
        },
        vipPackageList: function(a) {
            return c("/api/marv/wacca/vipPackageList", a);
        },
        buyMemberPackage: function(a) {
            return c("/api/marv/wacca/purchaseMemberPackage", a, "POST");
        },
        goodsList: function(a) {
            return c("/api/marv/wacca/goodsList", a);
        },
        purchaseGoods: function(a) {
            return c("/api/marv/wacca/purchaseGoods", a, "POST");
        },
        goodsOrderList: function(a) {
            return c("/api/marv/wacca/goodsOrderList", a);
        },
        useGoodsList: function(a) {
            return c("/api/marv/wacca/useGoodsList", a);
        },
        goodsLog: function(a) {
            return c("/api/marv/wacca/goodsLog", a);
        },
        vipCountLog: function(a) {
            return c("/api/marv/wacca/vipCountLog", a);
        },
        userMusicRate: function(a) {
            return c("/api/marv/wacca/userMusicRate", a);
        },
        userTitleList: function(a) {
            return c("/api/marv/wacca/getUserTitleList", a);
        },
        setUserTitle: function(a) {
            return c("/api/marv/wacca/setUserTitle", a, "POST");
        },
        userIconList: function(a) {
            return c("/api/marv/wacca/getUserIconList", a);
        },
        setUserIcon: function(a) {
            return c("/api/marv/wacca/setUserIcon", a, "POST");
        },
        allMusicList: function(a) {
            return c("/api/marv/wacca/musicList2", a);
        },
        musicInfo: function(a) {
            return c("/api/marv/wacca/getMusicInfo", a);
        },
        musicRank: function(a) {
            return c("/api/marv/wacca/musicRank", a);
        },
        statisRank: function(a) {
            return c("/api/marv/wacca/statisRank", a);
        },
        myStatisRank: function(a) {
            return c("/api/marv/wacca/myStatisRank", a);
        },
        seasonIds: function(a) {
            return c("/api/marv/wacca/getSeasonIds", a);
        },
        userTrophyStatis: function(a) {
            return c("/api/marv/wacca/getUserTrophyStatis", a);
        },
        userTrophyList: function(a) {
            return c("/api/marv/wacca/getTrophyList", a);
        },
        searchCouponTicket: function(a) {
            return c("/api/marv/wacca/getexchangeticket", a, "POST");
        },
        receiveCouponTicket: function(a) {
            return c("/api/marv/wacca/doexchangeticket", a, "POST");
        },
        exchangeTicketLog: function(a) {
            return c("/api/marv/wacca/exchangeticketlog", a, "POST");
        },
        getTotalTrialListNameWacca2: function(a) {
            return c("/api/marv/wacca2/trialList", a);
        },
        memberInfoWacca2: function(a) {
            return c("/api/marv/wacca2/user/getMemberInfo", a);
        },
        goodsListWacca2: function(a) {
            return c("/api/marv/wacca/goodsList", a);
        },
        userIconListWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserIconList", a);
        },
        setUserIconWacca2: function(a) {
            return c("/api/marv/wacca2/user/setUserIcon", a, "POST");
        },
        getUserNameplateListWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserNameplateList", a);
        },
        getGuideListWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserNavicharacterList", a);
        },
        userTitleListWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserTitleList", a);
        },
        setUserTitleWacca2: function(a) {
            return c("/api/marv/wacca2/user/setUserTitle", a, "POST");
        },
        userTrophyStatisWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserTrophyStatis", a);
        },
        userTrophyListWacca2: function(a) {
            return c("/api/marv/wacca2/user/getTrophyList", a);
        },
        setUserNameplatetWacca2: function(a) {
            return c("/api/marv/wacca2/user/setUserNameplate", a, "POST");
        },
        setUserNavicharacterWacca2: function(a) {
            return c("/api/marv/wacca2/user/setUserNavicharacter", a, "POST");
        },
        statisRankWacca2: function(a) {
            return c("/api/marv/wacca2/user/musicsRank", a);
        },
        getTrialListNameWacca2: function(a) {
            return c("/api/marv/wacca2/user/trialList", a);
        },
        getSongsWacca2: function(a) {
            return c("/api/marv/wacca2/user/musicList", a);
        },
        getSongRakingWacca2: function(a) {
            return c("/api/marv/wacca2/user/musicRank", a);
        },
        getRateRakingWacca2: function(a) {
            return c("/api/marv/wacca2/user/trialRank", a);
        },
        userMusicRateWacca2: function(a) {
            return c("/api/marv/wacca2/user/userMusicRate", a);
        },
        getRatingRakingListWacca2: function(a) {
            return c("/api/marv/wacca2/user/ratingRank", a);
        },
        userSettingeWacca2: function(a) {
            return c("/api/marv/wacca2/user/getUserOptions", a);
        },
        getSettingeWacca2: function(a) {
            return c("/api/marv/wacca2/user/getOptions", a);
        },
        setSettingeWacca2: function(a) {
            return c("/api/marv/wacca2/user/setUserOption", a, "POST");
        },
        getGateListWacca2: function(a) {
            return c("/api/marv/wacca2/sugorokuList", a);
        },
        userGateMessageWacca2: function(a) {
            return c("/api/marv/wacca2/user/userSugoroku", a);
        },
        getGachaListWacca2: function(a) {
            return c("/api/marv/wacca2/gachaList", a);
        },
        openGachaWacca2: function(a) {
            return c("/api/marv/wacca2/user/userGacha", a, "POST");
        },
        userGachaListWacca2: function(a) {
            return c("/api/marv/wacca2/user/userGachaList", a, "POST");
        },
        beginGameWacca2: function(a) {
            return c("/api/marv/wacca2/user/startPlay", a, "POST");
        },
        ratingListWacca2: function(a) {
            return c("/api/marv/wacca2/user/ratingList", a, "POST");
        },
        activityStoreWacca2: function(a) {
            return c("/api/unis/playActivity/activityStoreList", a);
        },
        activityExplainWacca2: function(a) {
            return c("/api/unis/playActivity/lastDescription", a);
        },
        activityPresentWacca2: function(a) {
            return c("/api/unis/playActivity/activityPresent", a);
        },
        exchangePresentWacca2: function(a) {
            return c("/api/unis/playActivity/exchangePresent", a, "POST");
        },
        getSeasonListWacca2: function(a) {
            return c("/api/marv/wacca2/getSeasonIds", a);
        },
        getSongDetailWacca2: function(a) {
            return c("/api/marv/wacca2/getMusicInfo", a);
        }
    };
}();