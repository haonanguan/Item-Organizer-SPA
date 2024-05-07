angular.module("itemApp").factory("ItemService", [
  "$http",
  function ($http) {
    // Base URL for item operations
    const baseUrl = "http://localhost:8080/item";

    return {
      // Retrieve all items
      getAllItems() {
        return $http.get(`${baseUrl}/all`);
      },
      // Retrieve item by ID
      getItemById(id) {
        return $http.get(`${baseUrl}/find/${id}`);
      },
      // Add a new item
      addItem(item) {
        return $http.post(`${baseUrl}/add`, item);
      },
      // Update an existing item
      updateItem(item) {
        return $http.put(`${baseUrl}/update`, item);
      },
      // Delete an item by ID
      deleteItem(id) {
        return $http.delete(`${baseUrl}/delete/${id}`);
      },
    };
  },
]);
