
//With a dom element, you don't pass in a position.
//The bounds also don't really matter.
function DomWrapper(_domElement){

	//Some init.
	if(_domElement != undefined){
		var _dom = _domElement;
	} else {
		alert("attempt to create dom wrapper around undefined.  Fatal error.");
	}


	//Call base.
	var base = Module(_domElement.style.left || 0, 
		_domElement.style.top || 0, 
		parseInt(_domElement.style.width || 0, 10), 
		parseInt(_domElement.style.height || 0, 10));

	var toReturn = base.interface;
	toReturn.type = "DomWrapper";
	//toReturn.interface = true;
	toReturn.loaded = true;
	base.setRemove(function(){
		_dom.style.visibility="hidden";
	});


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
			_dom.style.visibility="visible";
		} else {
			_dom.style.visibility="hidden";
		}

		return [{
			"dom":_dom,
			"x":toReturn.bounds.x,
			"y":toReturn.bounds.y, 
			"width":toReturn.bounds.width, 
			"height":toReturn.bounds.height,
		}];
	}

	function _getDom(){
		return _dom;
	}

	//-------------Public interfaces-------------

	toReturn.setDom = _setDom;
	toReturn.draw = _draw;
	toReturn.getDom = _getDom;
	toReturn.addModule = function(){ alert("attempt to add a sub-module to a domWrapper.  Fatal Error."); };
	

	return toReturn;
}


//Block events.
//state -->