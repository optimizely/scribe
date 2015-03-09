var gulp        = require('gulp')
    frontMatter = require('gulp-front-matter'),
    wrap        = require('gulp-wrap'),
    replace     = require('gulp-replace'),
    del         = require('del'),
    swig        = require('gulp-swig'),
    marked      = require('swig-marked'),
    path        = require('path'),
    opts        = {
      setup: function(swig) {
        marked.useTag(swig, 'markdown'); // Use markdown inside markdown tags.
        swig.setDefaults({
          loader: swig.loaders.fs(__dirname + '/partials/') // Set partial path.
        });
      }
};

gulp.task('build', function() {
  gulp.src('content/page.html')
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(swig(opts))
    .pipe(replace(/<p>\[\[\/(.*)\]\]<\/p>/gi, '</div>'))  // [[/tag]] == </div>
    .pipe(replace(/<p>\[\[(.*)\]\]<\/p>/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
    .pipe(wrap({
      src: 'templates/template.html'
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('assets', function() {
  gulp.src('assets/**/')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('clean', function (cb) {
  del('./build/', cb);
});

gulp.task('default', ['build','assets']);
