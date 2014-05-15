'use strict';

angular.module('fdApp')
    .filter('file', function () {
        return function(files) {
            var fonts = [], droppedFullFileName, droppedFileName, droppedFileSize, font,
                acceptedFileExtensions = /\.(ttf|otf|woff|eof)$/i,
                url = window.URL || window.webkitURL || {};

            angular.forEach(files, function(file) {
                droppedFullFileName = file.name;

                if(droppedFullFileName.match(acceptedFileExtensions)) {
//                    droppedFileName = droppedFullFileName.replace(/\.\w+$/,''); // Removes file extension from name
                    droppedFileName = droppedFullFileName;
                    droppedFileName = droppedFileName.replace(/\W+/g, '-'); // Replace any non alpha numeric characters with -
                    droppedFileSize = Math.round(file.size/1024) + 'kb';
                    
                    font = url.createObjectURL(file);
                    
                    fonts.push({
                        result: font,
                        name: droppedFileName,
                        size: droppedFileSize,
                        url: 'gallery/' + droppedFullFileName,
                        author: '',
                        authorurl: '',
                        license: '',
                        licenseurl: ''
                    });
                } else {
                    alert('Invalid file extension. Will only accept ttf, otf, woff or eof font files');
                }
            });
            return fonts;
        };
  });
