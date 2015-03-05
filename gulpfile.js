var gulp = require('gulp');
var marked = require('gulp-marked');
var frontMatter = require('gulp-front-matter');
var fileinclude = require('gulp-file-include');
var wrap = require("gulp-wrap");

gulp.task('default', function() {
  gulp.src('content/page.md')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './partials/'
    }))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(marked())
    .pipe(wrap({
      src: 'templates/template.html'
    }))
    .pipe(gulp.dest('build'));
});