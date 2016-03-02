var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    utils = require('./../gulp/utils.js');

module.exports = function(options){
    return gulp.src(options.src, {since: gulp.lastRun('assets:svg')})
        .pipe($.plumber({errorHandler: utils.errorHandler('Error in assets:svg task')}))
        .pipe($.svgSprite({
            mode: {
                css: {
                    spacing: {
                        "padding": 5
                    },
                    dest: ".",
                    layout: "vertical",
                    sprite: "sprite.svg",
                    prefix: "%%",
                    dimensions: true,
                    bust: false,
                    render: {
                        scss: {
                            dest: "_sprite.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(function(file){
            return file.extname !== '.svg'? './frontend/styles/core': options.dst + 'assets/images';
        }))
};

