export default {
  getChampionMasteryByPlayerId({ championId, playerId }, callback) {
    const url = this.url(`/championmastery/location/${this.platformId}/player/${playerId}/champion/${championId}`);
    this.executeRequest(url, callback);
  },

  getChampionMasteriesByPlayerId({ playerId }, callback) {
    const url = this.url(`/championmastery/location/${this.platformId}/player/${playerId}/champions`);
    this.executeRequest(url, callback);
  },

  getPlayerMasteryScore({ playerId }, callback) {
    const url = this.url(`/championmastery/location/${this.platformId}/player/${playerId}/score`);
    this.executeRequest(url, callback);
  },

  getTopChampionMasteriesForPlayer({ playerId, count }, callback) {
    const url = this.url(`/championmastery/location/${this.platformId}/player/${playerId}/topchampions?count=${count}`);
    this.executeRequest(url, callback);
  },
}
