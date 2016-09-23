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
    selfGpsAry[aryLength]["timestampServerSend"] = null; // positionのサーバー送信時間、この時点ではnull。 
    saveJsonLocal(selfGpsAry, "selfGpsAry");
    postSelfGps();
}

function errorSelfGps(e) {
    writeLog(globalStrAry.log.s9003, e);
}


function postSelfGps() {
    console.log("not function yet");
    /*
    var selfGpsAry = readJsonLocal("selfGpsAry");
    if (selfGpsAry !== null) {
        var aryLength = Object.keys(selfGpsAry).length;
    } else {
        return;
    }
    
    for(var i = 0; i < aryLength; i++){
        // [未実装]GPSのサーバー送信処理
        // 送信済GPSをlocalStrageから削除
        if (selfGpsAry[i]["timestampServerSend"] == null) {
            selfGpsAry[i]["timestampSeverSend"] = new Date();
        }
    }
    saveJsonLocal(selfGpsAry, "selfGpsAry");
    */
}
