angular.module("app").controller("mainController",function($scope,musiciansFactory){
$scope.musicians= musiciansFactory.getMusicians();
})
