function DetailedScenarioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "DetailedScenarioScreen";
	var info = _info;


	if(info.currentScenario == "Cat") {
		var splashImage = Sprite(0,0,1920,1080, "images/dev/testDetailedScenarios/detailedScenarioScreenTest_01_CatStuckInTree.png");
	} else if(info.currentScenario == "Fire") {
		var splashImage = Sprite(0,0,1920,1080, "images/dev/testDetailedScenarios/detailedScenarioScreenTest_02_BuildingOnFire.png");

	}
	else if(info.currentScenario = "Children") {
		var splashImage = Sprite(0,0,1920,1080, "images/dev/testDetailedScenarios/detailedScenarioScreenTest_03_ChildrenFightingOverToy.png");

	}
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


	return toReturn;
}