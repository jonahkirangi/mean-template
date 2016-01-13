angular.module('MeanTemplate')
  .factory('Thing', ['$resource', function($resource) {
    return $resource('/api/things/:_id');
  }]);
