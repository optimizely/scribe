var gulp         = require('gulp')
    wrap         = require('gulp-wrap'),
    frontMatter  = require('gulp-front-matter'),
    folders      = require('gulp-folders'),
    md           = require('gulp-remarkable'),
    swig         = require('gulp-swig'),
    argv         = require('yargs').argv,
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    toc          = require('gulp-toc'),
    replace      = require('gulp-replace'),
    path         = require('path'),
    paths        = require('../../config').paths,
    handleErrors = require('../utils/handleErrors');

var headlessValue = (argv.headless === undefined) ? false : true;
var tocHeaders = '<h<%= level %> id="<%= anchor %>"><%= header %></h<%= level %>>';

var swigOps = {
  data: {
    headless: headlessValue
  },
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs(paths.includes) // Set partial path root.
    });
  }
};

gulp.task('recommended', folders(paths.content, function(folder, cb) {
  return gulp.src(path.join(paths.content, folder, '*.md'))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(wrap({
      src: paths.templates.objects+ 'recommended.html'
    }))
    .pipe(swig(swigOps)) // Operates on template includes for header, footer, etc.
    .on('error', handleErrors)
    .pipe(gulp.dest("./includes/tmp/" + folder + "_recommended"));
    cb(err);
}));


gulp.task('build', folders(paths.content, function(folder) {
  return gulp.src(path.join(paths.content, folder, '*.md'))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(swig(swigOps)) // Pulls in local includes for blockquotes, figures, etc.
    .pipe(replace(/\[\[\/\]\]/gi, '</div>'))  // [[/]] == </div>
    .pipe(replace(/\[\[(.*)\]\]/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
    .pipe(md({
      preset: 'full',
      remarkableOptions: {
        html: true
      }
    }))
    .pipe(wrap({
      src: paths.templates.pages + folder + '.html'
    }))
    .pipe(swig(swigOps)) // Operates on template includes for header, footer, etc.
    .pipe(toc({
      // Overrides the default method of building IDs in the content.
      header: tocHeaders,
      tocMax: 2,
      anchorMax: 2
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.build + folder))
    .pipe(reload({stream:true}));
}));


