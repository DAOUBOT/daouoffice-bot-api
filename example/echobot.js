const DaouOfficeBot = require('../src/daouoffice');
const user = require('./routes/user');
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr",
	"botServerPort" : 3000,
	"apiKey" : "8gL1Eu+SGlN7TydPDKGMPA=="
};
const daoubot = new DaouOfficeBot(options);

// express routing
daoubot.setGetRoute('/user',user.list);

// express start
daoubot.start();

// get message
daoubot.on('message',(result) => {
	//send message
	console.log(result);
	console.log(result.chatInfo.members[1]);
	daoubot.sendMessage(result.chatKey,result.message.content)
	.then(function(o){
		console.log(o);
	}).catch(function(err){
		console.log(err);
	});
});