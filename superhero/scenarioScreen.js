function ScenarioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	Touch.Collisions(base);
	toReturn.type = "ScenarioScreen";
	var info = _info;
	info.currentScenario = "";


	var splashImage = Sprite(0, 0, 1920, 1080, "images/Backgrounds/background-01.png");
	base.addModule(splashImage);
	
	
	
	//Set up all the components.
	
	//Tab Buttons
	easyTab = Sprite(0, 2*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/easy.png");
	base.addModule(easyTab);
	
	mediumTab = Sprite(0, 3*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/medium.png");
	base.addModule(mediumTab);
	
	hardTab = Sprite(0, 4*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/hard.png");
	base.addModule(hardTab);
	
	randomTab = Sprite(0, 5*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/random.png");
	base.addModule(randomTab);
	
	//ToyboxTab
	var easyContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(easyContent);
	
	var mediumContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(mediumContent);
	
	
	
	//Content
	var scenario1Button = Sprite(toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/scenarioButton.png");
	easyContent.addModule(scenario1Button);
	
	scenario2Button = Sprite(2*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/scenario02_BuildingOnFire.png");
	easyContent.addModule(scenario2Button);
	
	scenario3Button = Sprite(3*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/scenario03_ChildrenFightingOverToy.png");
  	easyContent.addModule(scenario3Button);
	
	scenario4Button = Sprite(4*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/randomScenarioButton.png");
	easyContent.addModule(scenario4Button);
	
	
	
	var bullyButton = Sprite(toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/bully.png");
	mediumContent.addModule(bullyButton);
	
	aliensButton = Sprite(2*toReturn.bounds.width/5, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/aliens.png");
	mediumContent.addModule(aliensButton);
	
	var selectedCategory = easyContent;
	easyContent.select();
	
	//Nav Buttons
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	var quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);


	//Add mouseover events. 
	
	//Tabs
	Touch.onEnterExit(easyTab);
	easyTab.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/testScenarios/easy.png", true, 0, 2*toReturn.bounds.height/7-80, 288, 160); _clipBoard.ToFire = ["redraw"]; },false);
	easyTab.addEvent("mouseexit", function(_clipBoard){  easyTab.setImage("images/dev/testScenarios/easy.png", true, 0, 2*toReturn.bounds.height/7-64, 256, 128); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(mediumTab);
	mediumTab.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/testScenarios/medium.png", true, 0, 3*toReturn.bounds.height/7-80, 288, 160); _clipBoard.ToFire = ["redraw"]; },false);
	mediumTab.addEvent("mouseexit", function(_clipBoard){  mediumTab.setImage("images/dev/testScenarios/medium.png", true, 0, 3*toReturn.bounds.height/7-64, 256, 128); _clipBoard.ToFire = ["redraw"]; },false);

	Touch.onEnterExit(hardTab);
	hardTab.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/testScenarios/hard.png", true, 0, 4*toReturn.bounds.height/7-80, 288, 160); _clipBoard.ToFire = ["redraw"]; },false);
	hardTab.addEvent("mouseexit", function(_clipBoard){  hardTab.setImage("images/dev/testScenarios/hard.png", true, 0, 4*toReturn.bounds.height/7-64, 256, 128); _clipBoard.ToFire = ["redraw"]; },false);

	Touch.onEnterExit(randomTab);
	randomTab.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/testScenarios/random.png", true, 0, 5*toReturn.bounds.height/7-80, 288, 160); _clipBoard.ToFire = ["redraw"]; },false);
	randomTab.addEvent("mouseexit", function(_clipBoard){  randomTab.setImage("images/dev/testScenarios/random.png", true, 0, 5*toReturn.bounds.height/7-64, 256, 128); _clipBoard.ToFire = ["redraw"]; },false);

	
	//Scenarios
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
	
	
	
	//Swap content Events
	easyTab.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			easyTab.setImage("images/dev/testScenarios/easy.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = easyContent;
		easyTab.setImage("images/dev/testScenarios/aliens.png");
		//And load in all of our tabs.
		easyContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	//Swap content Events
	mediumTab.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			mediumTab.setImage("images/dev/testScenarios/medium.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = mediumContent;
		mediumTab.setImage("images/dev/testScenarios/aliens.png");
		//And load in all of our tabs.
		mediumContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	


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