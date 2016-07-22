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
		fruitfrostings: [" fruity strawberry frosting", " fresh raspberry frosting", " yellow banana frosting"],
		smoothfrostings: [" rich chocolate frosting", " smooth maple flavored frosting", " a combination of maple and chocolate frosting"],
		glazedfrostings: [" a light glazing", " a medium glazing", " a heavy glaze"],
		crunchytoppings: [" a sprinkling of sugar on top", " a heaping of nuts on the top", " a pile of shredded coconut on top"],
		saltytoppings: [" a  pile of crumbling bacon on the top", " a pile of pork rinds on top", " a sprinkling of sea salt to top it off"],
		fruitytoppings: [" topped with a single cherry", " topped with a juicy strawberry", " topped with three juicy raspberries"],
		fruityfillings: [" filled to bursting with a strawberry filling", " filled with the most delicious raspberry filling", " filled to the brim with a banana filling"],
		cremefillings: [" and with a belly full of rich chocolate crème", " and with a belly full of smooth vanilla crème", " and with the most delicious strawberry crème in the center"]
	}

	/** preferences object- keeps track of user radio button choices  */
	var userPrefs = {
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
		//create new empty userPrefs object
		userPrefs = {};
		//create new empty donut object
		personalizedPirateDonut = [];
		//check only for checked radio buttons and add them to prefs
		if($("#fruitfrost-aye").prop("checked")) {
			userPrefs.fruitfrostings = true;
		}
		if ($("#smoothfrost-aye").prop("checked")) {
			userPrefs.smoothfrostings = true;
		}
		if ($("#glazefrost-aye").prop("checked")) {
			userPrefs.glazedfrostings = true;
		}
		if ($("#crunchytop-aye").prop("checked")) {
			userPrefs.crunchytoppings = true;
		}
		if ($("#saltytop-aye").prop("checked")) {
			userPrefs.saltytoppings = true;
		}
		if ($("#fruittop-aye").prop("checked")) {
			userPrefs.fruitytoppings = true;
		}
		if ($("#fruitfilling-aye").prop("checked")) {
			userPrefs.fruityfillings = true;
		}
		if ($("#cremefill-aye").prop("checked")) {
			userPrefs.cremefillings = true;
		}
		// create donut
		personalizingPirateDonut();
		//reveal final donut
		$(".prefs-form").hide();
		$(".donut-display").text(
			"Avast!  Here be yer authentic pirate donut with " + personalizedPirateDonut + "."
		)
	});
	//get ingredients according to data in prefs
	function personalizingPirateDonut() {
		
		for (var key in userPrefs){
			var random = Math.floor(Math.random() * pantry [key].length -1) + 1;
			personalizedPirateDonut.push(pantry[key][random]);
		}
		return personalizedPirateDonut;
	};




});