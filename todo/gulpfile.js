var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');


var src = "./src",
    build = './build';

gulp.task('js', function(){
    return gulp.src(src + '/app/app.js')
    .pipe(
        browserify({
            transform: 'reactify',
            debug: true
        })
    )
    .on('error', function(err){
        console.log('error: ', err); 
    })
    .pipe(
        gulp.dest(build + '/app')
    )
});

gulp.task('copying:html', function(){
    return gulp.src(src + '/**/*.html').pipe(gulp.dest(build));
});
gulp.task('copying:css', function(){
    return gulp.src(src + '/css/*.html').pipe(gulp.dest(build));
});

gulp.task('watch', function(){
    gulp.watch(src + '/**/*.js', ['js']);
    gulp.watch(src + '/**/*.html', ['copying:html']);
    gulp.watch(src + '/**/*.css', ['copying:css']);
});

gulp.task('webserver', function(){
    return gulp.src(build + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['copying:html', 'copying:css', 'js', 'webserver', 'watch'])