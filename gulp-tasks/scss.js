module.exports = function ( gulp, config, $ ) {

	// Task Variables
	var task = {
		src: config.source.scss + config.master + ".scss"
	};

	// Task Run
	return function () {
		gulp.task('scss', function () {
		    gulp.src( task.src )
			    .pipe($.plumber(function (error) {
	                $.util.log(error.message);
	                this.emit('end');
	            }))
	            .pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
	            .pipe($.sass({
	            	indentType: 'space',
	            	outputStyle: 'expanded'
	            }))
	            .pipe($.autoprefixer({
		            browsers: config.pkg.browserslist
		        }))
		    	.pipe($.if( config.production, $.cleanCss()) )
			    .pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		        .pipe(gulp.dest( config.dist.css ))
		});
	};
}