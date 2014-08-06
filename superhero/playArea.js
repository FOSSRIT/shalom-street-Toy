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
	Touch.Collisions(base);
	toReturn.type = "PlayArea";

	base.addEvent("swapModule", function(_clipBoard){
		console.log('I, playArea, have received your *#FHS#! event.');
	}, true);

	//---------------------------FUNCTIONS---------------------------------------

	return toReturn;
}