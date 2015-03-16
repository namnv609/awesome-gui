var gulp = require('gulp'),
    less = require('gulp-less'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('less', function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
});

gulp.task('browserify', function() {
    var bundler = browserify('./src/js/App.js', {basedir: __dirname});
    bundler.transform(reactify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less', 'browserify']);