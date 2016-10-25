#! /usr/bin/env node

'use strict';

const _ = require('lodash');
const request = require('request');
const chalk = require('chalk');
const jsome = require('jsome');
const debug = require('debug')('index');

const pkg = require('../package.json');
const outputFormatter = require('./output-formatter');
const args = require('./cli-args');
const headers = require('./headers');
const cookies = require('./cookies');

function validateUrl() {
  let url = args._[0]; 
  if (!url) {
    console.error('You didn\'t specify a URL');
    process.exit(1);
  } else if (!url.match(/^https?:\/\//)) {
    url = `http://${url}`;
  }

  return url;
}

function handleError(error) {
  if (error.syscall === 'getaddrinfo' && error.errno === 'ENOTFOUND') {
    console.error(`Unable to resolve host ${error.hostname}`);
  } else if (error.syscall === 'connect' && error.errno === 'ECONNREFUSED') {
    console.error(`Unable to connect to ${options.url}: Connection refused`);
  } else {
    console.error('An unexpected error has occurred.');
    console.error(error);
  }

  process.exit(1);
}


const startTime = Date.now();

const options = {
  method: args.method,
  url: validateUrl(),
  headers: {
    'User-Agent': `http-tool/${pkg.version}`
  }
};

if (args.data) {
  options.body = args.data;
}

headers.processHeaders(args.header, options);
cookies.processCookies(args.cookie, options);

debug('Using options:', options);

request(options, (error, response, body) => {
  if (error) {
    handleError(error);
  }

  if (!args['body-only']) {
    console.log(outputFormatter.formatStatusLine(response));
    console.log('');
    console.log(outputFormatter.formatHeaders(response.rawHeaders));
    console.log('');
  }

  if (!args['headers-only']) {
    const contentType = response.headers['content-type'];
    if (contentType.indexOf('application/json') === 0) {
      jsome.parse(body);
    } else {
      console.log(body);
    }
  }

  const endTime = Date.now();
  console.log(`Completed in ${(endTime - startTime) / 1000} sec.`);

  //console.log(response);
});
