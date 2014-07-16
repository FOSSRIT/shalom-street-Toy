/*
No arrays.
The artist isn't building the page, they're adding things to the page and positioning them.
They're filling in the blanks.

Try to remove weird syntax whenever possible.
This is their interface for reacting with you, and it encourages communication.
Minimize the amount that's required to learn.
*/



/*
Some reminders:
----------------------------------------------------------------------
Screen resolution: 1920x1080,
How information should look, depending on what's being included  - 
"informationName": ["someText", 20]
----------------------------------------------------------------------
Adding an image: [path_to_image, xPosition, yPosition, width, height]
Adding an animation: ***NOT YET SUPPORTED***
----------------------------------------------------------------------
*/

jsonLoader.result = {
	//Here you should the tabs you want.


	/*
	---------------------------------
	Options/Sprites go here.
	Follow the pattern of-
	----------------------------------
	*/
	"background": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},

	"head": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},


	//Faces
	"face_1": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},
	"face_2": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},
	"face_3": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},

	//hair
	"hair_1": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},
	"hair_2": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},
	"hair_3": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},
	//-------------------------------
	//

	/*Tabs*/

	"face": ["face_1", "face_2", "face_3"],
	"hair": ["hair_1", "hair_2", "hair_3"],
	"mask": [],

	"jumpsuit": [],
	"cape": [],
	"boots": [],

	"shirt":
	"jacket":
	"logo":

	"pants":
	"belt":
	"pants_accessory":

	"arm_guards":
	"shin_guards":
	"hoods_and_helmets":


};

jsonLoader.onresult();


























/*


var data= {


	//HEADS
	//--------------------------------------------------
	"myFirstHead": ["images/test.png", 0, 0, 10, 10],
	"mySecondHead": ["images/test.png", 0, 0, 10, 10],
	"myThirdHead": ["images/test.png", 0, 0, 10, 10],
	"myFourthHead": [undefined],

	//Add additional heads here.
	//--------------------------------------------------


	//All of the character parts.
	"heads": ["myFirstHead", "mySecondHead", "myThirdHead"],
	"hair": [],
	""
}

*/
