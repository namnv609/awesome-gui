var srcDir = './src',
    destDir = './dist',
    configs = {
        less : {
            src: srcDir + '/less',
            dest: destDir + '/css',
            get watch() {
                return this.src + '/**.less'
            }
        },
        sass : {
            src: srcDir + '/sass',
            dest: destDir + '/css',
            get watch() {
                return this.src + '/**.sass'
            }
        },
        jsx : {
            src: srcDir + '/jsx',
            dest: destDir + '/js',
            get watch() {
                return this.src + '/**/*.js'
            }
        },
        compass: {
            src: srcDir + '/sass',
            dest: destDir + '/css',
            configFile: srcDir + '/sass/config.rb',
            get watch() {
                return [this.src + '/**.sass']
            }
        }
    },
    gulp = require('gulp'),
    less = require('gulp-less'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    // sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    source = require('vinyl-source-stream');

gulp.task('less', function() {
    return gulp.src(configs.less.src + '/*.less')
        .pipe(less())
        .pipe(gulp.dest(configs.less.dest));
});

gulp.task('jsx', function() {
    var bundler = browserify(configs.jsx.src + '/App.js', {basedir: __dirname});
    bundler.transform(reactify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('app.js'))
        .pipe(gulp.dest(configs.jsx.dest));
});

/** For SASS. Uncomment if needed */
// gulp.task('sass', function() {
//     gulp.src([
//             configs.sass.src + '/*.sass',
//             '!' + configs.sass.src + '/color_palette.sass'
//         ])
//         .pipe(sass({
//             indentedSyntax: true
//         }))
//         .pipe(gulp.dest(configs.sass.dest));
// });

/** For compass. Uncomment if needed */
gulp.task('compass', function() {
    gulp.src([
            configs.compass.src + '/*.sass',
            '!' + configs.compass.src + '/color_palette.sass'
        ])
        .pipe(compass({
            config_file: configs.compass.configFile,
            sass: configs.compass.src,
            css: configs.compass.dist
        }))
        .pipe(gulp.dest(configs.compass.dest));
});

gulp.task('watch', function() {
    gulp.watch(configs.less.watch, ['less']);
    // gulp.watch(configs.sass.watch, ['sass']);
    gulp.watch(configs.jsx.watch, ['jsx']);
    gulp.watch(configs.compass.watch, ['compass']);
});

gulp.task('default', ['less', 'jsx', 'compass', 'watch']);