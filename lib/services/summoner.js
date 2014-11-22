var executeRequest = require('../util').executeRequest;
var _ = require('lodash');
var serviceVersion = 'v1.4';

var summoner = {
    // TODO - Consider the 40 summoner limit.
    getSummonersByName: function (summonerNames, callback) {
        summonerNames = _.isArray(summonerNames) ? summonerNames.join(',') : summonerNames;
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/summoner/by-name/' + summonerNames);
        executeRequest(url, callback);
    },
    // TODO - Consider the 40 summoner limit.
    getSummoners: function (summonerIds, callback) {
        summonerIds = _.isArray(summonerIds) ? summonerIds.join(',') : summonerIds;
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/summoner/' + summonerIds);
        executeRequest(url, callback);
    },
    // TODO - Consider the 40 summoner limit.
    getMasteriesBySummonerIds: function (summonerIds, callback) {
        summonerIds = _.isArray(summonerIds) ? summonerIds.join(',') : summonerIds;
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/summoner/' + summonerIds + '/masteries');
        executeRequest(url, callback);
    },
    // TODO - Consider the 40 summoner limit.
    getSummonerNameBySummonerIds: function (summonerIds, callback) {
        summonerIds = _.isArray(summonerIds) ? summonerIds.join(',') : summonerIds;
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/summoner/' + summonerIds + '/name');
        executeRequest(url, callback);
    },
    // TODO - Consider the 40 summoner limit.
    getSummonerRunesBySummonerIds: function (summonerIds, callback) {
        summonerIds = _.isArray(summonerIds) ? summonerIds.join(',') : summonerIds;
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/summoner/' + summonerIds + '/runes');
        executeRequest(url, callback);
    }
};

module.exports = summoner;