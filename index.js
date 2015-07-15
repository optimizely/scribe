var gulp  = require('gulp')
var shell = require('gulp-shell')

module.exports = function() {
  gulp.task('default', shell.task('--marketingCompile'))
};
