var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const babel = require('gulp-babel');
var del = require('del');

var paths = {
    scripts: {
      srcBable: 'webroot/js/**/*.js',
      destBable: 'webroot/bable/',
      srcUglify: 'webroot/bable/**/*.js',
      destUglify: 'webroot/min/',
      srcConcat: 'webroot/min/**/*.js',
      destConcat: 'webroot/minjs', 
      watch:'webroot/js/**/*.js'
    }
  };

function clean() {
    return del([ paths.scripts.destBable, paths.scripts.destUglify, 'webroot/js/all.js' ]);
}

function cleanBable() {
  return del([ paths.scripts.destBable ]);
}

function cleanUglify() {
  return del([ paths.scripts.destUglify ]);
}

function doBable(){
    return gulp.src(paths.scripts.srcBable)
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest(paths.scripts.destBable));
}

function doUglify() {
    return gulp.src(paths.scripts.srcUglify)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.destUglify));
}

function doConcat(){
  return gulp.src(paths.scripts.srcConcat)
  .pipe(concat('all.js'))
  .pipe(gulp.dest(paths.scripts.destConcat));
}

function watch(){
  return gulp.watch(paths.scripts.watch, gulp.series(doBable, doUglify, cleanBable, doConcat, cleanUglify));
}

exports.clean = clean;
exports.cleanBable = cleanBable;
exports.cleanUglify = cleanUglify;
exports.bable = doBable;
exports.uglify = doUglify;
exports.concat = doConcat;
exports.build = gulp.series(doBable, doUglify, cleanBable, doConcat, cleanUglify);
exports.watch = watch;
exports.default = gulp.series(doBable, doUglify, cleanBable, doConcat, cleanUglify, watch);