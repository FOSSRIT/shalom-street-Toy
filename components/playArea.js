//PlayArea.js

/*
-- The "board" of our toymaker game.
-- This is where you'll drag things over and place them.
-- This is where we will render cutscenes and stuff.
-- Where you can play with the scenes that you make.
*/

//
function PlayArea(_x, _y, _width, _height) {


	//------------------------------VARIABLES-------------------------------------

	var base = Module(_x, _y, _width, _height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.draw = _draw; //Modify public interface.

	//---------------------------FUNCTIONS---------------------------------------


	function _draw(){

		toDraw = base.draw();

		//Temp Dev Test
		// Red rectangle
		//--------ctx is not a variable that normally would be available to this--------
		//--------Comment this out outside of testing environment-----------------------
		ctx.beginPath();
		ctx.lineWidth="10";
		ctx.strokeStyle="red";
		ctx.rect(toReturn.bounds.x, toReturn.bounds.y, toReturn.bounds.width, toReturn.bounds.height);
		ctx.stroke();
		//------------------End testing environment-------------------------------------
		//------------------------------------------------------------------------------

		return toDraw;
	}	

	return toReturn;
}