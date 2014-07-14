function bodySelectBoy(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "bodySelectBoyScreen";
	var info = _info;
	Touch.Collisions(base);

	//------------------------------------------------------------------

	//Dev Splash Image
	splashImage = Sprite(toReturn.bounds.width/2-128,toReturn.bounds.height/2-128,128,128, "images/dev/_01.png");
	base.addModule(splashImage);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("ModelSelect", _info), false);
	continueButton.addEvent("mousedown", base.changeState("CharacterBuilderBoy", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);



	return toReturn;
}