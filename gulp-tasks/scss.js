module.exports = function ( gulp, config, plugins ) {

	// Task Variables
	var task = {
		src: config.source.scss + config.master + ".scss"
	};

	// Task Run
	return function () {
		gulp.task('scss', function () {
		    gulp.src( task.src )
			    .pipe(plugins.plumber(function (error) {
	                plugins.util.log(error.message);
	                this.emit('end');
	            }))
	            .pipe(plugins.if( config.sourcemaps, plugins.sourcemaps.init()) )
	            .pipe(plugins.sass({
	            	indentType: 'space',
	            	outputStyle: 'expanded'
	            }))
	            .pipe(plugins.autoprefixer({
		            browsers: config.pkg.browserslist
		        }))
		    	.pipe(plugins.if( config.production, plugins.cleanCss()) )
			    .pipe(plugins.if( config.sourcemaps, plugins.sourcemaps.write()) )
		        .pipe(gulp.dest( config.dist.css ))
		});
	};
}