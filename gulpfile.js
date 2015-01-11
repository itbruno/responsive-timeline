// Packages
var gulp = require("gulp"),
	sass = require("gulp-ruby-sass"),
	imagemin = require("gulp-imagemin"),
	del = require("del");

var fd = {
	styles: ['dev/sass/', 'assets/style/']
}

// Sass Task
gulp.task('compile-sass', function(){
	return gulp.src(fd.styles[0] + '*.scss')
		.pipe(sass({
			style: "compressed",
			noCache: true
		})).on('error', function(err) {
			console.log(err.message);
		})
		.pipe(gulp.dest(fd.styles[1]))
});

// Images Task
gulp.task('imagemin', function(){
	return gulp.src('dev/images/*')
	.pipe(imagemin({
		optimizationLevel: 7,
		progressive: true,
		interlaced: true	
	}))
	.pipe(gulp.dest('assets/images'))
});
// Clean Task
gulp.task('clean', function(cb) {
    del(['assets/style', 'assets/images'], cb)
});

gulp.task('default', ['clean'], function(){
	gulp.start('compile-sass', 'imagemin')
});

// Gulp Watch
gulp.task('watch', function(){
	gulp.watch('dev/sass/*.scss', ['compile-sass']);
	gulp.watch('dev/images', ['imagemin']);
})

// Exports
module.exports = gulp;