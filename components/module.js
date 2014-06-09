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
		/*
		"Event": {call:array of functions to call, bubble:is this function going to be passed down?},
		*/
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

	function _handleEvent(_eventString, _clipBoard) {
		//If the event isn't blocked.
		if(!toReturn.clipBoard.BlockEvents || toReturn.clipBoard.BlockEvents.indexOf(_eventString) !=-1) {
			//If the event exists.
			if(toReturn.events[_eventString]) {

				//Loop through the list of functions attached to that event and fire them off.
				//Those functions can be anywhere, but they're mostly going to be internal.
				//Before we run them, we want to update our internal clipboard so they have access to it.
				for(var i=0; i<toReturn.events[_eventString].call.length; i++) {
					//Call functions.

					//FOR POSTERITY:  If you're utalizing this part of the code - ie, calling a custom function
					//and then passing down events on your own, you should probably set bubble to false.
					//You can handle passing the event down and managing the clipboard in all likelyhood - bubble is mostly for automation's sake.
					
					toReturn.events[_eventString].call[i](_clipBoard);
				}
			}

			//Bubbling events.
			if( //This might be able to be shortened.
				//If we're set to auto bubble and either the event doesn't exist or is set to bubble.
				(toReturn.autoBubbleEvents && ( !toReturn.events[_eventString] || toReturn.events[_eventString].bubble))
				|| //Or
				//If the event exists and is set to bubble downward.
				(toReturn.events[_eventString] && toReturn.events[_eventString].bubble)) 
			{
				//Pass the event on.
				for(i=0; i<toReturn.contents.length; i++) {
					//To all of the children.
					toReturn.contents[i].handleEvent(_eventString, _clipBoard);
				}
			}

			//Now that the event has been fired off, check the clipboard to see if anything else needs to be fired off.
			if(_clipBoard.ToFire) {
				for(i=0; i<_clipBoard.ToFire.length; i++) { //For each event to fire.
					//Fire it off in this context if necessary.
					if(toReturn.events[_clipBoard.ToFire[i]]){
						for(var k=0; k<toReturn.events[_clipBoard.ToFire[i]].call.length; k++) {
							toReturn.events[_clipBoard.ToFire[i]].call[k](_clipBoard); //May still have some errors.
						}
					}
					//ToDo:
					//Re-fire it off for sub-objects.
					for(var j=0; j<toReturn.contents.length; j++) { //For each object.
						//Fire it off if it isn't blocked.
						//ToDo: Think about this - should it be reading from _clipBoard for blocked events?  When should ClipBoard be set?
						if(!toReturn.clipBoard.BlockEvents || toReturn.clipBoard.BlockEvents.indexOf(_eventString) !=-1) {
							toReturn.contents[j].handleEvent(_clipBoard.ToFire[i], _clipBoard);
						}
					}
				}
			}

			//Now that we've finished that off, check to see if the clipboard should be cleared.
			if(!_clipBoard.Preserve) { _clipBoard = {}; }
		}

		return _clipBoard;//If we modified it, we modified it.  Otherwise, just have your data back.
		//Todo: make a way to clear the clipboard as necessary.
	}

	//--------------------------------------------

	function _addModule(_object, _position) {
		//There's a heck of a lot more that needs to go
		//in this method.  I think.
		_object.setLoad(_onSubLoad); //Add it to loading queue.
		if(_position != undefined){
			toReturn.contents.splice(_position, 0, _object)
		}else{
			toReturn.contents.push(_object);
		}

		//If it's already loaded, fire event in response
		//and tell us if manager is loaded.
		if(_object.loaded) _onSubLoad();
	}

	function _removeModule(_object){
		//Find and remove.
		var i = toReturn.contents.indexOf(_object);
		if(i != -1) {
			_object.setLoad(false);
			toReturn.contents.splice(i, 1);
		}
	}

	function _addEvent(eventString, funct, bubble) {
		//If the event doesn't exist, add it.
		if(!toReturn.events[eventString]) {
			toReturn.events[eventString] = {"call":new Array(), "bubble":bubble || false };
		}

		//If I'm passing in a function at all, add that too.
		if(funct) { 
			toReturn.events[eventString].call.push(funct);
		}
	}

	//Removes ALL of the events attached.
	function _removeEvent(eventString, funct) {
		//If it exists.
		if(toReturn.events[eventString]) {

			//If a function was passed in to remove, remove just that function from the toCall list.
			if(funct) {
				var i = []; //We use our own array.indexOf equivalent because we need more control.
				for(var k=0; k<toReturn.events[eventString].call.length; k++) {
					if(toReturn.events[eventString].call[k] == funct) { i.push(k); } //Add it to the list to remove.
				}
				//And remove.
				for(j=0;j<i.length;j++){
					toReturn.events[eventString].call = toReturn.events[eventString].call.splice(i[j], 1);
				}
			} else {
				//Otherwise, assume that they just want the event gone entirely.
				delete toReturn.events[eventString];
			}
		}
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
			if(toReturn.contents[i].visible) {
				toDraw = toDraw.concat(toReturn.contents[i].draw());
			}
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
		"autoBubbleEvents":true,
		"clipBoard":{},

		//Returns an array of sprite information to draw.
		//Return the results of this method from your draw method.
		"draw":_draw,

		//
		/*

		*/
		"addModule":_addModule,

		//
		/*

		*/
		"removeModule":_removeModule,


		//
		/*

		*/
		"addEvent":_addEvent,


		//
		/*

		*/
		"removeEvent":_removeEvent,

		//
		/*

		*/
		"handleEvent":_handleEvent,


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

			//
			"visible": true,

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


			//
			/*

			*/
			"removeModule":_removeModule,

			//
			/*

			*/
			"addEvent":_addEvent,


			//
			/*

			*/
			"removeEvent":_removeEvent,

			//
			/*

			*/
			"handleEvent":_handleEvent,

		},

	};

	return toReturn;
}