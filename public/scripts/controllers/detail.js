angular.module('MeanTemplate')
  .controller('DetailCtrl', ['$scope', '$routeParams', 'Thing', function($scope, $routeParams, Thing) {
    Thing.get({ _id: $routeParams.id }, function(thing) {
      $scope.thing = thing;
    });

  }]);
