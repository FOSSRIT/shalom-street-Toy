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
	var objects = []; //Objects have events passed down to them.
	var events = {
		"mousedown":[],
		//"mousemove":[],
		"mouseup":[],
		"touchstart":[],
		"touchmove":[],
		"touchend":[]
	};

	var _onLoaded = undefined;
	var _contextOnLoaded = undefined;
	function _onSubLoad()
	{
		//Loop through all of our sub-objects and make sure that they're loaded.
		for(var i = 0; i<objects.length; i++){
			if(!objects[i].loaded) return; //Don't trigger.
		} //Got through?
		if(_onLoaded) {
			if(_contextOnLoaded) { _onLoaded(_contextOnLoaded); } else { _onLoaded(this); }
		}

	}

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

	function _update(){

	}


	function _draw(){

	}

	function _drawSprite(sprite){
		var data = sprite.getData();
		//Currently no support for spritesheets.
		ctx.drawImage(data.image, 0, 0, data.image.width, data.image.height, data.x, data.y, data.width, data.height);
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