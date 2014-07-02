function CharacterBuilder(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBuilder";
	var info = _info;
	
	var splashImage = Sprite(0,0,1920,1080, "images/dev/createYourHero_Background.png");
	base.addModule(splashImage);
	
	//--------------------------
	//These still could use some cleanup.  It's weird that we're adding the other modules on top of this.
	//----------------------------

	//Now we add the workbench.
	toybox = ToyBox(0,0,2*1920/3,1080);
	
	base.addModule(toybox);

	//TEMP DEV TABS
	//the tabs themselves
	var devTab1 = Sprite(0, 2*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/headTab.png");
	var devTab2 = Sprite(0, 3*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/suitTab.png");
	var devTab3 = Sprite(0, 4*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/shirtTab.png");
	var devTab4 = Sprite(0, 5*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/pantsTab.png");
	var devTab5 = Sprite(0, 6*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/accessoriesTab.png");

	//Toybox tabs.
	//the components inside each tab
	var tab1 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "head");
		//Components in side of a tab
		
		//Line 01
			//Label
			line01Label = Sprite(tab1.bounds.width/6-64, tab1.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/01_head/headTab.png");
			tab1.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab1.addModule(leftButton);
			
			//NICK: replace first one with preview version and second image url with one to send to the character skeleton
			tab1.addOption(Sprite(2*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_01.png"), "images/dev/_01.png");
			tab1.addOption(Sprite(3*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/01_head/head_01_dev_icon.png"), "images/dev/hero/01_head/01_head/head_01_dev.png");
			tab1.addOption(Sprite(4*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/_03.png");
			
			rightButton = Sprite(5*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab1.addModule(rightButton);
		
		//Line 02 - Hair
			var head_subTab_01_hair = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "hair");
			
			//Label
			line01Label = Sprite(head_subTab_01_hair.bounds.width/6-64, 3*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/02_hair/hairTab.png");
			head_subTab_01_hair.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/left.png");
			head_subTab_01_hair.addModule(leftButton);
			
			head_subTab_01_hair.addOption(Sprite(2*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/02_hair/hair_01_cut_icon.png"), "images/dev/hero/01_head/02_hair/hair_01_cut.png");
			head_subTab_01_hair.addOption(Sprite(3*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/02_hair/hair_02_gel_icon.png"), "images/dev/hero/01_head/02_hair/hair_02_gel.png");
			head_subTab_01_hair.addOption(Sprite(4*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/_05.png");
			
			rightButton = Sprite(5*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/right.png");
			head_subTab_01_hair.addModule(rightButton);
			
		//Line 03 - Face
			var head_subTab_03_face = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "face");
			
			//Label
			line01Label = Sprite(head_subTab_03_face.bounds.width/6-64, 5*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/03_face/faceTab.png");
			head_subTab_03_face.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(head_subTab_03_face.bounds.width/6-64, 6*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/left.png");
			head_subTab_03_face.addModule(leftButton);
			
			head_subTab_03_face.addOption(Sprite(2*head_subTab_03_face.bounds.width/6-64, 6*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/03_face/face_01_happy_icon.png"), "images/dev/hero/01_head/03_face/face_01_happy.png");
			head_subTab_03_face.addOption(Sprite(3*head_subTab_03_face.bounds.width/6-64, 6*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/03_face/face_02_mad_icon.png"), "images/dev/hero/01_head/03_face/face_02_mad.png");
			head_subTab_03_face.addOption(Sprite(4*head_subTab_03_face.bounds.width/6-64, 6*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/_08.png"), "images/dev/_08.png");
			
			rightButton = Sprite(5*head_subTab_03_face.bounds.width/6-64, 6*head_subTab_03_face.bounds.height/8-64, 128, 128, "images/dev/right.png");
			head_subTab_03_face.addModule(rightButton);
			
			
			
	var tab2 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "body");
	
		//Line 01
			//Label
			line01Label = Sprite(tab2.bounds.width/6-64, tab2.bounds.height/8-64, 128, 128, "images/dev/minorTab.png");
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
			line01Label = Sprite(tab3.bounds.width/6-64, tab3.bounds.height/8-64, 128, 128, "images/dev/minorTab.png");
			tab3.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/left.png");
			tab3.addModule(leftButton);
			
			tab3.addOption(Sprite(2*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/_04.png");
			tab3.addOption(Sprite(3*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/_05.png");
			tab3.addOption(Sprite(4*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/_06.png");
			
			rightButton = Sprite(5*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/right.png");
			tab3.addModule(rightButton);
			
	var tab4 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "feet");
	var tab5 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "feet");	
	
		
	//specific to toybox -- TEMP DEV
	//add all the things we just created to the toybox module
	toybox.addModule(devTab1);
	toybox.addModule(devTab2);
	toybox.addModule(devTab3);
	toybox.addModule(devTab4);
	toybox.addModule(devTab5);
	toybox.addModule(tab1);
	toybox.addModule(head_subTab_01_hair);
	toybox.addModule(head_subTab_03_face);
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
		toy.setSlot("head", Sprite(0,0,128,128, "images/dev/hero/01_head/01_head/head_01_dev.png"));
		toy.setSlot("hair", Sprite(0, 0, 128, 128, "images/dev/alpha.png"));
		toy.setSlot("face", Sprite(0, 0, 128, 128, "images/dev/alpha.png"));
		toy.setSlot("body", Sprite());
		toy.setSlot("feet", Sprite());
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
		head_subTab_01_hair.select();
		head_subTab_03_face.select();
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
		head_subTab_01_hair.deselect();
		head_subTab_03_face.deselect();
		tab2.select();
		tab3.deselect();
		//manager.draw();
	}, false);
	devTab3.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_face.deselect();
		tab2.deselect();
		tab3.select();
		tab4.deselect();
		tab5.deselect();
	}, false);
	devTab4.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_face.deselect();
		tab2.deselect();
		tab3.deselect();
		tab4.select();
		tab5.deselect();
	}, false);
	devTab5.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_face.deselect();
		tab2.deselect();
		tab3.deselect();
		tab4.deselect();
		tab5.select();
	}, false);


	return toReturn;
}