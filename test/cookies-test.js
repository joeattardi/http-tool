'use strict';
const chai = require('chai');
const expect = chai.expect;

const cookies = require('../src/cookies');

describe('Cookies', function () {
  describe('#processCookies', function () {
    it('adds cookies to the cookie jar', function () {
      const options = {
        url: 'http://www.google.com'
      };

      const cookieParams = ['Foo=Bar'];

      cookies.processCookies(cookieParams, options);
      
      const setCookies = options.jar.getCookies(options.url);
      expect(setCookies[0].key).to.equal('Foo');
      expect(setCookies[0].value).to.equal('Bar');
    });
  });
});
