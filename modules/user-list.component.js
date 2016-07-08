(function(){
  "use strict";

  var module = angular.module("myApp");

  module.component("userList", {
    templateUrl: "modules/user-list.component.html",
    controllerAs: "model",
    controller: ["$http", userListController]
  });

  function userListController($http) {
    var model = this;
    model.users = [];

    model.$onInit = function() {
      fetchUsers($http).then(function(users) {
        model.users = users;
      })
    }
  }

  function fetchUsers($http) {
    return $http.get("http://jsonplaceholder.typicode.com/users")
                .then(function(response){
                  return response.data;
                });
  }

}());
