var gutil = require('gulp-util'),
    utils = {
        errorHandler: function (title) {
            return function (error) {
                gutil.log([
                    gutil.colors.bold.red(title || 'Error in ' + error.plugin),
                    '',
                    error.message,
                    ''
                ].join('\n'));

                // Run with `--beep`
                if (gutil.env.beep) {
                    gutil.beep();
                }

                // Keep gulp from hanging on this task
                this.emit('end');
            };
        }
    };


module.exports = utils;