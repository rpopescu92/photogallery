(function () {
    'use strict';

    var app = angular.module('photogallery');

    var GalleryController = function ($scope, GalleryService) {
        $scope.photos = [];
        GalleryService.getPhotos($scope.searchWord)
            .then(function (data) {
                data = data.replace(/\t/g, ' ');        //replace all tabs with space
                data = data.replace(/'/g, '"');           //replace all '' with ""
                var parsedData = JSON.parse(data);
                $scope.photos = parsedData.items;
            }).catch(function (error) {
                console.log('Error with status: ' + error.status);
            });

        $scope.loadPhotos = function (searchWord) {
            GalleryService.getPhotos($scope.searchWord)
                .then(function (data) {
                    data = data.replace(/\t/g, ' ');        //replace all tabs with space
                    data = data.replace(/'/g, '"');           //replace all '' with ""
                    var parsedData = JSON.parse(data);
                    $scope.photos = parsedData.items;
                });
        }

    };

    app.controller('GalleryController', ['$scope', 'GalleryService', GalleryController]);

})();