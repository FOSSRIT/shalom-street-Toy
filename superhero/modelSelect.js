function ModelSelect(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;
	Touch.Collisions(base);



	

	if(info.superhero.gender == "female"){
	
		var splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-15_alt.png");
		base.addModule(splashImage);
		base.addModule(info.banner);

		info.superhero.bodyType = "female_1";

		//--------------------------------------

		var youth = Sprite(512, 216, 360, 864, "images/dev/alpha.png");
		base.addModule(youth);
		
		var adult = Sprite(512+360, 216, 469, 864, "images/dev/alpha.png");
		base.addModule(adult);

		var buff = Sprite(512+360+469, 216, 469+109, 864, "images/dev/alpha.png");
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
	
		var splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-16_alt.png");
		base.addModule(splashImage);
		base.addModule(info.banner);

		info.superhero.bodyType = "male_1";
		console.log('showing body types for male.')

		//--------------------------------------
		
		var youth = Sprite(512, 216, 360, 864, "images/dev/alpha.png");
		base.addModule(youth);
		
		var adult = Sprite(512+360, 216, 469, 864, "images/dev/alpha.png");
		base.addModule(adult);

		var buff = Sprite(512+360+469, 216, 469+109, 864, "images/dev/alpha.png");
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
	var backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("GenderSelect", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}