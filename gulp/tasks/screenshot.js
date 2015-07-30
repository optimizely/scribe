var gulp = require('gulp');
var localScreenshots = require('gulp-local-screenshots');

gulp.task('screenshot', function () {
  gulp.src('./build/**/*.html')
  .pipe(localScreenshots({
    server: false,
    port: 3020,
    type: 'png'
   }))
  .pipe(gulp.dest('./screens/'));
});