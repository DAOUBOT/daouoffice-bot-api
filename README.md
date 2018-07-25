

# Node.js DaouOffice Bot Api
[![DaouOffice Bot API](https://img.shields.io/badge/DaouOffice%20Bot%20API-v.0.1.3-00aced.svg)](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/api.md)
[![Build Status](https://travis-ci.org/DAOUBOT/daouoffice-bot-api.svg?branch=master)](https://travis-ci.org/DAOUBOT/daouoffice-bot-api)
[![Node Version](https://img.shields.io/node/v/passport.svg)](https://nodejs.org/en/)
[![DaouOffice Version](https://img.shields.io/badge/DaouOffice(Custom)-%3E%3D%202.5.4.0-orange.svg)](http://bot.terracetech.co.kr)

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
