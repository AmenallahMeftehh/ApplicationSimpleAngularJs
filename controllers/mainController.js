angular.module("app").controller("mainController",function($scope,musiciansFactory){
$scope.musicians= musiciansFactory.getMusicians();
$scope.addMusician = function(musician){
  musiciansFactory.addMusician(musician);
  // $scope.newMusician.fullName="";
  // $scope.newMusician.title="";
};
});
