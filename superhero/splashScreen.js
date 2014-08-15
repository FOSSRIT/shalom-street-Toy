function SplashScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	Touch.Collisions(base);
	toReturn.type = "SplashScreen";
	var info = _info;

	//Set up the title screen.
	var _background = Sprite(0, 0, 1920, 1080, "images/Backgrounds/updatedBackgrounds/background-01.png");
	base.addModule(_background);
	/*set the position and origin*/
	var _startButton = Sprite(1920/2-152.5, 3*1080/4-54, 315, 128);//*/, 128, 64);
	base.addModule(_startButton);

	//Add option to move to the next state.
	_startButton.addEvent("mousedown", 
		base.changeState("ScenarioScreen", { 
			"superhero": { 
				"virtues":[], "skeleton":undefined, "powers":[] }  }), 
		false );



	//For dev purposes.
	console.log("Current super powers: " + _info.superhero.powers);


	return toReturn;
}