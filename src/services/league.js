const serviceVersion = 'v2.5';
const prefix = `/api/lol/na/${serviceVersion}/league`;

export default {
  getLeaguesBySummonerIds({ summonerIds }, callback) {
    const url = this.url(`${prefix}/by-summoner/${summonerIds.join(',')}`);
    this.executeRequest(url, callback);
  },

  getLeagueEntriesBySummonerIds({ summonerIds }, callback) {
    const url = this.url(`${prefix}/by-summoner/${summonerIds.join(',')}/entry`);
    this.executeRequest(url, callback);
  },

  getLeaguesByTeamIds({ teamIds }, callback) {
    const url = this.url(`${prefix}/by-team/${teamIds.join(',')}`);
    this.executeRequest(url, callback);
  },

  getLeagueEntriesByTeamIds({ teamIds }, callback) {
    const url = this.url(`${prefix}/by-team/${teamIds.join(',')}/entry`);
    this.executeRequest(url, callback);
  },

  getChallengerTierLeaguesByType({ type }, callback) {
    const url = this.url(`${prefix}/challenger?type=${type}`);
    this.executeRequest(url, callback);
  },

  getMasterTierleaguesByType({ type }, callback) {
    const url = this.url(`${prefix}/master?type=${type}`);
    this.executeRequest(url, callback);
  },
}
