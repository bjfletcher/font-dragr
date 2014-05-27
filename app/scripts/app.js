/*!
 * font dragr
 * https://github.com/ryanseddon/font-dragr
 * Copyright (c) 2009 - 2013 Ryan Seddon
 * released under the MIT License
 * http://ryanseddon.mit-license.org
*/
'use strict';

angular.module('fdApp', ['ngRoute', 'angularFileUpload'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

}]);
