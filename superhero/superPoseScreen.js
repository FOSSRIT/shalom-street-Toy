function SuperPoseScreen(_info){
	//------------------------------VARIABLES-------------------------------------
	var base = State(0, 0, 1920, 1080); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "SuperPoseScreen";
	var info = _info;
	Touch.Collisions(base);

	//--------------------------------------------------------------------

	splashImage = Sprite(0,0,1920,1080, "images/Backgrounds/background-08.png");
	base.addModule(splashImage);
	base.addModule(info.banner);

	//Update bounds in case they've changed.
	info.superhero.skeleton.bounds.x = 1280;
	info.superhero.skeleton.bounds.y = 216;
	//Add your superhero.
	base.addModule(info.superhero.skeleton);
	
	//Buttons
	/*
	backButton = Sprite(0, 1080-128, 128, 128, "images/dev/back.png");
	base.addModule(backButton);
	*/
	
	continueButton = Sprite(1920-512, 1080-150, 512, 150, "images/dev/alpha.png");
	base.addModule(continueButton);
	
	var quitButton = Sprite(0, 0, 256, 216, "images/dev/buttons/quit.png");
	base.addModule(quitButton);
	
	//Events
	//backButton.addEvent("mousedown", base.changeState("ResultsScreen", _info), false);
	
	continueButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);
	quitButton.addEvent("mousedown", base.changeState("SplashScreen", _info), false);


	console.log('post results here');


	//Copied from http://stackoverflow.com/questions/5292689/sending-images-from-canvas-elements-using-ajax-and-php-files
	/*xhr: function () {
        var myXHR = new XMLHttpRequest();
        if (myXHR.sendAsBinary == undefined) {
            myXHR.legacySend = myXHR.send;
            myXHR.sendAsBinary = function (string) {
                var bytes = Array.prototype.map.call(string, function (c) {
                    return c.charCodeAt(0) & 0xff;
                });
                this.legacySend(new Uint8Array(bytes).buffer);
            };
        }
        myXHR.send = myXHR.sendAsBinary;
        return myXHR;
    }*/



    function save(){
    	var canvas = document.createElement("canvas");
    	var ctx = canvas.getContext('2d');
    	canvas.width = 640;
    	canvas.height = 864;


    	//Basically copied from manager, draw the superhero on the canvas.
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Loop through all objects and get list of sprites from them to return.
		var toDraw = info.superhero.skeleton.draw()

		for(var i=0; i<toDraw.length; i++) {
			var data = toDraw[i];
			if(data.image) { //If it's an image.
				//Currently no support for spritesheets.
				console.log('draw image');
				ctx.drawImage(data.image, 0, 0, data.image.width, data.image.height, 0, 0, data.width, data.height);
			} else if(data.text) { //If it's text.
				ctx.font = data.font;
				ctx.fillText(data.text, data.x - data.originX, data.y - data.originY);
				//Text draws from the lower left hand corner.
			}
		}

    	//Send imaginary canvas to data.
    	return canvas.toDataURL();
    	//Testing purposes, add it to the screen.
    	//document.getElementsByTagName("body")[0].appendChild(canvas);
    	//console.log('saved');
    }

    function sendEmail(data, address){

	    //Use jquery for Ajax, it's easier and I don't know Ajax very well.
	    $.ajax({
	    	type: "POST",
	    	url: "email.php",
	    	data: {
	    		imgBase64: data,
	    		address: address,
	    	}
	    }).done(function(o){
	    	if(o == 'success') {
	    		_sentMail(true); //If we didn't get an error or did get an error.
	    	} else {
	    		console.log(o);
	    		_sentMail(false);
	    	}
	    });
	}



	
	function _sendMail(address){
		try {
			var data = save();
			sendEmail(data, address);
		} catch(e) {
			//You must be offline.
			console.log(e);
			//console.log("You must be running on a server or set up correctly on a local server to send emails.");
			_sentMail(false);
		}
	}
	toReturn.sendMail = _sendMail;

	function _sentMail(no_error) {
		document.forms["email"].style.visibility = "hidden";
		document.forms["shalom_confirm"].style.visibility = "hidden";
		if(no_error) {
			document.forms["sent"].style.visibility = "visible";
		} else {
			document.forms["sent_error"].style.visibility = "visible";
		}
	}

	base.addEvent('sendEmail', function(_clipBoard){
		toReturn.sendMail(_clipBoard.address);
	}, false);


	var facebook = Sprite(60, 980, 800, 100, "images/dev/alpha.png");
	base.addModule(facebook);
	facebook.addEvent("mousedown", function(_clipBoard){
		document.forms["shalom_confirm"].style.visibility = "visible";
	}, false);
	var email = Sprite(60, 880, 800, 100,  "images/dev/alpha.png");
	base.addModule(email);
	email.addEvent("mousedown", function(_clipBoard){
		document.forms["email"].style.visibility = "visible";
	}, false);




	return toReturn;
}