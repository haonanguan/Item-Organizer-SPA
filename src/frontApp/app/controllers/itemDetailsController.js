angular.module("itemApp").controller("ItemDetailsController", [
  "$scope",
  "$routeParams",
  "$location",
  "ItemService",
  function ($scope, $routeParams, $location, ItemService) {
    // Initialize item and edit mode
    $scope.item = {};
    $scope.editMode = false;

    // Fetch item details by ID
    ItemService.getItemById($routeParams.id).then(function (response) {
      $scope.item = response.data;
    });

    // Toggle edit mode
    $scope.toggleEditMode = function () {
      $scope.editMode = !$scope.editMode;
    };

    // Save item details
    $scope.saveItem = function () {
      ItemService.updateItem($scope.item).then(
        function (response) {
          $scope.item = response.data;
          $scope.editMode = false;
          alert("Item updated successfully");
        },
        function (error) {
          alert("Error updating item");
        }
      );
    };

    // Delete item
    $scope.deleteItem = function () {
      if (confirm("Are you sure you want to delete this item?")) {
        ItemService.deleteItem($scope.item.id).then(
          function () {
            alert("Item deleted successfully");
            $location.path("/items");
          },
          function (error) {
            alert("Error deleting item");
          }
        );
      }
    };
  },
]);
