var gulp = require('gulp'),
    sass = require('gulp-sass'),
    
	
gulp.task('default', function() {
   gulp.start('scss', 'run');
});

gulp.task('scss', function() {
   return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('run', function() {
  // place code for your default task here
});