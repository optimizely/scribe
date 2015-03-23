var gulp        = require('gulp')
    del         = require('del'),
    frontMatter = require('gulp-front-matter'),
    md          = require('gulp-remarkable');
    swig        = require('gulp-swig'),
    replace     = require('gulp-replace'),
    wrap        = require('gulp-wrap'),
    path        = require('path'),
    opts        = {
      setup: function(swig) {
        swig.setDefaults({
          loader: swig.loaders.fs(__dirname + '/includes/') // Set partial path root.
        });
      }
};

gulp.task('build', function() {
  gulp.src('content/page.html')
    .pipe(frontMatter({
      property: 'data',
      html: true
    }))
    .pipe(swig(opts))
    .pipe(replace(/\[\[\/.*\]\]/gi, '</div>'))  // [[/tag]] == </div>
    .pipe(replace(/\[\[(.*)\]\]/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
    .pipe(md({
      preset: 'commonmark'
    }))
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

gulp.task('default', ['build', 'assets']);
