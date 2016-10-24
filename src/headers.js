const _ = require('lodash');

exports.processHeaders = function processHeaders(headerParams, options) {
  if (headerParams) {
    const customHeaders = _.isArray(headerParams) ? headerParams : [ headerParams ];
    customHeaders.forEach(header => {
      const [key, value] = header.split(':').map(str => str.trim());
      options.headers[key] = value;
    });
  }
}

