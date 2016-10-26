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
app.controller("searchController", function ($scope,$route, $routeParams) {
   $scope.q=$routeParams.param1;
});
app.controller('myCtrl', function($scope, $location) {
    $scope.searchData=function(search){
       $location.path('/search/'+search);
    };
});

