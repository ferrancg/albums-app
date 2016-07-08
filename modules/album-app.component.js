(function(){
  "use strict";

  var module = angular.module("myApp");

  module.component("albumApp", {
    templateUrl: "/modules/album-app.component.html",
    $routeConfig: [
      {path: "/userList", component: "userList", name: "User-List"},
      {path: "/userAlbumsList/:userId", component: "userAlbumsList", name: "User-Albums-List"},
      {path: "/**", redirectTo:["User-List"] }
    ]
  })

}());
