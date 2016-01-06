angular.module('MeanTemplate')
  .controller('MainCtrl', ['$scope', function($scope) {

    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    $scope.dataBinding = 'Example Data Binding';

  }]);
