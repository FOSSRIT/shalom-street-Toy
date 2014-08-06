function CharacterBuilder(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBuilderBoy";
	var info = _info;
	var currentlySelectedSlot; //Used to tell what to apply the color to.
	Touch.Collisions(base);



	jsonLoader.Load("data/characterBuilder.js", function(result){
		jsonBuilder.GetJson(base, result);

		var selectedCategory = undefined;


		//Load in the basics.
		var splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-04.png");
		base.addModule(splashImage);
		base.addModule(info.banner);


		//Build toybox, which is a weird name for this.
		var toybox = ToyBox(0,0,2*1920/3,1080);
		base.addModule(toybox);


		//---------------------------------------------------------------------------------------------
		//               PROPOGATE CATEGORIES/TABS/OPTIONS FROM JSON
		//---------------------------------------------------------------------------------------------
		
		//Now we add the tabs themselves, based on what we've pulled out of the json.
		var i = -1; //And we loop through the properties.
		for (var v in base.jsonData.categories) {
			i++; //I moved this up here and started at -1 to 0 to make it easier to read.
			//Not sure what the positioning is doing with this, but I guess I trust it.
			var category = Sprite(0, 400+(i*84), 320, 80, base.jsonData.categories[v].sprite[1]); //Start with unselected.
			//We add a property on for selected/unselected and for what tabs it's linked to.  
			//We can do this because javascript.
			//In the future, we might possibly make a better more modular approach to this?
			category.selectedImage = base.jsonData.categories[v].sprite[0];
			category.unselectedImage = base.jsonData.categories[v].sprite[1];
			category.tabs = [];

			//Add tabs into each category.
			var j = -1;
			for(var t in base.jsonData.categories[v].tabs) {
				j++; //Same deal here.
				//Again, I don't really know how the positioning here works, but I'm copying and pasting it.
				//(toybox.bounds.height-128)/8-64
				var tab = ToyBoxTab(256, (j*(toybox.bounds.height-256)/3)+256, toybox.bounds.width-256, toybox.bounds.height-256, t);
				category.tabs.push(tab);
				toybox.addModule(tab);

				//Add label.
				//console.log(t);
				var header = Sprite(128, -68, 128, 128, base.jsonData.categories[v].tabs[t].sprite);
				tab.addModule(header);

				//Add left/right buttons to tab.  These dimensions and stuff need to be changed to something that makes sense.
				//Left
				//tab.bounds.width/6-64
				var leftButton = Sprite(64, tab.bounds.height/8-64, 128, 128, "images/dev/left.png");
				leftButton.addEvent("mousedown", (function(tab) { //Passing in variable by value gets rid of the closure problem. 
					var f = function(_clipBoard){ 
						tab.rotate(1, tab.bounds.width/6)
						_clipBoard.ToFire = ["redraw"];
					}
					return f;
				})(tab), false);
				tab.addModule(leftButton);
				//Right
				var rightButton = Sprite(4*tab.bounds.width/6-64, tab.bounds.height/8-64, 128, 128, "images/dev/right.png");
				rightButton.addEvent("mousedown", (function(tab) { //Passing in variable by value gets rid of the closure problem. 
					var f = function(_clipBoard){ 
						tab.rotate(-1, tab.bounds.width/6)
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
					var option = base.jsonData.categories[v].tabs[t].options[o];//Get the proper info for the option with this body type.
					//

					var bodyPart = BodyPart(0, 0, 0, 0);//Some stuff here.
					//foreach bodyType for that bodyPart
					for(var b in option){

						bodyPart.addBodyType(b, option[b].sprite);
					}
					tab.addOption( Sprite(
						(1+k)*tab.bounds.width/6, 
						tab.bounds.height/8-64, 
						128, 128, 
						option[sex].option_sprite[0]), bodyPart);
				}
			}


			//Attach everything else.
			category.addEvent("mousedown", function(_clipBoard){

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

				if(_clipBoard.ToFire){
					_clipBoard.ToFire.push("redraw");
				} else {
					_clipBoard.ToFire = ["redraw"];
				}

			}, false);

			toybox.addModule(category);

			if( i == 0 ) //Not the best solution, but fairly reliable.
			{
				category.handleEvent("mousedown", {});
			}
		}



		//--------------------------------------------------------------------------------------------
		//                    END PROPOGATION
		//--------------------------------------------------------------------------------------------

		//--------Add playArea.
		var playArea = PlayArea(2*1920/3,0,1920/3,1080);
		base.addModule(playArea);

		//--------------------------------------------------------------------------------------------
		//                   SKELETON BUILD/UPDATE
		//--------------------------------------------------------------------------------------------
		var toy;
		if(info.superhero.skeleton == undefined){
			toy = CharacterSkeleton(playArea.bounds.width/2-320, playArea.bounds.height/5, 640, 864);
			//Make base.
			//Loop through all defaults.
			for (var d in base.jsonData.defaults){
				//Make a bodypart that will be pushed to this slot.
				var part = BodyPart(0,0,0,0);
				for(var b in base.jsonData.defaults[d]){
					part.addBodyType(b, base.jsonData.defaults[d][b]);
				}

				toy.setSlot(d, part);
			}

			//Set bodyType.
			toy.setBodyType(info.superhero.bodyType);

			//Add events
			toy.addEvent("swapComponent", function(_clipBoard){ 
				toy.setSlot(_clipBoard.ComponentSwap.slot, _clipBoard.ComponentSwap.image, _info.superhero.bodyType); 
				if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
			}, false);
			
			//Update that this is fixed.
			info.superhero.skeleton = toy;

		} else { 
			toy = info.superhero.skeleton;
			toy.setBodyType(info.superhero.bodyType);
			//Update skeleton if body type has changed.
		}
		//Add module.
		playArea.addModule(toy);

		//---

		 
		// Add playArea

		var x = Sprite(toReturn.bounds.x, 5, 10, 10);


		//Buttons
		var backButton = Sprite(toReturn.bounds.x, toReturn.bounds.height-128, 256, 128, "images/dev/buttons/back.png");
		toReturn.addModule(backButton);
		
		var continueButton = Sprite(toReturn.bounds.width-256, toReturn.bounds.height-128, 256, 128, "images/dev/buttons/continue.png");
		toReturn.addModule(continueButton);
		
		quitButton = Sprite(toReturn.bounds.x, toReturn.bounds.y, 256, 216, "images/dev/buttons/quit.png");
		toReturn.addModule(quitButton);









		//----------COLORS-----------------------------------------
		//WORKING
		//-------------------------------------------------------

		//Register events.
		base.addEvent("swapComponent", function(_clipBoard){ 
			currentlySelectedSlot = _clipBoard.ComponentSwap.slot;
		}, true);
		
		//colors buttons
		var colorBanner = Sprite(toybox.bounds.width-276, 231, 256, 128, "images/dev/_00.png"); base.addModule(colorBanner);
		//Define what colors we want to use.
		var colors = { "purple":[205,105,201], "pink":[255,182,193], "brown":[139,69,19], "white":[255,255,255], "black":[1,1,1],
			"red":[220, 20, 60], "orange":[238,118,1], "yellow":[255,215,1], "green":[1,201,87], "blue":[61,89,171] };
		var columns = 2; var rows = 5; //How many rows and columns are showing up in our grid.

		var c_row = 0; var c_column = 0;
		for (var color in colors) {

			//Make the button.

			//Could be formatted better.
			var button = Sprite(toybox.bounds.width- (276-c_column*128), 379 + (128*c_row), 128, 128, "images/production/dressup/icons/colors/" + color + ".png");
			
			(function(color) { //Wrapping a function around the way we add events fixes closure issues.
				button.addEvent("mousedown", function(){ 
					toy.setSlotColor(currentlySelectedSlot, colors[color][0], colors[color][1], colors[color][2], true); //Set the color of the slot.
				}, false);
			})(color);

			base.addModule(button);

			c_row++;
			if(c_row == rows){ //Increment rows and columns accordingly.
				c_row = 0;
				c_column++;
			}
		}


		/*
		var redButton = Sprite(toybox.bounds.width-256, 216+128, 128, 128, "images/dev/_01.png");
		toReturn.addModule(redButton);
		var orangeButton = Sprite(toybox.bounds.width-256, 216+(2*128), 128, 128, "images/dev/_02.png");
		toReturn.addModule(orangeButton);
		var yellowButton = Sprite(toybox.bounds.width-256, 216+(3*128), 128, 128, "images/dev/_03.png");
		toReturn.addModule(yellowButton);
		var greenButton = Sprite(toybox.bounds.width-256, 216+(4*128), 128, 128, "images/dev/_04.png");
		toReturn.addModule(greenButton);
		var blueButton = Sprite(toybox.bounds.width-256, 216+(5*128), 128, 128, "images/dev/_05.png");
		toReturn.addModule(blueButton);
		
		var purpleButton = Sprite(toybox.bounds.width-128, 216+128, 128, 128, "images/dev/_06.png");
		toReturn.addModule(purpleButton);
		var pinkButton = Sprite(toybox.bounds.width-128, 216+(2*128), 128, 128, "images/dev/_07.png");
		toReturn.addModule(pinkButton);
		var brownButton = Sprite(toybox.bounds.width-128, 216+(3*128), 128, 128, "images/dev/_08.png");
		toReturn.addModule(brownButton);
		var whiteButton = Sprite(toybox.bounds.width-128, 216+(4*128), 128, 128, "images/dev/_00.png");
		toReturn.addModule(whiteButton);
		var blackButton = Sprite(toybox.bounds.width-128, 216+(5*128), 128, 128, "images/error.png");
		toReturn.addModule(blackButton);
		*/
		
		
		//Events
		backButton.addEvent("mousedown", base.changeState("ModelSelect", info), false);	
		continueButton.addEvent("mousedown", base.changeState("CharacterBioScreen", info), false); 	
		quitButton.addEvent("mousedown", base.changeState("SplashScreen", info), false); 

	});



	return toReturn;
}