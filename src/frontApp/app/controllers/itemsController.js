angular.module("itemApp").controller("ItemsController", [
  "$scope",
  "ItemService",
  // "WebSocketService",
  function ($scope, ItemService) {
    // initialize scope variables
    $scope.items = [];
    $scope.showModal = false;
    $scope.newItem = {};
    $scope.sortAttribute = "name";
    $scope.sortReverse = false;

    // function to load items from ItemService
    $scope.loadItems = function () {
      ItemService.getAllItems().then(function (response) {
        $scope.items = response.data;
      });
    };

    // function to show add item modal
    $scope.showAddItemModal = function () {
      $scope.showModal = true;
    };

    // function to close modal and reset newItem
    $scope.closeModal = function () {
      $scope.showModal = false;
      $scope.newItem = {};
    };

    // function to add a new item
    $scope.addItem = function () {
      ItemService.addItem($scope.newItem).then(
        function (response) {
          // add the new item to the list and close the modal
          $scope.items.push(response.data);
          $scope.closeModal();
        },
        function (error) {
          // handle error
          alert("Error adding item");
        }
      );
    };

    // function to sort items by attribute
    $scope.sortBy = function (attribute) {
      $scope.sortAttribute = attribute;
    };

    // function to toggle sort order
    $scope.toggleOrder = function () {
      $scope.sortReverse = !$scope.sortReverse;
    };

    // // Handle real-time WebSocket updates
    // function handleWebSocketUpdate(data) {
    //   if (data.action === "add") {
    //     $scope.items.push(data.item);
    //   } else if (data.action === "update") {
    //     const index = $scope.items.findIndex(
    //       (item) => item.id === data.item.id
    //     );
    //     if (index !== -1) {
    //       $scope.items[index] = data.item;
    //     }
    //   } else if (data.action === "delete") {
    //     $scope.items = $scope.items.filter((item) => item.id !== data.item.id);
    //   }
    //   $scope.$apply(); // Ensure AngularJS updates the view
    // }

    // // Listen for WebSocket messages
    // WebSocketService.onMessage(handleWebSocketUpdate);

    // load items when the controller is initialized
    $scope.loadItems();
  },
]);
