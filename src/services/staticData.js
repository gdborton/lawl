const serviceVersion = 'v1.2';
const prefix = `/api/lol/static-data/na/${serviceVersion}`;

export default {
  getChampionList(callback) {
    const url = this.url(`${prefix}/champion`);
    this.executeRequest(url, callback);
  },

  getChampionById({ championId }, callback) {
    const url = this.url(`${prefix}/champion/${championId}`);
    this.executeRequest(url, callback);
  },

  getItemList(callback) {
    const url = this.url(`${prefix}/item`);
    this.executeRequest(url, callback);
  },

  getItemById({ itemId }, callback) {
    const url = this.url(`${prefix}/item/${itemId}`);
    this.executeRequest(url, callback);
  },

  getLanguageStrings(opts, callback) {
    const url = this.url(`${prefix}/language-strings`);
    this.executeRequest(url, callback);
  },

  getSupportedLanguages(callback) {
    const url = this.url(`${prefix}/languages`);
    this.executeRequest(url, callback);
  },

  getMapData(callback) {
    const url = this.url(`${prefix}/map`);
    this.executeRequest(url, callback);
  },

  getMasteryList(callback) {
    const url = this.url(`${prefix}/mastery`);
    this.executeRequest(url, callback);
  },

  getMasteryById({ masteryId }, callback) {
    const url = this.url(`${prefix}/mastery/${masteryId}`);
    this.executeRequest(url, callback);
  },

  getRealmData(callback) {
    const url = this.url(`${prefix}/realm`);
    this.executeRequest(url, callback);
  },

  getRuneList(callback) {
    const url = this.url(`${prefix}/rune`);
    this.executeRequest(url, callback);
  },

  getRuneById({ runeId }, callback) {
    const url = this.url(`${prefix}/rune/${runeId}`);
    this.executeRequest(url, callback);
  },

  getSummonerSpellList(callback) {
    const url = this.url(`${prefix}/summoner-spell`);
    this.executeRequest(url, callback);
  },

  getSummonerSpellById({ summonerSpellId }, callback) {
    const url = this.url(`${prefix}/summoner-spell/${summonerSpellId}`);
    this.executeRequest(url, callback);
  },

  getVersionData(callback) {
    const url = this.url(`${prefix}/versions`);
    this.executeRequest(url, callback);
  },
};
