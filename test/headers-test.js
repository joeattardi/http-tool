const chai = require('chai');
const expect = chai.expect;

const headers = require('../src/headers');

describe('Headers', function () {
  describe('#processHeaders', function () {
    it('handles a single custom header', function () {
      const headerArg = 'X-My-Header: foobar';
      const options = { headers: {} };
      headers.processHeaders(headerArg, options);
      expect(options.headers).to.deep.equal({ 'X-My-Header': 'foobar' });
    });

    it('handles multiple custom headers', function () {
      const headerArg = ['X-My-Header: foobar', 'X-My-Other-Header: foobaz'];
      const options = { headers: {} };
      headers.processHeaders(headerArg, options);
      expect(options.headers).to.deep.equal({
        'X-My-Header': 'foobar',
        'X-My-Other-Header': 'foobaz'
      });
    });

    it('leaves options untouched if no headers are passed', function () {
      const options = { headers: {} };
      headers.processHeaders(undefined, options);
      expect(options.headers).to.deep.equal({});
    });
  });
});
