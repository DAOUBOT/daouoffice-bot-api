Usage
=====

-	[Events](#events)
-	[Available types](#availabletypes)

<a name="events"></a>

Events
------

*DaouOfficeBot* is an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) that emits the following events:  
1. `message`: Received a new incoming [ReceiveInfo](#receiveInfo) of any kind  
1. `startBot`: Received a new incoming bot and room Info  
1. `endBot`: Received a new incoming bot and room Info

<a name="availabletypes"></a>

Available types
---------------

All types used in the Daouoffice Bot API responses are represented as JSON-objects.

<a name="receiveInfo"></a>

### ReceiveInfo

| Field    | Type                  | Description                                                   |
|----------|-----------------------|---------------------------------------------------------------|
| chatKey  | String                | Types of chat rooms that contain bots (SINGLE or ROOM)        |
| message  | [Message](#message)   | Unique identifier for the message recipient(userId or roomId) |
| chatInfo | [Chat](#chat)         | Text of the message to be sent                                |
| from     | [ChatUser](#chatUser) | Text of the message to be sent                                |
| date     | String                | Text of the message to be sent                                |

<a name="message"></a>

### Message

| Field   | Type   | Description                            |
|---------|--------|----------------------------------------|
| type    | String | Types of message (NORMAL, IMAGE, FILE) |
| content | String | Text of the message to be sent         |

<a name="chat"></a>

### Chat

| Field   | Type                           | Description                     |
|---------|--------------------------------|---------------------------------|
| type    | String                         | Types of rooms (SINGLE or ROOM) |
| members | Array of [ChatUser](#chatUser) | members of room                 |

<a name="chatUser"></a>

### ChatUser

| Field  | Type    | Description                    |
|--------|---------|--------------------------------|
| seqId  | String  | Unique identifier for the user |
| userId | String  | email ID of user               |
| isBot  | boolean | bot or user                    |
| name   | String  | name of user                   |
