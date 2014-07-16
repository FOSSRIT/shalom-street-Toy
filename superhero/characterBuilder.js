function CharacterBuilder(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBuilderBoy";
	var info = _info;
	Touch.Collisions(base);



	jsonLoader.Load("data/characterBuilder.js", function(result){
		jsonBuilder.GetJson(base, result);

		var selectedCategory = undefined;


		//Load in the basics.
		var splashImage = Sprite(0,0,1920,1080, "images/dev/createYourHero_Background.png");
		base.addModule(splashImage);


		//Build toybox, which is a weird name for this.
		var toybox = ToyBox(0,0,2*1920/3,1080);
		base.addModule(toybox);


		//---------------------------------------------------------------------------------------------
		//               PROPOGATE CATEGORIES/TABS/OPTIONS FROM JSON
		//---------------------------------------------------------------------------------------------
		
		//Now we add the tabs themselves, based on what we've pulled out of the json.
		var i = -1; //And we loop through the properties.
		console.log(base.jsonData.categories);
		for (var v in base.jsonData.categories) {
			i++; //I moved this up here and started at -1 to 0 to make it easier to read.
			//Not sure what the positioning is doing with this, but I guess I trust it.
			var category = Sprite(0, (2+i)*toybox.bounds.width/9 - 64, 128, 128, base.jsonData.categories[v].sprite[0]); //Start with unselected.
			//We add a property on for selected/unselected and for what tabs it's linked to.  
			//We can do this because javascript.
			//In the future, we might possibly make a better more modular approach to this?
			category.selectedImage = base.jsonData.categories[v].sprite[0];
			category.unselectedImage = base.jsonData.categories[v].sprite[0];
			category.tabs = [];

			//Add tabs into each category.
			var j = -1;
			for(var t in base.jsonData.categories[v].tabs) {
				j++; //Same deal here.
				//Again, I don't really know how the positioning here works, but I'm copying and pasting it.
				var tab = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, t);
				category.tabs.push(tab);
				toybox.addModule(tab);

				//Add left/right buttons to tab.  These dimensions and stuff need to be changed to something that makes sense.
				//Left
				var leftButton = Sprite(tab.bounds.width/6-64, (2+j)*tab.bounds.height/8-64, 128, 128, "images/dev/left.png");
				leftButton.addEvent("mousedown", (function(tab) { //Passing in variable by value gets rid of the closure problem. 
					var f = function(_clipBoard){ 
						tab.rotate(1, 128+64)
						_clipBoard.ToFire = ["redraw"];
					}
					return f;
				})(tab), false);
				tab.addModule(leftButton);
				//Right
				var rightButton = Sprite(5*tab.bounds.width/6-64, (2+j)*tab.bounds.height/8-64, 128, 128, "images/dev/right.png");
				rightButton.addEvent("mousedown", (function(tab) { //Passing in variable by value gets rid of the closure problem. 
					var f = function(_clipBoard){ 
						tab.rotate(-1, 128+64)
						_clipBoard.ToFire = ["redraw"];
					}
					return f;
				})(tab), false);
				tab.addModule(rightButton);

				//Add options to each tab.
				var k = -1;
				for(var o in base.jsonData.categories[v].tabs[t].options) {
					k++; //Same deal again.

					//base.jsonData.categories[v].tabs[t]
					//Other stuff with this is knowing the body type.
					var sex = info.superhero.bodyType;
					var option = base.jsonData.categories[v].tabs[t].options;//Get the proper info for the option with this body type.
					//

					var bodyPart = BodyPart(0, 0, 0, 0);//Some stuff here.
					//foreach bodyType for that bodyPart
					for(var b in option){
						bodyPart.addBodyType(b, option[b].option_sprite);
					}
					tab.addOption( Sprite(
						(2+k)*tab.bounds.width/6-64, 
						2*tab.bounds.height/8-64, 
						128, 128, 
						option[o][sex].option_sprite[0]), bodyPart);
				}
			}


			//Attach everything else.
			category.addEvent("mousedown", function(_clipBoard){


				console.log('selecting category');
				//If we need to unselect things.
				if(selectedCategory != undefined) {
					selectedCategory.setImage(selectedCategory.unselectedImage); //Unselect
					for(var t in selectedCategory.tabs){
						// /
						selectedCategory.tabs[t].deselect();
					}
				}
				//Set our own image.  And mark that we're selected.
				selectedCategory = this;
				this.setImage(this.selectedImage);
				//And load in all of our tabs.
				for(var t in this.tabs){
					//
					this.tabs[t].select();
				}

			}, false);

			toybox.addModule(category);
		}

		//--------------------------------------------------------------------------------------------
		//                    END PROPOGATION
		//--------------------------------------------------------------------------------------------

		// update the skeleton if the body type has changed.

		
		// Add playArea

		playArea = PlayArea(2*1920/3,0,1920/3,1080);
		base.addModule(playArea);

		var x = Sprite(toReturn.bounds.x, 5, 10, 10);
		
		//If we don't have a skeleton yet.
		var toy;
		if(info.superhero.skeleton === undefined){
			toy = CharacterSkeleton(playArea.bounds.width/2-128, playArea.bounds.height/4, 258, 655);
			//TEMP DEV SPRITE SET UP FOR TOY
			//template
			toy.setSlot("background", 		Sprite(0,0,258,655, "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-00.png"));
			//head
			toy.setSlot("face", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("hair", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("mask", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			//suit
			toy.setSlot("jumpsuit", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("cape", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("boots", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			//shirt
			toy.setSlot("shirt", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("jacket", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("logo", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			//pants
			toy.setSlot("pants", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("belt", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("pants_accessory", 	Sprite(0,0,258,655, "images/dev/alpha.png"));
			//accessories
			toy.setSlot("arm_guards", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("shin_guards", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
			toy.setSlot("hoods_and_helmets", Sprite(0,0,258,655, "images/dev/alpha.png"));
			
			//unused
			toy.setSlot("body", Sprite(0,0,258,655, "images/dev/alpha.png"));
			
			//Add events
			toy.addEvent("swapComponent", function(_clipBoard){ 
				console.log('swapping');
				toy.setSlot(_clipBoard.ComponentSwap.slot, _clipBoard.ComponentSwap.image, _clipBoard.ComponentSwap.option); 
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
		backButton.addEvent("mousedown", base.changeState("PowersScreen", info), false);	
		continueButton.addEvent("mousedown", base.changeState("CharacterBioScreen", info), false); 	
		quitButton.addEvent("mousedown", base.changeState("SplashScreen", info), false); 

	});


/*

	console.log("now I'm a boy!");
	//--------------------------
	//These still could use some cleanup.  It's weird that we're adding the other modules on top of this.
	//----------------------------

	//TEMP DEV TABS
	//the tabs themselves
	var headTab1 = Sprite(0, 2*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/headTab.png");
	var suitTab2 = Sprite(0, 3*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/suitTab.png");
	var shirtTab3 = Sprite(0, 4*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/shirtTab.png");
	var pantsTab4 = Sprite(0, 5*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/pantsTab.png");
	var accessoriesTab5 = Sprite(0, 6*toybox.bounds.width/9 - 64, 128, 128, "images/dev/hero/accessoriesTab.png");

	//Toybox tabs.
	//the components inside each tab
	var tab1 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "face");
		//Components in side of a tab
		
		//Line 01
			//Label - Face
			line01Label = Sprite(tab1.bounds.width/6-64, tab1.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/03_face/faceTab.png");
			tab1.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				tab1.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab1.addModule(leftButton);
			
			//NICK: replace first one with preview version and second image url with one to send to the character skeleton
			tab1.addOption(Sprite(2*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-07_icon.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-07.png");
			tab1.addOption(Sprite(3*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/hero/set/face_icon.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-06.png");
			tab1.addOption(Sprite(4*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/_08.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*tab1.bounds.width/6-64, 2*tab1.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				tab1.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab1.addModule(rightButton);
		
		//Line 02 - Hair
			var head_subTab_01_hair = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "hair");
			
			//Label
			line01Label = Sprite(head_subTab_01_hair.bounds.width/6-64, 3*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/01_head/02_hair/hairTab.png");
			head_subTab_01_hair.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				head_subTab_01_hair.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			head_subTab_01_hair.addModule(leftButton);
			
			head_subTab_01_hair.addOption(Sprite(2*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08_icon.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			head_subTab_01_hair.addOption(Sprite(3*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/hero/set/hair_icon.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			head_subTab_01_hair.addOption(Sprite(4*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*head_subTab_01_hair.bounds.width/6-64, 4*head_subTab_01_hair.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				head_subTab_01_hair.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			head_subTab_01_hair.addModule(rightButton);
			
		//Line 03 - Mask
			var head_subTab_03_mask = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "mask");
			
			//Label
			line01Label = Sprite(head_subTab_03_mask.bounds.width/6-64, 5*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_01_masks.png");
			head_subTab_03_mask.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(head_subTab_03_mask.bounds.width/6-64, 6*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				head_subTab_03_mask.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			head_subTab_03_mask.addModule(leftButton);
			
			head_subTab_03_mask.addOption(Sprite(2*head_subTab_03_mask.bounds.width/6-64, 6*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/_08.png");
			head_subTab_03_mask.addOption(Sprite(3*head_subTab_03_mask.bounds.width/6-64, 6*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/_07.png"), "images/dev/_08.png");
			head_subTab_03_mask.addOption(Sprite(4*head_subTab_03_mask.bounds.width/6-64, 6*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/_08.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*head_subTab_03_mask.bounds.width/6-64, 6*head_subTab_03_mask.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				head_subTab_03_mask.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			head_subTab_03_mask.addModule(rightButton);
			
			
			
	var tab2 = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "jumpsuit");
	
		//Line 01 - Jumpsuit
			//Label
			line01Label = Sprite(tab2.bounds.width/6-64, tab2.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_02_jumpsuits.png");
			tab2.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				tab2.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab2.addModule(leftButton);
			
			tab2.addOption(Sprite(2*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-01_icon.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-01.png");
			tab2.addOption(Sprite(3*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/hero/set/suit_icon.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-02.png");
			tab2.addOption(Sprite(4*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/_00.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*tab2.bounds.width/6-64, 2*tab2.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				tab2.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab2.addModule(rightButton);
			
		//Line 02 - Capes
			var suit_subTab_02_capes = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "capes");
			
			//Label
			line02Label = Sprite(suit_subTab_02_capes.bounds.width/6-64, 3*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_02_capes.png");
			suit_subTab_02_capes.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(suit_subTab_02_capes.bounds.width/6-64, 4*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				suit_subTab_02_capes.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			suit_subTab_02_capes.addModule(leftButton);
			
			suit_subTab_02_capes.addOption(Sprite(2*suit_subTab_02_capes.bounds.width/6-64, 4*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			suit_subTab_02_capes.addOption(Sprite(3*suit_subTab_02_capes.bounds.width/6-64, 4*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			suit_subTab_02_capes.addOption(Sprite(4*suit_subTab_02_capes.bounds.width/6-64, 4*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*suit_subTab_02_capes.bounds.width/6-64, 4*suit_subTab_02_capes.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				suit_subTab_02_capes.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			suit_subTab_02_capes.addModule(rightButton);
			
		//Line 03 - Boots
			var suit_subTab_03_boots = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "boots");
			
			//Label
			line02Label = Sprite(suit_subTab_03_boots.bounds.width/6-64, 5*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_02_boots.png");
			suit_subTab_03_boots.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(suit_subTab_03_boots.bounds.width/6-64, 6*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				suit_subTab_03_boots.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			suit_subTab_03_boots.addModule(leftButton);
			
			suit_subTab_03_boots.addOption(Sprite(2*suit_subTab_03_boots.bounds.width/6-64, 6*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			suit_subTab_03_boots.addOption(Sprite(3*suit_subTab_03_boots.bounds.width/6-64, 6*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			suit_subTab_03_boots.addOption(Sprite(4*suit_subTab_03_boots.bounds.width/6-64, 6*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*suit_subTab_03_boots.bounds.width/6-64, 6*suit_subTab_03_boots.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				suit_subTab_03_boots.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			suit_subTab_03_boots.addModule(rightButton);
		
	var tab3 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "shirt");
	
		//Line 01
			//Label
			line01Label = Sprite(tab3.bounds.width/6-64, tab3.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_03_shirts.png");
			tab3.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				tab3.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab3.addModule(leftButton);
			
			tab3.addOption(Sprite(2*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-02_icon.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-02.png");
			tab3.addOption(Sprite(3*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/hero/set/shirt_icon.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-03.png");
			tab3.addOption(Sprite(4*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*tab3.bounds.width/6-64, 2*tab3.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				tab3.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab3.addModule(rightButton);
			
		//Line 02 - jackets
			var shirt_subTab_02_jackets = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "jacket");
			
			//Label
			line02Label = Sprite(shirt_subTab_02_jackets.bounds.width/6-64, 3*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_03_jackets.png");
			shirt_subTab_02_jackets.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(shirt_subTab_02_jackets.bounds.width/6-64, 4*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				shirt_subTab_02_jackets.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			shirt_subTab_02_jackets.addModule(leftButton);
			
			shirt_subTab_02_jackets.addOption(Sprite(2*shirt_subTab_02_jackets.bounds.width/6-64, 4*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/_01.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			shirt_subTab_02_jackets.addOption(Sprite(3*shirt_subTab_02_jackets.bounds.width/6-64, 4*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/_02.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			shirt_subTab_02_jackets.addOption(Sprite(4*shirt_subTab_02_jackets.bounds.width/6-64, 4*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*shirt_subTab_02_jackets.bounds.width/6-64, 4*shirt_subTab_02_jackets.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				shirt_subTab_02_jackets.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			shirt_subTab_02_jackets.addModule(rightButton);
			
		//Line 03 - Logo
			var shirt_subTab_03_logo = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "logo");
			
			//Label
			line02Label = Sprite(shirt_subTab_03_logo.bounds.width/6-64, 5*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_03_logos.png");
			shirt_subTab_03_logo.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(shirt_subTab_03_logo.bounds.width/6-64, 6*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				shirt_subTab_03_logo.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			shirt_subTab_03_logo.addModule(leftButton);
			
			shirt_subTab_03_logo.addOption(Sprite(2*shirt_subTab_03_logo.bounds.width/6-64, 6*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			shirt_subTab_03_logo.addOption(Sprite(3*shirt_subTab_03_logo.bounds.width/6-64, 6*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/_04.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			shirt_subTab_03_logo.addOption(Sprite(4*shirt_subTab_03_logo.bounds.width/6-64, 6*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*shirt_subTab_03_logo.bounds.width/6-64, 6*shirt_subTab_03_logo.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				shirt_subTab_03_logo.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			shirt_subTab_03_logo.addModule(rightButton);
			
	var tab4 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "pants");
	//Line 01
			//Label
			line01Label = Sprite(tab4.bounds.width/6-64, tab4.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_04_pants.png");
			tab4.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab4.bounds.width/6-64, 2*tab4.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				tab4.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab4.addModule(leftButton);
			
			tab4.addOption(Sprite(2*tab4.bounds.width/6-64, 2*tab4.bounds.height/8-64, 128, 128, "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-05_icon.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-05.png");
			tab4.addOption(Sprite(3*tab4.bounds.width/6-64, 2*tab4.bounds.height/8-64, 128, 128, "images/dev/hero/set/pants_icon.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-04.png");
			tab4.addOption(Sprite(4*tab4.bounds.width/6-64, 2*tab4.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*tab4.bounds.width/6-64, 2*tab4.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				tab4.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab4.addModule(rightButton);
			
		//Line 02 - belts
			var pants_subTab_02_belts = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "belt");
			
			//Label
			line02Label = Sprite(pants_subTab_02_belts.bounds.width/6-64, 3*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_04_belts.png");
			pants_subTab_02_belts.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(pants_subTab_02_belts.bounds.width/6-64, 4*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				pants_subTab_02_belts.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			pants_subTab_02_belts.addModule(leftButton);
			
			pants_subTab_02_belts.addOption(Sprite(2*pants_subTab_02_belts.bounds.width/6-64, 4*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			pants_subTab_02_belts.addOption(Sprite(3*pants_subTab_02_belts.bounds.width/6-64, 4*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			pants_subTab_02_belts.addOption(Sprite(4*pants_subTab_02_belts.bounds.width/6-64, 4*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/_07.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*pants_subTab_02_belts.bounds.width/6-64, 4*pants_subTab_02_belts.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				pants_subTab_02_belts.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			pants_subTab_02_belts.addModule(rightButton);
			
		//Line 03 - Pant Accessory
			var pants_subTab_03_pants_accessory = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "pants_accessory");
			
			//Label
			line02Label = Sprite(pants_subTab_03_pants_accessory.bounds.width/6-64, 5*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_04_pantAccessories.png");
			pants_subTab_03_pants_accessory.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(pants_subTab_03_pants_accessory.bounds.width/6-64, 6*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				pants_subTab_03_pants_accessory.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			pants_subTab_03_pants_accessory.addModule(leftButton);
			
			pants_subTab_03_pants_accessory.addOption(Sprite(2*pants_subTab_03_pants_accessory.bounds.width/6-64, 6*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			pants_subTab_03_pants_accessory.addOption(Sprite(3*pants_subTab_03_pants_accessory.bounds.width/6-64, 6*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			pants_subTab_03_pants_accessory.addOption(Sprite(4*pants_subTab_03_pants_accessory.bounds.width/6-64, 6*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/_07.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*pants_subTab_03_pants_accessory.bounds.width/6-64, 6*pants_subTab_03_pants_accessory.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				pants_subTab_03_pants_accessory.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			pants_subTab_03_pants_accessory.addModule(rightButton);
	
	var tab5 = ToyBoxTab(128, 128, toybox.bounds.width -128, toybox.bounds.height - 128, "arm_gaurds");	
	//Line 01
			//Label
			line01Label = Sprite(tab5.bounds.width/6-64, tab5.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_05_armGuards.png");
			tab5.addModule(line01Label);
			
			//Buttons
			leftButton = Sprite(tab5.bounds.width/6-64, 2*tab5.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				tab5.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab5.addModule(leftButton);
			
			tab5.addOption(Sprite(2*tab5.bounds.width/6-64, 2*tab5.bounds.height/8-64, 128, 128, "images/dev/_01.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-10.png");
			tab5.addOption(Sprite(3*tab5.bounds.width/6-64, 2*tab5.bounds.height/8-64, 128, 128, "images/dev/_02.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-07.png");
			tab5.addOption(Sprite(4*tab5.bounds.width/6-64, 2*tab5.bounds.height/8-64, 128, 128, "images/dev/_03.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*tab5.bounds.width/6-64, 2*tab5.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				tab5.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			tab5.addModule(rightButton);
			
		//Line 02 - Shin Guards
			var accessories_subTab_02_shinGuards = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "shin_guards");
			
			//Label
			line02Label = Sprite(accessories_subTab_02_shinGuards.bounds.width/6-64, 3*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_05_shinGuards.png");
			accessories_subTab_02_shinGuards.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(accessories_subTab_02_shinGuards.bounds.width/6-64, 4*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				accessories_subTab_02_shinGuards.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			accessories_subTab_02_shinGuards.addModule(leftButton);
			
			accessories_subTab_02_shinGuards.addOption(Sprite(2*accessories_subTab_02_shinGuards.bounds.width/6-64, 4*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/_06.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			accessories_subTab_02_shinGuards.addOption(Sprite(3*accessories_subTab_02_shinGuards.bounds.width/6-64, 4*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/_07.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			accessories_subTab_02_shinGuards.addOption(Sprite(4*accessories_subTab_02_shinGuards.bounds.width/6-64, 4*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/_08.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*accessories_subTab_02_shinGuards.bounds.width/6-64, 4*accessories_subTab_02_shinGuards.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				accessories_subTab_02_shinGuards.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			accessories_subTab_02_shinGuards.addModule(rightButton);
			
		//Line 03 - Hoods and Helmets
			var accessories_subTab_03_hoods_and_helmets = ToyBoxTab(128, 128, toybox.bounds.width-128, toybox.bounds.height - 128, "hoods_and_helmets");
			
			//Label
			line02Label = Sprite(accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 5*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/hero/subtabs/subTab_05_hoodsAndHelmets.png");
			accessories_subTab_03_hoods_and_helmets.addModule(line02Label);
			
			//Buttons
			leftButton = Sprite(accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 6*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/left.png");
			leftButton.addEvent("mousedown", function(_clipBoard){ 
				//Add rotate code here.
				accessories_subTab_03_hoods_and_helmets.rotate(1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			accessories_subTab_03_hoods_and_helmets.addModule(leftButton);
			
			accessories_subTab_03_hoods_and_helmets.addOption(Sprite(2*accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 6*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/hero/set/demo/malecharacterset2/new male set 2/malecharacter2-08.png");
			accessories_subTab_03_hoods_and_helmets.addOption(Sprite(3*accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 6*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-13.png");
			accessories_subTab_03_hoods_and_helmets.addOption(Sprite(4*accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 6*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/_05.png"), "images/dev/alpha.png");
			
			rightButton = Sprite(5*accessories_subTab_03_hoods_and_helmets.bounds.width/6-64, 6*accessories_subTab_03_hoods_and_helmets.bounds.height/8-64, 128, 128, "images/dev/right.png");
			rightButton.addEvent("mousedown", function(_clipBoard){ 
				accessories_subTab_03_hoods_and_helmets.rotate(-1, 128+64);
				_clipBoard.ToFire = ["redraw"];
			}, false);
			accessories_subTab_03_hoods_and_helmets.addModule(rightButton);
		
	//specific to toybox -- TEMP DEV
	//add all the things we just created to the toybox module
	toybox.addModule(headTab1);
	toybox.addModule(suitTab2);
	toybox.addModule(shirtTab3);
	toybox.addModule(pantsTab4);
	toybox.addModule(accessoriesTab5);
	toybox.addModule(tab1);
	toybox.addModule(head_subTab_01_hair);
	toybox.addModule(head_subTab_03_mask);
	toybox.addModule(tab2);
	toybox.addModule(suit_subTab_02_capes);
	toybox.addModule(suit_subTab_03_boots);
	toybox.addModule(tab3);
	toybox.addModule(shirt_subTab_02_jackets);
	toybox.addModule(shirt_subTab_03_logo);
	toybox.addModule(tab4);
	toybox.addModule(pants_subTab_02_belts);
	toybox.addModule(pants_subTab_03_pants_accessory);
	toybox.addModule(tab5);
	toybox.addModule(accessories_subTab_02_shinGuards);
	toybox.addModule(accessories_subTab_03_hoods_and_helmets);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
				
	playArea = PlayArea(2*1920/3,0,1920/3,1080);
	base.addModule(playArea);

	var x = Sprite(toReturn.bounds.x, 5, 10, 10);
	
	//If we don't have a skeleton yet.
	var toy;
	if(info.superhero.skeleton === undefined){
		toy = CharacterSkeleton(playArea.bounds.width/2-128, playArea.bounds.height/4, 258, 655);
		//TEMP DEV SPRITE SET UP FOR TOY
		//template
		toy.setSlot("background", 		Sprite(0,0,258,655, "images/dev/hero/set/demo/malecharacter1/new male 1 set/malecharacter1-00.png"));
		//head
		toy.setSlot("face", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("hair", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("mask", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		//suit
		toy.setSlot("jumpsuit", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("cape", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("boots", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		//shirt
		toy.setSlot("shirt", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("jacket", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("logo", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		//pants
		toy.setSlot("pants", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("belt", 			Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("pants_accessory", 	Sprite(0,0,258,655, "images/dev/alpha.png"));
		//accessories
		toy.setSlot("arm_guards", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("shin_guards", 		Sprite(0,0,258,655, "images/dev/alpha.png"));
		toy.setSlot("hoods_and_helmets", Sprite(0,0,258,655, "images/dev/alpha.png"));
		
		//unused
		toy.setSlot("body", Sprite(0,0,258,655, "images/dev/alpha.png"));
		
		//Add events
		toy.addEvent("swapComponent", function(_clipBoard){ 
			console.log('swapping');
			toy.setSlot(_clipBoard.ComponentSwap.slot, _clipBoard.ComponentSwap.image, _clipBoard.ComponentSwap.option); 
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
	backButton.addEvent("mousedown", base.changeState("PowersScreen", info), false);	
	continueButton.addEvent("mousedown", base.changeState("CharacterBioScreen", info), false); 	
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", info), false); 
	
		
		
	//DEV adding events
	headTab1.addEvent("mousedown", function(_clipBoard){ 
		headTab1.setImage("images/dev/hero/headTab_highlight.png");
		suitTab2.setImage("images/dev/hero/suitTab.png");
		shirtTab3.setImage("images/dev/hero/shirtTab.png");
		pantsTab4.setImage("images/dev/hero/pantsTab.png");
		accessoriesTab5.setImage("images/dev/hero/accessoriesTab.png");
		tab1.select();
		head_subTab_01_hair.select();
		head_subTab_03_mask.select();
		tab2.deselect();
		suit_subTab_02_capes.deselect();
		suit_subTab_03_boots.deselect();
		tab3.deselect();
		shirt_subTab_02_jackets.deselect();
		shirt_subTab_03_logo.deselect();
		tab4.deselect();
		pants_subTab_02_belts.deselect();
		pants_subTab_03_pants_accessory.deselect();
		tab5.deselect();
		accessories_subTab_02_shinGuards.deselect();
		accessories_subTab_03_hoods_and_helmets.deselect();
		//ToDo: This next line isn't working.
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		//work.
		//manager.draw();
	}, false);
	suitTab2.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		headTab1.setImage("images/dev/hero/headTab.png");
		suitTab2.setImage("images/dev/hero/suitTab_highlight.png");
		shirtTab3.setImage("images/dev/hero/shirtTab.png");
		pantsTab4.setImage("images/dev/hero/pantsTab.png");
		accessoriesTab5.setImage("images/dev/hero/accessoriesTab.png");
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_mask.deselect();
		tab2.select();
		suit_subTab_02_capes.select();
		suit_subTab_03_boots.select();
		tab3.deselect();
		shirt_subTab_02_jackets.deselect();
		shirt_subTab_03_logo.deselect();
		tab4.deselect();
		pants_subTab_02_belts.deselect();
		pants_subTab_03_pants_accessory.deselect();
		tab5.deselect();
		accessories_subTab_02_shinGuards.deselect();
		accessories_subTab_03_hoods_and_helmets.deselect();
		//manager.draw();
	}, false);
	shirtTab3.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		headTab1.setImage("images/dev/hero/headTab.png");
		suitTab2.setImage("images/dev/hero/suitTab.png");
		shirtTab3.setImage("images/dev/hero/shirtTab_highlight.png");
		pantsTab4.setImage("images/dev/hero/pantsTab.png");
		accessoriesTab5.setImage("images/dev/hero/accessoriesTab.png");
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_mask.deselect();
		tab2.deselect();
		suit_subTab_02_capes.deselect();
		suit_subTab_03_boots.deselect();
		tab3.select();
		shirt_subTab_02_jackets.select();
		shirt_subTab_03_logo.select();
		tab4.deselect();
		pants_subTab_02_belts.deselect();
		pants_subTab_03_pants_accessory.deselect();
		tab5.deselect();
		accessories_subTab_02_shinGuards.deselect();
		accessories_subTab_03_hoods_and_helmets.deselect();
	}, false);
	pantsTab4.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		headTab1.setImage("images/dev/hero/headTab.png");
		suitTab2.setImage("images/dev/hero/suitTab.png");
		shirtTab3.setImage("images/dev/hero/shirtTab.png");
		pantsTab4.setImage("images/dev/hero/pantsTab_highlight.png");
		accessoriesTab5.setImage("images/dev/hero/accessoriesTab.png");
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_mask.deselect();
		tab2.deselect();
		suit_subTab_02_capes.deselect();
		suit_subTab_03_boots.deselect();
		tab3.deselect();
		shirt_subTab_02_jackets.deselect();
		shirt_subTab_03_logo.deselect();
		tab4.select();
		pants_subTab_02_belts.select();
		pants_subTab_03_pants_accessory.select();
		tab5.deselect();
		accessories_subTab_02_shinGuards.deselect();
		accessories_subTab_03_hoods_and_helmets.deselect();
	}, false);
	accessoriesTab5.addEvent("mousedown", function(_clipBoard){ 
		if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		headTab1.setImage("images/dev/hero/headTab.png");
		suitTab2.setImage("images/dev/hero/suitTab.png");
		shirtTab3.setImage("images/dev/hero/shirtTab.png");
		pantsTab4.setImage("images/dev/hero/pantsTab.png");
		accessoriesTab5.setImage("images/dev/hero/accessoriesTab_highlight.png");
		tab1.deselect();
		head_subTab_01_hair.deselect();
		head_subTab_03_mask.deselect();
		tab2.deselect();
		suit_subTab_02_capes.deselect();
		suit_subTab_03_boots.deselect();
		tab3.deselect();
		shirt_subTab_02_jackets.deselect();
		shirt_subTab_03_logo.deselect();
		tab4.deselect();
		pants_subTab_02_belts.deselect();
		pants_subTab_03_pants_accessory.deselect();
		tab5.select();
		accessories_subTab_02_shinGuards.select();
		accessories_subTab_03_hoods_and_helmets.select();
	}, false);


	headTab1.handleEvent("mousedown", {});
*/

	return toReturn;
}