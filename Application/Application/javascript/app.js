var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/search/:param1", {
        templateUrl : "search.html",
        controller : "searchController"
    })
    .when("/login", {
        templateUrl : "login.html",
        controller : "loginController"
    })
    .when("/register", {
        templateUrl : "register.html",
        controller : "registerController"
    });
});
app.controller("loginController", function ($scope,$route, $routeParams) {
    $scope.msg = "User Login Page";

});
app.controller("registerController", function ($scope,$route, $routeParams) {
    $scope.msg = "register page";
});
app.controller("searchController", function ($scope,$route, $routeParams,$http) {
 
   $scope.q=$routeParams.param1;
  
        var ur="http://localhost/App/rest/UserService/count?search="+$scope.q;
 
      $http({method: 'GET', url: ur}).
        then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
  
  var ur2="http://localhost/App/rest/UserService/users?search="+$scope.q;
  $http({method: 'GET', url: ur2}).
        then(function(response) {
          $scope.status2 = response.status;
          $scope.data2 = response.data;
        }, function(response) {
          $scope.data2 = response.data || 'Request failed';
          $scope.status2 = response.status;
      });

 
 

});
app.controller('myCtrl', function($scope, $location) {
    $scope.searchData=function(search){
       $location.path('/search/'+search);
    };
});

