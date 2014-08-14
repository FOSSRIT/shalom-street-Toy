function CharacterBioScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	Touch.Collisions(base);
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "CharacterBioScreen";
	var info = _info;


	//--------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-05_alt.png");
	base.addModule(splashImage);
	base.addModule(info.banner);

	//Set up bios.
	var myBio = bioTextBox; myBio.bounds.x = 128; myBio.bounds.y = 508; myBio.bounds.width = 896; myBio.bounds.height = 384;
	myBio.visible = false;
	base.addModule(myBio);
	var customBio = bioSubmission; customBio.bounds.x = 128; customBio.bounds.y = 508; customBio.bounds.width = 896; customBio.bounds.height = 384;
	customBio.visible = false;
	base.addModule(customBio);
	//
	info.bios = [];
	var domValueToGet = false;
	jsonLoader.Load("data/characterBios.js", function(result){

		for(var i in result){
			info.bios[i] = result[i];
		}

		//Function for changing bios (slightly hacky)
		function _changeBio(bioToChangeTo) {
			//If the bio exists - 
			console.log(info.bios);
			if(info.bios[bioToChangeTo]) {
				myBio.visible = true;
				customBio.visible = false; //Turn off custom.

				info.superhero.myBio = info.bios[bioToChangeTo];
				myBio.getDom().innerHTML = info.bios[bioToChangeTo];
				domValueToGet = false;
			} else {

				//Else, change to custom.  
				//There are far far worse sections of code in here than this.
				//I'm certainly not going to draw the line now.
				domValueToGet = customBio.getDom();
				info.superhero.myBio = customBio.getDom().value;
				myBio.visible = false;
				customBio.visible = true;
			}
		}

		//Update bounds in case they've changed.
		info.superhero.skeleton.bounds.x = 1280;
		info.superhero.skeleton.bounds.y = 216;
		//Add your superhero.
		base.addModule(info.superhero.skeleton);

		//Default to 1.
		_changeBio(0);
		

		
		//option tabs
		var option1 = Sprite(32,8*toReturn.bounds.height/16-32,64,64, "images/dev/charBioPage/1_highlight.png");
		base.addModule(option1);
		var option2 = Sprite(32,9*toReturn.bounds.height/16-32+16,64,64, "images/dev/charBioPage/2.png");
		base.addModule(option2);
		var option3 = Sprite(32,10*toReturn.bounds.height/16-32+32,64,64, "images/dev/charBioPage/3.png");
		base.addModule(option3);
		var option4 = Sprite(32,11*toReturn.bounds.height/16-32+48,64,64, "images/dev/charBioPage/custom.png");
		base.addModule(option4); 
		
		//ToyboxTab
		var content1 = ToyBoxTab(128,8*toReturn.bounds.height/16-32,896,384, "content");
		//base.addModule(content1);
		var content2 = ToyBoxTab(128,8*toReturn.bounds.height/16-32,896,384, "content");
		//base.addModule(content2);
		var content3 = ToyBoxTab(128,8*toReturn.bounds.height/16-32,896,384, "content");
		//base.addModule(content3);
		var content4 = ToyBoxTab(128,8*toReturn.bounds.height/16-32,896,384, "content");
		//base.addModule(content4);
		
		
		//Content
		//bio1

		var bioDescription1 = Sprite(0,0,896,384, "images/dev/charBioPage/bio_1.png");
		content1.addModule(bioDescription1); 
		//bio1
		var bioDescription2 = Sprite(0,0,896,384, "images/dev/charBioPage/bio_2.png");
		content2.addModule(bioDescription2); 
		//bio1
		var bioDescription3 = Sprite(0,0,896,384, "images/dev/charBioPage/bio_3.png");
		content3.addModule(bioDescription3); 
		//bio_custom
		//var bioDescription4 = Sprite(0,0,896,384, "images/dev/_04.png");
		/*var bioDescription4 = bioSubmission;
		bioDescription4.bounds.x = 0;
		bioDescription4.bounds.y = 0;
		bioDescription4.bounds.width = 896;
		bioDescription4.bounds.height = 384;*/
		//bioSubmission.getDom().
		//content4.addModule(bioDescription4); 

		//Name tag.
		var name = bioName;
		name.bounds.x = 125;
		name.bounds.y = 400;
		name.bounds.width = 400;
		name.bounds.height = 80;
		base.addModule(name);

		/*var domElementThing = DomWrapper(document.getElementById("bioSubmitBox"));
		manager.addModule(domElementThing);*/
		
		//prep for screen
		var selectedCategory = content1;
		content1.select();
		
		//Swap content Events
		option1.addEvent("mousedown", function(_clipBoard){

			_changeBio(0);
			
			option1.setImage("images/dev/charBioPage/1_highlight.png");
			option2.setImage("images/dev/charBioPage/2.png");
			option3.setImage("images/dev/charBioPage/3.png");
			option4.setImage("images/dev/charBioPage/custom.png");

			if(_clipBoard.ToFire){
				_clipBoard.ToFire.push("redraw");
			} else {
				_clipBoard.ToFire = ["redraw"];
			}

		}, false);
		
		option2.addEvent("mousedown", function(_clipBoard){

			_changeBio(1);
			
			option1.setImage("images/dev/charBioPage/1.png");
			option2.setImage("images/dev/charBioPage/2_highlight.png");
			option3.setImage("images/dev/charBioPage/3.png");
			option4.setImage("images/dev/charBioPage/custom.png");

			if(_clipBoard.ToFire){
				_clipBoard.ToFire.push("redraw");
			} else {
				_clipBoard.ToFire = ["redraw"];
			}

		}, false);
		
		option3.addEvent("mousedown", function(_clipBoard){

			_changeBio(2);
			
			option1.setImage("images/dev/charBioPage/1.png");
			option2.setImage("images/dev/charBioPage/2.png");
			option3.setImage("images/dev/charBioPage/3_highlight.png");
			option4.setImage("images/dev/charBioPage/custom.png");

			if(_clipBoard.ToFire){
				_clipBoard.ToFire.push("redraw");
			} else {
				_clipBoard.ToFire = ["redraw"];
			}

		}, false);
		
		option4.addEvent("mousedown", function(_clipBoard){

			_changeBio(3);
			
			selectedCategory = content4;
			option1.setImage("images/dev/charBioPage/1.png");
			option2.setImage("images/dev/charBioPage/2.png");
			option3.setImage("images/dev/charBioPage/3.png");
			option4.setImage("images/dev/charBioPage/custom_highlight.png");

			if(_clipBoard.ToFire){
				_clipBoard.ToFire.push("redraw");
			} else {
				_clipBoard.ToFire = ["redraw"];
			}

		}, false);

	});
		
	//Buttons
	backButton = Sprite(0, 1080-128, 256, 128, "images/dev/buttons/back.png");
	base.addModule(backButton);
	
	continueButton = Sprite(1920-256, 1080-128, 256, 128, "images/dev/buttons/continue.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	backButton.addEvent("mousedown", base.changeState("CharacterBuilder", _info), false);
	continueButton.addEvent("mousedown", function(_clipBoard){ if(domValueToGet){ info.superhero.myBio = domValueToGet.value; }}, false);
	continueButton.addEvent("mousedown", base.changeState("ResultsScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);


	return toReturn;
}