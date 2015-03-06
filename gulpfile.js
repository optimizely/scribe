var gulp = require('gulp');
var marked = require('gulp-marked');
var frontMatter = require('gulp-front-matter');
var fileinclude = require('gulp-file-include');
var wrap = require("gulp-wrap");
var replace = require("gulp-replace");
var del = require("del");

gulp.task('build', function() {
  gulp.src('content/page.md')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './partials/'
    }))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(marked())
    // [[tag]] and [[/tag]] == <tag> and </tag>
    .pipe(replace(/<p>\[\[(.*)\]\]<\/p>/gi, "<$1>"))
    .pipe(wrap({
      src: 'templates/template.html'
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('assets', function() {
  gulp.src('assets/**/')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('clean', function (cb) {
  del('./build/', cb);
});

gulp.task('default', ['build','assets']);
