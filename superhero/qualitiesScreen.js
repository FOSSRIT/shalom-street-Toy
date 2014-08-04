function QualitiesScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "QualitiesScreen";
	var info = _info;
	Touch.Collisions(base);

	var maxQualities = 1;


	//Reset the super hero virtues.
	info.superhero.virtues = [];
	info.superhero.virtuesSelected = [];
	//info.superhero.virtueSelected
	
	//Dev Splash Image
	var splashImage = Sprite(0,0,1920,1080, "images/dev/qualitiesButtons/background.png");
	base.addModule(splashImage);
	
	/*
	var qualitiesHintImg = Sprite(toReturn.bounds.width/2-256,toReturn.bounds.height/8-64,512,128, "images/dev/qualitiesHint.png");
	base.addModule(qualitiesHintImg);
	*/
	
	/*
	var heroImage = Sprite(toReturn.bounds.width/2-256,toReturn.bounds.height/2-384,512,1024, "images/dev/bro.png");
	base.addModule(heroImage);
	*/
	
	
	var definition = Sprite(3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512, "images/dev/alpha.png");
	base.addModule(definition);
	
	//Buttons
	var backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	var continueButton = Sprite(1920-256, 1080-128, 256, 128, "images/dev/buttons/continue.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);

	var grid = Grid(toReturn.bounds.width/5, toReturn.bounds.height/3-128, 2, 1, 256, 256, 10);
	base.addModule(grid);
	
	//Qualities
	var quality1_brave_button = Sprite(64, 6*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/brave.png");
	base.addModule(quality1_brave_button);
	
	var quality2_caring_button = Sprite(64, 7*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/caring.png");
	base.addModule(quality2_caring_button);
	
	var quality3_friendship_button = Sprite(64, 8*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/friendship.png");
	base.addModule(quality3_friendship_button);
	
	var quality4_listening_button = Sprite(64, 9*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/listening.png");
	base.addModule(quality4_listening_button);
	
	var quality5_respect_button = Sprite(64, 10*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/respect.png");
	base.addModule(quality5_respect_button);
	
	var quality6_responsibility_button = Sprite(64, 11*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/responsibility.png");
	base.addModule(quality6_responsibility_button);
	
	var quality7_satisfied_button = Sprite(64, 12*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/satisfied.png");
	base.addModule(quality7_satisfied_button);
	
	var quality8_understanding_button = Sprite(64, 13*toReturn.bounds.height/16, 256, 64, "images/dev/qualitiesButtons/understanding.png");
	base.addModule(quality8_understanding_button);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("DetailedScenarioScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);	
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	
	quality1_brave_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality1_brave_button,"brave","images/dev/qualitiesButtons/brave.png","images/dev/qualitiesButtons/brave_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_bravery.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality2_caring_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality2_caring_button,"caring","images/dev/qualitiesButtons/caring.png","images/dev/qualitiesButtons/caring_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_caring.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality3_friendship_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality3_friendship_button,"friendship","images/dev/qualitiesButtons/friendship.png","images/dev/qualitiesButtons/friendship_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_friendship.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality4_listening_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality4_listening_button,"listening","images/dev/qualitiesButtons/listening.png","images/dev/qualitiesButtons/listening_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_listening.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality5_respect_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality5_respect_button,"respect","images/dev/qualitiesButtons/respect.png","images/dev/qualitiesButtons/respect_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_respect.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality6_responsibility_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality6_responsibility_button,"responsibility","images/dev/qualitiesButtons/responsibility.png","images/dev/qualitiesButtons/responsibility_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_responsibility.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality7_satisfied_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality7_satisfied_button,"satisfied","images/dev/qualitiesButtons/satisfied.png","images/dev/qualitiesButtons/satisfied_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_satisfied.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
		_clipBoard.ToFire = ["redraw"];
	},false);
	
	quality8_understanding_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality8_understanding_button,"understanding","images/dev/qualitiesButtons/understanding.png","images/dev/qualitiesButtons/understanding_highlight.png", _clipBoard);
		definition.setImage("images/dev/qualitiesButtons/midrash_understanding.png", true, 3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-128,512,512);
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
				info.superhero.virtuesSelected.splice(i, 1);
				_buttonName.setImage(_unselectedImage);
				if(_clipBoard.ToFire) { _clipBoard.ToFire.push("redraw"); } else { _clipBoard.ToFire = ["redraw"]; }
			}
		}
		if(tempFound == false){
			//If the logic finds its way here, then it means that the power is not in the list.
			//So now we have to add it
			info.superhero[_list].push(_attributeName);
			info.superhero.virtuesSelected.push(_buttonName);
			//Make sure that you odn't have more qualities than allowed.
			if(info.superhero[_list].length > maxQualities) {
				//info.superhero[_list].shift();
				info.superhero.virtuesSelected[0].handleEvent("mousedown", {});
			}
			//console.log(_attributeName);
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