//Sprite.js

/*
--Handles data storage of what to draw and where.  Mostly used in playArea.js, but if made generic enough,
--could be used in toybox.js as well.
--In the future, could be expanded to work with internal lists of images/components for compound sprites.
--In the future, could work with animations, or be scripted or some stuff like that.
*/


//Sprite is what we'll actually call.
function Sprite(_x, _y, _width, _height, _imageSource) {


	//------------------------------INIT/VARIABLES-----------------------------

	var base = Module(_x, _y, _width, _height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.loaded = false; //Images don't start out loaded.



	var image = new Image(); //Images are a thing here.
	image.src = _imageSource || "images/error.png";

	function _handle(_clipBoard){ alert(image.src); }
	base.addEvent("mousedown", _handle);

	//--------------------------INTERNAL------------------------------------

	//-----------MODIFIED LOADING---------------

	//Handles events.  
	var _fireOnLoad = undefined;
	var _ctxForLoad = undefined;
	function onImageLoad(){ 
		if(_fireOnLoad != undefined){  //If there's anything to fire off.
			//Fire off in proper context if you can, otherwise, just use the current context.
			toReturn.loaded = true;
			if(_ctxForLoad) { _fireOnLoad(_ctxForLoad); } else { _fireOnLoad(this); }
		}
	}; image.onload = onImageLoad;

	function _setLoad(_function, _ctx) {
		_fireOnLoad = _function; _ctxForLoad = _ctx;
	}

	//-----------------------------PROPERTIES-------------------------------------

	function _setImage(_image) { 
		//Works with both strings and actual images.
		if(typeof(_image) == "string") {
			image.src = _image; 
		} else  {
			image = _image;
			//Add load event. If the image is loaded, fire off the load event.
			image.onload = onImageLoad();
			if(image.complete) {
				onImageLoad();
			}
		}
	}


	function _draw(){ return Array(_getData()); }
	function _getData(){ return {"image":image, "x":toReturn.bounds.x, "y":toReturn.bounds.y, "width":toReturn.bounds.width, "height":toReturn.bounds.height }; }



	//---------Modified public interface----------------------------

	//set the source image of the sprite.
	/*
	image: img
	*/
	toReturn.setImage = _setImage;
	//Returns the sprite's dat object for drawing.
	toReturn.draw = _draw;
	//Returns an object with x, y, width, height, and image of the sprite.
	toReturn.getData = _getData;

	//Some functions are unavailable.  Don't try and add a module to a sprite, please.
	toReturn.addModule = function(){ alert("Error: Attempt to add sub-module to sprite."); };

	//set the source image of the sprite.
	/*
	image: accepts either an image, or the string url of the image you wish to pass in.
	*/
	toReturn.setImage = _setImage; //Instead use this.

	//Sets a function to be fired off when the module has finished loading.
	/*
	function: the function to be called, ctx: the object to set the context to (optional)
	*/
	toReturn.setLoad = _setLoad; //Works the same way, but now hooked into Sprites internals instead.

	//Returns an object with x, y, width, height, and image of the sprite.
	toReturn.getData = _getData; //Think of it as .bounds on steroids.


	return toReturn;
}
