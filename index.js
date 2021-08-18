const express = require("express");
const tvb = require("./tvb");
const now = require("./now");

const port = process.env.PORT || 80;
var app = express();

app.get("/tvb", function(req, res){
var newsLink = new tvb.NewsAPI();
res.set('Access-Control-Allow-Origin', '*');
res.redirect(newsLink.getVideoURL(req.query.channel).replace("http://", "https://"));
});
app.get("/nowtv", function(req, res){
var newsLink = new now.TVAPI();
res.set('Access-Control-Allow-Origin', '*');
res.redirect(newsLink.getVideoURL(parseInt(req.query.channelCode)).replace("http://", "https://"));
});
app.listen(port, () => {
console.log("Server started and app is listening on port " + port);
});
