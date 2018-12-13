// Watch

"use strict";
var gulp            = require('gulp'),
    config          = require('./_config');

const html_build        = require('./htmlbuild');
const fonts_build       = require('./fontsbuild');
const img_build         = require('./imgbuild');
const scss_build        = require('./scss');
const css_build         = require('./css');
const js_build         = require('./jsbuild');

gulp.task('watch', function(){
    gulp.watch(config.source.assets_css, gulp.series('css_build'));
    gulp.watch(config.source.scss, gulp.series('scss_build'));

    gulp.watch(config.source.html_src, gulp.series('html_build'));
    gulp.watch(config.source.fonts, gulp.series('fonts_build'));
    gulp.watch(config.source.img, gulp.series('img_build'));
    gulp.watch(config.source.js, gulp.series('js_build'));

});