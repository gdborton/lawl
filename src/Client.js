import champion from './services/Champion';
import services from './services';
import { RateLimiter } from 'limiter';
import request from 'request';

function initializeServices() {
  Object.keys(services).forEach(serviceName => {
    this[serviceName] = {};
    Object.keys(services[serviceName]).forEach(operationName => {
      this[serviceName][operationName] = services[serviceName][operationName].bind(this);
    });
  });
}

// This is the default rate limit before any given app is approved.
// 500 requests / 10 minutes / 60 seconds
const defaultRateLimit = 500 / 10 / 60;

class Client {
  constructor({ rateLimit = 10, region = 'na', apiKey = '', platformId = 'NA1' } = {}) {
    this.rateLimiter = new RateLimiter(rateLimit, 'second');
    this.rateLimit = rateLimit;
    this.region = region;
    this.apiKey = apiKey;
    this.platformId = 'NA1'
    initializeServices.call(this);
  }

  url(path) {
    const url = `https://na.api.pvp.net${path}`;
    const qsCharacter = url.indexOf('?') === -1 ? '?' : '&';
    return `${url}${qsCharacter}api_key=${this.apiKey}`;
  }

  executeRequest(url, callback) {
    this.rateLimiter.removeTokens(1, function() {
      request.get(url, callback);
    });
  }
}

export default Client;
