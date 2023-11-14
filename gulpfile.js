const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function stylesMin() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./build/styles'));
}

function imgMin() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


exports.default = gulp.parallel(stylesMin, imgMin);

exports.watch = function() {
  gulp.watch('./src/sass/*.scss', gulp.parallel(stylesMin))
}