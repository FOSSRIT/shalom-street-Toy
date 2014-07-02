function CharacterBuilder(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBuilder";
	var info = _info;
	
	var splashImage = Sprite(0,0,1920,1080, "images/dev/characterBuilderTest01.png");
	base.addModule(splashImage);
	
	//--------------------------
	//These still could use some cleanup.  It's weird that we're adding the other modules on top of this.
	//----------------------------

	//Now we add the workbench.
	toybox = ToyBox(0,0,2*1920/3,1080);
	
	base.addModule(toybox);

	//TEMP DEV TABS
	//the tabs themselves
	var devTab1 = Sprite(0, 128, 128, 128, "images/dev/tab1.png");
	var devTab2 = Sprite(0, 256, 128, 128, "images/dev/tab2.png");
	var devTab3 = Sprite(0, 384, 128, 128, "images/dev/tab3.png");

	//Toybox tabs.
	//the components inside each tab
	var tab1 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "head");
		//Components in side of a tab
		
		//Line 01
			//Label
			line01Label = Sprite(tab1.bounds.width/6-64, tab1.bounds.height/8-64, 128, 128, "images/dev/_00.png");
			tab1.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab1.addModule(leftButton);
			
			tab1.addOption(Sprite(2*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_01.png"), "images/dev/_01.png");
			tab1.addOption(Sprite(3*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_02.png"), "images/dev/_02.png");
			tab1.addOption(Sprite(4*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/_03.png");
			
			rightButton = Sprite(5*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab1.addModule(rightButton);
		
		//Line 02
			//Label
			line01Label = Sprite(tab1.bounds.width/6-64, 3*tab1.bounds.height/8-64, 128, 128, "images/dev/_00.png");
			tab1.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab1.bounds.width/6-64, 4*tab1.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab1.addModule(leftButton);
			
			tab1.addOption(Sprite(2*tab1.bounds.width/6-64, 4*tab1.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/_03.png");
			tab1.addOption(Sprite(3*tab1.bounds.width/6-64, 4*tab1.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/_04.png");
			tab1.addOption(Sprite(4*tab1.bounds.width/6-64, 4*tab1.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/_05.png");
			
			rightButton = Sprite(5*tab1.bounds.width/6-64, 4*tab1.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab1.addModule(rightButton);
			
		//Line 03
			//Label
			line01Label = Sprite(tab1.bounds.width/6-64, 5*tab1.bounds.height/8-64, 128, 128, "images/dev/_00.png");
			tab1.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab1.bounds.width/6-64, 6*tab1.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab1.addModule(leftButton);
			
			tab1.addOption(Sprite(2*tab1.bounds.width/6-64, 6*tab1.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/_06.png");
			tab1.addOption(Sprite(3*tab1.bounds.width/6-64, 6*tab1.bounds.height/8-64, 128, 128, "images/dev/_07.png"), "images/dev/_07.png");
			tab1.addOption(Sprite(4*tab1.bounds.width/6-64, 6*tab1.bounds.height/8-64, 128, 128, "images/dev/_08.png"), "images/dev/_08.png");
			
			rightButton = Sprite(5*tab1.bounds.width/6-64, 6*tab1.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab1.addModule(rightButton);
			
	var tab2 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "body");
	
		//Line 01
			//Label
			line01Label = Sprite(tab2.bounds.width/6-64, tab2.bounds.height/8-64, 128, 128, "images/dev/_00.png");
			tab2.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab2.addModule(leftButton);
			
			tab2.addOption(Sprite(2*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/_00.png"), "images/dev/_00.png");
			tab2.addOption(Sprite(3*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/_01.png"), "images/dev/_01.png");
			tab2.addOption(Sprite(4*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/_00.png"), "images/dev/_00.png");
			
			rightButton = Sprite(5*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab2.addModule(rightButton);
		
	var tab3 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "feet");
	
		//Line 01
			//Label
			line01Label = Sprite(tab3.bounds.width/6-64, tab3.bounds.height/8-64, 128, 128, "images/dev/_00.png");
			tab3.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab3.addModule(leftButton);
			
			tab3.addOption(Sprite(2*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/_04.png");
			tab3.addOption(Sprite(3*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/_05.png");
			tab3.addOption(Sprite(4*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/_06.png");
			
			rightButton = Sprite(5*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab3.addModule(rightButton);
		
	//specific to toybox -- TEMP DEV
	//add all the things we just created to the toybox module
	toybox.addModule(devTab1);
	toybox.addModule(devTab2);
	toybox.addModule(devTab3);
	toybox.addModule(tab1);
	toybox.addModule(tab2);
	toybox.addModule(tab3);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
				
	playArea = PlayArea(2*1920/3,0,1920/3,1080);
	base.addModule(playArea);

	var x = Sprite(toReturn.bounds.x, 5, 10, 10);
	
	//If we don't have a skeleton yet.
	var toy;
	if(info.superhero.skeleton === undefined){
		toy = CharacterSkeleton(playArea.bounds.width/2-64, playArea.bounds.height/4, 256, 512);
		//TEMP DEV SPRITE SET UP FOR TOY
		toy.setSlot("head", Sprite());
		toy.setSlot("body", Sprite());
		toy.setSlot("feet", Sprite())
		//Add events
		toy.addEvent("swapComponent", function(_clipBoard){ 
			console.log('swapping');
			toy.setSlot(_clipBoard.ComponentSwap.slot, 
			_clipBoard.ComponentSwap.image); 
			if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		}, false);
		
		info.superhero.skeleton = toy;
		playArea.addModule(toy);
	} else { 
		toy = info.superhero.skeleton;
		playArea.addModule(toy);
	}
	//add the character skeleton to the scene
	//playArea.addModule(toy);

	//Buttons
	backButton = Sprite(toReturn.bounds.x, toReturn.bounds.height-128, 128, 128, "images/dev/back.png");
	toReturn.addModule(backButton);
	
	continueButton = Sprite(toReturn.bounds.width-128, toReturn.bounds.height-128, 128, 128, "images/dev/continue.png");
	toReturn.addModule(continueButton);
	
	quitButton = Sprite(toReturn.bounds.x, toReturn.bounds.y, 128, 128, "images/dev/quit.png");
	toReturn.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("QualitiesScreen", info), false);	
	continueButton.addEvent("mousedown", base.changeState("PowersScreen", info), false); 	
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", info), false); 



	
		
		
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