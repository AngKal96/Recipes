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



app.controller('myCtrl', function ($scope, $http) {

    $http({
        method: "GET",
        url: "C:\Users\angel\Recipes\recipes.json"
    })
        .then((recipes) => {
            $scope.fetchedRecipes = recipes;

            $scope.getRecipes = [];

            $scope.getRecipes.push(fetchedRecipes);

            $scope.onSelect = function (clickedRecipe) {
                $scope.selectedRecipe = clickedRecipe;
            };
        });
});
