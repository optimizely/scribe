var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// var gulp        = require('gulp')
//     wrap        = require('gulp-wrap'),
//     frontMatter = require('gulp-front-matter'),
//     folders     = require('gulp-folders'),
//     del         = require('del'),
//     md          = require('gulp-remarkable');
//     notify      = require('gulp-notify'),
//     swig        = require('gulp-swig'),
//     sass        = require('gulp-sass'),
//     browserSync = require('browser-sync'),
//     changed     = require('gulp-changed'),
//     reload      = browserSync.reload,
//     toc         = require('gulp-toc'),
//     replace     = require('gulp-replace'),
//     path        = require('path');

// var swigOps = {
//   setup: function(swig) {
//     swig.setDefaults({
//       cache: false,
//       loader: swig.loaders.fs(__dirname + '/includes/') // Set partial path root.
//     });
//   }
// };

// var pathToFolder = 'content';


// function swallowError(error) {
//   this.emit('end');
// }

// function reportError(error) {
//   notify.onError().apply(this, arguments);
//   this.emit('end');
// }

// // Main task runs over each content directory, mapping to same-named template.
// gulp.task('build', folders(pathToFolder, function(folder) {
//   return gulp.src(path.join(pathToFolder, folder, '*.md'))
//     .pipe(frontMatter({
//       property: 'data'
//     }))
//     .pipe(swig(swigOps)) // Pulls in local includes for blockquotes, figures, etc.
//     .pipe(replace(/\[\[\/\]\]/gi, '</div>'))  // [[/]] == </div>
//     .pipe(replace(/\[\[(.*)\]\]/gi, '<div class="$1">'))  // [[tag]] == <div class="tag">
//     .pipe(md({
//       preset: 'full',
//       remarkableOptions: {
//         html: true
//       }
//     }))
//     .pipe(wrap({
//       src: 'templates/'+folder+'.html'
//     }))
//     .pipe(swig(swigOps)) // Operates on template includes for header, footer, etc.
//     .pipe(toc({
//       // Overrides the default method of building IDs in the content.
//       header: '<h<%= level %> id="<%= anchor %>"><%= header %></h<%= level %>>',
//       tocMax: 2,
//       anchorMax: 2
//     }))
//     .pipe(gulp.dest('build/' + folder))
//     .pipe(reload({stream:true}));
// }));


// gulp.task('sass', function() {
//   gulp.src('scss/**/*.scss')
//     .pipe(sass({
//       errLogToConsole: true,
//       includePaths : [
//         require('lego').includePath
//       ]
//     }))
//     .pipe(gulp.dest('./build/assets/css/'))
//     .on('error', reportError)
//     .pipe(reload({stream:true}));
// });

// gulp.task('assets', function() {
//   gulp.src('assets/**/*')
//     .pipe(changed('./build/assets/'))
//     .pipe(gulp.dest('./build/assets/'))
//     .pipe(reload({stream:true}));
// });

// gulp.task('browser-sync', function() {
//   browserSync({
//     reloadDelay: 300,
//     notify: {
//         styles: [ "position:fixed;top:5px;right:5px;width:10px;height:10px;background:#c82144;border-radius:50%;overflow:hidden;color:#c82144;z-index:99999" ]
//     },
//     server: {
//       baseDir: [__dirname] + '/build/',
//     }
//   });
// });

// gulp.task('clean', function (cb) {
//   del('./build/', cb);
// });

// gulp.task('watch', function() {
//     gulp.watch('scss/**/*.scss', ['sass']);
//     gulp.watch('content/**/*.md', ['build']);
//     gulp.watch('templates/**/*.html', ['build']);
//     gulp.watch('includes/**/*.html', ['build']);
//     gulp.watch('assets/**/*', ['assets']);
// });

// gulp.task('default', ['build', 'assets', 'sass', 'browser-sync', 'watch']);
