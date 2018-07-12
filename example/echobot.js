const DaouBot = require('../src/daou-bot-api');
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr",
	"port" : 3000,
	"apiKey" : "nMxmNHAPuUxg6SB2epkX2w=="
};
const webHook = new DaouBot(options);
webHook.start();
webHook.on('getMessage',(result) => {
	webHook.sendMessage(result.to,result.from,result.message)
	.then(function(o){
		console.log(o);
	}).catch(function(err){
		console.log(err);
	});
});