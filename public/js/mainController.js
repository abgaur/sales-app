var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $http.get("/api")
    .then(function(response) {

        $scope.details = response.data;

    });

});