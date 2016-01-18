angular.module('MeanTemplate')
  .controller('DetailCtrl', ['$scope','$alert', '$routeParams', '$location', 'Thing', function ($scope, $alert, $routeParams, $location, Thing) {
    Thing.get({ _id: $routeParams.id }, function (thing) {
      $scope.thing = thing;
    });

    $scope.deleteThing = function () {
      Thing.remove({ _id: $routeParams.id },
        function () {
          $location.path('/home');
          $alert({
            content: 'Thing has been deleted.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function (response) {
          $alert({
            content: response.data,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };

  }]);
