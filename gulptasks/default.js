"use strict";
const gulp              = require('gulp');
const html_build        = require('./htmlbuild');
const fonts_build       = require('./fontsbuild');
const server            = require('./browsersync');
const img_build         = require('./imgbuild');
const scss_build        = require('./scss');
const css_build         = require('./css');
const js_build          = require('./jsbuild');
const watch             = require('./watch');

gulp.task('default', gulp.series ('clean','html_build','fonts_build','img_build','scss_build','css_build','js_build',gulp.parallel('server','watch')));