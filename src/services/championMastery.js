const prefix = '/championmastery/location';
export default {
  getChampionMasteryByPlayerId({ championId, playerId }, callback) {
    const url = this.url(`${prefix}/${this.platformId}/player/${playerId}/champion/${championId}`);
    this.executeRequest(url, callback);
  },

  getChampionMasteriesByPlayerId({ playerId }, callback) {
    const url = this.url(`${prefix}/${this.platformId}/player/${playerId}/champions`);
    this.executeRequest(url, callback);
  },

  getPlayerMasteryScore({ playerId }, callback) {
    const url = this.url(`${prefix}/${this.platformId}/player/${playerId}/score`);
    this.executeRequest(url, callback);
  },

  getTopChampionMasteriesForPlayer({ playerId, count }, callback) {
    const query = `?count=${count}`;
    const url = this.url(`${prefix}/${this.platformId}/player/${playerId}/topchampions${query}`);
    this.executeRequest(url, callback);
  },
};
