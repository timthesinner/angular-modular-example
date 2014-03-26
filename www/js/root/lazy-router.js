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
  
  function TemplateWrapper() {
    var initialized = false
        template = null;
    
    function get() {
      if (initialized) {
        return template;
      }
      return get;
    } 
    this.get = get;
    
    function init(_template) {
      initialized = true;
      template = _template;
    }
    this.init = init;
    
    this.initialized = function() {
      return initialized;
    }
  }
  
  function lazyModule(moduleName) {
      var template = new TemplateWrapper();
      
      return {
          resolve: {
              lazy: ['$q', function($q) {
                  var defer = $q.defer();
                  if (! template.initialized()) {
                      var requirePath = 'modules/' + moduleName + '/module';
                      require([requirePath], function(module) {
                          template.init(module.template);
                          defer.resolve();
                      });
                  } else {
                      defer.resolve();
                  }
                  return defer.promise;
              }]
          },
          template: template.get,
          controller: moduleName
      };
  }
  
  function when(uri, module) {
      $routeProvider.when(uri, lazyModule(module));
  }
  
  var lazy = angular.module('ngLazy', ['ngRoute']);
  
  lazy.config(['$routeProvider', function($routeProvider_) {
      $routeProvider = $routeProvider_;
  }]).run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function($routeChangeSuccess, next, last) {
      //Bind to routeChangeSuccess so we can invoke the template function (in the case of late binding)
      if (next && next.locals && angular.isFunction(next.locals.$template)) {
        next.locals.$template = next.locals.$template();
        console.log("Resolved late binding for template");
      }
    });
  }]);
  
  lazy.provider('$lazyRoute', function() {
      this.when_lazy = when;
      this.when = $routeProvider.when;
      this.otherwise = $routeProvider.otherwise;
      this.$get = $routeProvider.$get;
  });
  
  return lazy;
}));