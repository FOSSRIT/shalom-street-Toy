function ModelSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;
	Touch.Collisions(base);



	var splashImage = Sprite(0,0,1920,1080, "images/dev/characterBioScreenTest02.png");
	base.addModule(splashImage);

	var selected = Sprite(1920 - 700 - 50, 400, 474, 420, "images/dev/BoyGirlScreen/Selection.png");
	base.addModule(selected);

	if(info.superhero.gender == "female"){

		info.superhero.bodyType = "female_1";
		console.log('showing body types for female.')

		//--------------------------------------

		var boyOption = Sprite(300, 450, 426, 298, "images/dev/BoyGirlScreen/BoyButton.png");
		base.addModule(boyOption);

		var girlOption = Sprite(1220, 450, 392, 298, "images/dev/BoyGirlScreen/GirlButton.png");
		base.addModule(girlOption);


		boyOption.addEvent("mousedown", function(_clipBoard) { 
			selected.bounds.x = 240;
			selected.bounds.y = 400;
			info.superhero.bodyType = "female_1";
			_clipBoard.ToFire = ["redraw"];
		}, false);

		girlOption.addEvent("mousedown", function(_clipBoard) { 
			selected.bounds.x = 1160;
			selected.bounds.y = 400;
			info.superhero.bodyType = "female_1";
			_clipBoard.ToFire = ["redraw"];
		}, false);

	} else if(info.superhero.gender == "male"){

		info.superhero.bodyType = "male_1";
		console.log('showing body types for male.')

		//--------------------------------------

		var boyOption = Sprite(300, 450, 426, 298, "images/dev/BoyGirlScreen/BoyButton.png");
		base.addModule(boyOption);

		var girlOption = Sprite(1220, 450, 392, 298, "images/dev/BoyGirlScreen/GirlButton.png");
		base.addModule(girlOption);


		boyOption.addEvent("mousedown", function(_clipBoard) { 
			selected.bounds.x = 240;
			selected.bounds.y = 400;
			info.superhero.bodyType = "male_1";
			_clipBoard.ToFire = ["redraw"];
		}, false);

		girlOption.addEvent("mousedown", function(_clipBoard) { 
			selected.bounds.x = 1160;
			selected.bounds.y = 400;
			info.superhero.bodyType = "male_1";
			_clipBoard.ToFire = ["redraw"];
		}, false);
	}

	/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
	manager.addModule(domElementThing);*/
	
	//Buttons
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	var continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	continueButton.addEvent("mousedown",  base.changeState("CharacterBuilder", info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}