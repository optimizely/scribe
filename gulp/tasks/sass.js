var gulp         = require('gulp')
    paths        = require('../../config').paths,
    handleErrors = require('../utils/errors'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

function swallowError(error) {
  this.emit('end');
}

function reportError(error) {
  notify.onError().apply(this, arguments);
  this.emit('end');
}

gulp.task('sass', function() {
  gulp.src(paths.scss + '**/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        require('lego').includePath
      ]
    }))
    .pipe(gulp.dest(paths.built.css))
    .on('error', reportError)
    .pipe(reload({stream:true}));
});
