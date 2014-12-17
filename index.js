var request = require('request');
var _ = require('lodash');
var util = require('./lib/util');

var services = require('./lib/services/services');


var host = 'https://<%- region %>.api.pvp.net';

var Lawl = function (options) {
    this.apiToken = options.apiToken;
    this.region = options.region || 'NA';

    util.setRateLimit(options.rateLimit || 1190);

    this.getChampions = services.champion.getChampions.bind(this);
    this.getChampionById = services.champion.getChampionById.bind(this);

    this.getRecentGamesBySummonerId = services.game.getRecentGamesBySummonerId.bind(this);

    this.getSummonersByName = services.summoner.getSummonersByName.bind(this);
    this.getSummoners = services.summoner.getSummoners.bind(this);
    this.getMasteriesBySummonerIds = services.summoner.getMasteriesBySummonerIds.bind(this);
    this.getSummonerNameBySummonerIds = services.summoner.getSummonerNameBySummonerIds.bind(this);
    this.getSummonerRunesBySummonerIds = services.summoner.getSummonerRunesBySummonerIds.bind(this);

    this.getStaticChampions = services.staticData.getChampions.bind(this);
    this.getVersions = services.staticData.getVersions.bind(this);

    this.url = function (route) {
        var url = host + route + '?api_key=<%- apiToken %>';
        return _.template(url, {region: this.region.toLowerCase(), apiToken: this.apiToken});
    }.bind(this);

    this.requestsPerSecond = function () { return util.requestsPerSecond };
    this.outstandingRequests = function () { return util.outstandingRequests };
};

module.exports = Lawl;
