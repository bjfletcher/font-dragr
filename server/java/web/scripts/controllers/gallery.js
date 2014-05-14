'use strict';

angular.module('fdApp').controller('GalleryCtrl', ['$scope', '$http', function($scope, $http) {

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

}]);
