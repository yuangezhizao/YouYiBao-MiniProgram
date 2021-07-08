!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var n, e = require("./base-http.js"), i = (n = e) && n.__esModule ? n : {
        default: n
    };
    var a = i.default.request;
    i.default.requestJson, i.default.requestForm;
    exports.default = {
        pointPackageList: function(n) {
            return a("/api/konami/pointPackage/list", n);
        },
        createOrder: function(n) {
            return a("/api/konami/pointCharge/createOrder", n, "POST");
        },
        payOrder: function(n) {
            return a("/api/konami/pointCharge/payOrder", n, "POST");
        },
        orderList: function(n) {
            return a("/api/konami/pointCharge/orderList", n);
        },
        trialMemberMusic: function(n) {
            return a("/api/konami/music/trialMember", n, "POST");
        },
        scanCodeMusic: function(n) {
            return a("/api/konami/music/readQRCode", n);
        },
        startPlayMusic: function(n) {
            return a("/api/konami/music/startPlay", n, "POST");
        },
        exchangeMemberMusic: function(n) {
            return a("/api/konami/music/exchangeMember2021", n, "POST");
        },
        preExchangeMemberMusic: function(n) {
            return a("/api/konami/music/preExchangeMember2021", n, "POST");
        },
        getMemberInfoMusic: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/music/getMemberInfo", n, "GET", e);
        },
        hiscoreMusic: function(n) {
            return a("/api/konami/music/musicHiscore", n);
        },
        rankMusic: function(n) {
            return a("/api/konami/music/musicRank", n);
        },
        listMusic: function(n) {
            return a("/api/konami/music/musicList2", n);
        },
        scanCodeDance: function(n) {
            return a("/api/konami/dance/readQRCode", n);
        },
        startPlayDance: function(n) {
            return a("/api/konami/dance/startPlay", n, "POST");
        },
        trialMemberDance: function(n) {
            return a("/api/konami/dance/trialMember", n, "POST");
        },
        exchangeMemberDance: function(n) {
            return a("/api/konami/dance/exchangeMember2021", n, "POST");
        },
        preExchangeMemberDance: function(n) {
            return a("/api/konami/dance/preExchangeMember2021", n, "POST");
        },
        getMemberInfoDance: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/dance/getMemberInfo", n, "GET", e);
        },
        userPackageList: function(n) {
            return a("/api/konami/userPackage/list", n, "GET");
        },
        userPackageBalance: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/userPackage/balance", n, "GET", e);
        },
        userPackageRefund: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/userPackage/refund", n, "POST", e);
        },
        userPackagePreRefund: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/userPackage/preRefund", n, "POST", e);
        },
        scoreDetailDance: function(n) {
            return a("/api/konami/dance/scoreDetail", n, "GET");
        },
        rankListDance: function(n) {
            return a("/api/konami/dance/rankList", n, "GET");
        },
        playRecordDance: function(n) {
            return a("/api/konami/dance/playRecord", n, "GET");
        },
        rankListMusic: function(n) {
            return a("/api/konami/music/rankList", n, "GET");
        },
        scoreDetailMusic: function(n) {
            return a("/api/konami/music/scoreDetail", n, "GET");
        },
        playRecordMusic: function(n) {
            return a("/api/konami/music/playRecord", n, "GET");
        },
        exchangeCoupon: function(n) {
            return a("/api/konami/memberCoupon/exchangeCoupon", n, "POST");
        },
        couponInfo: function(n) {
            return a("/api/konami/memberCoupon/getCouponInfo", n);
        },
        exchangeList: function(n) {
            return a("/api/konami/memberCoupon/exchangeList", n);
        },
        scanCodeMusic5: function(n) {
            return a("/api/konami/music5/readQRCode", n);
        },
        startPlayMusic5: function(n) {
            return a("/api/konami/music5/startPlay", n, "POST");
        },
        getMemberInfoMusic5: function(n) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return a("/api/konami/music/getMemberInfo", n, "GET", e);
        },
        hiscoreMusic5: function(n) {
            return a("/api/konami/music5/musicHiscore", n);
        },
        rankMusic5: function(n) {
            return a("/api/konami/music5/musicRank", n);
        },
        listMusic5: function(n) {
            return a("/api/konami/music5/musicList2", n);
        },
        hiscoreDance: function(n) {
            return a("/api/konami/dance/musicHiscore", n);
        },
        rankDance: function(n) {
            return a("/api/konami/dance/musicRank", n);
        },
        listDance: function(n) {
            return a("/api/konami/dance/musicList2", n);
        },
        eventList: function(n) {
            return a("/api/konami/arenaEvent/getEventList", n);
        },
        eventDetail: function(n) {
            return a("/api/konami/arenaEvent/getEventDetail", n);
        },
        entryEvent: function(n) {
            return a("/api/konami/arenaEvent/entryEvent", n, "POST");
        },
        eventRank: function(n) {
            return a("/api/konami/arenaEvent/getEventRank", n);
        }
    };
}();