function CharacterBioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;


	//--------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/dev/characterBioScreenTest01.png");
	base.addModule(splashImage);
	base.addModule(bioSubmission);
	bioSubmission.bounds.x = 700;
	bioSubmission.bounds.y = 250;
	bioSubmission.bounds.width = 800;
	bioSubmission.bounds.height = 300;

	/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
	manager.addModule(domElementThing);*/
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("ResultsScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}