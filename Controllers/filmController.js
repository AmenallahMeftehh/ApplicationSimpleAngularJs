angular.module('app').controller('filmController',function($scope,filmFactory){
$scope.films=filmFactory.getFilms();
$scope.addFilm = function(film){
filmFactory.addFilm(film);
$scope.newfilm.title="";
$scope.newfilm.acteur="";
$scope.newfilm.realisateur="";
}
});
