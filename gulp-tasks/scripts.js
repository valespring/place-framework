module.exports = function ( gulp, config, plugins ) {

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
		   		.pipe(plugins.if( config.sourcemaps, plugins.sourcemaps.init()) )
		   		.pipe(plugins.concat( task.name ))
		   		.pipe(plugins.if( config.production, plugins.uglify()) )
		   		.pipe(plugins.if( config.sourcemaps, plugins.sourcemaps.write()) )
		      	.pipe(gulp.dest( task.dest ));
		});
	};
}
