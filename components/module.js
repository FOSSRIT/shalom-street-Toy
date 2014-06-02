//module.js

/*
-- Module serves as the base object for almost everything else in the game.
-- It can be overridden and extended, but it provides a backbone for what we're doing.
*/

function Module(_x, _y, _width, _height){

	//------------INIT---------------------------
	//These variables will be copied into toReturn.
	//THEY SHOULD NOT BE USED INTERNALLY
	//-------------------------------------------

	//ToDo: Allow for null values.
	_bounds = {"x": _x || 0, "y":_y || 0, "width":_width || 128, "height":_height || 128, };

	_loaded = true; //We'll set this to false when necessary.
	_contents = []; //Sub-modules.
	_extensions = []; //What extensions have been installed.
	_events = {
		//We don't have any events to start off I guess.
	};

	//-----------INTERNAL VARIABLES------------------------

	//None for now.

	//------------LOADING EVENTS-------------------


	var _onLoaded = false;
	var _contextOnLoaded = false;
	function _onSubLoad() {
		for(var i = 0; i<toReturn.contents.length; i++){
			if(!toReturn.contents[i].loaded) { toReturn.loaded = false; return; }//Don't trigger.
		} //Got through?
		if(_onLoaded) {
			toReturn.loaded = true;
			if(_contextOnLoaded) { _onLoaded(_contextOnLoaded); } else { _onLoaded(this); }
		}
	}

	function _setLoad(_function, _ctx) {
		_onLoaded = _function; _contextOnLoaded = _ctx;
	}

	//--------------------------------------------

	function _addModule(_object) {
		//There's a heck of a lot more that needs to go
		//in this method.  I think.
		_object.setLoad(_onSubLoad); //Add it to loading queue.
		toReturn.contents.push(_object);

		//If it's already loaded, fire event in response
		//and tell us if manager is loaded.
		if(_object.loaded) _onSubLoad();
	}

	function _addEvent(eventString, funct) {

	}

	//----------------------------------------------


	function _update(dx){
		//Update sub-modules.
		for(var i =0; i<toReturn.contents.length; i++){
			toReturn.contents[i].update(dx);
		}
	}


	function _draw(){
		var toDraw = [];
		//Recursively get all sprite data to draw.
		for(var i=0; i<toReturn.contents.length; i++){
			toDraw = toDraw.concat(toReturn.contents[i].draw());
		}

		//Set offsets.
		for(i=0; i<toDraw.length; i++){
			toDraw[i].x += toReturn.interface.bounds.x;
			toDraw[i].y += toReturn.interface.bounds.y;
		}

		return toDraw;
	}


	//-----------------------------------------------------------------------------
	//---------------------PUBLIC INTERFACE----------------------------------------
	//-----------------------------------------------------------------------------


	//ToDo: fill in blank documentation.
	var toReturn = {

		/*-------------------------------------------------------------------------
		--These variables will be exposed to the extended class, but no one else.
		--Use them internally, otherwise, leave them alone.
		--------------------------------------------------------------------------*/

		//An array of sub-modules stored within this module.
		"contents":_contents,

		"extensions":_extensions,
		"events":_events,

		//Returns an array of sprite information to draw.
		//Return the results of this method from your draw method.
		"draw":_draw,

		//
		/*

		*/
		"addModule":_addModule,


		//Sets a function to be fired off when the module has finished loading.
		/*
		function: the function to be called, ctx: the object to set the context to (optional)
		*/
		"setLoad":_setLoad,

		//Update sub-modules.
		/*
		dx: the amount of time, in miliseconds, since the last update.
		*/
		"update":_update,


		/*------------------------------------------------------------------------
		--These variables are made available as a default interface you can return.  
		--You can make your own, if you're confident you know how, or (better option)
		--just append onto this one, replace methods as required, then return it modified.
		--------------------------------------------------------------------------*/


		"interface": {

			//Object with the dimensions and positions of the module.
			//{x, y, width, height}
			"bounds": _bounds,

			//Boolean of whether or not the module is loaded.  
			//False by default, should be set to true while initializing.
			"loaded": _loaded,

			//Updates the module and all sub-modules.
			/*
			dx: the amount of time, in miliseconds, since the last update.
			*/
			"update":_update,

			//Returns an array of sprite information to draw.
			"draw":_draw,

			//Sets a function to be fired off when the module has finished loading.
			/*
			function: the function to be called, ctx: the object to set the context to (optional)
			*/
			"setLoad":_setLoad,

			//
			/*

			*/
			"addModule":_addModule,

		},

	};

	return toReturn;
}