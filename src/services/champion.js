const serviceVersion = 'v1.2';

export default {
  getChampions(callback) {
    const url = this.url(`/api/lol/${this.region}/${serviceVersion}/champion`);
    this.executeRequest(url, callback);
  },

  getChampionById(opts, callback) {
    const url = this.url(`/api/lol/${this.region}/v1.2/champion/${opts.championId}`);
    this.executeRequest(url, callback);
  },
};
