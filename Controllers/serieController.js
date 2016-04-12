angular.module('app').controller('serieController',function($scope,serieFactory){
$scope.series=serieFactory.getSeries();
$scope.addSerie=function(serie){
  serieFactory.addSerie(serie);
  $scope.newserie.nom="";
  $scope.newserie.description="";
}
});
