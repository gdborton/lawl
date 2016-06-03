const prefix = '/observer-mode/rest/consumer';
export default {
  getCurrentGameBySummonerId({ summonerId }, callback) {
    const url = this.url(`${prefix}/getSpectatorGameInfo/${this.platformId}/${summonerId}`);
    this.executeRequest(url, callback);
  },
};
