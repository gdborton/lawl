import test from 'ava';
import Client from '../src/Client';
import sinon from 'sinon';
import request from 'request';

const commonOptions = {
  apiKey: process.env.LEAGUE_API_KEY,
  rateLimit: 100,
};

let stubbedGet;
test.beforeEach(() => {
  stubbedGet = sinon.stub(request, 'get');
});

test.afterEach.always(() => {
  stubbedGet.restore();
});

test('Client is instantiatable, and remembers options', (t) => {
  const client = new Client(commonOptions);
  const message = 'Rate limit should match the contructor options.';
  t.is(client.rateLimit, commonOptions.rateLimit, message);
});

test('Client rateLimit defaults to 10.', (t) => {
  const client = new Client();
  t.is(client.rateLimit, 10);
});

test('Client defaults to na', (t) => {
  const client = new Client(commonOptions);
  t.is(client.region, 'na');
});

test('Client has each service defined', (t) => {
  const client = new Client(commonOptions);
  const services = [
    'champion',
    'championMastery',
    'currentGame',
    'featuredGames',
    'game',
    'league',
    'staticData',
    // 'status',
    // 'match',
    // 'matchList',
    // 'stats',
    // 'summoner',
    // 'team',
  ];

  services.forEach(service => {
    t.truthy(client[service], `client.${service} should be defined.`);
  });
});

test.cb('Client properly rateLimits requests', t => {
  const client = new Client({ rateLimit: 10 }); // allow 10 requests/second
  let x;
  for (x = 0; x < 20; x++) {
    client.executeRequest('bunk', () => {}); // attempt to make 20 requests
  }

  setTimeout(() => {
    t.is(stubbedGet.callCount, 10);
  }, 50); // after 50 ms only 10 of the requests should have gone through.

  setTimeout(() => {
    t.is(stubbedGet.callCount, 20);
    t.end();
  }, 1100); // after 1.1 seconds the rest of the requests should have gone through.
});
