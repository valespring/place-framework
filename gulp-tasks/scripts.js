module.exports = function ( gulp, config, $ ) {

	// Task Variables
	var task = {
		src: config.source.js,
		dest: config.dist.js,
		name: config.tag + '.helpers.js'
	};

	// Scripts to compile
	var scripts =  {
		helpers: [
			task.src + "vendor/modernizr.js",
			task.src + "vendor/viewport.js",
			task.src + "vendor/responsive-comments.js"
		]
	};

	// Task Run
	return function () {
		gulp.task('scripts', function () {
		   	gulp.src( scripts.helpers )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
		   		.pipe($.concat( task.name ))
		   		.pipe($.if( config.production, $.uglify()) )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		      	.pipe(gulp.dest( task.dest ));
		});
	};
}
