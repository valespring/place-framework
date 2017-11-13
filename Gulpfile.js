// Constants
const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');
const taskDir = './gulp-tasks/';
const proj = require('./gulp-config');
const plugins = require('gulp-load-plugins')();
const critical = require('critical');

// Log out available plugins
console.log(plugins);

// Load Tasks
gulp.task('scss', require( taskDir + 'scss')(gulp, proj, plugins));
gulp.task('scripts', require( taskDir + 'scripts')(gulp, proj, plugins));
gulp.task('iconfont', require( taskDir + 'iconfont')(gulp, proj, plugins));

// Set Tasks
gulp.task('default', ['scss', 'scripts']);
gulp.task('crit', ['critical']);
gulp.task('js', ['scripts']);
gulp.task('icons', ['iconfont']);
gulp.task('refresh', ['icons', 'scss', 'scripts']);
gulp.task('critical', ['default'], function (cb) {
	critical.generate({
	    inline: true,
	    base: './',
	    src: proj.critical.index.src,
	    dest: proj.critical.index.dest,
	    minify: true,
	    width: 1300,
	    height: 900
	});
})

// Watch
gulp.task('watch', function() {
  gulp.watch(proj.watch.scss, ['scss']);
});