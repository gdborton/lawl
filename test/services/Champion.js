import test from 'ava';
import Champion from '../../lib/services/Champion';
import Service from '../../lib/Service';
import Client from '../../lib/Client';
import sinon from 'sinon';

const apiKey = process.env.LEAGUE_API_KEY;
let client;
let stubbedRequest;
test.beforeEach(() => {
  stubbedRequest = sinon.stub(Service.prototype, 'request');
  client = new Client({
    region: 'na',
  });
});

test.afterEach(() => {
  stubbedRequest.restore();
});

test('getChampions', (t) => {
  client.champion.getChampions({}, (err, response) => {});
  t.truthy(stubbedRequest.calledWith(`https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=${apiKey}`));
});
