# Usage

* [Events](#events)

<a name="events"></a>

## Events

*DaouOfficeBot* is an [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
that emits the following events:
1. `getMessage`: Received a new incoming formId, toId, text message
1. `startBot`: Received a new incoming bot and room Info
1. `endBot`: Received a new incoming bot and room Info