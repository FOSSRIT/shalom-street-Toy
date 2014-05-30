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
	

	var _tabContents = []; //list of tabs in the tab section.
	var _currentlySelectedTab; // the tab that is currently selected
	var _componentsContents = []; //list of components in the component section. these should be changed depending on what tab is selected.
	
	
	//------------------------------FUNCTIONS-------------------------------------
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
	
	
	function _draw(){

		//
		
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
		
	}	
	
	//Public interface.
	var toReturn = {

		"bounds":{"x":0, "y":0, "width":1920, "height":1080 },
		//Returns an array of sprites to draw.
		"draw":_draw,

	}

	return toReturn;
}