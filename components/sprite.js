//Sprite.js 

/*
--Handles data storage of what to draw and where.  Mostly used in playArea.js, but if made generic enough,
--could be used in toybox.js as well.
--In the future, could be expanded to work with internal lists of images/components for compound sprites.
--In the future, could work with animations, or be scripted or some stuff like that.
*/

//Sprite is what we'll actually call.
function Sprite() {

	//------------------------------VARIABLES-------------------------------------

	var x, y, width, height;
	this.x = 5;

	//-----------------------------PROPERTIES-------------------------------------

	function _setPosition(_x, _y){ x = _x; y = _y; }


	function _getBounds() {
		return {"x":x, "y":y, "width":width, "height":height };
	}


	//All of our public methods go here.
	//Everything outside of toReturn is private.
	var toReturn = {

		//set the x and y coordinates of the sprite.
		/*
		x:number, y:number
		*/
		"setPosition":_setPosition,

		//Returns and object with the x, y, width and height of the sprite.
		"getBounds":_getBounds,
	}


	return toReturn;
}


