var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    paths        = require('../../config').paths;

var bsyncStyles = "position:fixed;top:5px;right:5px;width:10px;height:10px;background:#c82144;border-radius:50%;overflow:hidden;color:#c82144;z-index:99999";

gulp.task('browser-sync', function() {
  browserSync({
    notify: {
      styles: [bsyncStyles]
    },
    server: {
      baseDir: paths.build
    }
  });
});
