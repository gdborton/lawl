import test from 'ava';
import Client from '../lib/Client';
import Service from '../lib/Service';

const commonOptions = {
  apiKey: process.env.LEAGUE_API_KEY,
  rateLimit: 10,
};

test('Client is instantiatable, and remembers options', (t) => {
  const client = new Client(commonOptions);
  const message = 'Rate limit should match the contructor options.';
  t.is(client.rateLimit, commonOptions.rateLimit, message);
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
    'lolStaticData',
    'lolStatus',
    'match',
    'matchList',
    'stats',
    'summoner',
    'team',
  ];

  services.forEach(service => {
    const message = `client.${service} should be an instance of Service.`;
    t.truthy(client.service instanceof Service, message);
  });
});
