//characterSkeleton.js
/*
Author: Nick Buonarota
Email: nickbuonarota@mail.rit.edu
Date Created: 6/2/2014
*/

/*
Summary: Intended to be a holder of sprites or components for a "character" 
in our app. Similar to the Diablo 3 system of character gear. For example, 
your character has a slot for a "hat", a slot for "boots", and so on.
*/

function characterSkeleton(_x, _y, _width, _height){
	//------------------------------VARIABLES-------------------------------------
	var base = Module(_x, _y, _width, _height); //Call base
	var toReturn = base.interface; //Set toReturn via base.
	toReturn.draw = _draw; //Modify public interface.
	
	var _hat;
	var _head;
	var _body;
	var _arms;
	var _legs;
	var _shoes;
	
	var _spriteList = [];
	var _componentList = [];
	
	//---------------------------FUNCTIONS---------------------------------------
	function _draw(){

		toDraw = base.draw();

		//Temp Dev Test
		// Red rectangle
		//--------ctx is not a variable that normally would be available here--------
		//--------Comment this out outside of testing environment-----------------------
		ctx.beginPath();
		ctx.lineWidth="10";
		ctx.strokeStyle="red";
		ctx.rect(toReturn.bounds.x, toReturn.bounds.y, toReturn.bounds.width, toReturn.bounds.height);
		ctx.stroke();
		//------------------End testing environment code--------------------------------
		//------------------------------------------------------------------------------

		return toDraw;
	}	
	
	/*
	function: 	_updateComponent
	parameters:	_componentType: type of component that is passed in. IE: baseball cap is has a _componentType of "hat"
				_component: what the component is. IE: "baseball cap"
	description: This function takes a passed in component and overrides the old component in that slot with the new one.
	returns: N/A
	*/
	function _updateComponent(_componentType, _component)
	{
		/*
		//Danny make something like this work cool and nice.
		for (var i = 0; i < _componentList.length; i++) { 
			if(_componentList[i].type == _componentType)
			{
				_componentList[i] = _component;
			}
		}
		*/
		
		//Idk my bff jill, dev test
		if(_componentType == hat)
		{
			_hat = _component;
		}
	}

	return toReturn;
}