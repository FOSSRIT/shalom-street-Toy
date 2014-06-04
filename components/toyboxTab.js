function ToyBoxTab(_x, _y, _width, _height, _connectedSlot) {
	var base = Module(_x, _y, _width, _height);
	var toReturn = base.interface;
	var connectedSlot = _connectedSlot;
	toReturn.select = _select;
	toReturn.deselect = _deselect;
	toReturn.addOption = _addOption;
	var options = [];
	toReturn.selected = false;

	function _select(){
		for(var m in options) {
			m.visible = true;
		}
		toReturn.selected = true;

		alert('selected');
	}

	function _deselect(){
		for(var m in options) {
			m.visible = false;
		}
		toReturn.selected = false;
	}

	//Slot is optional.
	function _addOption(option, image, slot){
		base.addModule(option);
		options.push(option);

		//Add in the proper event.
		option.addEvent("mousedown", function(_clipBoard){
			_clipBoard.ToFire = ["swapComponent"];
			_clipBoard.ComponentSwap = {"image":image, "slot":slot || _connectedSlot};
		}, false);
	}


	return toReturn;

}