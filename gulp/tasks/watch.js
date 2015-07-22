var gulp    = require('gulp'),
    paths   = require('../../config').paths;

gulp.task('watch', function() {
    gulp.watch(paths.scss              + '**/*.scss', ['sass']);
    gulp.watch(paths.content           + '**/*.md',   ['reload']);
    gulp.watch(paths.templates_pages   + '**/*.html', ['reload']);
    gulp.watch(paths.templates_objects + '**/*.html', ['reload']);
    gulp.watch(paths.includes          + '**/*.html', ['reload']);
    gulp.watch(paths.assets            + '**/*',      ['assets']);
});
