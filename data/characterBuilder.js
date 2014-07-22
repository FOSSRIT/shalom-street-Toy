
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

// this bug
//

jsonLoader.result = {

	"defaults" : {
		"background": {
			"male_1": "images/production/character_wireframes/child_male.png",
			"male_2": "images/production/character_wireframes/adult_male.png",
			"male_3": "images/production/character_wireframes/buff_male.png",
			"female_1": "images/production/character_wireframes/child_female.png",
			"female_2": "images/production/character_wireframes/adult_female.png",
			"female_3": "images/production/character_wireframes/buff_female.png"
		}, 
	},
	//These are what the user can click on (far left of screen)
	"categories" : {

		"head": {
			//URL of selected/unselected sprite.
			"sprite": ["images/dev/hero/headTab_highlight.png", "images/dev/hero/headTab.png"],
			//these are the tabs that are included in each category.
			"tabs": {
				//This name should correspond to the name of the superhero slot it's going to go into.
				"face": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/01_head/03_face/faceTab.png",
					//An option that will be included in the tab.
					"options": {
						//In each tab, we have a list of options that the user can click on.
						"face_1": {
							//Face_1 applies to multiple body types.  Each one is rendered differently.
							"male_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								//The url of the image that is loaded onto the character.
								"sprite": "images/dev/alpha.png"
							},
							//Another body type would go here.
							"male_2": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": ["images/dev/hero/01_head/03_face/face_01_happy_icon.png", "images/dev/hero/01_head/03_face/face_01_happy_icon.png"],
								//The url of the image that is loaded onto the character.
								"sprite": "images/dev/hero/01_head/03_face/face_01_happy.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},

						"face_2": {
							"male_1": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/dev/alpha.png"
							},
							
						},
						
						"face_3": {
							"male_1": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_03.png", "images/dev/_03.png"],
								"sprite": "images/dev/alpha.png"
							},
							
						},
						
						"face_4": {
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							
						},

					},
				},


				"hair": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/01_head/02_hair/hairTab.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"mask": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_01_masks.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"mask_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/set1/mask.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/dev/alpha.png"
							},
						}
					},
				},
			},
		},
		"suit": {
			"sprite": ["images/dev/hero/suitTab_highlight.png", "images/dev/hero/suitTab.png"],
			"tabs": {
				"jumpsuit": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_jumpsuits.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"cape": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_capes.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"boots": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_boots.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"shirt": {
			"sprite": ["images/dev/hero/shirtTab_highlight.png", "images/dev/hero/shirtTab.png"],
			"tabs": {
				"shirt": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_shirts.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"jacket": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_jackets.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"logo": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_logos.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"pants": {
			"sprite": ["images/dev/hero/pantsTab_highlight.png", "images/dev/hero/pantsTab.png"],
			"tabs": {
				"pants": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_pants.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"belt": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_belts.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"pants_accessory": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_pantAccessories.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},
			},
		},
		"accessories": {
			"sprite": ["images/dev/hero/accessoriesTab_highlight.png", "images/dev/hero/accessoriesTab.png"],
			"tabs": {
				"arm_guards": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_armGuards.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"shin_guards": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_shinGuards.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
					},
				},

				"hoods_and_helmets": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_hoodsAndHelmets.png",
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

