var gulp        = require('gulp')
    paths       = require('../../config').paths,
    changed     = require('gulp-changed'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,

gulp.task('assets', function() {
  gulp.src(paths.assets + '**/*')
    .pipe(changed(paths.built.assets))
    .pipe(gulp.dest(paths.built.assets))
    .pipe(reload({stream:true}));
});
