//PlayArea.js

/*
-- The "board" of our toymaker game.
-- This is where you'll drag things over and place them.
-- This is where we will render cutscenes and stuff.
-- Where you can play with the scenes that you make.
*/

//
function PlayArea(_x, _y, _width, _height) {


	//Private variables and internal functions.
	//------------------------------VARIABLES-------------------------------------

	var x = _x;
	var y = _y; 
	var width = _width; 
	var height = _height; 

	var _contents = []; //Images and parts in the playArea.


	//-----------------Loading event-----------------------

	var _fireOnLoad = undefined;
	var _contextForLoad = undefined;
	function _onSubLoad() {
		for(var i = 0; i<_contents.length; i++){
			if(!_contents[i].loaded) { toReturn.loaded = false; return; }//Don't trigger.
		} //Got through?
		if(_onLoaded) {
			toReturn.loaded = true;
			if(_contextOnLoaded) { _onLoaded(_contextOnLoaded); } else { _onLoaded(this); }
		}
	}

	function _setLoad(_function, _ctx) {
		_onLoaded = _function, _contextOnLoaded = _ctx;

	}

	//---------------------------------------------------

	function _addGameObject(_object) {
		//There's a heck of a lot more that needs to go
		//in this method.  I think.
		_object.setLoad(_onSubLoad); //Add it to loading queue.
		_contents.push(_object);

		//If it's already loaded, fire event in response
		//and tell us if manager is loaded.
		if(_object.loaded) _onSubLoad();
	}

	function _draw(){
		//In the future, this will be modified.
		//Because in the future, contents won't be sprites.
		var toDraw = [];
		for(var i=0; i<_contents.length; i++){
			toDraw = toDraw.concat(_contents[i].draw());
		}

		//Set offsets.
		for(var i=0; i<toDraw.length; i++){
			toDraw[i].x += toReturn.bounds.x;
			toDraw[i].y += toReturn.bounds.y;
		}

		return toDraw;

		//Temp Dev Test
		// Red rectangle
		//--------ctx is not a variable that normally would be available to this--------
		//--------Comment this out outside of testing environment-----------------------
		ctx.beginPath();
		ctx.lineWidth="10";
		ctx.strokeStyle="red";
		ctx.rect(x,y,width,height);
		ctx.stroke();
		//------------------End testing environment-------------------------------------
		//------------------------------------------------------------------------------
		
	}	


	//Public interface.
	var toReturn = {

		//Public variables.  We don't need methods for these.
		"bounds":{"x":0, "y":0, "width":1920, "height":1080 },

		"loaded":false /*should be true?*/,

		//Set a function to be fired off when the sprite has finished loading.
		/*
		function: the function to be called, ctx: the object to set the context to (optional)
		*/
		"setLoad":_setLoad,

		//adds a gameObject
		/*
		gameObject: object to Add - note that gameObject refers to the wrapper around Sprite for our dolls/characters/whatever.
		It is *not* a universal object, and should *not* be used for logos, buttons, etc...
		*/
		"addGameObject":_addGameObject,

		//Returns an array of sprites to draw.
		"draw":_draw,
	}

	return toReturn;
}