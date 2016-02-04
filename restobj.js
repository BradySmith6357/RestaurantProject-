angular.module("mainModule", [])
	angular.module("mainModule").factory("mainFactory", [function(){
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function(){
	console.log(this.name + " has " + this.calories + " calories, " + " vegan: " + this.vegan + ", gluten free: " + this.glutenFree  + ", citrus free: " + this.citrusFree)
}

var chicken = new FoodItem(
	"chicken", 
	400,
	false,
	false,
	false
	)

var veggies = new FoodItem(
	"veggies",
	400,
	true,
	true,
	true
	)

var avacadoes = new FoodItem(
	"avacadoes",
	600,
	true,
	true,
	true
	)

var lime = new FoodItem(
	"lime",
	20,
	true,
	true,
	false
	)

var tortilla = new FoodItem(
	"tortilla",
	150,
	false,
	false,
	true
	)
var tequilla = new FoodItem(
	"tequilla",
	200,
	true,
	true,
	false
	)
var rice = new FoodItem(
	"rice",
	100,
	true,
	false,
	true
	)
var blackBeans = new FoodItem(
	"black beans",
	200,
	true,
	true,
	true
	)
var jalepeno = new FoodItem(
	"jalepeno",
	50,
	true,
	true,
	true
	)
var tomato = new FoodItem(
	"tomato",
	60,
	true,
	true,
	true
	)
var salt = new FoodItem(
	"salt",
	10,
	true,
	true,
	true
	)
var pork = new FoodItem(
	"pork",
	600,
	false,
	true,
	true
	)
var greenChili = new FoodItem(
	"green chili",
	200,
	true,
	true,
	true
	)
var tripleSec = new FoodItem(
	"TripleSec",
	150,
	true,
	true,
	false
	)

// favFood.stringify()
// badFood.stringify()

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients
}

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

var Order = function (plate) {
	this.plate = []
	for (var i = 0; i < plate.length; i++){
		this.plate.push(plate[i].name)
	}
}

var Menu = function (plate, drink) {
	this.plate = plate;
	this.drink = drink
}
var Restaurant = function (name, description) {
	this.name = name;
	this.description = description;
}

var Customer = function(diet) {
	this.glutenFree = diet.glutenFree
	this.vegan = diet.vegan
	this.citrusFree = diet.citrusFree;
}

Drink.prototype.stringify = function(){
	console.log(this.name + " is " + this.description.toLowerCase() + " and costs " + this.price + " . Ingredients: " + this.ingredients)
}
Plate.prototype.stringify = function(){
	console.log(this.name + " is " + this.description.toLowerCase() + " that costs " + this.price + ". " + this.name + " is made with: ")
	for(var i = 0; i < this.ingredients.length; i++){
		console.log(this.ingredients[i].name)
	}
}
Order.prototype.stringify = function(){
	console.log("You ordered: " + this.plate )
}

Menu.prototype.stringify = function(){
	console.log("The food items on the menu are: ")
		for(var i = 0; i < this.plate.length; i++){
			console.log(this.plate[i].name)
		}
	console.log("The drinks on the menu are: ")
		for(var i = 0; i < this.drink.length; i++){
			console.log(this.drink[i].name)
		}
	}

Restaurant.prototype.stringify = function(){
	console.log(this.name + " is " + this.description)
}

Customer.prototype.stringify = function(){
	console.log("This customer has the following dietary preferences: Gluten Free: " + this.glutenFree + " Vegan: " + this.vegan + "Citrus Free: " + this.citrusFree)
}

var chickenBurrito = new Plate("Chicken Burrito", "a large tortilla filled with slow cooked, adobo chicken, black beans, rice and smothered in house green chili", 10.99, [chicken, blackBeans, rice, pork, greenChili])
var guacPlate = new Plate("Lots 'o' guac!", " a vegitarian's dream! A plate piled high with homemade guacamole, tortilla chips, three tortillas, black beans, and vegitarian rice", 8.99, [avacadoes,jalepeno, tomato, lime, salt, rice, blackBeans, tortilla])
var porkBurrito = new Plate("Pork Burrito", "a large tortilla filled with tender, shredded pork, black beans, rice, and smothered in house green chili", 10.99, [pork, blackBeans, rice, greenChili])
var spicyMarg = new Drink("Spicy Margarita", "Our house margarita with a spicy kick!", 6.99, [tequilla, tripleSec, lime, salt, jalepeno])
var margDrink = new Drink("Margarita", "Our house margarita made with anejo tequilla, triple sec and fresh lime juice. Served on the rocks", 6.99, [tequilla, tripleSec, lime, salt])

var table1 = new Order([chickenBurrito, chickenBurrito, guacPlate, margDrink])

var menu1 = new Menu([chickenBurrito, guacPlate, porkBurrito], [spicyMarg, margDrink])

var mexicanRestaurant = new Restaurant("Tico's Taco House", "a Mexican Restaurant that features some of the best food north of the border!")

var customer1 = new Customer ([false, true, false])

return {

 FoodItem: FoodItem,
 Drink: Drink,
 Plate: Plate,
 Menu: Menu,
 Restaurant: Restaurant,
 Customer: Customer

}

}]);

angular.module("mainModule")
	.controller("mainTroller", ["$scope", "mainFactory", function($scope, mainFactory){ 

$scope.chicken = new mainFactory.FoodItem("chicken", 400, false, false,false)

$scope.tortilla = new mainFactory.FoodItem("tortilla", 150, false, false,true)

$scope.blackBeans = new mainFactory.FoodItem("black beans", 200, true, true, true)

$scope.rice = new mainFactory.FoodItem("rice", 300, false, true, true)

$scope.pork = new mainFactory.FoodItem ("pork", 600, true, false, true)

$scope.greenChili = new mainFactory.FoodItem ("green chili", 250, true, true, true)

$scope.jalepeno = new mainFactory.FoodItem("jalepeno",50,true, true, true)
$scope.tomato = new mainFactory.FoodItem("tomato", 60, true, true, true)

$scope.salt = new mainFactory.FoodItem("salt", 10, true, true, true)

$scope.pork = new mainFactory.FoodItem("pork", 600, false, true, true)

$scope.greenChili = new mainFactory.FoodItem("green chili", 200, true, true, true)

$scope.tripleSec = new mainFactory.FoodItem("TripleSec", 150, true, true, false)

$scope.tequilla = new mainFactory.FoodItem("tequilla", 200, true, true, false)
$scope.veggies = new mainFactory.FoodItem("veggies", 400, true, true, true)

$scope.avacadoes = new mainFactory.FoodItem("avacadoes", 600, true, true, true)

$scope.lime = new mainFactory.FoodItem("lime", 20, true, true, false)

$scope.drinksArray = []
$scope.platesArray = []

$scope.chickenBurrito = new mainFactory.Plate("Chicken Burrito", "a large tortilla filled with slow cooked, adobo chicken, black beans, rice and smothered in house green chili", 10.99, [$scope.chicken, $scope.blackBeans, $scope.rice, $scope.pork, $scope.tortilla, $scope.greenChili])

$scope.guacPlate = new mainFactory.Plate("Lots 'o' guac!", " a vegitarian's dream! A plate piled high with homemade guacamole, tortilla chips, three tortillas, black beans, and vegitarian rice", 8.99, [$scope.avacadoes,$scope.jalepeno, $scope.tomato, $scope.lime, $scope.salt, $scope.rice, $scope.blackBeans, $scope.tortilla])

$scope.porkBurrito = new mainFactory.Plate("Pork Burrito", "a large tortilla filled with tender, shredded pork, black beans, rice, and smothered in house green chili", 10.99, [$scope.pork, $scope.blackBeans, $scope.rice, $scope.greenChili])

$scope.margarita = new mainFactory.Drink("Margarita", "Our house margarita made with anejo tequilla, triple sec and fresh lime juice. Served on the rocks", 6.99, [$scope.tequilla, $scope.tripleSec, $scope.lime, $scope.salt])

$scope.spicyMarg = new mainFactory.Drink("Spicy Margarita", "Our house margarita with a spicy kick!", 6.99, [$scope.tequilla, $scope.tripleSec, $scope.lime, $scope.salt, $scope.jalepeno])

$scope.menu = new mainFactory.Menu([$scope.chickenBurrito, $scope.guacPlate, $scope.porkBurrito], [$scope.spicyMarg, $scope.margarita])

$scope.restaurant = new mainFactory.Restaurant("Bob's Burrito House", "a Mexican Restaurant that features some of the best food north of the border!", $scope.menu)

$scope.customer1 = new mainFactory.Customer ({glutenFree: false, vegan: true, citrusFree: false})


$scope.order = []

$scope.addFood = function (item){
	$scope.order.push(item)
	console.log($scope.order)
}

}]);














