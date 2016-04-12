angular.module('app',['ngRoute']).config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
          when('/musique', {
            templateUrl: 'pages/musique.html',
            controller: 'mainController'
          }).
          when('/film', {
            templateUrl: 'pages/film.html',
            controller: 'filmController'
          }).
          when('/series', {
            templateUrl: 'pages/series.html',
            controller: 'serieController'
          }).
          otherwise({
            redirectTo: '/index.'
          });



  }]);
