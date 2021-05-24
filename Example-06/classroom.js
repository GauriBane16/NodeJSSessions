const events = require("events");

const eventEmitter = new events.EventEmitter();

class Classroom
{
    
    constructor()
    {
        eventEmitter.on("doorOpen",this.commonHandler);
        eventEmitter.on("doorClose",this.commonHandler);
    }

    commonHandler= (event)=>{
        console.log("event fired");
        console.log(event);
    }

    openDoor()
    {   
        eventEmitter.emit("doorClose",{event:"doorOpen",at:"10.30",by:"suresh"});
    }

    closeDoor()
    {
        eventEmitter.emit("doorClose",{event:"doorClose",at:"10.20",by:"ramesh"});
    }
}

const classroom = new Classroom();
classroom.openDoor();
classroom.closeDoor();