
const events = require("events");

const eventEmitter = new events.EventEmitter();

const handler = (event)=>{
    console.log("Event fired...");
}

eventEmitter.on("myevent",handler);

eventEmitter.emit("myevent");