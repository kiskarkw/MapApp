function drawMap(gpsAry){
    var gpsAry = gpsAry;
    var latLngAry = {};
    var markerAry = {};
    var infoWindowAry = {};
    for (var i in gpsAry){
        latLngAry[i] = new google.maps.LatLng(gpsAry[i]["latitude"], gpsAry[i]["longitude"]);
        markerAry[i]= new google.maps.Marker({position: latLngAry[i]});
    }
    
    // 縮尺の自動調整
    var bounds = new google.maps.LatLngBounds();
        
    // 地図の描画
    var map = new google.maps.Map(document.getElementById("mapCanvas"), {
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
            bounds.extend (markerAry[i].position);
    }
    map.fitBounds (bounds);
}


