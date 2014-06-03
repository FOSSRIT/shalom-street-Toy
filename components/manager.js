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
	var base = Module(0,0,1920,1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.init = _init;
	toReturn.draw = _draw;
	var clipBoard = {};

	//-----------------------------------------------------------------

	//
	function _init(_canvas, _ctx) {
		canvas = _canvas;
		ctx = _ctx;
	}

	function _update(){

	}


	//Currently, very ineficient, but does allow for future expansion.
	function _draw(){

		//Clear the screen.
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Loop through all objects and get list of sprites from them to return.
		var toDraw = []; //Fill this with sprites.
		for(var i=0; i<base.contents.length; i++){ //Theoretically, we could perform some opperations in here if need be.
			//Objects at the front of the array get drawn before objects in the back.
			toDraw = toDraw.concat(base.contents[i].draw());
		}

		for(var i=0; i<toDraw.length; i++) {
			var data = toDraw[i];
			//Currently no support for spritesheets.
			ctx.drawImage(data.image, 0, 0, data.image.width, data.image.height, data.x, data.y, data.width, data.height);
		}
	}


	//-------------PUBLIC INTERFACE---------------------------


	return toReturn;

}