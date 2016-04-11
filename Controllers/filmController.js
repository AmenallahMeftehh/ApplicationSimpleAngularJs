angular.module('app').controller('filmController',function($scope,filmFactory){
$scope.films=filmFactory.getFilms();
$scope.film = function(film){
filmFactory.addFilm(film);
}
});
