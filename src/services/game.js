const serviceVersion = 'v1.3';

export default {
  getRecentGamesBySummonerId({ summonerId }, callback) {
    const url = this.url(`/api/lol/${this.region}/${serviceVersion}/game/by-summoner/${summonerId}/recent`);
    this.executeRequest(url, callback);
  }
}
