# API Reference

**Note:** If you are looking for available [events](usage.md#events) or usage of api, please refer [`usage.md`](usage.md).

<a name="DaouOfficeBot"></a>

## DaouOffice Bot
DaouOfficeBot

**Kind**: global class  
**See**

* [DaouOfficeBot](#DaouOfficeBot)
    * [new DaouBot([options])](#new_DaouBot_new)
    * _instance_
        * [start()](#DaouOfficeBot+start)
        * [.on(event, listener)](#DaouOfficeBot+on)
        * [sendMessage(fromId, toId, text)](#DaouOfficeBot+sendMessage)
        
        
<a name="new_DaouBot_new"></a>

### new DaouOfficeBot([options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.daouApiUrl] | <code>String</code> |  | daouoffice server url |
| [options.port] | <code>Number</code> | <code>3000</code> | bot server port |
| [options.apiKey] | <code>String</code> |  | bot api key |

<a name="DaouOfficeBot+start"></a>  

### daouBot.start()
express start

<a name="DaouOfficeBot+on"></a>

### daouBot.on(event, listener)
Add listener for the specified [event](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/usage.md#events).
This is the usual `emitter.on()` method.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

- [Available events](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/usage.md#events)
- https://nodejs.org/api/events.html#events_emitter_on_eventname_listener

| Param | Type |
| --- | --- |
| event | <code>String</code> | 
| listener | <code>function</code> | 

<a name="DaouOfficeBot+sendMessage"></a>

### daouBot.sendMessage(fromId, toId, text) ⇒ <code>Promise</code>
Send text message.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

| Param | Type | Description |
| --- | --- | --- |
| fromId | <code>String</code> | Unique identifier for the message recipient(botId) |
| toId | <code>String</code> | Unique identifier for the message recipient(userId or roomId) |
| text | <code>String</code> | Text of the message to be sent |