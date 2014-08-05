function BodyPart(x, y, width, height){
	
	var base = Module(x, y, width, height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "BodyPart";


	var currentBodyType = "default";

	var sprite = Sprite(x, y, width, height);
	base.addModule(sprite); //Set up the sprite for us to draw.

	var bodyTypes = {}; //We'll have an internal list of what images to use.


	var currentColor = [255, 255, 255];
	toReturn.setColor = function (r, g, b, reset){
		try {
			ColorAdjust.multiplyFilter(r, g, b, sprite, reset);
			currentColor = [r, g, b];
		} catch(e) {
			//You must be offline.
			console.log(e.message);
		}
	}

	//Change the bodytype.
	toReturn.setBodyType = function(bodyType){
		if(bodyTypes[bodyType]) {

			/*if(sprite){
				var tempColor = currentColor; toReturn.setColor(255, 255, 255); //Store the color we're using, then set the color of the old image back to white.
			}*/
			sprite.setImage(bodyTypes[bodyType], true, 0, 0, 0, 0, function() {
				toReturn.setColor(currentColor[0], currentColor[1], currentColor[2], false); //Set the new image's color to match what it used to be set as.
			});
		}
		else {
			console.log("body type: " + bodyType + " does not exist.");
		}
	}

	toReturn.addBodyType = function(bodyType, img){
		bodyTypes[bodyType] = img;
	}

	toReturn.addModule = function(){
		alert("Fatal Error: Attempt to add submodule to BodyPart.");
	}


	return toReturn;
}