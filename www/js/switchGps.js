function switchGps(change){
    var gpsActive = readJsonLocal("gpsActive");
    
    if (gpsActive == null) {
        gpsActive = -1;
        var change = true;
    }

    if (typeof change === "undefined"){
        document.getElementById("buttonSwitchGps").innerHTML=globalStrAry.button.switchGps[gpsActive];
    } else {
        gpsActive++;
        if (gpsActive >= globalStrAry.button.switchGps.length){
            gpsActive = 0;
        }
        document.getElementById("buttonSwitchGps").innerHTML=globalStrAry.button.switchGps[gpsActive];
        saveJsonLocal(gpsActive, "gpsActive");
    }
}