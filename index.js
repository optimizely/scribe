var shell = require('shelljs');

module.exports = function() {
  shell.exec('./node_modules/.bin/gulp');
};
