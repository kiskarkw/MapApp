// 利用例  :  writeLog("エラーメッセージ", e);
// 第1引数 : [string]カスタムメッセージ (必須)
// 第2引数 : [object]エラーオブジェクト (null以外の場合、エラーは発生していないと見なす)
// 特記事項: debugMode = trueが指定された場合、debugWindowに指定されたDOMのinnerHTMLにロギングする。

function writeLog(message, errorObject){
    var message = message;
    var errorObject = errorObject;
    var date = new Date();
    if (typeof message === "string") {
        if (typeof errorObject === "object") {
            errorObject.message = "[" + message + "]" + errorObject.message;
            var ary = readJsonLocal("errorLog");
            if (ary !== null) {
                var aryLength = Object.keys(ary).length;
            } else {
                var ary = {};
                var aryLength = 0;
            }
            ary[aryLength] = {};
            ary[aryLength][0] = date;
            ary[aryLength][1] = errorObject.message;
            ary[aryLength][2] = errorObject.stack;
            saveJsonLocal(ary, "errorLog");
            if (debugMode) {
                debugWindow.innerHTML = date + "\n"
                    + errorObject.message + "\n"
                    + errorObject.stack + "\n"
                    + debugWindow.innerHTML;
            }
        } else {
            if (debugMode) {
                debugWindow.innerHTML = date + "\n"
                    + message+ "\n"
                    + debugWindow.innerHTML;
            }
        }
    } else {
        debugWindow.innerHTML = date + "\n"
            + "writeLog Parameter Error" + "\n"
            + debugWindow.innerHTML;
    }
}