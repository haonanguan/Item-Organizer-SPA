angular.module("itemApp").factory("WebSocketService", function ($rootScope) {
  const socket = new WebSocket("ws://localhost:8080/ws/items");

  function onMessage(callback) {
    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      $rootScope.$apply(function () {
        callback(data);
      });
    };
  }

  return {
    onMessage,
  };
});
