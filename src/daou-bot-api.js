const express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , path = require('path')
  , EventEmitter = require('events')
  , request = require('request-promise');

const publicUrl = '/go/public/bot/';

let Promise = require('bluebird');

class DaouBot extends EventEmitter{
	constructor(bot = {}) {
		super();
		this.app = express();
		this._webServer = null;
		this.port = bot.port || 3000;
		
		this.apiKey = bot.apiKey;
		this.daouApiUrl = bot.daouApiUrl;
		
		this.app.set('port', this.port);
		this.app.set('views', __dirname + '/views');
		this.app.set('view engine', 'jade');
		this.app.use(express.favicon());
		this.app.use(express.logger('dev'));
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(express.methodOverride());
		this.app.use(this.app.router);
		this.app.use(express.static(path.join(__dirname, 'public')));
		
		//getMessage에 대한 이벤트 호출(봇이 메시지를 받을때)
		this.app.post('/getMessage',(req,res) => {
			this.getMessage(req.body);
		});
		
		this.app.post('/startBot',(req,res) => {
			this.startBot(req.body);
		});
		
		this.app.post('/endBot',(req,res) => {
			this.endBot(req.body);
		});
		
		this._webServer = http.createServer(this.app);
	}
	
	start() {
		this._webServer.listen(this.app.get('port'), () => {
			 console.log('WebHook listening on port : ' + this.app.get('port'));
		});
	}
	
	/**
	 * 이벤트를 등록한다.
	 * This is the usual `emitter.on()` method.
	 * @param  {String} event
	 * @param  {Function} listener
	 * @see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
	 */
	on(event, listener) {
	    super.on(event, listener);
	}
	
	getMessage(result){
		super.emit('getMessage',result);
	}
	
	startBot(result){
		super.emit('startBot',result);
	}
	
	endBot(result){
		super.emit('endBot',result);
	}
	
	/**
	 * 텍스트 메시지를 전송한다.
	 * @param  {String} 해당봇의 id 
	 * @param  {String} 보낼곳의 방id 나 메시지 수신자의 id
	 * @param  {String} 보낼 메시지 내용
	 * @return {Promise}
	 */
	sendMessage(fromId,toId,text){
		let param = {
			"from" : {
	            "id" : fromId,
	            "apiKey":this.apiKey
	        },
	        "to" : {
	            "id" : toId
	        },
	        "message" : {
	            "text" : text
	        }	
		}
		return this._request('buddies',param);
	}
	
   /**
    * 다우오피스 서버에 보낼 api를 만든다.
    * @param  {String} path
    * @return {String} url
    * @private
    * @see 
    */
	_buildURL(_path){
		return this.daouApiUrl + publicUrl + _path;
	}
	
	/**
     * Make request against the API
     * @param  {String} _path API endpoint
     * @param  {Object} [options]
     * @private
     * @return {Promise}
     */
	_request(_path, data) {
		if(!this.apiKey){
			return Promise.reject(Error('apikey not provided!'));
		}
		
		let options = {
			method : 'POST',
			uri : this._buildURL(_path),
			headers : {
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			json : true,
			body : data 
		}	
		return request(options)
			.then(resp => {
				return "ok";
			}).catch(error => {
				if (error) {
					return error;
				}
			});
	}
}

module.exports = DaouBot;