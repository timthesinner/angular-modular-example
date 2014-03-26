define(['jquery', 'angular', 'text!modules/lazy-text/text.html', 'angular-sanatize'], function($, angular, template) {
  var lazyText = angular.module('LazyTextModule', ['ngSanitize']);
  lazyText.template = template;
  
  lazyText.controller('lazy-text', ['$scope', '$sce', function($scope, $sce) {
    $scope.snip = '<p style="color:blue">an html <em onmouseover="this.textContent=\'PWN3D!\'">click here</em> snip</p>'
    $scope.trustSnip = function() {
      return $sce.trustAsHtml($scope.snip);
    };
  }]);
  
  //Bring the lazy module into the angular runtime
  angular.require('LazyTextModule');
  return lazyText;
});