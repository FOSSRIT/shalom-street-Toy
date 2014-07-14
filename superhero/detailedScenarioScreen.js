function DetailedScenarioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "DetailedScenarioScreen";
	var info = _info;
	Touch.Collisions(base);


	//Load data in.
	jsonLoader.Load("data/scenarios.js", function(result){
		jsonBuilder.GetJson(base, result);


		var splashImage = Sprite(0, 0, 1920, 1080, base.jsonData[info.currentScenario])
		base.addModule(splashImage);
		
		//Buttons
		var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
		base.addModule(backButton);
		
		var continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
		base.addModule(continueButton);
		
		var quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
		base.addModule(quitButton);
		
		//Events
		backButton.addEvent("mousedown", base.changeState("ScenarioScreen", _info), false);
		continueButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
		quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);


		//For dev purposes.
		console.log("Current super powers: " + _info.superhero.powers);


	});

	return toReturn;
}