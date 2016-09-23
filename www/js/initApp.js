// This is a JavaScript file
function initApp() {
    switchGps();
    var gpsAry = getDummyGPS();
    var gpsAry = drawMap(gpsAry);    
    
    
}
// ローカルストレージからの設定読み込み
// GPS情報を保存するグローバルオブジェクトの宣言
// 検索条件を保存するグローバルオブジェクトの宣言

