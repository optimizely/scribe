var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    paths        = require('../../config').paths;

gulp.task('browser-sync', function() {
  browserSync({
    notify: {
      styles: [paths.bsyncCSS]
    },
    server: {
      baseDir: paths.build
    },
    port: 3020
  });
});
