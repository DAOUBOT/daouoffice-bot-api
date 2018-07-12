

# Node.js DaouOffice Bot Api
[![Bot API](https://img.shields.io/badge/Bot%20API-v.0.0.5-00aced.svg)](http://bot.terracetech.co.kr)

Node.js module to interact with official DaouOffice Bot API. 
A bot apikey is required and can be obtained by http://bot.terracetech.co.kr:8000

## Install

```bash
npm install --save daouoffice-bot-api
```

## Usage

```js
const DaouBot = require('daouoffice-bot-api');

// http://bot.terracetech.co.kr:8000에서 발급받은 apikey를 입력
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr:8000",
	"port" : 3000,
	"apiKey" : "YOUR_API_KEY"
};

// Create a bot
const bot = new DaouBot(options);

// express start
bot.start();

// Listen for any kind of message.
bot.on('getMessage',(result) => {

	//send message (echo)
	bot.sendMessage(result.to,result.from,result.message)
	.then(function(result){
		console.log(result);
	}).catch(function(err){
		console.log(err);
	});
	
});
```

## Documentation

* [Usage](http://bot.terracetech.co.kr): 작성중

## License

**The MIT License (MIT)**
