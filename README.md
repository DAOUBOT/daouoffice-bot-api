

# Node.js DaouOffice Bot Api
[![DaouOffice Bot API](https://img.shields.io/badge/Bot%20API-v.0.1.1-00aced.svg)](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/api.md)

Node.js module to interact with official DaouOffice Bot API. 
A bot apikey is required and can be obtained by http://bot.terracetech.co.kr:8000

## Install

```bash
npm install --save daouoffice-bot-api
```

## Usage

```js
const DaouOfficeBot = require('daouoffice-bot-api');

// http://bot.terracetech.co.kr:8000에서 발급받은 apikey를 입력
const options = {
	"daouApiUrl" : "http://bot.terracetech.co.kr:8000",
	"port" : 3000,
	"apiKey" : "YOUR_API_KEY"
};

// Create a bot
const bot = new DaouOfficeBot(options);

// express start
bot.start();

// Listen for any kind of message.
bot.on('message',(result) => {

	//send message (echo)
	bot.sendMessage(result.chatType,result.from,result.message)
	.then(function(result){
		console.log(result);
	}).catch(function(err){
		console.log(err);
	});
	
});
```

## Documentation

* [API Reference](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/api.md)

## License

**The MIT License (MIT)**
