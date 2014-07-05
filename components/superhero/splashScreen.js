function SplashScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "SplashScreen";
	var info = _info;

	//Set up the title screen.
	var _background = Sprite(0, 0, 1920, 1080, "images/dev/splashTest04.png");
	base.addModule(_background);
	/*set the position and origin*/
	var _startButton = Sprite(1920/2-128, 3*1080/4-64, 256, 128, "images/dev/startButtonTest03.png");//*/, 128, 64);
	base.addModule(_startButton);

	//Add option to move to the next state.
	_startButton.addEvent("mousedown", 
		base.changeState("ScenarioScreen", { 
			"superhero": { 
				"virtues":[], "skeleton":undefined, "powers":[] }  }), 
		false );

	Touch.onEnterExit(_startButton);
	_startButton.addEvent("mouseenter", function(){console.log("enter"); });
	_startButton.addEvent("mouseexit", function(){console.log("exit"); });


	//For dev purposes.
	console.log("Current super powers: " + _info.superhero.powers);


	return toReturn;
}