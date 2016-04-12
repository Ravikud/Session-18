
var events = require("events");
var util = require("util");

//The thing that emits events
Eventer.function(){
	//calling the event handler
	events.EventEmitter.call(this);
	
	this.batman = function(){
		var data = "BATMAN";
		this.emit("JOKER",data);
	)
	
	this.superman = function(){
		
		this.emit("boom");
	)
});

util.inherits(Eventer,events.EventEmitter);
//the thing that listens and handles the events

listener = function(){
	this.jokerHandler = function(data){
		console.log("---Joker Event Handled");
		console.log(data);
	}
	this.sayHello = function(){
		console.log("Hello World");
	}
};

var eventer = new Eventer();
var listener = new Listerner(eventer);
eventer.on('boom',listener.jokerHandler);
//calling the class or event handler using the key boom

console.log("Executing");
eventer.batman();

eventer.superman();