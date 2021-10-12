const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('css/styles.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['css/styles.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);