function GenderSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "GenderSelectScreen";
	var info = _info;
	Touch.Collisions(base);

	info.superhero.gender = "female";


	//--------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/dev/characterBioScreenTest02.png");
	base.addModule(splashImage);

	selected = Sprite(1920 - 700 - 50, 400, 474, 420, "images/dev/BoyGirlScreen/Selection.png");
	base.addModule(selected);

	boyOption = Sprite(300, 450, 426, 298, "images/dev/BoyGirlScreen/BoyButton.png");
	base.addModule(boyOption);

	girlOption = Sprite(1220, 450, 392, 298, "images/dev/BoyGirlScreen/GirlButton.png");
	base.addModule(girlOption);


	boyOption.addEvent("mousedown", function(_clipBoard) { 
		selected.bounds.x = 240;
		selected.bounds.y = 400;
		info.modelType = "Boy";
		info.superhero.gender = "male";
		_clipBoard.ToFire = ["redraw"];
	}, false);

	girlOption.addEvent("mousedown", function(_clipBoard) { 
		selected.bounds.x = 1160;
		selected.bounds.y = 400;
		info.modelType = "Girl";
		info.superhero.gender = "female";
		_clipBoard.ToFire = ["redraw"];
	}, false);

	/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
	manager.addModule(domElementThing);*/
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	continueButton.addEvent("mousedown",  base.changeState("ModelSelect", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}