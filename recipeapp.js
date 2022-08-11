let app = angular.module("myRecipes", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "landing.html",
        })
        .when("/landing", {
            templateUrl: "landing.html",
        })
        .when("/recipe-template", {
            templateUrl: "recipe-template.html",
        })
        .when("/contact", {
            templateUrl: "contact.html",
        })
});


const tteokbokki = {

    label: "Tteokbokki",

    ingredients: [
        { quantity: "2", ingredient: "frozen deok" },
        { quantity: "1/3 cup", ingredient: "gochujang paste" },
        { quantity: "3 tbsp", ingredient: "red pepper flakes" },
        { quantity: "1 tbsp", ingredient: "brown sugar" },
        { quantity: "3 tbsp", ingredient: "chicken bouillon" },
        { quantity: "4 cups", ingredient: "water" },
        { quantity: "4", ingredient: "stalks green onions" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/tteokbokkiimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};
const sujebi = {
    label: "Sujebi",

    ingredients: [
        { quantity: "8 3/4 cups", ingredient: "water" },
        { quantity: "4-5 tbsp", ingredient: "chicken bouillon" },
        { quantity: "1", ingredient: "medium onion" },
        { quantity: "2 cups", ingredient: "flour" },
        { quantity: "3 cups", ingredient: "chopped kimchi" },
        { quantity: "1/4 cup", ingredient: "kimchi juice" },
        { quantity: "1 tsp", ingredient: "salt" },
        { quantity: "2 tbsp", ingredient: "red pepper flakes" },
        { quantity: "2", ingredient: "stalks green onions" }
    ],

    description: " Sujebi is a spicy soup great for during the winter months or when you're sick.",
    image: "images/sujebiimg.jpg",

    method: [
        "Bring 8 cups of water to a boil in pot.",
        "Combine the flour, salt, and 3/4 cup of water in a mixing bowl and mix thoroughly. Chill dough in fridge until ready to use.",
        "Cut 2 onion and green onion stalks into 1 inch pieces.",
        "Once water is boiling, add the chicken bouillon, onion, kimchi, and kimchi juice. Let cook for 10 mins or until soup is starting to bubble.",
        "Tear off dough in pieces and flatten into 1 inch size pieces and drop into soup. Continue until all the dough is used. Add in the green onions.",
        "Let soup simmer for another 10 minutes.",
        "Serve while hot!"
    ],
};
const kimchiRice = {

    label: "Kimchi Fried Rice",

    ingredients: [
        { quantity: "3 cups", ingredient: "day-old cooked jasmine rice" },
        { quantity: "3 cups", ingredient: "kimchi" },
        { quantity: "3 tbsp", ingredient: "kimchi juice" },
        { quantity: "1 tbsp", ingredient: "chicken bouillon" },
        { quantity: "2 tbsp", ingredient: "butter" },
        { quantity: "1 can", ingredient: "spam" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/tteokbokkiimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};

const soldierStew = {
    label: "Soldier's Stew",
    ingredients: [
        { quantity: "2 1/4 cups", ingredient: "All-purpose flour" },
        { quantity: "1 teaspoon", ingredient: "Baking soda" },
        { quantity: "Sprinkled", ingredient: "Fine salt" },
        { quantity: "1 1/2 sticks (12 tablespoons)", ingredient: "Unsalted butter, at room temperature" },
        { quantity: "3/4 cup", ingredient: "Light brown sugar" },
        { quantity: "2/3 cup", ingredient: "Granulated sugar" },
        { quantity: "2", ingredient: "Large eggs" },
        { quantity: "1 teaspoon", ingredient: "Pure vanilla extract" },
        { quantity: "1 12-ounce", ingredient: "A bag of semisweet chocolate chips" },
    ],
    description: "The combination of the toasted grain with the browned butter, caramelized sugar, vanilla and chocolate are “the beautiful rich flavors that blend together in a chocolate chip cookie,” And as the chocolate melts, it becomes more aromatic and punches up the flavor.",
    image: "images/soldiersstewimg.jpg",

    method: [
        "Whisk together the flour, baking soda and 1 teaspoon salt in a large bowl.",
        "Beat the butter and both sugars on medium-high speed in the bowl of a stand mixer fitted with a paddle attachment (or in a large bowl if using a handheld mixer) until light and fluffy, about 4 minutes. Add the eggs, one at time, beating after each addition to incorporate. Beat in the vanilla. Scrape down the side of the bowl as needed. Reduce the speed to medium, add the flour mixture and beat until just incorporated. Stir in the chocolate chips.",
        "Scoop 12 heaping tablespoons of dough about 2 inches apart onto each prepared baking sheet. Roll the dough into balls with slightly wet hands. Bake, rotating the cookie sheets from upper to lower racks halfway through, until golden but still soft in the center, 12 to 15 minutes (the longer the cook time, the crunchier the cookies). Let cool for a few minutes on the baking sheet, and then transfer to a rack to cool completely.",
        "Finally, let the baking sheets cool completely, scoop the remaining dough onto 1 sheet and bake. Store the cookies in a tightly sealed container at room temperature for up to 5 days."
    ],
};

const kimchiJjigae = {
    label: "Kimchi JJigae",
    ingredients: [
        { quantity: "4 thighs", ingredient: "Boneless Chicken Thighs" },
        { quantity: "200g", ingredient: "Basmati/Jasmine Rice" },
        { quantity: "250ml", ingredient: "Chicken Broth" },
        { quantity: "3/4th cup", ingredient: "Greek Yogurt" },
        { quantity: "1 cup", ingredient: "Mayonnaise" },
        { quantity: "1-2 tsp each", ingredient: "Spices: Smoked Paprika, Cumin, Turmeric, Black Pepper, Oregano, Salt, Sugar" },
        { quantity: "1 leaf", ingredient: "Bay Leaf" },
        { quantity: "1/8th onlion, finely diced", ingredient: "Onion" },
        { quantity: "5 cloves", ingredient: "Lime" },
        { quantity: "1 lime", ingredient: "White Vinegar" },
        { quantity: "10g", ingredient: "Boneless Chicken Thighs" },
        { quantity: "1 1/2 tbsp", ingredient: "Butter" }
    ],
    description: "This New York food cart style chicken and rice is easy to make, and can make several portions for delicious meals over multiple days. The juicy chicken and flavorful rice complement each other perfectly!",
    image: "images/tteokbokkiimg.jpg",

    method: [
        "CHICKEN: Salt chicken thighs and leave to the side.",
        "Crush the garlic cloves into a paste.",
        "In a bowl, mix together ½ cup greek yogurt, ½ cup mayonnaise, 1 tsp smoked paprika, 1 tsp cumin, 1 tsp turmeric, 1 tsp black pepper, a sprinkle of oregano, the garlic paste, and juice of half a lime. Mix thoroughly",
        "Thoroughly coat chicken thighs with the mixture in the bowl, then cover and let marinade anywhere from 1 hour to 1 day.",
        "After marinating, sear chicken thighs over medium-high heat for 6 to 7 minutes per side. Dice the chicken in the pan with a metal spatula 1 to 2 minutes before chicken is done cooking.",
        "RICE: In a pan over medium heat, melt 1 tbsp of butter.",
        "Once butter has melted, add in the diced onion, 1 tsp turmeric, 1 tsp smoked paprika, ½ tsp cumin, and a bay leaf. Stir spices for about 30 seconds, careful to not let them burn.",
        "Add rice into the pan and toast with the spices for about 2 minutes.",
        "Add chicken broth, turn up the heat, and bring broth to a boil. Once boiling, cover the rice and turn the heat down to the lowest setting and let the rice steam for about 20 minutes.",
        "Remove the rice and taste, add salt or butter to taste as needed.",
        "SAUCE: In a bowl, mix ½ cup mayonnaise, 1/4th cup greek yogurt, juice of 1/4th lime, 10g vinegar, ½ tsp black pepper, ½ tsp salt, and a sprinkle of smoked paprika and oregano. Mix well.",
        "Taste and add spices as needed, optionally pour into a squeeze bottle for easier use."
    ],
};
const japchae = {

    label: "Japchae",

    ingredients: [
        { quantity: "2", ingredient: "frozen deok" },
        { quantity: "1/3 cup", ingredient: "gochujang paste" },
        { quantity: "3 tbsp", ingredient: "red pepper flakes" },
        { quantity: "1 tbsp", ingredient: "brown sugar" },
        { quantity: "3 tbsp", ingredient: "chicken bouillon" },
        { quantity: "4 cups", ingredient: "water" },
        { quantity: "4", ingredient: "stalks green onions" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/japchaeimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};

const bibimbap = {

    label: "Bibimbap",

    ingredients: [
        { quantity: "2", ingredient: "frozen deok" },
        { quantity: "1/3 cup", ingredient: "gochujang paste" },
        { quantity: "3 tbsp", ingredient: "red pepper flakes" },
        { quantity: "1 tbsp", ingredient: "brown sugar" },
        { quantity: "3 tbsp", ingredient: "chicken bouillon" },
        { quantity: "4 cups", ingredient: "water" },
        { quantity: "4", ingredient: "stalks green onions" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/tteokbokkiimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};
const coldNoodle = {

    label: "Spicy Cold Noodles",

    ingredients: [
        { quantity: "2", ingredient: "frozen deok" },
        { quantity: "1/3 cup", ingredient: "gochujang paste" },
        { quantity: "3 tbsp", ingredient: "red pepper flakes" },
        { quantity: "1 tbsp", ingredient: "brown sugar" },
        { quantity: "3 tbsp", ingredient: "chicken bouillon" },
        { quantity: "4 cups", ingredient: "water" },
        { quantity: "4", ingredient: "stalks green onions" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/coldnoodleimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};
const jajamyeon = {

    label: "Jajamyeon",

    ingredients: [
        { quantity: "2", ingredient: "frozen deok" },
        { quantity: "1/3 cup", ingredient: "gochujang paste" },
        { quantity: "3 tbsp", ingredient: "red pepper flakes" },
        { quantity: "1 tbsp", ingredient: "brown sugar" },
        { quantity: "3 tbsp", ingredient: "chicken bouillon" },
        { quantity: "4 cups", ingredient: "water" },
        { quantity: "4", ingredient: "stalks green onions" },
        { quantity: "4", ingredient: "hardboiled eggs" },
        { quantity: "2", ingredient: "sheets of fishcake (optional)" }
    ],
    description: "Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon, cooked in a spicy thick sauce.",

    image: "images/tteokbokkiimg.jpg",
    method: [
        "Bring water to a boil in saucepan on med-high heat.",
        "While water is heating, in a separate bowl mix the gocujang, red pepper flakes, and brown sugar. Cut 2 green onion stalks into 1 inch sections.",
        "Once water is boiling, add the gochujang mixture in the saucepan until fully incorporated.",
        "Add in the defrosted deok and green onions and stir.",
        "Leave saucepan uncovered and lower heat to med-low. Stir occassionally. Let simmer for 25 minutes.",
        "(Optional) Cut fishcake sheets into squares and add into saucepan 10 minutes before it is done.",
        "Transfer to a serving dish and top with minced green onions. Serve while hot!"
    ],

};


app.controller('myCtrl', function ($scope) {

    $scope.recipes = [];

    $scope.recipes.push(tteokbokki, sujebi, kimchiRice, soldierStew, kimchiJjigae, japchae, bibimbap, coldNoodle, jajamyeon);

    $scope.onSelect = function (clickedRecipe) {
        $scope.selectedRecipe = clickedRecipe;
    };
});
