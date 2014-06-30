//Grid.js

/*
--Handles putting objects into predictable grids
--with even spacing.
*/

function Grid(_x, _y, _rows, _columns, _itemWidth, _itemHeight, _margin) {

	//Calculate width and height.
	var width = _columns * (_margin + _itemWidth);
	var height = _rows * (_margin + _itemHeight)
	var itemWidth = _itemWidth;

	//Set up base.
	var base = Module(_x, _y, width, height);
	var toReturn = base.interface;

	//Initialize.
	var _grid = [];
	for(var i = 0; i < _columns; i++) {
		_grid[i] = [];
		for (var j = 0; j < _rows; j++){
			_grid[i][j] = undefined; //Set up the array.
			//Internally, this is what we're going to use to manage stuff.
		}
	}


	/*

	*/
	toReturn.setSpace = function(toSet, column, row){
		//If it's already there, remove the module.
		if(_grid[column][row] !== undefined) {
			base.removeModule(_grid[clolumn][row]);
		}

		_grid[column][row] = toSet;
		if(toSet !== undefined) {
			base.addModule(toSet);
			//Set it to correct position and width.
			toSet.bounds.width = 
		}
	}


	return toReturn;
}