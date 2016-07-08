(function(){
  "use strict";

  var module = angular.module("myApp");

  module.component("userAlbumsList", {
    templateUrl: "modules/user-albums-list.component.html",
    controllerAs: "model",
    controller: ["$http", albumsListController]
  });

  function albumsListController($http) {
    var model = this;
    model.albums = [];
    model.user = [];

    model.$routerOnActivate = function(next) {
        var userId = next.params.userId;

        $http.get("http://jsonplaceholder.typicode.com/users?id="+userId)
                    .then(function(response){
                      model.user = response.data[0];
                    });
        $http.get("http://jsonplaceholder.typicode.com/albums?userId="+userId)
                    .then(function(response){
                      model.albums = response.data;
                    });
    };
  }

}());
