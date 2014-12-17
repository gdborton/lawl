var executeRequest = require('../util').executeRequest;
var serviceVersion = 'v1.2';

var staticData = {
    getChampions: function (callback) {
        var url = this.url('/api/lol/static-data/<%-region%>/' + serviceVersion + '/champion');
        executeRequest(url, callback);
    },
    getVersions: function (callback) {
        var url = this.url('/api/lol/static-data/<%-region%>/' + serviceVersion + '/versions');
        executeRequest(url, callback);
    }
};

module.exports = staticData;
