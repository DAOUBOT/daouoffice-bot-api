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

| Field    | Type                               | Description                                                   |
|----------|------------------------------------|---------------------------------------------------------------|
| chatKey  | <code>String</code>                | Types of chat rooms that contain bots (SINGLE or ROOM)        |
| message  | <code>[Message](#message)</code>   | Unique identifier for the message recipient(userId or roomId) |
| chatInfo | <code>[Chat](#chat)</code>         | Text of the message to be sent                                |
| from     | <code>[ChatUser](#chatUser)</code> | Text of the message to be sent                                |
| date     | <code>String</code>                | Text of the message to be sent                                |

<a name="message"></a>

### Message

| Field   | Type                | Description                            |
|---------|---------------------|----------------------------------------|
| type    | <code>String</code> | Types of message (NORMAL, IMAGE, FILE) |
| content | <code>String</code> | Text of the message to be sent         |

<a name="chat"></a>

### Chat

| Field   | Type                                        | Description                     |
|---------|---------------------------------------------|---------------------------------|
| type    | <code>String</cod>                          | Types of rooms (SINGLE or ROOM) |
| members | <code>Array of [ChatUser](#chatUser)</code> | members of room                 |

<a name="chatUser"></a>

### ChatUser

| Field  | Type                 | Description                    |
|--------|----------------------|--------------------------------|
| seqId  | <code>String</code>  | Unique identifier for the user |
| userId | <code>String</code>  | email ID of user               |
| isBot  | <code>boolean</code> | bot or user                    |
| name   | <code>String</code>  | name of user                   |
