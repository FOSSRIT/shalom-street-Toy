function PowersScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "PowersScreen";
	var info = _info;


	superhero.powers = [];
				
	//Dev Splash Image
	splashImage = Sprite(0,0,1920,1080, "images/dev/powersScreenTest01.png");
	base.addModule(splashImage);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Powers
	power1Button = Sprite(toReturn.bounds.width/5, toReturn.bounds.height/3-128, 256, 256, "images/dev/power1_unselected.png");
	base.addModule(power1Button);
	
	power2Button = Sprite(toReturn.bounds.width/5, 2*toReturn.bounds.height/3-128, 256, 256, "images/dev/power2_unselected.png");
	base.addModule(power2Button);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("CharacterBuilder", _info), false);
	continueButton.addEvent("mousedown", base.changeState("CharacterBioScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	
	power1Button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power1Button,"saveKitten","images/dev/power1_unselected.png","images/dev/power1_selected.png", _clipBoard);
	},false);
	
	power2Button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power2Button,"notSaveKitten","images/dev/power2_unselected.png","images/dev/power2_selected.png", _clipBoard);
	},false);


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
	backButton.addEvent("mousedown", function(_clipBoard){
		manager.removeModule(sc);
		switchState("powersScreen");
	},false);
	
	continueButton.addEvent("mousedown", function(_clipBoard){
		manager.removeModule(sc);
		switchState("resultsScreen");
	},false);
	
	quitButton.addEvent("mousedown", function(_clipBoard){
		manager.removeModule(sc);
		switchState("splashScreen");
	},false);





	return toReturn;
}