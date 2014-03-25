({
  appDir : "./www",
  dir : './build/minified',
  baseUrl: 'js',
  paths : {
    jquery : "empty:",
    angular : "empty:",
    'angular-sanatize' : "empty:",
    'angular-resource' : "empty:",
    'angular-route' : "empty:",
    'text': 'lib/text'
  },
  modules : [ {
    name : "root/app"
  }, {
    name : "modules/lazy-image/module",
    exclude: [ "text" ]
  }, {
    name : "modules/lazy-text/module",
    exclude: [ "text" ]
  }],
  optimize : 'uglify2',
  fileExclusionRegExp : /^\./,
  optimizeCss : 'standard',
  removeCombined : true,
  preserveLicenseComments : false
})