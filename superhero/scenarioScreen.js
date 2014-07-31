function ScenarioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	Touch.Collisions(base);
	toReturn.type = "ScenarioScreen";
	var info = _info;
	info.currentScenario = "";


	var splashImage = Sprite(0, 0, 1920, 1080, "images/dev/testScenarios/background.png");
	base.addModule(splashImage);
	
	
	
	//Set up all the components.
	
	//Tab Buttons
	easyTab = Sprite(64, 2*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/easy_roboto_highlight.png");
	base.addModule(easyTab);
	
	mediumTab = Sprite(64, 3*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/medium_roboto.png");
	base.addModule(mediumTab);
	
	hardTab = Sprite(64, 4*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/hard_roboto.png");
	base.addModule(hardTab);
	
	randomTab = Sprite(64, 5*toReturn.bounds.height/7-64, 256, 128, "images/dev/testScenarios/random_roboto.png");
	base.addModule(randomTab);
	
	//ToyboxTab
	var easyContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(easyContent);
	
	var mediumContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(mediumContent);
	
	var hardContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(hardContent);
	
	var randomContent = ToyBoxTab(0,0,1920,1080, "scenarios");
	base.addModule(randomContent);
	
	
	
	//Content
	
	//easy
	var scenario1Button = Sprite(2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/team.png");
	easyContent.addModule(scenario1Button);
	
	scenario2Button = Sprite(3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/bank.png");
	easyContent.addModule(scenario2Button);
	
	scenario3Button = Sprite(4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/villain.png");
  	easyContent.addModule(scenario3Button);
	
	scenario4Button = Sprite(5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/easy.png");
	easyContent.addModule(scenario4Button);
	
	
	//medium
	var bullyButton = Sprite(2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/bully.png");
	mediumContent.addModule(bullyButton);
	
	aliensButton = Sprite(3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/whale.png");
	mediumContent.addModule(aliensButton);
	
	mediumButton3 = Sprite(4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/volcano.png");
	mediumContent.addModule(mediumButton3);
	
	mediumButton4 = Sprite(5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/medium.png");
	mediumContent.addModule(mediumButton4);
	
	//hardTab
	var testButton1 = Sprite(2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/scenario03_ChildrenFightingOverToy.png");
	hardContent.addModule(testButton1);
	
	var testButton3 = Sprite(3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/scenario02_BuildingOnFire.png");
	hardContent.addModule(testButton3);
	
	var testButton5 = Sprite(4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/aliens.png");
	hardContent.addModule(testButton5);
	
	var testButton7 = Sprite(5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/hard.png");
	hardContent.addModule(testButton7);
	
	//random
	var testButton2 = Sprite(2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/easy.png");
	randomContent.addModule(testButton2);
	
	var testButton4 = Sprite(3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/medium.png");
	randomContent.addModule(testButton4);
	
	var testButton6 = Sprite(4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/hard.png");
	randomContent.addModule(testButton6);
	
	var testButton8 = Sprite(5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512, "images/dev/testScenarios/dev/total.png");
	randomContent.addModule(testButton8);
	
	//prep for screen
	var selectedCategory = easyContent;
	easyContent.select();
	
	//Nav Buttons
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);


	//Add mouseover events. 
	
	//Tabs
	Touch.onEnterExit(easyTab);
	easyTab.addEvent("mouseenter", function(_clipBoard){ 
		if(selectedCategory == easyContent){
			this.setImage("images/dev/testScenarios/easy_roboto_highlight.png", true, 0, 2*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/easy_roboto.png", true, 0, 2*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	easyTab.addEvent("mouseexit", function(_clipBoard){ 
		if(selectedCategory == easyContent){
			easyTab.setImage("images/dev/testScenarios/easy_roboto_highlight.png", true, 0, 2*toReturn.bounds.height/7-64, 256, 128); 
		}else{
			easyTab.setImage("images/dev/testScenarios/easy_roboto.png", true, 0, 2*toReturn.bounds.height/7-64, 256, 128); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	
	Touch.onEnterExit(mediumTab);
	mediumTab.addEvent("mouseenter", function(_clipBoard){  
		if(selectedCategory == mediumContent){
			this.setImage("images/dev/testScenarios/medium_roboto_highlight.png", true, 0, 3*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/medium_roboto.png", true, 0, 3*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	mediumTab.addEvent("mouseexit", function(_clipBoard){  
		if(selectedCategory == mediumContent){
			mediumTab.setImage("images/dev/testScenarios/medium_roboto_highlight.png", true, 0, 3*toReturn.bounds.height/7-64, 256, 128); 
		}else{
			mediumTab.setImage("images/dev/testScenarios/medium_roboto.png", true, 0, 3*toReturn.bounds.height/7-64, 256, 128); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);

	Touch.onEnterExit(hardTab);
	hardTab.addEvent("mouseenter", function(_clipBoard){  
		if(selectedCategory == hardContent){
			this.setImage("images/dev/testScenarios/hard_roboto_highlight.png", true, 0, 4*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/hard_roboto.png", true, 0, 4*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	hardTab.addEvent("mouseexit", function(_clipBoard){  
		if(selectedCategory == hardContent){
			hardTab.setImage("images/dev/testScenarios/hard_roboto_highlight.png", true, 0, 4*toReturn.bounds.height/7-64, 256, 128);
		}else{
			hardTab.setImage("images/dev/testScenarios/hard_roboto.png", true, 0, 4*toReturn.bounds.height/7-64, 256, 128);
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	
	Touch.onEnterExit(randomTab);
	randomTab.addEvent("mouseenter", function(_clipBoard){  
		if(selectedCategory == randomContent){
			this.setImage("images/dev/testScenarios/random_roboto_highlight.png", true, 0, 5*toReturn.bounds.height/7-80, 288, 160); 
		}else{
			this.setImage("images/dev/testScenarios/random_roboto.png", true, 0, 5*toReturn.bounds.height/7-80, 288, 160); 
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);
	randomTab.addEvent("mouseexit", function(_clipBoard){  
		if(selectedCategory == randomContent){
			randomTab.setImage("images/dev/testScenarios/random_roboto_highlight.png", true, 0, 5*toReturn.bounds.height/7-64, 256, 128);
		}else{
			randomTab.setImage("images/dev/testScenarios/random_roboto.png", true, 0, 5*toReturn.bounds.height/7-64, 256, 128);
		}
		_clipBoard.ToFire = ["redraw"]; 
	},false);

	
	//Scenarios
	
	//Easy
	Touch.onEnterExit(scenario1Button);
	scenario1Button.addEvent("mouseenter", function(_clipBoard){  this.setImage("images/dev/testScenarios/dev/team.png", true, 2*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario1Button.addEvent("mouseexit", function(_clipBoard){  scenario1Button.setImage("images/dev/testScenarios/dev/team.png", true, 2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(scenario2Button);
	scenario2Button.addEvent("mouseenter", function(_clipBoard){   scenario2Button.setImage("images/dev/testScenarios/dev/bank.png", true, 3*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640);  _clipBoard.ToFire = ["redraw"]; },false);
	scenario2Button.addEvent("mouseexit", function(_clipBoard){  scenario2Button.setImage("images/dev/testScenarios/dev/bank.png", true, 3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512);  _clipBoard.ToFire = ["redraw"]; }, false);

	Touch.onEnterExit(scenario3Button);
	scenario3Button.addEvent("mouseenter", function(_clipBoard){   scenario3Button.setImage("images/dev/testScenarios/dev/villain.png", true, 4*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	scenario3Button.addEvent("mouseexit", function(_clipBoard){  scenario3Button.setImage("images/dev/testScenarios/dev/villain.png", true, 4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; }, false);

	Touch.onEnterExit(scenario4Button);
 	scenario4Button.addEvent("mouseenter", function(_clipBoard){ scenario4Button.setImage("images/dev/testScenarios/dev/easy.png", true, 5*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
 	scenario4Button.addEvent("mouseexit", function(_clipBoard){  scenario4Button.setImage("images/dev/testScenarios/dev/easy.png", true, 5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; }, false);
	
	//Medium
	Touch.onEnterExit(bullyButton);
	bullyButton.addEvent("mouseenter", function(_clipBoard){  bullyButton.setImage("images/dev/testScenarios/dev/bully.png", true, 2*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	bullyButton.addEvent("mouseexit", function(_clipBoard){  bullyButton.setImage("images/dev/testScenarios/dev/bully.png", true, 2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(aliensButton);
	aliensButton.addEvent("mouseenter", function(_clipBoard){  aliensButton.setImage("images/dev/testScenarios/dev/whale.png", true, 3*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	aliensButton.addEvent("mouseexit", function(_clipBoard){  aliensButton.setImage("images/dev/testScenarios/dev/whale.png", true, 3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(mediumButton3);
	mediumButton3.addEvent("mouseenter", function(_clipBoard){  mediumButton3.setImage("images/dev/testScenarios/dev/volcano.png", true, 4*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	mediumButton3.addEvent("mouseexit", function(_clipBoard){  mediumButton3.setImage("images/dev/testScenarios/dev/volcano.png", true, 4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(mediumButton4);
	mediumButton4.addEvent("mouseenter", function(_clipBoard){  mediumButton4.setImage("images/dev/testScenarios/dev/medium.png", true, 5*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	mediumButton4.addEvent("mouseexit", function(_clipBoard){  mediumButton4.setImage("images/dev/testScenarios/dev/medium.png", true, 5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	//Hard
	Touch.onEnterExit(testButton1);
	testButton1.addEvent("mouseenter", function(_clipBoard){  testButton1.setImage("images/dev/testScenarios/dev/scenario03_ChildrenFightingOverToy.png", true, 2*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton1.addEvent("mouseexit", function(_clipBoard){  testButton1.setImage("images/dev/testScenarios/dev/scenario03_ChildrenFightingOverToy.png", true, 2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton3);
	testButton3.addEvent("mouseenter", function(_clipBoard){  testButton3.setImage("images/dev/testScenarios/dev/scenario02_BuildingOnFire.png", true, 3*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton3.addEvent("mouseexit", function(_clipBoard){  testButton3.setImage("images/dev/testScenarios/dev/scenario02_BuildingOnFire.png", true, 3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton5);
	testButton5.addEvent("mouseenter", function(_clipBoard){  testButton5.setImage("images/dev/testScenarios/dev/aliens.png", true, 4*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton5.addEvent("mouseexit", function(_clipBoard){  testButton5.setImage("images/dev/testScenarios/dev/aliens.png", true, 4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton7);
	testButton7.addEvent("mouseenter", function(_clipBoard){  testButton7.setImage("images/dev/testScenarios/dev/hard.png", true, 5*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton7.addEvent("mouseexit", function(_clipBoard){  testButton7.setImage("images/dev/testScenarios/dev/hard.png", true, 5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	//Random
	Touch.onEnterExit(testButton2);
	testButton2.addEvent("mouseenter", function(_clipBoard){  testButton2.setImage("images/dev/testScenarios/dev/easy.png", true, 2*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton2.addEvent("mouseexit", function(_clipBoard){  testButton2.setImage("images/dev/testScenarios/dev/easy.png", true, 2*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton4);
	testButton4.addEvent("mouseenter", function(_clipBoard){  testButton4.setImage("images/dev/testScenarios/dev/medium.png", true, 3*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton4.addEvent("mouseexit", function(_clipBoard){  testButton4.setImage("images/dev/testScenarios/dev/medium.png", true, 3*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton6);
	testButton6.addEvent("mouseenter", function(_clipBoard){  testButton6.setImage("images/dev/testScenarios/dev/hard.png", true, 4*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton6.addEvent("mouseexit", function(_clipBoard){  testButton6.setImage("images/dev/testScenarios/dev/hard.png", true, 4*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	Touch.onEnterExit(testButton8);
	testButton8.addEvent("mouseenter", function(_clipBoard){  testButton8.setImage("images/dev/testScenarios/dev/total.png", true, 5*toReturn.bounds.width/6-160, toReturn.bounds.height/2-256, 320, 640); _clipBoard.ToFire = ["redraw"]; },false);
	testButton8.addEvent("mouseexit", function(_clipBoard){  testButton8.setImage("images/dev/testScenarios/dev/total.png", true, 5*toReturn.bounds.width/6-128, toReturn.bounds.height/2-128, 256, 512); _clipBoard.ToFire = ["redraw"]; },false);
	
	
	
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
		randomTab.setImage("images/dev/testScenarios/random_roboto.png"); 
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
		randomTab.setImage("images/dev/testScenarios/random_roboto.png"); 
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
		randomTab.setImage("images/dev/testScenarios/random_roboto.png"); 
		//And load in all of our tabs.
		hardContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	randomTab.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			randomTab.setImage("images/dev/testScenarios/hard_roboto.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = randomContent;
		easyTab.setImage("images/dev/testScenarios/easy_roboto.png");
		mediumTab.setImage("images/dev/testScenarios/medium_roboto.png");
		hardTab.setImage("images/dev/testScenarios/hard_roboto.png"); 
		randomTab.setImage("images/dev/testScenarios/random_roboto_highlight.png"); 
		//And load in all of our tabs.
		randomContent.select();

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	


	//Add buttons for moving around states.
	backButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false );

	//Easy
	scenario1Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "default";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario2Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "default";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario3Button.addEvent("mousedown", function(_clipBoard){
		info.currentScenario = "default";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	scenario4Button.addEvent("mousedown", function(_clipBoard) {
		info.currentScenario = "default";
		base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	
	
	//Medium
	bullyButton.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	aliensButton.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	mediumButton3.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	mediumButton4.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	
	//Hard
	testButton1.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton3.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton5.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton7.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	
	//Random
	testButton2.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton4.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton6.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	testButton8.addEvent("mousedown", function(_clipBoard){
			info.currentScenario = "default";
			base.changeState("DetailedScenarioScreen", _info)(_clipBoard);
	}, false );
	

	//For dev purposes.
	console.log("Current super powers: " + _info.superhero.powers);


	return toReturn;
}