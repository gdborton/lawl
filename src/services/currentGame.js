export default {
  getCurrentGameBySummonerId({ summonerId }, callback) {
    const url = this.url(`/observer-mode/rest/consumer/getSpectatorGameInfo/${this.platformId}/${summonerId}`);
    this.executeRequest(url, callback);
  }
}
