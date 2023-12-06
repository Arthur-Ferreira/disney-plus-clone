const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


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

function scriptsMin() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}


exports.default = gulp.parallel(stylesMin, imgMin, scriptsMin);

exports.watch = function () {
  gulp.watch('./src/sass/*.scss', gulp.parallel(stylesMin))
  gulp.watch('./src/scripts/*.js', gulp.parallel(scriptsMin))
}