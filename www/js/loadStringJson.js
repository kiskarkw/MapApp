function loadStringJson(url){
    // writeLog()は利用せず、consoleにログを出力する。
    var url = url;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function(){
        if (this.readyState == 4){
            // this.status == は、Android版デバッガーを経由した場合、0が返るため。
            if (this.status == 200 || this.status == 0){
                if (this.response){
                    console.log("loadStringJson success");
                    globalStrAry = this.response;
                } else {
                    console.log("loadStringJson fail. invalid responces returned");
                }
            } else {
                console.log("loadStringJson fail. http error " + this.status);
            }
        }
    }
    xmlHttpRequest.open("GET", url, true);
    xmlHttpRequest.responseType = "json";
    xmlHttpRequest.setRequestHeader('Pragma', 'no-cache');
    xmlHttpRequest.setRequestHeader('Cache-Control', 'no-cache');
    xmlHttpRequest.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
    xmlHttpRequest.send(null);
}
