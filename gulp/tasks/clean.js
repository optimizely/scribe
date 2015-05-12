var gulp  = require('gulp')
    del   = require('del'),
    paths = require('../../config').paths;

gulp.task('clean', function (cb) {
  del(paths.build, cb);
});
