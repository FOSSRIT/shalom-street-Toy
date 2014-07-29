function PowersScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "PowersScreen";
	var info = _info;
	var maxPowers = 2;
	Touch.Collisions(base);


	info.superhero.powers = [];
	info.superhero.powersSelected = [];
				
	//Dev Splash Image
	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-03_alt.png");
	base.addModule(splashImage);
	
	/*
	var powersHintImg = Sprite(toReturn.bounds.width/2-256,toReturn.bounds.height/8-64,512,128, "images/dev/powersHint.png");
	base.addModule(powersHintImg);
	*/
	
	/*
	var heroImage = Sprite(toReturn.bounds.width/2-256,toReturn.bounds.height/2-384,512,1024, "images/dev/bro.png");
	base.addModule(heroImage);
	*/
	
	
	
	var definition = Sprite(3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-256,512,512, "images/dev/midrash_water.png");
	base.addModule(definition);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);
	
	//Powers
	
	var cat1_element_button = Sprite(64, 6*toReturn.bounds.height/16, 256, 64, "images/dev/powersButtons/elements.png");
	base.addModule(cat1_element_button);
	
	var cat2_energy_button = Sprite(64, 9*toReturn.bounds.height/16, 256, 64, "images/dev/powersButtons/energy.png");
	base.addModule(cat2_energy_button);
	
	var cat3_mutant_button = Sprite(64, 10*toReturn.bounds.height/16, 256, 64, "images/dev/powersButtons/mutant.png");
	base.addModule(cat3_mutant_button);
	
	var cat4_super_button = Sprite(64, 11*toReturn.bounds.height/16, 256, 64, "images/dev/powersButtons/super.png");
	base.addModule(cat4_super_button);
	
	//ToyboxTab
	var elementContent = ToyBoxTab(64,7*toReturn.bounds.height/16,256,128, "powers");
	base.addModule(elementContent);
	
	var energyContent = ToyBoxTab(64,8*toReturn.bounds.height/16,256,128, "powers");
	base.addModule(energyContent);
	
	var mutantContent = ToyBoxTab(64,9*toReturn.bounds.height/16,256,256, "powers");
	base.addModule(mutantContent);
	
	var superContent = ToyBoxTab(64,10*toReturn.bounds.height/16,256,256, "powers");
	base.addModule(superContent);
	
	//content powers
	//element
	var fireButton = Sprite(0, 0, 256, 64, "images/dev/powersButtons/fire.png");
	elementContent.addModule(fireButton);
	var waterButton = Sprite(0, 64, 256, 64, "images/dev/powersButtons/water.png");
	elementContent.addModule(waterButton);
	//energy
	var healButton = Sprite(0, 0, 256, 64, "images/dev/powersButtons/fire.png");
	energyContent.addModule(healButton);
	var laserButton = Sprite(0, 64, 256, 64, "images/dev/powersButtons/water.png");
	energyContent.addModule(laserButton);
	//mutant
	var duplicate = Sprite(0, 0, 256, 64, "images/dev/powersButtons/fire.png");
	mutantContent.addModule(duplicate);
	var mind = Sprite(0, 64, 256, 64, "images/dev/powersButtons/water.png");
	mutantContent.addModule(mind);
	var teleport = Sprite(0, 128, 256, 64, "images/dev/powersButtons/fire.png");
	mutantContent.addModule(teleport);
	var xray = Sprite(0, 192, 256, 64, "images/dev/powersButtons/water.png");
	mutantContent.addModule(xray);
	//super
	var flight = Sprite(0, 0, 256, 64, "images/dev/powersButtons/fire.png");
	superContent.addModule(flight);
	var speed = Sprite(0, 64, 256, 64, "images/dev/powersButtons/water.png");
	superContent.addModule(speed);
	var smart = Sprite(0, 128, 256, 64, "images/dev/powersButtons/fire.png");
	superContent.addModule(smart);
	var strength = Sprite(0, 192, 256, 64, "images/dev/powersButtons/water.png");
	superContent.addModule(strength);
	
	//prep for screen
	var selectedCategory = elementContent;
	elementContent.select();
	
	//Events
	backButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("GenderSelect", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	
	//Swap content Events
	cat1_element_button.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			cat1_element_button.setImage("images/dev/powersButtons/elements.png"); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = elementContent;
		cat1_element_button.setImage("images/dev/powersButtons/elements.png");
		//And load in all of our tabs.
		elementContent.select();
		
		//reset pos of tabs
		cat2_energy_button.setImage("images/dev/powersButtons/energy.png", true, 64, 9*toReturn.bounds.height/16, 256, 64); 
		cat3_mutant_button.setImage("images/dev/powersButtons/mutant.png", true, 64, 10*toReturn.bounds.height/16, 256, 64); 
		cat4_super_button.setImage("images/dev/powersButtons/super.png", true, 64, 11*toReturn.bounds.height/16, 256, 64); 

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	cat2_energy_button.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			cat2_energy_button.setImage("images/dev/powersButtons/energy.png", true, 64, 7*toReturn.bounds.height/16, 256, 64); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = energyContent;
		cat2_energy_button.setImage("images/dev/powersButtons/energy.png");
		//And load in all of our tabs.
		energyContent.select();
		
		cat3_mutant_button.setImage("images/dev/powersButtons/mutant.png", true, 64, 10*toReturn.bounds.height/16, 256, 64); 
		cat4_super_button.setImage("images/dev/powersButtons/super.png", true, 64, 11*toReturn.bounds.height/16, 256, 64); 

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	cat3_mutant_button.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			cat3_mutant_button.setImage("images/dev/powersButtons/mutant.png", true, 64, 8*toReturn.bounds.height/16, 256, 64); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = mutantContent;
		cat3_mutant_button.setImage("images/dev/powersButtons/mutant.png");
		//And load in all of our tabs.
		mutantContent.select();
		
		cat2_energy_button.setImage("images/dev/powersButtons/energy.png", true, 64, 7*toReturn.bounds.height/16, 256, 64); 
		cat4_super_button.setImage("images/dev/powersButtons/super.png", true, 64, 13*toReturn.bounds.height/16, 256, 64); 

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	cat4_super_button.addEvent("mousedown", function(_clipBoard){

		//If we need to unselect things.
		if(selectedCategory != undefined) {
			cat4_super_button.setImage("images/dev/powersButtons/super.png", true, 64, 9*toReturn.bounds.height/16, 256, 64); //Unselect
			selectedCategory.deselect();
		}
		
		//Set our own image.  And mark that we're selected.
		selectedCategory = superContent;
		cat4_super_button.setImage("images/dev/powersButtons/super.png");
		//And load in all of our tabs.
		superContent.select();
		
		cat2_energy_button.setImage("images/dev/powersButtons/energy.png", true, 64, 7*toReturn.bounds.height/16, 256, 64); 
		cat3_mutant_button.setImage("images/dev/powersButtons/mutant.png", true, 64, 8*toReturn.bounds.height/16, 256, 64);

		if(_clipBoard.ToFire){
			_clipBoard.ToFire.push("redraw");
		} else {
			_clipBoard.ToFire = ["redraw"];
		}

	}, false);
	
	


	/*------------------INTERNAL FUNCTIONS----------------------------------*/




	//Helper Functions
	/*
	function: 	highlightQualityAndPowerButtons
	parameters:	_list: which list you are looping through. IE: "qualities" or "powers"
				_buttonName: name of the button you wish to alter
				_attributeName: name of the quality or power you wish to add or remove
				_unselectedImage: the "unselected" image url to switch to
				_selectedImage: the "selected" image url to switch to
				_clipBoard: clipboard. because Danny said to.
	description: This function highlights and unhighlights powers and qualities. It also adds and removes powers and qualities from the current super hero.
	returns: N/A
	*/
	var highlightQualityAndPowerButtons = function(_list, _buttonName, _attributeName, _unselectedImage, _selectedImage, _clipBoard){
		tempFound = false;
		for(i = 0; i < info.superhero[_list].length; i++) {
			if(info.superhero[_list][i] == _attributeName){
				//If the logic finds its way here, then it means that the power is already in the list.
				//So now we have to remove it
				tempFound = true;
				info.superhero[_list].splice(i, 1);
				info.superhero.powersSelected.splice(i, 1);
				_buttonName.setImage(_unselectedImage);
				if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
			}
		}
		if(tempFound == false){
			//If the logic finds its way here, then it means that the power is not in the list.
			//So now we have to add it
			info.superhero[_list].push(_attributeName);
			info.superhero.powersSelected.push(_buttonName);

			if(info.superhero[_list].length > maxPowers) {
				info.superhero.powersSelected[0].handleEvent("mousedown", {});
				//info.superhero[_list].shift();
			}

			console.log(_attributeName);
			_buttonName.setImage(_selectedImage);
			if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		}
		console.log("Current list content: "+info.superhero[_list]);


		//ToDo: Sometime switch it out for javascript .find
		/*var x = info.superhero[_list].indexOf(_attributeName);
		//
		if(x == -1){ //not in list.  Add it.
			info.superhero[_list].push(_attributeName);
			_buttonName.setImage(_selectedImage);
			if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }

		} else { //In list.  Now we have to remove it.
			tempFound = true;
			info.superhero[_list].pop(_attributeName);
			_buttonName.setImage(_unselectedImage);
			if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
		}*/
	}


	return toReturn;
}