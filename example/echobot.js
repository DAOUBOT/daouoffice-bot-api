const DaouOfficeBot = require('../src/daou-bot-api');
const user = require('./routes/user');
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr",
	"port" : 3000,
	"apiKey" : "nMxmNHAPuUxg6SB2epkX2w=="
};
const daoubot = new DaouOfficeBot(options);

// express routing
daoubot.setGetRoute('/user',user.list);

// express start
daoubot.start();

// get message
daoubot.on('message',(result) => {
	//send message
	daoubot.sendMessage(result.chatType,result.from,result.message)
	.then(function(o){
		console.log(o);
	}).catch(function(err){
		console.log(err);
	});
});