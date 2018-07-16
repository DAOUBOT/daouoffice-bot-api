const express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , path = require('path')
  , EventEmitter = require('events')
  , request = require('request-promise');

const publicUrl = '/go/public/bot/';

let Promise = require('bluebird');

class DaouOfficeBot extends EventEmitter{
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
		
		//message에 대한 이벤트 호출(봇이 메시지를 받을때)
		this.app.post('/message',(req,res) => {
			this._message(req.body);
		});
		//startBot에 대한 이벤트 호출(봇이 입장했을때)
		this.app.post('/startBot',(req,res) => {
			this._startBot(req.body);
		});
		//endBot에 대한 이벤트 호출(봇이 퇴장했을때)
		this.app.post('/endBot',(req,res) => {
			this._endBot(req.body);
		});
	}
	
	/**
	 * express 의 route 설정 (get)
	 * @param  {String} path
	 * @param  {Function} callback
	 * @see http://expressjs.com/ko/api.html
	 */
	setGetRoute(path,callback){
		this.app.get(path,callback);
	}
	
	/**
	 * express 의 route 설정 (post)
	 * @param  {String} path
	 * @param  {Function} callback
	 * @see http://expressjs.com/ko/api.html
	 */
	setPostRoute(path,callback){
		this.app.post(path,callback);
	}
	
	/**
	 * express 를 구동한다.
	 * @see http://expressjs.com/ko/api.html
	 */
	start() {
		this._webServer = http.createServer(this.app);
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
	
	/**
	 * 텍스트 메시지를 전송한다.
	 * @param  {String} 보낼곳의 방 종류 (SINGLE , ROOM) 
	 * @param  {String} 보낼곳의 방id 나 메시지 수신자의 id
	 * @param  {String} 보낼 메시지 내용
	 * @return {Promise}
	 */
	sendMessage(chatType,toId,text){
		let param = {
			"from" : {
	            "apiKey":this.apiKey
	        },
	        "to" : {
	            "id" : toId,
	            "chatType" : chatType
	        },
	        "message" : {
	            "text" : text
	        }
		}
		return this._request('buddies',param);
	}
	
	_message(result){
		super.emit('message',result);
	}
	
	_startBot(result){
		super.emit('startBot',result);
	}
	
	_endBot(result){
		super.emit('endBot',result);
	}
	
   /**
    * 다우오피스 서버에 보낼 api를 만든다.
    * @param  {String} path
    * @return {String} url
    * @private
    * @see 
    */
	_buildURL(_path){
		return this.daouApiUrl + ":8000" + publicUrl + _path;
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

module.exports = DaouOfficeBot;