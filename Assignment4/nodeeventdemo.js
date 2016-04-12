
var events = require('events');

var eventEmitter = new events.EventEmitter();

var ringBell = function(){
	console.log("Ring bell");
}

eventEmitter.on('doorOpen',ringBell);
eventEmitter.emit('doorOpen');
//	 eventEmitter.removeListener('doorOpen',ringBell);


