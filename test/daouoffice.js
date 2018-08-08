const DaouOfficeBot = require('../src/daouoffice.js');
const assert  = require('assert');
const request = require('request');

const options = {
    "daouApiUrl" : "http://bot.terracetech.co.kr",
    "botServerPort" : 3000,
    "apiKey" : "8gL1Eu+SGlN7TydPDKGMPA=="
};
let headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}
let postOptions = {
    url: 'http://localhost:3000/startBot',
    method: 'POST',
    headers: headers
}
const daoubot = new DaouOfficeBot(options);

describe('daouoffice bot api test', function() {

    before(function() {
        daoubot.start();
    });

    after(function() {
        daoubot.stop();
    });

    describe('express port test', function() {
        it('app port should be 3000', function() {
                assert.equal(daoubot.port, 3000);
        });
    });

    describe('event listener test', function(){
        it('message event', function(done){
            daoubot.on('message',(result) => {
                assert.equal(result.chatkey,"xxx");
             });

            postOptions.form =  {'chatkey': 'xxx', 'key2': 'yyy'};
            request(postOptions, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    done();
                }else{
                    assert.ok(false);
                    done();
                }
            });
        });

        it('startBot event', function(done){
            daoubot.on('startBot',(result) => {
                assert.equal(result.chatkey,"xxx");
             });

            postOptions.form =  {'chatkey': 'xxx', 'key2': 'yyy'};
            request(postOptions, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    done();
                }else{
                    assert.ok(false);
                    done();
                }
            });
        });

        it('endBot event', function(done){
            daoubot.on('endBot',(result) => {
                assert.equal(result.chatkey,"xxx");
             });

            request(postOptions, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    done();
                }else{
                    assert.ok(false);
                    done();
                }
            });
        });

    });
});
