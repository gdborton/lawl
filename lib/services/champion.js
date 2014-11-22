var executeRequest = require('../util').executeRequest;
var serviceVersion = 'v1.2';
var champion = {
    getChampions: function (callback) {
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/champion');
        executeRequest(url, callback);
    },
    getChampionById: function (championId, callback) {
        var url = this.url('/api/lol/<%-region%>/' + serviceVersion + '/champion/' + championId);
        executeRequest(url, callback);
    }
};

module.exports = champion;