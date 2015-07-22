// Variables for app.

// Paths are relative because gulp.watch will not fire on new files
// if they are absolute, e.g, './scss'.

var paths = {
  scss: 'scss/',
  content: 'content/',
  includes: 'includes/',
  assets: 'assets/',
  build: 'build/',
  templates: {
    pages: 'templates/pages/',
    objects: 'templates/objects/'
  },
  built : {
    assets: 'build/assets/',
    css: 'build/assets/css/'
  },
  cdn: {
    customer_stories: 'https://d1qmdf3vop2l07.cloudfront.net/optimizely-marketer-assets.cloudvent.net/raw/customer-stories/customer-stories-pages/'
  },
  bsyncCSS: 'position:fixed;top:5px;right:5px;width:10px;height:10px;background:#c82144;border-radius:50%;overflow:hidden;color:#c82144;z-index:99999'
};

module.exports = {
  paths: paths
}
