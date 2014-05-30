//toybox.js

/*
-- The "pallet" for our toymaker game.
-- Aka a "toybox" full of parts.
-- This is where you'll drag things over from 
in order to place them on the play area.
-- It is divided into two sections: the tabs and 
the components.
-- This should disappear or slide off to 
the side should the play area go full screen.
*/

function ToyBox(_x, _y, _width, _height){

	//Private variables and internal functions.
	//------------------------------VARIABLES-------------------------------------

	var x = _x;
	var y = _y; 
	var width = _width; 
	var height = _height; 
	
	//tab section info
	var tabX = x;
	var tabY = _y; 
	var tabWidth = width; 
	var tabHeight = height/8;

	//component section info
	var componentsX = x;
	var componentsY = y+height/8; 
	var componentsWidth = width; 
	var componentsHeight = 7*height/8;
	


	var _contents = [];
	var _tabContents = []; //list of tabs in the tab section.
	var _currentlySelectedTab; // the tab that is currently selected
	var _componentsContents = []; //list of components in the component section. these should be changed depending on what tab is selected.
	
	var _fireOnLoad = undefined;
	var _contextForLoad = undefined;
	//------------------------------FUNCTIONS-------------------------------------
	
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
		_onLoaded = _function; _contextOnLoaded = _ctx;

	}
	
	function _newTabSelected(_newTab){
		/*
			_currentlySelectedTab.highlight = false;
			_currentlySelectedTab = _newTab;
			_currentlySelectedTab.highlight = true;
			updateComponents("txt file path containing the list of components");
		*/
	}

	function updateComponents(_newListPath){
		/*
		//Go to the path and read the file.
		//update the data
		_componentsContents = _newList;
		*/
	}
	
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

		var toDraw = [];
		for(var i=0; i<_contents.length; i++){
			toDraw = toDraw.concat(_contents[i].draw());
		}

		//Set offsets.
		for(var i=0; i<toDraw.length; i++){
			toDraw[i].x += toReturn.bounds.x;
			toDraw[i].y += toReturn.bounds.y;
		}


		//Temp Dev Test
		// Blue rectangle
		ctx.beginPath();
		ctx.lineWidth="10";
		ctx.strokeStyle="blue";
		ctx.rect(x,y,width,height);
		ctx.stroke();
		
		//Temp Dev Tab Section
		//Green Rect
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.strokeStyle="green";
		ctx.rect(tabX,tabY,tabWidth,tabHeight);
		ctx.stroke();
		//Temp Dev Component Section
		//Yellow Rect
		ctx.beginPath();
		ctx.lineWidth="5";
		ctx.strokeStyle="yellow";
		ctx.rect(componentsX,componentsY,componentsWidth,componentsHeight);
		ctx.stroke();
		
		return toDraw;
	}	
	
	//Public interface.
	var toReturn = {


		"bounds":{"x": componentsX, "y":componentsY, "width":componentsWidth, "height":componentsHeight },
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