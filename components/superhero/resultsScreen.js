function ResultsScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "ResultsScreen";
	var info = _info;

	//-----------------------------------------------------

	//Dev Splash Image
	splashImage = Sprite(0,0,1920,1080, "images/dev/resultsScreenTest02.png");
	base.addModule(splashImage);
	
	//Logic
	//See if based on qualities and powers if the player won or lost the scenario
	powerFound = false;
	qualityFound = false;
	for(i = 0; i < info.superhero.powers.length; i++) {
		if(info.superhero.powers[i] == "saveKitten"){
			//If the logic finds its way here, then it means that the power is already in the list.
			//So now we have to remove it
			powerFound = true;
		}
	}
	for(i = 0; i < info.superhero.virtues.length; i++) {
		if(info.superhero.virtues[i] == "beingAwesome"){
			//If the logic finds its way here, then it means that the power is already in the list.
			//So now we have to remove it
			qualityFound = true;
		}
	}
	if(qualityFound && powerFound){
		resultImage = Sprite(toReturn.bounds.width/2-128,toReturn.bounds.height/2-128,256,256, "images/dev/win.png");
	}else{
		resultImage = Sprite(toReturn.bounds.width/2-128,toReturn.bounds.height/2-128,256,256, "images/dev/lose.png");
	}
	base.addModule(resultImage);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("WhyItWorkedScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);






	return toReturn;
}