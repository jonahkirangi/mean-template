angular.module('MeanTemplate')
  .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  }]);
