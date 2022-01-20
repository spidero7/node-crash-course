const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const MyEmitterObj = new MyEmitter();

// Event listener
MyEmitterObj.on("event", () => console.log("Event Fired!"));

// Init event
MyEmitterObj.emit("event");
