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

	//-----------------------Loading event----------------------------
	var _onLoaded = undefined;
	var _contextOnLoaded = undefined;
	function _onSubLoad() {
		//Loop through all of our sub-objects and make sure that they're loaded.
		for(var i = 0; i<objects.length; i++){
			if(!objects[i].loaded) return; //Don't trigger.
		} //Got through?
		if(_onLoaded) {
			if(_contextOnLoaded) { _onLoaded(_contextOnLoaded); } else { _onLoaded(this); }
		}
	}

	function _setLoad(_function, _ctx) {
		_onLoaded = _function; _contextOnLoaded = _ctx;
	}
	//-----------------------------------------------------------------

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
		for(var k in events){  events[k].push(_object);  } //Add it to event list.
		_object.setLoad(_onSubLoad); //Add it to loading queue.
		objects.push(_object);

		//If it's already loaded, fire event in response
		//and tell us if manager is loaded.
		if(_object.loaded) _onSubLoad();
	}

	function _update(){

	}


	//Currently, very ineficient, but does allow for future expansion.
	function _draw(){
		//Loop through all objects and get list of sprites from them to return.
		var toDraw = []; //Fill this with sprites.
		for(var i=0; i<objects.length; i++){ //Theoretically, we could perform some opperations in here if need be.
			//Objects at the front of the array get drawn before objects in the back.
			toDraw = toDraw.concat(objects[i].draw());
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(var i=0; i<toDraw.length; i++) {
			var data = toDraw[i].getData();
			//Currently no support for spritesheets.
			ctx.drawImage(data.image, 0, 0, data.image.width, data.image.height, data.x, data.y, data.width, data.height);

		}
		playArea.draw();
		toybox.draw();
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

		//Set a function to be fired off when the sprite has finished loading.
		/*
		function: the function to be called, ctx: the object to set the context to (optional)
		*/
		"setLoad":_setLoad,

		//Draws all of the objects in the game.
		"draw":_draw,

		//Draws a sprite.
		/*
		sprite: the sprite to draw.  This should be pulled from our native sprite class.
		*/
		"drawSprite":_drawSprite,

	};

	return toReturn;

}