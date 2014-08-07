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
	base.addModule(info.banner);
	
	//Logic
	//See if based on qualities and powers if the player won or lost the scenario
	powerFound = false;
	qualityFound = false;

	//Search to see if you have the requirements.
	console.log(info.requiredPowers);
	console.log(info.superhero.powers);
	//Right now you just need one of each.  In the future, this could change.
	for(var i=0; i<info.requiredPowers.length; i++){//} in powerRequirements) {
		if(info.superhero.powers.indexOf(info.requiredPowers[i]) != -1) { powerFound = true; };
		console.log('found power!');
	}
	for(var i=0; i<info.requiredQualities.length; i++){//} in qualityRequirements) {
		if(info.superhero.virtues.indexOf(info.requiredQualities[i]) != -1) { qualityFound = true; };
		console.log('found quality!');
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
	/*
	backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	*/
	
	//Change the continue button based on whether or not we won.
	if(info.win){
		continueButton = Sprite(1920-512, 1080-150, 512, 150, "images/dev/alpha.png");
	} else if(!info.win){
		continueButton = Sprite(1920-512, 1080-150, 512, 150, "images/dev/alpha.png");
	}
	//Add it regardless.
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	/*
	backButton.addEvent("mousedown", base.changeState("CharacterBioScreen", _info), false);
	*/

	//We swap out the image and destination based on how you did.
	if(info.win){
		continueButton.addEvent("mousedown", base.changeState("SuperPoseScreen", _info), false);
	} else if(!info.win){
		//continueButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
		//For dev purposes - change back after we know emails work.
		continueButton.addEvent("mousedown", base.changeState("SuperPoseScreen", _info), false);
	}


	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}