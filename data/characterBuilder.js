
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

	"defaults" : {
		"background": {
			"male_1": "character_wireframes/Final-Body type wireframes-03.png",
			"female_1": "character_wireframes/Final-Body type wireframes-04.png"
		},
	},
	//These are what the user can click on (far left of screen)
	"categories" : {

		"head": {
			//URL of selected/unselected sprite.
			"sprite": [undefined, undefined],
			//these are the tabs that are included in each category.
			"tabs": {
				//This name should correspond to the name of the superhero slot it's going to go into.
				"face": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//In each tab, we have a list of options that the user can click on.
						"face_1": {
							//Face_1 applies to multiple body types.  Each one is rendered differently.
							"male_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": [undefined, undefined],
								//The url of the image that is loaded onto the character.
								"sprite": undefined
							},
							//Another body type would go here.
							"female_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": [undefined, undefined],
								//The url of the image that is loaded onto the character.
								"sprite": undefined
							},
						},

						"face_2": {
							//Face_1 applies to multiple body types.  Each one is rendered differently.
							"male_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": [undefined, undefined],
								//The url of the image that is loaded onto the character.
								"sprite": undefined
							},
							//Another body type would go here.
							"female_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": [undefined, undefined],
								//The url of the image that is loaded onto the character.
								"sprite": undefined
							},
						},

					},
				},


				"hair": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"mask": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"suit": {
			"sprite": [undefined, undefined],
			"tabs": {
				"jumpsuit": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"cape": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"boots": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"shirt": {
			"sprite": [undefined, undefined],
			"tabs": {
				"shirt": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"jacket": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"logo": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"pants": {
			"sprite": [undefined, undefined],
			"tabs": {
				"pants": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"belt": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"pants_accessory": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"accessories": {
			"sprite": [undefined, undefined],
			"tabs": {
				"arm_guards": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"shin_guards": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"hoods_and_helmets": {
					//URL of banner image for the tab.
					"sprite": undefined,
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},

	},

};

jsonLoader.onresult();

