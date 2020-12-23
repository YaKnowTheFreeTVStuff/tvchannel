const querystring = require("querystring");
const fs = require("fs");
const syncRequest = require("sync-request");
const geoIP = require("geoip-lite");
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
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getServerIp(){
let hkIPAddr = JSON.parse(fs.readFileSync("hkipaddr.json"));
let finalIP = "";
let numbersIp2;
let numbersIp1;
let ipRange;
let selectedRange;
while(true){
selectedRange = getRandom(0,hkIPAddr.hkIPList.length - 1);
ipRange = hkIPAddr.hkIPList[selectedRange];
numbersIp1 = ipRange[0].split(".");
numbersIp2 = ipRange[1].split(".");
finalIP = getRandom(parseInt(numbersIp1[0]),parseInt(numbersIp2[0])) + "." + getRandom(parseInt(numbersIp1[1]),parseInt(numbersIp2[1])) + "." + getRandom(parseInt(numbersIp1[2]),parseInt(numbersIp2[2])) + "." + getRandom(parseInt(numbersIp1[3]),parseInt(numbersIp2[3]));
if(geoIP.lookup(finalIP).country == "HK"){
	break;
}
}
return finalIP;
}
