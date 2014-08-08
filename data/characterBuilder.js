
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
		"head": {
			"male_1": "images/dev/alpha.png",
			"male_2": "images/dev/alpha.png",
			"male_3": "images/dev/alpha.png",
			"female_1": "images/dev/alpha.png",//production/dressup/female/young/head.png",
			"female_2": "images/dev/alpha.png",
			"female_3": "images/dev/alpha.png"
		},
		"hands": {
			"male_1": "images/production/dressup/male/young/hands.png",
			"male_2": "images/production/dressup/male/adult/hands.png",
			"male_3": "images/production/dressup/male/buff/hands.png",
			"female_1": "images/production/dressup/female/young/hands.png",
			"female_2": "images/production/dressup/female/adult/hands.png",
			"female_3": "images/production/dressup/female/buff/hands.png"
		}
		
	},
	//These are what the user can click on (far left of screen)
	"categories" : {

		"head": {
			//URL of selected/unselected sprite.
			"sprite": ["images/production/dressup/icons/categories/Head_selected.png", "images/production/dressup/icons/categories/Head.png"],
			//these are the tabs that are included in each category.
			"tabs": {
				//This name should correspond to the name of the superhero slot it's going to go into.
				"face": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_01_face.png",
					//An option that will be included in the tab.
					"options": {
						//In each tab, we have a list of options that the user can click on.
						"face_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
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
					"sprite": "images/dev/hero/subtabs/subTab_01_hair.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"hair_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},

						"hair_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hair/0-01.png", "images/production/dressup/icons/hair/0-01.png"],
								"sprite": "images/production/dressup/hair/0-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/0-03.png", "images/production/dressup/icons/hair/0-03.png"],
								"sprite": "images/production/dressup/hair/0-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/0-05.png", "images/production/dressup/icons/hair/0-05.png"],
								"sprite": "images/production/dressup/hair/0-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/0-02.png", "images/production/dressup/icons/hair/0-02.png"],
								"sprite": "images/production/dressup/hair/0-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/0-04.png", "images/production/dressup/icons/hair/0-04.png"],
								"sprite": "images/production/dressup/hair/0-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/0-06.png", "images/production/dressup/icons/hair/0-06.png"],
								"sprite": "images/production/dressup/hair/0-06.png"
							},
						}, 

						"hair_02":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/hair/2.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/hair/2.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/hair/2.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/hair/2.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/hair/2.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/hair/2.png"
							},
						}, 

						"hair_03":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/hair/3.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/hair/3.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/hair/3.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/hair/3.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/hair/3.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/hair/3.png"
							},
						}, 
					},
				},

				"mask": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_01_masks.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"mask_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"mask_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/mask.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/mask.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/mask.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/set_01/mask.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/set_01/mask.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/mask.png"
							},
						},

						"mask_02":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/masks/2.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/masks/2.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/masks/2.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/masks/2.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/masks/2.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/masks/2.png"
							},
						}, 

						"mask_03":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/masks/3.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/masks/3.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/masks/3.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/masks/3.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/masks/3.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/masks/3.png"
							},
						}
					},
				},
			},
		},
		"suit": {
			"sprite": ["images/production/dressup/icons/categories/Suit_selected.png", "images/production/dressup/icons/categories/Suit.png"],
			"tabs": {
				"jumpsuit": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_jumpsuits.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"jumpsuit_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"jumpsuit_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/jumpsuit.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/jumpsuit.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/jumpsuit.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/young/set_01/jumpsuit.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/adult/set_01/jumpsuit.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/jumpsuit.png"
							},
						}
					},
				},

				"cape": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_capes.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"cape_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"cape_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/cape.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/cape.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/cape.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/cape.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/cape.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/cape.png"
							},
						}
					},
				},

				"boots": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_boots.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"boots_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
					},
				},
			},
		},
		"shirt": {
			"sprite": ["images/production/dressup/icons/categories/Shirt_selected.png", "images/production/dressup/icons/categories/Shirt.png"],
			"tabs": {
				"shirt": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_shirts.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"shirt_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/shirt.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/shirt.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/shirt.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/shirt.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/shirt.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/shirt.png"
							},
						},

						"shirt_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/0.png", "images/production/dressup/icons/shirts/0.png"],
								"sprite": "images/production/dressup/shirts/02-06.png"
							},
						},
					},
				},

				"jacket": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_jackets.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"jacket_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},

						"jacket_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/0.png", "images/production/dressup/icons/jackets/0.png"],
								"sprite": "images/production/dressup/jackets/0-06.png"
							},
						},
						"jacket_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-01.png", "images/production/dressup/MC-Clothes/jackets/1-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-03.png", "images/production/dressup/MC-Clothes/jackets/1-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-02.png", "images/production/dressup/MC-Clothes/jackets/1-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-04.png", "images/production/dressup/MC-Clothes/jackets/1-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-05.png", "images/production/dressup/MC-Clothes/jackets/1-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/1-06.png", "images/production/dressup/MC-Clothes/jackets/1-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-06.png"
							},
						},
						"jacket_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-01.png", "images/production/dressup/MC-Clothes/jackets/2-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-03.png", "images/production/dressup/MC-Clothes/jackets/2-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-02.png", "images/production/dressup/MC-Clothes/jackets/2-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-04.png", "images/production/dressup/MC-Clothes/jackets/2-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-05.png", "images/production/dressup/MC-Clothes/jackets/2-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jackets/2-06.png", "images/production/dressup/MC-Clothes/jackets/2-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-06.png"
							},
						},
					},
				},

				"logo": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_logos.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"logo_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
					},
				},
			},
		},
		"pants": {
			"sprite": ["images/production/dressup/icons/categories/Pants_selected.png", "images/production/dressup/icons/categories/Pants.png"],
			"tabs": {
				"pants": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_pants.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"pants_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"pants_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/pants.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/pants.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/pants.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/pants.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/pants.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/pants.png"
							},
						}
					},
				},

				"belt": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_belts.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"belt_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"belt_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/belt.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/belt.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/belt.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/belt.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/belt.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/belt.png"
							},
						},
						"belt_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/belts/0.png", "images/production/dressup/icons/belts/0.png"],
								"sprite": "images/production/dressup/belts/0-06.png"
							},
						}
					},
				},

				"pants_accessory": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_pantAccessories.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"pant_accessory_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"pants_accessory_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/pantAccessories.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/pantAccessories.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/pantAccessories.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/pantAccessories.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/pantAccessories.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/pantAccessories.png"
							},
						}
					},
				},
			},
		},
		"accessories": {
			"sprite": ["images/production/dressup/icons/categories/Accessories_selected.png", "images/production/dressup/icons/categories/Accessories.png"],
			"tabs": {
				"arm_guards": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_armGuards.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"armGuards_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"arm_guards_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/armGuards.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/armGuards.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/armGuards.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/armGuards.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/armGuards.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/armGuards.png"
							},
						}
					},
				},

				"shin_guards": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_shinGuards.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"shinGuards_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"shin_guards_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/shinGuards.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/shinGuards.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/shinGuards.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/shinGuards.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/shinGuards.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/shinGuards.png"
							},
						}
					},
				},

				"hoods_and_helmets": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_hoodsAndHelmets.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"hoods_and_helmets_00":{
							"male_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/alpha.png", "images/dev/alpha.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"hoods_and_helmets_01":{
							"male_1": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/young/set_01/hood_top.png"
							},
							"male_2": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/adult/set_01/hood_top.png"
							},
							"male_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/male/buff/set_01/hood_top.png"
							},
							
							"female_1": {
								"option_sprite": ["images/dev/_01.png", "images/dev/_01.png"],
								"sprite": "images/production/dressup/female/young/set_01/hood_top.png"
							},
							"female_2": {
								"option_sprite": ["images/dev/_02.png", "images/dev/_02.png"],
								"sprite": "images/production/dressup/female/adult/set_01/hood_top.png"
							},
							"female_3": {
								"option_sprite": ["images/dev/_04.png", "images/dev/_04.png"],
								"sprite": "images/production/dressup/female/buff/set_01/hood_top.png"
								
							},
						},
						"hoods_and_helmets_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hats/0.png", "images/production/dressup/icons/hats/0.png"],
								"sprite": "images/production/dressup/hats/0-06.png"
							},
						},

						"hoods_and_helmets_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hats/1.png", "images/production/dressup/icons/hats/1.png"],
								"sprite": "images/production/dressup/hats/2-06.png"
							},
						}
					},
				},
			},
		},

	},

};

jsonLoader.onresult();

