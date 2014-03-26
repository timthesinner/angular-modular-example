angular-modular-example
=======================
Modularized Angular example project, featuring lazy loading on route change.  
AngularJS lazy loading has been enabled in: https://github.com/timthesinner/angular.js

All examples below assume that you have already installed nodejs.

Build Minified Modules
=======================
The following example works on Winblows, it assumes that npm has requirejs installed globally
 * npm -g install require
 * r.js.cmd -o build.js

Web Server Scripts
=======================
Run with non-minified source:
 * node scripts\web-server.js

Running with minified source requires a build:
 * node scripts\web-server-minified.js
