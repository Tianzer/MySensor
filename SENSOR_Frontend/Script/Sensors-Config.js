(function () {
    angular
        .module('Sensors.cfg', [])
        .constant('cfg', {
            TSServer: 'http://tslib.riekerinc.dev.riekerinc.com',
            AcceptHost_1: 'Riekerinc.com',
            AcceptHost_2: 'Riekersolution.com',
            RejectUrl: 'http://www.riekerinc.com/', // go to [RejectUrl] when host name is not [AcceptHost_1], [AcceptHost_2]
            backendServer: 'http://localhost:63733'
        });
})();