angular.module('Sensors', ['Sensors.cfg', 'ngCookies', 'ngRoute', 'ngMap', 'chart.js'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Notification', {
                controller: 'NotificationController',
                templateUrl: 'Html/Notification.view.html',
                controllerAs: 'nc'
            })

            .when('/Devices', {
                controller: 'DevicesController',
                templateUrl: 'Html/Devices.view.html',
                controllerAs: 'dc'
            })

            .when('/Admin', {
                controller: 'AdminController',
                templateUrl: 'Html/Admin.view.html',
                controllerAs: 'dc'
            })
            .otherwise({ redirectTo: '/Notification' });

    }]);

$('#naviBar > li').on('click', function (e) {
    $('#naviBar > li').removeClass('textUnderline');
    $(this).addClass('textUnderline');
});  