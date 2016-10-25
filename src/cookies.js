'use strict';

const _ = require('lodash');
const request = require('request');
const debug = require('debug')('cookies');

function addCookie(jar, cookie, url) {
  debug(`Adding cookie: ${cookie}`);
  jar.setCookie(request.cookie(cookie), url);
}

exports.processCookies = function handleCookies(cookieParams, options) {
  if (cookieParams) {
    const jar = request.jar();
    options.jar = jar;

    const cookies = _.isArray(cookieParams) ? cookieParams : [ cookieParams ];
    cookies.forEach(cookie => addCookie(jar, cookie, options.url));
  }
};
