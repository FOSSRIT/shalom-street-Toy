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


	//include the actual tabs here.
	"tabs": [],
	//old
	"Cat": {
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/dev/testDetailedScenarios/detailedScenarioScreenTest_01_CatStuckInTree.png",
		"title": 		"images/dev/alpha.png",
		"summary": 		"images/dev/alpha.png",
		"comic": 		"images/dev/alpha.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	"Fire": {
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/dev/testDetailedScenarios/detailedScenarioScreenTest_02_BuildingOnFire.png",
		"title": 		"images/dev/alpha.png",
		"summary": 		"images/dev/alpha.png",
		"comic": 		"images/dev/alpha.png",
	},
	"Children": {
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/dev/testDetailedScenarios/detailedScenarioScreenTest_03_ChildrenFightingOverToy.png",
		"title": 		"images/dev/alpha.png",
		"summary": 		"images/dev/alpha.png",
		"comic": 		"images/dev/alpha.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	//default template
	"default": {
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-09.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	//Easy
	"team" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-05.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	"bank" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-06.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	"villain" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/background-09.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	//Medium
	"bully" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-01.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	"whale" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-03.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	"volcano" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/background-09.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": [],
			"qualities": ["bravery"]
		}
	},
	//Hard
	"toy" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-02.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": ["water"],
			"qualities": ["bravery"]
		}
	},
	"fire" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/scenariobackgrounds-04.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": ["water"],
			"qualities": ["bravery"]
		}
	},
	"aliens" :{
		"banner": 		"images/production/scenarios/banners/fire.png", 
		"background": 	"images/Backgrounds/background-09.png",
		"title": 		"images/dev/testDetailedScenarios/temp_title.png",
		"summary": 		"images/dev/testDetailedScenarios/temp_summary.png",
		"comic": 		"images/dev/testDetailedScenarios/temp_comic.png",
		"required": {
			"powers": ["water"],
			"qualities": ["bravery"]
		}
	},
	

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
