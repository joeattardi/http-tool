const chai = require('chai');
const expect = chai.expect;
const chalk = require('chalk');

const outputFormatter = require('../src/output-formatter');

describe('Output Formatter', function () {
  describe('#formatHeaders', function () {
    it('chunks and prints the raw headers', function () {
      const rawHeaders = [
        'X-XSS-Protection',
        '1; mode=block',
        'Content-Type',
        'text/html'
      ];

      const formattedHeaders = chalk.stripColor(outputFormatter.formatHeaders(rawHeaders));
      expect(formattedHeaders).to.equal('Content-Type: text/html\nX-XSS-Protection: 1; mode=block');
    });
  });

  describe('#formatStatusLine', function () {
    it('prints the proper status line format', function () {
      const response = {
        httpVersion: '1.1',
        statusCode: 200,
        statusMessage: 'OK' 
      };

      const formattedString = chalk.stripColor(outputFormatter.formatStatusLine(response));
      expect(formattedString).to.equal('HTTP/1.1 200 OK');
    });
  });
});
