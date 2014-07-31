function BodyPart(x, y, width, height){
	
	var base = Module(x, y, width, height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "BodyPart";


	var currentBodyType = "default";

	var sprite = Sprite(x, y, width, height);
	base.addModule(sprite); //Set up the sprite for us to draw.

	var bodyTypes = {}; //We'll have an internal list of what images to use.


	var currentColor = [1, 1, 1];
	toReturn.setColor = function (r, g, b){
		try {
			ColorAdjust.multiplyFilter(r, g, b, sprite);
			currentColor = [r, g, b];
		} catch(e) {
			//You must be offline.
			//Just fail gracefully.
			console.log(e.message);
		}
	}

	//Change the bodytype.
	toReturn.setBodyType = function(bodyType){
		if(bodyTypes[bodyType]) {
			sprite.setImage(bodyTypes[bodyType], true);
			//toReturn.setColor(currentColor[0], currentColor[1], currentColor[2]);
			toReturn.setColor(Math.random()*255, Math.random()*255, Math.random()*255);
			//Trigger a redraw as soon as the color is set.

			//ColorAdjust.multiplyFilter(255, 0, 0, sprite);
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