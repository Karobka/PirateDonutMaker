"use strict";
/**
 * Page loads - user clicks BEGIN button
 * First question displays.
 * If user selects AYE a pantryItem from that category is added to preferences object.
 * Else next question is displayed.
 * Once all questions are answered button to 'make donut' appears, question disapears.
 * User clicks 'make donut' and the values in the preferences object are retrieved and appnded to page.
 * 
 * Ingredients:
	Frostings
			§ Strawberry
			§ Raspberry
			§ Banana
			§ Chocolate
			§ Maple
			§ Chocolate Maple Swirl
			§ Regular glaze
			§ Medium glaze
			§ Heavy glaze
	Toppings
			§ Sugar Sprinkles
			§ Nuts
			§ Shredded Coconut
			§ Bacon
			§ Pork rinds
			§ Sea Salt Sprinkles
			§ Cherries
			§ Strawberries
			§ Raspberries
	Fillings
			§ Strawberry filling
			§ Raspberry filling
			§ Mixed berry filling
			§ Chocolate Crème
			§ Vanilla Crème
            Strawberry Crème
	
 * 
 */


	/** preferences constructor */
	/**if the user answers yes to a question add something here */
	var userPrefs = {
		fruitfrostings: null,
		smoothfrostings: null,
		glazedfrostings: null,
		crunchytoppings: null,
		saltytoppings: null,
		fruitytoppings: null,
		fruityfillings: null,
		cremefillings: null
	}

$(document).ready(function() {
    
	/**On clicking 'begin' append first question
	 * 
	 * event listener for clicking on AYE or NAY.
	 * 
	 * if AYE add 
	 */



	/** begining button click event listener */
	$(".btn-begin").on('click', function() {
		$(".intro-words").hide();
		$(".prefs-form").show();
	});

	/** form submit listener */
	$(".prefs-form").submit(function(event) {
		event.preventDefault();
		if($("#fruitfrost-aye").prop("checked")) {
			alert("fruit aye was checked");
			userPrefs.fruitfrostings = true;
		}else if ($("#fruitfrost-nay").prop("checked")) {
			alert("they chose no fruity");
			userPrefs.fruitfrostings = false;
		}else {
			alert("blah nothing is checked");
		}
	});

	/** pantry object */
	var pantry = {
		fruitfrostings: ["fruity strawberry frosting", "fresh raspberry frosting", "yellow banana frosting"],
		smoothfrostings: ["rich chocolate frosting", "smooth maple flavored frosting", "a combination of maple and chocolate frosting"],
		glazedfrostings: ["a light glazing", "a medium glazing", "a heavy glaze"],
		crunchytoppings: [],
		saltytoppings: [],
		fruitytoppings: [],
		fruityfillings: [],
		cremefillings: []
	}






	/** The DonutMaker constructor */
	/** take preferences and select from matching pantry category a random ingredient */
	var DonutMaker = function(frosting,toppings,filling,dough,ratsample) {
		this.frosting = frosting;
	}




	/** questions */
    var questions = [
        "Would ye fancy some fruity frosting on top?",
        "Are ye hankerin' for something crunchy sprinkled on top?",
        "Do ye want it with some kind of filling in its belly?",
        "Are ye a scurvy dog who likes yer donuts dense like fog?",
        "Would it be agreeable to ya if I let the bilge rats have a little taste of your creation?"
        //question6 = {text:"How about a " + pantryItem + "fer yer gutt today?"}
    ];



});