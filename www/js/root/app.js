if (! window.console) {
    console = {
        log: function() { },
        info: function() { },
        warn: function() { },
        error: function() { },
        debug: function() { }
    };
}

//Global requirejs config available in all modules
requirejs.config({
    "baseUrl": "js",
    "paths": {
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
      'angular': '/js/lib/angular',
      'angular-sanatize': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-sanitize',
      'angular-resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-resource',
      'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route',
      'lib': '/js/lib',
      'text': '/js/lib/text'
    },
    shim: {
      'jquery': {'exports' : 'jquery'},
      
      'angular': {'exports' : 'angular'},
      'angular-resource': { deps:['angular'] },
      'angular-sanatize': { deps:['angular'] },
      'angular-route': { deps:['angular'] }
    }
});

// Load the main app module to start the app
require(['jquery', 'angular', 'text', 'root/root-application'], function ($, angular) {
    $(function () { // using jQuery because it will run this even if DOM load already happened       
      //Add the cloud share app to the body element before bootstrapping the DOM
      $('.globalContainer').attr("ng-app", "RootApplication");
      angular.bootstrap(document, ['RootApplication']);
    });
});