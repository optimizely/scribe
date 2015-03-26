var gulp        = require('gulp')
    del         = require('del'),
    frontMatter = require('gulp-front-matter'),
    md          = require('gulp-remarkable');
    swig        = require('gulp-swig'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    toc         = require('gulp-toc'),
    replace     = require('gulp-replace'),
    wrap        = require('gulp-wrap'),
    path        = require('path'),
    opts        = {
      setup: function(swig) {
        swig.setDefaults({
          cache: false,
          loader: swig.loaders.fs(__dirname + '/includes/') // Set partial path root.
        });
      }
};

gulp.task('build', function() {
  gulp.src('content/**/*.md')
    .pipe(frontMatter({
      property: 'data',
      html: true
    }))
    .pipe(swig(opts))
    .pipe(replace(/\[\[\/\]\]/gi, '</div>'))  // [[/]] == </div>
    .pipe(replace(/\[\[(.*)\]\]/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
    .pipe(md({
      preset: 'commonmark'
    }))
    .pipe(wrap({
      src: 'templates/template.html'
    }))
    .pipe(toc({
      // Overrides the default method of building IDs in the content.
      header: '<h<%= level %> id="<%= anchor %>"><%= header %></h<%= level %>>',
      tocMax: 2,
      anchorMax: 2
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream:true}));
});

gulp.task('assets', function() {
  gulp.src('assets/**/')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('browser-sync', function() {
  browserSync({
    reloadDelay: 300,
    notify: {
        styles: [ "position:fixed;top:5px;right:5px;width:10px;height:10px;background:#c82144;border-radius:50%;overflow:hidden;color:#c82144;z-index:99999" ]
    },
    server: {
      baseDir: [__dirname] + '/build/',
    }
  });
});

gulp.task('clean', function (cb) {
  del('./build/', cb);
});

gulp.task('watch', function() {
    gulp.watch('content/**/*.md', ['build', 'assets']);
});

gulp.task('default', ['build', 'assets', 'browser-sync', 'watch']);
