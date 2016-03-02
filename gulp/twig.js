
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    utils = require('./../gulp/utils.js');

module.exports = function(options){
    return gulp.src(options.src, {since: gulp.lastRun('twig')})
        .pipe($.plumber({errorHandler: utils.errorHandler('Error in twig task')}))
        .pipe($.twig({
            base: 'frontend/layout'
        }))
        .pipe(gulp.dest(options.dst));
};
