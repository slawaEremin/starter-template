var gulp = require('gulp'),
    options = require('./gulp/config.js');

function loadTask(name, path, options){
    options = options || {};
    options.taskName = name;

    gulp.task(name, function(done){
        var task = require(path);
        return task(options, done);
    })
}

loadTask('twig', './gulp/twig.js', {
    src: 'frontend/pages/**/*.twig',
    dst: options.src
});

loadTask('styles', './gulp/styles.js', {
    src: ['frontend/styles/*.scss', 'frontend/styles/pages/*.scss'],
    dst: options.src + 'assets/css'
});

loadTask('scripts', './gulp/scripts.js', {
    target: 'frontend/scripts/pages/**/*.js',
    dst: options.src + 'assets/js'
});

loadTask('assets', './gulp/assets.js', {
    src: ['frontend/assets/**', '!frontend/assets/svg-sprite/**/*.*'],
    dst: options.src + 'assets/'
});

loadTask('assets:svg', './gulp/images.js', {
    src: 'frontend/assets/svg-sprite/**/*.svg',
    dst: options.src + 'assets/'
});


loadTask('clean', './gulp/clean.js', {
    src: options.src
});

loadTask('browser-sync', './gulp/browser-sync.js', {
    base: options.src,
    watchSrc: options.src + '**/*.*'
});

loadTask('watch', './gulp/watch.js', {
    base: options.src,
    watchSrc: options.src + '**/*.*'
});

gulp.task('prepare',
    gulp.series('clean', 'assets', 'assets:svg',
        gulp.parallel('styles', 'scripts', 'twig')
    )
);

gulp.task('dev', gulp.series('prepare', gulp.parallel('browser-sync', 'watch')));

gulp.task('build', gulp.series('prepare'));