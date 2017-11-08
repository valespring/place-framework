module.exports = function ( gulp, config, $ ) {

	const critical = require('critical');

	return () => {
		//gulp.task('critical', function () {
		gulp.task('critical', ['scss'], function (cb) {

			console.log("crit");

			critical.generate({
			    inline: true,
			    base: '/',
			    src: 'index.html',
			    dest: 'index-dest.html',
			    minify: true,
			    width: 1300,
			    height: 900
			});
		})
	}
}