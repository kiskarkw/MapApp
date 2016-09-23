function debugLocalstorageShow(){
    var tempMsg=null;
    for(i=0; i<localStorage.length; i++){
        var tempKey = localStorage.key(i);
        var tempStr = localStorage.getItem(tempKey);
        tempMsg = tempMsg + "<br>" + i + "," + tempKey + "," + tempStr;
    }
    document.getElementById("debugWindow").innerHTML=tempMsg + "\n" + document.getElementById("debugWindow").innerHTML;
}

function debugLocalstorageClear(){
    localStorage.clear();
    document.getElementById("debugWindow").innerHTML="";
}

function getDummyGPS() {
    console.log("Running Function [" + arguments.callee.name.toString() + "]");
    var dummyGpsAry = [
        ["0","A","山田商業","-","0","1","35.656630","139.761163","2016/09/05 12:00:00"],
        ["1","b","山田一郎","A","1","1","35.655154","139.761271","2016/09/05 12:00:00"],
        ["1","c","佐藤一郎","A","1","1","35.656052","139.761095","2016/09/05 12:00:00"],
        ["0","D","石井大学","-","0","1","35.655069","139.762504","2016/09/05 12:00:00"],
        ["1","e","田中花子","D","1","1","35.655620","139.761134","2016/09/05 12:00:00"],
        ["0","F","経済学部","D","1","1","35.655914","139.762194","2016/09/05 12:00:00"],
        ["1","g","田中義男","F","2","1","35.655091","139.762683","2016/09/05 12:00:00"],
        ["1","h","山田二郎","-","0","1","35.656874","139.762620","2016/09/05 12:00:00"],
        ["1","i","石館哲夫","-","0","0","35.655773","139.761878","2016/09/05 12:00:00"],
        ["1","j","バルタン","-","0","1","35.656808","139.760960","2016/09/04 12:00:00"]
    ];
    var gpsAry = {};
    for(var i = 0; i <= dummyGpsAry[0].length; i++){
        gpsAry[i] = {};
        gpsAry[i]["isUser"] = dummyGpsAry[i][0];
        gpsAry[i]["name"] = dummyGpsAry[i][2];
        gpsAry[i]["latitude"] = Number(dummyGpsAry[i][6]);
        gpsAry[i]["longitude"] = Number(dummyGpsAry[i][7]);
    }
    return gpsAry;
}
