# Usage

* [Events](#events)

<a name="events"></a>

## Events

*DaouOfficeBot* is an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
that emits the following events:
1. `message`: Received a new incoming [Message][message] of any kind
1. `startBot`: Received a new incoming bot and room Info
1. `endBot`: Received a new incoming bot and room Info

## Available types
All types used in the Daouoffice Bot API responses are represented as JSON-objects.

<a name="message"></a>

### Message  

| Field | Type | Description |
| --- | --- | --- |
| chatType | String |Types of chat rooms that contain bots (SINGLE or ROOM) |
| toId | String | Unique identifier for the message recipient(userId or roomId) |
| text | String | Text of the message to be sent |
