var gulp = require('gulp');

// Plugins
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

// Javascript linters and type checks
gulp.task('lint-js', function() {
    return gulp.src([
        'Gulpfile.js',
        'src/**/*.js',
        'test/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jscs());
});

// Minify
gulp.task('compress', function() {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist'));
});

// Task aliases
gulp.task('default', ['lint-js']);
gulp.task('deploy', ['lint-js', 'compress']);
