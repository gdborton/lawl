import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getChampions', (t) => {
  client.champion.getChampions(noop);
  shouldCallUrlMatching('/api/lol/na/v1.2/champion', t);
});

test('getChampionById', (t) => {
  client.champion.getChampionById({ championId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/na/v1.2/champion/1', t);
});
