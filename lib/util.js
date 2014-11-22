var request = require('request');
var _ = require('lodash');
var RateLimiter = require('limiter').RateLimiter;

setInterval(function () {
    util.requestsPerSecond = 0;
}, 1000);

var util = {
    limiter: new RateLimiter(1, 1200),
    executeRequest: function (url, callback) {
        util.outstandingRequests++;
        util.limiter.removeTokens(1, function () {
            util.requestsPerSecond++;
            request(url, function (error, res, body) {
                var returnObject = {};

                if (!error) {
                    if (res.statusCode === 200 && body.length !== 0) {
                        returnObject = JSON.parse(body);
                    } else {
                        error = new Error('The network request succeeded, but found a ' + res.statusCode + ' status code instead of a 200 OK. ' + url);
                    }
                }

                if (_.isFunction(callback)) {
                    callback(error, returnObject);
                }
                util.outstandingRequests--;
            });
        });
    },
    setRateLimit: function (rate) {
        util.limiter.tokenBucket.interval = rate;
    },
    outstandingRequests: 0,
    requestsPerSecond: 0
};

module.exports = util;