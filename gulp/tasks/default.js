var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence('recommended',
    ['build', 'assets','sass','watch'],
    'browser-sync',
    callback);
});

gulp.task('marketing', function(callback) {
  runSequence('recommended',
    ['build', 'assets','sass'],
    callback);
});

gulp.task('reload', function(callback) {
  runSequence('recommended',
    ['build'],
    callback);
});