angular-modular-example
=======================
Modularized Angular example project, featuring lazy loading on route change.  
All scripts assume that you have already installed nodejs.

Web Server Scripts
=======================
Running the web-server against non-minified source is trivial
-----------------------
node scripts\web-server.js

Running the web-server against minified source requires a build
-----------------------
First install require using npm: 
npm -g install require

Build the minified souces
r.js.cmd -o build.js

Run the minified server
node scripts\web-server-minified.js
