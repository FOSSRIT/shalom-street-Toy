function ToyBoxTab(_x, _y, _width, _height, _connectedSlot) {
	var base = Module(_x, _y, _width, _height);
	var toReturn = base.interface;
	var connectedSlot = _connectedSlot;
	Touch.Collisions(base);
	toReturn.select = _select;
	toReturn.deselect = _deselect;
	toReturn.addOption = _addOption;
	toReturn.rotate = _rotate;
	var options = [];

	//What index we're currently on, and how many to display.
	var startingIndex = 0;
	var display = 3;


	//
	toReturn.type = "ToyBoxTab"
	toReturn.selected = false;
	toReturn.visible = false; //By default.

	
	function _select(){
		toReturn.visible = true;
		toReturn.selected = true;
	}

	function _deselect(){
		toReturn.visible = false;
		toReturn.selected = false;
	}

	//Slot is optional.
	function _addOption(option, img, slot){
		base.addModule(option);
		options.push(option);

		//Add in the proper event.
		option.addEvent("mousedown", function(_clipBoard){
			console.log("begin");
			_clipBoard.ToFire = ["swapComponent"];
			//if(_clipBoard.ToFire) { _clipBoard.ToFire.push("swapComponent"); } else { _clipBoard.ToFire = ["swapComponent"]; }
			_clipBoard.ComponentSwap = {"image":img, "slot":slot || connectedSlot};
			console.log(_clipBoard.ToFire);
			console.log("end");
			//alert(img);
		}, false);


		//Update everything's visibility.
		for(i=0; i<options.length; i++){
			options[i].visible = false;
		}//Rotate.
		for(i=startingIndex; i<startingIndex+display; i++){
			options[i.mod(options.length)].visible = true;
		}//Stuff.
	}

	Number.prototype.mod = function(n) {
		return ((this%n)+n)%n;
	}

	//Used to make things rotate with the carasoules.
	function _rotate(positive, width){
		//Make everything invisible.
		for(i=0; i<options.length; i++){
			options[i].visible = false;
			//Rotate everything backwards or forwards.
			options[i].bounds.x += positive*width;
		}
		//For everything that's now out of place, loop it around.
		if(positive > 0) {
			options[(startingIndex-positive).mod(options.length)].bounds.x -= positive*width*options.length;
		} else if(positive < 0){
			options[startingIndex].bounds.x += width*options.length-1;
		}

		//Make the invisible visible again.
		startingIndex = (startingIndex - positive).mod(options.length);
		for(i=startingIndex; i<startingIndex+display; i++){
			options[i.mod(options.length)].visible = true;
		}
	}


	return toReturn;

}