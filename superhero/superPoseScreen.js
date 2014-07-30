function SuperPoseScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "SuperPoseScreen";
	var info = _info;
	Touch.Collisions(base);

	//--------------------------------------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-08.png");
	base.addModule(splashImage);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("ResultsScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);


	return toReturn;
}