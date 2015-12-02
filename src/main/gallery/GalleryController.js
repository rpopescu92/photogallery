(function () {
    'use strict';

    var app = angular.module('photogallery');

    var GalleryController = function($scope, GalleryService){
        $scope.photos = [];
        GalleryService.getPhotos()
            .then(function (data) {
                data = data.replace(/\t/g, ' ');        //replace all tabs with space
                data = data.replace(/'/g, '"');           //replace all '' with ""
                var parsedData = JSON.parse(data);
                console.log(parsedData);
                $scope.photos = parsedData.items;
            });

    };

    app.controller('GalleryController', ['$scope', 'GalleryService', GalleryController]);

})();