angular.module('app',['ngRoute']).config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
          when('/musique', { resolve: {
            "check" : function($location, $rootScope){
              if(!$rootScope.isLogin){
                  $location.path('/login');
              }
          }
      },
            templateUrl: 'pages/musique.html',
            controller: 'mainController'
          }).
          when('/film', { resolve: {
            "check" : function($location, $rootScope){
              if(!$rootScope.isLogin){
                  $location.path('/login');
              }
          }
      },
            templateUrl: 'pages/film.html',
            controller: 'filmController'
          }).
          when('/series', {  resolve: {
                "check" : function($location, $rootScope){
                    if(!$rootScope.isLogin){
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'pages/series.html',
            controller: 'serieController'
          }).
          when('/login', {

            templateUrl: 'pages/login.html',
            controller: 'loginController'
          })
          .when('/home', {
              resolve: {
                  "check" : function($location, $rootScope){
                      if(!$rootScope.isLogin){
                          $location.path('/login');
                      }
                  }
              },
              templateUrl : 'pages/home.html',
              controller : 'homeController'
          })
          .otherwise({
            redirectTo: '/logins'
          });



  }]);
