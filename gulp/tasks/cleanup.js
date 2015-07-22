var gulp  = require('gulp')
    del   = require('del'),
    paths = require('../../config').paths;

gulp.task('cleanup', function (cb) {
  del('./includes/tmp', cb);
});
