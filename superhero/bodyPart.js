function BodyPart(x, y, width, height){
	
	var base = Module(x, y, width, height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.type = "BodyPart";


	var currentBodyType = "default";

	var sprite = Sprite(x, y, width, height);
	base.addModule(sprite); //Set up the sprite for us to draw.

	var bodyTypes = {}; //We'll have an internal list of what images to use.


	//Change the bodytype.
	toReturn.setBodyType = function(bodyType){
		if(bodyTypes[bodyType]) {
			sprite.setImage(bodyTypes[bodyType]);
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