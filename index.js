var shell = require('shelljs');

module.exports = function() {
  var pwd = shell.pwd();
  shell.cd(__dirname);
  shell.exec('./node_modules/.bin/gulp build sass assets --marketingCompile --cwd' + __dirname);
  shell.cd(pwd);
};
