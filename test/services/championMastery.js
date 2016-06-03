import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getChampionMasteryByPlayerId', (t) => {
  client.championMastery.getChampionMasteryByPlayerId({
    playerId: 1,
    championId: 10,
  }, noop);
  shouldCallUrlMatching('/championmastery/location/NA1/player/1/champion/10', t);
});

test('getChampionMasteriesByPlayerId', (t) => {
  client.championMastery.getChampionMasteriesByPlayerId({ playerId: 1 }, noop);
  shouldCallUrlMatching('/championmastery/location/NA1/player/1/champions', t);
});

test('getPlayerMasteryScore', (t) => {
  client.championMastery.getPlayerMasteryScore({ playerId: 1 }, noop);
  shouldCallUrlMatching('/championmastery/location/NA1/player/1/score', t);
});

test('getTopChampionMasteriesForPlayer', (t) => {
  client.championMastery.getTopChampionMasteriesForPlayer({ playerId: 1, count: 11 }, noop);
  shouldCallUrlMatching('/championmastery/location/NA1/player/1/topchampions?count=11', t);
});
