function saveJsonLocal(obj, key){
    try {
        var obj = JSON.stringify(obj, null, '\t');
        var key = key;
        localStorage.setItem(key, obj);
        writeLog(globalStrAry.log.s0001, e);
    } catch(e) {
        writeLog(globalStrAry.log.s9001, e);
        return e;
    }
}

function readJsonLocal(key){
    try {
        var key = key;
        var obj = localStorage.getItem(key);
        obj = JSON.parse(obj);
        writeLog(globalStrAry.log.s0002, e);
        return obj;
    } catch(e) {
        writeLog(globalStrAry.log.s9002, e);
        return e;
    }
}