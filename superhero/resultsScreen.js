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
	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/updatedBackgrounds/background-11.png");
	base.addModule(splashImage);
	base.addModule(info.banner);

	var myResult = resultsScreenBox;
	myResult.bounds.x = 50;
	myResult.bounds.y = 400;
	myResult.bounds.width= 400;
	myResult.bounds.height = 700;
	base.addModule(myResult)
	
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
		//console.log('found power!');
	}
	for(var i=0; i<info.requiredQualities.length; i++){//} in qualityRequirements) {
		if(info.superhero.virtues.indexOf(info.requiredQualities[i]) != -1) { qualityFound = true; };
		//console.log('found quality!');
	}




	//---------------Just setting up the rest of the stuff here.---------------

	if(qualityFound && powerFound){
		resultImage = Sprite(0,0,1920,1080, "images/Backgrounds/updatedBackgrounds/background-11.png");
		info.win = true;
		myResult.getDom().innerHTML = info.winText;
		//var words = Sprite(0, 375, 512, 512, "images/dev/lorem_512.png");
	}else{
		resultImage = Sprite(0,0,1920,1080, "images/Backgrounds/updatedBackgrounds/background-12.png");
		info.win = false;
		myResult.getDom().innerHTML = info.loseText;

		//var words = Sprite(0, 375, 512, 512, "images/dev/lorem_512.png");
		
	}
	base.addModule(resultImage);
	
	//Update bounds in case they've changed.
	info.superhero.skeleton.bounds.x = 640;
	info.superhero.skeleton.bounds.y = 216;
	//Add your superhero.
	base.addModule(info.superhero.skeleton);


	
	//--------------Buttons-------------------------------
	
	//Change the buttons we get based on whether or not we won.
	var continueButton = Sprite(1920-512, 1080-150, 512, 150, "images/dev/alpha.png");
	var tryAgainButton = Sprite(1920-512, 1080-320, 512, 150, "images/dev/alpha.png");
	if(!info.win){
		base.addModule(tryAgainButton);
	}
	//Add it regardless.
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216);
	base.addModule(quitButton);
	
	//Events
	continueButton.addEvent("mousedown", base.changeState("SuperPoseScreen", _info), false);
	tryAgainButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);






	return toReturn;
}