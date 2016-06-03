import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getCurrentGameBySummonerId', t => {
  client.currentGame.getCurrentGameBySummonerId({ summonerId: 1 }, noop);
  shouldCallUrlMatching('/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/1', t);
});
