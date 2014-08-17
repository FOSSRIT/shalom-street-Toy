

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
			"male_1": "images/production/dressup/MC-Clothes/faces and heads/4-01.png",
			"male_2": "images/production/dressup/MC-Clothes/faces and heads/4-03.png",
			"male_3": "images/production/dressup/MC-Clothes/faces and heads/4-02.png",
			//"female_1": "images/production/dressup/MC-Clothes/faces and heads/4-04.png",
			"female_1": "images/dev/alpha.png",
			"female_2": "images/production/dressup/MC-Clothes/faces and heads/4-05.png",
			"female_3": "images/production/dressup/MC-Clothes/faces and heads/4-06.png"
		},
		"hands": {
			"male_1": "images/production/dressup/male/young/hands.png",
			"male_2": "images/production/dressup/male/adult/hands.png",
			"male_3": "images/production/dressup/male/buff/hands.png",
			"female_1": "images/production/dressup/female/young/hands.png",
			"female_2": "images/production/dressup/female/adult/hands.png",
			"female_3": "images/production/dressup/female/buff/hands.png"
		},
		"face": {
			"male_1": "images/production/dressup/MC-Clothes/faces and heads/1-01.png",
			"male_2": "images/production/dressup/MC-Clothes/faces and heads/1-03.png",
			"male_3": "images/production/dressup/MC-Clothes/faces and heads/1-02.png",
			"female_1": "images/production/dressup/MC-Clothes/faces and heads/1-04.png",
			"female_2": "images/production/dressup/MC-Clothes/faces and heads/1-05.png",
			"female_3": "images/production/dressup/MC-Clothes/faces and heads/1-06.png"
		},
		"pants": {
			"male_1": "images/production/dressup/male/young/set_01/pants.png",
			"male_2":  "images/production/dressup/male/adult/set_01/pants.png",
			"male_3": "images/production/dressup/male/buff/set_01/pants.png",
			"female_1": "images/production/dressup/female/young/set_01/pants.png",
			"female_2": "images/production/dressup/female/adult/set_01/pants.png",
			"female_3": "images/production/dressup/female/buff/set_01/pants.png"
		},
		"shirt": {
			"male_1": "images/production/dressup/MC-Clothes/shirts/3-01.png",
			"male_2": "images/production/dressup/MC-Clothes/shirts/3-03.png",
			"male_3": "images/production/dressup/MC-Clothes/shirts/3-02.png",
			"female_1": "images/production/dressup/MC-Clothes/shirts/1-04.png",
			"female_2": "images/production/dressup/MC-Clothes/shirts/1-05.png",
			"female_3": "images/production/dressup/MC-Clothes/shirts/1-06.png"
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
						"face_1": {
							//Face_1 applies to multiple body types.  Each one is rendered differently.
							"male_1": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								//The url of the image that is loaded onto the character.
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-01.png"
							},
							//Another body type would go here.
							"male_2": {
								//The url of the selected/unselected image that you click on to choose this customization for your character.
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								//The url of the image that is loaded onto the character.
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/faces/0_m.png", "images/production/dressup/icons/faces/0_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/1-06.png"
							},
						},

						"face_2": {
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/faces/1_m.png", "images/production/dressup/icons/faces/1_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/2-06.png"
							},
							
						},
						
						"face_3": {
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/faces/2_m.png", "images/production/dressup/icons/faces/2_m.png"],
								"sprite": "images/production/dressup/MC-Clothes/faces and heads/3-06.png"
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
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
								//"option_sprite": ["images/production/dressup/icons/hair/1-01.png", "images/production/dressup/icons/hair/1-01.png"],
								"option_sprite": ["images/production/dressup/icons/hair/2-01.png", "images/production/dressup/icons/hair/2-01.png"],
								"sprite": "images/production/dressup/hair/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/2-01.png", "images/production/dressup/icons/hair/2-01.png"],
								"sprite": "images/production/dressup/hair/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/2-01.png", "images/production/dressup/icons/hair/2-01.png"],
								"sprite": "images/production/dressup/hair/1-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/2-02.png", "images/production/dressup/icons/hair/2-02.png"],
								"sprite": "images/production/dressup/hair/1-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/2-02.png", "images/production/dressup/icons/hair/2-02.png"],
								"sprite": "images/production/dressup/hair/1-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/2-02.png", "images/production/dressup/icons/hair/2-02.png"],
								"sprite": "images/production/dressup/hair/1-06.png"
							},
						}, 

						"hair_03":{
							"male_1": {
								//"option_sprite": ["images/production/dressup/icons/hair/3-01.png", "images/production/dressup/icons/hair/3-01.png"],
								"option_sprite": ["images/production/dressup/icons/hair/1-01.png", "images/production/dressup/icons/hair/1-01.png"],
								"sprite": "images/production/dressup/hair/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/1-01.png", "images/production/dressup/icons/hair/1-01.png"],
								"sprite": "images/production/dressup/hair/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/1-01.png", "images/production/dressup/icons/hair/1-01.png"],
								"sprite": "images/production/dressup/hair/2-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/1-02.png", "images/production/dressup/icons/hair/1-02.png"],
								"sprite": "images/production/dressup/hair/2-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/1-02.png", "images/production/dressup/icons/hair/1-02.png"],
								"sprite": "images/production/dressup/hair/2-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/1-02.png", "images/production/dressup/icons/hair/1-02.png"],
								"sprite": "images/production/dressup/hair/2-06.png"
							},
						}, 
						
						"hair_04":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hair/3-01.png", "images/production/dressup/icons/hair/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/3-01.png", "images/production/dressup/icons/hair/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/3-01.png", "images/production/dressup/icons/hair/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-03.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/1-06.png"
							},
						}, 
						"hair_05":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hair/4-01.png", "images/production/dressup/icons/hair/4-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/4-01.png", "images/production/dressup/icons/hair/4-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/4-01.png", "images/production/dressup/icons/hair/4-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/3-02.png", "images/production/dressup/icons/hair/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/3-02.png", "images/production/dressup/icons/hair/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/3-02.png", "images/production/dressup/icons/hair/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/2-06.png"
							},
						}, 
						/*"hair_06":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/hair/5-01.png", "images/production/dressup/icons/hair/5-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/hair/5-01.png", "images/production/dressup/icons/hair/5-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/hair/5-01.png", "images/production/dressup/icons/hair/5-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/hair/5-02.png", "images/production/dressup/icons/hair/5-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/hair/3-06.png"
							},
						}, */
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"mask_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/masks/0.png", "images/production/dressup/icons/masks/0.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-06.png"
							},
						},

						"mask_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/masks/1.png", "images/production/dressup/icons/masks/1.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-06.png"
							},
						}, 

						"mask_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/masks/2.png", "images/production/dressup/icons/masks/2.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-06.png"
							},
						},
						
						"mask_04":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/masks/3.png", "images/production/dressup/icons/masks/3.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/1-06.png"
							},
						},
						/*
						"mask_05":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-01.png", "images/production/dressup/MC-Clothes/masks/2-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-03.png", "images/production/dressup/MC-Clothes/masks/2-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-02.png", "images/production/dressup/MC-Clothes/masks/2-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-04.png", "images/production/dressup/MC-Clothes/masks/2-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-05.png", "images/production/dressup/MC-Clothes/masks/2-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/2-06.png", "images/production/dressup/MC-Clothes/masks/2-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/2-06.png"
							},
						},
						"mask_06":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-01.png", "images/production/dressup/MC-Clothes/masks/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-03.png", "images/production/dressup/MC-Clothes/masks/3-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-02.png", "images/production/dressup/MC-Clothes/masks/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-04.png", "images/production/dressup/MC-Clothes/masks/3-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-05.png", "images/production/dressup/MC-Clothes/masks/3-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/masks/3-06.png", "images/production/dressup/MC-Clothes/masks/3-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/masks/3-06.png"
							},
						},*/
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"jumpsuit_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/suits/0-1.png", "images/production/dressup/icons/suits/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/suits/0-1.png", "images/production/dressup/icons/suits/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/suits/0-1.png", "images/production/dressup/icons/suits/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/suits/0-2.png", "images/production/dressup/icons/suits/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/suits/0-2.png", "images/production/dressup/icons/suits/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-06.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/suits/0-2.png", "images/production/dressup/icons/suits/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-05.png"
							},
						},
						"jumpsuit_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/suits/1-1.png", "images/production/dressup/icons/suits/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/suits/1-1.png", "images/production/dressup/icons/suits/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/suits/1-1.png", "images/production/dressup/icons/suits/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/suits/1-2.png", "images/production/dressup/icons/suits/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/suits/1-2.png", "images/production/dressup/icons/suits/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/suits/1-2.png", "images/production/dressup/icons/suits/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/2-06.png"
							},
						},
						"jumpsuit_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/suits/2-1.png", "images/production/dressup/icons/suits/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/suits/2-1.png", "images/production/dressup/icons/suits/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/suits/2-1.png", "images/production/dressup/icons/suits/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/suits/2-2.png", "images/production/dressup/icons/suits/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/suits/2-2.png", "images/production/dressup/icons/suits/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/suits/2-2.png", "images/production/dressup/icons/suits/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-06.png"
							},
						},
						/*
						"jumpsuit_04":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-01.png", "images/production/dressup/MC-Clothes/jumpsuit/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-03.png", "images/production/dressup/MC-Clothes/jumpsuit/3-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-02.png", "images/production/dressup/MC-Clothes/jumpsuit/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-04.png", "images/production/dressup/MC-Clothes/jumpsuit/3-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-05.png", "images/production/dressup/MC-Clothes/jumpsuit/3-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/jumpsuit/3-06.png", "images/production/dressup/MC-Clothes/jumpsuit/3-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/jumpsuit/3-06.png"
							},
						},*/
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"cape_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-05.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-02.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-04.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/capes/1.png", "images/production/dressup/icons/capes/1.png"],
								"sprite": "images/production/dressup/capes/0-06.png"
							},
						},
					},
				},

				/*"boots": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_02_boots.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"boots_00":{
							"male_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
					},
				},*/
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
								"option_sprite": ["images/production/dressup/icons/shirts/1-1.png", "images/production/dressup/icons/shirts/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-1.png", "images/production/dressup/icons/shirts/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-3.png", "images/production/dressup/icons/shirts/1-3.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/1-06.png"
							},
						},

						/*"shirt_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-1.png", "images/production/dressup/icons/shirts/1-1.png"],
								"sprite": "images/production/dressup/shirts/02-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-1.png", "images/production/dressup/icons/shirts/1-1.png"],
								"sprite": "images/production/dressup/shirts/02-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-3.png", "images/production/dressup/icons/shirts/1-3.png"],
								"sprite": "images/production/dressup/shirts/02-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/shirts/02-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/shirts/02-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/1-2.png", "images/production/dressup/icons/shirts/1-2.png"],
								"sprite": "images/production/dressup/shirts/02-06.png"
							},
						},*/
						
						"shirt_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-1.png", "images/production/dressup/icons/shirts/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/5-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-1.png", "images/production/dressup/icons/shirts/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/5-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-1.png", "images/production/dressup/icons/shirts/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/5-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-2.png", "images/production/dressup/icons/shirts/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-2.png", "images/production/dressup/icons/shirts/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/shirts/2-2.png", "images/production/dressup/icons/shirts/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/2-06.png"
							},
						},
						/*"shirt_05":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-01.png", "images/production/dressup/MC-Clothes/shirts/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-03.png", "images/production/dressup/MC-Clothes/shirts/3-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-02.png", "images/production/dressup/MC-Clothes/shirts/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-04.png", "images/production/dressup/MC-Clothes/shirts/3-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-05.png", "images/production/dressup/MC-Clothes/shirts/3-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/shirts/3-06.png", "images/production/dressup/MC-Clothes/shirts/3-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/shirts/3-06.png"
							},
						},*/
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},

						"jacket_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-1.png", "images/production/dressup/icons/jackets/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-1.png", "images/production/dressup/icons/jackets/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-1.png", "images/production/dressup/icons/jackets/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-2.png", "images/production/dressup/icons/jackets/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-2.png", "images/production/dressup/icons/jackets/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/0-2.png", "images/production/dressup/icons/jackets/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/1-06.png"
							},
						},
						"jacket_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-1.png", "images/production/dressup/icons/jackets/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-1.png", "images/production/dressup/icons/jackets/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-1.png", "images/production/dressup/icons/jackets/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-2.png", "images/production/dressup/icons/jackets/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-2.png", "images/production/dressup/icons/jackets/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/1-2.png", "images/production/dressup/icons/jackets/1-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-06.png"
							},
						},
						"jacket_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-1.png", "images/production/dressup/icons/jackets/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-1.png", "images/production/dressup/icons/jackets/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-1.png", "images/production/dressup/icons/jackets/2-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-2.png", "images/production/dressup/icons/jackets/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-2.png", "images/production/dressup/icons/jackets/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/jackets/2-2.png", "images/production/dressup/icons/jackets/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/jackets/3-06.png"
							},
						},
					},
				},

				/*"logo": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_03_logos.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"logo_00":{
							"male_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
					},
				},*/
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
						/*"pants_01":{
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
						},*/
						"pants_02":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/pants/1-1.png", "images/production/dressup/icons/pants/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/pants/1-1.png", "images/production/dressup/icons/pants/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/pants/1-1.png", "images/production/dressup/icons/pants/1-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/pants/0-2.png", "images/production/dressup/icons/pants/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/pants/0-2.png", "images/production/dressup/icons/pants/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/pants/0-2.png", "images/production/dressup/icons/pants/0-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-06.png"
							},
						},
						"pants_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/pants/0-1.png", "images/production/dressup/icons/pants/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/2-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/pants/0-1.png", "images/production/dressup/icons/pants/0-1.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/2-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/pants/0-3.png", "images/production/dressup/icons/pants/0-3.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/2-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/pants/2-2.png", "images/production/dressup/icons/pants/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/pants/2-2.png", "images/production/dressup/icons/pants/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/pants/2-2.png", "images/production/dressup/icons/pants/2-2.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/1-06.png"
							},
						},
						/*"pants_04":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-01.png", "images/production/dressup/MC-Clothes/pants/3-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-03.png", "images/production/dressup/MC-Clothes/pants/3-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-02.png", "images/production/dressup/MC-Clothes/pants/3-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-04.png", "images/production/dressup/MC-Clothes/pants/3-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-05.png", "images/production/dressup/MC-Clothes/pants/3-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/pants/3-06.png", "images/production/dressup/MC-Clothes/pants/3-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/pants/3-06.png"
							},
						},*/
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						"belt_01":{
							"male_1": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
								"sprite": "images/production/dressup/male/young/set_01/belt.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
								"sprite": "images/production/dressup/male/adult/set_01/belt.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
								"sprite": "images/production/dressup/male/buff/set_01/belt.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
								"sprite": "images/production/dressup/female/young/set_01/belt.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
								"sprite": "images/production/dressup/female/adult/set_01/belt.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/icons/belts/1.png", "images/production/dressup/icons/belts/1.png"],
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
						},
						/*"belt_03":{
							"male_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-01.png", "images/production/dressup/MC-Clothes/belts/1-01.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-01.png"
							},
							"male_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-03.png", "images/production/dressup/MC-Clothes/belts/1-03.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-03.png"
							},
							"male_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-02.png", "images/production/dressup/MC-Clothes/belts/1-02.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-02.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-04.png", "images/production/dressup/MC-Clothes/belts/1-04.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-04.png"
							},
							"female_2": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-05.png", "images/production/dressup/MC-Clothes/belts/1-05.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-05.png"
							},
							"female_3": {
								"option_sprite": ["images/production/dressup/MC-Clothes/belts/1-06.png", "images/production/dressup/MC-Clothes/belts/1-06.png"],
								"sprite": "images/production/dressup/MC-Clothes/belts/1-06.png"
							},
						},*/
					},
				},

				/*"pants_accessory": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_04_pantAccessories.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"pant_accessory_00":{
							"male_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
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
				},*/
			},
		},
		"accessories": {
			"sprite": ["images/production/dressup/icons/categories/Accessories_selected.png", "images/production/dressup/icons/categories/Accessories.png"],
			"tabs": {
				/*"arm_guards": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_armGuards.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"armGuards_00":{
							"male_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
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
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
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
				},*/

				"hoods_and_helmets": {
					//URL of banner image for the tab.
					"sprite": "images/dev/hero/subtabs/subTab_05_hoodsAndHelmets.png",
					//An option that will be included in the tab.
					"options": {
						//Add in options here.
						"hoods_and_helmets_00":{
							"male_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"male_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							
							"female_1": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_2": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
							"female_3": {
								"option_sprite": ["images/production/Deleteclothingicon-01.png", "images/production/Deleteclothingicon-01.png"],
								"sprite": "images/dev/alpha.png"
							},
						},
						/*"hoods_and_helmets_01":{
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
						},*/
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

