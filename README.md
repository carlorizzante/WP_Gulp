# WP_Gulp
Kickass configuration for Gulp with WordPress.

## Versioning
See package.json.

Gulp configuration and logic are contained in gulp.config.js and gulpfile.js. For an example on how to integrate Foundation in your theme visit [MilanoWP](http://milanowp.com).

### Repository
https://github.com/carlorizzante/wpgulp

## Quick start
WP Gulp is designed to give you a kickstart when developing themes for WordPress with Sass and other framework like Foundation. It assumes that source files are in src/... and production files in public/...

You'll find a src/... folder as template.

You can further configure Gulp editing the file gulp.config.js. To install Gulp please visit [GulpJS](http://gulpjs.com/).

NodeJS is required to run Gulp. To install NodeJS please visit [NodeJS](https://nodejs.org).

## What comes with WP Gulp?
WP Gulp comes pre-baked with a series of great features:

- Support for ES6 though Babel
- Support for Foundation and Sass
- JSHint, PHPlint, and further validation on Sass and CSS files.
- Support for LiveReload
- Autoprefixer for CSS and browser vendors
- Sourcemaps
- And some more... ;)

## Getting Started With Gulp
- Install [NodeJS](https://nodejs.org) and [GulpJS](http://gulpjs.com/)
- Open the Terminal at your theme folder
- Run "npm install"
- Run "gulp" to confirm everything is working

## A note about Babel and ES6
For Babel to compile ES6 into old plain Javascript (old browser compatibility) you'll need to preserve the file .babelrc (note the dot at the beginning of the file name). Files that starts with a dot are usually not displayed in Finder or File Manager. To easily display and edit files that start with a dot you'll need a code editor (Atom, Sublime Text, etc).

## Git and .gitignore
Similarly to Babel and .babelrc, if you'd like to keep track of you development progress via Git, do not forget .gitignore ;)
