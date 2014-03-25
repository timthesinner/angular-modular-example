'use strict';
//Define the RootApplication and RootController
// Root application only needs the lazy router as a dependency.
//  All other dependencies are added dynamically to the runtime
define(['jquery', 'angular', 'root/lazy-router'] , function ($, angular) {  
    var app = angular.module('RootApplication', ['ngLazy']);
    
    //Bind modules loading to the router
    app.config(['$lazyRouteProvider', function ($lazyRouteProvider) {
      $lazyRouteProvider.when_lazy('/text', 'lazy-text');
      $lazyRouteProvider.when_lazy('/image', 'lazy-image');
      $lazyRouteProvider.otherwise({redirectTo: '/text'});
    }]);

    //Create the RootController
    app.controller('RootController', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
        //Simply bind the go function in index.html so nav clicks result in routing changes
        $scope.go = function (path) {
            $location.path(path);
        };
    }]);
    
    app.run(['$location', function($location) {
      console.log($location);
    }]);
    
    return app;
});