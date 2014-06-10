
//With a dom element, you don't pass in a position.
//The bounds also don't really matter.
function domWrapper(_domElement){
	var base = Module(0, 0, 0, 0);
	var toReturn = base.interface;
	toReturn.loaded = false;

	//-------------Public interfaces-------------
	//Throw an error if you do something stupid.
	toReturn.domElement = _domElement;

}


//Block events.
//state -->