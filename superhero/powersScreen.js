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
	
	
	
	var definition1 = Sprite(3*toReturn.bounds.width/4-128,6*toReturn.bounds.height/16,512,256, "images/dev/alpha.png");
	base.addModule(definition1);
	var definition2 = Sprite(3*toReturn.bounds.width/4-128,6*toReturn.bounds.height/16+256,512,256, "images/dev/alpha.png");
	base.addModule(definition2);
	
	//Buttons
	backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-256, 1080-128, 256, 128, "images/dev/buttons/continue.png");
	base.addModule(continueButton);
	
	quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
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
	var elementOffset = 32;
	//element
	var fireButton = Sprite(elementOffset, 0, 256, 64, "images/dev/powersButtons/fire_roboto.png");
	elementContent.addModule(fireButton);
	var waterButton = Sprite(elementOffset, 64, 256, 64, "images/dev/powersButtons/water_roboto.png");
	elementContent.addModule(waterButton);
	//energy
	var healButton = Sprite(elementOffset, 0, 256, 64, "images/dev/powersButtons/healing.png");
	energyContent.addModule(healButton);
	var laserButton = Sprite(elementOffset, 64, 256, 64, "images/dev/powersButtons/laser.png");
	energyContent.addModule(laserButton);
	//mutant
	var duplicate = Sprite(elementOffset, 0, 256, 64, "images/dev/powersButtons/duplicate.png");
	mutantContent.addModule(duplicate);
	var mind = Sprite(elementOffset, 64, 256, 64, "images/dev/powersButtons/mind.png");
	mutantContent.addModule(mind);
	var teleport = Sprite(elementOffset, 128, 256, 64, "images/dev/powersButtons/teleport.png");
	mutantContent.addModule(teleport);
	var xray = Sprite(elementOffset, 192, 256, 64, "images/dev/powersButtons/xray.png");
	mutantContent.addModule(xray);
	//super
	var flight = Sprite(elementOffset, 0, 256, 64, "images/dev/powersButtons/flight.png");
	superContent.addModule(flight);
	var speed = Sprite(elementOffset, 64, 256, 64, "images/dev/powersButtons/speed.png");
	superContent.addModule(speed);
	var smart = Sprite(elementOffset, 128, 256, 64, "images/dev/powersButtons/smart.png");
	superContent.addModule(smart);
	var strength = Sprite(elementOffset, 192, 256, 64, "images/dev/powersButtons/strength.png");
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

		_clipBoard.BlockEvents = ["mousedown"];

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

		_clipBoard.BlockEvents = ["mousedown"];

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

		_clipBoard.BlockEvents = ["mousedown"];

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

		_clipBoard.BlockEvents = ["mousedown"];

	}, false);
	
	//select powers events
	//element
	fireButton.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",fireButton,"fire","images/dev/powersButtons/fire_roboto.png","images/dev/powersButtons/fire_roboto_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	waterButton.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",waterButton,"water","images/dev/powersButtons/water_roboto.png","images/dev/powersButtons/water_roboto_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	//energy
	healButton.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",healButton,"healing","images/dev/powersButtons/healing.png","images/dev/powersButtons/healing_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	laserButton.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",laserButton,"laser","images/dev/powersButtons/laser.png","images/dev/powersButtons/laser_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	//mutant
	duplicate.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",duplicate,"duplicate","images/dev/powersButtons/duplicate.png","images/dev/powersButtons/duplicate_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	mind.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",mind,"mind","images/dev/powersButtons/mind.png","images/dev/powersButtons/mind_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	teleport.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",teleport,"teleport","images/dev/powersButtons/teleport.png","images/dev/powersButtons/teleport_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	xray.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",xray,"xray","images/dev/powersButtons/xray.png","images/dev/powersButtons/xray_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	//super
	flight.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",flight,"flight","images/dev/powersButtons/flight.png","images/dev/powersButtons/flight_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	speed.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",speed,"speed","images/dev/powersButtons/speed.png","images/dev/powersButtons/speed_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	smart.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",smart,"smart","images/dev/powersButtons/smart.png","images/dev/powersButtons/smart_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	strength.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",strength,"strength","images/dev/powersButtons/strength.png","images/dev/powersButtons/strength_selected.png", _clipBoard);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	
	
	


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
		
		if(info.superhero[_list][0] != undefined){
			definition1.setImage("images/dev/power_descriptions/"+info.superhero[_list][0]+".png");
		}else{
			definition1.setImage("images/dev/alpha.png");
		}
		if(info.superhero[_list][1] != undefined){
			definition2.setImage("images/dev/power_descriptions/"+info.superhero[_list][1]+".png");
		}else{
			definition2.setImage("images/dev/alpha.png");
		}


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