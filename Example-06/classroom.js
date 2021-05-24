
const events = require("events");

const eventEmitter = new events.EventEmitter();

class Classroom
{
    
    constructor()
    {
        eventEmitter.on("doorOpen",function(event){
            console.log("Door Opened");
            console.log(event);
        });

        eventEmitter.on("doorClose",function(event){
            console.log("Door closed");
            console.log(event);
        })
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