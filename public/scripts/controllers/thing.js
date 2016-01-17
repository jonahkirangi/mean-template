angular.module('MeanTemplate')
  .controller('ThingCtrl', ['$scope', '$routeParams', 'Thing', function($scope, $routeParams, Thing) {
    $scope.heading = 'Unique Thing';

    Thing.get({ _id: $routeParams.id }, function(thing) {
      $scope.thing = thing;
    });

  }]);
