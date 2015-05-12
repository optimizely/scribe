var gulp        = require('gulp')
    fm          = require('front-matter'),
    data        = require('gulp-data'),
    wrap        = require('gulp-wrap'),
    frontMatter        = require('gulp-front-matter'),
    template    = require('gulp-template'),
    folders = require('gulp-folders'),
    path        = require('path')
    del         = require('del'),
    frontMatter = require('gulp-front-matter'),
    md          = require('gulp-remarkable');
    notify      = require('gulp-notify'),
    folders = require('gulp-folders'),
    pathToFolder = 'content',
    swig        = require('gulp-swig'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    changed     = require('gulp-changed'),
    reload      = browserSync.reload,
    toc         = require('gulp-toc'),
    replace     = require('gulp-replace'),
    fm          = require('front-matter'),
    data        = require('gulp-data'),
    wrap        = require('gulp-wrap'),
    path        = require('path'),
    opts        = {
      setup: function(swig) {
        swig.setDefaults({
          cache: false,
          loader: swig.loaders.fs(__dirname + '/includes/') // Set partial path root.
        });
      }
};


gulp.task('default', folders(pathToFolder, function(folder) {
    return gulp.src(path.join(pathToFolder, folder, '*.md'))
      .pipe(frontMatter({
        property: 'data'
      }))
      .pipe(swig(opts))
      .pipe(replace(/\[\[\/\]\]/gi, '</div>'))  // [[/]] == </div>
      .pipe(replace(/\[\[(.*)\]\]/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
      .pipe(md({
        preset: 'full',
        remarkableOptions: {
          html: true
        }
      }))
      .pipe(wrap({
        src: 'templates/'+folder+'.html'
      }))
      .pipe(swig(opts))
      .pipe(toc({
        // Overrides the default method of building IDs in the content.
        header: '<h<%= level %> id="<%= anchor %>"><%= header %></h<%= level %>>',
        tocMax: 2,
        anchorMax: 2
      }))
      .pipe(gulp.dest('build/' + folder));
}));