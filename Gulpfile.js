// Constants
const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');
const taskDir = './gulp-tasks/';
const proj = require('./gulp-config');
const plugins = require('gulp-load-plugins')();

// Log out available plugins
console.log(plugins);

// Load Tasks
gulp.task('scss', require( taskDir + 'scss')(gulp, proj, plugins));
gulp.task('scripts', require( taskDir + 'scripts')(gulp, proj, plugins));
gulp.task('iconfont', require( taskDir + 'iconfont')(gulp, proj, plugins));

// Set Tasks
gulp.task('default', ['scss', 'scripts']);
gulp.task('js', ['scripts']);
gulp.task('icons', ['iconfont']);
gulp.task('refresh', ['icons', 'scss', 'scripts']);

gulp.task('config', function() {
    return gulp.src([
    	'scss/_config-base.scss'])
    	.pipe(gulp.dest('scss/something.scss'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(proj.watch.scss, ['scss']);
});