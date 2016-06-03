const serviceVersion = 'v1.3';

export default {
  getRecentGamesBySummonerId({ summonerId }, callback) {
    const url = this.url(`/api/lol/${this.region}/${serviceVersion}/game/by-summoner/${summonerId}/recent`); // eslint-disable-line max-len
    this.executeRequest(url, callback);
  },
};
