angular.module('MeanTemplate')
  .controller('AddCtrl', ['$scope', '$alert', 'Thing', function($scope, $alert, Thing) {
    $scope.addThing = function() {
      Thing.save({ thingName: $scope.thingName, thingDescription: $scope.thingDescription },
        function() {
          $scope.thingName = '';
          $scope.thingDescription = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Thing has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $scope.thingName = '';
          $scope.thingDescription = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);
