function QualitiesScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "QualitiesScreen";
	var info = _info;

	var maxQualities = 2;


	//Reset the super hero virtues.
	info.superhero.virtues = [];
	info.superhero.virtuesSelected = [];
	//info.superhero.virtueSelected
	
	//Dev Splash Image
	var splashImage = Sprite(0,0,1920,1080, "images/dev/qualitiesBackground.png");
	base.addModule(splashImage);
	
	var heroImage = Sprite(toReturn.bounds.width/2-256,toReturn.bounds.height/2-384,512,1024, "images/dev/bro.png");
	base.addModule(heroImage);
	
	var definition = Sprite(3*toReturn.bounds.width/4-128,toReturn.bounds.height/2-256,512,512, "images/dev/empathy_definition.png");
	base.addModule(definition);
	
	//Buttons
	var backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	
	var continueButton = Sprite(1920-128, 1080-128, 128, 128, "images/dev/continue.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 128, 128, "images/dev/quit.png");
	base.addModule(quitButton);

	var grid = Grid(toReturn.bounds.width/5, toReturn.bounds.height/3-128, 2, 1, 256, 256, 10);
	base.addModule(grid);
	
	//Qualities
	var quality1Button = Sprite(toReturn.bounds.width/5, toReturn.bounds.height/3-128, 256, 256, "images/dev/quality1_unselected.png");
	base.addModule(quality1Button);
	//grid.setSpace(quality1Button, 0, 0, true);
	
	var quality2Button = Sprite(toReturn.bounds.width/5, 2*toReturn.bounds.height/3-128, 256, 256, "images/dev/quality2_unselected.png");
	//grid.setSpace(quality2Button, 0, 1, true);
	base.addModule(quality2Button);
	
	var quality3_empathy_button = Sprite(0, 2*toReturn.bounds.height/8, 256, 128, "images/dev/qualitiesButtons/empathy.png");
	base.addModule(quality3_empathy_button);
	
	var quality4_forgiveness_button = Sprite(0, 3*toReturn.bounds.height/8, 256, 128, "images/dev/qualitiesButtons/forgiveness.png");
	base.addModule(quality4_forgiveness_button);
	
	var quality5_hate_button = Sprite(0, 4*toReturn.bounds.height/8, 256, 128, "images/dev/qualitiesButtons/hate.png");
	base.addModule(quality5_hate_button);
	
	var quality6_honor_button = Sprite(0, 5*toReturn.bounds.height/8, 256, 128, "images/dev/qualitiesButtons/honor.png");
	base.addModule(quality6_honor_button);
	
	var quality7_pride_button = Sprite(0, 6*toReturn.bounds.height/8, 256, 128, "images/dev/qualitiesButtons/pride.png");
	base.addModule(quality7_pride_button);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("DetailedScenarioScreen", _info), false);
	continueButton.addEvent("mousedown", base.changeState("PowersScreen", _info), false);	
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);

	
	quality1Button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality1Button,"beingAwesome","images/dev/quality1_unselected.png","images/dev/quality1_selected.png", _clipBoard);
	},false);
	
	quality2Button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality2Button,"beingLame","images/dev/quality2_unselected.png","images/dev/quality2_selected.png", _clipBoard);
	},false);
	
	quality3_empathy_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality3_empathy_button,"empathy","images/dev/qualitiesButtons/empathy.png","images/dev/qualitiesButtons/empathy_highlight.png", _clipBoard);
	},false);
	
	quality4_forgiveness_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality4_forgiveness_button,"forgiveness","images/dev/qualitiesButtons/forgiveness.png","images/dev/qualitiesButtons/forgiveness_highlight.png", _clipBoard);
	},false);
	
	quality5_hate_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality5_hate_button,"hate","images/dev/qualitiesButtons/hate.png","images/dev/qualitiesButtons/hate_highlight.png", _clipBoard);
	},false);
	
	quality6_honor_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality6_honor_button,"honor","images/dev/qualitiesButtons/honor.png","images/dev/qualitiesButtons/honor_highlight.png", _clipBoard);
	},false);
	
	quality7_pride_button.addEvent("mousedown", function(_clipBoard){
		highlightQualityAndPowerButtons("virtues",quality7_pride_button,"pride","images/dev/qualitiesButtons/pride.png","images/dev/qualitiesButtons/pride_highlight.png", _clipBoard);
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