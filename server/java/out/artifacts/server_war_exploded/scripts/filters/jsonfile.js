'use strict';

angular.module('fdApp')
    .filter('jsonfile', function () {
        return function (data) {
            if(!data.error) {
                var font = [{
                    name: data.name,
                    size: data.size,
                    license: data.license,
                    licenseurl: data.licenseurl,
                    author: data.author,
                    authorurl: data.authorurl,
                    result: data.url
                }];
                return font;
            } else {
                alert(data.error);
            }
        };
});
