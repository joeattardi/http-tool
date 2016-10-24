const _ = require('lodash');

exports.processHeaders = function processHeaders(headerParams, options) {
  if (headerParams) {
    const customHeaders = _.isArray(headerParams) ? headerParams : [ headerParams ];
    customHeaders.forEach(header => {
      const keyValuePair = header.split(':').map(str => str.trim());
      options.headers[keyValuePair[0]] = keyValuePair[1];
    });
  }
}

