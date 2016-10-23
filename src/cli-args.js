'use strict';
const pkg = require('../package.json');

const yargs = require('yargs');

module.exports = yargs
  .option('headers-only', {
    alias: 'r',
    describe: 'Only include the response headers in the output',
    type: 'boolean'
  })
  .option('body-only', {
    alias: 'b',
    describe: 'Only include the response body in the output',
    type: 'boolean'
  })
  .usage('Usage: $0 [options] <URL>')
  .version(pkg.version)
  .help()
  .argv;
