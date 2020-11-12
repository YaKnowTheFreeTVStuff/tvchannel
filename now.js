const querystring = require("querystring");
const syncRequest = require("sync-request");
//ok whatever

function TVAPI(){
this.getVideoURL = getVideoLink;
}
exports.TVAPI = TVAPI;
function getVideoLink(channelNo){
var token = "?channelno="+ parseInt(channelNo) + "&mode=prod&audioCode=&format=HLS&callerReferenceNo=20140702122500";
var ajaxVideo = "http://d1jithvltpp1l1.cloudfront.net/getLiveURL";
var returnString = syncRequest("GET", ajaxVideo);
returnString = returnString.getBody();
 console.log(returnString);
returnString = JSON.parse(returnString).asset.hls.adaptive[0];
return returnString;
}

