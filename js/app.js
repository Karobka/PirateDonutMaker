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

	/** preferences object- keeps track of user choices - null changes to true or false */
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

var	personalizedPirateDonut = [];

$(document).ready(function() {

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
			alert("they chose no fruit");
			userPrefs.fruitfrostings = false;
		}else {
			alert("blah nothing is checked");
		}
		// create donut
		personalizingPirateDonut();
		//reveal final donut
		alert(personalizedPirateDonut);
	});

	function personalizingPirateDonut() {
		
		for (var key in userPrefs){
			var random = Math.floor(Math.random() * pantry [key].length -1) + 1;
			personalizedPirateDonut.push(pantry[key][random]);
		}
		return personalizedPirateDonut;
	};










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