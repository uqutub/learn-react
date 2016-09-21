var gulp = require('gulp'),
    browserify = require('browserify'),
    minifyify = require('minifyify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream')
webserver = require('gulp-webserver');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var src = "./src",
    build = './build';

gulp.task('js', function () {
    var bundler = browserify(src + '/index.js')
        .transform('babelify', {
            presets: ['es2015', 'react'],
            ignore: /(bower_components)|(node_modules)/
        });

    if (IS_PRODUCTION) {
        bundler = bundler.plugin('minifyify', {
            map: false,
            compress: {
                drop_debugger: true,
                drop_console: true
            }
        })
    }

    bundler.bundle().on('error', function (err) {
        console.error('[browserify error]', err.message);
    }).pipe(source('bundle.js'))
        .pipe(gulp.dest(build + '/app'));
});

gulp.task('copying:html', function () {
    return gulp.src(src + '/**/*.html').pipe(gulp.dest(build));
});
gulp.task('copying:css', function () {
    return gulp.src(src + '/css/*.html').pipe(gulp.dest(build));
});

gulp.task('watch', function () {
    gulp.watch(src + '/**/*.js', ['js']);
    gulp.watch(src + '/**/*.html', ['copying:html']);
    gulp.watch(src + '/**/*.css', ['copying:css']);
});

gulp.task('webserver', function () {
    return gulp.src(build + '/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['copying:html', 'copying:css', 'js', 'webserver', 'watch'])