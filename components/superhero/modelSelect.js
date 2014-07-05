function ModelSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;

	info.modelType = "Girl";
	info.superhero.skeleton = undefined;


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
		_clipBoard.ToFire = ["redraw"];
		console.log("selected boy." + info.modelType);
	}, false);

	girlOption.addEvent("mousedown", function(_clipBoard) { 
		selected.bounds.x = 1160;
		selected.bounds.y = 400;
		info.modelType = "Girl";
		console.log("selected girl." + info.modelType);
		_clipBoard.ToFire = ["redraw"];
	}, false);

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
	boyOptionFunc = base.changeState("CharacterBuilderBoy", _info);
	girlOptionFunc = base.changeState("CharacterBuilderGirl", _info);

	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	continueButton.addEvent("mousedown", function(_clipBoard) { 
		if(info.modelType == "Boy") {
			boyOptionFunc(_clipBoard);
		} else {
			girlOptionFunc(_clipBoard);
		}

	} , false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}