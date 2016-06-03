import test from 'ava';
import {
  apiKey,
  noop,
  client,
  stubbedRequest,
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
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/item', t); // Retrieves item list. (REST)
});

test('getItemById', t => {
  client.staticData.getItemById({ itemId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/item/1', t); // Retrieves item by its unique id. (REST)
});

test('getLanguageStrings', t => {
  client.staticData.getLanguageStrings({}, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/language-strings', t);// Retrieve language strings data. (REST)
});

test('getSupportedLanguages', t => {
  client.staticData.getSupportedLanguages(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/languages', t); // Retrieve supported languages data. (REST)
});

test('getMapData', t => {
  client.staticData.getMapData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/map', t); // Retrieve map data. (REST)
});

test('getMasteryList', t => {
  client.staticData.getMasteryList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/mastery', t); // Retrieves mastery list. (REST)
});

test('getMasteryById', t => {
  client.staticData.getMasteryById({ masteryId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/mastery/1', t); // Retrieves mastery item by its unique id. (REST)
});

test('getRealmData', t => {
  client.staticData.getRealmData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/realm', t); // Retrieve realm data. (REST)
});

test('getRuneList', t => {
  client.staticData.getRuneList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/rune', t); // Retrieves rune list. (REST)
});

test('getRuneById', t => {
  client.staticData.getRuneById({ runeId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/rune/1', t); // Retrieves rune by its unique id. (REST)
});

test('getSummonerSpellList', t => {
  client.staticData.getSummonerSpellList(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/summoner-spell', t);// Retrieves summoner spell list. (REST)
});

test('getSummonerSpellById', t => {
  client.staticData.getSummonerSpellById({ summonerSpellId: 1 }, noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/summoner-spell/1', t); // Retrieves summoner spell by its unique id. (REST)
});

test('getVersionData', t => {
  client.staticData.getVersionData(noop);
  shouldCallUrlMatching('/api/lol/static-data/na/v1.2/versions', t); // retrieve version data
});
