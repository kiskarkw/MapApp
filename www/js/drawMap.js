function getSelfGps() {
    var option = {
        frequency: 1000,
        timeout: 30000
    };
    // geolocation.watchPositionを利用する場合に備え、saveSelfGps等を即時関数化しない。
    navigator.geolocation.getCurrentPosition(saveSelfGps, errorSelfGps, option);
}

function saveSelfGps(position) {
    var selfGpsAry = readJsonLocal("selfGpsAry");
    if (selfGpsAry !== null) {
        var aryLength = Object.keys(selfGpsAry).length;
    } else {
        var selfGpsAry = {};
        var aryLength = 0;
    }
    selfGpsAry[aryLength] = {};
    // positionとして取得可能な値全てを、selfGpsAryに格納する。
    for (var i in position.coords) {
        selfGpsAry[aryLength][i] = position.coords[i];
        
    }
    selfGpsAry[aryLength]["timestampGatherd"] = position.timestamp; // positionの取得時間。
    selfGpsAry[aryLength]["timestampSeverSend"] = null; // positionのサーバー送信時間、この時点ではnull。 
    saveJsonLocal(selfGpsAry, "selfGpsAry");
}

function errorSelfGps(e) {
    writeLog(globalStrAry.log.s9003, e);
}

function drawMap(gpsAry){
    console.log("Running Function [" + arguments.callee.name.toString() + "]");
    var gpsAry = gpsAry
    var latLngAry = {};
    var markerAry = {};
    var infoWindowAry = {};
    for (var i in gpsAry){
        latLngAry[i] = new google.maps.LatLng(gpsAry[i]["latitude"], gpsAry[i]["longitude"]);
        markerAry[i]= new google.maps.Marker({position: latLngAry[i]});
    }
    
    // 地図の描画
    var map = new google.maps.Map(document.getElementById("mapCanvas"), {
        zoom: 16,
        center: latLngAry[0]
    });
    map.addListener("click", function(){
        activeInfoWindow.close();
    });
    
    // マーカークリック時のイベント処理
    var markerEvent = function(marker, content, i){
　　    return function(){
            activeInfoWindow.close();
            activeInfoWindow = new google.maps.InfoWindow({content: content});
            activeInfoWindow.open(map, marker);
    　　};
    }
　  var activeInfoWindow = new google.maps.InfoWindow();
　  

　  
    // マーカーの描画
    for (var i in markerAry){
            markerAry[i].addListener("click", markerEvent(markerAry[i], gpsAry[i]["name"],i));
            markerAry[i].setMap(map);
    }
　  activeInfoWindow.addListener("closeclick", function(){
        console.log('test');
    }); 
    
}


