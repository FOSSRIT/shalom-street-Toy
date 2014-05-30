//PlayArea.js

/*
-- The "board" of our toymaker game.
-- This is where you'll drag things over and place them.
-- This is where we will render cutscenes and stuff.
-- Where you can play with the scenes that you make.
*/

//
function PlayArea() {


	//Private variables and internal functions.

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
		return _contents;
	}	


	//Public interface.
	var toReturn = {

		"loaded":false /*should be true?*/,

		//Set a function to be fired off when the sprite has finished loading.
		/*
		function: the function to be called, ctx: the object to set the context to (optional)
		*/
		"setLoad":_setLoad,

		"addGameObject":_addGameObject,

		//Returns an array of sprites to draw.
		"draw":_draw,
	}

	return toReturn;
}