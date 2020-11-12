const deasync = require("deasync");
const querystring = require("querystring");
const syncRequest = require("sync-request");
//ok whatever

function NewsAPI(){
this.getVideoURL = getVideoLink;
}
exports.NewsAPI = NewsAPI;
exports.getServerIp = getServerIp;
function getVideoLink(){
var token = "http://token.tvb.com/stream/live/hls/mobilehd_news_windows1.smil?app=news" + "&feed&client_ip=" + getServerIp();
var ajaxVideo = "https://news.tvb.com" + "/ajax_call/getVideo.php?token=" + querystring.escape(token);
var returnString = syncRequest("GET", ajaxVideo);
returnString = returnString.getBody();
returnString = JSON.parse(returnString).url;
returnString = returnString.replace(/\\/, "");
return returnString;
}

function getServerIp(){
var returnIP;
returnIP =syncRequest("GET", "http://api.ipify.org");
returnIP = returnIP.getBody();
return returnIP;
}
