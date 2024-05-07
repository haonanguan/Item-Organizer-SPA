angular.module("itemApp").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/items", {
        templateUrl: "app/templates/items.html",
        controller: "ItemsController",
      }) // Route for displaying all items
      .when("/items/:id", {
        templateUrl: "app/templates/itemDetails.html",
        controller: "ItemDetailsController",
      }) // Route for displaying item details
      .otherwise({ redirectTo: "/items" }); // Redirect to "/items" if the route is not found
  },
]);
