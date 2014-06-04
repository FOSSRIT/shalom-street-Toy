//Touch.js

/*
-- Adds touch events and touch handling to a module.
-- Run this extension on your base after declaring it with module.
-- 
*/

//Namespace.
//Almost everything in an extension is public facing.  
//People who use them should know what they're doing and how to modify it.
//Try not to have methods that you're not comfortable with the user calling on their own.
//Ideally, the user should be able to add any function as an extension.

//Our convention right now is for publicly facing variables to be lowercase in extensions
//And for functions that can be called as extensions to be uppercase.
var Touch = {}

//Events that we'll add.
Touch.events = [
	"mousedown",
	"mouseup",
	"mousemove",
	"touchbegin",
	"touchend",
	"touchmove"
]

//Adds in events and sets them to bubble downward modified for the coordinate system of where they're bubbling down to.
Touch.Base = function(module){
	for(var i=0; i<Touch.events.length; i++){
		//Add the events.
		module.addEvent(Touch.events, function(_clipBoard){ 
			//When recieving a touch event, loop through other events, and if applicable, send the event to them.
			//Update their clipBoard with the correct info.
			for(var j=0; j<module.contents.length; j++) {

				//Update
				_clipBoard.mousex -= module.contents[j].bounds.x;
				_clipBoard.mousey -= module.contents[j].bounds.y;
				//Pass down the function.
				module.contents[j].handleEvent("", _clipBoard);
				//Fix the clipboard so that the process can be repeated.
				_clipBoard.mousex -= module.contents[j].bounds.x;
				_clipBoard.mousey -= module.contents[j].bounds.y;
			}
		}, false /*don't bubble event, we're handling that*/);
	}
}

//Adds in events and sets them to bubble downward if they're colliding with sub-modules.
Touch.Collisions = function(module){
	for(var i=0; i<Touch.events.length; i++){
		//Add the events.
		var eventToAdd = Touch.events[i];
		module.addEvent(eventToAdd, function(_clipBoard){ 
			//When recieving a touch event, loop through other events, and if applicable, send the event to them.
			//Update their clipBoard with the correct info.
			for(var j=0; j<module.contents.length; j++) {
				//Collision detection
				//--------------------------------------------------------------------------------------------
				if(_clipBoard.mousex > module.contents[j].bounds.x &&
					_clipBoard.mousex < module.contents[j].bounds.x + module.contents[j].bounds.width &&
					_clipBoard.mousey > module.contents[j].bounds.y &&
					_clipBoard.mousey < module.contents[j].bounds.y + module.contents[j].bounds.height) {
				//------------------------------------------------------------------------------------------
					//Update
					_clipBoard.mousex -= module.contents[j].bounds.x;
					_clipBoard.mousey -= module.contents[j].bounds.y;
					//Pass down the function.
					module.contents[j].handleEvent(_clipBoard.eventType, _clipBoard);
					//Fix the clipboard so that the process can be repeated.
					_clipBoard.mousex += module.contents[j].bounds.x;
					_clipBoard.mousey += module.contents[j].bounds.y;
				}
			}
		}, false /*don't bubble event, we're handling that*/);
	}
}

//Useless at the moment.
Touch.Resolve = function(module){

}

