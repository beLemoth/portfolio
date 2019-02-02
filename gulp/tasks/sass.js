'use strict';

module.exports = function() {

    $.gp.sass.compiler = require ('node-sass');

    $.gulp.task('sass', function () {
        return $.gulp.src('./source/style/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass.sync()
            .on('error', $.gp.notify.onError({
                title: 'Style'
            })))
            .pipe($.gp.autoprefixer({
                browsers: $.config.autoprefixerConfig
            }))
            .pipe($.gp.csso())
            .pipe($.gp.cssUnit({
                type : 'px-to-rem',
                rootSize : 16
            }))
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root+'/assets/css'))
            .pipe($.browserSync.stream());
    });
};