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
	
	
	// 일반 테스트일때
	var message = {
			type : "text",
			content : result.message.content
			
	}
	
	// 카드형식일때
	/*var message = {
			type : "card",
			content : [
				{
					title:"test",
					imageUrl:"tttt",
					linkUrl:"xxxx",
					description:"333",
					button : [
						{
							name : "btn1",
							type : "url",
							url : "aaaa",
						}
					]
				},
				{
					title:"test2",
					imageUrl:"yyyyy",
					linkUrl:"aaaa",
					description:"xxxxx",
					button : [
						{
							name : "btn1",
							type : "url",
							url : "aaaa",
						}
					]
				}
				
			]		
	};*/
	
	//봇이 메시지 발송
	daoubot.sendMessage(result.buddySeq,result.chatInfo,message)
	.then(function(o){
		console.log(o);
	}).catch(function(err){
		console.log(err);
	});
	
});