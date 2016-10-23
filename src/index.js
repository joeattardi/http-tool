'use strict';

const request = require('request');
const chalk = require('chalk');

const pkg = require('../package.json');
const outputFormatter = require('./output-formatter');
const args = require('./cli-args');

const url = args._[0]; 
if (!url) {
  console.error('You didn\'t specify a URL');
  process.exit(1);
}

const startTime = Date.now();

console.log(args);

const options = {
  url,
  headers: {
    'User-Agent': `http-tool/${pkg.version}`
  }
};

request(options, (error, response, body) => {
  if (error) {
    if (error.syscall === 'getaddrinfo' && error.errno === 'ENOTFOUND') {
      console.error(`Unable to resolve host ${error.hostname}`);
    } else if (error.syscall === 'connect' && error.errno === 'ECONNREFUSED') {
      console.error(`Unable to connect to ${url}: Connection refused`);
    } else {
      console.error('An unexpected error has occurred.');
      console.error(error);
    }

    process.exit(1);
  }

  if (!args['body-only']) {
    console.log(outputFormatter.formatStatusLine(response));
    console.log('');
    console.log(outputFormatter.formatHeaders(response.rawHeaders));
    console.log('');
  }

  if (!args['headers-only']) {
    console.log(body);
  }

  const endTime = Date.now();
  console.log(`Completed in ${(endTime - startTime) / 1000} sec.`);

  //console.log(response);
});
