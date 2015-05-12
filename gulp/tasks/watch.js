var gulp    = require('gulp'),
    paths   = require('../../config').paths;

gulp.task('watch', function() {
    gulp.watch(paths.scss      + '**/*.scss', ['sass']);
    gulp.watch(paths.content   + '**/*.md',   ['build']);
    gulp.watch(paths.templates + '**/*.html', ['build']);
    gulp.watch(paths.includes  + '**/*.html', ['build']);
    gulp.watch(paths.assets    + '**/*',      ['assets']);
});
