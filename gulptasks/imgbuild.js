var gulp = require('gulp'),
    assets      = require('./_config').build,
    source      = require('./_config').source,
    imagemin    = require('gulp-imagemin');
    debug    = require('gulp-debug');

var config = {
    src  : [ source.img + '/*.jpg', source.img + '/*.jpeg', source.img + '/*.png' ],
    dest : assets.img
};


gulp.task('img_build', function () {
    return gulp.src(config.src)
        .pipe(debug({title:'images'}))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
});