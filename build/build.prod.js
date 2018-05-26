var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var through = require('through2');

var replaceRem2Px = function () {
    function fn(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(createError(file, 'Streaming not supported'));
        }

        let text = file.contents.toString();

        if (/\d*\.?\d+rem/.test(text)) {
            text = text.replace(/(\d*\.?\d+)rem/g, function (match, m1) {
                return parseInt(m1 * 50) + 'px';
            });
        }

        file.contents = new Buffer(text);
        callback(null, file);
    }

    return through.obj(fn);
};

gulp.task('css:base', function () {
    gulp.src('../src/styles/base.less')
        .pipe(require('gulp-less')())
        .pipe(cleanCss())
        .pipe(rename('hui.base.css'))
        .pipe(gulp.dest('../dist'));
});

gulp.task('css:hui', function () {
    gulp.src('../dist/hui.rem.css')
        .pipe(require('ydui-rem2px')(50))
        .pipe(cleanCss())
        .pipe(rename('hui.px.css'))
        .pipe(gulp.dest('../dist'));
});

gulp.task('js:hui', function () {
    gulp.src('../dist/hui.rem.js')
        .pipe(replaceRem2Px())
        .pipe(rename('hui.px.js'))
        .pipe(gulp.dest('../dist'));
});

gulp.task('flexible', function () {
    gulp.src('../src/hui.flexible.js')
        .pipe(require('gulp-uglify')())
        .pipe(gulp.dest('../dist'));
});

gulp.task('default', ['css:base', 'css:hui', 'js:hui', 'flexible']);
