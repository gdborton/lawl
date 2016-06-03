import champion from './services/Champion';
import services from './services';

const defaultOptions = {
  rateLimit: 10,
  region: 'na',
  platformId: 'NA1',
  apiKey: '',
};

function initializeServices() {
  Object.keys(services).forEach(serviceName => {
    this[serviceName] = {};
    Object.keys(services[serviceName]).forEach(operationName => {
      this[serviceName][operationName] = services[serviceName][operationName].bind(this);
    });
  });
}

class Client {
  constructor({ rateLimit = 10, region = 'na', apiKey = '', platformId = 'NA1' } = defaultOptions) {
    this.rateLimit = rateLimit;
    this.region = region;
    this.apiKey = apiKey;
    this.platformId = 'NA1'
    initializeServices.call(this);
  }

  request(url, callback) {

  }

  url(path) {
    const url = `https://na.api.pvp.net${path}`;
    const qsCharacter = url.indexOf('?') === -1 ? '?' : '&';
    return `${url}${qsCharacter}api_key=${this.apiKey}`;
  }

  executeRequest(url, callback) {

  }
}

export default Client;
