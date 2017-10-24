module.exports = function ( gulp, config, plugins ) {

	// Task Variables
	var task = {
		fontName: config.tag + '-icons',
		templatePath: config.source.icons + 'template.scss',
		targetPath: '../../../scss/type/_icons.scss',
		fontPath: '../../' + config.dist.icons,
		dest: config.dist.icons
	};

	// Task Run
	return function () {
		gulp.task('iconfont', function(){
			gulp.src( [config.watch.icons] )
			   	.pipe(plugins.iconfontCss({
			    	fontName: task.fontName,
			      	path: task.templatePath,
			      	targetPath: task.targetPath,
			      	fontPath: task.fontPath
			    }))
			    .pipe(plugins.iconfont({
			    	fontName: task.fontName,
			    	prependUnicode: true,
			    	formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
			    	normalize: true,
			    	fontHeight: 1000,
			    	ttfautohint: true
			    }))
			    .pipe(gulp.dest( config.dist.icons ));
		});
	};
}