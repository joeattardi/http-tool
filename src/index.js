'use strict';

const request = require('request');
const chalk = require('chalk');

const outputFormatter = require('./output-formatter');

const url = process.argv[2];

const startTime = Date.now();

request(url, (error, response, body) => {
  console.log(outputFormatter.formatStatusLine(response));
  console.log('');
  console.log(outputFormatter.formatHeaders(response.rawHeaders));
  console.log('');
  console.log(body);

  const endTime = Date.now();
  console.log(`Completed in ${(endTime - startTime) / 1000} sec.`);

  //console.log(response);
});
