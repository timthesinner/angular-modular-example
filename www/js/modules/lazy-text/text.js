define(['jquery', 'angular', 'text!modules/lazy-text/text.html', 'angular-sanatize'], function($, angular, template) {
  var lazyText = angular.module('LazyTextModule', ['ngSanitize']);
  lazyText.template = template;
  
  lazyText.controller('lazy-text', ['$sanitize', function($sanatize) {

  }]);
  
  //Bring the lazy module into the angular runtime
  angular.require('LazyTextModule');
  return lazyText;
});