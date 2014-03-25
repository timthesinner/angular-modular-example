/**
 * Trivial lazy router.  Delegates standard routing to the default router, 
 *   Can be dropped in to existing route configuration without issue
 */
(function($, angular, factory) {'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'angular', 'angular-route'], function($, angular) {
            return factory($, angular);
        });
    } else {
        return factory($, angular);
    }
}(window.jQuery | null, window.angular | null, function($, angular) {
  var $routeProvider = null;
  
  function lazyModule(moduleName) {
      var template = null;
      
      return {
          resolve: {
              lazy: ['$q', function($q) {
                  var defer = $q.defer();
                  if (! template) {
                      var requirePath = 'modules/' + moduleName + '/module';
                      console.log('Loading: ' + requirePath);
                      require([requirePath], function(module) {
                          template = module.template;
                          defer.resolve();
                      });
                  } else {
                      defer.resolve();
                  }
                  return defer.promise;
              }]
          },
          template: function(routeParams) {
              //If the template has been initialized return it, if not, return a wrapper function
              // We are guaranteed that template will be initialized by the time the wrapper is invoked
              // By the use of the defer/promise in the resolver.
              return template || function() { return template; };
          },
          controller: moduleName
      };
  }
  
  function when(uri, module) {
      $routeProvider.when(uri, lazyModule(module));
  }
  
  var lazy = angular.module('ngLazy', ['ngRoute']);
  
  lazy.config(['$routeProvider', function($routeProvider_) {
      $routeProvider = $routeProvider_;
  }]);
  
  lazy.provider('$lazyRoute', function() {
      this.when_lazy = when;
      this.when = $routeProvider.when;
      this.otherwise = $routeProvider.otherwise;
      this.$get = $routeProvider.$get;
  });
  
  return lazy;
}));