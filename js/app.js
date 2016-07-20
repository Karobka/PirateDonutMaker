"use strict";
/**
 * Page loads - user clicks BEGIN button
 * First random question displays with random pantryItem ingredient.
 * If user selects AYE pantryItem is added to preferences object.
 * Else next random question and pantryItem are displayed.
 * Once all questions are answered button to 'make donut' appears, question disapears.
 * User clicks 'make donut' and the values in the preferences object are retrieved and appnded to page.
 * 
 * Ingredients:
	Frostings
		Fruity
			§ Strawberry
			§ Raspberry
			§ Banana
		Smooth
			§ Chocolate
			§ Maple
			§ Chocolate Maple Swirl
		Glaze Only
			§ Regular glaze
			§ Medium glaze
			§ Heavy glaze
	Toppings
		Crunchy
			§ Sugar Sprinkles
			§ Nuts
			§ Shredded Coconut
		Salty
			§ Bacon
			§ Pork rinds
			§ Sea Salt Sprinkles
		Fruity
			§ Cherries
			§ Strawberries
			§ Raspberries
	Fillings
		Fruity
			§ Strawberry filling
			§ Raspberry filling
			§ Mixed berry filling
		Smooth
			§ Chocolate Crème
			§ Vanilla Crème
            Strawberry Crème
 * 
 */


$(document).ready(function() {
    /** question constructor */
    var Questions = function(pantryItem) {[
        question1 = {text:"Would ye fancy " + pantryItem + "?"},
        question2 = {text:"Are ye hankerin' for " + pantryItem + "?"},
        question3 = {text:"Do ye want " + pantryItem + "?"},
        question4 = {text:"Are ye a scurvy dog who likes " + pantryItem + "?"},
        question5 = {text:"Would " + pantryItem + "be agreeable to ya?"},
        question6 = {text:"How about a " + pantryItem + "fer yer gutt today?"}
    ]
}

});