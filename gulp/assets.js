var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    utils = require('./../gulp/utils.js');

module.exports = function(options){
    return gulp.src(options.src, {since: gulp.lastRun('assets')})
        .pipe($.plumber({errorHandler: utils.errorHandler('Error in assets task')}))
        .pipe(gulp.dest(options.dst))
};

