import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getRecentGamesBySummonerId', t => {
  client.game.getRecentGamesBySummonerId({ summonerId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/na/v1.3/game/by-summoner/1/recent', t);
});
