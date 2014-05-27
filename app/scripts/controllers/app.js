'use strict';

angular.module('fdApp').controller('AppCtrl', ['$scope', '$location', '$filter', '$http', '$upload', 'Font', function ($scope, $location, $filter, $http, $upload, Font) {

    $scope.routeIs = function (route) {
        return $location.path() === route;
    };
    $scope.fonts = [];

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

    $http.get('/gallery/gallery.json')
        .success(function(data){
            $scope.gallery = data;
        });

    $scope.loadFont = function(url) {
        var name = url.split('/').reverse()[0];
        for (var i = 0; i < $scope.gallery.length; i++) {
            var font = $scope.gallery[i];
            if (font.name === name) {
                $scope.$emit('addFont', font);
                break;
            }
        }
    };

    $scope.deleteAllFonts = function() {
        $http.get('/gallery/deleteAll')
            .success(function() {
                $scope.gallery = [];
            });
    };

    $scope.colorScheme = "blackOnWhite";

    $scope.setColorScheme = function(scheme) {
        $scope.colorScheme = scheme;
    };

    $scope.fontSize = 12;

    $scope.incrementFontSize = function(evt) {
        $scope.fontSize += 1;
    };

    $scope.decrementFontSize = function(evt) {
        $scope.fontSize -= 1;
    };

    $scope.initStickyHeader = function() {
        var header = document.querySelector('.sticky-header');
        var origOffsetY = header.offsetTop - 15;
        
        function onScroll(e) {
          window.scrollY >= origOffsetY ? header.classList.add('u-sticky') :
                                          header.classList.remove('u-sticky');
        }
        
        document.addEventListener('scroll', onScroll);
    };

}]);
