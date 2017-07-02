var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
      .pipe(sass())
      .on('error', swallowError)
      .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .on('error', swallowError)
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'watch', 'scripts']);
