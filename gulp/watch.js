
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

module.exports = function (options) {
    gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
    gulp.watch('frontend/assets/**', gulp.series('assets'));
    gulp.watch(['frontend/pages/**', 'frontend/layout/**'], gulp.series('twig'))
};

