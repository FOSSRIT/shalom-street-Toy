function GenderSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "GenderSelectScreen";
	var info = _info;
	Touch.Collisions(base);

	info.superhero.gender = "female";


	//--------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/updatedBackgrounds/background-05.png");
	base.addModule(splashImage);
	base.addModule(info.banner);

	boyOption = Sprite(512, 216, 658, 864, "images/dev/alpha.png");
	base.addModule(boyOption);

	girlOption = Sprite(1170, 216, 750, 864, "images/dev/alpha.png");
	base.addModule(girlOption);


	boyOption.addEvent("mousedown", function(_clipBoard) { 
		info.modelType = "Boy";
		info.superhero.gender = "male";
		_clipBoard.ToFire = ["redraw"];
		base.changeState("ModelSelect", _info)(_clipBoard);
	}, false);

	girlOption.addEvent("mousedown", function(_clipBoard) { 
		info.modelType = "Girl";
		info.superhero.gender = "female";
		_clipBoard.ToFire = ["redraw"];
		base.changeState("ModelSelect", _info)(_clipBoard);
	}, false);

	/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
	manager.addModule(domElementThing);*/
	
	//Buttons
	backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}