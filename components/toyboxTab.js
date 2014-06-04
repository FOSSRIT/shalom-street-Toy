function ToyBoxTab(_x, _y, _width, _height, _connectedSlot) {
	var base = Module(_x, _y, _width, _height);
	var toReturn = base.interface;
	var connectedSlot = _connectedSlot;
	Touch.Collisions(base);
	toReturn.select = _select;
	toReturn.deselect = _deselect;
	toReturn.addOption = _addOption;
	var options = [];
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
			_clipBoard.ToFire = ["swapComponent"];
			_clipBoard.ComponentSwap = {"image":img, "slot":slot || connectedSlot};
			//alert(img);
		}, false);
	}


	return toReturn;

}