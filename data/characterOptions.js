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

	//Required.
	"background": {
		"male_1": undefined,
		"male_2": undefined,
		"female_1": undefined,
		"female_2": undefined,
	},

	//Required.
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
	//You can name these whatever you want as long as they match up below.
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

	/*
	-------------------------------------
	Tabs
	-------------------------------------
	*/

	//What options do you want in the face tab? Link from above.
	"face": ["face_1", "face_2", "face_3"],
	"hair": ["hair_1", "hair_2", "hair_3"],
	"mask": [],

	"jumpsuit": [],
	"cape": [],
	"boots": [],

	"shirt": [],
	"jacket": [],
	"logo": [],

	"pants_base": [],
	"belt": [],
	"pants_accessory": [],

	"arm_guards": [],
	"shin_guards": [],
	"hoods_and_helmets": [],
	//-----------------------------------------
	//

	/*
	-------------------------------------------
	Categories
		- tabs (links to what tabs to include in this category)
		- sprite (what the image URL is for the graphic for the category)
	-------------------------------------------
	*/
	
	"head": {
		"tabs": ["face", "hair", "mask"],
		"sprite": undefined
	},
	"suit": {
		"tabs": ["jumpsuit", "cape", "boots"]
		"sprite": undefined
	},
	"shirt": {
		"tabs": ["shirt", "jacket", "logo"],
		"sprite": undefined
	},
	"pants": {
		"tabs": ["pants_base", "belt", "pants_accessory"],
		"sprite": undefined
	},
	"accessories": {
		"tabs": ["arm_guards", "shin_guards", "hoods_and_helmets"],
		"sprite": undefined
	},

	//-----------------------------------------
	//

	/*
	-------------------------------------------
	Category repo.
	These are what the user will actually select.
	-------------------------------------------
	*/
	//required.
	"categories": ["head", "suit", "shirt", "pants"]

	//----------------------------------------
	//


};

jsonLoader.onresult();

