function CharacterBuilder(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBuilder";
	var info = _info;
	Touch.Collisions(base);
	
	var splashImage = Sprite(0,0,1920,1080, "images/dev/characterBuilderTest01.png");
	base.addModule(splashImage);

				
	playArea = PlayArea(0,0,2*1920/3,1080);
	base.addModule(playArea);
	
	//If we don't have a skeleton yet.
	var toy;
	if(info.superhero.skeleton === undefined){
		toy = CharacterSkeleton(200, 150, 234, 400);
		//TEMP DEV SPRITE SET UP FOR TOY
		toy.setSlot("head", Sprite());
		toy.setSlot("body", Sprite());
		toy.setSlot("feet", Sprite());
		//Add events
		toy.addEvent("swapComponent", function(_clipBoard){ 
			console.log('swapping');
			toy.setSlot(_clipBoard.ComponentSwap.slot, 
			_clipBoard.ComponentSwap.image); 
			if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		}, false);


		
		//And save for later.
		console.log("Skeleton is: " + info.superhero.skeleton);
		info.superhero.skeleton = toy;
	} else {
		toy = info.superhero.skeleton;
	}
	//add the character skeleton to the scene
	playArea.addModule(toy);

	//Buttons
	backButton = Sprite(playArea.bounds.x, playArea.bounds.height-128, 128, 128, "images/dev/back.png");
	playArea.addModule(backButton);
	
	continueButton = Sprite(playArea.bounds.width-128, playArea.bounds.height-128, 128, 128, "images/dev/continue.png");
	playArea.addModule(continueButton);
	
	quitButton = Sprite(playArea.bounds.x, playArea.bounds.y, 128, 128, "images/dev/quit.png");
	playArea.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);	
	continueButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);	
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);



	//--------------------------
	//These still could use some cleanup.  It's weird that we're adding the other modules on top of this.
	//----------------------------

	//Now we add the workbench.
	toybox = ToyBox(2*1920/3,0,1920/3,1080);
	base.addModule(toybox);

	//TEMP DEV TABS
	//the tabs themselves
	var devTab1 = Sprite(0, 0, 128, 128, "images/dev/tab1.png");
	var devTab2 = Sprite(128, 0, 128, 128, "images/dev/tab2.png");
	var devTab3 = Sprite(256, 0, 128, 128, "images/dev/tab3.png");

	//Toybox tabs.
	//the components inside each tab
	var tab1 = ToyBoxTab(0, 128, toybox.bounds.width, toybox.bounds.height - 128, "head");
		//Components in side of a tab
		tab1.addOption(Sprite(0, 0, 128, 128, "images/Esther sets/Esther-1/esther-set-1-02.png"), "images/Esther sets/Esther-1/esther-set-1-02.png");
		tab1.addOption(Sprite(128, 0, 128, 128, "images/Esther sets/Esther-2/esther-set-2-02.png"), "images/Esther sets/Esther-2/esther-set-2-02.png");
		tab1.addOption(Sprite(0, 128, 128, 128, "images/Esther sets/Esther-3/esther-set-3-02.png"), "images/Esther sets/Esther-3/esther-set-3-02.png");
		tab1.addOption(Sprite(128, 128, 128, 128, "images/dev/_04.png"), Sprite(0, 0, 230, 230, "images/dev/_04.png"));
		//add the tab to the toybox
	var tab2 = ToyBoxTab(0, 128, toybox.bounds.width, toybox.bounds.height - 128, "body");
		tab2.addOption(Sprite(0, 0, 128, 128, "images/Esther sets/Esther-1/esther-set-1-03.png"), "images/Esther sets/Esther-1/esther-set-1-03.png");
		tab2.addOption(Sprite(128, 0, 128, 128, "images/Esther sets/Esther-2/esther-set-2-03.png"), "images/Esther sets/Esther-2/esther-set-2-03.png");
		tab2.addOption(Sprite(0, 128, 128, 128, "images/dev/_05.png"), "images/dev/_05.png");
		tab2.addOption(Sprite(128, 128, 128, 128, "images/dev/_06.png"), "images/dev/_06.png");
	var tab3 = ToyBoxTab(0, 128, toybox.bounds.width, toybox.bounds.height - 128, "feet");
		tab3.addOption(Sprite(0, 0, 128, 128, "images/Esther sets/Esther-1/esther-set-1-04.png"), "images/Esther sets/Esther-1/esther-set-1-04.png");
		tab3.addOption(Sprite(128, 0, 128, 128, "images/Esther sets/Esther-2/esther-set-2-04.png"), "images/Esther sets/Esther-2/esther-set-2-04.png");
		tab3.addOption(Sprite(0, 128, 128, 128, "images/dev/_07.png"), "images/dev/_07.png");
		tab3.addOption(Sprite(128, 128, 128, 128, "images/dev/_08.png"), "images/dev/_08.png");
		
	//specific to toybox -- TEMP DEV
	//add all the things we just created to the toybox module
	toybox.addModule(devTab1);
	toybox.addModule(devTab2);
	toybox.addModule(devTab3);
	toybox.addModule(tab1);
	toybox.addModule(tab2);
	toybox.addModule(tab3);
		
		
	//DEV adding events
	devTab1.addEvent("mousedown", function(_clipBoard){ 
		tab1.select();
		tab2.deselect();
		tab3.deselect();
		//ToDo: This next line isn't working.
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		//work.
		//manager.draw();
	}, false);
	devTab2.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		tab1.deselect();
		tab2.select();
		tab3.deselect();
		//manager.draw();
	}, false);
	devTab3.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		tab1.deselect();
		tab2.deselect();
		tab3.select();
	}, false);


	return toReturn;
}