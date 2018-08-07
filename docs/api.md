API Reference
=============

**Note:** If you are looking for available [events](usage.md#events) or usage of api, please refer [`usage.md`](usage.md)\.

<a name="DaouOfficeBot"></a>

DaouOffice Bot
--------------

DaouOfficeBot

**Kind**: global class  
**See**

-	[DaouOfficeBot](#DaouOfficeBot)
	-	[new DaouBot([options])](#new_DaouBot_new)
	-	*instance*
		-	[setGetRoute(path,callback)](#DaouOfficeBot+setGetRoute)
		-	[setPostRoute(path,callback)](#DaouOfficeBot+setPostRoute)  
		-	[start()](#DaouOfficeBot+start)
		-	[.on(event, listener)](#DaouOfficeBot+on)
		-	[sendMessage(chatKey, text)](#DaouOfficeBot+sendMessage)

<a name="new_DaouBot_new"></a>

### new DaouOfficeBot([options])

| Param                   | Type                | Default           | Description           |
|-------------------------|---------------------|-------------------|-----------------------|
| [options]               | <code>Object</code> |                   |                       |
| [options.daouApiUrl]    | <code>String</code> |                   | daouoffice server url |
| [options.botServerPort] | <code>Number</code> | <code>3000</code> | bot server port       |
| [options.apiKey]        | <code>String</code> |                   | bot api key           |

<a name="DaouOfficeBot+setGetRoute"></a>

### daouBot.setGetRoute(path,callback)

Routes HTTP GET requests to the specified path with the specified callback functions.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

-	http://expressjs.com/ko/api.html

| Param    | Type                  |
|----------|-----------------------|
| path     | <code>String</code>   |
| callback | <code>function</code> |

<a name="DaouOfficeBot+setPostRoute"></a>

### daouBot.setPostRoute(path,callback)

Routes HTTP POST requests to the specified path with the specified callback functions.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

-	http://expressjs.com/ko/api.html

| Param    | Type                  |
|----------|-----------------------|
| path     | <code>String</code>   |
| callback | <code>function</code> |

<a name="DaouOfficeBot+start"></a>

### daouBot.start()

express start

<a name="DaouOfficeBot+on"></a>

### daouBot.on(event, listener)

Add listener for the specified [event](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/usage.md#events). This is the usual `emitter.on()` method.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

-	[Available events](https://github.com/DAOUBOT/daouoffice-bot-api/blob/master/docs/usage.md#events)
-	https://nodejs.org/api/events.html#events_emitter_on_eventname_listener

| Param    | Type                  |
|----------|-----------------------|
| event    | <code>String</code>   |
| listener | <code>function</code> |

<a name="DaouOfficeBot+sendMessage"></a>

### daouBot.sendMessage(chatKey, text) ⇒ <code>Promise</code>

Send text message.

**Kind**: instance method of [<code>DaouOfficeBot</code>](#DaouOfficeBot)  
**See**

| Param   | Type                | Description                                 |
|---------|---------------------|---------------------------------------------|
| chatKey | <code>String</code> | Unique identifier for the message recipient |
| text    | <code>String</code> | Text of the message to be sent              |
