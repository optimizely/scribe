var shell = require('shelljs');

module.exports = function() {
  shell.cd(__dirname);
  shell.exec('./node_modules/.bin/gulp build assets --marketingCompile --cwd' + __dirname);
};
