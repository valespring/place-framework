// Set Baseline
var config = {};

config.pkg = require('./package.json');
config.tag = config.pkg.name;
config.master = 'global';
config.sourcemaps = true;
config.production = false;

// Root Paths
config.source = "";
config.dist = config.source + "dist/";

// Specific Directories
config.source = {
  js: config.source + "js/",
  scss: config.source + "scss/",
  icons: config.source + "icons/",
};

config.dist = {
  js: config.dist + "js/",
  css: config.dist + "css/",
  icons: config.dist + "fonts/" + config.tag + "-icons/"
};

config.watch = {
	scss: config.source.scss + "**/*.scss",
	icons: config.source.icons + "svg/*.svg"
}

module.exports = config;
