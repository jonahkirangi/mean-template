angular.module('MeanTemplate', ['ngRoute', 'ngCookies', 'ngResource', 'mgcrea.ngStrap', 'ngMessages'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/things/:id', {
        templateUrl: 'views/thing.html',
        controller: 'ThingCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  }]);
