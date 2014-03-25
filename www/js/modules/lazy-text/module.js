requirejs.config({
    "baseUrl": "js",
    "paths": {
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
      'angular': '/js/lib/angular',
      'angular-sanatize': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-sanitize',
      'angular-resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-resource',
      'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route',
      'lib': '/js/lib',
      'module': '/js/modules/lazy-text',
      'text': '/js/lib/text'
    },
    shim: {
      'jquery': {'exports' : 'jquery'},
      
      'angular': {'exports' : 'angular'},
      'angular-resource': { deps:['angular'] },
      'angular-sanatize': { deps:['angular'] },
      'angular-route': { deps:['angular'] },
      
      'text': { 'exports': 'text' }
    }
});

define(['jquery', 'angular', 'text', 'modules/lazy-text/text'], function ($, angular, text, module) {
  return module;
});