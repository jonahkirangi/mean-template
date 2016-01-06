var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('public/styles/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/styles'));
});

gulp.task('watch', function() {
  gulp.watch('public/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
