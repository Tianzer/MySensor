angular.module('Sensors', ['Sensors.cfg', 'ngCookies', 'ngRoute'])
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

            //// example: http://localhost:60764/Index.html#!/confirmMember/asdas/ssss
            //.when('/confirmMember/:param1/:param2', {
            //    controller: 'ConfirmController',
            //    templateUrl: 'Html/confirmMember.view.html',
            //    controllerAs: 'cc'
            //})

            .otherwise({ redirectTo: '/Notification' });
    }]);

$('#naviBar > li').on('click', function (e) {
    $('#naviBar > li').removeClass('textUnderline');
    $(this).addClass('textUnderline');
});  