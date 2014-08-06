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


		var splashImage = Sprite(0, 0, 1920, 1080, base.jsonData[info.currentScenario].background);
		base.addModule(splashImage);
		

		//Other data.
		console.log(info.currentScenario);
		info.banner = Sprite(0, 0, 1920, 1080, base.jsonData[info.currentScenario].banner);
		info.requiredPowers = [];
		info.requiredQualities = [];
		for(var i = 0; i < base.jsonData[info.currentScenario].required.powers.length; i++){
			info.requiredPowers.push(base.jsonData[info.currentScenario].required.powers[i]);
		}
		for(i = 0; i < base.jsonData[info.currentScenario].required.qualities.length; i++){
			info.requiredQualities.push(base.jsonData[info.currentScenario].required.qualities[i]);
		}


		//info
		comic = Sprite(128, 3*toReturn.bounds.height/7-64, 256, 512, base.jsonData[info.currentScenario].comic);
		base.addModule(comic);
		title = Sprite(2*toReturn.bounds.width/6-128, 2*toReturn.bounds.height/6-64, 512, 128, base.jsonData[info.currentScenario].title);
		base.addModule(title);
		summary = Sprite(2*toReturn.bounds.width/6-128, 4*toReturn.bounds.height/6-256, 1024, 512, base.jsonData[info.currentScenario].summary);
		base.addModule(summary);
		
		//Buttons
		var backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
		base.addModule(backButton);
		
		var continueButton = Sprite(1920-256, 1080-128, 256, 128, "images/dev/buttons/continue.png");
		base.addModule(continueButton);
		
		var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
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