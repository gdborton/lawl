import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getChampionList', t => {
  client.staticData.getChampionList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/champion', t);
});

test('getChampionById', t => {
  client.staticData.getChampionById({ championId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/champion/1', t);
});

test('getItemList', t => {
  client.staticData.getItemList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/item', t);
});

test('getItemById', t => {
  client.staticData.getItemById({ itemId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/item/1', t);
});

test('getLanguageStrings', t => {
  client.staticData.getLanguageStrings({}, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/language-strings', t);
});

test('getSupportedLanguages', t => {
  client.staticData.getSupportedLanguages(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/languages', t);
});

test('getMapData', t => {
  client.staticData.getMapData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/map', t);
});

test('getMasteryList', t => {
  client.staticData.getMasteryList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/mastery', t);
});

test('getMasteryById', t => {
  client.staticData.getMasteryById({ masteryId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/mastery/1', t);
});

test('getRealmData', t => {
  client.staticData.getRealmData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/realm', t);
});

test('getRuneList', t => {
  client.staticData.getRuneList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/rune', t);
});

test('getRuneById', t => {
  client.staticData.getRuneById({ runeId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/rune/1', t);
});

test('getSummonerSpellList', t => {
  client.staticData.getSummonerSpellList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/summoner-spell', t);
});

test('getSummonerSpellById', t => {
  client.staticData.getSummonerSpellById({ summonerSpellId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/summoner-spell/1', t);
});

test('getVersionData', t => {
  client.staticData.getVersionData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/versions', t);
});
