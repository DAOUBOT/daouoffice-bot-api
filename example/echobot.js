const DaouOfficeBot = require('../src/daou-bot-api');
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr",
	"port" : 3000,
	"apiKey" : "nMxmNHAPuUxg6SB2epkX2w=="
};
const daoubot = new DaouOfficeBot(options);
daoubot.start();
daoubot.on('getMessage',(result) => {
	daoubot.sendMessage(result.to,result.from,result.message)
	.then(function(o){
		console.log(o);
	}).catch(function(err){
		console.log(err);
	});
});