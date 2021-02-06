var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const babel = require('gulp-babel');

var paths = {
    scripts: {
        src: 'javascript/**/*.js',
        dst: 'js',
    }
  };

function createMin(){
    return gulp.src(paths.scripts.src)
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(uglify())
        .pipe(concat(process.env.FILENAME_MIN))
        .pipe(gulp.dest(paths.scripts.dst));
}

function createApp(){
    return gulp.src(paths.scripts.src)
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(concat(process.env.FILENAME_CONCAT))
        .pipe(gulp.dest(paths.scripts.dst));

}

function watch(cb){
    gulp.watch(paths.scripts.src, gulp.series(createMin, createApp));
  cb();
}


exports.watch = watch;
exports.build = gulp.series(createMin, createApp);
exports.default = gulp.series(createMin, createApp, watch);