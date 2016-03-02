
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    utils = require('./../gulp/utils.js');

module.exports = function (options) {
    return gulp.src(options.src, {base: 'frontend/styles'})
        .pipe($.plumber({errorHandler: utils.errorHandler('Error in styles task')}))
        .pipe($.if(options.isDev, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.if(options.isDev, $.sourcemaps.write()))
        .pipe(gulp.dest(options.dst))

}