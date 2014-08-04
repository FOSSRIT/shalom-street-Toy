function ResultsScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "ResultsScreen";
	var info = _info;
	Touch.Collisions(base);

	info.win = true;

	//-----------------------------------------------------
	//
	//Super inneficient, will fix later.

	//Dev Splash Image
	splashImage = Sprite(0,0,1920,1080, "images/dev/resultsScreenTest02.png");
	base.addModule(splashImage);
	
	//Logic
	//See if based on qualities and powers if the player won or lost the scenario
	powerFound = false;
	qualityFound = false;

	var powerRequirements = [];
	var qualityRequirements = [];

	//Load up your requirements.
	if(info.currentScenario == "Cat") {
		powerRequirements.push("fly");
		qualityRequirements.push("empathy");
		qualityRequirements.push("courage");
	} else if(info.currentScenario == "Fire") {
		powerRequirements.push("water");
		qualityRequirements.push("courage");
		qualityRequirements.push("empathy");
		qualityRequirements.push("honor");
	} else if(info.currentScenario == "Children") {
		console.log("pushing for Children");
		powerRequirements.push("diplomacy");
		powerRequirements.push("superSmart");
		qualityRequirements.push("empathy");
		qualityRequirements.push("forgiveness");
		qualityRequirements.push("honor");
		qualityRequirements.push("courage")
	} else {
		//
	}

	//Search to see if you have the requirements.
	//Right now you just need one of each.  In the future, this should change.
	for(var i=0; i<powerRequirements.length; i++){//} in powerRequirements) {
		if(info.superhero.powers.indexOf(powerRequirements[i]) != -1) { powerFound = true; };
	}
	for(var i=0; i<qualityRequirements.length; i++){//} in qualityRequirements) {
		if(info.superhero.virtues.indexOf(qualityRequirements[i]) != -1) { qualityFound = true; };
	}




	//---------------Just setting up the rest of the stuff here.---------------

	if(qualityFound && powerFound){
		resultImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-06.png");
		info.win = true;
	}else{
		resultImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-07.png");
		info.win = false;
	}
	base.addModule(resultImage);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	//Change the continue button based on whether or not we won.
	if(info.win){
		continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	} else if(!info.win){
		continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/tryAgain.png");
	}
	//Add it regardless.
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("CharacterBioScreen", _info), false);

	//We swap out the image and destination based on how you did.
	if(info.win){
		continueButton.addEvent("mousedown", base.changeState("SuperPoseScreen", _info), false);
	} else if(!info.win){
		//continueButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
		//For dev purposes - change back after we know emails work.
		continueButton.addEvent("mousedown", base.changeState("SuperPoseScreen", _info), false);
	}


	quitButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);






	return toReturn;
}