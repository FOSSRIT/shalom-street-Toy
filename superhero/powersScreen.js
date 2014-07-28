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
	
	var cat1_element_button = Sprite(64, 6*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/brave.png");
	base.addModule(cat1_element_button);
	
	/*
	var power3_fire_button = Sprite(0, 2*toReturn.bounds.height/8, 256, 128, "images/dev/powersButtons/fire.png");
	base.addModule(power3_fire_button);
	
	var power4_water_button = Sprite(0, 3*toReturn.bounds.height/8, 256, 128, "images/dev/powersButtons/water.png");
	base.addModule(power4_water_button);
	
	var power5_fly_button = Sprite(0, 4*toReturn.bounds.height/8, 256, 128, "images/dev/powersButtons/fly.png");
	base.addModule(power5_fly_button);
	
	var power6_diplomacy_button = Sprite(0, 5*toReturn.bounds.height/8, 256, 128, "images/dev/powersButtons/diplomacy.png");
	base.addModule(power6_diplomacy_button);
	
	var power7_superSmart_button = Sprite(0, 6*toReturn.bounds.height/8, 256, 128, "images/dev/powersButtons/superSmart.png");
	base.addModule(power7_superSmart_button);
	*/
	
	//Events
	backButton.addEvent("mousedown", base.changeState("QualitiesScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("GenderSelect", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	
	/*
	power3_fire_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power3_fire_button,"fire","images/dev/powersButtons/fire.png","images/dev/powersButtons/fire_selected.png", _clipBoard);
	},false);
	
	power4_water_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power4_water_button,"water","images/dev/powersButtons/water.png","images/dev/powersButtons/water_selected.png", _clipBoard);
	},false);
	
	power5_fly_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power5_fly_button,"fly","images/dev/powersButtons/fly.png","images/dev/powersButtons/fly_selected.png", _clipBoard);
	},false);
	
	power6_diplomacy_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power6_diplomacy_button,"diplomacy","images/dev/powersButtons/diplomacy.png","images/dev/powersButtons/diplomacy_selected.png", _clipBoard);
	},false);
	
	power7_superSmart_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("powers",power7_superSmart_button,"superSmart","images/dev/powersButtons/superSmart.png","images/dev/powersButtons/superSmart_selected.png", _clipBoard);
	},false);
	*/
	
	


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