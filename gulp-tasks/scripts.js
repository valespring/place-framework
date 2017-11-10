module.exports = function ( gulp, config, $ ) {

	// Task Variables
	var task = {
		src: config.source.js,
		dest: config.dist.js
	};

	// Scripts to compile
	var scripts =  {
		main: {
			src: [
				task.src + "vendor/modernizr.js",
				task.src + "vendor/viewport.js",
				task.src + "vendor/responsive-comments.js"
			],
			name: config.tag + '.helpers.js'
		},
		lte8: {
			src: [
				task.src + "vendor/modernizr.js",
				task.src + "vendor/viewport.js",
				task.src + "vendor/matchmedia.js",
				task.src + "vendor/responsive-comments.js"
			],
			name: config.tag + '-lte8.helpers.js'
		}
	};

	// Task Run
	return () => {
		gulp.task('scripts', function () {
		   	gulp.src( scripts.main.src )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
		   		.pipe($.concat( scripts.main.name ))
		   		.pipe($.if( config.production, $.uglify()) )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		      	.pipe(gulp.dest( task.dest ));
      		gulp.src( scripts.lte8.src )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
		   		.pipe($.concat( scripts.lte8.name ))
		   		.pipe($.if( config.production, $.uglify()) )
		   		.pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		      	.pipe(gulp.dest( task.dest ));
		})
	}
}