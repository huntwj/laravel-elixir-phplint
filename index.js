'use strict';

var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var phplint = require('gulp-phplint');

Elixir.extend('phplint', function(src, options) {
    var paths = new Elixir.GulpPaths()
    .src(src || [
        './app/**/*.php',
        './test/**/*.php'
    ]);

    var notify = new Elixir.Notification();

    var onError = function (err) {
        notify.error(err, 'PHPLint Failed');
        this.emit('end');
    };

    new Elixir.Task('phplint', function () {
        this.log(paths.src);
        return gulp.src(paths.src.path)
          .pipe(phplint('', options || {skipPassedFiles: true}))
          .pipe(phplint.reporter('fail'))
          .on('error', onError);
      }).watch(paths.src.path);
});
