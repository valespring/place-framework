module.exports = function ( gulp, config, $ ) {

	// Task Variables
	var task = {
		all: config.source.scss + config.master + ".scss",
		fixed: config.source.scss + config.master + "-fixed.scss"
	};

	// Task Run
	return () => {
		gulp.task('scss', function () {
		    gulp.src( task.all )
			    .pipe($.plumber(function (error) {
	                $.util.log(error.message);
	                this.emit('end')
	            }))
	            .pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
	            .pipe($.sass({
	            	indentType: 'space',
	            	outputStyle: 'expanded'
	            }))
	            .pipe($.autoprefixer({
		            browsers: config.pkg.browserslist
		        }))
		    	.pipe($.if( config.production, $.cleanCss({
		    		level: {
    					1: {
		    				specialComments: 'none'
	    				}
    				}
		    	})) )
			    .pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		        .pipe(gulp.dest( config.dist.css ))
	        gulp.src( task.fixed )
			    .pipe($.plumber(function (error) {
	                $.util.log(error.message);
	                this.emit('end')
	            }))
	            .pipe($.if( config.sourcemaps, $.sourcemaps.init()) )
	            .pipe($.sass({
	            	indentType: 'space',
	            	outputStyle: 'expanded'
	            }))
	            .pipe($.autoprefixer({
		            browsers: config.pkg.browserslist
		        }))
		    	.pipe($.if( config.production, $.cleanCss({
		    		level: {
    					1: {
		    				specialComments: 'none'
	    				}
    				}
		    	})) )
			    .pipe($.if( config.sourcemaps, $.sourcemaps.write()) )
		        .pipe(gulp.dest( config.dist.css ))
		})
	}
}