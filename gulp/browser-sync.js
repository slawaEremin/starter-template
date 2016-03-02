
var browserSync = require('browser-sync').create();

module.exports = function(options){
    browserSync.init({
        server: {
            baseDir: options.base
        }
    });

    browserSync.watch(options.watchSrc).on('change', browserSync.reload);
}