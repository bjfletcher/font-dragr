'use strict';

angular.module('fdApp').controller('AppCtrl', ['$scope', '$location', '$filter', '$upload', 'Font', function ($scope, $location, $filter, $upload, Font) {

    $scope.routeIs = function (route) {
        return $location.path() === route;
    };
    $scope.fonts = [{
        name: 'VomZom',
        size: '15kb',
        author: 'D.Rock',
        authorurl: 'http://defaulterror.com/typo.htm',
        license: 'Free for personal and commercial use.',
        licenseurl: 'http://defaulterror.com/typo.htm#Font%20License%20Information',
        active: true
    }];

    $scope.font = Font;

    $scope.handleDrop = function (dt) {
        // IE doesn't like anything other than 'Text'
        var data = dt.getData('text/plain'),
            files = dt.files || false,
            payload = files || data,
            isFile = files && files.length;

        $scope.$emit('addFont', payload, isFile);

        $scope.$emit('uploadFont', payload);
    };

    $scope.year = (new Date()).getFullYear();

    $scope.addFont = function (scope, fonts, file) {
        var files,
            fileFilter = $filter('file'),
            jsonfile = $filter('jsonfile'),
            fontface = $filter('fontfacecss');

        if(file) {
            files = fileFilter(fonts);
        } else {
            files = jsonfile(fonts);
        }

        $scope.fonts = $scope.fonts.concat(files);

        $scope.$emit('injectfontface', fontface(files));
    };

    $scope.$on('addFont', $scope.addFont);

    $scope.uploadFont = function (scope, payload) {

        var files = payload.length ? payload : [payload];

        var progress = function(evt) {
            console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total, 10));
        };

        var success = function(data, status, headers, config) {
            // file is uploaded successfully
            console.log(data, status, headers, config);
        };

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $upload.upload({
                url: 'upload',
                file: file
            }).progress(progress).success(success);
        }

    };

    $scope.$on('uploadFont', $scope.uploadFont);

}]);
