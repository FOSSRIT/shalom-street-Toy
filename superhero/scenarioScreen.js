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
	
	var scenarioHint = Sprite(36, 150, 384, 384, "images/dev/hints/hint1_alt2.png");
	base.addModule(scenarioHint);
	
	
	
	//Set up all the components.
	
	//Tab Buttons
	easyTab = Sprite(64, 3.5*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/easy_roboto_highlight.png");
	base.addModule(easyTab);
	
	mediumTab = Sprite(64, 4.5*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/medium_roboto.png");
	base.addModule(mediumTab);
	
	hardTab = Sprite(64, 5.5*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/hard_roboto.png");
	base.addModule(hardTab);
	
	
	//ToyboxTab
	var easyContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(easyContent);
	
	var mediumContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(mediumContent);
	
	var hardContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(hardContent);
	
	
	
	
	//Content
	
	//easy
	var scenario1Button = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-03.png");
	easyContent.addModule(scenario1Button);
	
	scenario2Button = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-02.png");
	easyContent.addModule(scenario2Button);
	
	scenario3Button = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-07-07.png");
  	easyContent.addModule(scenario3Button);
	
	
	
	//medium
	var bullyButton = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-05-05.png");
	mediumContent.addModule(bullyButton);
	
	aliensButton = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-04.png");
	mediumContent.addModule(aliensButton);
	
	mediumButton3 = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-07-07.png");
	mediumContent.addModule(mediumButton3);
	
	
	//hardTab
	var testButton1 = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-06.png");
	hardContent.addModule(testButton1);
	
	var testButton3 = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-01.png");
	hardContent.addModule(testButton3);
	
	var testButton5 = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512, "images/Backgrounds/coversforcomics-07-07.png");
	hardContent.addModule(testButton5);
	
	//Titles
	//easy
	var title_team = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/team.png");
	easyContent.addModule(title_team);
	
	var title_bank = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/bank.png");
	easyContent.addModule(title_bank);
	
	var title_villain = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/villain.png");
	easyContent.addModule(title_villain);
	
	//med
	var title_bully = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/bully.png");
	mediumContent.addModule(title_bully);
	
	var title_whale = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/whale.png");
	mediumContent.addModule(title_whale);
	
	var title_volcano = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/volcano.png");
	mediumContent.addModule(title_volcano);
	
	//hard
	var title_toy = Sprite(2*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/toy.png");
	hardContent.addModule(title_toy);
	
	var title_fire = Sprite(3*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/fire.png");
	hardContent.addModule(title_fire);
	
	var title_aliens = Sprite(4*toReturn.bounds.width/5-128, toReturn.bounds.height/2+320, 256, 128, "images/dev/scenarioTitles/aliens.png");
	hardContent.addModule(title_aliens);
	
	
	//prep for screen
	var selectedCategory = easyContent;
	easyContent.select();
	
	//Nav Buttons
	/*
	var backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	*/


	//Add mouseover events. 
	
	//Tabs
	Touch.onEnterExit(easyTab);
	easyTab.addEvent("mouseenter", function(_clipBoard){ 
		if(selectedCategory == easyContent){
			this.setImage("images/dev/testScenarios/easy_roboto_highlight.png", false, 0, 3.5*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/easy_roboto.png", false, 0, 3.5*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	easyTab.addEvent("mouseexit", function(_clipBoard){ 
		if(selectedCategory == easyContent){
			easyTab.setImage("images/dev/testScenarios/easy_roboto_highlight.png", false, 0, 3.5*toReturn.bounds.height/7-64, 256, 128); 
		}else{
			easyTab.setImage("images/dev/testScenarios/easy_roboto.png", false, 0, 3.5*toReturn.bounds.height/7-64, 256, 128); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	
	Touch.onEnterExit(mediumTab);
	mediumTab.addEvent("mouseenter", function(_clipBoard){  
		if(selectedCategory == mediumContent){
			this.setImage("images/dev/testScenarios/medium_roboto_highlight.png", false, 0, 4.5*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/medium_roboto.png", false, 0, 4.5*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	mediumTab.addEvent("mouseexit", function(_clipBoard){  
		if(selectedCategory == mediumContent){
			mediumTab.setImage("images/dev/testScenarios/medium_roboto_highlight.png", false, 0, 4.5*toReturn.bounds.height/7-64, 256, 128); 
		}else{
			mediumTab.setImage("images/dev/testScenarios/medium_roboto.png", false, 0, 4.5*toReturn.bounds.height/7-64, 256, 128); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);

	Touch.onEnterExit(hardTab);
	hardTab.addEvent("mouseenter", function(_clipBoard){  
		if(selectedCategory == hardContent){
			this.setImage("images/dev/testScenarios/hard_roboto_highlight.png", false, 0, 5.5*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/hard_roboto.png", false, 0, 5.5*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	hardTab.addEvent("mouseexit", function(_clipBoard){  
		if(selectedCategory == hardContent){
			hardTab.setImage("images/dev/testScenarios/hard_roboto_highlight.png", false, 0, 5.5*toReturn.bounds.height/7-64, 256, 128);
		}else{
			hardTab.setImage("images/dev/testScenarios/hard_roboto.png", false, 0, 5.5*toReturn.bounds.height/7-64, 256, 128);
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);

	
	//Scenarios
	
	//Easy
	Touch.onEnterExit(scenario1Button);
	scenario1Button.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/Backgrounds/coversforcomics-03.png", false, 2*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario1Button.addEvent("mouseexit", function(_clipBoard){  scenario1Button.setImage("images/Backgrounds/coversforcomics-03.png", false, 2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(scenario2Button);
	scenario2Button.addEvent("mouseenter", function(_clipBoard){   scenario2Button.setImage("images/Backgrounds/coversforcomics-02.png", false, 3*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640);  _clipBoard.ToFire = ["redraw"]; },false);
	scenario2Button.addEvent("mouseexit", function(_clipBoard){  scenario2Button.setImage("images/Backgrounds/coversforcomics-02.png", false, 3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512);  _clipBoard.ToFire = ["redraw"]; }, false);

	Touch.onEnterExit(scenario3Button);
	scenario3Button.addEvent("mouseenter", function(_clipBoard){   scenario3Button.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario3Button.addEvent("mouseexit", function(_clipBoard){  scenario3Button.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; }, false);

	//Medium
	Touch.onEnterExit(bullyButton);
	bullyButton.addEvent("mouseenter", function(_clipBoard){  bullyButton.setImage("images/Backgrounds/coversforcomics-05-05.png", false, 2*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	bullyButton.addEvent("mouseexit", function(_clipBoard){  bullyButton.setImage("images/Backgrounds/coversforcomics-05-05.png", false, 2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(aliensButton);
	aliensButton.addEvent("mouseenter", function(_clipBoard){  aliensButton.setImage("images/Backgrounds/coversforcomics-04.png", false, 3*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	aliensButton.addEvent("mouseexit", function(_clipBoard){  aliensButton.setImage("images/Backgrounds/coversforcomics-04.png", false, 3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(mediumButton3);
	mediumButton3.addEvent("mouseenter", function(_clipBoard){  mediumButton3.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	mediumButton3.addEvent("mouseexit", function(_clipBoard){  mediumButton3.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
		
	//Hard
	Touch.onEnterExit(testButton1);
	testButton1.addEvent("mouseenter", function(_clipBoard){  testButton1.setImage("images/Backgrounds/coversforcomics-06.png", false, 2*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton1.addEvent("mouseexit", function(_clipBoard){  testButton1.setImage("images/Backgrounds/coversforcomics-06.png", false, 2*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton3);
	testButton3.addEvent("mouseenter", function(_clipBoard){  testButton3.setImage("images/Backgrounds/coversforcomics-01.png", false, 3*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton3.addEvent("mouseexit", function(_clipBoard){  testButton3.setImage("images/Backgrounds/coversforcomics-01.png", false, 3*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton5);
	testButton5.addEvent("mouseenter", function(_clipBoard){  testButton5.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-160, toReturn.bounds.height/2-320, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton5.addEvent("mouseexit", function(_clipBoard){  testButton5.setImage("images/Backgrounds/coversforcomics-07-07.png", false, 4*toReturn.bounds.width/5-128, toReturn.bounds.height/2-192, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	//Swap content Events
	easyTab.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			easyTab.setImage("images/dev/testScenarios/easy_roboto.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = easyContent;
		easyTab.setImage("images/dev/testScenarios/easy_roboto_highlight.png");
		mediumTab.setImage("images/dev/testScenarios/medium_roboto.png"); 
		hardTab.setImage("images/dev/testScenarios/hard_roboto.png"); 
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
			mediumTab.setImage("images/dev/testScenarios/medium_roboto.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = mediumContent;
		easyTab.setImage("images/dev/testScenarios/easy_roboto.png");
		mediumTab.setImage("images/dev/testScenarios/medium_roboto_highlight.png");
		hardTab.setImage("images/dev/testScenarios/hard_roboto.png"); 
		//And load in all of our tabs.
		mediumContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	//Swap content Events
	hardTab.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			hardTab.setImage("images/dev/testScenarios/hard_roboto.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = hardContent;
		easyTab.setImage("images/dev/testScenarios/easy_roboto.png");
		mediumTab.setImage("images/dev/testScenarios/medium_roboto.png");
		hardTab.setImage("images/dev/testScenarios/hard_roboto_highlight.png"); 
		//And load in all of our tabs.
		hardContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	


	//Add buttons for moving around states.
	/*
	backButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );
	*/

	//Easy
	scenario1Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "team";
		//info.currentHeader = Sprite("")
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario2Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "bank";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	
	/*scenario3Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "villain";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );*/ //---Until we get graphics.
	
	
	//Medium
	bullyButton.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "bully";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	aliensButton.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "whale";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );

	/*mediumButton3.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "volcano";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );*/ //-- Until we get graphics.
	
	//Hard
	testButton1.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "toy";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton3.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "fire";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );

	/*testButton5.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "aliens";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );*/ //--- Until we get graphics.

	//For dev purposes.
	console.log("Current super powers: " + _info.superhero.powers);


	return toReturn;
}