'use strict';

const _ = require('lodash');
const chalk = require('chalk');

function formatHeaders(rawHeaders) {
  const headerPairs = _.chunk(rawHeaders, 2);
  const headers = [];

  headerPairs.forEach(headerPair => {
    headers.push(`${chalk.magenta(headerPair[0])}: ${chalk.yellow.bold(headerPair[1])}`);
  });

  return headers.sort().join('\n');
}

function formatStatusLine(response) {
  let str = '';

  str += chalk.bold('HTTP');
  str += '/';
  str += chalk.green(response.httpVersion);
  str += ' ';
  str += chalk.cyan(response.statusCode);
  str += ' ';
  str += chalk.magenta(response.statusMessage);

  return str;
}

module.exports = {
  formatHeaders,
  formatStatusLine
};
