function ModelSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;
	Touch.Collisions(base);



	var splashImage = Sprite(0,0,1920,1080, "images/dev/createYourHero_Background.png");
	base.addModule(splashImage);

	if(info.superhero.gender == "female"){

		info.superhero.bodyType = "female_1";
		console.log('showing body types for female.')

		//--------------------------------------

		var youth = Sprite(0, 216, 640, 864, "images/production/character_wireframes/child_female.png");
		base.addModule(youth);
		
		var adult = Sprite(1920/3, 216, 640, 864, "images/production/character_wireframes/adult_female.png");
		base.addModule(adult);

		var buff = Sprite(2*1920/3, 216, 640, 864, "images/production/character_wireframes/buff_female.png");
		base.addModule(buff);

		youth.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "female_1";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
		
		adult.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "female_2";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
		
		buff.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "female_3";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
		

	} else if(info.superhero.gender == "male"){

		info.superhero.bodyType = "male_1";
		console.log('showing body types for male.')

		//--------------------------------------
		
		var youth = Sprite(0, 216, 640, 864, "images/production/character_wireframes/child_male.png");
		base.addModule(youth);
		
		var adult = Sprite(1920/3, 216, 640, 864, "images/production/character_wireframes/adult_male.png");
		base.addModule(adult);

		var buff = Sprite(2*1920/3, 216, 640, 864, "images/production/character_wireframes/buff_male.png");
		base.addModule(buff);


		youth.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "male_1";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
		
		adult.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "male_2";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
		
		buff.addEvent("mousedown", function(_clipBoard) {
			info.superhero.bodyType = "male_3";
			base.handleEvent("changeScreen", _clipBoard);
		}, false);
	}
	
	base.addEvent("changeScreen", base.changeState("CharacterBuilder", _info), false);

	/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
	manager.addModule(domElementThing);*/
	
	//Buttons
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("GenderSelect", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}