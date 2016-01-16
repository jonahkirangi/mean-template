angular.module('MeanTemplate')
  .controller('HomeCtrl', ['$scope', 'Thing', function($scope, Thing) {
    $scope.things = Thing.query();

  }]);
