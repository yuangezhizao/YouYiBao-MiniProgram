function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _baseHttp = require("./base-http.js"), _baseHttp2 = _interopRequireDefault(_baseHttp), request = _baseHttp2.default.request, scanCodeWacca = function(e) {
    return request("/api/marv/wacca/readQRCode", e, "POST");
}, startPlayWacca = function(e) {
    return request("/api/marv/wacca/startPlay", e, "POST");
}, memberInfoWacca = function(e) {
    return request("/api/marv/wacca/getMemberInfo", e);
}, joinMember = function(e) {
    return request("/api/marv/wacca/joinMember", e, "POST");
}, vipPackageList = function(e) {
    return request("/api/marv/wacca/vipPackageList", e);
}, buyMemberPackage = function(e) {
    return request("/api/marv/wacca/purchaseMemberPackage", e, "POST");
}, goodsList = function(e) {
    return request("/api/marv/wacca/goodsList", e);
}, purchaseGoods = function(e) {
    return request("/api/marv/wacca/purchaseGoods", e, "POST");
}, goodsOrderList = function(e) {
    return request("/api/marv/wacca/goodsOrderList", e);
}, useGoodsList = function(e) {
    return request("/api/marv/wacca/useGoodsList", e);
}, goodsLog = function(e) {
    return request("/api/marv/wacca/goodsLog", e);
}, vipCountLog = function(e) {
    return request("/api/marv/wacca/vipCountLog", e);
}, userMusicRate = function(e) {
    return request("/api/marv/wacca/userMusicRate", e);
}, userTitleList = function(e) {
    return request("/api/marv/wacca/getUserTitleList", e);
}, setUserTitle = function(e) {
    return request("/api/marv/wacca/setUserTitle", e, "POST");
}, userIconList = function(e) {
    return request("/api/marv/wacca/getUserIconList", e);
}, setUserIcon = function(e) {
    return request("/api/marv/wacca/setUserIcon", e, "POST");
}, allMusicList = function(e) {
    return request("/api/marv/wacca/musicList2", e);
}, musicInfo = function(e) {
    return request("/api/marv/wacca/getMusicInfo", e);
}, musicRank = function(e) {
    return request("/api/marv/wacca/musicRank", e);
}, statisRank = function(e) {
    return request("/api/marv/wacca/statisRank", e);
}, myStatisRank = function(e) {
    return request("/api/marv/wacca/myStatisRank", e);
}, seasonIds = function(e) {
    return request("/api/marv/wacca/getSeasonIds", e);
}, userTrophyStatis = function(e) {
    return request("/api/marv/wacca/getUserTrophyStatis", e);
}, userTrophyList = function(e) {
    return request("/api/marv/wacca/getTrophyList", e);
};

exports.default = {
    scanCodeWacca: scanCodeWacca,
    startPlayWacca: startPlayWacca,
    memberInfoWacca: memberInfoWacca,
    joinMember: joinMember,
    vipPackageList: vipPackageList,
    buyMemberPackage: buyMemberPackage,
    goodsList: goodsList,
    purchaseGoods: purchaseGoods,
    goodsOrderList: goodsOrderList,
    useGoodsList: useGoodsList,
    goodsLog: goodsLog,
    vipCountLog: vipCountLog,
    userMusicRate: userMusicRate,
    userTitleList: userTitleList,
    setUserTitle: setUserTitle,
    userIconList: userIconList,
    setUserIcon: setUserIcon,
    allMusicList: allMusicList,
    musicInfo: musicInfo,
    musicRank: musicRank,
    statisRank: statisRank,
    myStatisRank: myStatisRank,
    seasonIds: seasonIds,
    userTrophyStatis: userTrophyStatis,
    userTrophyList: userTrophyList
};