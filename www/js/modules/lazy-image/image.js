define(['jquery', 'angular', 'text!modules/lazy-image/image.html', 'angular-sanatize'], function($, angular, template) {
  var lazyImage = angular.module('LazyImageModule', ['ngSanitize']);
  lazyImage.template = template;
  
  lazyImage.controller('lazy-image', ['$sanitize', function($sanatize) {

  }]);
  
  //Bring the lazy module into the angular runtime
  angular.require('LazyImageModule');
  return lazyImage;
});