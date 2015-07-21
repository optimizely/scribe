// Variables for app.

// Paths are relative because gulp.watch will not fire on new files
// if they are absolute, e.g, './scss'.

var paths = {
  scss: 'scss/',
  content: 'content/',
  includes: 'includes/',
  assets: 'assets/',
  build: 'build/',
  templates_pages: 'templates/pages/',
  templates_objects: 'templates/objects/',
  built : {
    assets: 'build/assets/',
    css: 'build/assets/css/'
  }
};

module.exports = {
  paths: paths
}
