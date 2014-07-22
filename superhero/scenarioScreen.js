function ScenarioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	Touch.Collisions(base);
	toReturn.type = "ScenarioScreen";
	var info = _info;
	info.currentScenario = "";


	var splashImage = Sprite(0, 0, 1920, 1080, "images/dev/scenarioScreenTest02.png");
	base.addModule(splashImage);

	//Set up all the components.
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	var scenario1Button = Sprite(toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/scenarioButton.png");
	base.addModule(scenario1Button);
	
	scenario2Button = Sprite(2*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/scenario02_BuildingOnFire.png");
	base.addModule(scenario2Button);
	
	scenario3Button = Sprite(3*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/scenario03_ChildrenFightingOverToy.png");
  	base.addModule(scenario3Button);
	
	scenario4Button = Sprite(4*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/randomScenarioButton.png");
	base.addModule(scenario4Button);
	
	// var scenario5Button = Sprite(2*toReturn.bounds.width/5, 2*toReturn.bounds.height/3-128, 256, 256, "images/dev/scenarioButton.png");
	// base.addModule(scenario5Button);
	
	// var randomScenarioButton = Sprite(3*toReturn.bounds.width/5, 2*toReturn.bounds.height/3-128, 256, 256, "images/dev/randomScenarioButton.png");
	// base.addModule(randomScenarioButton);
	
	var quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);


	//Add mouseover events. 
	
	Touch.onEnterExit(scenario1Button);
	scenario1Button.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/scenarioButton.png", true, toReturn.bounds.width/5-48, toReturn.bounds.height/2-256, 384, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario1Button.addEvent("mouseexit", function(_clipBoard){  scenario1Button.setImage("images/dev/scenarioButton.png", true, toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);


	Touch.onEnterExit(scenario2Button);
	scenario2Button.addEvent("mouseenter", function(_clipBoard){   scenario2Button.setImage("images/dev/testScenarios/scenario02_BuildingOnFire.png", true, 2*toReturn.bounds.width/5-48, toReturn.bounds.height/2-256, 384, 640);  _clipBoard.ToFire = ["redraw"]; },false);
	scenario2Button.addEvent("mouseexit", function(_clipBoard){  scenario2Button.setImage("images/dev/testScenarios/scenario02_BuildingOnFire.png", true, 2*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512);  _clipBoard.ToFire = ["redraw"]; }, false);



	Touch.onEnterExit(scenario3Button);
	scenario3Button.addEvent("mouseenter", function(_clipBoard){   scenario3Button.setImage("images/dev/testScenarios/scenario03_ChildrenFightingOverToy.png", true, 3*toReturn.bounds.width/5-48, toReturn.bounds.height/2-256, 384, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario3Button.addEvent("mouseexit", function(_clipBoard){  scenario3Button.setImage("images/dev/testScenarios/scenario03_ChildrenFightingOverToy.png", true, 3*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; }, false);


	Touch.onEnterExit(scenario4Button);
 	scenario4Button.addEvent("mouseenter", function(_clipBoard){ scenario4Button.setImage("images/dev/randomScenarioButton.png", true, 4*toReturn.bounds.width/5-48, toReturn.bounds.height/2-256, 384, 640); _clipBoard.ToFire = ["redraw"]; },false);
 	scenario4Button.addEvent("mouseexit", function(_clipBoard){  scenario4Button.setImage("images/dev/randomScenarioButton.png", true, 4*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; }, false);

	


	//Add buttons for moving around states.
	backButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );

	scenario1Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "Cat";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario2Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "Fire";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario3Button.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "Children";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );


	scenario4Button.addEvent("mousedown", function(_clipBoard) {
		//Pass that stuff to another button.
		scenario1Button.handleEvent("mousedown", _clipBoard);
	}, false );
	// scenario5Button.addEvent("mousedown", base.changeState("DetailedScenarioScreen", _info), false );
	// randomScenarioButton.addEvent("mousedown", base.changeState("DetailedScenarioScreen", _info), false );
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );

	//For dev purposes.
	console.log("Current super powers: " + _info.superhero.powers);


	return toReturn;
}