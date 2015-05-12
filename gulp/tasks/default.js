var gulp = require('gulp');

gulp.task('default', [
  'build',
  'assets',
  'sass',
  'browser-sync',
  'watch'
]);