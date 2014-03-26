define(['jquery', 'angular', 'text!modules/lazy-image/image.html'], function($, angular, template) {
  var lazyImage = angular.module('LazyImageModule', []);
  lazyImage.template = template;
  
  lazyImage.controller('lazy-image', function() {
    
  });
  
  //Bring the lazy module into the angular runtime
  angular.require('LazyImageModule');
  return lazyImage;
});