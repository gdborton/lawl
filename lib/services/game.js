var executeRequest = require('../util').executeRequest;
var serviceVersion = 'v1.3';
var game = {
    getRecentGamesBySummonerId: function (summonerId, callback) {
        var url = this.url('/api/lol/<%- region %>/' + serviceVersion + '/game/by-summoner/' + summonerId + '/recent');
        executeRequest(url, callback);
    }
};



module.exports = game;