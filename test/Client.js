import test from 'ava';
import Client from '../src/Client';

const commonOptions = {
  apiKey: process.env.LEAGUE_API_KEY,
  rateLimit: 100,
};

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
