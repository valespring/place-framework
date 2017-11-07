module.exports = function ( gulp, config, $ ) {

	// Task Variables
	var task = {
		src: config.source.js,
		dest: config.dist.js
	};

	// Scripts to compile
	var scripts =  {
		enhance: {
			src: task.src + "vendor/enhance.js",
			name: config.tag + '.enhance.js'
		},
		helpers: {
			src: [
				task.src + "vendor/modernizr.js",
				task.src + "vendor/viewport.js",
				task.src + "vendor/responsive-comments.js"
			],
			name: config.tag + '.helpers.js'
		}
	};

	// Task Run
	return () => {
		gulp.task('scripts', function () {
			gulp.src( scripts.enhance.src )
				.pipe($.if( config.production, $.uglify()) )
				.pipe($.concat( scripts.enhance.name ))
				.pipe(gulp.dest( task.dest ));
		   	gulp.src( scripts.helpers.src )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
		   		.pipe($.concat( scripts.helpers.name ))
		   		.pipe($.if( config.production, $.uglify()) )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		      	.pipe(gulp.dest( task.dest ));
		})
	}
}