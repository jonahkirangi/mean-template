angular.module('MeanTemplate', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }]);
