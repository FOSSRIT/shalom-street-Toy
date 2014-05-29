//Manager.js

/*
--Keeps track of playArea.js and toybox.js
--Handles drawing and things of that nature.
--
--Stuff we rely on:
--Big objects like the PlayArea and ToyBox need to have
--a method to pass in an event.
*/

function Manager() {

	//-------------VARIABLES-----------------------------------

	var canvas, ctx;
	var objects = [];
	var events = {
		"mousedown":[],
		//"mousemove":[],
		"mouseup":[],
		"touchstart":[],
		"touchmove":[],
		"touchend":[]
	};

	//
	function _init(_canvas, _ctx) {
		canvas = _canvas;
		ctx = _ctx;

		//set up events.
		for(var p in events) //For each event we're tracking.
			canvas.addEventListener(p, function(e){ //When triggered, 
				for(var a=0;a<events[p].length;a++) {
					var data = {
						"x":5, 
						"y":5
					};

					//Pass to relevant objects.
					/*//uncomment when method exists.
					events[p][a].fireEvent(/relevant data goes here/);
					*/
				}
		});
	}

	//Check for an event and pass it into a certain object.
	function _addObject(_object){
		events["touchstart"].push(_object);
		events["touchmove"].push(_object);
		events["touchend"].push(_object);
	}


	function _draw(){

	}

	function _update(){

	}


	function _drawSprite(sprite){
		var data = sprite.getData(); //Or whatever this method ends up being.
		//Currently no support for spritesheets.
		ctx.fillRect(0,0, 400, 400);
		ctx.drawImage(data.image, 10, 10);
		ctx.drawImage(data.image, 0, 0, data.width, data.height, data.x, data.y, data.width, data.height);
	}


	//-------------PUBLIC INTERFACE---------------------------

	var toReturn = {
		//pass in required variables for Manager to function
		/*
		canvas:canvas, ctx: context - canvas.getContext("2d")
		*/
		"init":_init,

		//Adds an object to our list of things we're tracking and passing events to.
		/*
		_object: the object to track and update.  This relies on some methods actually existing in object.
		*/
		"addObject":_addObject,

		//
		/*
		sprite: the sprite to draw.  This should be pulled from our native sprite class.
		*/
		"drawSprite":_drawSprite,

	};

	return toReturn;

}