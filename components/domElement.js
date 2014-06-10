
//With a dom element, you don't pass in a position.
//The bounds also don't really matter.
function domWrapper(_domElement){
	var base = Module(0, 0, 0, 0);
	var toReturn = base.interface;
	toReturn.loaded = false;

	//Some init.

	if(_domElement != undefined){
		var _dom = _domElement;
	} else {
		alert("attempt to create dom wrapper around undefined.  Fatal error.");
	}

	//-------------DOM controls------------------

	function _setDom(_domElement){
		if(_domElement != undefined){
		 	_dom = _domElement
		} else {
			alert("attempt to create dom wrapper around undefined.  Fatal error.");
		}
	}


	function _draw(){
		if(toReturn.visible){
			_domElement.style.visibility="visible";
		} else {
			_domElement.style.visibility="hidden";
		}
	}

	//-------------Public interfaces-------------


}


//Block events.
//state -->