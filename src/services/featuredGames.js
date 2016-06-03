export default {
  getFeaturedGames(callback) {
    const url = this.url('/observer-mode/rest/featured');
    this.executeRequest(url, callback);
  },
};
